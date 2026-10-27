import { useState, useEffect } from 'react';
import { Menu, X, Car, Search } from 'lucide-react';
import { business } from '@/config/business';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Estoque', href: '#estoque' },
  { label: 'Sobre a loja', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const headerBg = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-md'
    : 'bg-transparent';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Marca */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#inicio');
            }}
            className="flex items-center gap-2"
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                scrolled ? 'bg-accent-500' : 'bg-white/15 backdrop-blur'
              } transition-colors`}
            >
              <Car
                className={`h-5 w-5 ${scrolled ? 'text-white' : 'text-white'}`}
              />
            </span>
            <span className="leading-tight">
              <span
                className={`block font-display text-base font-extrabold tracking-tight ${
                  scrolled ? 'text-ink-900' : 'text-white'
                }`}
              >
                LORENZO
              </span>
              <span
                className={`block text-[10px] font-semibold tracking-[0.25em] ${
                  scrolled ? 'text-accent-600' : 'text-accent-200'
                }`}
              >
                AUTOMÓVEIS
              </span>
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  scrolled
                    ? 'text-ink-700 hover:bg-ink-50 hover:text-ink-900'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <button
            onClick={() => handleNav('#estoque')}
            className={`hidden items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-all duration-200 md:inline-flex ${
              scrolled
                ? 'bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg'
                : 'bg-white text-ink-900 hover:bg-accent-50 shadow-lg'
            }`}
          >
            <Search className="h-4 w-4" />
            Encontrar meu próximo carro
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
              scrolled ? 'text-ink-900 hover:bg-ink-50' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 animate-scale-in">
            <nav className="flex flex-col p-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-ink-800 hover:bg-ink-50"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => handleNav('#estoque')}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-4 py-3 text-sm font-bold text-white hover:bg-accent-600"
              >
                <Search className="h-4 w-4" />
                Encontrar meu próximo carro
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Placeholder para a marca */}
      <span className="sr-only">{business.name}</span>
    </header>
  );
}
