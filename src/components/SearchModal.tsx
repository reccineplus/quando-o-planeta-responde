import React from 'react';
import { X, Search, ChevronRight, FileText, User } from 'lucide-react';
import { MOVIE_DATA, STORY_TOPICS, CHARACTERS } from '../data/movieData';
import { StoryTopic, NavTab } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  query: string;
  onClose: () => void;
  onSelectStoryTopic: (topic: StoryTopic) => void;
  onSelectTab: (tab: NavTab) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  query,
  onClose,
  onSelectStoryTopic,
  onSelectTab,
}) => {
  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingStories = STORY_TOPICS.filter(
    (s) =>
      s.title.toLowerCase().includes(cleanQuery) ||
      s.shortDesc.toLowerCase().includes(cleanQuery) ||
      s.fullStory.some((p) => p.toLowerCase().includes(cleanQuery))
  );

  const matchingCharacters = CHARACTERS.filter(
    (c) =>
      c.name.toLowerCase().includes(cleanQuery) ||
      c.role.toLowerCase().includes(cleanQuery) ||
      c.description.toLowerCase().includes(cleanQuery)
  );

  const hasSynopsisMatch = MOVIE_DATA.synopsis.toLowerCase().includes(cleanQuery);

  return (
    <div
      id="search-modal-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="search-modal-panel"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-[#15120f] border border-[#F4EA93]/40 rounded-2xl shadow-2xl overflow-hidden text-stone-200"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#1b1814]">
          <div className="flex items-center gap-2 text-[#F4EA93]">
            <Search className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Resultados para: "{query}"
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 max-h-[65vh] overflow-y-auto space-y-4 text-xs">
          {matchingStories.length === 0 &&
            matchingCharacters.length === 0 &&
            !hasSynopsisMatch && (
              <div className="text-center py-8 text-stone-400">
                Nenhum registro encontrado para "{query}". Tente buscar por "Felipe", "Infecção", "Osmar" ou "Caatinga".
              </div>
            )}

          {matchingStories.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#F4EA93] uppercase">
                Dossiês & Arquivos ({matchingStories.length})
              </span>
              {matchingStories.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => {
                    onSelectStoryTopic(topic);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-black/40 hover:bg-black/80 border border-white/5 hover:border-[#F4EA93]/40 text-left transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#F4EA93]" />
                    <div>
                      <h4 className="font-bold text-white text-xs">{topic.title}</h4>
                      <p className="text-[11px] text-stone-400 line-clamp-1">{topic.shortDesc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-500" />
                </button>
              ))}
            </div>
          )}

          {matchingCharacters.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase">
                Personagens ({matchingCharacters.length})
              </span>
              {matchingCharacters.map((char, i) => (
                <button
                  key={i}
                  onClick={() => {
                    onSelectTab('personagens');
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-black/40 hover:bg-black/80 border border-white/5 hover:border-amber-400/40 text-left transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-amber-300" />
                    <div>
                      <h4 className="font-bold text-white text-xs">{char.name}</h4>
                      <p className="text-[11px] text-stone-400">{char.role}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-500" />
                </button>
              ))}
            </div>
          )}

          {hasSynopsisMatch && (
            <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-[#F4EA93] uppercase">
                Sinopse Oficial
              </span>
              <p className="text-stone-300 text-xs line-clamp-3">{MOVIE_DATA.synopsis}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
