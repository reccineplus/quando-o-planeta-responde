import React from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const TrailerModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="trailer-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-fade-in"
      onClick={onClose}
    >
      <div
        id="trailer-player-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-black border border-[#F4EA93]/40 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#110f0d] border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
            <span className="font-condensed font-bold tracking-widest text-[#F4EA93]">
              TEASER OFICIAL • QUANDO O PLANETA RESPONDE
            </span>
          </div>
          <button
            id="close-trailer-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real trailer video (YouTube) */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/NhL9ueEIyvU?autoplay=1"
            title="Teaser Oficial — Quando o Planeta Responde"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
