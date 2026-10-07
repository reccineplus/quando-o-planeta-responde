import React from 'react';
import { X, FileText, AlertTriangle, Radio, Compass, ShieldAlert } from 'lucide-react';
import { StoryTopic } from '../types';

interface Props {
  topic: StoryTopic | null;
  onClose: () => void;
}

export const StoryCardModal: React.FC<Props> = ({ topic, onClose }) => {
  if (!topic) return null;

  return (
    <div
      id="story-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="story-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#14120f] border border-[#F4EA93]/40 rounded-2xl shadow-2xl overflow-hidden text-stone-200 animate-scale-up"
      >
        {/* Top classified banner */}
        <div className="bg-gradient-to-r from-amber-950/80 via-black to-amber-950/80 px-6 py-3 border-b border-[#F4EA93]/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#F4EA93]" />
            <span className="font-condensed tracking-[0.2em] text-xs text-[#F4EA93] font-bold">
              {topic.tag}
            </span>
          </div>
          <button
            id="close-story-modal-btn"
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Header & Image */}
          <div>
            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video md:aspect-[21/9]">
              <img
                src={topic.image}
                alt={topic.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14120f] via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] tracking-[0.25em] text-amber-300 font-semibold uppercase bg-black/60 px-2 py-0.5 rounded border border-amber-500/30">
                  REGISTRO DE CAMPO • OLEANDRO
                </span>
              </div>
            </div>

            <h2 className="font-cinematic text-xl md:text-2xl font-bold text-[#F4EA93] mt-3 drop-shadow-md">
              {topic.title}
            </h2>
          </div>

          {/* Narrative paragraphs */}
          <div className="space-y-3.5 text-stone-300 text-sm leading-relaxed font-normal">
            {topic.fullStory.map((paragraph, idx) => (
              <p key={idx} className="flex gap-2">
                <span className="text-[#F4EA93] select-none">›</span>
                <span>{paragraph}</span>
              </p>
            ))}
          </div>

          {/* Evidence box */}
          <div className="bg-[#1a1713] rounded-xl p-4 border border-amber-500/20 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Evidências Coletadas pela Brigada</span>
            </div>
            <ul className="space-y-1.5 text-xs text-stone-400">
              {topic.evidence.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4EA93] mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action footer */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#F4EA93] hover:bg-amber-300 text-black font-semibold text-xs tracking-wider transition-colors cursor-pointer"
            >
              RETORNAR AO FILME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
