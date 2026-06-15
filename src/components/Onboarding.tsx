import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, ArrowRight, User, Key, Info, 
  Terminal, ShieldCheck, Sun, Moon, Sparkles, 
  HelpCircle, RefreshCw, Layers, Shield, Cpu
} from 'lucide-react';
import { cn } from '../lib/utils';

interface OnboardingProps {
  onComplete: () => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [authMode, setAuthMode] = useState<'register' | 'login'>(() => {
    return localStorage.getItem('cyber_tpin') ? 'login' : 'register';
  });

  const [tpin, setTpin] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [gravityActive, setGravityActive] = useState(false);
  const [draggedCount, setDraggedCount] = useState(0);

  const sandboxRef = useRef<HTMLDivElement>(null);

  const savedName = localStorage.getItem('cyber_candidate_name') || 'Sec Cadet';

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
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
        setError('Passcode must be exactly 4 digits.');
        return;
      }
      if (!name.trim()) {
        setError('Please enter your candidate name.');
        return;
      }
      localStorage.setItem('cyber_tpin', tpin);
      localStorage.setItem('cyber_candidate_name', name.trim());
      onComplete();
    }
  };

  // 10 key subjects representing the curriculum modules that float in Zero-G
  const initialSandboxItems = [
    { title: "Pure Mathematics", x: 40, y: 50, color: "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100/70" },
    { title: "Binary Logic", x: 230, y: 40, color: "bg-cyan-50 border-cyan-200 text-cyan-700 hover:bg-cyan-100/70" },
    { title: "OSI Protocols", x: 120, y: 120, color: "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100/70" },
    { title: "SaaS Economics", x: 290, y: 110, color: "bg-violet-50 border-violet-200 text-violet-700 hover:bg-violet-100/70" },
    { title: "React components", x: 30, y: 200, color: "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100/70" },
    { title: "Docker Containerization", x: 210, y: 180, color: "bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100/70" },
    { title: "Ubuntu Ethics", x: 50, y: 280, color: "bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100/70" },
    { title: "Ethical Hacking", x: 250, y: 260, color: "bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100/70" },
    { title: "SQL Databases", x: 130, y: 240, color: "bg-sky-50 border-sky-200 text-sky-700 hover:bg-sky-100/70" },
    { title: "Big Data Pipelines", x: 110, y: 320, color: "bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100/70" },
  ];

  const handleDragStart = () => {
    setDraggedCount(prev => prev + 1);
  };

  return (
    <div className="fixed inset-0 bg-zinc-50/80 text-zinc-800 flex flex-col z-[130] overflow-y-auto font-sans selection:bg-indigo-600/10 selection:text-indigo-900">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-35 pointer-events-none" />
      
      {/* Decorative Blur blobs in upper left & bottom right */}
      <div className="absolute top-[-10%] left-[-10%] w-[45rem] h-[45rem] rounded-full bg-indigo-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-15%] w-[40rem] h-[40rem] rounded-full bg-blue-200/20 blur-[120px] pointer-events-none" />

      {/* Modern Light Minimalist Header */}
      <header className="sticky top-0 z-[140] w-full bg-white/75 backdrop-blur-md border-b border-zinc-100 h-16 flex items-center shrink-0">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-xs select-none shadow-sm">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-xs font-black tracking-widest text-zinc-900 uppercase">DevSec Academy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Landing Structure */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center relative z-10">
        
        {/* Left Column: Branding details & Secure Login Form */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-center h-full text-left">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 border border-zinc-200 text-zinc-800 rounded-full text-xs font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Interactive Co-Curriculum</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
              Master Advanced Computer Science.
            </h1>
            
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-lg mt-3">
              An advanced curriculum unifying Mathematics, Cybersecurity protocols, and robust Full-Stack architectures. Designed with paced learning loops and visual progress tracking.
            </p>
          </div>

          {/* Secure Entrance Workspace Card - Ultra-Minimalist & Beautiful */}
          <div className="bg-white border border-zinc-150 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
            <form onSubmit={handleAuth} className="space-y-6">
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">Secure Entrance</span>
                <h2 className="text-xl font-extrabold text-zinc-900 tracking-tight">
                  {authMode === 'register' ? 'Create Your Account' : 'Welcome Back'}
                </h2>
                <p className="text-xs text-zinc-550 leading-relaxed text-zinc-500">
                  {authMode === 'register' 
                    ? 'Enter your name and choose a PIN to initialize your local dashboard.' 
                    : `Hi ${savedName}, enter your PIN to continue your learning journey.`
                  }
                </p>
              </div>

              <div className="space-y-5 pt-1">
                {authMode === 'register' && (
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alice Carter"
                      className="w-full py-2.5 bg-transparent border-b border-zinc-200 focus:border-zinc-900 focus:outline-none font-medium text-zinc-900 placeholder:text-zinc-300 text-sm transition-colors rounded-none"
                    />
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">4-Digit Security PIN</label>
                  <input 
                    type="password" 
                    required
                    value={tpin}
                    onChange={(e) => setTpin(e.target.value.replace(/\D/g, ''))}
                    placeholder="••••"
                    maxLength={4}
                    className="w-full py-2.5 bg-transparent border-b border-zinc-200 focus:border-zinc-900 focus:outline-none text-center font-mono font-bold text-lg tracking-[0.5em] tabular-nums transition-colors rounded-none"
                  />
                </div>

                {error && (
                  <div className="p-2.5 bg-rose-50 border border-rose-100 rounded-xl">
                    <p className="text-[10px] font-mono font-bold text-rose-600 tracking-wide text-center uppercase">
                      {error}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-2 space-y-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-850 text-white py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-sm active:scale-98 cursor-pointer select-none"
                >
                  <span>{authMode === 'register' ? 'Get Started' : 'Enter Dashboard'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex justify-center text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode(authMode === 'register' ? 'login' : 'register');
                      setError('');
                      setTpin('');
                    }}
                    className="hover:text-zinc-900 transition-colors cursor-pointer select-none outline-none border-b border-transparent hover:border-zinc-500 pb-0.5"
                  >
                    {authMode === 'register' ? 'Student login' : 'Create profile'}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Quick Curriculum Tracks Summary */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-white border border-zinc-150 rounded-xl shadow-xs text-left">
              <span className="text-[8px] font-mono font-bold text-blue-650 uppercase">Track 01</span>
              <h3 className="text-xs font-bold text-zinc-805 mt-0.5">Math</h3>
            </div>
            <div className="p-3 bg-white border border-zinc-150 rounded-xl shadow-xs text-left">
              <span className="text-[8px] font-mono font-bold text-rose-655 uppercase">Track 02</span>
              <h3 className="text-xs font-bold text-zinc-805 mt-0.5">Computer Sci</h3>
            </div>
            <div className="p-3 bg-white border border-zinc-150 rounded-xl shadow-xs text-left">
              <span className="text-[8px] font-mono font-bold text-emerald-655 uppercase">Track 03</span>
              <h3 className="text-xs font-bold text-zinc-805 mt-0.5">Full-Stack</h3>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive sandbox container with weightless elements */}
        <div className="lg:col-span-7 flex flex-col gap-5 self-stretch h-full justify-center">

          {/* Interactive Sandbox Container */}
          <div 
            ref={sandboxRef}
            className="flex-1 min-h-[440px] lg:min-h-[480px] bg-white border border-zinc-200 shadow-xl rounded-2xl relative overflow-hidden select-none p-6"
          >
            {/* Subtle Sandbox Background Elements */}
            <div className="absolute inset-0 bg-[#fbfbfb] bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            {/* Sandbox Center Logo Placeholder */}
            <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 flex flex-col items-center justify-center opacity-10 pointer-events-none text-center">
              <Layers className="w-16 h-16 text-zinc-400 mb-2" />
              <div className="text-xs font-mono font-extrabold uppercase tracking-[0.3em]">Curriculum Elements</div>
            </div>

            {/* Sandbox Internal Header and Controllers */}
            <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-auto z-20">
              <div className="flex items-center gap-1.5">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${gravityActive ? 'bg-rose-400' : 'bg-emerald-400'} opacity-75`} />
                  <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${gravityActive ? 'bg-rose-500' : 'bg-emerald-500'}`} />
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGravityActive(!gravityActive)}
                  className={cn(
                    "p-2 rounded-xl transition-all shadow-xs border flex items-center justify-center outline-none cursor-pointer select-none",
                    gravityActive 
                      ? "bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100" 
                      : "bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                  )}
                  title={gravityActive ? "Zero Gravity" : "Add Gravity"}
                >
                  <RefreshCw className={cn("w-4 h-4", !gravityActive && "animate-spin")} />
                </button>
              </div>
            </div>

            {/* Interactive Draggable Floating Curriculum Blocks */}
            <div className="absolute inset-0 pt-16 pb-6 px-6 pointer-events-none">
              {initialSandboxItems.map((item, idx) => {
                // Calculate position when gravity acts on elements (tumble towards bottom)
                const groundY = 320; // safe coordinate for container bottom
                const gravityX = 30 + (idx * 55) % (sandboxRef.current?.offsetWidth ? sandboxRef.current.offsetWidth - 160 : 360);
                const gravityY = groundY + ((idx % 3) * 12); // Stack randomly near ground

                const currentX = gravityActive ? gravityX : item.x;
                const currentY = gravityActive ? gravityY : item.y;

                return (
                  <motion.div
                    key={idx}
                    drag={true}
                    dragConstraints={sandboxRef}
                    dragElastic={0.4}
                    dragMomentum={true}
                    onDragStart={handleDragStart}
                    whileDrag={{ scale: 1.12, zIndex: 50, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                    animate={gravityActive ? {
                      x: currentX,
                      y: currentY,
                      rotate: [null, (idx * 17) % 20 - 10],
                    } : {
                      x: currentX,
                      y: [currentY - 10, currentY + 10, currentY - 10],
                      rotate: [0, idx % 2 === 0 ? 4 : -4, 0],
                      transition: {
                        duration: 3.5 + (idx % 3),
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }
                    }}
                    transition={gravityActive ? {
                      type: "spring",
                      stiffness: 140,
                      damping: 15,
                    } : {
                      type: "tween"
                    }}
                    className={cn(
                      "absolute px-3 py-2 rounded-xl text-xs font-bold border shadow-xs flex items-center gap-1.5 cursor-grab active:cursor-grabbing select-none pointer-events-auto transition-colors z-10",
                      item.color
                    )}
                  >
                    <span>{item.title}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Hint overlay at the bottom of the playground container */}
            <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[8px] font-mono text-zinc-400 pointer-events-none">
              <span>{draggedCount > 0 ? `Toss count: ${draggedCount}` : "Try flinging elements with cursor"}</span>
            </div>

          </div>

        </div>

      </main>

      {/* Modern High-End Minimalist Footer */}
      <footer className="w-full bg-white border-t border-zinc-100 py-6 mt-12 text-center text-[9px] font-mono text-zinc-400 uppercase tracking-widest shrink-0 relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>DevSec Study Terminal</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
