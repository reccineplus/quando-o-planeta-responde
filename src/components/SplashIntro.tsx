import React, { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import { EmbersEffect } from './EmbersEffect';

// Para ativar o envio por e-mail, crie uma chave gratuita em https://web3forms.com
// usando o e-mail reccineplus@gmail.com e cole o "Access Key" aqui.
const WEB3FORMS_ACCESS_KEY = '28026c74-d0b1-4b8f-ae29-30e53411f265';

const STORAGE_KEY = 'qopr_whatsapp_prompted';
const LOGO_DURATION = 2800;

type Phase = 'logo' | 'gate' | 'done';

export const SplashIntro: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('logo');
  const [fadingOut, setFadingOut] = useState(false);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    const timer = setTimeout(() => {
      const alreadyPrompted = localStorage.getItem(STORAGE_KEY);
      if (alreadyPrompted) {
        finish();
      } else {
        setPhase('gate');
      }
    }, LOGO_DURATION);
    return () => clearTimeout(timer);
  }, []);

  const finish = () => {
    setFadingOut(true);
    setTimeout(() => setPhase('done'), 600);
  };

  const markPrompted = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignora falha de armazenamento (modo privado, etc.)
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim()) return;

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'Novo contato - Quando o Planeta Responde',
          from_name: 'Site Quando o Planeta Responde',
          name,
          whatsapp,
          message: `Nome: ${name}\nWhatsApp: ${whatsapp}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    markPrompted();
    setTimeout(() => finish(), 1400);
  };

  if (phase === 'done') return null;

  return (
    <div
      id="splash-intro-overlay"
      className={`fixed inset-0 z-[200] bg-[#0a0908] flex items-center justify-center px-5 overflow-hidden transition-opacity duration-500 ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0">
        <EmbersEffect />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(60,45,15,0.35),transparent_65%)]" />

      {/* LOGO PHASE */}
      {phase === 'logo' && (
        <div className="relative z-10 text-center animate-scale-up">
          <h1 className="font-condensed font-black uppercase leading-[0.84] text-[13vw] sm:text-7xl md:text-8xl shine-text">
            <span className="block">QUANDO</span>
            <span className="block">O PLANETA</span>
            <span className="block">RESPONDE</span>
          </h1>
        </div>
      )}

      {/* WHATSAPP GATE PHASE */}
      {phase === 'gate' && (
        <div className="relative z-10 w-full max-w-md animate-fade-in">
          <div className="bg-[#14120f]/90 border border-[#F4EA93]/30 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm text-center space-y-5">
            <div>
              <span className="text-[11px] font-bold tracking-[0.3em] text-[#F4EA93] uppercase">
                Fique Por Dentro
              </span>
              <h2 className="font-cinematic text-xl sm:text-2xl text-white font-bold mt-2">
                Receba as novidades do filme
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 mt-2 leading-relaxed">
                Preencha seu nome e WhatsApp para enviarmos atualizações sobre "Quando o Planeta Responde" e os próximos projetos do estúdio. Logo após o envio, você terá acesso ao site com todas as novidades.
              </p>
            </div>

            {status === 'sent' ? (
              <p className="text-sm text-[#F4EA93] font-semibold py-4">
                Obrigado! Liberando seu acesso ao site...
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  id="splash-name-input"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full bg-black/40 border border-white/15 focus:border-[#F4EA93] focus:ring-1 focus:ring-[#F4EA93]/50 rounded-lg px-4 py-2.5 text-sm text-stone-100 placeholder-stone-500 outline-none transition-colors"
                />
                <input
                  id="splash-whatsapp-input"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Seu WhatsApp (com DDD)"
                  className="w-full bg-black/40 border border-white/15 focus:border-[#F4EA93] focus:ring-1 focus:ring-[#F4EA93]/50 rounded-lg px-4 py-2.5 text-sm text-stone-100 placeholder-stone-500 outline-none transition-colors"
                />

                {status === 'error' && (
                  <p className="text-xs text-red-400">
                    Não foi possível enviar agora, mas você já pode continuar para o site.
                  </p>
                )}

                <button
                  id="splash-submit-btn"
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 bg-[#F4EA93] hover:bg-[#fff7a8] disabled:opacity-60 text-black font-black text-xs sm:text-sm tracking-wider uppercase px-6 py-3 rounded-md shadow-[0_4px_16px_rgba(244,234,147,0.3)] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'sending' ? 'Enviando...' : 'Quero Receber Novidades'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
