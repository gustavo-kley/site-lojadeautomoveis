import { Car, Instagram, MapPin } from 'lucide-react';
import { business } from '@/config/business';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Estoque', href: '#estoque' },
  { label: 'Sobre a loja', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                <Car className="h-5 w-5 text-white" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-base font-extrabold">
                  LORENZO
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.25em] text-accent-300">
                  AUTOMÓVEIS
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {business.tagline}. Conheça o estoque e fale diretamente com a equipe
              para verificar disponibilidade e condições de negociação.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-accent-400" />
              {business.cityState}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/80">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm text-white/60 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/80">
              Redes
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent-400"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Base */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-white/50">
              © {year} Lorenzo Automóveis. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/40">
              {business.websiteDomain}
            </p>
          </div>
          <p className="mt-3 text-center text-[11px] text-white/30 sm:text-left">
            Site demonstrativo. Os veículos apresentados são fictícios e não
            representam o estoque real da loja.
          </p>
        </div>
      </div>
    </footer>
  );
}
