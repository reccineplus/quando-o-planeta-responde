# Quando o Planeta Responde — Site Oficial

Site oficial e imersivo do filme de suspense, drama e ficção **Quando o Planeta Responde**: atmosfera da Caatinga, queimadas e segredos da infecção em Oleandro.

## Arquivo Principal

Este é um projeto **React + TypeScript + Vite**. O ponto de entrada é:

```
index.html  →  src/main.tsx  →  src/App.tsx
```

`index.html` carrega `src/main.tsx`, que monta o componente raiz `src/App.tsx` (este,
por sua vez, monta todos os componentes de `src/components/`). É neste fluxo que o
desenvolvimento deve continuar — inclusive no Antigravity.

O arquivo `antigravity.html` (raiz) e sua cópia `public/quando_o_planeta_responde.html`
são apenas uma versão **standalone** (HTML único, sem build, com imagens embutidas em
base64), gerada pelo script `scripts/generate_standalone_html.py` a partir das imagens
em `public/`. Servem só para abrir o site sem precisar rodar `npm install`/`npm run dev`
— não é onde o desenvolvimento deve acontecer.

---

## Como Executar o Projeto Localmente (Localhost)

### Opção 1: Aplicação Completa React + Vite (Recomendada)

**Pré-requisitos:** [Node.js](https://nodejs.org/) instalado no computador.

1. Abra o terminal na pasta do projeto:
   ```bash
   cd quando-o-planeta-responde
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse no navegador:
   **[http://localhost:3000](http://localhost:3000)**

---

### Opção 2: Visualização Standalone Imediata (Sem Instalação)

Caso queira abrir o site instantaneamente sem depender do Node.js:
- Basta dar um **duplo clique no arquivo [antigravity.html](antigravity.html)** na raiz do projeto para abri-lo diretamente em qualquer navegador (Chrome, Edge, Firefox).

---

## Estrutura do Projeto

```text
quando-o-planeta-responde/
├── index.html                        # ⭐ Ponto de entrada principal da aplicação Vite
├── antigravity.html                  # Versão standalone (gerada) para abrir sem servidor
├── package.json                      # Configurações e dependências do projeto
├── vite.config.ts                    # Configuração do Vite e plugins (React, Tailwind)
├── tsconfig.json                     # Configuração do TypeScript
├── metadata.json / .env.example      # Config específica do Google AI Studio (não usada localmente)
├── scripts/
│   └── generate_standalone_html.py   # Gera antigravity.html a partir das imagens *_opt em public/
├── public/                           # Assets públicos servidos estaticamente pelo Vite
│   ├── antigravity.html              # Cópia da versão standalone (link "Baixar HTML" do Header)
│   ├── quando_o_planeta_responde.html# Idem — nome usado pelo botão de download no app
│   ├── rec_logo_opt.png / felipe_desaparecimento_opt.jpg  # Fontes usadas pelo script de geração
│   └── rec_logo.png, rec_logo_original.jpg, rec_logo_preview_dark.png, felipe_desaparecimento.jpg
│                                      # ↳ imagens legadas, não referenciadas pelo app nem pelo script
└── src/
    ├── main.tsx                # Bootstrap do React
    ├── App.tsx                 # Componente raiz da interface e modais
    ├── index.css               # Design system e utilitários Tailwind
    ├── types.ts                # Tipagens TypeScript
    ├── assets/
    │   └── images/             # Imagens e posters oficiais em alta resolução
    ├── components/             # Componentes modulares
    │   ├── Header.tsx          # Cabeçalho com navegação, busca e som
    │   ├── HeroDisplay.tsx     # Área principal com títulos e botões
    │   ├── Footer.tsx          # Rodapé e alternância de moldura
    │   ├── EmbersEffect.tsx    # Efeito visual de brasas animadas em Canvas
    │   ├── OfficialFilmLogo.tsx# Logotipo estilizado do filme
    │   ├── RecStudioLogo.tsx   # Logotipo oficial REC
    │   ├── TrailerModal.tsx    # Modal interativo do teaser/trailer
    │   ├── StoryCardModal.tsx  # Dossiê de registros de campo
    │   ├── DetailSectionsModal.tsx # Seções Sobre, Personagens, Galeria e Bastidores
    │   └── SearchModal.tsx     # Sistema de busca em tempo real
    ├── data/
    │   └── movieData.ts        # Conteúdo do filme, sinopse, personagens e galeria
    └── utils/
        └── audioAmbient.ts     # Sintetizador procedural de áudio da Caatinga (Web Audio API)
```

> **Nota:** `package.json` também lista `@google/genai`, `express` e `dotenv` como
> dependências — são resquícios de um template do Google AI Studio e não são
> importados em nenhum arquivo do projeto. Foram mantidos como estão (nada foi
> removido), mas não são necessários para rodar o site localmente.
