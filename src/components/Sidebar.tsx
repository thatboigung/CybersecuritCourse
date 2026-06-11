import React from 'react';
import { ShieldAlert, Home, Settings, Trophy, LogOut, Terminal, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { RoadmapArea } from '../types';

interface SidebarProps {
  selectedArea: RoadmapArea | null;
  onHomeClick: () => void;
  onSettingsClick: () => void;
  onAchievementsClick: () => void;
  activeView: 'home' | 'settings' | 'achievements';
  className?: string;
}

export default function Sidebar({ 
  selectedArea, 
  onHomeClick, 
  onSettingsClick, 
  onAchievementsClick,
  activeView, 
  className 
}: SidebarProps) {
  
  const navItems = [
    { icon: Layers, label: 'Dashboard', active: activeView === 'home' && !selectedArea, onClick: onHomeClick },
    { icon: Trophy, label: 'Achievements', active: activeView === 'achievements', onClick: onAchievementsClick },
    { icon: Settings, label: 'Settings', active: activeView === 'settings', onClick: onSettingsClick },
  ];

  return (
    <aside className={cn(
      "w-20 bg-black border-r border-[#2C2C2E] flex flex-col h-screen sticky top-0 z-50 py-8 items-center shrink-0",
      className
    )}>
      {/* Platform Vector Brand Icon */}
      <div 
        className="w-10 h-10 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl flex items-center justify-center text-[#0A84FF] mb-12 shadow-md cursor-pointer active:scale-95 transition-transform" 
        onClick={onHomeClick}
        title="Go to main dashboard"
      >
        <Terminal className="w-5 h-5 text-[#0A84FF]" />
      </div>

      {/* Primary Navigation Tools */}
      <nav className="flex-1 flex flex-col gap-6 pt-2 w-full items-center">
        {navItems.map((item, idx) => {
          const isItemActive = item.active;
          return (
            <button
              key={idx}
              onClick={item.onClick}
              title={item.label}
              className={cn(
                "w-12 h-12 flex items-center justify-center rounded-2xl transition-all relative group cursor-pointer outline-none focus:outline-none focus:ring-0 focus-visible:outline-none",
                isItemActive 
                  ? "bg-[#0A84FF] text-white shadow-ios" 
                  : "text-[#8E8E93] hover:text-white hover:bg-[#1C1C1E]"
              )}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              
              {/* Tooltip */}
              <div className="absolute left-16 px-2.5 py-1 bg-[#1C1C1E] border border-[#2C2C2E] text-white text-[10px] rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap tracking-wide z-[100] font-medium animate-in fade-in duration-150">
                {item.label}
              </div>

              {isItemActive && (
                <motion.div 
                  layoutId="active-side-nav-indicator"
                  className="absolute -right-[2px] w-1 h-6 bg-[#0A84FF] rounded-l-full"
                />
              )}
            </button>
          )
        })}
      </nav>

      {/* Footer Exit Portal */}
      <div className="flex flex-col gap-6 mt-auto">
        <button 
          onClick={onHomeClick}
          title="Exit to Dashboard"
          className="w-12 h-12 flex items-center justify-center rounded-2xl text-[#8E8E93] hover:text-white hover:bg-[#1C1C1E] transition-all group relative border-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none cursor-pointer"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          <div className="absolute left-16 px-2.5 py-1 bg-[#1C1C1E] border border-[#2C2C2E] text-white text-[10px] rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap tracking-wide z-[100] font-medium animate-in fade-in duration-150">
            Exit View
          </div>
        </button>
      </div>
    </aside>
  );
}
