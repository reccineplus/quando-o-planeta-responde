import React from 'react';
import { Play, Sparkles, Eye, ShieldAlert, Film } from 'lucide-react';
import { MOVIE_DATA } from '../data/movieData';
import { StoryTopic } from '../types';

interface HeroDisplayProps {
  onOpenTrailer: () => void;
  onOpenAbout: () => void;
  onSelectStoryTopic: (topic: StoryTopic) => void;
}

export const HeroDisplay: React.FC<HeroDisplayProps> = ({
  onOpenTrailer,
  onOpenAbout,
  onSelectStoryTopic,
}) => {
  return (
    <div className="relative z-20 flex-1 flex flex-col justify-between px-4 sm:px-8 md:px-12 py-4 md:py-6 text-stone-100">
      {/* Main Split Grid (Left vs Right matching the reference layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-11 xl:grid-cols-12 gap-8 lg:gap-5 items-center my-auto">
        {/* ================= LEFT COLUMN ================= */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center items-center text-center pt-2 lg:pt-0 lg:[container-type:inline-size]">
          {/* Subtitle / Category Label: FILME ORIGINAL */}
          <div className="mb-3 md:mb-4">
            <span className="font-cinematic text-xs sm:text-base md:text-lg tracking-[0.35em] text-stone-200 font-medium uppercase drop-shadow">
              {MOVIE_DATA.originalLabel}
            </span>
          </div>

          {/* Massive condensed typography, dominating the left side of the cover:
              QUANDO
              O PLANETA
              RESPONDE */}
          <h1 className="font-condensed font-black text-[44px] min-[375px]:text-[52px] min-[414px]:text-[60px] sm:text-[clamp(6rem,18vw,8rem)] md:text-[clamp(8.25rem,16.5vw,11.75rem)] lg:text-[clamp(7rem,25.5cqw,17.5rem)] leading-[0.76] tracking-normal text-[#F4EA93] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] uppercase">
            <span className="block">QUANDO</span>
            <span className="block">O PLANETA</span>
            <span className="block text-[#f7ee9d]">RESPONDE</span>
          </h1>
        </div>

        {/* ================= CENTER SPACE (Atmosphere visual entity showcase) ================= */}
        <div className="hidden lg:block lg:col-span-1 xl:col-span-2 pointer-events-none" />

        {/* ================= RIGHT COLUMN ================= */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center space-y-5 md:space-y-6 bg-black/40 lg:bg-transparent p-5 sm:p-7 lg:p-0 rounded-2xl lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none border border-white/5 lg:border-none">
          <div className="space-y-1.5 md:space-y-2">
            {/* Meta tags: 2026 | +12 | Trailer | Suspense • Drama • Ficção */}
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-stone-300 font-medium">
              <span>{MOVIE_DATA.year}</span>
              <span className="text-stone-500">•</span>
              {/* Yellow age rating badge matching the +18 badge from reference */}
              <span className="bg-[#F4EA93] text-black font-extrabold text-xs px-2 py-0.5 rounded leading-none shadow-sm">
                {MOVIE_DATA.rating}
              </span>
              <span className="text-stone-500">•</span>
              <span className="text-amber-200/90">{MOVIE_DATA.duration}</span>
              <span className="text-stone-500">•</span>
              <span className="text-stone-300">{MOVIE_DATA.genres}</span>
            </div>
          </div>

          {/* Synopsis Paragraph */}
          <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed font-light drop-shadow-md text-justify sm:text-left">
            {MOVIE_DATA.synopsis}
          </p>

          {/* Action Buttons: ▶ ASSISTIR TRAILER & CONHECER O FILME */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {/* Primary yellow button ▶ ASSISTIR TRAILER (matching PLAY in reference) */}
            <button
              id="watch-trailer-btn"
              onClick={onOpenTrailer}
              className="flex items-center gap-2 bg-[#F4EA93] hover:bg-[#fff7a8] text-black font-black text-xs sm:text-sm tracking-wider uppercase px-6 py-3 rounded-md shadow-[0_4px_16px_rgba(244,234,147,0.3)] hover:shadow-[0_4px_24px_rgba(244,234,147,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>ASSISTIR TRAILER</span>
            </button>

            {/* Secondary frosted outline button: CONHECER O FILME (matching WATCH TRILER in reference) */}
            <button
              id="know-movie-btn"
              onClick={onOpenAbout}
              className="flex items-center gap-2 bg-black/30 hover:bg-white/10 text-white border border-stone-300/80 hover:border-white font-bold text-xs sm:text-sm tracking-wider uppercase px-5 py-3 rounded-md backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Film className="w-4 h-4 text-stone-300" />
              <span>CONHECER O FILME</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
