import { UserProgress } from '../types';

const STORAGE_KEY = 'cyber_mastery_progress';

const defaultProgress: UserProgress = {
  completedLessons: [],
  quizScores: {},
  examAttempts: {},
  completedLabs: []
};

export const progressService = {
  getProgress: (): UserProgress => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return defaultProgress;
    try {
      const parsed = JSON.parse(data);
      return {
        completedLessons: parsed.completedLessons || [],
        quizScores: parsed.quizScores || {},
        examAttempts: parsed.examAttempts || {},
        completedLabs: parsed.completedLabs || []
      };
    } catch (e) {
      return defaultProgress;
    }
  },

  saveProgress: (progress: UserProgress) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  },

  isLabCompleted: (labId: string): boolean => {
    const progress = progressService.getProgress();
    return (progress.completedLabs || []).includes(labId);
  },

  completeLab: (labId: string) => {
    const progress = progressService.getProgress();
    const list = progress.completedLabs || [];
    if (!list.includes(labId)) {
      list.push(labId);
      progress.completedLabs = list;
      progressService.saveProgress(progress);
    }
  },

  toggleLessonComplete: (lessonId: string): boolean => {
    const progress = progressService.getProgress();
    const index = progress.completedLessons.indexOf(lessonId);
    let completed = false;
    
    if (index > -1) {
      progress.completedLessons.splice(index, 1);
    } else {
      progress.completedLessons.push(lessonId);
      completed = true;
    }
    
    progressService.saveProgress(progress);
    return completed;
  },

  isLessonCompleted: (lessonId: string): boolean => {
    const progress = progressService.getProgress();
    return progress.completedLessons.includes(lessonId);
  },

  saveQuizScore: (quizId: string, percentage: number) => {
    const progress = progressService.getProgress();
    const currentHigh = progress.quizScores[quizId] || 0;
    if (percentage > currentHigh) {
      progress.quizScores[quizId] = percentage;
      progressService.saveProgress(progress);
    }
  },

  getQuizHighScore: (quizId: string): number => {
    const progress = progressService.getProgress();
    return progress.quizScores[quizId] || 0;
  },

  recordExamAttempt: (examId: string, score: number, total: number, passMark: number) => {
    const progress = progressService.getProgress();
    const pct = Math.round((score / total) * 100);
    const passed = pct >= passMark;
    
    progress.examAttempts[examId] = {
      score,
      total,
      passed,
      timestamp: new Date().toISOString()
    };
    
    progressService.saveProgress(progress);
    return passed;
  },

  getExamAttempt: (examId: string) => {
    const progress = progressService.getProgress();
    return progress.examAttempts[examId] || null;
  },

  getOverallCompletionPercentage: (lessonIds: string[]): number => {
    if (lessonIds.length === 0) return 0;
    const progress = progressService.getProgress();
    const completedInList = lessonIds.filter(id => progress.completedLessons.includes(id)).length;
    return Math.round((completedInList / lessonIds.length) * 100);
  },

  resetProgress: () => {
    progressService.saveProgress(defaultProgress);
  }
};
