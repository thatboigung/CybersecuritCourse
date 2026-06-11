import React, { useMemo } from 'react';
import { ROADMAP_AREAS, MODULES } from '../data';
import { RoadmapArea } from '../types';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { progressService } from '../services/progressService';

interface SubjectGridProps {
  onSelect: (area: RoadmapArea) => void;
  searchQuery?: string;
}

const SubjectGrid = React.memo(function SubjectGrid({ onSelect, searchQuery = '' }: SubjectGridProps) {
  // Map our Tailwind colors to dark glass themed shades
  const getColorClasses = (color: string) => {
    const map: Record<string, { bg: string; text: string; border: string; glow: string; bar: string }> = {
      blue: { 
        bg: 'bg-blue-500/10 text-blue-400', 
        text: 'text-blue-400', 
        border: 'border-0', 
        glow: 'hover:shadow-2xl',
        bar: 'bg-blue-500' 
      },
      emerald: { 
        bg: 'bg-emerald-500/10 text-emerald-400', 
        text: 'text-emerald-400', 
        border: 'border-0', 
        glow: 'hover:shadow-2xl',
        bar: 'bg-emerald-500' 
      },
      violet: { 
        bg: 'bg-violet-500/10 text-violet-400', 
        text: 'text-violet-400', 
        border: 'border-0', 
        glow: 'hover:shadow-2xl',
        bar: 'bg-violet-500' 
      },
      indigo: { 
        bg: 'bg-indigo-500/10 text-indigo-400', 
        text: 'text-indigo-400', 
        border: 'border-0', 
        glow: 'hover:shadow-2xl',
        bar: 'bg-indigo-550 bg-indigo-500' 
      },
      amber: { 
        bg: 'bg-amber-500/10 text-amber-400', 
        text: 'text-amber-400', 
        border: 'border-0', 
        glow: 'hover:shadow-2xl',
        bar: 'bg-amber-500' 
      },
      rose: { 
        bg: 'bg-rose-500/10 text-rose-400', 
        text: 'text-rose-400', 
        border: 'border-0', 
        glow: 'hover:shadow-2xl',
        bar: 'bg-rose-500' 
      },
      cyan: { 
        bg: 'bg-cyan-500/10 text-cyan-400', 
        text: 'text-cyan-400', 
        border: 'border-0', 
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
    <div className="flex flex-col gap-6 bg-[#1C1C1E] rounded-2xl">
      {filteredAreas.map((area, index) => {
        const IconComponent = (Icons as any)[area.icon] || Icons.Shield;
        const theme = getColorClasses(area.color);
        const stats = areaProgresses[area.id] || { pct: 0, lessonsCount: 0, completedCount: 0 };
        
        return (
          <motion.button
            key={area.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, type: 'spring', damping: 20, stiffness: 220 }}
            onClick={() => onSelect(area)}
            className={cn(
              "group relative overflow-hidden  hover:bg-[#2C2C2E]/60 p-6 text-left flex flex-col h-full transition-all duration-300  shadow-md border-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none cursor-pointer",
              theme.glow
            )}
            id={`area-${area.id}`}
          >
            {/* Ambient Background Gradient Indicator */}
            <div className={cn("absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-[0.04] transition-opacity group-hover:opacity-10", theme.bar)} />

            <div className="flex items-center gap-4 mb-4">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-md", theme.bg)}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-100 group-hover:text-[#0A84FF] transition-colors leading-snug">{area.name}</h3>
              </div>
            </div>

            <p className="text-slate-400 font-sans text-xs leading-relaxed flex-1 mb-6">
              {area.description}
            </p>
            
            <div className="mt-auto space-y-3">
              {/* Progress Bar Header */}
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className={cn("font-bold", theme.text)}>{stats.pct}%</span>
              </div>
              
              {/* Progress Bar Track */}
              <div className="w-full h-1.5 bg-[#2C2C2E] rounded-full overflow-hidden">
                <div 
                  className={cn("h-full transition-all duration-500 rounded-full", theme.bar)}
                  style={{ width: `${stats.pct}%` }}
                />
              </div>

            
            </div>
          </motion.button>
        );
      })}
    </div>
  );
});

export default SubjectGrid;
