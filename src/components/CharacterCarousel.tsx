import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Character } from '../types';

interface Props {
  characters: Character[];
}

export const CharacterCarousel: React.FC<Props> = ({ characters }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : 280;
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <button
        id="character-carousel-prev"
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-[#F4EA93] hover:text-black hover:border-[#F4EA93] transition-all cursor-pointer backdrop-blur-sm"
        title="Personagem anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none px-1 py-2"
      >
        {characters.map((char, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[200px] sm:w-[230px] rounded-xl overflow-hidden bg-[#1a1713] border border-[#F4EA93]/20 hover:border-[#F4EA93]/50 transition-all flex flex-col"
          >
            <div className="relative h-56 sm:h-64 overflow-hidden">
              {char.image && (
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: char.imagePosition,
                    transform: char.imageZoom ? `scale(${char.imageZoom})` : undefined,
                    transformOrigin: char.imageZoom ? char.imagePosition : undefined,
                  }}
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#1a1713]" />
              {char.status && (
                <span className="absolute top-2 right-2 text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-amber-950/70 border border-amber-500/30 text-amber-200">
                  {char.status}
                </span>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-base font-bold text-white font-cinematic leading-tight">{char.name}</h3>
                {char.role && (
                  <span className="text-[11px] text-amber-300/90 font-medium">{char.role}</span>
                )}
              </div>
            </div>
            <div className="p-3 space-y-2 flex-1">
              {char.actorCredit && (
                <p className="text-[11px] italic text-stone-400">{char.actorCredit}</p>
              )}
              <p className="text-xs text-stone-300 leading-relaxed">{char.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        id="character-carousel-next"
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-[#F4EA93] hover:text-black hover:border-[#F4EA93] transition-all cursor-pointer backdrop-blur-sm"
        title="Próximo personagem"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
