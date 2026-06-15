import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Lesson, Module } from '../types';
import { 
  ArrowLeft, CheckCircle2, Play, HelpCircle, ChevronRight, Check,
  Clock, BookOpen, AlertCircle, Sparkles, Award, Scroll, RotateCcw,
  ExternalLink
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { progressService } from '../services/progressService';
import QuizEngine from './QuizEngine';

/**
 * Extracts a clean 11-character YouTube video ID from any URL format or raw input ID.
 */
function extractYouTubeId(input: string): string {
  if (!input) return '';
  const trimmed = input.trim();
  
  // Regular expressions to catch different YouTube link styles
  const urlPatterns = [
    /youtube\.com\/watch\?v=([^#&?]+)/,
    /youtu\.be\/([^#&?]+)/,
    /youtube\.com\/embed\/([^#&?]+)/,
    /youtube-nocookie\.com\/embed\/([^#&?]+)/,
    /youtube\.com\/v\/([^#&?]+)/,
    /youtube\.com\/.*[?&]v=([^#&?]+)/,
    /m\.youtube\.com\/watch\?v=([^#&?]+)/
  ];

  for (const pattern of urlPatterns) {
    const match = trimmed.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  // Fallback: If it's a path with slashes, try the last part
  if (trimmed.includes('/')) {
    const parts = trimmed.split('/');
    const lastPart = parts[parts.length - 1];
    const cleanLast = lastPart.split(/[?#&]/)[0];
    if (cleanLast && cleanLast.length === 11) {
      return cleanLast;
    }
  }

  return trimmed;
}

interface LessonViewProps {
  lesson: Lesson;
  module: Module;
  onClose: () => void;
  onPrevLesson: () => void;
  onNextLesson: () => void;
}

export default function LessonView({
  lesson,
  module,
  onClose,
  onPrevLesson,
  onNextLesson
}: LessonViewProps) {
  // Timer state
  const [secondsSpent, setSecondsSpent] = useState(0);
  
  // Quiz active state
  const [activeQuiz, setActiveQuiz] = useState<any>(null);

  // Reset progress confirmation state
  const [isResetConfirming, setIsResetConfirming] = useState(false);

  // Mobile active sub-tab (Reading vs Activity Checklist)
  const [mobileTab, setMobileTab] = useState<'reading' | 'checklist'>('reading');

  // Active video being loaded in the top player
  const [activeVideoId, setActiveVideoId] = useState<string>(lesson.youtubeVideoId || '');
  
  // Privacy safe nocookie proxy state
  const [useNoCookie, setUseNoCookie] = useState<boolean>(false);

  // Parse checkpoints from lesson content (markdown headers)
  const checkpoints = useMemo(() => {
    const lines = lesson.content.split('\n');
    const checkpointsList: { id: string; text: string }[] = [];
    let idx = 0;
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('###') || trimmed.startsWith('####')) {
        // Strip out formatting, icons, tutorials headings
        const cleanText = trimmed
          .replace(/^[#\s]+/, '')
          .replace(/\*\*+/g, '')
          .trim();
          
        if (
          cleanText && 
          !cleanText.includes('🎥') && 
          !cleanText.includes('Video') && 
          !cleanText.includes('Tutorial') &&
          !cleanText.includes('Resources')
        ) {
          checkpointsList.push({
            id: `${lesson.id}-cp-${idx++}`,
            text: cleanText
          });
        }
      }
    });

    if (checkpointsList.length === 0) {
      // Fallback if no clean headings exist
      return [
        { id: `${lesson.id}-cp-intro`, text: 'Core Introduction Principles' },
        { id: `${lesson.id}-cp-concepts`, text: 'Technical Concept Breakdown' },
        { id: `${lesson.id}-cp-recap`, text: 'Operational Session Summary' }
      ];
    }
    return checkpointsList;
  }, [lesson]);

  // Load and save ticked checkpoints
  const [completedCheckpoints, setCompletedCheckpoints] = useState<string[]>(() => {
    const stored = localStorage.getItem(`cyber_lecture_checkpoints_${lesson.id}`);
    return stored ? JSON.parse(stored) : [];
  });

  // Scroll percent state
  const [scrollPercent, setScrollPercent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  // Sync checkpoints to localStorage
  const handleToggleCheckpoint = (cpId: string) => {
    setCompletedCheckpoints(prev => {
      const next = prev.includes(cpId) 
        ? prev.filter(id => id !== cpId) 
        : [...prev, cpId];
      localStorage.setItem(`cyber_lecture_checkpoints_${lesson.id}`, JSON.stringify(next));
      
      // Auto complete the whole lesson if they tick all checkpoints
      if (next.length === checkpoints.length && !progressService.isLessonCompleted(lesson.id)) {
        progressService.toggleLessonComplete(lesson.id);
      }
      
      return next;
    });
  };

  // Reset progress of this lecture
  const handleResetLectureProgress = () => {
    if (!isResetConfirming) {
      setIsResetConfirming(true);
      setTimeout(() => setIsResetConfirming(false), 3000);
      return;
    }
    setIsResetConfirming(false);
    setCompletedCheckpoints([]);
    localStorage.removeItem(`cyber_lecture_checkpoints_${lesson.id}`);
    localStorage.removeItem(`cyber_lecture_scroll_${lesson.id}`);
    if (progressService.isLessonCompleted(lesson.id)) {
      progressService.toggleLessonComplete(lesson.id);
    }
    setScrollPercent(0);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  // Active study duration tracking and video synchronization
  useEffect(() => {
    setSecondsSpent(0);
    setActiveVideoId(lesson.youtubeVideoId || '');
    const interval = setInterval(() => {
      setSecondsSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [lesson.id, lesson.youtubeVideoId]);

  // Track scroll position percentage inside content container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const totalScrollable = scrollHeight - clientHeight;
      if (totalScrollable <= 0) {
        setScrollPercent(100);
        return;
      }
      const pct = Math.min(100, Math.round((scrollTop / totalScrollable) * 100));
      setScrollPercent(pct);
      
      // Save scroll position
      localStorage.setItem(`cyber_lecture_scroll_${lesson.id}`, String(scrollTop));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    
    // Restore previous scroll position
    const savedScrollPos = localStorage.getItem(`cyber_lecture_scroll_${lesson.id}`);
    if (savedScrollPos) {
      setTimeout(() => {
        container.scrollTop = parseFloat(savedScrollPos);
      }, 100);
    } else {
      container.scrollTop = 0;
    }

    // Measure on init
    setTimeout(handleScroll, 200);

    return () => container.removeEventListener('scroll', handleScroll);
  }, [lesson.id]);

  // Percent stats calculations
  const checkpointProgressPercent = useMemo(() => {
    if (checkpoints.length === 0) return 0;
    return Math.round((completedCheckpoints.length / checkpoints.length) * 100);
  }, [completedCheckpoints, checkpoints]);

  const overallProgressPercent = useMemo(() => {
    // Combine metrics: 50% scroll position, 50% checkpoints completeness
    return Math.round((scrollPercent * 0.4) + (checkpointProgressPercent * 0.6));
  }, [scrollPercent, checkpointProgressPercent]);

  const formattedTime = useMemo(() => {
    const min = Math.floor(secondsSpent / 60);
    const sec = secondsSpent % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  }, [secondsSpent]);

  const currentCompleteStatus = useMemo(() => {
    return progressService.isLessonCompleted(lesson.id);
  }, [lesson.id, completedCheckpoints]);

  const handleForceToggleCompleted = () => {
    progressService.toggleLessonComplete(lesson.id);
    // Sync checkpoints to all true if completing
    if (!currentCompleteStatus) {
      const allIds = checkpoints.map(c => c.id);
      setCompletedCheckpoints(allIds);
      localStorage.setItem(`cyber_lecture_checkpoints_${lesson.id}`, JSON.stringify(allIds));
    } else {
      setCompletedCheckpoints([]);
      localStorage.removeItem(`cyber_lecture_checkpoints_${lesson.id}`);
    }
  };

  // Render Quiz inside the classroom if loaded
  if (activeQuiz) {
    return (
      <QuizEngine 
        quiz={activeQuiz} 
        moduleId={module.id} 
        isExam={false} 
        onClose={() => setActiveQuiz(null)} 
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-[150] flex flex-col font-sans select-none overflow-hidden text-slate-100 antialiased">
      {/* Top Navigation Control bar (Zero Borders & Compact - Transparent BG inherits app bg) */}
      <div className="bg-transparent border-b border-[#2C2C2E] px-4 py-2.5 md:py-4 flex items-center justify-between gap-4 shadow-md w-full shrink-0">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <button 
            onClick={onClose} 
            className="w-10 h-10 bg-[#1C1C1E] border border-[#2C2C2E] hover:bg-[#2C2C2E] rounded-xl flex items-center justify-center transition-all active:scale-95 group focus:outline-none focus:ring-0 focus-visible:outline-none cursor-pointer shrink-0"
            id="lecture-back-button"
            title="Return to Study Syllabus"
          >
            <ArrowLeft className="w-5 h-5 text-slate-300 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <div className="min-w-0">
            <div className="flex items-center gap-2 truncate">
              <span className="text-[7.5px] md:text-[8px] font-mono tracking-widest text-[#0A84FF] uppercase font-black">Active Lecture</span>
              <span className="hidden select-none sm:inline text-[7.5px] md:text-[8px] font-mono bg-[#1C1C1E] border border-[#2C2C2E] px-2 py-0.5 rounded text-[#8E8E93]">{module.title.split(',')[0]}</span>
            </div>
            <h2 className="text-xs md:text-sm font-black text-white leading-tight mt-0.5 tracking-tight truncate max-w-[180px] sm:max-w-md md:max-w-xl">{lesson.title}</h2>
          </div>
        </div>

        {/* Dynamic Progress Dashboard HUD & Actions (Compact single row) */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0 text-[11px] font-mono">
          {/* Active study stopwatch */}
          <div className="hidden sm:flex items-center gap-2 bg-[#1C1C1E] border border-[#2C2C2E] px-3 py-1.5 rounded-xl text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Time: <strong className="text-white font-bold">{formattedTime}</strong></span>
          </div>

          {/* Core progress tracker gauge */}
          <div className="hidden md:flex items-center gap-3 bg-[#1C1C1E] border border-[#2C2C2E] px-4 py-1.5 rounded-xl">
            <div className="text-right">
              <strong className="text-[#30D158] font-bold text-xs block">{overallProgressPercent}% Done</strong>
            </div>
          </div>

          {/* Quick complete toggler */}
          <button
            onClick={handleForceToggleCompleted}
            className={cn(
              "px-3 py-2 md:px-4 md:py-2.5 rounded-xl text-[9px] md:text-[10px] uppercase font-black tracking-wider flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer focus:outline-none focus:ring-0 focus-visible:outline-none shrink-0",
              currentCompleteStatus
                ? "bg-emerald-600/20 text-[#30D158] border border-[#30D158]/30"
                : "bg-[#0A84FF] hover:bg-[#007AFF] text-white shadow-md"
            )}
          >
            <Check className="w-3 md:w-3.5 h-3 md:h-3.5 shrink-0" />
            <span>{currentCompleteStatus ? 'Finished ✓' : 'Complete'}</span>
          </button>
        </div>
      </div>

      {/* Main Study Desk Area */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden w-full relative">
        {/* Scroll percentage visual indicator right under header */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#161c2d] z-20 overflow-hidden shrink-0">
          <div 
            className="bg-[#0A84FF] h-full transition-all duration-150"
            style={{ width: `${scrollPercent}%` }}
          />
        </div>

        {/* Mobile Sub-Tab Controller bar (Zero borders, Apple style, icons only for inactive) */}
        <div className="lg:hidden flex bg-black border-b border-[#2C2C2E] p-1.5 shrink-0 z-15 justify-center gap-1">
          <button 
            onClick={() => setMobileTab('reading')}
            className={cn(
              "flex items-center justify-center gap-2 py-2.5 transition-all select-none outline-none focus:outline-none rounded-xl text-[11px] font-bold uppercase tracking-wider flex-1",
              mobileTab === 'reading' 
                ? "bg-[#1C1C1E] text-white shadow-sm font-black px-4" 
                : "text-slate-400 hover:text-white px-2"
            )}
            title="Study Notes & Video"
          >
            <BookOpen className={cn("shrink-0", mobileTab === 'reading' ? "w-3.5 h-3.5 text-white" : "w-4 h-4 text-slate-400")} />
            {mobileTab === 'reading' && <span>Study Notes & Video</span>}
          </button>
          <button 
            onClick={() => setMobileTab('checklist')}
            className={cn(
              "flex items-center justify-center gap-2 py-2.5 transition-all select-none outline-none focus:outline-none rounded-xl text-[11px] font-bold uppercase tracking-wider flex-1",
              mobileTab === 'checklist' 
                ? "bg-[#1C1C1E] text-white shadow-sm font-black px-4" 
                : "text-slate-400 hover:text-white px-2"
            )}
            title="Section Verification"
          >
            <Award className={cn("shrink-0", mobileTab === 'checklist' ? "w-3.5 h-3.5 text-white" : "w-4 h-4 text-slate-400")} />
            {mobileTab === 'checklist' && <span>Verification({completedCheckpoints.length})</span>}
          </button>
        </div>

        {/* Left Column - Playback & Markdown Readings (Zero Borders & Outlines) */}
        <div 
          ref={containerRef}
          className={cn(
            "flex-1 overflow-y-auto px-4 sm:px-6 md:px-12 py-6 md:py-10 space-y-8 scroll-smooth no-scrollbar",
            mobileTab === 'reading' ? "block" : "hidden lg:block"
          )}
        >
          {/* Study Manual Reader Segment */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full max-w-5xl mx-auto bg-[#1C1C1E] border border-[#2C2C2E] p-5 sm:p-10 md:p-16 rounded-3xl shadow-xl space-y-8"
          >
            <div className="flex items-center justify-between text-[10px] font-mono text-[#0A84FF]">
              <span className="uppercase tracking-[0.2em] font-black">Official Study Guide Notes</span>
              <span className="bg-black border border-[#2C2C2E] px-2.5 py-1 rounded text-slate-400 font-bold">{lesson.duration} Mins Reference</span>
            </div>

            {/* Markdown reading text rendered styled with absolute ZERO borders and zero outlines */}
            <div className="prose prose-invert max-w-none text-slate-300 font-sans prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight prose-strong:text-white prose-code:text-[#0A84FF] prose-code:bg-black prose-code:border prose-code:border-[#2C2C2E] prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-pre:bg-black prose-pre:border prose-pre:border-[#2C2C2E] prose-pre:shadow-2xl leading-relaxed text-sm sm:text-base font-normal">
              <ReactMarkdown
                components={{
                  a: ({ href, children, ...props }: any) => {
                    if (!href) return <span {...props}>{children}</span>;

                    const isYouTube = href.includes('youtube.com') || href.includes('youtu.be');
                    if (isYouTube) {
                      const vidId = extractYouTubeId(href);
                      if (vidId) {
                        return (
                          <button
                            onClick={() => {
                              setActiveVideoId(vidId);
                              setTimeout(() => {
                                if (videoSectionRef.current) {
                                  videoSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }
                              }, 100);
                            }}
                            className="text-[#0A84FF] hover:text-[#0A84FF]/80 font-bold underline inline-flex items-center gap-1 bg-[#1C1C1E] border border-[#2C2C2E] hover:bg-black px-2 py-0.5 rounded transition-all cursor-pointer align-baseline focus:outline-none focus:ring-0 focus-visible:outline-none border-none text-[13px] sm:text-[14px]"
                            title="Play Video inside App Player"
                          >
                            <Play className="w-3 h-3 fill-current shrink-0 inline" />
                            {children || "Play Video"}
                          </button>
                        );
                      }
                    }

                    return (
                      <a 
                        href={href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#0A84FF] hover:text-[#0A84FF]/85 transition-colors underline font-medium focus:outline-none"
                        {...props}
                      >
                        {children}
                      </a>
                    );
                  }
                }}
              >
                {lesson.content}
              </ReactMarkdown>
            </div>

            {/* Relocated and Restyled Video Player Segment (8px boundary - rounded-lg) */}
            {activeVideoId && (
              <div 
                ref={videoSectionRef}
                className="space-y-4 pt-8 border-t border-[#2C2C2E] w-full"
              >
                <div className="flex items-center gap-2 text-[#0A84FF]">
                  <Play className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-black">Lesson Video Tutorial</span>
                </div>

                {/* Main YouTube Iframe Viewport with 8px border radius */}
                <motion.div 
                   initial={{ opacity: 0, y: 15 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="w-full rounded-lg overflow-hidden bg-black shadow-2xl relative aspect-video border border-[#2C2C2E]"
                >
                  <iframe
                    key={`${activeVideoId}-${useNoCookie}`}
                    src={`https://www.${useNoCookie ? 'youtube-nocookie' : 'youtube'}.com/embed/${extractYouTubeId(activeVideoId)}?autoplay=0&rel=0&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`}
                    title={lesson.title}
                    className="absolute inset-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
                
                {/* Embed Diagnostics & Troubleshooting Toolbar - Styled with 8px radius */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-black border border-[#2C2C2E] px-4 py-3 rounded-lg text-xs">
                  <div className="flex items-center gap-2 text-slate-300 text-left">
                    <span className="inline-flex items-center gap-1.5 font-bold text-[#0A84FF]">
                      <span className="h-2 w-2 rounded-full bg-[#0A84FF] animate-pulse" />
                      Video Stream
                    </span>
                    <span className="text-[#2C2C2E] hidden sm:inline">|</span>
                    <span className="text-[#8E8E93] text-[11px] leading-tight">
                      Having trouble playing? Try alternative server toggling:
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 justify-end">
                    <button
                      onClick={() => setUseNoCookie(prev => !prev)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 border focus:outline-none focus:ring-0",
                        useNoCookie 
                          ? "bg-amber-600/20 border-amber-500/40 text-amber-300 hover:bg-amber-600/30" 
                          : "bg-[#1C1C1E] border-[#2C2C2E] text-slate-300 hover:bg-[#2C2C2E]"
                      )}
                      title="Toggle Privacy Mode"
                    >
                      📡 {useNoCookie ? "Alternative Server active" : "Alternative Server"}
                    </button>

                    <a
                      href={`https://www.youtube.com/watch?v=${extractYouTubeId(activeVideoId)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-bold bg-black hover:bg-[#1C1C1E] border border-[#2C2C2E] text-[#0A84FF] shadow-md transition-all cursor-pointer active:scale-95 focus:outline-none focus:ring-0"
                      title="Watch directly on YouTube"
                    >
                       Watch on YouTube ↗
                    </a>
                  </div>
                </div>

                {activeVideoId !== lesson.youtubeVideoId && lesson.youtubeVideoId && (
                  <div className="flex items-center justify-between bg-black border border-[#2C2C2E] px-4 py-2.5 rounded-lg text-xs gap-4">
                    <div className="flex items-center gap-2 text-indigo-100">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Playing extra tutorial video</span>
                    </div>
                    <button
                      onClick={() => {
                        setActiveVideoId(lesson.youtubeVideoId || '');
                        setTimeout(() => {
                          if (videoSectionRef.current) {
                            videoSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }
                        }, 100);
                      }}
                      className="text-[10px] uppercase tracking-wider bg-[#0A84FF] hover:bg-[#0A84FF]/80 text-white font-bold px-3 py-1.5 rounded-lg cursor-pointer active:scale-95 transition-all focus:outline-none"
                    >
                      Back to Main Video
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* In-lecture quiz alert widget */}
            {lesson.quiz && (
              <div className="bg-[#1C1C1E] border border-[#2C2C2E] p-5 sm:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 mt-12 shadow-lg">
                <div className="space-y-1.5 text-left w-full">
                  <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-[#0A84FF] font-black">Quick Review</span>
                  <h4 className="font-bold text-sm text-white">Interactive Practice Quiz</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">Test your understanding of the material with a short quiz.</p>
                </div>
                
                <button 
                  onClick={() => setActiveQuiz(lesson.quiz)}
                  className="px-6 py-3.5 bg-[#0A84FF] hover:bg-[#0A84FF]/80 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group shrink-0 w-full sm:w-auto cursor-pointer focus:outline-none focus:ring-0 focus-visible:outline-none"
                >
                  <HelpCircle className="w-4 h-4" />
                  Take Quiz
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Column - Navigation outlines, Checkpoints checklist (Zero Borders & Outlines) */}
        <div 
          className={cn(
            "w-full lg:w-80 bg-[#111625] shrink-0 p-6 flex flex-col overflow-y-auto no-scrollbar shadow-xl",
            mobileTab === 'checklist' ? "flex" : "hidden lg:flex"
          )}
        >
          {/* Lecture Progress Dashboard card */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1 text-left">
                <h3 className="font-extrabold text-sm text-white font-sans uppercase tracking-tight">Lecture Checklist</h3>
                <span className="text-[9px] font-mono text-slate-400 block">STUDY THE CRUCIAL SECTIONS</span>
              </div>
              
              <button 
                onClick={handleResetLectureProgress}
                className={cn(
                  "p-2 rounded-lg transition-all focus:outline-none focus:ring-0 cursor-pointer flex items-center gap-1 text-xs font-mono font-bold uppercase",
                  isResetConfirming 
                    ? "bg-rose-500/10 text-rose-400 border border-rose-500/25 px-2.5 py-1.5" 
                    : "text-slate-400 hover:text-rose-400 hover:bg-[#20293d]"
                )}
                title={isResetConfirming ? "Confirm lecture reset" : "Reset lecture tracking metrics"}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {isResetConfirming && <span className="text-[9px]">Sure?</span>}
              </button>
            </div>

            {/* Scroll meter details */}
            <div className="flex flex-col gap-2 bg-[#1C1C1E] border border-[#2C2C2E] p-4 rounded-2xl">
              <div className="flex justify-between items-center text-[10px] font-mono leading-none">
                <span className="text-slate-400 flex items-center gap-1.5 uppercase"><Scroll className="w-3 h-3 text-[#0A84FF]" /> Scroll Progress</span>
                <strong className="text-white font-black">{scrollPercent}%</strong>
              </div>
              <div className="w-full bg-black h-1.5 rounded-full overflow-hidden mt-1.5 border border-[#2C2C2E]/40">
                <div className="bg-[#0A84FF] h-full transition-all duration-300" style={{ width: `${scrollPercent}%` }} />
              </div>
              <span className="text-[9px] text-slate-500 font-sans mt-1 leading-tight">Scroll down the readings to automatically trigger study progress.</span>
            </div>

            {/* Checkpoints meter details */}
            <div className="flex flex-col gap-2 bg-[#1C1C1E] border border-[#2C2C2E] p-4 rounded-2xl">
              <div className="flex justify-between items-center text-[10px] font-mono leading-none">
                <span className="text-slate-400 flex items-center gap-1.5 uppercase"><Award className="w-3 h-3 text-[#30D158]" /> Checkpoints Passed</span>
                <strong className="text-white font-black">{completedCheckpoints.length} / {checkpoints.length}</strong>
              </div>
              <div className="w-full bg-black h-1.5 rounded-full overflow-hidden mt-1.5 border border-[#2C2C2E]/40">
                <div className="bg-[#30D158] h-full transition-all duration-300" style={{ width: `${checkpointProgressPercent}%` }} />
              </div>
              <span className="text-[9px] text-slate-500 font-sans mt-1 leading-tight">Tick off core sections manually as you complete them.</span>
            </div>

            {/* Ticked checklist of Markdown headers (Zero Borders & Outlines) */}
            <div className="space-y-2 mt-8">
              <span className="text-[8px] font-mono uppercase tracking-[0.25em] text-slate-450 text-slate-400 block px-1">Syllabus Outline Checkpoints</span>
              
              <div className="space-y-1.5">
                {checkpoints.map((cp, idx) => {
                  const completed = completedCheckpoints.includes(cp.id);
                  return (
                    <button
                      key={cp.id}
                      onClick={() => handleToggleCheckpoint(cp.id)}
                      className={cn(
                        "w-full p-3.5 rounded-xl text-left text-xs transition-all duration-200 flex items-start gap-3 cursor-pointer group focus:outline-none focus:ring-0 focus-visible:outline-none",
                        completed 
                          ? "bg-slate-800/40 text-slate-300 hover:bg-slate-800/60" 
                          : "bg-[#1C1C1E] border border-[#2C2C2E]/50 text-slate-405 text-slate-400 hover:bg-[#2C2C2E] hover:text-slate-200"
                      )}
                    >
                      <div className={cn(
                        "w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors",
                        completed 
                          ? "bg-emerald-500 text-white" 
                          : "bg-black border border-[#2C2C2E] text-slate-500 group-hover:bg-[#2C2C2E]"
                      )}>
                        {completed ? (
                          <Check className="w-3 h-3 text-white font-bold" />
                        ) : (
                          <span className="text-[9px] font-mono">{idx + 1}</span>
                        )}
                      </div>
                      <span className={cn(
                        "leading-tight font-medium break-words max-w-[190px]",
                        completed ? "line-through opacity-60 text-slate-400 font-normal" : "font-semibold"
                      )}>
                        {cp.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action Footer Navigation Inside the Classroom */}
          <div className="mt-auto pt-8 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onPrevLesson}
                className="py-3 bg-[#1C1C1E] border border-[#2C2C2E] hover:bg-[#2C2C2E] text-slate-200 hover:text-white rounded-xl text-[10px] font-mono uppercase tracking-wider transition-all focus:outline-none cursor-pointer"
              >
                Prev Lecture
              </button>
              
              <button
                onClick={onNextLesson}
                className="py-3 bg-[#1C1C1E] border border-[#2C2C2E] hover:bg-[#2C2C2E] text-slate-200 hover:text-white rounded-xl text-[10px] font-mono uppercase tracking-wider transition-all focus:outline-none cursor-pointer"
              >
                Next / Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
