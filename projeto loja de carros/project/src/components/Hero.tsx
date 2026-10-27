import { ChevronDown, Sparkles } from 'lucide-react';
import { business } from '@/config/business';
import WhatsAppButton from './WhatsAppButton';
import { generalContactMessage } from '@/lib/utils';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={business.heroImage}
          alt="Fotografia automotiva de destaque — Gustavo Automóveis"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/60 to-ink-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur ring-1 ring-white/20">
            <Sparkles className="h-3.5 w-3.5 text-gold-400" />
            {business.tagline}
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Seu próximo carro{' '}
            <span className="text-accent-400">começa aqui.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Encontre veículos multimarcas e conheça as opções disponíveis na Gustavo
            Automóveis, em Lages/SC.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => scrollTo('#estoque')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-200 hover:bg-accent-600 hover:shadow-2xl"
            >
              Explorar veículos
              <ChevronDown className="h-4 w-4" />
            </button>
            <WhatsAppButton
              message={generalContactMessage()}
              label="Falar com a equipe"
              variant="outline"
              className="border-white/40 text-white hover:bg-white hover:text-ink-900"
            />
          </div>

          {/* Indicadores rápidos */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {[
              { label: 'Multimarcas', value: 'Diversas marcas' },
              { label: 'Localização', value: 'Lages / SC' },
              { label: 'Contato', value: 'Direto no WhatsApp' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-wider text-white/50">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <button
        onClick={() => scrollTo('#estoque')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
        aria-label="Rolar para o estoque"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
}
