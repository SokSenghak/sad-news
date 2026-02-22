import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../types';

interface HeaderProps {
  onHomeClick: () => void;
  onCategoryClick: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onHomeClick, onCategoryClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Red Bar */}
      <div className="bg-sabay-red text-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-12">
          <button 
            onClick={onHomeClick}
            className="p-2 hover:bg-white/10 transition-colors"
          >
            <Home size={20} fill="currentColor" />
          </button>
          
          <nav className="flex items-center h-full overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryClick(cat.id)}
                className="px-4 py-2 text-sm font-bold whitespace-nowrap hover:bg-white/10 transition-colors"
              >
                {cat.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Logo Area (Optional, based on image) */}
      <div className="bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-sabay-red text-white p-2 rounded-full font-black text-xl italic">
              SAD
            </div>
            <span className="text-sabay-red font-bold text-2xl">NEWS</span>
          </div>
          
          {/* Banner removed */}
        </div>
      </div>
    </header>
  );
};
