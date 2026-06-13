import React, { useState, useEffect, useMemo, useCallback, Suspense, lazy } from 'react';
import { ROADMAP_AREAS, MODULES } from './data';
import { RoadmapArea } from './types';
import { useRegisterSW } from 'virtual:pwa-register/react';

// Lazy load components safely
const SubjectGrid = lazy(() => import('./components/SubjectGrid'));
const SubjectView = lazy(() => import('./components/SubjectView'));
const Sidebar = lazy(() => import('./components/Sidebar'));
const SettingsView = lazy(() => import('./components/SettingsView'));
const AchievementsView = lazy(() => import('./components/AchievementsView'));
const CalendarView = lazy(() => import('./components/CalendarView'));
const Onboarding = lazy(() => import('./components/Onboarding'));

import PricingModal from './components/PricingModal';
import { 
  ShieldCheck, Search, Bell, User, Sparkles, Menu, X, Zap, Target, 
  BookOpen, Loader2, Home, Award, Settings, WifiOff, CloudDownload, Terminal, Cpu, Info, Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { progressService } from './services/progressService';
import { achievementService } from './services/achievementService';

const MemoizedSidebar = React.memo(Sidebar);

function AppLoader() {
  return (
    <div className="fixed inset-0 bg-black z-[160] flex flex-col items-center justify-center font-mono">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center space-y-4"
      >
        <div className="w-14 h-14 bg-[#1C1C1E] text-[#0A84FF] border border-[#2C2C2E] rounded-2xl flex items-center justify-center shadow-lg">
          <Terminal className="w-6 h-6 animate-pulse" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 justify-center">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-slate-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Loading...</span>
          </div>
          <p className="text-[8px] text-slate-600 uppercase">loading offline mode</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const [isInitializing, setIsInitializing] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('cyber_tpin') !== null && localStorage.getItem('cyber_candidate_name') !== null;
  });
  const [selectedArea, setSelectedArea] = useState<RoadmapArea | null>(null);
  const [view, setView] = useState<'home' | 'settings' | 'achievements' | 'calendar'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  // Triggers stats updates
  const [sessionNonce, setSessionNonce] = useState(0);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Sync state with browser history for back button support
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      if (state) {
        setSelectedArea(state.area || null);
        setView(state.view || 'home');
      } else {
        setSelectedArea(null);
        setView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Initialize history state
    if (!window.history.state) {
      window.history.replaceState({ view: 'home', area: null }, '');
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate utility
  const navigateInternal = useCallback((newView: 'home' | 'settings' | 'achievements' | 'calendar', newArea: RoadmapArea | null = null) => {
    setView(newView);
    setSelectedArea(newArea);
    window.history.pushState({ view: newView, area: newArea }, '');
    setSessionNonce(prev => prev + 1);
  }, []);

  // Artificial loader delay 
  useEffect(() => {
    const timer = setTimeout(() => setIsInitializing(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Real Stats Memoized based on sessionNonce
  const stats = useMemo(() => {
    const progress = progressService.getProgress();
    const completedCount = progress.completedLessons.length;
    const achievementsCount = achievementService.getAchievements().filter(a => a.earned).length;
    const allExams = MODULES.filter(m => m.exam).map(m => m.exam!);
    const examAttemptsCount = Object.values(progress.examAttempts).filter(e => e.passed).length;
    const totalLessons = MODULES.flatMap(m => m.lessons).length;
    
    // Streak days estimate
    const streak = completedCount > 0 ? Math.min(14, completedCount + 2) : 0;
    
    const quizScoresList = Object.values(progress.quizScores);
    const examScoresList = Object.values(progress.examAttempts).map(a => Math.round((a.score / a.total) * 100));
    const allScoresCombined = [...quizScoresList, ...examScoresList];
    const avgAccuracy = allScoresCombined.length > 0
      ? Math.round(allScoresCombined.reduce((acc, s) => acc + s, 0) / allScoresCombined.length)
      : 0;

    return { completedCount, achievementsCount, avgAccuracy, streak, examAttemptsCount, totalExamsCount: allExams.length, totalLessons };
  }, [sessionNonce, view, selectedArea]);

  const handleOnboardingComplete = useCallback(() => {
    setIsAuthenticated(true);
    setView('home');
    setSessionNonce(prev => prev + 1);
  }, []);

  const handleHomeClick = useCallback(() => {
    navigateInternal('home', null);
  }, [navigateInternal]);

  const handleSettingsClick = useCallback(() => {
    navigateInternal('settings', null);
  }, [navigateInternal]);

  const handleAchievementsClick = useCallback(() => {
    navigateInternal('achievements', null);
  }, [navigateInternal]);

  const handleCalendarClick = useCallback(() => {
    navigateInternal('calendar', null);
  }, [navigateInternal]);

  const handleAreaSelect = useCallback((area: RoadmapArea) => {
    navigateInternal('home', area);
  }, [navigateInternal]);

  return (
    <div className="min-h-screen flex font-sans bg-black text-slate-300 selection:bg-[#0A84FF]/30 selection:text-white overflow-x-hidden">
      {/* App Initializer layer */}
      <AnimatePresence>
        {isInitializing && <AppLoader key="loader" />}
      </AnimatePresence>

      <PricingModal 
        isOpen={isPricingOpen} 
        onClose={() => setIsPricingOpen(false)} 
      />

      {/* Offline indicators */}
      <div className="fixed bottom-24 right-6 lg:bottom-10 lg:right-10 z-[120] flex flex-col gap-3">
        <AnimatePresence>
          {offlineReady && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="backdrop-blur-md bg-[#1C1C1E]/90 border border-[#2C2C2E] p-4 rounded-xl flex items-center justify-between gap-4 max-w-sm ml-auto shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#30D158]/10 text-[#30D158] border border-[#30D158]/20 rounded-lg flex items-center justify-center shrink-0">
                  <CloudDownload className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-200 uppercase tracking-widest leading-none">Offline Ready</div>
                  <div className="text-[9px] text-[#8E8E93] mt-1 leading-none">Console is available locally.</div>
                </div>
              </div>
              <button onClick={() => setOfflineReady(false)} className="p-1 hover:bg-[#2C2C2E] rounded cursor-pointer">
                <X className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </motion.div>
          )}

          {!isOnline && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="backdrop-blur-md bg-black/90 border border-[#FF453A]/30 p-4 rounded-xl flex items-center gap-3 max-w-sm ml-auto shadow-2xl"
            >
              <div className="w-8 h-8 bg-[#FF453A]/10 text-[#FF453A] border border-[#FF453A]/20 rounded-lg flex items-center justify-center shrink-0">
                <WifiOff className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold text-[#FF453A] uppercase tracking-widest leading-none">Disconnected</div>
                <div className="text-[9px] text-[#8E8E93] mt-1 leading-none">Relying on stored data.</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Core shell sidebar menu */}
      {isAuthenticated && (
        <MemoizedSidebar 
          selectedArea={selectedArea} 
          onHomeClick={handleHomeClick}
          onSettingsClick={handleSettingsClick}
          onAchievementsClick={handleAchievementsClick}
          onCalendarClick={handleCalendarClick}
          activeView={view}
          className="hidden md:flex"
        />
      )}

      {/* Mobile iOS-style Floating Tab Dock */}
      {isAuthenticated && (
        <div className="md:hidden fixed bottom-4 left-4 right-4 z-[120] bg-[#1C1C1E]/90 backdrop-blur-xl border border-[#2C2C2E] h-[60px] flex items-center justify-around px-2 rounded-2xl shadow-ios pb-safe self-center">
          <button 
            onClick={handleHomeClick}
            className={cn(
              "flex flex-col items-center justify-center gap-1 cursor-pointer select-none outline-none flex-1 py-1 text-center transition-all",
              view === 'home' && !selectedArea ? "text-[#0A84FF]" : "text-[#8E8E93]"
            )}
          >
            <Cpu className="w-4.5 h-4.5" />
            <span className="text-[9px] font-bold uppercase tracking-wider">Workspace</span>
          </button>

          <button 
            onClick={handleCalendarClick}
            className={cn(
              "flex flex-col items-center justify-center gap-1 cursor-pointer select-none outline-none flex-1 py-1 text-center transition-all",
              view === 'calendar' ? "text-[#0A84FF]" : "text-[#8E8E93]"
            )}
          >
            <Calendar className="w-4.5 h-4.5" />
            <span className="text-[9px] font-bold uppercase tracking-wider">Timetable</span>
          </button>
          
          <button 
            onClick={handleAchievementsClick}
            className={cn(
              "flex flex-col items-center justify-center gap-1 cursor-pointer select-none outline-none flex-1 py-1 text-center transition-all",
              view === 'achievements' ? "text-[#0A84FF]" : "text-[#8E8E93]"
            )}
          >
            <Award className="w-4.5 h-4.5" />
            <span className="text-[9px] font-bold uppercase tracking-wider">Awards</span>
          </button>

          <button 
            onClick={handleSettingsClick}
            className={cn(
              "flex flex-col items-center justify-center gap-1 cursor-pointer select-none outline-none flex-1 py-1 text-center transition-all",
              view === 'settings' ? "text-[#0A84FF]" : "text-[#8E8E93]"
            )}
          >
            <Settings className="w-4.5 h-4.5" />
            <span className="text-[9px] font-bold uppercase tracking-wider">Settings</span>
          </button>
        </div>
      )}

      {/* Workspace Panel View controller */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Dynamic workspace header if not inside syllabus viewing */}
        {isAuthenticated && !selectedArea && (
          <header className="sticky top-0 z-[40] bg-black/90 border-b border-[#2C2C2E] backdrop-blur-md transition-all animate-fade-in animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 cursor-pointer" onClick={handleHomeClick}>
                  <div className="w-9 h-9 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl flex items-center justify-center text-[#0A84FF] font-mono text-sm shadow-md">
                    <Cpu className="w-4 h-4 text-[#0A84FF]" />
                  </div>
                  <div>
                    <h1 className="text-sm font-bold text-white tracking-tight leading-none uppercase">DevSec Academy</h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex flex-col items-end">
                  <span className="text-[10px] font-mono font-bold text-slate-200 uppercase leading-none">
                    {localStorage.getItem('cyber_candidate_name') || 'Sec Cadet'}
                  </span>
                </div>
                
                <button 
                  onClick={() => setIsPricingOpen(true)}
                  className="h-9 px-3.5 bg-[#1C1C1E] border border-[#2C2C2E] hover:bg-[#2C2C2E] rounded-xl flex items-center justify-center transition-colors text-slate-350 text-[10px] font-mono uppercase font-bold tracking-wider shadow-md outline-none focus:outline-none focus:ring-0 focus-visible:outline-none cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0A84FF] mr-1.5" />
                  Status Guide
                </button>
              </div>
            </div>
          </header>
        )}

        {/* Workspace core stages views */}
        <main className={cn(
          "flex-1 relative w-full",
          selectedArea 
            ? "py-6 px-4 md:px-8 max-w-7xl mx-auto pb-44 md:pb-32" 
            : "py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto pb-32 md:pb-12"
        )}>
          <Suspense fallback={<div className="flex items-center justify-center py-40"><Loader2 className="w-6 h-6 animate-spin text-slate-600/40" /></div>}>
            <AnimatePresence mode="wait">
              {!isAuthenticated ? (
                <Onboarding onComplete={handleOnboardingComplete} key="onboarding" />
              ) : view === 'settings' ? (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  <SettingsView />
                </motion.div>
              ) : view === 'achievements' ? (
                <motion.div
                  key="achievements"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  <AchievementsView />
                </motion.div>
              ) : view === 'calendar' ? (
                <motion.div
                  key="calendar"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  <CalendarView />
                </motion.div>
              ) : !selectedArea ? (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-12 pb-32"
                >
                  {/* Dashboard Hero Panel (Zero Borders & Outlines) */}
                  <div className="w-full p-6 md:p-12 bg-[#1C1C1E] text-slate-300 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 min-h-[260px] shadow-sm rounded-2xl border border-[#2C2C2E]">
                    <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                      <div className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full bg-[#0A84FF] blur-[120px]" />
                    </div>
                    
                    <div className="relative z-10 space-y-5 md:max-w-[55%] text-left">
                      <div className="flex items-center gap-3">
                        <span className="bg-transparent text-white text-[9px] font-sans uppercase tracking-widest font-bold">
                          Study Dashboard
                        </span>
                      </div>
                      
                      <div className="space-y-1 text-left">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-slate-100">
                          Welcome, {localStorage.getItem('cyber_candidate_name') || 'Student'}
                        </h2>
                      </div>

                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-sans mt-2 text-left">
                        Welcome back. Access your lessons, take practice quizzes, and track your study achievements.
                      </p>
                    </div>

                    {/* Integrated Analytics Module */}
                    <div className="relative z-10 grid grid-cols-2 gap-4 w-full md:w-auto md:min-w-[320px] bg-transparent p-5 rounded-xl border border-[#2C2C2E] text-left">
                      <div className="space-y-1 text-left">
                        <div className="text-2xl md:text-3xl font-black font-mono text-white flex items-center gap-1.5">
                          <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
                          {stats.streak} <span className="text-xs text-slate-400 font-semibold uppercase">Days</span>
                        </div>
                      </div>

                      <div className="space-y-1 text-left">
                        <div className="text-2xl md:text-3xl font-black font-mono text-white flex items-center gap-1.5">
                          <Target className="w-5 h-5 text-[#0A84FF]" />
                          {stats.avgAccuracy}%
                        </div>
                      </div>

                      <div className="col-span-2 pt-3 border-t border-[#2C2C2E] space-y-2 text-left">
                        <div className="flex justify-between text-[9px] font-mono uppercase text-slate-500 tracking-wider">
                          <span className="text-slate-350 font-bold">{stats.completedCount} / {stats.totalLessons} Completed</span>
                        </div>
                        <div className="w-full bg-[#2C2C2E] h-2 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(100, (stats.completedCount / (stats.totalLessons || 1)) * 100)}%` }}
                            className="bg-[#0A84FF] h-full rounded-full" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Syllabus / Library Grid section */}
                  <section className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div>
                        <h3 className="text-xl font-bold text-slate-100 tracking-tight leading-none uppercase">Syllabus Areas</h3>
                      </div>
                      
                      <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-[#0A84FF] transition-colors" />
                        <input 
                          type="text" 
                          placeholder="Search catalog..." 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl py-3.5 pl-11 pr-5 text-xs text-slate-200 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none transition-all w-full md:w-80 shadow-sm font-sans placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <SubjectGrid 
                      onSelect={handleAreaSelect} 
                      searchQuery={searchQuery}
                    />
                  </section>
                </motion.div>
              ) : (
                <motion.div
                  key="subject-view"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <SubjectView 
                    area={selectedArea} 
                    onBack={handleHomeClick} 
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Suspense>
        </main>


      </div>
    </div>
  );
}
