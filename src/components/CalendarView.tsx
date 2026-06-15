import React, { useState, useMemo, useEffect } from 'react';
import { 
  Calendar, Clock, BookOpen, Sparkles, Sliders, ChevronLeft, ChevronRight, 
  Check, CheckSquare, Square, Play, Filter, CalendarDays, CheckCircle2, 
  ExternalLink, ArrowRight, PlayCircle, Star, Award, Search, RefreshCw, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { progressService } from '../services/progressService';
import { achievementService } from '../services/achievementService';
import { ROADMAP_AREAS, MODULES } from '../data';
import { Lesson, Quiz } from '../types';
import ReactMarkdown from 'react-markdown';

export default function CalendarView() {
  // Configurable plans: 4 weeks (Bootcamp), 8 weeks (Accelerated), 12 weeks (Balanced), 16 weeks (Self-Paced)
  const plans = [
    { value: 4, name: "4-Week Bootcamp", description: "Intensive 3-track sprint (3-4 hrs daily)", csRatio: "High Intensity" },
    { value: 8, name: "8-Week Accelerated", description: "Steady daily progression (1.5-2 hrs daily)", csRatio: "Recommended Pace" },
    { value: 12, name: "12-Week Balanced", description: "Standard career track pacing (1 hr daily)", csRatio: "Optimized Balance" },
    { value: 16, name: "16-Week Thorough Mastery", description: "Comfortable self-paced track (30-45 mins daily)", csRatio: "Relaxed Pace" }
  ];

  const [numWeeks, setNumWeeks] = useState<number>(() => {
    const saved = localStorage.getItem('cyber_cal_num_weeks');
    return saved ? parseInt(saved) : 12;
  });

  const [selectedWeek, setSelectedWeek] = useState<number>(0);
  const [activeSegment, setActiveSegment] = useState<'all' | 'mathematics' | 'computer_science' | 'cyber_security' | 'hacking' | 'full_stack' | 'data_engineering' | 'tech_business'>('all');
  const [detailLesson, setDetailLesson] = useState<any | null>(null);
  const [sessionNonce, setSessionNonce] = useState(0);

  // Quiz state inside details
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [currentQuizQIdx, setCurrentQuizQIdx] = useState(0);
  const [selectedQuizOpt, setSelectedQuizOpt] = useState<number | null>(null);
  const [isQuizAnswered, setIsQuizAnswered] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResults, setShowQuizResults] = useState(false);

  useEffect(() => {
    localStorage.setItem('cyber_cal_num_weeks', numWeeks.toString());
    setSelectedWeek(0); // Reset to week 1 on duration switch
  }, [numWeeks]);

  // Read all lessons and link back to their modules and category groups
  const { mathLessons, compSciLessons, csLessons, hackingLessons, fsLessons, deLessons, tbLessons } = useMemo(() => {
    const math: any[] = [];
    const compSci: any[] = [];
    const cs: any[] = [];
    const hack: any[] = [];
    const fs: any[] = [];
    const de: any[] = [];
    const tb: any[] = [];

    MODULES.forEach(mod => {
      const area = ROADMAP_AREAS.find(a => a.id === mod.areaId);
      const isMath = area?.courseGroup === 'mathematics';
      const isCompSci = area?.courseGroup === 'computer_science';
      const isHacking = area?.courseGroup === 'hacking';
      const isFS = area?.courseGroup === 'full_stack';
      const isDE = area?.courseGroup === 'data_engineering';
      const isTB = area?.courseGroup === 'tech_business';

      mod.lessons.forEach(lesson => {
        const payload = {
          ...lesson,
          moduleTitle: mod.title,
          areaName: area?.name,
          color: area?.color || 'blue'
        };

        if (isMath) {
          math.push(payload);
        } else if (isCompSci) {
          compSci.push(payload);
        } else if (isHacking) {
          hack.push(payload);
        } else if (isFS) {
          fs.push(payload);
        } else if (isDE) {
          de.push(payload);
        } else if (isTB) {
          tb.push(payload);
        } else {
          cs.push(payload);
        }
      });
    });

    return { mathLessons: math, compSciLessons: compSci, csLessons: cs, hackingLessons: hack, fsLessons: fs, deLessons: de, tbLessons: tb };
  }, []);

  // Chunks compiler
  function chunkLessons<T>(array: T[], numChunks: number): T[][] {
    const result: T[][] = Array.from({ length: numChunks }, () => []);
    array.forEach((item, index) => {
      const chunkIdx = Math.min(numChunks - 1, Math.floor((index / array.length) * numChunks));
      result[chunkIdx].push(item);
    });
    return result;
  }

  // Generate dynamic schedule data
  const schedule = useMemo(() => {
    const mathChunks = chunkLessons(mathLessons, numWeeks);
    const compSciChunks = chunkLessons(compSciLessons, numWeeks);
    const csChunks = chunkLessons(csLessons, numWeeks);
    const hackChunks = chunkLessons(hackingLessons, numWeeks);
    const fsChunks = chunkLessons(fsLessons, numWeeks);
    const deChunks = chunkLessons(deLessons, numWeeks);
    const tbChunks = chunkLessons(tbLessons, numWeeks);

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return Array.from({ length: numWeeks }, (_, weekIdx) => {
      const mathWeek = mathChunks[weekIdx] || [];
      const compSciWeek = compSciChunks[weekIdx] || [];
      const csWeek = csChunks[weekIdx] || [];
      const hackWeek = hackChunks[weekIdx] || [];
      const fsWeek = fsChunks[weekIdx] || [];
      const deWeek = deChunks[weekIdx] || [];
      const tbWeek = tbChunks[weekIdx] || [];

      const days = daysOfWeek.map(name => ({ name, tasks: [] as any[] }));

      // Distribute Mathematics first
      mathWeek.forEach((lesson, index) => {
        const weekdaysIndices = [0, 2, 3]; // Mon, Wed, Thu
        const dayIdx = weekdaysIndices[index % weekdaysIndices.length];
        days[dayIdx].tasks.push({
          ...lesson,
          type: 'mathematics',
          label: 'Mathematics',
          themeColor: '#6366F1',
          badgeStyle: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
        });
      });

      // Distribute Computer Science
      compSciWeek.forEach((lesson, index) => {
        const weekdaysIndices = [0, 2, 4]; // Mon, Wed, Fri
        const dayIdx = weekdaysIndices[index % weekdaysIndices.length];
        days[dayIdx].tasks.push({
          ...lesson,
          type: 'computer_science',
          label: 'Computer Science',
          themeColor: '#8B5CF6',
          badgeStyle: 'bg-violet-500/10 text-violet-400 border-violet-500/20'
        });
      });

      // Distribute Cyber Security (Base)
      csWeek.forEach((lesson, index) => {
        const weekdaysIndices = [0, 2, 4, 1]; // Mon, Wed, Fri, Tue
        const dayIdx = weekdaysIndices[index % weekdaysIndices.length];
        days[dayIdx].tasks.push({
          ...lesson,
          type: 'cyber_security',
          label: 'Cyber Security',
          themeColor: '#0A84FF',
          badgeStyle: 'bg-[#0A84FF]/10 text-[#0A84FF] border-[#0A84FF]/20'
        });
      });

      // Distribute Ethical Hacking
      hackWeek.forEach((lesson, index) => {
        const weekdaysIndices = [1, 3, 5, 0]; // Tue, Thu, Sat, Mon
        const dayIdx = weekdaysIndices[index % weekdaysIndices.length];
        days[dayIdx].tasks.push({
          ...lesson,
          type: 'hacking',
          label: 'Ethical Hacking',
          themeColor: '#FF3B30',
          badgeStyle: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
        });
      });

      // Distribute Full Stack
      fsWeek.forEach((lesson, index) => {
        const weekdaysIndices = [4, 5, 2]; // Fri, Sat, Wed
        const dayIdx = weekdaysIndices[index % weekdaysIndices.length];
        days[dayIdx].tasks.push({
          ...lesson,
          type: 'full_stack',
          label: 'Full Stack',
          themeColor: '#34C759',
          badgeStyle: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
        });
      });

      // Distribute Data Engineering
      deWeek.forEach((lesson, index) => {
        const weekdaysIndices = [1, 3, 5, 4]; // Tue, Thu, Sat, Fri
        const dayIdx = weekdaysIndices[index % weekdaysIndices.length];
        days[dayIdx].tasks.push({
          ...lesson,
          type: 'data_engineering',
          label: 'Data Engineering',
          themeColor: '#30D158',
          badgeStyle: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
        });
      });

      // Distribute Tech Business
      tbWeek.forEach((lesson, index) => {
        const weekdaysIndices = [1, 2, 3, 5]; // Tue, Wed, Thu, Sat
        const dayIdx = weekdaysIndices[index % weekdaysIndices.length];
        days[dayIdx].tasks.push({
          ...lesson,
          type: 'tech_business',
          label: 'Tech Business',
          themeColor: '#8B5CF6',
          badgeStyle: 'bg-violet-500/10 text-violet-400 border-violet-500/20'
        });
      });

      // Sunday is Weekly Review + Capstone Check
      if (mathWeek.length > 0 || compSciWeek.length > 0 || csWeek.length > 0 || hackWeek.length > 0 || fsWeek.length > 0 || deWeek.length > 0 || tbWeek.length > 0) {
        days[6].tasks.push({
          id: `review-wk-${weekIdx}`,
          title: "Weekly Multi-Disciplinary Synthesis Check",
          duration: 30,
          type: 'review',
          label: 'Weekly Review',
          themeColor: '#FF9500',
          badgeStyle: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
          isCustomReview: true,
          content: `### Weekly Recap & Cross-Course Synthesis Checklist\n\nCongratulations on completing Week ${weekIdx + 1}! Studying Cyber Security, Ethical Hacking, Full Stack and Data Engineering skills concurrently creates a compound master advantage.\n\n#### Key Architectural Connections:
1. **Cloud Architecture & DevOps**: Moving from self-hosted virtual machines to container networks managed by Kubernetes and deployed securely with Terraform.
2. **Pipelines & Analytical Databases**: Setting up robust ETL/ELT pipelines, managing high-throughput streaming via Apache Kafka, and optimizing Star/Snowflake query layouts.
3. **Robust Security Controls**: Restricting access routes to core database storage layers with column-level or raw encryption, safeguarding API gateways, and maintaining persistent line of defense.\n\n#### Your Weekly Checkoff Goals:
* [ ] Verify all this week's assigned lecture lessons are marked green.
* [ ] Attempt at least one practice quiz to measure retainment.
* [ ] Spend 15 minutes mapping this week's full-stack concepts to security defense configurations.
* [ ] Hydrate well and rest to encode these complex memory sets.`
        });
      }

      return {
        weekIndex: weekIdx,
        days
      };
    });
  }, [mathLessons, compSciLessons, csLessons, hackingLessons, fsLessons, deLessons, tbLessons, numWeeks]);

  // Aggregate completion scores
  const stats = useMemo(() => {
    const progress = progressService.getProgress();
    const completedSet = new Set(progress.completedLessons);

    let totalTasksCount = 0;
    let completedTasksCount = 0;

    schedule.forEach(wk => {
      wk.days.forEach(d => {
        d.tasks.forEach(task => {
          if (task.isCustomReview) return; // skip custom recap
          totalTasksCount++;
          if (completedSet.has(task.id)) {
            completedTasksCount++;
          }
        });
      });
    });

    const percent = totalTasksCount > 0 
      ? Math.round((completedTasksCount / totalTasksCount) * 100) 
      : 0;

    return {
      totalTasksCount,
      completedTasksCount,
      percent
    };
  }, [schedule, sessionNonce]);

  // Toggle completion with full local persistence
  const handleToggleTask = (taskId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    progressService.toggleLessonComplete(taskId);
    setSessionNonce(prev => prev + 1);
  };

  const handleOpenTask = (task: any) => {
    setDetailLesson(task);
    setActiveQuiz(null); // Reset quiz
  };

  const handleStartQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz);
    setCurrentQuizQIdx(0);
    setSelectedQuizOpt(null);
    setIsQuizAnswered(false);
    setQuizScore(0);
    setShowQuizResults(false);
  };

  const handleSelectQuizOption = (optIdx: number) => {
    if (isQuizAnswered) return;
    setSelectedQuizOpt(optIdx);
  };

  const handleVerifyQuizAnswer = () => {
    if (selectedQuizOpt === null || isQuizAnswered) return;
    setIsQuizAnswered(true);
    const isCorrect = selectedQuizOpt === activeQuiz?.questions[currentQuizQIdx].correctAnswerIndex;
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    if (!activeQuiz) return;
    if (currentQuizQIdx < activeQuiz.questions.length - 1) {
      setCurrentQuizQIdx(prev => prev + 1);
      setSelectedQuizOpt(null);
      setIsQuizAnswered(false);
    } else {
      // Finished quiz!
      const percentage = Math.round((quizScore / activeQuiz.questions.length) * 100);
      progressService.saveQuizScore(activeQuiz.id, percentage);
      
      // Auto complete the lesson since they completed the quiz
      if (detailLesson?.id && !progressService.isLessonCompleted(detailLesson.id)) {
        progressService.toggleLessonComplete(detailLesson.id);
      }
      
      setShowQuizResults(true);
      setSessionNonce(prev => prev + 1);
    }
  };

  // Check overall completion state
  const isCompleted = (taskId: string) => {
    return progressService.isLessonCompleted(taskId);
  };

  const activeWeekSchedule = schedule[selectedWeek] || { days: [] };

  return (
    <div className="space-y-8" id="calendar-planner-portal">
      {/* Minimalist Subheaded Header */}
      <div className="text-left py-2 border-b border-[#2C2C2E]/60">
        <div className="flex items-center gap-2 mb-1.5">
          <Calendar className="w-4 h-4 text-[#0A84FF]" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">Roadmap Timetable</span>
        </div>
        <h2 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase">
          Master Plan
        </h2>
      </div>

      {/* Plan selector & filtering parameters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Sidebar settings option */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#1C1C1E] border border-[#2C2C2E]/60 rounded-xl p-4 space-y-4 text-left">
            <div className="flex items-center gap-1.5 border-b border-[#2C2C2E]/55 pb-2">
              <Sliders className="w-3.5 h-3.5 text-[#0A84FF]" />
              <h4 className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">Pace</h4>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {plans.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setNumWeeks(p.value)}
                  className={cn(
                    "text-left p-2.5 rounded-lg border transition-all cursor-pointer outline-none focus:outline-none focus:ring-0 flex flex-col justify-between",
                    numWeeks === p.value 
                      ? "bg-[#0A84FF]/5 border-[#0A84FF] text-[#0A84FF]" 
                      : "bg-black/20 border-[#2C2C2E] text-slate-400 hover:border-[#3A3A3C] hover:text-slate-200"
                  )}
                >
                  <span className="text-xs font-bold leading-none">
                    {p.name.split(' ')[0]}
                  </span>
                  <span className="text-[8px] font-mono tracking-tight text-slate-500 block mt-1 uppercase">
                    {p.csRatio.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#1C1C1E] border border-[#2C2C2E]/60 rounded-xl p-4 space-y-3 text-left">
            <div className="flex items-center gap-1.5 border-b border-[#2C2C2E]/55 pb-2">
              <Filter className="w-3.5 h-3.5 text-[#0A84FF]" />
              <h4 className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">Filters</h4>
            </div>

            <div className="flex flex-col gap-1.5">
              {[
                { id: 'all', label: 'All Tracks', style: 'bg-slate-550/10 text-slate-300 border-slate-500/20' },
                { id: 'mathematics', label: 'Mathematics', style: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
                { id: 'computer_science', label: 'Computer Science', style: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
                { id: 'cyber_security', label: 'Cyber Security', style: 'bg-[#0A84FF]/10 text-[#0A84FF] border-[#0A84FF]/20' },
                { id: 'hacking', label: 'Ethical Hacking', style: 'bg-rose-500/10 text-rose-450 border-rose-500/20' },
                { id: 'full_stack', label: 'Full Stack', style: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
                { id: 'data_engineering', label: 'Data Engineering', style: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
                { id: 'tech_business', label: 'Tech Business', style: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveSegment(btn.id as any)}
                  className={cn(
                    "text-left px-2.5 py-1.5 rounded-lg border text-[10px] font-mono tracking-wide transition-all uppercase cursor-pointer flex justify-between items-center w-full",
                    activeSegment === btn.id 
                      ? btn.style + " font-bold" 
                      : "bg-black/10 border-transparent text-slate-400 hover:text-slate-200"
                  )}
                >
                  <span>{btn.label}</span>
                  {activeSegment === btn.id && (
                    <span className="w-1 h-1 rounded-full bg-current" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Central visual timeline */}
        <div className="lg:col-span-8 space-y-6">
          {/* Week Selector Carousel */}
          <div className="bg-[#1C1C1E] border border-[#2C2C2E] p-4 rounded-2xl flex items-center justify-between shadow-sm">
            <button
              onClick={() => setSelectedWeek(prev => Math.max(0, prev - 1))}
              disabled={selectedWeek === 0}
              className="w-10 h-10 rounded-xl bg-black border border-[#2C2C2E] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#2C2C2E] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-center">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em] font-bold">CURRENT PACING MATRIX</span>
              <h3 className="text-base font-extrabold text-white tracking-wide uppercase mt-0.5">
                Week {selectedWeek + 1} of {numWeeks}
              </h3>
            </div>

            <button
              onClick={() => setSelectedWeek(prev => Math.min(numWeeks - 1, prev + 1))}
              disabled={selectedWeek === numWeeks - 1}
              className="w-10 h-10 rounded-xl bg-black border border-[#2C2C2E] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#2C2C2E] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Actual days grid list */}
          <div className="space-y-6">
            {activeWeekSchedule.days.map((day, dIdx) => {
              // Filter day tasks based on segments and hide completed tasks
              const filteredTasks = day.tasks.filter(task => {
                if (!task.isCustomReview && isCompleted(task.id)) return false;
                if (activeSegment === 'all') return true;
                return task.type === activeSegment;
              });

              if (filteredTasks.length === 0) return null;

              return (
                <div key={day.name} className="relative group/day text-left">
                  {/* Visual Left Line Grid timeline */}
                  <div className="absolute left-[15px] top-[40px] bottom-[-24px] w-[2px] bg-[#2C2C2E]/60 group-last/day:hidden" />

                  <div className="flex items-start gap-4">
                    {/* Circle Dot */}
                    <div className="w-8 h-8 rounded-full bg-[#1C1C1E] border-2 border-slate-700 flex items-center justify-center text-[10px] font-bold font-mono text-slate-300 shadow-md shrink-0 mt-1">
                      {day.name.substring(0, 2)}
                    </div>

                    <div className="flex-1 space-y-3">
                      {/* Day Header */}
                      <span className="text-xs font-mono font-black text-slate-200 uppercase tracking-widest">
                        {day.name}
                      </span>

                      {/* Daily Tasks Cards wrapper */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredTasks.map((task) => {
                          const isTaskDone = isCompleted(task.id);
                          
                          return (
                            <div
                              key={task.id}
                              onClick={() => handleOpenTask(task)}
                              className={cn(
                                "p-4.5 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:scale-[1.01] hover:shadow-lg relative text-left min-h-[140px]",
                                isTaskDone 
                                  ? "bg-black/60 border-emerald-500/20 text-slate-450 hover:bg-black/90 grayscale-[35%]" 
                                  : "bg-[#1C1C1E] border-[#2C2C2E] hover:border-slate-700 hover:bg-[#202022]"
                              )}
                            >
                              <div className="space-y-2">
                                <div className="flex items-center justify-between gap-2">
                                  <span className={cn(
                                    "text-[8px] font-mono font-bold uppercase py-0.5 px-2 rounded-full border tracking-wide",
                                    task.badgeStyle
                                  )}>
                                    {task.label}
                                  </span>

                                  <button
                                    onClick={(e) => {
                                      if (task.isCustomReview) {
                                        e.stopPropagation();
                                        return;
                                      }
                                      handleToggleTask(task.id, e);
                                    }}
                                    disabled={task.isCustomReview}
                                    className={cn(
                                      "w-6 h-6 rounded-lg border flex items-center justify-center transition-colors shrink-0",
                                      task.isCustomReview 
                                        ? "opacity-25" 
                                        : isTaskDone 
                                          ? "bg-emerald-500 border-emerald-400 text-black" 
                                          : "border-slate-500 hover:border-slate-400 hover:bg-[#2C2C2E]"
                                    )}
                                  >
                                    {isTaskDone ? <Check className="w-3.5 h-3.5 stroke-[4.5]" /> : null}
                                  </button>
                                </div>

                                <h5 className={cn(
                                  "font-bold text-sm leading-snug tracking-tight text-slate-100 group-hover:text-white transition-colors break-words line-clamp-2",
                                  isTaskDone && "text-slate-400 line-through decoration-emerald-500/10"
                                )}>
                                  {task.title}
                                </h5>
                              </div>

                              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mt-4 pt-3 border-t border-[#2C2C2E]/40 w-full">
                                <span className="flex items-center gap-1.5 font-bold">
                                  <Clock className="w-3 h-3 text-slate-500" />
                                  {task.duration} MIN
                                </span>

                                <span className="text-[#0A84FF] text-[8px] font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                                  {task.isCustomReview ? "Expand Guide" : "Study Now"} <ArrowRight className="w-3 h-3" />
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dynamic Slide-in Immersive Detail Modal Drawer sheet */}
      <AnimatePresence>
        {detailLesson && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[150] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.98, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 15 }}
              className="bg-[#1C1C1E] border border-[#2C2C2E] w-full max-w-4xl rounded-3xl shadow-ios overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with corresponding color accent border */}
              <div 
                className="py-5 px-6 border-b border-[#2C2C2E] flex justify-between items-center bg-black/40"
                style={{ borderTop: `4px solid ${detailLesson.themeColor || '#0A84FF'}` }}
              >
                <div className="space-y-1 text-left min-w-0">
                  <span className={cn(
                    "text-[8px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border",
                    detailLesson.badgeStyle
                  )}>
                    {detailLesson.label} track
                  </span>
                  <p className="text-[#8E8E93] text-[9px] font-mono uppercase tracking-wider truncate mt-1">
                    {detailLesson.areaName ? `${detailLesson.areaName} • ` : ''}{detailLesson.moduleTitle || 'TIMETABLE METRICS'}
                  </p>
                  <h3 className="text-base md:text-lg font-black text-slate-100 tracking-tight leading-none mt-1 break-words">
                    {detailLesson.title}
                  </h3>
                </div>

                <button
                  onClick={() => setDetailLesson(null)}
                  className="w-10 h-10 rounded-xl bg-black border border-[#2C2C2E] flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Unified Contents Body */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[70vh] space-y-8 text-left scrollbar-thin">
                {/* Integration Info Box */}
                {!detailLesson.isCustomReview && (
                  <div className="p-4 bg-black/40 border border-[#2C2C2E] rounded-2xl flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#2C2C2E] rounded-xl flex items-center justify-center text-slate-300">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">ESTIMATED INVESTMENT</span>
                        <span className="text-xs font-bold text-slate-200">{detailLesson.duration} Minutes of Intensive Study</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          progressService.toggleLessonComplete(detailLesson.id);
                          setSessionNonce(prev => prev + 1);
                        }}
                        className={cn(
                          "h-10 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2",
                          isCompleted(detailLesson.id)
                            ? "bg-emerald-500 hover:bg-emerald-600 text-black border border-emerald-400"
                            : "bg-[#2C2C2E] hover:bg-[#3A3A3D] text-slate-200"
                        )}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {isCompleted(detailLesson.id) ? 'Completed check' : 'Mark as completed'}
                      </button>
                    </div>
                  </div>
                )}

                {/* Video Lesson Embed if present */}
                {detailLesson.youtubeVideoId && (
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 flex items-center gap-1.5 leading-none">
                      <PlayCircle className="w-4 h-4 text-rose-500" />
                      Video Instruction Stream
                    </h4>
                    <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-[#2C2C2E] shadow-lg relative">
                      <iframe
                        src={`https://www.youtube.com/embed/${detailLesson.youtubeVideoId}?rel=0&modestbranding=1`}
                        title={detailLesson.title}
                        className="w-full h-full border-0 absolute inset-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {/* Markdown text lecture summary notes */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 flex items-center gap-1.5 leading-none pt-2 border-t border-[#2C2C2E]/45">
                    <Sparkles className="w-4 h-4 text-[#0A84FF]" />
                    Lecture Blueprint Details
                  </h4>
                  <div className="prose prose-invert prose-xs max-w-none text-slate-300 font-sans leading-relaxed space-y-4 mt-2">
                    <ReactMarkdown>{detailLesson.content}</ReactMarkdown>
                  </div>
                </div>

                {/* Interactive Quiz Engine if lesson has one */}
                {detailLesson.quiz && !activeQuiz && (
                  <div className="p-6 bg-gradient-to-r from-[#0A84FF]/10 to-indigo-500/5 border border-[#0A84FF]/25 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-1 text-left">
                      <span className="text-[8px] font-mono font-bold text-[#0A84FF] uppercase tracking-widest leading-none">PRACTICE ASSESSMENTS</span>
                      <h4 className="font-extrabold text-sm text-slate-100 uppercase tracking-wide leading-none mt-1">Practice Quiz Assessment Available</h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-normal">Test your cross-track technical understanding on this lesson immediately to cement retention.</p>
                    </div>

                    <button
                      onClick={() => handleStartQuiz(detailLesson.quiz!)}
                      className="h-10 px-5 bg-[#0A84FF] hover:bg-[#0070E3] text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer shrink-0"
                    >
                      Begin Exercise
                    </button>
                  </div>
                )}

                {/* Live Quiz Engine Player Screen */}
                {activeQuiz && (
                  <div className="p-6 bg-black/40 border border-[#2C2C2E] rounded-2xl space-y-6">
                    <div className="flex justify-between items-center border-b border-[#2C2C2E] pb-3">
                      <div>
                        <span className="text-[8px] font-mono text-[#0A84FF] uppercase tracking-widest font-black block">EXERCISE SHIELD PLAYGROUND</span>
                        <h5 className="font-bold text-xs text-slate-200 uppercase tracking-wider">{activeQuiz.title}</h5>
                      </div>

                      {!showQuizResults && (
                        <span className="text-[10px] font-mono text-slate-500 font-bold">
                          QUESTION {currentQuizQIdx + 1} of {activeQuiz.questions.length}
                        </span>
                      )}
                    </div>

                    {/* Results dashboard overlay */}
                    {showQuizResults ? (
                      <div className="text-center py-6 space-y-4">
                        <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                          <Check className="w-6 h-6 stroke-[3.5]" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-black text-white text-base">Workout Cycle Concluded!</h4>
                          <p className="text-xs text-slate-400 font-mono">SCORED: {quizScore} / {activeQuiz.questions.length} CORRECT ({Math.round(quizScore / activeQuiz.questions.length * 100)}%)</p>
                        </div>

                        <div className="flex gap-3 justify-center pt-2">
                          <button
                            onClick={() => handleStartQuiz(activeQuiz)}
                            className="h-9 px-4 bg-[#2C2C2E] text-slate-200 text-[10px] font-bold uppercase tracking-wider rounded-xl hover:bg-[#3A3A3D] cursor-pointer"
                          >
                            Retake Exercise
                          </button>
                          <button
                            onClick={() => setActiveQuiz(null)}
                            className="h-9 px-4 bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-wider rounded-xl hover:bg-emerald-600 cursor-pointer"
                          >
                            Close Player
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Active Question Details */
                      <div className="space-y-5 text-left">
                        <p className="text-xs md:text-sm font-semibold text-slate-100">
                          {activeQuiz.questions[currentQuizQIdx]?.text}
                        </p>

                        <div className="grid grid-cols-1 gap-2">
                          {activeQuiz.questions[currentQuizQIdx]?.options.map((option, idx) => {
                            const isSelected = selectedQuizOpt === idx;
                            const isAnswerTrue = activeQuiz.questions[currentQuizQIdx].correctAnswerIndex === idx;

                            return (
                              <button
                                key={idx}
                                onClick={() => handleSelectQuizOption(idx)}
                                className={cn(
                                  "w-full text-left p-3.5 rounded-xl border transition-all text-xs font-sans relative cursor-pointer outline-none focus:outline-none flex justify-between items-center group",
                                  isSelected 
                                    ? isQuizAnswered 
                                      ? isAnswerTrue 
                                        ? "bg-emerald-500/15 border-emerald-500/60 text-emerald-400" 
                                        : "bg-rose-500/15 border-rose-500/60 text-rose-450"
                                      : "bg-[#0A84FF]/10 border-[#0A84FF] text-[#0A84FF]"
                                    : isQuizAnswered && isAnswerTrue 
                                      ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                                      : "bg-black/50 border-[#2C2C2E] hover:border-slate-700"
                                )}
                              >
                                <span>{option}</span>
                                {isQuizAnswered && isAnswerTrue && (
                                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Answer Verification Feedback Explanatory Details */}
                        {isQuizAnswered && (
                          <div className="p-4 bg-slate-900/40 border border-[#2C2C2E] rounded-xl space-y-1.5 transition-all text-left">
                            <span className="text-[8px] font-mono uppercase tracking-widest text-slate-500 font-bold block">EXPLANATORY BLUEPRINT NOTES</span>
                            <p className="text-[11px] text-slate-350 leading-relaxed">
                              {activeQuiz.questions[currentQuizQIdx]?.explanation}
                            </p>
                          </div>
                        )}

                        <div className="flex justify-end pt-3">
                          {!isQuizAnswered ? (
                            <button
                              onClick={handleVerifyQuizAnswer}
                              disabled={selectedQuizOpt === null}
                              className="h-9 px-4 bg-[#0A84FF] hover:bg-[#0070E3] disabled:opacity-40 text-white rounded-xl text-[10px] font-mono uppercase font-bold tracking-wide transition-colors cursor-pointer"
                            >
                              Verify Solution
                            </button>
                          ) : (
                            <button
                              onClick={handleNextQuizQuestion}
                              className="h-9 px-4 bg-[#2C2C2E] hover:bg-[#3A3A3D] text-white rounded-xl text-[10px] font-mono uppercase font-bold tracking-wide transition-colors cursor-pointer"
                            >
                              {currentQuizQIdx < activeQuiz.questions.length - 1 ? 'Next Challenge' : 'Complete Assessment'}
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer action portal */}
              <div className="p-4.5 bg-black/40 border-t border-[#2C2C2E] flex justify-end gap-3">
                <button
                  onClick={() => setDetailLesson(null)}
                  className="h-10 px-5 bg-[#2C2C2E] hover:bg-[#3A3A3D] text-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Close Blueprint
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
