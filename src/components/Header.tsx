import React, { useState } from 'react';
import { Search, Volume2, VolumeX, User, Sparkles, X, Download } from 'lucide-react';
import { NavTab } from '../types';
import { RecStudioLogo } from './RecStudioLogo';
import { soundscape } from '../utils/audioAmbient';

interface HeaderProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenSearch: (query: string) => void;
  frameMode: boolean;
  onToggleFrameMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenSearch,
  frameMode,
  onToggleFrameMode,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleToggleAudio = () => {
    const nextState = soundscape.toggle();
    setIsPlayingAudio(nextState);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onOpenSearch(searchQuery.trim());
    }
  };

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'inicio', label: 'INÍCIO' },
    { id: 'sobre', label: 'SOBRE' },
    { id: 'personagens', label: 'PERSONAGENS' },
    { id: 'galeria', label: 'GALERIA' },
    { id: 'bastidores', label: 'BASTIDORES' },
  ];

  return (
    <header className="relative z-30 w-full px-4 sm:px-6 md:px-8 pt-4 md:pt-6 pb-3">
      <div className="flex items-center justify-between gap-2 md:gap-6">
        {/* Left: Studio Monogram / Brand + Nav */}
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Official Original REC Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => onSelectTab('inicio')}
            className="flex items-center group text-left cursor-pointer focus:outline-none py-1"
            title="REC - Início"
          >
            <RecStudioLogo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => onSelectTab(item.id)}
                  className={`text-xs xl:text-sm font-medium tracking-[0.08em] transition-all cursor-pointer relative py-1 ${
                    isActive
                      ? 'text-[#F4EA93] font-bold drop-shadow-[0_0_8px_rgba(244,234,147,0.4)]'
                      : 'text-stone-300/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F4EA93] rounded-full shadow-[0_0_6px_#F4EA93]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right side: Search pill, Sound toggle, Profile */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search bar pill */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative hidden sm:flex items-center"
          >
            <div className="flex items-center bg-black/40 border border-[#F4EA93]/30 hover:border-[#F4EA93]/60 focus-within:border-[#F4EA93] focus-within:ring-1 focus-within:ring-[#F4EA93]/50 rounded-full px-3 py-1.5 backdrop-blur-md transition-all w-36 md:w-48 lg:w-56">
              <input
                id="search-input-field"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar no filme..."
                className="w-full bg-transparent text-xs text-stone-100 placeholder-stone-400/70 focus:outline-none pr-2"
              />
              <button
                type="submit"
                id="search-submit-btn"
                className="text-[#F4EA93] hover:text-white transition-colors cursor-pointer"
                title="Pesquisar"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Mobile search toggle */}
          <button
            id="mobile-search-toggle"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="sm:hidden p-2 rounded-full bg-black/40 border border-[#F4EA93]/30 text-[#F4EA93]"
            title="Buscar"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Sound / Atmosphere Ambient Audio Toggle */}
          <button
            id="ambient-sound-toggle-btn"
            onClick={handleToggleAudio}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all border cursor-pointer ${
              isPlayingAudio
                ? 'bg-amber-500/20 text-[#F4EA93] border-[#F4EA93] shadow-[0_0_12px_rgba(244,234,147,0.3)] animate-pulse'
                : 'bg-black/40 text-stone-400 border-white/10 hover:border-[#F4EA93]/40 hover:text-stone-200'
            }`}
            title={isPlayingAudio ? 'Desativar som ambiente' : 'Ativar som atmosférico da Caatinga'}
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#F4EA93]" />
                <span className="hidden md:inline text-[11px]">ÁUDIO ATIVO</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span className="hidden md:inline text-[11px]">SOM AMBIENTE</span>
              </>
            )}
          </button>

          {/* Download Standalone HTML Button */}
          <a
            id="download-html-btn"
            href="/quando_o_planeta_responde.html"
            download="quando_o_planeta_responde.html"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all border border-[#F4EA93]/40 bg-[#F4EA93]/10 text-[#F4EA93] hover:bg-[#F4EA93] hover:text-stone-950 cursor-pointer shadow-sm"
            title="Baixar arquivo HTML standalone completo para usar no Antigravity ou navegador"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px] font-bold">BAIXAR HTML</span>
          </a>

          {/* User Profile / Icon */}
          <button
            id="user-profile-btn"
            onClick={() => onSelectTab('sobre')}
            className="w-8 h-8 rounded-full border border-[#F4EA93]/40 bg-black/40 flex items-center justify-center text-[#F4EA93] hover:bg-[#F4EA93]/10 hover:border-[#F4EA93] transition-all cursor-pointer"
            title="Perfil & Detalhes do Filme"
          >
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile search input expandable */}
      {isSearchOpen && (
        <form onSubmit={handleSearchSubmit} className="mt-2 sm:hidden flex items-center gap-2">
          <input
            id="mobile-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar pistas, personagens..."
            className="flex-1 bg-black/80 border border-[#F4EA93]/50 rounded-full px-4 py-1.5 text-xs text-stone-200 focus:outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="p-1.5 rounded-full bg-[#F4EA93] text-black font-semibold text-xs px-3"
          >
            Ir
          </button>
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-stone-400"
          >
            <X className="w-4 h-4" />
          </button>
        </form>
      )}

      {/* Mobile Nav Links Row */}
      <div className="flex lg:hidden items-center justify-center gap-4 mt-3 overflow-x-auto py-1 border-t border-white/5 scrollbar-none">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectTab(item.id)}
            className={`text-[11px] font-semibold tracking-wider whitespace-nowrap cursor-pointer transition-colors ${
              activeTab === item.id ? 'text-[#F4EA93]' : 'text-stone-400 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
