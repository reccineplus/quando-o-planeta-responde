import React from 'react';
import { Instagram, Youtube, Sparkles, Maximize2, Minimize2, Info } from 'lucide-react';
import { MOVIE_DATA } from '../data/movieData';

interface FooterProps {
  frameMode: boolean;
  onToggleFrameMode: () => void;
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  frameMode,
  onToggleFrameMode,
  onOpenAbout,
}) => {
  return (
    <footer className="relative z-30 w-full px-6 md:px-12 py-3 md:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 border-t border-white/5">
      {/* Left: Copyright */}
      <div className="text-[11px] text-stone-400/80 font-normal order-2 sm:order-1 text-center sm:text-left">
        {MOVIE_DATA.copyright}
      </div>

      {/* Center: Social Icons (ig, yt) */}
      <div className="flex items-center gap-4 order-1 sm:order-2">
        <a
          id="social-instagram-btn"
          href="https://www.instagram.com/joab.cabral/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-400 hover:text-[#F4EA93] transition-colors p-1 cursor-pointer"
          title="Instagram Oficial"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          id="social-youtube-btn"
          href="https://www.youtube.com/@RECCINEPLUS"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-400 hover:text-[#F4EA93] transition-colors p-1 cursor-pointer"
          title="YouTube Oficial"
        >
          <Youtube className="w-4 h-4" />
        </a>
      </div>

      {/* Right: Mode toggle (Frame Mockup vs Full Immersive Screen) & Info */}
      <div className="flex items-center gap-2 order-3">
        <button
          id="toggle-frame-mode-btn"
          onClick={onToggleFrameMode}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 hover:border-[#F4EA93]/40 text-stone-300 hover:text-[#F4EA93] text-[11px] transition-all cursor-pointer"
          title={frameMode ? 'Alternar para Tela Inteira' : 'Alternar para Moldura da Referência'}
        >
          {frameMode ? (
            <>
              <Maximize2 className="w-3 h-3" />
              <span>TELA CHEIA</span>
            </>
          ) : (
            <>
              <Minimize2 className="w-3 h-3" />
              <span>MOLDURA MOCKUP</span>
            </>
          )}
        </button>
      </div>
    </footer>
  );
};
