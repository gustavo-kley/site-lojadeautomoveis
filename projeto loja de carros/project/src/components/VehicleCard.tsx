import { Eye, Gauge, Fuel, Calendar, Settings2 } from 'lucide-react';
import type { Vehicle } from '@/data/vehicles';
import { formatBRL, formatMileage, vehicleInquiryMessage } from '@/lib/utils';
import StatusBadge from './StatusBadge';
import WhatsAppButton from './WhatsAppButton';

interface VehicleCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
}

export default function VehicleCard({ vehicle, onViewDetails }: VehicleCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-100/40 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      {/* Imagem */}
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.brand} ${vehicle.model} ${vehicle.version}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badges */}
        <div className="absolute left-3 top-3 flex gap-2">
          <StatusBadge status={vehicle.status} />
          {vehicle.demo && (
            <span className="rounded-full bg-ink-900/80 px-3 py-1 text-xs font-bold text-white ring-2 ring-white/20 backdrop-blur">
              Demonstração
            </span>
          )}
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink-900 backdrop-blur">
          {vehicle.category}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-tight text-ink-900">
          {vehicle.brand} {vehicle.model}
        </h3>
        <p className="mt-0.5 text-sm text-ink-600">{vehicle.version}</p>

        {/* Specs */}
        <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-ink-600">
          <Spec icon={<Calendar className="h-3.5 w-3.5" />} label={`${vehicle.yearFabrication}/${vehicle.yearModel}`} />
          <Spec icon={<Gauge className="h-3.5 w-3.5" />} label={formatMileage(vehicle.mileage)} />
          <Spec icon={<Settings2 className="h-3.5 w-3.5" />} label={vehicle.transmission} />
          <Spec icon={<Fuel className="h-3.5 w-3.5" />} label={vehicle.fuel} />
        </div>

        {/* Preço */}
        <div className="mt-5 border-t border-ink-100 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
            Valor
          </p>
          <p className="mt-1 font-display text-2xl font-extrabold text-ink-900">
            {formatBRL(vehicle.price)}
          </p>
        </div>

        {/* Botões */}
        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={() => onViewDetails(vehicle)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-ink-800"
          >
            <Eye className="h-4 w-4" />
            Ver detalhes
          </button>
          <WhatsAppButton
            message={vehicleInquiryMessage(vehicle)}
            label="Consultar pelo WhatsApp"
            variant="outline"
            className="py-2.5"
          />
        </div>
      </div>
    </article>
  );
}

function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="text-ink-400">{icon}</span>
      {label}
    </span>
  );
}
