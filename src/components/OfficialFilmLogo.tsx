import React from 'react';

interface Props {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const OfficialFilmLogo: React.FC<Props> = ({ className = '', size = 'md' }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center select-none group ${className}`}>
      {/* Glow aura */}
      <div className="absolute -inset-2 bg-gradient-to-r from-amber-600/20 via-yellow-500/30 to-amber-700/20 blur-lg rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="relative flex items-center gap-2">
        {/* Left jagged thorn / branch glyph */}
        <svg
          className={`text-[#F4EA93]/70 ${size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2 12c4-2 7-6 9-10M2 12c5 1 8 4 9 9M7 9l5-2M6 15l6 2" />
        </svg>

        {/* Center Stylized Title Emblem */}
        <div className="flex flex-col items-center leading-none">
          <span className="font-cinematic tracking-[0.28em] font-black text-[#F4EA93] text-sm md:text-base drop-shadow-[0_2px_12px_rgba(244,234,147,0.4)] uppercase">
            QUANDO O PLANETA
          </span>
          <div className="flex items-center gap-1.5 w-full justify-center">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#F4EA93]/50 to-transparent" />
            <span className="font-condensed tracking-[0.32em] font-bold text-xs md:text-sm text-amber-200/90 uppercase">
              RESPONDE
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#F4EA93]/50 to-transparent" />
          </div>
        </div>

        {/* Right jagged thorn / branch glyph */}
        <svg
          className={`text-[#F4EA93]/70 ${size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 12c-4-2-7-6-9-10M22 12c-5 1-8 4-9 9M17 9l-5-2M18 15l-6 2" />
        </svg>
      </div>
    </div>
  );
};
