import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShieldCheck, ArrowRight, HardDrive, Key, Cpu } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade?: () => void;
}

export default function PricingModal({ isOpen, onClose }: PricingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            className="bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl relative flex flex-col border-0 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-slate-200 border-0 hover:bg-slate-900 transition-colors z-30"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-8 md:p-12 text-slate-200 space-y-6">
              <div className="w-12 h-12 bg-[#0A84FF]/10 text-[#0A84FF] border border-[#2C2C2E] rounded-2xl flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0A84FF] font-bold">Course Access Safe & Ready</span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mt-1">Full Curriculum Unlocked</h2>
                <p className="text-[#8E8E93] text-xs mt-2 leading-relaxed">
                  All 7 domain core syllabus modules, including micro lectures, progress checkpoints, custom quizzes, and comprehensive certification exams, are fully unlocked and ready.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex gap-4 p-4 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl text-left">
                  <div className="w-8 h-8 rounded-lg bg-[#30D158]/10 text-[#30D158] flex items-center justify-center border border-[#30D158]/20">
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-bold text-white text-xs">Offline-First Private Save</h4>
                    <p className="text-[11px] text-[#8E8E93] leading-relaxed mt-0.5">Your achievements, exam attempts, and lesson check-off actions are saved securely on this device, keeping your personal learning history private.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl text-left">
                  <div className="w-8 h-8 rounded-lg bg-[#5E5CE6]/10 text-[#5E5CE6] flex items-center justify-center border border-[#5E5CE6]/20">
                    <Key className="w-4 h-4" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-bold text-white text-xs">100% Free Educational Resource</h4>
                    <p className="text-[11px] text-[#8E8E93] leading-relaxed mt-0.5">This platform is provided as an open study companion. There are no registration obstacles, paywalls, or hidden keys required to complete your study roadmaps.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex gap-4">
                <button 
                  onClick={onClose}
                  className="w-full h-12 bg-[#0A84FF] hover:bg-[#007AFF] text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer"
                >
                  Confirm & Start Learning
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
