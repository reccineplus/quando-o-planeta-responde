import React from 'react';
import { X, Film, Users, Image as ImageIcon, Clapperboard, Flame, Info } from 'lucide-react';
import { NavTab } from '../types';
import { MOVIE_DATA, CHARACTERS, GALLERY_PHOTOS, ABOUT_TEXT } from '../data/movieData';
import { CharacterCarousel } from './CharacterCarousel';

interface Props {
  activeTab: NavTab;
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: NavTab) => void;
}

export const DetailSectionsModal: React.FC<Props> = ({
  activeTab,
  isOpen,
  onClose,
  onSelectTab,
}) => {
  if (!isOpen || activeTab === 'inicio') return null;

  const tabs: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'sobre', label: 'SOBRE', icon: <Film className="w-4 h-4" /> },
    { id: 'personagens', label: 'PERSONAGENS', icon: <Users className="w-4 h-4" /> },
    { id: 'galeria', label: 'GALERIA', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'bastidores', label: 'BASTIDORES', icon: <Clapperboard className="w-4 h-4" /> },
  ];

  return (
    <div
      id="detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="detail-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#13110e] border border-[#F4EA93]/35 rounded-2xl shadow-2xl flex flex-col max-h-[88vh] overflow-hidden text-stone-200"
      >
        {/* Header Tabs */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#1a1713]">
          <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider transition-colors cursor-pointer py-1.5 px-3 rounded-lg ${
                  activeTab === tab.id
                    ? 'bg-[#F4EA93] text-black shadow-[0_0_12px_rgba(244,234,147,0.3)]'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-white/5'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors ml-4 cursor-pointer"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
          {/* TAB: SOBRE */}
          {activeTab === 'sobre' && (
            <div className="space-y-8 animate-fade-in">
              <p className="font-cinematic text-xs sm:text-sm tracking-[0.15em] text-stone-200/90 font-medium uppercase text-center px-4 py-3 border border-stone-400/50 rounded-lg">
                {MOVIE_DATA.tagline}
              </p>

              <div className="rounded-xl overflow-hidden border border-white/10 aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/douMY_cYVZk"
                  title="Sobre o filme"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Fontes dos fatos reais */}
              <div className="space-y-3 flex flex-col items-center text-center">
                <h3 className="font-cinematic text-lg md:text-xl text-[#F4EA93] font-bold uppercase">
                  Faça sua pesquisa hoje
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://ribasambiental.com.br/bioma-caatinga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide border border-[#F4EA93]/40 bg-[#F4EA93]/10 text-[#F4EA93] hover:bg-[#F4EA93] hover:text-stone-950 transition-all cursor-pointer"
                  >
                    Ribas Ambiental
                  </a>
                  <a
                    href="https://www.acaatinga.org.br/sobre-a-caatinga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide border border-[#F4EA93]/40 bg-[#F4EA93]/10 text-[#F4EA93] hover:bg-[#F4EA93] hover:text-stone-950 transition-all cursor-pointer"
                  >
                    aCaatinga
                  </a>
                  <a
                    href="https://www.wwf.org.br/?94300%2FBrasil-tem-queda-de-23-na-area-queimada-em-2025-mas-Caatinga-registra-aumento-no-fogo="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide border border-[#F4EA93]/40 bg-[#F4EA93]/10 text-[#F4EA93] hover:bg-[#F4EA93] hover:text-stone-950 transition-all cursor-pointer"
                  >
                    WWF Brasil
                  </a>
                </div>
              </div>

              {/* Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ABOUT_TEXT.themes.map((theme, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-amber-500/30 transition-all space-y-2"
                  >
                    <span className="text-[10px] font-mono tracking-widest text-[#F4EA93] uppercase">
                      PILAR 0{i + 1}
                    </span>
                    <h3 className="text-sm font-bold text-white">{theme.title}</h3>
                    <p className="text-xs text-stone-400 leading-relaxed">{theme.desc}</p>
                  </div>
                ))}
              </div>

              {/* Trailer */}
              <div className="space-y-3">
                <h3 className="font-cinematic text-lg md:text-xl text-[#F4EA93] font-bold uppercase text-center">
                  Assistir Teaser
                </h3>
                <div className="rounded-xl overflow-hidden border border-white/10 aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/NhL9ueEIyvU"
                    title="Teaser Oficial — Quando o Planeta Responde"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Ficha Técnica */}
              <div className="bg-[#1c1915] p-5 rounded-xl border border-white/10 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-200">
                  Ficha Técnica & Lançamento
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-stone-500 block">Ano de Lançamento</span>
                    <span className="font-semibold text-white">{MOVIE_DATA.year}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Classificação</span>
                    <span className="font-semibold text-amber-300">{MOVIE_DATA.rating}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Duração Estimada</span>
                    <span className="font-semibold text-white">{MOVIE_DATA.fullDuration}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Gêneros</span>
                    <span className="font-semibold text-white">{MOVIE_DATA.genres}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: PERSONAGENS */}
          {activeTab === 'personagens' && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-white/10 pb-3 text-center">
                <h2 className="font-cinematic text-3xl md:text-4xl text-[#F4EA93] font-bold uppercase">
                  Elenco
                </h2>
              </div>

              <CharacterCarousel characters={CHARACTERS} />
            </div>
          )}

          {/* TAB: GALERIA */}
          {activeTab === 'galeria' && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-white/10 pb-3 text-center">
                <h2 className="font-cinematic text-3xl md:text-4xl text-[#F4EA93] font-bold uppercase">
                  Produção
                </h2>
              </div>

              {/* Mosaico de fotos: colunas em cascata, igual a uma galeria de portfólio */}
              <div className="columns-2 sm:columns-3 gap-3 [column-fill:_balance]">
                {GALLERY_PHOTOS.map((photo, i) => (
                  <div
                    key={i}
                    className="group mb-3 rounded-xl overflow-hidden bg-black/50 border border-white/10 hover:border-[#F4EA93]/50 transition-all break-inside-avoid"
                  >
                    <img
                      src={photo}
                      alt={`Registro de produção ${i + 1}`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: BASTIDORES */}
          {activeTab === 'bastidores' && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-white/10 pb-3 text-center">
                <h2 className="font-cinematic text-3xl md:text-4xl text-[#F4EA93] font-bold uppercase">
                  Criação e Direção
                </h2>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10 aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/nYPN06CCD74"
                  title="Bastidores"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="space-y-4 text-sm text-stone-300 leading-relaxed font-light">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-400" />
                    Efeitos Práticos e Atmosfera Real
                  </h3>
                  <p className="text-xs text-stone-400">
                    A produção evitou telas verdes excessivas, optando por gravações reais em áreas áridas com iluminação de fogo controlado e lentes anamórficas de alto contraste para capturar a textura da terra rachada e da fumaça crepuscular.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#F4EA93]" />
                    Desenho de Som Orgânico
                  </h3>
                  <p className="text-xs text-stone-400">
                    Para a infecção fúngica e os animais, os designers de som misturaram gravações de cigarras do sertão aceleradas, estalos de galhos secos de marmeleiro e instrumentos de corda rústicos do Nordeste afinados em frequências dissonantes.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
