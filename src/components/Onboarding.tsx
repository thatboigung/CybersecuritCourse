import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, ShieldCheck, FileText, Info, UserPlus, LogIn,
  CheckCircle2, ArrowLeft, Zap, Terminal, Shield, Key
} from 'lucide-react';
import { cn } from '../lib/utils';

interface OnboardingProps {
  onComplete: () => void;
}

type SlideId = 'welcome' | 'about' | 'auth';

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [authMode, setAuthMode] = useState<'login' | 'register'>(() => {
    return localStorage.getItem('cyber_tpin') ? 'login' : 'register';
  });
  const [currentSlide, setCurrentSlide] = useState<SlideId>(() => {
    return localStorage.getItem('cyber_tpin') ? 'auth' : 'welcome';
  });
  const [direction, setDirection] = useState(1);
  const [tpin, setTpin] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const allSlides: { id: SlideId; title: string }[] = [
    { id: 'welcome', title: 'Welcome' },
    { id: 'about', title: 'Syllabus' },
    { id: 'auth', title: authMode === 'register' ? 'Register' : 'Login' },
  ];

  const handleAuth = () => {
    setError('');
    const storedTpin = localStorage.getItem('cyber_tpin');

    if (authMode === 'login') {
      if (tpin === storedTpin) {
        onComplete();
      } else {
        setError('Incorrect security PIN. Please try again.');
        setTpin('');
      }
    } else {
      if (tpin.length !== 4) {
        setError('Incorrect PIN format. Passcode must be exactly 4 digits.');
        return;
      }
      if (!name) {
        setError('Please enter your name.');
        return;
      }
      localStorage.setItem('cyber_tpin', tpin);
      localStorage.setItem('cyber_candidate_name', name);
      onComplete();
    }
  };

  const nextSlide = (id: SlideId) => {
    setDirection(1);
    setCurrentSlide(id);
  };

  const prevSlide = (id: SlideId) => {
    setDirection(-1);
    setCurrentSlide(id);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-[130] overflow-hidden">
      {/* Decorative dark grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25" />
      
      <div className="w-full max-w-lg px-6 relative z-10">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
            className="backdrop-blur-xl bg-slate-900/60 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-3xl text-slate-200"
          >
            {/* WELCOME SLIDE */}
            {currentSlide === 'welcome' && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-indigo-600/10 text-indigo-400 border border-indigo-500/25 rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-8">
                  <Terminal className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase">3-Track Mastery Suite</span>
                  <h1 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight leading-tight">
                    DevSec Academy
                  </h1>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                  A high-calibre co-curriculum unifying Cyber Security, Ethical Hacking, and Full-Stack development engineered with concurrent-study timetables, smart practice queries, and practical milestones.
                </p>

                <div className="pt-6">
                  <button 
                    onClick={() => nextSlide('about')}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-600/20 active:scale-95 group"
                  >
                    Get Started
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* ROADMAP OVERVIEW */}
            {currentSlide === 'about' && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-2xl shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Syllabus Overview</span>
                    <h2 className="text-xl font-bold text-slate-100">7 Core Technical Areas</h2>
                  </div>
                </div>

                <div className="space-y-3 font-sans">
                  <div className="flex gap-4 p-4 bg-slate-950/40 rounded-xl border border-slate-850">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-300 flex items-center justify-center shrink-0 border border-indigo-500/20">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-200 text-xs text-left">Micro Lectures</h3>
                      <p className="text-[11px] text-slate-400 text-left mt-0.5">Stream high-quality video tutorials mapped directly to the lesson material.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-slate-950/40 rounded-xl border border-slate-850">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-300 flex items-center justify-center shrink-0 border border-indigo-500/20">
                      <Key className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-200 text-xs text-left">Practice Quizzes</h3>
                      <p className="text-[11px] text-slate-400 text-left mt-0.5">Take quizzes at your own pace and test your knowledge with end-of-unit practice exams.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <button 
                    onClick={() => prevSlide('welcome')}
                    className="p-3.5 rounded-xl border border-slate-800 text-slate-400 hover:text-slate-200 bg-slate-950 hover:bg-slate-900 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => nextSlide('auth')}
                    className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95 group"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* AUTH SLIDE */}
            {currentSlide === 'auth' && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl md:text-2xl font-black text-slate-100">{authMode === 'register' ? 'Create Profile' : 'Enter Security PIN'}</h2>
                  <p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-widest">
                    {authMode === 'register' 
                      ? 'Set up a local profile to store your progress.' 
                      : 'Enter your passcode to restore your progress.'}
                  </p>
                </div>

                <div className="space-y-4">
                  {authMode === 'register' && (
                    <div className="space-y-2">
                      <label className="text-[9px] font-mono uppercase tracking-widest text-slate-500">Your Name</label>
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alice Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-100 placeholder:text-slate-700 bg-slate-950"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono uppercase tracking-widest text-slate-500">4-Digit Passcode</label>
                    <input 
                      type="password" 
                      value={tpin}
                      onChange={(e) => setTpin(e.target.value.replace(/\D/g, ''))}
                      placeholder="••••"
                      maxLength={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-indigo-500 bg-slate-950 font-black text-slate-100 outline-none text-center text-xl tracking-[0.5em] tabular-nums"
                    />
                  </div>

                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[9px] font-mono font-bold text-rose-400 text-center uppercase tracking-wider mt-2"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                <div className="pt-6 space-y-4">
                  <button 
                    onClick={handleAuth}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95"
                  >
                    {authMode === 'register' ? 'Set Passcode' : 'Access Workspace'}
                  </button>
                  
                  <button 
                    onClick={() => {
                      setAuthMode(authMode === 'register' ? 'login' : 'register');
                      setError('');
                    }}
                    className="w-full text-[10px] font-mono text-slate-500 hover:text-indigo-400 transition-colors uppercase tracking-widest"
                  >
                    {authMode === 'register' ? 'Already have a profile? Login' : "Need to start fresh? Register"}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <p className="mt-8 text-center text-[10px] font-mono text-slate-650 uppercase tracking-widest">
          Cybersecurity Master • v3.5.0
        </p>
      </div>
    </div>
  );
}
