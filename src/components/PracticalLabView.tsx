import React, { useState, useEffect } from 'react';
import { PracticalLab } from '../types';
import { 
  ShieldAlert, Terminal, Network, ListChecks, HelpCircle, 
  Key, Award, ChevronRight, CheckCircle2, Lock, Unlock, AlertTriangle, Play 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { progressService } from '../services/progressService';

interface PracticalLabViewProps {
  lab: PracticalLab;
  onClose: () => void;
  onCompleteSuccess?: () => void;
}

export default function PracticalLabView({ lab, onClose, onCompleteSuccess }: PracticalLabViewProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [flagInput, setFlagInput] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  
  const isPreviouslyCompleted = progressService.isLabCompleted(lab.id);

  useEffect(() => {
    // Reset state when active lab shifts
    setCheckedItems({});
    setFlagInput('');
    setSubmissionStatus(isPreviouslyCompleted ? 'success' : 'idle');
    setErrorMessage('');
    setRevealedHints({});
  }, [lab.id, isPreviouslyCompleted]);

  const toggleCheck = (itemId: string) => {
    if (isPreviouslyCompleted) return;
    setCheckedItems(prev => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const toggleHint = (checkId: string) => {
    setRevealedHints(prev => ({ ...prev, [checkId]: !prev[checkId] }));
  };

  const handleFlagSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!flagInput.trim()) return;

    if (flagInput.trim() === lab.expectedFlag) {
      progressService.completeLab(lab.id);
      setSubmissionStatus('success');
      setErrorMessage('');
      if (onCompleteSuccess) {
        onCompleteSuccess();
      }
    } else {
      setSubmissionStatus('error');
      setErrorMessage('Access Denied: Invalid cryptographic flag signature. Check your work or verify your environment values.');
    }
  };

  const allChecksPassed = lab.verificationChecks.every(check => checkedItems[check.id]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300 text-left px-4 pb-24">
      {/* Lab Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2C2C2E]">
        <div>
          <span className={cn(
            "px-2.5 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-widest border mr-2",
            lab.difficulty === 'Advanced' ? "bg-rose-500/10 border-rose-500/20 text-rose-400" :
            lab.difficulty === 'Intermediate' ? "bg-violet-500/10 border-violet-500/20 text-indigo-400" :
            "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
          )}>
            {lab.difficulty} Lab
          </span>
          <span className="text-[10px] font-mono text-[#8E8E93] font-bold uppercase tracking-widest">
            {lab.estimatedTime} Mins • {lab.xpReward} XP
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1.5">{lab.title}</h2>
        </div>

        <button 
          onClick={onClose}
          className="h-10 px-5 text-xs font-bold uppercase tracking-wider bg-[#2C2C2E] hover:bg-[#3A3A3C] text-neutral-300 border border-[#2C2C2E] rounded-xl transition-all shadow-sm self-start sm:self-center cursor-pointer outline-none"
        >
          Exit Cyber Lab
        </button>
      </div>      {/* LAB PERSISTED COMPLETION NOTICE */}
      {isPreviouslyCompleted && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 bg-[#30D158]/5 border border-[#30D158]/20 rounded-2xl flex items-center gap-4 text-[#30D158] shadow-sm"
        >
          <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center border border-[#30D158]/20 shadow-sm shrink-0">
            <Award className="w-6 h-6 text-[#30D158]" />
          </div>
          <div className="flex-1 text-left min-w-0">
            <h4 className="font-bold text-sm tracking-tight text-white">Lab Completed!</h4>
            <p className="text-xs text-neutral-300 mt-1">This exercise has been successfully validated. You earned <span className="font-bold text-[#30D158]">{lab.xpReward} XP</span>. You can review your work below.</p>
          </div>
        </motion.div>
      )}

      {/* THREE PANEL GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: OBJECTIVE PANEL & TOPOLOGY */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* TOPOLOGY CARD */}
          <div className="p-6 bg-[#1C1C1E] border border-[#2C2C2E] rounded-2xl shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Network className="w-5 h-5 text-[#0A84FF]" />
              <h3 className="font-bold text-sm text-white tracking-tight">Target Lab Setup</h3>
            </div>
            <p className="text-neutral-300 text-xs leading-relaxed">{lab.topology.description}</p>
            
            {/* Network Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {lab.topology.nodes.map((node, i) => (
                <div key={i} className="p-3 bg-black/40 border border-[#2C2C2E] rounded-xl relative overflow-hidden flex flex-col justify-between">
                  <span className="text-[8px] font-mono font-bold text-[#0A84FF] uppercase tracking-widest">{node.ip}</span>
                  <h4 className="font-bold text-xs text-white mt-1">{node.name}</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">{node.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RULES OF ENGAGEMENT CARD */}
          <div className="p-6 bg-[#1C1C1E] border border-[#2C2C2E] rounded-2xl shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#FF453A]" />
              <h3 className="font-bold text-sm text-white tracking-tight">Lab Guidelines</h3>
            </div>
            <ul className="space-y-2 text-xs text-[#8E8E93] leading-relaxed list-inside list-[circle] marker:text-[#FF453A] pl-1">
              {lab.rulesOfEngagement.map((rule, idx) => (
                <li key={idx} className="pl-1 text-left text-neutral-300">{rule}</li>
              ))}
            </ul>
          </div>

          {/* MILESTONES CARD */}
          <div className="p-6 bg-[#1C1C1E] border border-[#2C2C2E] rounded-2xl shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#0A84FF]" />
              <h3 className="font-bold text-sm text-white tracking-tight">Lab Tasks</h3>
            </div>
            <div className="space-y-4">
              {lab.milestones.map((milestone, idx) => (
                <div key={milestone.id} className="flex gap-4 p-4 border border-[#2C2C2E] rounded-xl hover:bg-black/40 transition-colors">
                  <div className="w-6 h-6 rounded bg-[#2C2C2E] flex items-center justify-center text-[10px] font-mono font-bold text-neutral-200 shrink-0">
                    {idx + 1}
                  </div>
                  <div className="text-left space-y-0.5">
                    <h4 className="font-bold text-xs text-white">{milestone.title}</h4>
                    <p className="text-[11px] text-neutral-300 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: VERIFICATION CHECKLIST & FLAG SUBMISSION */}
        <div className="lg:col-span-1 space-y-8">
          
          {/* VERIFICATION CHECKLIST CARD */}
          <div className="p-6 bg-[#1C1C1E] border border-[#2C2C2E] rounded-2xl shadow-sm space-y-4 flex flex-col h-full justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-[#0A84FF]" />
                  <h3 className="font-bold text-sm text-white tracking-tight">Lab Verification</h3>
                </div>
              </div>
              
              <p className="text-[#8E8E93] text-[10px] leading-normal uppercase tracking-wider font-mono font-bold">Complete your tasks and verify below:</p>
              <div className="space-y-3 pt-2">
                {lab.verificationChecks.map((check, idx) => {
                  const checked = !!checkedItems[check.id] || isPreviouslyCompleted;
                  return (
                    <div 
                      key={check.id}
                      className={cn(
                        "p-4 border rounded-xl transition-all flex flex-col space-y-2 text-left",
                        checked ? "bg-[#1C1C1E] border-emerald-500/50" : "bg-[#1C1C1E] border-[#2C2C2E] hover:border-slate-700"
                      )}
                    >
                      <button 
                        type="button"
                        onClick={() => toggleCheck(check.id)}
                        className="flex items-start gap-3 w-full text-left"
                        disabled={isPreviouslyCompleted}
                      >
                        <div 
                          className={cn(
                            "w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all mt-0.5",
                            checked 
                              ? "bg-emerald-600 border-emerald-500 text-white" 
                              : "border-slate-700 text-transparent bg-black"
                          )}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-left flex-1 min-w-0">
                          <span className="block text-[8px] font-mono text-slate-500 font-bold uppercase tracking-wider">Task Step #{idx+1}</span>
                          <p className={cn(
                            "text-xs leading-snug mt-0.5",
                            checked ? "text-slate-200 font-medium" : "text-slate-300"
                          )}>
                            {check.description}
                          </p>
                        </div>
                      </button>

                      {/* Toggle Hint button */}
                      <div className="pt-2 flex justify-end">
                        <button 
                          onClick={() => toggleHint(check.id)}
                          className="text-[9px] font-mono uppercase font-bold tracking-wider text-[#0A84FF] hover:text-[#0A84FF]/80 flex items-center gap-1 cursor-pointer bg-transparent border-none outline-none focus:outline-none"
                        >
                          <HelpCircle className="w-3 h-3 text-[#0A84FF]" />
                          {revealedHints[check.id] ? 'Hide Hint' : 'Show Hint'}
                        </button>
                      </div>

                      {/* Display disclosed Hint */}
                      <AnimatePresence>
                        {revealedHints[check.id] && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-2.5 bg-black text-[10px] text-[#0A84FF] rounded-lg mt-1 border border-[#2C2C2E] font-sans italic leading-relaxed text-left">
                              {check.hint}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTF FLAG SUBMISSION BOX CONTAINER */}
            <div className="mt-8 pt-6 border-t border-slate-800/60 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4 text-slate-300" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-300">Submit Answer Flag</h4>
              </div>
              <p className="text-[10px] text-slate-400 leading-normal text-left">
                Once you have found the correct flag, enter it below to complete this lab.
              </p>

              <form onSubmit={handleFlagSubmit} className="space-y-4">
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Format: CTF{...}"
                    value={flagInput}
                    onChange={(e) => {
                      if (submissionStatus !== 'success') {
                        setFlagInput(e.target.value);
                      }
                    }}
                    disabled={submissionStatus === 'success'}
                    className={cn(
                      "w-full px-4 py-3 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl font-mono text-xs focus:ring-2 focus:ring-[#0A84FF] outline-none shadow-sm placeholder:text-slate-500 text-left",
                      submissionStatus === 'success' ? "border-emerald-500/50 text-emerald-300 bg-emerald-950/20 font-bold" :
                      submissionStatus === 'error' ? "border-rose-500/50 text-rose-300 bg-rose-950/20 focus:ring-rose-500" :
                      "border-slate-800 text-slate-205 text-slate-200"
                    )}
                  />
                  {submissionStatus === 'success' ? (
                    <Unlock className="w-4 h-4 text-emerald-400 absolute right-4 top-1/2 -translate-y-1/2" />
                  ) : (
                    <Lock className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2" />
                  )}
                </div>

                {/* Status banner */}
                <AnimatePresence mode="wait">
                  {submissionStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-rose-950/20 border border-rose-500/30 rounded-xl text-[11px] text-rose-450 text-rose-300 font-sans flex gap-2"
                    >
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                      <p className="leading-normal">{errorMessage}</p>
                    </motion.div>
                  )}
                  {submissionStatus === 'success' && !isPreviouslyCompleted && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 bg-emerald-600 text-white rounded-xl text-xs font-sans text-center space-y-2 shadow-md"
                    >
                      <CheckCircle2 className="w-5 h-5 mx-auto" />
                      <h5 className="font-bold text-center">Correct Answer!</h5>
                      <p className="text-[10px] opacity-90 text-center leading-normal">Your answer is correct! Your XP has been updated.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {submissionStatus !== 'success' && (
                  <button 
                    type="submit"
                    disabled={!allChecksPassed || !flagInput.trim()}
                    className={cn(
                      "w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-sm flex items-center justify-center gap-2",
                      (!allChecksPassed || !flagInput.trim())
                        ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-800"
                        : "bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer"
                    )}
                  >
                    Verify Flag
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
