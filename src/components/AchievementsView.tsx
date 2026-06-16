import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, Target, Flame, Award, Star, Zap, Clock, BookOpen, 
  CheckCircle2, Lock, Shield, Cpu, Key, Terminal, Activity, ShieldAlert,
  Database, GraduationCap
} from 'lucide-react';
import { cn } from '../lib/utils';
import { achievementService } from '../services/achievementService';
import { progressService } from '../services/progressService';
import { ROADMAP_AREAS, MODULES } from '../data';

const ICON_MAP: Record<string, any> = {
  Shield,
  Cpu,
  Flame,
  Award,
  Key,
  Zap,
  Activity,
  Terminal,
  Database,
  GraduationCap
};

export default function AchievementsView() {
  const achievements = achievementService.getAchievements();
  const progress = progressService.getProgress();
  
  const earnedCount = achievements.filter(a => a.earned).length;

  const stats = useMemo(() => {
    // 1. Lessons progress
    const allLessons = MODULES.flatMap(m => m.lessons);
    const completedLessonsCount = progress.completedLessons.length;
    
    // 2. Exams progress
    const exams = MODULES.filter(m => m.exam).map(m => m.exam!);
    const examAttemptsList = Object.values(progress.examAttempts);
    const passedExamsCount = examAttemptsList.filter(e => e.passed).length;

    // 3. Average Accuracy (Quizzes & Exams combined)
    const quizScoresList = Object.values(progress.quizScores);
    const examScoresList = examAttemptsList.map(a => Math.round((a.score / a.total) * 100));
    const allScoresCombined = [...quizScoresList, ...examScoresList];
    const avgAccuracy = allScoresCombined.length > 0
      ? Math.round(allScoresCombined.reduce((acc, s) => acc + s, 0) / allScoresCombined.length)
      : 0;

    // 4. Study Streak Estimate
    const streakDays = completedLessonsCount > 0 ? Math.min(14, completedLessonsCount + 2) : 0;

    return { completedLessonsCount, totalLessonsCount: allLessons.length, passedExamsCount, totalExamsCount: exams.length, avgAccuracy, streakDays };
  }, [progress]);

  // Total XP score calculation
  const totalXP = useMemo(() => {
    const lessonXP = progress.completedLessons.length * 100;
    const quizXP = Object.keys(progress.quizScores).length * 150;
    const examXP = Object.values(progress.examAttempts).filter(e => e.passed).length * 500;
    const badgeXP = earnedCount * 300;
    return lessonXP + quizXP + examXP + badgeXP;
  }, [progress, earnedCount]);

  const cardsStats = [
    { label: 'Exams Passed', value: `${stats.passedExamsCount} / ${stats.totalExamsCount}`, icon: Award, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { label: 'Core Study Streak', value: `${stats.streakDays} Days`, icon: Flame, color: 'text-orange-400', bg: 'bg-orange-500/10' },
    { label: 'Avg. Lab Accuracy', value: `${stats.avgAccuracy}%`, icon: Target, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { label: 'Completed Lessons', value: `${stats.completedLessonsCount} / ${stats.totalLessonsCount}`, icon: BookOpen, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  ];

  return (
    <div className="w-full space-y-12 pb-20 animate-in fade-in duration-500 text-left">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 font-bold">Your Learning Profile</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight mt-0.5 animate-fade-in">Hall of Achievements</h2>
          <p className="text-slate-400 font-medium text-xs md:text-sm">Track your learning milestones, earned badges, and course statistics here.</p>
        </div>
        
        <div className="flex items-center gap-4 p-5 md:p-6 bg-[#161618] border border-zinc-800/70 rounded-2xl text-slate-100 shadow-md shrink-0">
          <div className="w-12 h-12 rounded-xl bg-[#2C2C2E]/50 border border-zinc-800 text-indigo-400 flex items-center justify-center shadow-md">
            <Trophy className="w-6 h-6 text-indigo-400" />
          </div>
          <div className="text-left">
            <div className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-bold">Accumulated XP</div>
            <div className="text-xl md:text-2xl font-bold font-mono text-slate-100 tracking-tight mt-0.5">{totalXP.toLocaleString()} XP</div>
          </div>
        </div>
      </div>

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {cardsStats.map((stat, idx) => (
          <div key={idx} className="bg-[#161618] border border-zinc-800/70 p-6 rounded-2xl flex flex-col gap-6 shadow-md text-left">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-zinc-800/40", stat.bg)}>
              <stat.icon className={cn("w-5 h-5", stat.color)} />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-slate-100 font-mono text-left">{stat.value}</div>
              <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-1.5 font-bold text-left">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Badges Section */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-bold text-slate-100 tracking-tight">Skill Badges</h3>
          <div className="h-[1px] bg-zinc-800 flex-1" />
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">{earnedCount} / {achievements.length} Unlocked</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((badge) => {
            const BadgeIcon = ICON_MAP[badge.icon] || Trophy;
            return (
              <div 
                key={badge.id}
                className={cn(
                  "p-6 rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col h-full shadow-md text-left border",
                  badge.earned 
                    ? "bg-[#161618] border-zinc-800/70" 
                    : "bg-[#161618]/45 border-zinc-900/40 opacity-60 grayscale"
                )}
              >
                {badge.earned && (
                  <div className="absolute top-4 right-4">
                    <span className={cn(
                      "px-2.5 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-widest b-0",
                      badge.rarity === 'Legendary' ? "bg-amber-500/10 text-amber-400" :
                      badge.rarity === 'Epic' ? "bg-rose-500/10 text-rose-400" :
                      badge.rarity === 'Rare' ? "bg-indigo-500/10 text-indigo-400" :
                      "bg-[#2C2C2E]/60 text-slate-400"
                    )}>
                      {badge.rarity}
                    </span>
                  </div>
                )}

                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-6 border",
                  badge.earned 
                    ? "bg-indigo-500/10 border-indigo-500/10 text-indigo-400" 
                    : "bg-[#2C2C2E]/50 border-zinc-850 text-slate-550 text-slate-500"
                )}>
                  {badge.earned ? <BadgeIcon className="w-6 h-6" /> : <Lock className="w-5 h-5" />}
                </div>

                <div className="flex-1 text-left">
                  <h4 className="text-sm font-bold text-slate-100 mb-1 leading-tight">{badge.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">{badge.description}</p>
                </div>
                
                {badge.earned && (
                  <div className="mt-6 pt-4 border-t border-zinc-830 border-zinc-800/60 flex items-center gap-1.5 text-emerald-405 text-emerald-400 text-left">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-mono uppercase tracking-widest font-bold">Unlocked ✓</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
