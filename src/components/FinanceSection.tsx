import { Handshake, Info } from 'lucide-react';

export default function FinanceSection() {
  return (
    <section className="bg-ink-50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
            <Handshake className="h-7 w-7" />
          </div>
          <h2 className="mt-5 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
            Troca e financiamento
          </h2>
          <div className="mt-6 max-w-2xl rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-ink-100 sm:p-8">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-400" />
              <p className="text-sm leading-relaxed text-ink-700">
                Consulte a equipe sobre as condições de negociação disponíveis para o
                veículo desejado, incluindo eventuais possibilidades de troca do seu
                veículo atual.
              </p>
            </div>
            <p className="mt-4 text-xs text-ink-400">
              As condições de financiamento, taxas, prazos e aprovação de crédito
              serão informadas pela equipe conforme cada caso. O site não realiza
              simulações financeiras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
