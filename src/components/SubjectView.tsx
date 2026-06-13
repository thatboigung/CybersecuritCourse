import React, { useState, useEffect, useMemo } from 'react';
import { RoadmapArea, Module, Lesson, Quiz } from '../types';
import { MODULES } from '../data';
import { 
  ArrowLeft, CheckCircle2, Play, ExternalLink, HelpCircle, FileText, 
  ChevronRight, Award, Lock, BookOpen, AlertTriangle, ShieldCheck, 
  Wifi, CircleDot, RefreshCw, Terminal, Library
} from 'lucide-react';
import QuizEngine from './QuizEngine';
import PracticalLabView from './PracticalLabView';
import LessonView from './LessonView';
import { PRACTICAL_LABS } from '../data/labData';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { progressService } from '../services/progressService';

interface SubjectViewProps {
  area: RoadmapArea;
  onBack: () => void;
}

export default function SubjectView({ area, onBack }: SubjectViewProps) {
  // Filter modules related to this physical roadmap area
  const relatedModules = useMemo(() => {
    return MODULES.filter(m => m.areaId === area.id);
  }, [area.id]);

  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [isExamActive, setIsExamActive] = useState(false);
  const [studyTab, setStudyTab] = useState<'syllabus' | 'lab' | 'library'>('syllabus');
  
  // Refresh state triggers
  const [sessionNonce, setSessionNonce] = useState(0);

  const activeModule = relatedModules[activeModuleIndex] || null;

  // Library links format
  const libraryLinks = useMemo(() => {
    const list: { title: string; url: string; source: string }[] = [];
    
    // Explicit library links defined on the module
    if (activeModule?.libraryLinks) {
      activeModule.libraryLinks.forEach(link => {
        list.push({ title: link.title, url: link.url, source: 'Core Reference' });
      });
    }
    
    // Auto-extracted lesson video links for supplementary resource list
    if (activeModule?.lessons) {
      activeModule.lessons.forEach((les, idx) => {
        if (les.youtubeVideoId) {
          list.push({ 
            title: `Lecture ${idx + 1} Video: ${les.title}`, 
            url: `https://www.youtube.com/watch?v=${les.youtubeVideoId}`,
            source: 'Supplementary Material'
          });
        }
      });
    }
    
    return list;
  }, [activeModule]);

  const currentLab = useMemo(() => {
    if (!activeModule) return null;
    return PRACTICAL_LABS.find(l => l.moduleId === activeModule.id) || null;
  }, [activeModule]);

  // Real-time completions tracker
  const completionStats = useMemo(() => {
    const progress = progressService.getProgress();
    const completedList = progress.completedLessons;
    
    const allLessonIds = relatedModules.flatMap(m => m.lessons.map(l => l.id));
    const completedCount = allLessonIds.filter(id => completedList.includes(id)).length;
    
    // Calculates completed exams
    const moduleExams = relatedModules.filter(m => m.exam).map(m => m.exam!.id);
    const completedExamsCount = moduleExams.filter(examId => {
      const attempt = progressService.getExamAttempt(examId);
      return attempt && attempt.passed;
    }).length;

    const percent = allLessonIds.length > 0
      ? Math.round((completedCount / allLessonIds.length) * 100)
      : 0;

    return { completedCount, totalCount: allLessonIds.length, percent, completedExamsCount, totalExams: moduleExams.length };
  }, [relatedModules, sessionNonce]);

  // Handle lesson tick completion
  const handleToggleComplete = (lessonId: string) => {
    progressService.toggleLessonComplete(lessonId);
    setSessionNonce(prev => prev + 1);
  };

  const isCompleted = (lessonId: string) => {
    return progressService.isLessonCompleted(lessonId);
  };

  if (!area) return null;

  // Render the active Quiz / Exam Engine if active
  if (activeQuiz && activeModule) {
    return (
      <QuizEngine 
        quiz={activeQuiz} 
        moduleId={activeModule.id} 
        isExam={isExamActive} 
        onClose={() => {
          setActiveQuiz(null);
          setIsExamActive(false);
          setSessionNonce(prev => prev + 1);
        }} 
      />
    );
  }

  // Render the active Lesson / Lecture separate screen if active (with specific progress tracking)
  if (activeLesson && activeModule) {
    return (
      <LessonView 
        lesson={activeLesson}
        module={activeModule}
        onClose={() => {
          setActiveLesson(null);
          setSessionNonce(prev => prev + 1);
        }}
        onPrevLesson={() => {
          const idx = activeModule.lessons.findIndex(l => l.id === activeLesson.id);
          if (idx > 0) {
            setActiveLesson(activeModule.lessons[idx - 1]);
          } else {
            setActiveLesson(null);
            setSessionNonce(prev => prev + 1);
          }
        }}
        onNextLesson={() => {
          const idx = activeModule.lessons.findIndex(l => l.id === activeLesson.id);
          if (idx < activeModule.lessons.length - 1) {
            setActiveLesson(activeModule.lessons[idx + 1]);
          } else {
            setActiveLesson(null);
            setSessionNonce(prev => prev + 1);
          }
        }}
      />
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 max-w-full overflow-x-hidden md:overflow-x-visible">
      {/* Immersive Header (Removed borders & outlines) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack} 
            className="w-12 h-12 bg-[#1C1C1E] border border-[#2C2C2E] hover:bg-[#2C2C2E] rounded-xl flex items-center justify-center transition-all active:scale-90 group shrink-0 shadow-md border-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none cursor-pointer"
            id="back-button"
            title="Go back to dashboard"
          >
            <ArrowLeft className="w-5 h-5 text-slate-300 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <div className="min-w-0 text-left">
            <span className="text-[9px] font-mono tracking-widest uppercase text-[#0A84FF] font-bold">Roadmap Subject Area</span>
            <h2 className="text-xl md:text-3xl font-bold text-slate-100 mt-0.5 tracking-tight truncate">{area.name}</h2>
          </div>
        </div>

        {/* Dynamic statistics pill (No borders & outlines) */}
        <div className="flex items-center gap-3">
          <div className="flex px-4 py-2.5 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl items-center gap-4 shadow-md">
            <div className="text-right">
              <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest leading-none">Completed Modules</div>
              <div className="text-xs font-bold text-slate-100 mt-1">{completionStats.completedExamsCount} / {completionStats.totalExams} Certified</div>
            </div>
            <div className="w-10 h-10 rounded-full p-0.5 relative flex items-center justify-center bg-black border border-[#2C2C2E]">
              <svg className="w-full h-full -rotate-90 text-[#0A84FF]/10" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle 
                  cx="18" 
                  cy="18" 
                  r="16" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  className="text-[#0A84FF] transition-all duration-1000" 
                  strokeDasharray={`${completionStats.percent}, 100`} 
                />
              </svg>
              <span className="absolute text-[8px] font-mono font-bold text-slate-300">{completionStats.percent}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full min-w-0">
        {/* Modules Navigation Index (No borders & outlines) */}
        <div className="space-y-4 lg:col-span-1 min-w-0 w-full overflow-hidden">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 px-1">Syllabus List</h4>
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 no-scrollbar w-full">
            {relatedModules.map((mod, idx) => {
              const active = idx === activeModuleIndex;
              const hasExamAudit = mod.exam;
              const examId = hasExamAudit ? mod.exam!.id : '';
              const examAttempt = progressService.getExamAttempt(examId);
              const isCertified = examAttempt && examAttempt.passed;

              return (
                <button
                  key={mod.id}
                  onClick={() => {
                    setActiveModuleIndex(idx);
                    setActiveLesson(null);
                    setStudyTab('syllabus');
                  }}
                  className={cn(
                    "flex items-center gap-3 w-[220px] lg:w-full p-4 rounded-xl text-left transition-all duration-200 shrink-0 select-none outline-none focus:outline-none focus:ring-0 focus-visible:outline-none cursor-pointer",
                    active 
                      ? "bg-[#1C1C1E] text-white shadow-lg border border-[#2C2C2E]" 
                      : "bg-transparent text-slate-400 hover:bg-[#1C1C1E]/60 hover:text-white border border-transparent"
                  )}
                >
                  <div className={cn(
                    "w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono shrink-0 font-bold",
                    active ? "bg-[#0A84FF]/20 text-[#0A84FF]" : "bg-[#2C2C2E] text-slate-400"
                  )}>
                    {idx + 1}
                  </div>
                  
                  <div className="min-w-0 pr-1 flex-1">
                    <h5 className="font-bold text-xs truncate uppercase tracking-tight leading-tight">{mod.title.split(',')[0]}</h5>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest duration-200">
                      {isCertified ? '✓ Completed' : `${mod.lessons.length} Modules`}
                    </span>
                  </div>
                  
                  {isCertified && (
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Study Panels (No borders & outlines) */}
        <div className="lg:col-span-3 min-w-0 w-full">
          {activeModule ? (
            <div className="space-y-8">
              {/* Module Description card */}
              <div className="p-6 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl relative overflow-hidden shadow-md">
                <span className="text-[8px] font-mono text-[#0A84FF] uppercase tracking-widest font-bold">Active Module</span>
                <h3 className="text-lg font-bold text-slate-100 tracking-tight leading-tight mt-1">{activeModule.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mt-2 max-w-2xl">{activeModule.description}</p>
              </div>

              {/* Modern Rounded Pill Tab bar inside Module (Completely Borderless & outline-free, icons layout) */}
              <div className="flex bg-[#1C1C1E] p-1 rounded-xl w-fit dev-tabs">
                <button 
                  onClick={() => setStudyTab('syllabus')}
                  className={cn(
                    "py-2 transition-all cursor-pointer font-sans outline-none focus:outline-none focus:ring-0 focus-visible:outline-none flex items-center gap-2 rounded-lg text-xs font-bold uppercase tracking-wider",
                    studyTab === 'syllabus' 
                      ? "bg-black text-white px-4 font-black shadow-md border border-[#2C2C2E]/50" 
                      : "text-[#8E8E93] hover:text-white px-3"
                  )}
                  title="Syllabus Lectures"
                >
                  <BookOpen className={cn("shrink-0", studyTab === 'syllabus' ? "w-3.5 h-3.5 text-white" : "w-4 h-4 text-slate-400")} />
                  {studyTab === 'syllabus' && <span>Syllabus Lectures</span>}
                </button>
                <button 
                  onClick={() => setStudyTab('lab')}
                  className={cn(
                    "py-2 transition-all cursor-pointer font-sans outline-none focus:outline-none focus:ring-0 focus-visible:outline-none flex items-center gap-2 rounded-lg text-xs font-bold uppercase tracking-wider",
                    studyTab === 'lab' 
                      ? "bg-black text-white px-4 font-black shadow-md border border-[#2C2C2E]/50" 
                      : "text-[#8E8E93] hover:text-white px-3"
                  )}
                  title="Hands-on Practical Lab"
                >
                  <Terminal className={cn("shrink-0", studyTab === 'lab' ? "w-3.5 h-3.5 text-white" : "w-4 h-4 text-slate-400")} />
                  {studyTab === 'lab' && <span>Hands-on Practical Lab</span>}
                </button>
                <button 
                  onClick={() => setStudyTab('library')}
                  className={cn(
                    "py-2 transition-all cursor-pointer font-sans outline-none focus:outline-none focus:ring-0 focus-visible:outline-none flex items-center gap-2 rounded-lg text-xs font-bold uppercase tracking-wider",
                    studyTab === 'library' 
                      ? "bg-black text-white px-4 font-black shadow-md border border-[#2C2C2E]/50" 
                      : "text-[#8E8E93] hover:text-white px-3"
                  )}
                  title="Syllabus Library"
                >
                  <Library className={cn("shrink-0", studyTab === 'library' ? "w-3.5 h-3.5 text-white" : "w-4 h-4 text-slate-400")} />
                  {studyTab === 'library' && <span>Syllabus Library</span>}
                </button>
              </div>

              {/* Study Panel switching state renders */}
              {studyTab === 'lab' ? (
                currentLab ? (
                  /* LAB MODE: THE SPECIALIZED PRACTICAL LAB VIEW */
                  <PracticalLabView 
                    lab={currentLab} 
                    onClose={() => setStudyTab('syllabus')} 
                    onCompleteSuccess={() => setSessionNonce(prev => prev + 1)}
                  />
                ) : (
                  /* NO LAB REGISTERED: MAJESTIC PLAYGROUND & TEMPLATE GENERATOR FOR FULL STACK IDEs */
                  <div className="p-8 rounded-xl bg-[#1C1C1E] border border-[#2C2C2E] text-left animate-in fade-in duration-300 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Terminal className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-100">Local Development Sandbox & Terminal Workspace</h4>
                        <p className="text-[10px] font-mono text-slate-500">Manual Host Verification Systems Active</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-slate-400 leading-relaxed">
                      For this specific module, execution milestones are designed to run in your local container workspace. Deploy the virtual environment on your computer to compile structural templates and start practicing real full-stack deployments.
                    </p>

                    <div className="p-5 bg-black rounded-lg border border-[#2C2C2E]/60 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono tracking-widest uppercase text-[#0A84FF] font-bold">Recommended Local Setup Commands</span>
                        <span className="text-[8px] font-mono text-slate-500">Terminal</span>
                      </div>
                      <pre className="text-xs font-mono text-indigo-300 leading-relaxed overflow-x-auto p-1 max-w-full">
{`# Create a clean project workspace directory
mkdir -p devsecops-workspace && cd devsecops-workspace

# Spin up a ready-to-test safe Node container environments
docker run -it --name system-developer-sandbox \\
  -p 3000:3000 \\
  -v "$(pwd)":/workspace \\
  node:20-alpine sh`}
                      </pre>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <CircleDot className="w-4 h-4 text-[#0A84FF] shrink-0" />
                      <span>Use this standalone testing environment to complete the supplementary course milestones and practice writing secure code.</span>
                    </div>
                  </div>
                )
              ) : studyTab === 'library' ? (
                /* LIBRARY MODE: CORE REFERENCE LINKS & SUPPLEMENTARY TALKS */
                <div className="space-y-6 animate-in fade-in duration-300 text-left">
                  <div className="flex items-center justify-between border-0">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#94a3b8] text-slate-500 px-1">Syllabus Reference Library</h4>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20 font-bold">{libraryLinks.length} Resources</span>
                  </div>

                  {libraryLinks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {libraryLinks.map((link, idx) => {
                        const isPrimary = idx < (activeModule?.libraryLinks?.length || 0);
                        return (
                          <a 
                            key={`${link.url}-${idx}`}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "relative p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between group shadow-lg min-w-0 overflow-hidden cursor-pointer",
                              isPrimary 
                                ? "bg-indigo-950/25 border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]" 
                                : "bg-[#1C1C1E] border-[#2C2C2E]/65 hover:border-[#0A84FF]/40 hover:shadow-[0_0_20px_rgba(10,132,255,0.05)]"
                            )}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="space-y-1 min-w-0">
                                <span className={cn(
                                  "text-[8px] font-mono uppercase tracking-widest font-black",
                                  isPrimary ? "text-indigo-400" : "text-slate-500"
                                )}>
                                  {link.source}
                                </span>
                                <h5 className={cn(
                                  "font-bold text-sm leading-snug group-hover:text-indigo-400 transition-colors break-words whitespace-normal mt-1",
                                  isPrimary ? "text-slate-100" : "text-slate-200"
                                )}>
                                  {link.title}
                                </h5>
                              </div>
                              
                              <div className={cn(
                                "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-black border border-[#2C2C2E] text-slate-400",
                                isPrimary ? "group-hover:text-indigo-400" : "group-hover:text-[#0A84FF]"
                              )}>
                                <ExternalLink className="w-4 h-4 text-slate-400" />
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-1.5 mt-4 text-[10px] font-mono text-slate-500">
                              <span className="truncate max-w-full">{link.url}</span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-12 text-center bg-[#1C1C1E]/50 border border-[#2C2C2E]/50 rounded-2xl">
                      <BookOpen className="w-8 h-8 text-slate-500 mx-auto mb-2 opacity-30" />
                      <p className="text-xs text-slate-400 font-mono">No supplementary library links registered for this module.</p>
                    </div>
                  )}

                  {area.courseGroup === 'full_stack' && (
                    <div className="mt-8 pt-8 border-t border-[#2C2C2E]/50 space-y-4">
                      <div className="flex items-center justify-between border-0">
                        <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#94a3b8] text-slate-500 px-1">Best Complete Career Channels</h4>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-bold">Recommended</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          { name: "FreeCodeCamp", url: "https://www.youtube.com/@freecodecamp", desc: "Interactive programming tutorials, certifications, and complete full-stack video guides." },
                          { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia", desc: "In-depth crash courses, web APIs, and direct stack deployment step-by-steps." },
                          { name: "Net Ninja", url: "https://www.youtube.com/@NetNinja", desc: "Structured, beginner-friendly frontend & backend playlists and package walkthroughs." },
                          { name: "Programming with Mosh", url: "https://www.youtube.com/@ProgrammingwithMosh", desc: "Clear, conceptually detailed course breakdowns for professional developers." },
                          { name: "Dave Gray Teaches Code", url: "https://www.youtube.com/@DaveGrayTeachesCode", desc: "Impeccable technical tutorials on React, Node.js, and web standards." }
                        ].map((channel, idx) => (
                          <a 
                            key={channel.url}
                            href={channel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative p-5 rounded-2xl border bg-emerald-950/5 border-emerald-500/10 hover:border-emerald-500/35 hover:shadow-[0_0_20px_rgba(16,185,129,0.05)] transition-all duration-300 flex flex-col justify-between group shadow-lg min-w-0 pointer-events-auto cursor-pointer"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="space-y-1 min-w-0">
                                <span className="text-[8px] font-mono uppercase tracking-widest font-black text-emerald-400">
                                  Top channel
                                </span>
                                <h5 className="font-bold text-sm leading-snug group-hover:text-emerald-400 transition-colors break-words whitespace-normal mt-1 text-slate-100">
                                  {channel.name}
                                </h5>
                                <p className="text-xs text-slate-400 mt-1 line-clamp-3 leading-normal">
                                  {channel.desc}
                                </p>
                              </div>
                              
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-black border border-[#2C2C2E] text-slate-400 group-hover:text-emerald-400">
                                <ExternalLink className="w-4 h-4 text-slate-400" />
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-1.5 mt-4 text-[10px] font-mono text-slate-550 text-slate-500">
                              <span className="truncate max-w-full">{channel.url}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* INDEX: DIRECTORY OF MODULE LESSONS & EXAMS (Completely Borderless) */
                <div className="space-y-6 animate-in fade-in duration-300 text-left">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#94a3b8] text-slate-500 px-1">Lecture Syllabus</h4>
                  
                  <div className="grid gap-3">
                    {activeModule.lessons.map((lesson, idx) => {
                      const complete = isCompleted(lesson.id);

                      return (
                        <div 
                          key={lesson.id}
                          className="p-3.5 sm:p-4 bg-[#1C1C1E] border border-[#2C2C2E]/65 hover:border-[#0A84FF]/40 transition-all rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-md w-full min-w-0 overflow-hidden"
                        >
                          <div 
                            className="flex items-center gap-3 sm:gap-4 cursor-pointer w-full sm:w-auto flex-1 min-w-0"
                            onClick={() => setActiveLesson(lesson)}
                          >
                            <div className={cn(
                              "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all",
                              complete 
                                ? "bg-emerald-500/15 text-emerald-400" 
                                : "bg-black border border-[#2C2C2E] text-slate-400 group-hover:bg-[#1C1C1E]"
                            )}>
                              {complete ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                              ) : (
                                <Play className="w-4 h-4 fill-slate-400 text-slate-400 ml-0.5" />
                              )}
                            </div>

                            <div className="min-w-0 pr-2 text-left flex-1 w-full overflow-hidden">
                              <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest leading-none">Lecture {idx + 1}</span>
                              <h5 className="font-bold text-xs sm:text-sm text-slate-200 mt-0.5 group-hover:text-[#0A84FF] transition-colors leading-snug break-words whitespace-normal">{lesson.title}</h5>
                            </div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto sm:shrink-0 pt-2 sm:pt-0 border-t sm:border-y-0 border-[#2C2C2E]/50">
                            <span className="text-[10px] font-mono text-slate-500">{lesson.duration} Mins</span>
                            
                            <div className="flex items-center gap-2">
                              {/* Run quiz directly badge */}
                              {lesson.quiz && (
                                <button 
                                  onClick={() => {
                                    setActiveQuiz(lesson.quiz!);
                                    setIsExamActive(false);
                                  }}
                                  className="w-8 h-8 rounded-lg bg-black border border-[#2C2C2E] hover:bg-[#1C1C1E] text-slate-400 hover:text-[#0A84FF] flex items-center justify-center transition-colors animate-fade-in border-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none cursor-pointer"
                                  title="Run lesson practice quiz"
                                >
                                  <HelpCircle className="w-4 h-4" />
                                </button>
                              )}

                              <button 
                                onClick={() => setActiveLesson(lesson)}
                                className="px-3.5 py-1.5 bg-black border border-[#2C2C2E] hover:bg-[#0A84FF] hover:border-[#0A84FF] text-slate-300 hover:text-white rounded-lg text-[10px] font-mono uppercase tracking-widest transition-all shadow-md group-hover:bg-[#0A84FF] group-hover:text-white border-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none cursor-pointer"
                              >
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* MODULE FINAL EXAM ATTESTATION PANEL (No borders) */}
                  {activeModule.exam && (
                    <div className="mt-8 pt-6 text-left">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-1 mb-4">Module Certification Test</h4>
                      
                      {(() => {
                        const exam = activeModule.exam!;
                        const attempt = progressService.getExamAttempt(exam.id);
                        const isDone = !!attempt;
                        const hasPassed = attempt && attempt.passed;

                        return (
                          <div className={cn(
                            "p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-md transition-all duration-300 border-0",
                            hasPassed 
                              ? "bg-emerald-950/20" 
                              : "bg-[#111625]"
                          )}>
                            <div className="flex items-center gap-5">
                              <div className={cn(
                                "w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-md border-0",
                                hasPassed 
                                  ? "bg-emerald-500/15 text-emerald-400" 
                                  : "bg-[#1b2234] text-indigo-400"
                              )}>
                                <Award className="w-7 h-7" />
                              </div>
                              
                              <div className="text-left">
                                <span className="text-[8px] font-mono text-indigo-300 uppercase tracking-widest font-bold">Certification Level</span>
                                <h4 className="font-bold text-base text-slate-100 mt-0.5 leading-snug">{exam.title}</h4>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-sans text-slate-400 mt-1">
                                  <span>{exam.questions.length} Scenario Questions</span>
                                  <span>•</span>
                                  <span>{exam.timeLimit} Minutes</span>
                                  <span>•</span>
                                  <span>Passing Threshold: 70%</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 shrink-0 w-full md:w-auto justify-end">
                              {isDone && (
                                <div className="text-right">
                                  <div className="text-[8px] font-mono text-slate-550 text-slate-500 uppercase">Best Score</div>
                                  <div className={cn(
                                    "font-mono font-bold text-xs",
                                    hasPassed ? "text-emerald-400" : "text-rose-450 text-rose-400"
                                  )}>
                                    {attempt.score}/{attempt.total} ({hasPassed ? 'Passed' : 'Needs Review'})
                                  </div>
                                </div>
                              )}

                              <button 
                                onClick={() => {
                                  setActiveQuiz(exam);
                                  setIsExamActive(true);
                                }}
                                className={cn(
                                  "px-6 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl transition-all select-none active:scale-95 flex items-center gap-2 border-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none cursor-pointer",
                                  hasPassed
                                    ? "bg-emerald-500/25 hover:bg-emerald-500/35 text-emerald-400" 
                                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md"
                                )}
                              >
                                {hasPassed ? 'Retake Certificate Test' : 'Start Certificate Test'}
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="py-32 text-center animate-fade-in">
              <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4 animate-pulse opacity-40" />
              <p className="text-slate-400 text-xs uppercase tracking-widest font-mono">Module parameters loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
