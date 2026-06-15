import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, ShieldCheck, Target, Save, LogOut,
  ChevronRight, Globe, Lock, Info, RefreshCw
} from 'lucide-react';
import { cn } from '../lib/utils';
import { progressService } from '../services/progressService';

export default function SettingsView() {
  const [activeTab, setActiveTab] = useState('profile');
  const [candidateName, setCandidateName] = useState(() => {
    return localStorage.getItem('cyber_candidate_name') || 'Student';
  });
  const [tpin, setTpin] = useState(() => {
    return localStorage.getItem('cyber_tpin') || '1234';
  });
  const [resetSuccess, setResetSuccess] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const [resetConfirm, setResetConfirm] = useState(false);

  const handleSave = () => {
    localStorage.setItem('cyber_candidate_name', candidateName);
    localStorage.setItem('cyber_tpin', tpin);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleResetProgress = () => {
    if (!resetConfirm) {
      setResetConfirm(true);
      setTimeout(() => setResetConfirm(false), 4000);
      return;
    }
    progressService.resetProgress();
    setResetSuccess(true);
    setResetConfirm(false);
    setTimeout(() => setResetSuccess(false), 3000);
    window.location.reload(); // Refresh to flush UI states
  };

  const handleLogout = () => {
    if (!logoutConfirm) {
      setLogoutConfirm(true);
      setTimeout(() => setLogoutConfirm(false), 4005);
      return;
    }
    localStorage.removeItem('cyber_tpin');
    localStorage.removeItem('cyber_candidate_name');
    window.location.reload();
  };

  const tabs = [
    { id: 'profile', label: 'Profile Settings', icon: User },
    { id: 'security', label: 'Security PIN', icon: Lock },
    { id: 'about', label: 'About App', icon: Info },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-8 text-left">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-[#1C1C1E] border border-[#2C2C2E] flex items-center justify-center text-[#0A84FF] shadow-md">
                <User className="w-8 h-8 opacity-90" />
              </div>
              <div className="space-y-1 text-left">
                <h3 className="text-lg font-bold text-slate-100 tracking-tight">{candidateName}</h3>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Active Student</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 text-left">
              <div className="space-y-2 text-left">
                <label className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-bold block">Display Name</label>
                <input 
                  type="text" 
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#2C2C2E] focus:ring-2 focus:ring-[#0A84FF] bg-[#1C1C1E] font-bold text-slate-100 outline-none shadow-md font-sans"
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-bold block">Storage Mode</label>
                <div className="w-full px-4 py-3 rounded-xl bg-[#1C1C1E] border border-[#2C2C2E]/60 font-medium text-xs text-slate-300 flex items-center justify-between shadow-md">
                  <span>Offline / Local Storage</span>
                  <Globe className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6 text-left">
            <div className="p-4 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl text-left">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0A84FF] mb-1 font-bold">PIN Code Access</h4>
              <p className="text-slate-400 font-sans text-xs leading-relaxed">Customize your 4-digit security PIN used to lock and protect your profile and study records.</p>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-bold block">Security Passcode PIN</label>
              <input 
                type="password" 
                maxLength={4}
                value={tpin}
                onChange={(e) => setTpin(e.target.value.replace(/\D/g, ''))}
                className="w-full px-4 py-3 rounded-xl border border-[#2C2C2E] focus:ring-2 focus:ring-[#0A84FF] bg-[#1C1C1E] font-bold font-mono text-slate-100 outline-none text-center tracking-[0.5em] shadow-md"
              />
            </div>

            <div className="pt-6 border-t border-slate-800/40 text-left">
              <h4 className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-3 font-bold">Clear Progress</h4>
              
              <button 
                onClick={handleResetProgress}
                className={cn(
                  "w-full flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer border",
                  resetConfirm 
                    ? "bg-rose-950/30 border-rose-500/50" 
                    : "bg-[#1C1C1E] border border-[#2C2C2E]/50 hover:bg-rose-950/20"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-black border border-[#2C2C2E] rounded-lg text-rose-400 shadow-md">
                    <RefreshCw className={cn("w-4 h-4", resetConfirm && "animate-spin")} />
                  </div>
                  <div className="text-left">
                    <h5 className="text-xs font-bold text-slate-200">
                      {resetConfirm ? "Confirm deletion? Tap again" : "Clear Study Progress"}
                    </h5>
                    <p className="text-[10px] text-slate-500">Reset all lesson progress logs, XP counts and exam statistics.</p>
                  </div>
                </div>
                {resetSuccess ? (
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">Cleared ✓</span>
                ) : resetConfirm ? (
                  <span className="text-[10px] font-mono font-bold text-rose-400 uppercase">Confirm?</span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                )}
              </button>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-6 text-left">
            <div className="p-6 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-black border border-[#2C2C2E] text-[#0A84FF] rounded-xl flex items-center justify-center mb-4 shadow-sm animate-pulse">
                <ShieldCheck className="w-6 h-6 text-[#0A84FF]" />
              </div>
              <h4 className="text-base font-bold text-slate-100 tracking-tight leading-none font-bold">Cybersecurity Master</h4>
              <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500 font-bold mt-2">v3.5 Study Companion</p>
              <p className="text-xs text-slate-400 font-sans mt-4 max-w-sm leading-relaxed">
                An advanced web study resource built to track lesson progress, stream lectures, review study guides, and test knowledge with exam questions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 text-xs text-left">
              <div className="p-4 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl shadow-md text-left">
                <h5 className="text-[10px] font-mono text-[#0A84FF] uppercase tracking-widest font-bold mb-1">Our Mission</h5>
                <p className="text-slate-400 leading-relaxed font-sans text-left">Empowering software professionals and network security engineers with modern technical threat modeling paradigms and system-level protection strategies.</p>
              </div>
              <div className="p-4 bg-[#1C1C1E]/60 border border-[#2C2C2E]/40 rounded-xl text-slate-500 font-mono text-[9px] text-left">
                Offline Data: Your quiz and lesson history is stored locally in your browser. Restricting access keeps your progress private.
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full animate-in fade-in duration-500 text-left px-4">
      <div className="mb-8">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Preferences</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight mt-0.5">Settings</h2>
        <p className="text-slate-400 font-medium text-xs">Configure your dashboard username details, security PIN, and system preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Navigation Tabs */}
        <div className="w-full md:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-3 px-5 py-4 rounded-xl text-xs font-bold transition-all text-left border-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none cursor-pointer",
                activeTab === tab.id 
                  ? "bg-[#1C1C1E] border border-[#2C2C2E]/60 text-white shadow-md font-bold" 
                  : "bg-transparent text-slate-400 hover:bg-[#1C1C1E]/50 hover:text-white"
              )}
            >
              <tab.icon className={cn("w-4 h-4", activeTab === tab.id ? "text-[#0A84FF]" : "text-slate-500")} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Form Container */}
        <div className="flex-1 bg-[#131314] border border-[#2C2C2E] p-6 md:p-10 rounded-2xl shadow-md min-h-[480px]">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col h-full justify-between"
          >
            <div>{renderContent()}</div>

            <div className="mt-12 pt-6 border-t border-slate-800/40 flex flex-col sm:flex-row sm:justify-between items-stretch sm:items-center gap-4 w-full">
              <button 
                onClick={handleLogout}
                className={cn(
                  "flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-sm outline-none focus:outline-none cursor-pointer border",
                  logoutConfirm 
                    ? "bg-rose-600 hover:bg-rose-700 text-white border-rose-600 animate-pulse" 
                    : "bg-rose-500/10 hover:bg-rose-500/20 text-rose-450 text-rose-400 border border-rose-500/20 hover:border-rose-500/40"
                )}
              >
                <LogOut className="w-4 h-4" />
                {logoutConfirm ? 'Confirm Log Out?' : 'Log Out'}
              </button>

              <div className="flex items-center justify-end gap-3">
                {isSaved && (
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold animate-pulse">
                    ✓ Config Saved
                  </span>
                )}

                <button 
                  onClick={handleSave}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0A84FF] hover:bg-[#007AFF] text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md outline-none focus:outline-none border-0 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  Save Preferences
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
