import React, { useState, useEffect } from 'react';
import { Quiz } from '../types';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, AlertTriangle, ShieldCheck, Timer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { progressService } from '../services/progressService';
import { achievementService } from '../services/achievementService';

interface QuizEngineProps {
  quiz: Quiz;
  moduleId: string; // Formerly subjectId
  onClose: () => void;
  isExam?: boolean;
}

export default function QuizEngine({ quiz, moduleId, onClose, isExam = false }: QuizEngineProps) {
  const [shuffledQuestions] = useState(() => {
    const questions = quiz.questions || [];
    const shuffled = [...questions];
    
    // Shuffling simple quizzes, keeping exam questions structured
    if (!isExam && shuffled.length > 0) {
      shuffled.sort(() => Math.random() - 0.5);
    }
    
    return shuffled;
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState((isExam ? 15 : 10) * 60); // 15 mins for exam, 10 for quizzes

  useEffect(() => {
    if (showResults) return;
    
    if (timeLeft <= 0) {
      handleFinish(score);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, showResults]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleFinish = (finalScore: number) => {
    const percentage = Math.round((finalScore / shuffledQuestions.length) * 100);
    
    if (isExam) {
      // Record exam attempt
      progressService.recordExamAttempt(quiz.id, finalScore, shuffledQuestions.length, 70);
    } else {
      // Save quiz high score
      progressService.saveQuizScore(quiz.id, percentage);
    }

    // Double check achievements
    const progress = progressService.getProgress();
    const completedCount = progress.completedLessons.length;
    achievementService.checkAchievements(
      10, // Total lesson IDs estimate
      completedCount, 
      isExam ? 0 : percentage, 
      isExam ? quiz.id : null, 
      isExam ? percentage : 0
    );

    setShowResults(true);
  };

  const handleNext = () => {
    // Add score of current answer
    const isCorrect = selectedAnswer === currentQuestion.correctAnswerIndex;
    const nextScore = isCorrect ? score + 1 : score;
    if (isCorrect) setScore(nextScore);

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      handleFinish(nextScore);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
    setTimeLeft((isExam ? 15 : 10) * 60);
  };

  if (showResults) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="max-w-2xl mx-auto p-4 md:py-20 text-center">
        <motion.div 
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 md:p-12 rounded-3xl shadow-ios text-center"
        >
          <div className="w-16 h-16 bg-[#5E5CE6]/10 text-[#5E5CE6] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#2C2C2E] shadow-sm animate-bounce">
            <ShieldCheck className="w-8 h-8" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white tracking-tight">
            {isExam ? 'Exam Completed ✓' : 'Practice Lesson Complete ✓'}
          </h2>
          <p className="text-[#8E8E93] font-mono text-[10px] uppercase tracking-widest mb-8">{quiz.title}</p>
          
          <div className="flex flex-col items-center justify-center mb-10">
            <span className={cn(
              "text-6xl font-black tracking-tight",
              passed ? "text-[#30D158]" : "text-[#FF453A]"
            )}>
              {percentage}%
            </span>
            <span className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest mt-2 font-bold">
              {isExam ? (passed ? 'PASSED (CERTIFICATE UNLOCKED!)' : 'RETRIAL ADVISED') : 'QUIZ SCORE'}
            </span>
          </div>
          
          <p className="text-neutral-400 text-sm leading-relaxed mb-12 max-w-sm mx-auto">
            You successfully answered <span className={cn("font-bold", passed ? "text-[#30D158]" : "text-[#FF453A]")}>{score}</span> out of <span className="text-white font-bold">{shuffledQuestions.length}</span> questions correctly. 
            {isExam ? (
              passed ? ' Congratulations! You have unlocked your certificate badge!' : ' Please review the study notes thoroughly and try again.'
            ) : (
              ' Great job finishing this exercise. Keep up the high standards.'
            )}
          </p>
          
          <div className="flex gap-4 justify-center md:flex-row flex-col">
            <button 
              onClick={resetQuiz} 
              className="h-12 px-6 bg-[#2C2C2E] hover:bg-[#3A3A3C] text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Start
            </button>
            <button 
              onClick={onClose} 
              className="h-12 px-6 bg-[#0A84FF] hover:bg-[#007AFF] text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-sm transition-all inline-flex items-center justify-center cursor-pointer"
            >
              Back to Course
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-6 pb-24 px-4 text-left">
      {/* Session Progress Header */}
      <div className="mb-6 flex items-center justify-between sticky top-0 bg-[#050507]/95 backdrop-blur-md z-30 py-4 border-b border-[#2C2C2E] rounded-b-2xl">
        <div className="flex items-center gap-4">
          <div className={cn(
            "h-11 px-4 rounded-xl flex items-center gap-2 font-mono text-xs border bg-[#1C1C1E] text-neutral-200 transition-colors",
            timeLeft < 180 ? "border-[#FF453A] bg-[#FF453A]/10 text-[#FF453A]" : "border-[#2C2C2E]"
          )}>
            <Timer className={cn("w-4 h-4", timeLeft < 180 && "animate-pulse")} />
            {formatTime(timeLeft)}
          </div>
          <div className="text-left">
            <span className="text-[9px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold">
              {isExam ? 'Certification Exam Session' : 'Practice Lesson Quiz'}
            </span>
            <p className="text-xs font-bold text-white tracking-tight hidden sm:block truncate max-w-[240px] mt-0.5">{quiz.title}</p>
          </div>
        </div>
        
        <div className="text-right text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold">
          Question <span className="text-[#0A84FF] font-bold text-xs">{currentQuestionIndex + 1}</span> of {shuffledQuestions.length}
        </div>
      </div>

      {/* Progress slider bar */}
      <div className="w-full bg-[#1C1C1E] h-1.5 rounded-full mb-8 overflow-hidden border border-[#2C2C2E]">
        <motion.div 
          className="bg-[#0A84FF] h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="bg-[#1C1C1E] border border-[#2C2C2E] p-6 md:p-10 rounded-2xl shadow-ios text-left">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentQuestionIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-left"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#5E5CE6]/10 text-[#5E5CE6] border border-[#2C2C2E] rounded-md text-[9px] font-mono uppercase tracking-widest mb-6 font-bold">
              QUESTION #{currentQuestionIndex + 1}
            </span>
            
            <h3 className="text-lg md:text-xl font-bold mb-8 text-white leading-relaxed tracking-tight text-left">
              {currentQuestion.text}
            </h3>

            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const isCorrect = idx === currentQuestion.correctAnswerIndex;
                const isSelected = idx === selectedAnswer;
                
                let btnStyle = "bg-[#2C2C2E]/30 border-[#2C2C2E] text-neutral-300 hover:border-neutral-500 hover:bg-[#2C2C2E]/60";
                
                if (isAnswered) {
                  if (isCorrect) {
                    btnStyle = "bg-[#30D158]/10 border-[#30D158]/50 text-[#30D158] font-semibold";
                  } else if (isSelected) {
                    btnStyle = "bg-[#FF453A]/10 border-[#FF453A]/50 text-[#FF453A] font-semibold";
                  }
                } else if (isSelected) {
                  btnStyle = "bg-[#0A84FF]/10 border-[#0A84FF] text-white font-medium";
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleAnswerSelect(idx)}
                    className={cn(
                      "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-4 group cursor-pointer select-none",
                      btnStyle
                    )}
                  >
                    <div className={cn(
                      "w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-colors",
                      isSelected ? "bg-[#0A84FF] border-[#0A84FF] text-white" : "border-[#2C2C2E] bg-black/40 text-[#8E8E93] group-hover:border-[#8E8E93] group-hover:text-white"
                    )}>
                      {String.fromCharCode(64 + idx + 1)}
                    </div>
                    
                    <span className="flex-1 font-sans text-sm font-normal">
                      {option}
                    </span>
                    
                    {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-[#30D158] shrink-0" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-[#FF453A] shrink-0" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 pt-8 border-t border-[#2C2C2E] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1 w-full min-h-[60px] text-left">
                <AnimatePresence>
                  {isAnswered && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-black/40 rounded-xl text-xs font-sans text-neutral-350 flex gap-3 border border-[#2C2C2E] text-left"
                    >
                      <AlertTriangle className="w-4 h-4 shrink-0 text-[#0A84FF] mt-0.5" />
                      <div className="text-left w-full text-neutral-300">
                        <span className="block font-bold text-[10px] text-[#0A84FF] uppercase tracking-widest mb-1">Explanation Hint</span>
                        <p className="leading-relaxed text-neutral-350 text-left">{currentQuestion.explanation}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <button
                disabled={selectedAnswer === null}
                onClick={() => {
                  if (!isAnswered) setIsAnswered(true);
                  else handleNext();
                }}
                className={cn(
                  "h-12 px-8 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 active:scale-95 transition-all w-full md:w-auto justify-center shrink-0 border-0 outline-none select-none cursor-pointer",
                  selectedAnswer === null 
                    ? "bg-[#2C2C2E] text-[#8E8E93] cursor-not-allowed" 
                    : "bg-[#0A84FF] hover:bg-[#007AFF] text-white shadow-sm"
                )}
              >
                {isAnswered ? (currentQuestionIndex === shuffledQuestions.length - 1 ? 'Finish Results' : 'Next Question') : 'Check Answer'}
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
