/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab, StoryTopic } from './types';
import { MOVIE_DATA, STORY_TOPICS } from './data/movieData';
import { Header } from './components/Header';
import { HeroDisplay } from './components/HeroDisplay';
import { Footer } from './components/Footer';
import { EmbersEffect } from './components/EmbersEffect';
import { StoryCardModal } from './components/StoryCardModal';
import { TrailerModal } from './components/TrailerModal';
import { DetailSectionsModal } from './components/DetailSectionsModal';
import { SearchModal } from './components/SearchModal';
import { SplashIntro } from './components/SplashIntro';
import { X, Sparkles, Volume2, Info } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('inicio');
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<StoryTopic | null>(null);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [frameMode, setFrameMode] = useState(true);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
  };

  const handleCloseDetailModal = () => {
    setActiveTab('inicio');
  };

  return (
    <div className="min-h-screen w-full bg-[#0d0c0a] text-stone-200 font-body relative overflow-x-hidden flex items-center justify-center p-0 md:p-3 lg:p-6 select-none">
      {/* Animação de abertura + captura de WhatsApp */}
      <SplashIntro />

      {/* Ambient background blur simulation for the outer frame canvas */}
      <div
        className="fixed inset-0 bg-cover bg-center filter blur-3xl opacity-35 scale-110 pointer-events-none"
        style={{ backgroundImage: `url(${MOVIE_DATA.heroImage})` }}
      />
      <div className="fixed inset-0 bg-radial from-transparent via-[#0d0c0a]/80 to-[#070605] pointer-events-none" />

      {/* Main Container: Framed Showcase mode (like reference print) or Full bleed */}
      <div
        id="film-main-stage"
        className={`relative w-full transition-all duration-500 overflow-hidden flex flex-col justify-between ${
          frameMode
            ? 'max-w-[1400px] min-h-[92vh] md:min-h-[90vh] bg-[#14120f] border-[6px] sm:border-[10px] md:border-[14px] border-[#29251f]/90 rounded-[24px] sm:rounded-[36px] md:rounded-[44px] shadow-[0_25px_80px_rgba(0,0,0,0.95)]'
            : 'min-h-screen bg-[#14120f] rounded-none border-none'
        }`}
      >
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={MOVIE_DATA.heroImage}
            alt="Quando o Planeta Responde - Cenário Caatinga"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.12]"
          />

          {/* Vignette & Gradients to match the reference lighting */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_20%,rgba(10,9,8,0.75)_100%)]" />

          {/* Warm ember glow at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-amber-950/40 to-transparent pointer-events-none" />
        </div>

        {/* Embers Floating Canvas Effect */}
        <EmbersEffect />

        {/* Header Bar */}
        <Header
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          onOpenSearch={(query) => setSearchQuery(query)}
          frameMode={frameMode}
          onToggleFrameMode={() => setFrameMode(!frameMode)}
        />

        {/* Hero Content Display (Split Left & Right) */}
        <HeroDisplay
          onOpenTrailer={() => setIsTrailerOpen(true)}
          onOpenAbout={() => setActiveTab('sobre')}
          onSelectStoryTopic={(topic) => setSelectedTopic(topic)}
        />

        {/* Center decorative circular button (matching the circular button in the reference near the water) */}
        <div className="relative z-20 flex justify-center pb-2 pointer-events-auto">
          <button
            id="center-circle-toggle-btn"
            onClick={() => setIsTrailerOpen(true)}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-stone-200/90 hover:bg-[#F4EA93] text-black font-bold text-xs flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer border border-black/40"
            title="Assistir Teaser Cinematográfico"
          >
            <span className="text-[11px] font-mono tracking-tighter">▶</span>
          </button>
        </div>

        {/* Footer Bar */}
        <Footer
          frameMode={frameMode}
          onToggleFrameMode={() => setFrameMode(!frameMode)}
          onOpenAbout={() => setActiveTab('sobre')}
        />
      </div>

      {/* MODALS */}
      {/* 1. Trailer Player Modal */}
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />

      {/* 2. Story Card Dossier Modal */}
      <StoryCardModal
        topic={selectedTopic}
        onClose={() => setSelectedTopic(null)}
      />

      {/* 3. Detail Sections Modal (Sobre, Personagens, Galeria, Bastidores) */}
      <DetailSectionsModal
        activeTab={activeTab}
        isOpen={activeTab !== 'inicio'}
        onClose={handleCloseDetailModal}
        onSelectTab={handleSelectTab}
      />

      {/* 4. Search Results Modal */}
      <SearchModal
        isOpen={searchQuery !== null}
        query={searchQuery || ''}
        onClose={() => setSearchQuery(null)}
        onSelectStoryTopic={(topic) => setSelectedTopic(topic)}
        onSelectTab={handleSelectTab}
      />
    </div>
  );
}
