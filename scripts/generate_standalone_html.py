import base64
import os

with open('public/rec_logo_opt.png', 'rb') as f:
    logo_b64 = 'data:image/png;base64,' + base64.b64encode(f.read()).decode('utf-8')

with open('public/felipe_desaparecimento_opt.jpg', 'rb') as f:
    felipe_b64 = 'data:image/jpeg;base64,' + base64.b64encode(f.read()).decode('utf-8')

html_content = f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quando o Planeta Responde - Site Oficial</title>
  <meta name="description" content="Site oficial do filme de suspense e ficção Quando o Planeta Responde. Atmosfera da Caatinga, queimadas e o desaparecimento de Felipe." />
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cinzel:wght@600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {{
      theme: {{
        extend: {{
          fontFamily: {{
            condensed: ['"Bebas Neue"', 'sans-serif'],
            cinematic: ['Cinzel', 'serif'],
            body: ['"Plus Jakarta Sans"', 'sans-serif'],
          }},
          colors: {{
            brand: {{
              gold: '#F4EA93',
              goldLight: '#FFF7A8',
              goldDark: '#C9BE65',
              darkBg: '#0C0B0A',
              cardBg: '#14120F',
              frameBorder: '#29251F'
            }}
          }}
        }}
      }}
    }};
  </script>
  <style>
    body {{
      background-color: #0c0b0a;
      color: #e7e5e4;
      font-family: 'Plus Jakarta Sans', sans-serif;
      margin: 0;
      padding: 0;
      user-select: none;
      -webkit-user-select: none;
    }}
    ::selection {{
      background-color: #F4EA93;
      color: #000;
    }}
    /* Custom Scrollbars */
    ::-webkit-scrollbar {{
      width: 6px;
      height: 6px;
    }}
    ::-webkit-scrollbar-track {{
      background: #14120f;
    }}
    ::-webkit-scrollbar-thumb {{
      background: #3a3328;
      border-radius: 3px;
    }}
    ::-webkit-scrollbar-thumb:hover {{
      background: #F4EA93;
    }}
    @keyframes fadeIn {{
      from {{ opacity: 0; transform: scale(0.96); }}
      to {{ opacity: 1; transform: scale(1); }}
    }}
    .animate-modal {{
      animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }}
  </style>
</head>
<body class="min-h-screen flex items-center justify-center p-0 md:p-3 lg:p-6 relative overflow-x-hidden">

  <!-- Ambient blur backdrop -->
  <div class="fixed inset-0 bg-cover bg-center filter blur-3xl opacity-35 scale-110 pointer-events-none"
       style="background-image: url('https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?q=80&w=2000&auto=format&fit=crop');"></div>
  <div class="fixed inset-0 bg-gradient-to-t from-[#070605] via-[#0d0c0a]/80 to-transparent pointer-events-none"></div>

  <!-- Embers Canvas Background -->
  <canvas id="embers-canvas" class="fixed inset-0 z-10 pointer-events-none w-full h-full"></canvas>

  <!-- Notification Toast -->
  <div id="toast" class="fixed bottom-12 right-6 z-50 hidden flex items-center gap-2 bg-[#181511] border border-[#F4EA93] text-[#F4EA93] px-4 py-2.5 rounded-xl shadow-2xl transition-all">
    <svg class="w-4 h-4 text-[#F4EA93]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span id="toast-text" class="text-xs font-semibold">Adicionado aos seus Favoritos!</span>
  </div>

  <!-- Main Container Frame -->
  <div id="film-main-stage" class="relative z-20 w-full max-w-[1400px] min-h-[92vh] md:min-h-[90vh] bg-[#14120f] border-[6px] sm:border-[10px] md:border-[14px] border-[#29251f]/90 rounded-[24px] sm:rounded-[36px] md:rounded-[44px] shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col justify-between overflow-hidden">
    
    <!-- Hero Image Background inside frame -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <img src="https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?q=80&w=2000&auto=format&fit=crop"
           alt="Cenário Caatinga"
           class="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.12]" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#14120f] via-[#14120f]/40 to-black/60"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#14120f]/90 via-[#14120f]/40 to-transparent"></div>
    </div>

    <!-- ================= HEADER ================= -->
    <header class="relative z-30 w-full px-4 sm:px-8 md:px-12 pt-4 md:pt-6 pb-2">
      <div class="flex items-center justify-between gap-4">
        <!-- Logo REC -->
        <div class="flex items-center gap-4 lg:gap-8">
          <div class="relative inline-flex items-center select-none group cursor-pointer" onclick="openSection('inicio')">
            <img src="{logo_b64}" alt="REC" class="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_6px_16px_rgba(0,0,0,0.85)]" />
          </div>

          <!-- Nav Menu -->
          <nav class="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-semibold tracking-wider uppercase">
            <button onclick="openSection('inicio')" class="px-3 py-1.5 rounded-lg text-[#F4EA93] font-bold">Início</button>
            <button onclick="openSection('sinopse')" class="px-3 py-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-white/5 transition-colors">Sinopse</button>
            <button onclick="openSection('personagens')" class="px-3 py-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-white/5 transition-colors">Personagens</button>
            <button onclick="openSection('cidade')" class="px-3 py-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-white/5 transition-colors">Cidade</button>
            <button onclick="openSection('galeria')" class="px-3 py-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-white/5 transition-colors">Galeria</button>
            <button onclick="openSection('bastidores')" class="px-3 py-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-white/5 transition-colors">Bastidores</button>
          </nav>
        </div>

        <!-- Right: Actions (Search, Download HTML) -->
        <div class="flex items-center gap-2 sm:gap-3">
          <button onclick="openSearchModal()" class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-stone-300 hover:text-white hover:border-[#F4EA93]/50 transition-all text-xs">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span class="hidden sm:inline">Buscar</span>
          </button>
          
          <button onclick="downloadSelfHtml()" class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F4EA93]/15 border border-[#F4EA93]/40 text-[#F4EA93] hover:bg-[#F4EA93] hover:text-black font-semibold transition-all text-xs" title="Baixar este arquivo HTML para usar onde quiser">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            <span>Salvar HTML</span>
          </button>
        </div>
      </div>
    </header>

    <!-- ================= MAIN HERO DISPLAY ================= -->
    <main class="relative z-20 flex-1 flex flex-col justify-between px-4 sm:px-8 md:px-12 py-4 md:py-6 text-stone-100">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center my-auto">
        <!-- Left Column -->
        <div class="lg:col-span-5 flex flex-col justify-center space-y-4 md:space-y-6 pt-2 lg:pt-0">
          <div class="flex items-center gap-2">
            <span class="h-[2px] w-6 bg-[#F4EA93]"></span>
            <span class="font-mono text-[11px] md:text-xs tracking-[0.25em] text-[#F4EA93] font-bold uppercase drop-shadow">
              FILME ORIGINAL
            </span>
          </div>

          <!-- Main Title -->
          <h1 class="font-condensed font-black text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[0.88] tracking-normal text-[#F4EA93] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] uppercase">
            <span class="block">QUANDO</span>
            <span class="block">O PLANETA</span>
            <span class="block text-[#f7ee9d]">RESPONDE</span>
          </h1>

          <p class="font-cinematic text-xs sm:text-sm tracking-[0.22em] text-stone-200/90 font-medium uppercase drop-shadow max-w-md">
            A NATUREZA NÃO ESQUECE. ELA RESPONDE.
          </p>

          <!-- Favorite Button (single star) -->
          <div class="pt-2">
            <button id="favorite-btn" onclick="toggleFavorite()" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg cursor-pointer bg-[#F4EA93] hover:bg-[#fff7a8] text-stone-950 hover:shadow-[0_0_16px_rgba(244,234,147,0.4)]">
              <svg id="favorite-star-icon" class="w-5 h-5 transition-transform" fill="rgba(12,11,10,0.2)" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
              <span id="favorite-btn-text">ADICIONAR AOS FAVORITOS</span>
            </button>
          </div>
        </div>

        <!-- Center empty space for aesthetic balance -->
        <div class="hidden lg:block lg:col-span-3"></div>

        <!-- Right Column (Trailer Card) -->
        <div class="lg:col-span-4 flex flex-col justify-center items-center lg:items-end">
          <div class="w-full max-w-[340px] sm:max-w-[380px] bg-black/55 backdrop-blur-md rounded-2xl border border-white/15 p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col space-y-4 group hover:border-[#F4EA93]/50 transition-all duration-300">
            
            <!-- Video Thumbnail -->
            <div onclick="openTrailerModal()" class="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer border border-white/10 group-hover:border-[#F4EA93]/40 transition-colors shadow-inner">
              <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop"
                   alt="Trailer Thumbnail"
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter contrast-125 brightness-90" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              
              <!-- Center Play Badge -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-12 h-12 rounded-full bg-[#F4EA93]/90 text-stone-950 flex items-center justify-center shadow-[0_0_20px_rgba(244,234,147,0.8)] group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 fill-stone-950 ml-0.5" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"></path></svg>
                </div>
              </div>

              <div class="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10 text-[10px] font-mono tracking-wider text-[#F4EA93]">
                <span>TRAILER OFICIAL</span>
              </div>
            </div>

            <!-- Content Details -->
            <div class="space-y-2">
              <h2 class="font-cinematic font-bold text-lg text-[#F4EA93] tracking-wide">
                QUANDO O PLANETA RESPONDE
              </h2>
              <div class="flex flex-wrap items-center gap-1.5 text-xs text-stone-300 font-medium">
                <span>2026</span>
                <span class="text-stone-500">•</span>
                <span class="px-1.5 py-0.2 bg-stone-800 text-stone-200 border border-stone-600 rounded text-[10px] font-mono font-bold">+12</span>
                <span class="text-stone-500">•</span>
                <span class="text-[#F4EA93] font-semibold">Trailer</span>
                <span class="text-stone-500">•</span>
                <span class="text-stone-400">Suspense • Drama • Ficção</span>
              </div>
              <p class="text-xs text-stone-300/85 line-clamp-3 leading-relaxed">
                Após uma série de queimadas anormais na Caatinga, um biólogo desaparece deixando para trás registros de uma força dormente que começou a se manifestar.
              </p>
            </div>

            <!-- Action Button -->
            <div class="pt-1">
              <button onclick="openSection('sinopse')" class="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/10 hover:bg-[#F4EA93] text-stone-200 hover:text-stone-950 border border-white/15 hover:border-[#F4EA93] transition-all text-xs font-bold tracking-wider uppercase">
                <span>Explorar Mistério</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= BOTTOM STORY CARDS ================= -->
      <div class="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
        
        <!-- Story 1: O DESAPARECIMENTO DE FELIPE with user's exact uploaded image -->
        <div onclick="openDocument('felipe')" class="flex items-center gap-3 p-2.5 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 hover:border-[#F4EA93]/50 transition-all cursor-pointer group">
          <div class="w-12 h-12 rounded-lg overflow-hidden border border-white/15 shrink-0 bg-stone-900">
            <img src="{felipe_b64}" alt="Felipe" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div class="overflow-hidden">
            <div class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
              <span class="text-[9px] font-mono text-stone-400 uppercase tracking-wider">ARQUIVO CONFIDENCIAL #01</span>
            </div>
            <h4 class="text-xs font-bold text-stone-200 group-hover:text-[#F4EA93] transition-colors truncate font-cinematic">
              O DESAPARECIMENTO DE FELIPE
            </h4>
            <p class="text-[10px] text-stone-400 truncate">A última expedição nas queimadas da Serra Vermelha.</p>
          </div>
        </div>

        <!-- Story 2: FEBRE DA TERRA -->
        <div onclick="openDocument('febre')" class="flex items-center gap-3 p-2.5 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 hover:border-[#F4EA93]/50 transition-all cursor-pointer group">
          <div class="w-12 h-12 rounded-lg overflow-hidden border border-white/15 shrink-0 bg-stone-900">
            <img src="https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?q=80&w=300&auto=format&fit=crop" alt="Febre da Terra" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div class="overflow-hidden">
            <div class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span class="text-[9px] font-mono text-stone-400 uppercase tracking-wider">RELATÓRIO BIOLÓGICO #02</span>
            </div>
            <h4 class="text-xs font-bold text-stone-200 group-hover:text-[#F4EA93] transition-colors truncate font-cinematic">
              FEBRE DA TERRA
            </h4>
            <p class="text-[10px] text-stone-400 truncate">As raízes carbonizadas continuam quentes há semanas.</p>
          </div>
        </div>

      </div>
    </main>

    <!-- ================= FOOTER ================= -->
    <footer class="relative z-30 w-full px-4 sm:px-8 md:px-12 py-3 border-t border-white/10 bg-black/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-2">
      <div>
        <span>© 2026 REC Studio. Todos os direitos reservados.</span>
      </div>
      <div class="flex items-center gap-4">
        <span>Oleandro, Sertão • Classificação: +12</span>
        <button onclick="downloadSelfHtml()" class="text-[#F4EA93] hover:underline font-semibold cursor-pointer">Exportar HTML Standalone</button>
      </div>
    </footer>
  </div>

  <!-- ================= MODALS ================= -->

  <!-- 1. Trailer Modal -->
  <div id="modal-trailer" class="fixed inset-0 z-50 hidden bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
    <div class="relative w-full max-w-4xl bg-[#14120f] border border-[#F4EA93]/40 rounded-2xl overflow-hidden shadow-2xl animate-modal flex flex-col">
      <div class="flex items-center justify-between p-4 border-b border-white/10 bg-black/60">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
          <h3 class="font-cinematic font-bold text-[#F4EA93] text-sm md:text-base">TRAILER OFICIAL • QUANDO O PLANETA RESPONDE</h3>
        </div>
        <button onclick="closeModal('modal-trailer')" class="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-white/10">✕</button>
      </div>

      <!-- Player Canvas / Mock screen -->
      <div class="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
        <img id="trailer-screen" src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop" class="w-full h-full object-cover filter brightness-90" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>
        
        <!-- Big Play/Pause Toggle -->
        <button onclick="toggleTrailerPlayback()" class="w-16 h-16 rounded-full bg-[#F4EA93]/90 text-stone-950 flex items-center justify-center shadow-[0_0_30px_rgba(244,234,147,0.8)] hover:scale-110 transition-transform cursor-pointer">
          <svg id="trailer-play-icon" class="w-8 h-8 fill-stone-950 ml-1" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"></path></svg>
        </button>

        <div class="absolute top-4 left-4 font-mono text-xs text-[#F4EA93] bg-black/60 px-2 py-1 rounded border border-white/15">
          REC ● 00:01:24 / 00:02:18
        </div>
      </div>

      <!-- Bottom Trailer Controls -->
      <div class="p-4 bg-black/70 flex items-center justify-between gap-4 text-xs text-stone-300">
        <div class="flex items-center gap-3">
          <span class="text-[#F4EA93] font-bold">Cenas:</span>
          <button onclick="setTrailerScene(0)" class="hover:text-white px-2 py-1 rounded bg-white/5">01: A Fumaça</button>
          <button onclick="setTrailerScene(1)" class="hover:text-white px-2 py-1 rounded bg-white/5">02: A Trilha de Felipe</button>
          <button onclick="setTrailerScene(2)" class="hover:text-white px-2 py-1 rounded bg-white/5">03: O Despertar</button>
        </div>
        <button onclick="closeModal('modal-trailer')" class="px-4 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white">Fechar</button>
      </div>
    </div>
  </div>

  <!-- 2. Document / Story Modal -->
  <div id="modal-document" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="relative w-full max-w-2xl bg-[#14120f] border border-[#F4EA93]/40 rounded-2xl overflow-hidden shadow-2xl animate-modal flex flex-col max-h-[90vh]">
      <div class="p-4 border-b border-white/10 bg-black/60 flex items-center justify-between">
        <div>
          <span id="doc-tag" class="text-[10px] font-mono text-[#F4EA93] tracking-widest uppercase">ARQUIVO CONFIDENCIAL</span>
          <h3 id="doc-title" class="font-cinematic font-bold text-white text-lg">O DESAPARECIMENTO DE FELIPE</h3>
        </div>
        <button onclick="closeModal('modal-document')" class="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-white/10">✕</button>
      </div>

      <div class="p-6 overflow-y-auto space-y-4">
        <div class="relative h-64 rounded-xl overflow-hidden border border-white/15">
          <img id="doc-image" src="{felipe_b64}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#14120f] via-transparent to-transparent"></div>
        </div>

        <div id="doc-content" class="text-stone-300 text-sm leading-relaxed space-y-3 font-light">
          <!-- Populated by JS -->
        </div>
      </div>

      <div class="p-4 border-t border-white/10 bg-black/40 flex justify-end">
        <button onclick="closeModal('modal-document')" class="px-4 py-2 rounded-lg bg-[#F4EA93] text-black font-bold text-xs uppercase hover:bg-[#fff7a8]">Entendido</button>
      </div>
    </div>
  </div>

  <!-- 3. Section Detail Modal (Sinopse, Personagens, Cidade, Galeria, Bastidores) -->
  <div id="modal-section" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="relative w-full max-w-3xl bg-[#14120f] border border-[#F4EA93]/40 rounded-2xl overflow-hidden shadow-2xl animate-modal flex flex-col max-h-[90vh]">
      <!-- Section Header -->
      <div class="p-4 border-b border-white/10 bg-black/60 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-[#F4EA93]"></span>
          <h3 id="section-modal-title" class="font-cinematic font-bold text-[#F4EA93] text-lg uppercase tracking-wider">Sinopse</h3>
        </div>
        <button onclick="closeModal('modal-section')" class="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-white/10">✕</button>
      </div>

      <!-- Section Tabs Bar -->
      <div class="flex items-center gap-2 px-4 py-2 bg-black/40 border-b border-white/5 overflow-x-auto text-xs font-semibold uppercase">
        <button onclick="openSection('sinopse')" id="tab-btn-sinopse" class="px-3 py-1.5 rounded-lg text-stone-400 hover:text-white">Sinopse</button>
        <button onclick="openSection('personagens')" id="tab-btn-personagens" class="px-3 py-1.5 rounded-lg text-stone-400 hover:text-white">Personagens</button>
        <button onclick="openSection('cidade')" id="tab-btn-cidade" class="px-3 py-1.5 rounded-lg text-stone-400 hover:text-white">Cidade</button>
        <button onclick="openSection('galeria')" id="tab-btn-galeria" class="px-3 py-1.5 rounded-lg text-stone-400 hover:text-white">Galeria</button>
        <button onclick="openSection('bastidores')" id="tab-btn-bastidores" class="px-3 py-1.5 rounded-lg text-stone-400 hover:text-white">Bastidores</button>
      </div>

      <!-- Section Dynamic Content Area -->
      <div id="section-modal-body" class="p-6 overflow-y-auto text-stone-300 text-sm leading-relaxed space-y-4">
        <!-- Injected via JavaScript -->
      </div>
    </div>
  </div>

  <!-- 4. Search Modal -->
  <div id="modal-search" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="relative w-full max-w-lg bg-[#14120f] border border-[#F4EA93]/40 rounded-2xl overflow-hidden shadow-2xl animate-modal p-6 space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-white/10">
        <h3 class="font-cinematic font-bold text-[#F4EA93] text-base">BUSCAR NO ARQUIVO</h3>
        <button onclick="closeModal('modal-search')" class="text-stone-400 hover:text-white">✕</button>
      </div>
      <div class="relative">
        <input id="search-input" oninput="handleSearch(this.value)" type="text" placeholder="Digite Felipe, Oleandro, queimadas, infecção..." class="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-[#F4EA93] text-sm" />
      </div>
      <div id="search-results" class="max-h-60 overflow-y-auto space-y-2 text-xs">
        <div class="text-stone-400">Sugestões rápidas:</div>
        <div onclick="openDocument('felipe'); closeModal('modal-search')" class="p-2.5 rounded-lg bg-white/5 hover:bg-[#F4EA93]/20 cursor-pointer text-stone-200">
          ● <strong>Felipe</strong> - Biólogo de campo desaparecido
        </div>
        <div onclick="openSection('cidade'); closeModal('modal-search')" class="p-2.5 rounded-lg bg-white/5 hover:bg-[#F4EA93]/20 cursor-pointer text-stone-200">
          ● <strong>Oleandro</strong> - Cidade sob toque de recolher
        </div>
        <div onclick="openDocument('febre'); closeModal('modal-search')" class="p-2.5 rounded-lg bg-white/5 hover:bg-[#F4EA93]/20 cursor-pointer text-stone-200">
          ● <strong>Febre da Terra</strong> - Mutação das raízes da Caatinga
        </div>
      </div>
    </div>
  </div>

  <!-- ================= CLIENT JAVASCRIPT ================= -->
  <script>
    // Asset references embedded directly as base64
    const ASSETS = {{
      logo: "{logo_b64}",
      felipe: "{felipe_b64}",
      caatinga: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?q=80&w=2000&auto=format&fit=crop",
      entity: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop"
    }};

    // Floating Embers Canvas Animation
    (function initEmbers() {{
      const canvas = document.getElementById('embers-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;

      window.addEventListener('resize', () => {{
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      }});

      const particles = [];
      const particleCount = 38;

      for (let i = 0; i < particleCount; i++) {{
        particles.push({{
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 2.2 + 0.6,
          speedY: Math.random() * 0.7 + 0.3,
          speedX: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.7 + 0.2,
          fadeSpeed: Math.random() * 0.008 + 0.002,
          color: Math.random() > 0.4 ? '#F4EA93' : '#F97316'
        }});
      }}

      function animate() {{
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < particles.length; i++) {{
          const p = particles[i];
          p.y -= p.speedY;
          p.x += p.speedX;
          p.opacity -= p.fadeSpeed;

          if (p.opacity <= 0 || p.y <= 0) {{
            p.x = Math.random() * w;
            p.y = h + 10;
            p.opacity = Math.random() * 0.7 + 0.2;
          }}

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.opacity;
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
          ctx.fill();
        }}
        ctx.globalAlpha = 1.0;
        requestAnimationFrame(animate);
      }}
      animate();
    }})();

    // Favorite Toggle
    let isFavorited = false;
    function toggleFavorite() {{
      isFavorited = !isFavorited;
      const btn = document.getElementById('favorite-btn');
      const starIcon = document.getElementById('favorite-star-icon');
      const btnText = document.getElementById('favorite-btn-text');
      const toast = document.getElementById('toast');
      const toastText = document.getElementById('toast-text');

      if (isFavorited) {{
        btn.classList.add('bg-amber-300', 'ring-2', 'ring-[#F4EA93]');
        starIcon.setAttribute('fill', '#0c0b0a');
        starIcon.classList.add('scale-110');
        btnText.textContent = 'ADICIONADO AOS FAVORITOS';
        toastText.textContent = 'Adicionado aos seus Favoritos!';
      }} else {{
        btn.classList.remove('bg-amber-300', 'ring-2', 'ring-[#F4EA93]');
        starIcon.setAttribute('fill', 'rgba(12,11,10,0.2)');
        starIcon.classList.remove('scale-110');
        btnText.textContent = 'ADICIONAR AOS FAVORITOS';
        toastText.textContent = 'Removido dos Favoritos';
      }}

      toast.classList.remove('hidden');
      setTimeout(() => {{
        toast.classList.add('hidden');
      }}, 2800);
    }}

    // Modal Handlers
    function closeModal(id) {{
      document.getElementById(id).classList.add('hidden');
    }}

    function openTrailerModal() {{
      document.getElementById('modal-trailer').classList.remove('hidden');
    }}

    let isPlaying = false;
    function toggleTrailerPlayback() {{
      isPlaying = !isPlaying;
      const icon = document.getElementById('trailer-play-icon');
      if (isPlaying) {{
        icon.innerHTML = '<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"></path>';
      }} else {{
        icon.innerHTML = '<path d="M5 3l14 9-14 9V3z"></path>';
      }}
    }}

    function setTrailerScene(idx) {{
      const screen = document.getElementById('trailer-screen');
      const imgs = [
        ASSETS.caatinga,
        ASSETS.felipe,
        ASSETS.entity
      ];
      screen.src = imgs[idx] || ASSETS.entity;
    }}

    // Documents
    const DOCS = {{
      felipe: {{
        tag: 'ARQUIVO CONFIDENCIAL #01',
        title: 'O DESAPARECIMENTO DE FELIPE',
        image: ASSETS.felipe,
        content: `
          <p><strong>Status:</strong> Desaparecido há 9 dias na região da Serra Vermelha.</p>
          <p>Felipe, pesquisador florestal e mateiro de Oleandro, adentrou a área de contenção quatro noites antes do primeiro surto reportado no município.</p>
          <p>Em sua última transmissão de rádio às 03:14 da madrugada, ele relatou que o solo das queimadas permanecia quente com pulsações rítmicas e que a vegetação ao redor exalava uma névoa espessa.</p>
          <blockquote class="border-l-2 border-[#F4EA93] pl-3 py-1 italic text-[#F4EA93]">
            "A terra está gerando uma febre. E nós somos o corpo estranho."
          </blockquote>
        `
      }},
      febre: {{
        tag: 'RELATÓRIO BIOLÓGICO #02',
        title: 'FEBRE DA TERRA • ANOMALIA TÉRMICA',
        image: ASSETS.caatinga,
        content: `
          <p><strong>Local:</strong> Raio de 18km ao redor da nascente seca do Rio Pardo.</p>
          <p>Amostras coletadas revelam que a biomassa vegetal calcinada foi colonizada em poucas horas por uma rede fúngico-mineral luminescente.</p>
          <p>A temperatura do subsolo atinge 42°C de maneira constante, mesmo sob chuvas ácidas isoladas.</p>
          <blockquote class="border-l-2 border-[#F4EA93] pl-3 py-1 italic text-[#F4EA93]">
            "Não foi o fogo que destruiu a Caatinga. O fogo foi apenas o catalisador para libertar o que estava preso sob as pedras."
          </blockquote>
        `
      }}
    }};

    function openDocument(key) {{
      const doc = DOCS[key];
      if (!doc) return;
      document.getElementById('doc-tag').textContent = doc.tag;
      document.getElementById('doc-title').textContent = doc.title;
      document.getElementById('doc-image').src = doc.image;
      document.getElementById('doc-content').innerHTML = doc.content;
      document.getElementById('modal-document').classList.remove('hidden');
    }}

    // Sections
    const SECTIONS = {{
      sinopse: {{
        title: 'Sinopse Oficial',
        body: `
          <div class="space-y-4">
            <p class="text-base text-stone-200 leading-relaxed font-light">
              No coração isolado do Sertão, o pequeno vilarejo de <strong>Oleandro</strong> é cercado por queimadas inexplicáveis que desafiam a meteorologia e a física: o fogo queima em círculos concêntricos e não gera cinzas comuns, mas um pó vítreo de odor ferroso.
            </p>
            <p class="leading-relaxed">
              Quando <strong>Felipe</strong>, jovem pesquisador ambiental, desaparece na Serra Vermelha após registrar pulsações no solo, sua irmã e um grupo de moradores decidem entrar na zona interditada. Lá dentro, descobrem que o bioma não está morrendo — está se defendendo com extrema virulência.
            </p>
            <div class="p-4 rounded-xl bg-black/40 border border-[#F4EA93]/30">
              <span class="text-[#F4EA93] font-bold block mb-1 font-cinematic">FICHA TÉCNICA</span>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div>Direção & Roteiro: REC Studio</div>
                <div>Gênero: Suspense / Ficção Científica</div>
                <div>Classificação: +12</div>
                <div>Localização: Oleandro, Sertão</div>
              </div>
            </div>
          </div>
        `
      }},
      personagens: {{
        title: 'Personagens Principais',
        body: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-black/40 border border-[#F4EA93]/20">
              <div class="h-36 rounded-lg overflow-hidden mb-3">
                <img src="${{ASSETS.felipe}}" class="w-full h-full object-cover" />
              </div>
              <h4 class="font-cinematic font-bold text-white text-base">Felipe</h4>
              <span class="text-xs text-[#F4EA93]">Biólogo de Campo • Desaparecido</span>
              <p class="text-xs text-stone-300 mt-2">Pesquisador apaixonado pela Caatinga. O primeiro a alertar sobre as anomalias nas raízes.</p>
            </div>
            <div class="p-4 rounded-xl bg-black/40 border border-[#F4EA93]/20">
              <div class="h-36 rounded-lg overflow-hidden mb-3 bg-stone-900">
                <img src="${{ASSETS.caatinga}}" class="w-full h-full object-cover filter brightness-75" />
              </div>
              <h4 class="font-cinematic font-bold text-white text-base">Mariana</h4>
              <span class="text-xs text-[#F4EA93]">Médica Comunitária</span>
              <p class="text-xs text-stone-300 mt-2">Irmã de Felipe. Luta para identificar a toxina que causa delírios e febre nos sobreviventes.</p>
            </div>
          </div>
        `
      }},
      cidade: {{
        title: 'Cidade de Oleandro',
        body: `
          <div class="space-y-3">
            <p><strong>Oleandro</strong> é um município sertanejo cercado pela Serra Vermelha. Antes conhecido pelo cultivo de mandacaru e mel silvestre, a cidade hoje vive sob estado de calamidade pública e toque de recolher das 18h às 06h.</p>
            <div class="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
              <div class="flex justify-between border-b border-white/5 pb-1"><span>População:</span> <strong>3.840 habitantes</strong></div>
              <div class="flex justify-between border-b border-white/5 pb-1"><span>Status:</span> <strong class="text-red-400">Quarentena Nível 3</strong></div>
              <div class="flex justify-between"><span>Principal Risco:</span> <strong>Inalação de esporos térmicos</strong></div>
            </div>
          </div>
        `
      }},
      galeria: {{
        title: 'Galeria de Registros Visuais',
        body: `
          <div class="grid grid-cols-2 gap-3">
            <div class="rounded-xl overflow-hidden border border-white/15 h-36">
              <img src="${{ASSETS.felipe}}" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-xl overflow-hidden border border-white/15 h-36">
              <img src="${{ASSETS.caatinga}}" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-xl overflow-hidden border border-white/15 h-36 col-span-2">
              <img src="${{ASSETS.entity}}" class="w-full h-full object-cover" />
            </div>
          </div>
        `
      }},
      bastidores: {{
        title: 'Bastidores da Produção',
        body: `
          <div class="space-y-3">
            <p>Produzido pela <strong>REC Studio</strong> com fotografia inspirada na dureza do semiárido e paleta cromática de brasa, âmbar e cinza metálico.</p>
            <p>A gravação das sequências noturnas utilizou efeitos práticos de fumaça e iluminação de tungstênio direto para capturar a textura claustrofóbica da caatinga seca.</p>
          </div>
        `
      }}
    }};

    function openSection(name) {{
      if (name === 'inicio') {{
        closeModal('modal-section');
        return;
      }}
      const sec = SECTIONS[name];
      if (!sec) return;
      document.getElementById('section-modal-title').textContent = sec.title;
      document.getElementById('section-modal-body').innerHTML = sec.body;

      // Update active tab button style
      ['sinopse', 'personagens', 'cidade', 'galeria', 'bastidores'].forEach(tab => {{
        const btn = document.getElementById('tab-btn-' + tab);
        if (btn) {{
          if (tab === name) {{
            btn.className = 'px-3 py-1.5 rounded-lg bg-[#F4EA93] text-black font-bold';
          }} else {{
            btn.className = 'px-3 py-1.5 rounded-lg text-stone-400 hover:text-white';
          }}
        }}
      }});

      document.getElementById('modal-section').classList.remove('hidden');
    }}

    function openSearchModal() {{
      document.getElementById('modal-search').classList.remove('hidden');
      document.getElementById('search-input').focus();
    }}

    function handleSearch(val) {{
      const query = val.toLowerCase().trim();
      const res = document.getElementById('search-results');
      if (!query) return;
      if (query.includes('felipe')) {{
        res.innerHTML = '<div onclick="openDocument(\\'felipe\\'); closeModal(\\'modal-search\\')" class="p-2.5 rounded-lg bg-[#F4EA93]/20 cursor-pointer text-[#F4EA93] font-bold">● O Desaparecimento de Felipe (Arquivo Confidencial)</div>';
      }} else if (query.includes('oleandro') || query.includes('cidade')) {{
        res.innerHTML = '<div onclick="openSection(\\'cidade\\'); closeModal(\\'modal-search\\')" class="p-2.5 rounded-lg bg-[#F4EA93]/20 cursor-pointer text-[#F4EA93] font-bold">● Cidade de Oleandro (Guia & Status)</div>';
      }} else if (query.includes('sinopse') || query.includes('filme')) {{
        res.innerHTML = '<div onclick="openSection(\\'sinopse\\'); closeModal(\\'modal-search\\')" class="p-2.5 rounded-lg bg-[#F4EA93]/20 cursor-pointer text-[#F4EA93] font-bold">● Sinopse Completa do Filme</div>';
      }} else {{
        res.innerHTML = '<div class="text-stone-400 p-2">Nenhum arquivo confidencial correspondente. Tente "Felipe", "Oleandro" ou "Sinopse".</div>';
      }}
    }}

    // Export / Download Self HTML Feature
    function downloadSelfHtml() {{
      const fullDoc = "<!DOCTYPE html>\\n" + document.documentElement.outerHTML;
      const blob = new Blob([fullDoc], {{ type: 'text/html;charset=utf-8' }});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'quando-o-planeta-responde.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }}
  </script>
</body>
</html>'''

with open('public/quando_o_planeta_responde.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

with open('public/antigravity.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

with open('antigravity.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("HTML standalone files successfully generated!")
