import React from 'react';
import { Layers, CalendarDays, Trophy, Settings, Terminal, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { RoadmapArea } from '../types';

interface SidebarProps {
  selectedArea: RoadmapArea | null;
  onHomeClick: () => void;
  onSettingsClick: () => void;
  onAchievementsClick: () => void;
  onCalendarClick: () => void;
  activeView: 'home' | 'settings' | 'achievements' | 'calendar';
  className?: string;
}

export default function Sidebar({ 
  selectedArea, 
  onHomeClick, 
  onSettingsClick, 
  onAchievementsClick,
  onCalendarClick,
  activeView, 
  className 
}: SidebarProps) {
  
  const navItems = [
    { icon: Layers, label: 'Workspace', active: activeView === 'home' && !selectedArea, onClick: onHomeClick },
    { icon: CalendarDays, label: 'Timetable', active: activeView === 'calendar', onClick: onCalendarClick },
    { icon: Trophy, label: 'Awards', active: activeView === 'achievements', onClick: onAchievementsClick },
    { icon: Settings, label: 'Settings', active: activeView === 'settings', onClick: onSettingsClick },
  ];

  const candidateName = localStorage.getItem('cyber_candidate_name') || 'Sec Cadet';

  return (
    <header className={cn(
      "w-full bg-black/90 border-b border-[#2C2C2E] backdrop-blur-md sticky top-0 z-[100] h-16 transition-all",
      className
    )}>
      <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex justify-between items-center">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer select-none active:opacity-90" onClick={onHomeClick}>
          <div className="w-8 h-8 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl flex items-center justify-center text-[#0A84FF] shadow-sm">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-xs font-bold text-white tracking-wider uppercase">DevSec Academy</h1>
          </div>
        </div>

        {/* Center: Sleek Horizontal Nav Tabs */}
        <nav className="flex items-center gap-1 bg-[#1C1C1E] border border-[#2C2C2E] p-1 rounded-xl">
          {navItems.map((item, idx) => {
            const isItemActive = item.active;
            return (
              <button
                key={idx}
                onClick={item.onClick}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide transition-all uppercase flex items-center gap-1.5 cursor-pointer select-none outline-none focus:outline-none",
                  isItemActive 
                    ? "bg-white/10 text-white font-bold" 
                    : "text-[#8E8E93] hover:text-slate-200"
                )}
              >
                <item.icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Right Side: Active Cadet Info */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[10px] font-mono font-bold text-slate-350 uppercase leading-none">
              {candidateName}
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}
