import { Eye, Camera, MessageSquare, ClipboardCheck } from 'lucide-react';

const principles = [
  {
    icon: <Eye className="h-6 w-6" />,
    title: 'Informações claras',
    description:
      'Apresentamos os dados de cada veículo de forma organizada para você comparar com facilidade.',
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: 'Fotos e especificações',
    description:
      'Galeria de imagens e ficha técnica em cada anúncio para você conhecer o veículo antes de visitar.',
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'Atendimento direto',
    description:
      'Fale com a equipe pelo WhatsApp para esclarecer dúvidas sobre qualquer veículo do estoque.',
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: 'Consulta de condições',
    description:
      'Verifique a disponibilidade e as condições de negociação diretamente com a Lorenzo Automóveis.',
  },
];

export default function TrustSection() {
  return (
    <section className="bg-ink-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Como o site ajuda você
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-white/70">
            Nossos objetivos de comunicação para tornar a sua busca mais simples e
            transparente.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl bg-ink-800 p-6 ring-1 ring-white/5 transition-all duration-300 hover:bg-ink-700 hover:ring-accent-500/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                {p.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-white/40">
          Estes princípios refletem os objetivos de comunicação do site e não
          constituem garantias comerciais ou de qualidade mecânica.
        </p>
      </div>
    </section>
  );
}
