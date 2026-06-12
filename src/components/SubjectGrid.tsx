import React, { useMemo, useState } from 'react';
import { ROADMAP_AREAS, MODULES } from '../data';
import { RoadmapArea } from '../types';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { progressService } from '../services/progressService';

interface SubjectGridProps {
  onSelect: (area: RoadmapArea) => void;
  searchQuery?: string;
}

const SubjectGrid = React.memo(function SubjectGrid({ onSelect, searchQuery = '' }: SubjectGridProps) {
  const [selectedAreaInfo, setSelectedAreaInfo] = useState<RoadmapArea | null>(null);

  // Map our Tailwind colors to dark glass themed shades
  const getColorClasses = (color: string) => {
    const map: Record<string, { bg: string; text: string; border: string; glow: string; bar: string }> = {
      blue: { 
        bg: 'bg-blue-500/10 text-blue-400', 
        text: 'text-blue-400', 
        border: 'border-blue-550/20', 
        glow: 'hover:shadow-2xl',
        bar: 'bg-blue-500' 
      },
      emerald: { 
        bg: 'bg-emerald-500/10 text-emerald-400', 
        text: 'text-emerald-400', 
        border: 'border-emerald-550/20', 
        glow: 'hover:shadow-2xl',
        bar: 'bg-emerald-500' 
      },
      violet: { 
        bg: 'bg-violet-500/10 text-violet-400', 
        text: 'text-violet-400', 
        border: 'border-violet-550/20', 
        glow: 'hover:shadow-2xl',
        bar: 'bg-violet-500' 
      },
      indigo: { 
        bg: 'bg-indigo-500/10 text-indigo-400', 
        text: 'text-indigo-400', 
        border: 'border-indigo-500/20', 
        glow: 'hover:shadow-2xl',
        bar: 'bg-indigo-500' 
      },
      amber: { 
        bg: 'bg-amber-500/10 text-amber-400', 
        text: 'text-amber-400', 
        border: 'border-amber-550/20', 
        glow: 'hover:shadow-2xl',
        bar: 'bg-amber-500' 
      },
      rose: { 
        bg: 'bg-rose-500/10 text-rose-400', 
        text: 'text-rose-400', 
        border: 'border-rose-550/20', 
        glow: 'hover:shadow-2xl',
        bar: 'bg-rose-500' 
      },
      cyan: { 
        bg: 'bg-cyan-500/10 text-cyan-400', 
        text: 'text-cyan-400', 
        border: 'border-cyan-550/20', 
        glow: 'hover:shadow-2xl',
        bar: 'bg-cyan-500' 
      }
    };
    return map[color] || map.indigo;
  };

  // Pre-calculate statistics
  const areaProgresses = useMemo(() => {
    const list: Record<string, { pct: number; lessonsCount: number; completedCount: number }> = {};
    
    ROADMAP_AREAS.forEach(area => {
      // Find all module lessons inside this roadmap area
      const relatedModules = MODULES.filter(m => m.areaId === area.id);
      const allLessons = relatedModules.flatMap(m => m.lessons);
      const lessonIds = allLessons.map(l => l.id);
      
      const pct = progressService.getOverallCompletionPercentage(lessonIds);
      const completedCount = lessonIds.filter(id => progressService.isLessonCompleted(id)).length;
      list[area.id] = { pct, lessonsCount: lessonIds.length, completedCount };
    });
    
    return list;
  }, []);

  // Filter based on search queries
  const filteredAreas = useMemo(() => {
    if (!searchQuery) return ROADMAP_AREAS;
    const term = searchQuery.toLowerCase().trim();
    return ROADMAP_AREAS.filter(area => 
      area.name.toLowerCase().includes(term) || 
      area.description.toLowerCase().includes(term)
    );
  }, [searchQuery]);

  return (
    <div className="relative">
      <div className="flex flex-col bg-[#161618] border border-zinc-800/70 rounded-2xl overflow-hidden shadow-2xl">
        {filteredAreas.map((area, index) => {
          const IconComponent = (Icons as any)[area.icon] || Icons.Shield;
          const theme = getColorClasses(area.color);
          const stats = areaProgresses[area.id] || { pct: 0, lessonsCount: 0, completedCount: 0 };
          
          return (
            <div
              key={area.id}
              className="group relative flex items-center justify-between p-4 sm:p-5 hover:bg-[#232326]/60 transition-all duration-300 border-b border-zinc-800/50 last:border-0 cursor-pointer"
              onClick={() => onSelect(area)}
              id={`area-${area.id}`}
            >
              {/* Outer Left Side: Icon & Titles */}
              <div className="flex items-center gap-4 flex-1 min-w-0">
                {/* Icon box exactly styling from the image */}
                <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 border border-transparent", theme.bg, theme.text, theme.border)}>
                  <IconComponent className="w-5 h-5" />
                </div>
                
                {/* Text section */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-[#0A84FF] transition-colors leading-snug">
                      {area.name}
                    </h3>
                  </div>
                  
                  {/* Stats Tag - e.g. "4 INTERACTIVE CLASSES" matching image */}
                  <div className="text-[10px] sm:text-xs font-bold tracking-widest text-[#8E8E93] uppercase mt-0.5">
                    {stats.lessonsCount} INTERACTIVE CLASSES
                  </div>

                  {/* Truncated Description - taking up just 1 line with ellipsis */}
                  <p className="text-slate-400 font-sans text-xs leading-relaxed max-w-xl truncate mt-1">
                    {area.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons & Right Side Elements */}
              <div className="flex items-center gap-4 shrink-0 ml-3">
                {/* Optional Mini-Progress circle or pill */}
                {stats.pct > 0 && (
                  <div className="hidden sm:flex flex-col items-end gap-1 font-mono text-[10px]">
                    <span className={cn("font-bold text-xs", theme.text)}>{Math.round(stats.pct)}%</span>
                    <div className="w-12 h-1 bg-[#2C2C2E] rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full", theme.bar)} style={{ width: `${stats.pct}%` }} />
                    </div>
                  </div>
                )}

                {/* Info button with customized layout click handling */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedAreaInfo(area);
                  }}
                  className="p-1.5 text-zinc-500 hover:text-[#0A84FF] hover:bg-zinc-800/60 rounded-lg transition-colors cursor-pointer"
                  title="View full description"
                >
                  <Icons.Info className="w-4 h-4" />
                </button>

                {/* ChevronRight from image */}
                <Icons.ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Description Popup Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedAreaInfo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#1C1C1E] border border-zinc-800 p-6 rounded-2xl max-w-md w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedAreaInfo(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors p-1 hover:bg-zinc-800 rounded-lg"
              >
                <Icons.X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-lg", getColorClasses(selectedAreaInfo.color).bg, getColorClasses(selectedAreaInfo.color).text)}>
                  {React.createElement((Icons as any)[selectedAreaInfo.icon] || Icons.Shield, { className: "w-5 h-5" })}
                </div>
                <h3 className="text-lg font-bold text-slate-100">{selectedAreaInfo.name}</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedAreaInfo.description}
                </p>
                
                <div className="bg-[#2C2C2E]/30 p-3 rounded-lg border border-zinc-800/45 text-xs text-slate-400 font-mono space-y-1">
                  <div>Lessons count: <span className="text-[#0A84FF]">{areaProgresses[selectedAreaInfo.id]?.lessonsCount}</span></div>
                  <div>Progress: <span className="text-[#30D158]">{Math.round(areaProgresses[selectedAreaInfo.id]?.pct || 0)}%</span></div>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setSelectedAreaInfo(null)}
                  className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onSelect(selectedAreaInfo);
                    setSelectedAreaInfo(null);
                  }}
                  className="bg-[#0A84FF] hover:bg-[#0A84FF]/80 text-white font-semibold text-sm px-4 py-2 rounded-xl transition duration-200"
                >
                  Start Learning
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default SubjectGrid;
