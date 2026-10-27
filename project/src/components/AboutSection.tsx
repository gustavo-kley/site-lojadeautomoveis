import { Instagram, MapPin } from 'lucide-react';
import { business } from '@/config/business';

export default function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Imagem */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img
                src={business.aboutImage}
                alt="Ambiente automotivo profissional"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Badge flutuante */}
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-ink-900 px-6 py-4 text-white shadow-xl sm:block">
              <p className="font-display text-3xl font-extrabold text-gold-400">
                Multimarcas
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                em Lages / SC
              </p>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700">
              Sobre a loja
            </span>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl">
              Uma escolha mais simples para o seu próximo veículo.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-700">
              A Lorenzo Automóveis é uma loja multimarcas em Lages/SC. Conheça os
              veículos disponíveis, consulte as informações de cada modelo e fale
              diretamente com a equipe para esclarecer dúvidas e verificar as
              condições de negociação.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-ink-600">
                <MapPin className="h-4 w-4 text-accent-500" />
                {business.cityState}
              </div>
            </div>

            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg hover:brightness-110"
            >
              <Instagram className="h-4 w-4" />
              Seguir {business.instagramHandle}
            </a>
            <p className="mt-2 text-xs text-ink-500">
              {business.instagramFollowers}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
