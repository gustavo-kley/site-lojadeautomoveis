import { Sparkles } from 'lucide-react';
import type { Vehicle } from '@/data/vehicles';
import VehicleCard from './VehicleCard';

interface FeaturedSectionProps {
  vehicles: Vehicle[];
  onViewDetails: (vehicle: Vehicle) => void;
}

export default function FeaturedSection({
  vehicles,
  onViewDetails,
}: FeaturedSectionProps) {
  const featured = vehicles.filter((v) => v.featured);

  if (featured.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700">
            <Sparkles className="h-3.5 w-3.5" />
            Em destaque
          </span>
          <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Oportunidades para conhecer
          </h2>
          <p className="mt-3 max-w-xl text-ink-600">
            Uma seleção de veículos que chamaram atenção. Consulte a disponibilidade
            diretamente com a equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
