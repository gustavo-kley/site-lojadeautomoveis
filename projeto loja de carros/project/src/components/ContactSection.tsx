import { useState } from 'react';
import { Instagram, Send, AlertCircle, MessageCircle, User } from 'lucide-react';
import { business } from '@/config/business';
import WhatsAppButton from './WhatsAppButton';
import { isWhatsAppConfigured, buildWhatsAppLink, generalContactMessage } from '@/lib/utils';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const configured = isWhatsAppConfigured();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Por favor, informe o seu nome.');
      return;
    }
    if (!message.trim()) {
      setError('Por favor, escreva uma mensagem.');
      return;
    }

    const fullMessage = `${generalContactMessage(name.trim())}\n\n${message.trim()}`;
    const link = buildWhatsAppLink(fullMessage);

    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      setError(
        'O número de WhatsApp ainda não foi cadastrado. Configure o contato em src/config/business.ts antes de publicar o site.'
      );
    }
  };

  return (
    <section id="contato" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Lado esquerdo — info */}
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700">
              Contato
            </span>
            <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Fale com a Gustavo Automóveis
            </h2>
            <p className="mt-4 text-ink-600">
              Quer saber mais sobre um veículo ou verificar a disponibilidade? Use o
              WhatsApp para falar diretamente com a equipe.
            </p>

            {/* Aviso de configuração */}
            {!configured && (
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                <div>
                  <p className="text-sm font-semibold text-amber-800">
                    Contato ainda não configurado
                  </p>
                  <p className="mt-1 text-xs text-amber-700">
                    O número de WhatsApp precisa ser cadastrado em{' '}
                    <code className="rounded bg-amber-100 px-1 py-0.5">
                      src/config/business.ts
                    </code>{' '}
                    antes da publicação do site.
                  </p>
                </div>
              </div>
            )}

            {/* Botões de contato rápido */}
            <div className="mt-8 flex flex-col gap-3">
              <WhatsAppButton
                message={generalContactMessage()}
                label="Abrir conversa no WhatsApp"
                variant="primary"
                className="py-3.5"
              />
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-ink-200 px-5 py-3.5 text-sm font-bold text-ink-800 transition-all hover:border-[#833AB4] hover:bg-pink-50"
              >
                <Instagram className="h-4 w-4" />
                {business.instagramHandle}
              </a>
            </div>
          </div>

          {/* Lado direito — formulário opcional */}
          <div className="rounded-2xl bg-ink-50 p-6 shadow-sm ring-1 ring-ink-100 sm:p-8">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
              <MessageCircle className="h-5 w-5 text-accent-500" />
              Solicitar contato
            </h3>
            <p className="mt-2 text-sm text-ink-600">
              Preencha os campos abaixo. Ao enviar, o WhatsApp será aberto com a sua
              mensagem pronta para você confirmar.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Seu nome
                </label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome"
                    className="w-full rounded-lg border border-ink-200 bg-white py-2.5 pl-10 pr-3 text-sm text-ink-900 transition-colors placeholder:text-ink-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/15"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Mensagem
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Escreva sua mensagem para a equipe..."
                  className="w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 transition-colors placeholder:text-ink-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/15"
                />
              </div>

              {error && (
                <p className="flex items-start gap-2 text-xs font-medium text-accent-600">
                  <AlertCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-accent-600 hover:shadow-lg"
              >
                <Send className="h-4 w-4" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
