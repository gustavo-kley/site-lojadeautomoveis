import type { VehicleStatus } from '@/data/vehicles';

const statusConfig: Record<VehicleStatus, { bg: string; text: string; ring: string }> = {
  Disponível: { bg: 'bg-emerald-500', text: 'text-white', ring: 'ring-emerald-500/30' },
  Reservado: { bg: 'bg-amber-500', text: 'text-white', ring: 'ring-amber-500/30' },
  Vendido: { bg: 'bg-gray-500', text: 'text-white', ring: 'ring-gray-500/30' },
};

export default function StatusBadge({
  status,
  className = '',
}: {
  status: VehicleStatus;
  className?: string;
}) {
  const s = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${s.bg} ${s.text} ring-2 ${s.ring} ${className}`}
    >
      {status}
    </span>
  );
}
