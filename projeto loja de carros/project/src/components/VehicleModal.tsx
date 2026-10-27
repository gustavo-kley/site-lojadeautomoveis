import { useState, useEffect, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Gauge,
  Settings2,
  Fuel,
  Palette,
  CheckCircle2,
  Tag,
} from 'lucide-react';
import type { Vehicle } from '@/data/vehicles';
import {
  formatBRL,
  formatMileage,
  vehicleInquiryMessage,
} from '@/lib/utils';
import StatusBadge from './StatusBadge';
import WhatsAppButton from './WhatsAppButton';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export default function VehicleModal({ vehicle, onClose }: VehicleModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    if (!vehicle) return;
    setCurrentImage((i) => (i + 1) % vehicle.images.length);
  }, [vehicle]);

  const prevImage = useCallback(() => {
    if (!vehicle) return;
    setCurrentImage((i) => (i - 1 + vehicle.images.length) % vehicle.images.length);
  }, [vehicle]);

  useEffect(() => {
    setCurrentImage(0);
  }, [vehicle]);

  useEffect(() => {
    if (!vehicle) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [vehicle, onClose, nextImage, prevImage]);

  if (!vehicle) return null;

  const specs = [
    { icon: <Tag className="h-4 w-4" />, label: 'Identificador', value: vehicle.id },
    { icon: <Calendar className="h-4 w-4" />, label: 'Ano', value: `${vehicle.yearFabrication}/${vehicle.yearModel}` },
    { icon: <Gauge className="h-4 w-4" />, label: 'Quilometragem', value: formatMileage(vehicle.mileage) },
    { icon: <Settings2 className="h-4 w-4" />, label: 'Câmbio', value: vehicle.transmission },
    { icon: <Fuel className="h-4 w-4" />, label: 'Combustível', value: vehicle.fuel },
    { icon: <Palette className="h-4 w-4" />, label: 'Cor', value: vehicle.color },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink-950/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative my-4 w-full max-w-4xl rounded-2xl bg-white shadow-2xl animate-scale-in sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-800 shadow-lg transition-colors hover:bg-accent-500 hover:text-white"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Galeria */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-ink-900 sm:aspect-[16/9]">
          <img
            src={vehicle.images[currentImage]}
            alt={`${vehicle.brand} ${vehicle.model} — foto ${currentImage + 1}`}
            className="h-full w-full object-cover"
          />
          {vehicle.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-lg transition-colors hover:bg-white"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-lg transition-colors hover:bg-white"
                aria-label="Próxima foto"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              {/* Thumbnails */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 rounded-full bg-ink-950/60 p-2 backdrop-blur">
                {vehicle.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentImage
                        ? 'w-6 bg-white'
                        : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Ir para foto ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
          {/* Badges sobre a galeria */}
          <div className="absolute left-3 top-3 flex gap-2">
            <StatusBadge status={vehicle.status} />
            {vehicle.demo && (
              <span className="rounded-full bg-ink-900/80 px-3 py-1 text-xs font-bold text-white ring-2 ring-white/20 backdrop-blur">
                Veículo de demonstração
              </span>
            )}
          </div>
        </div>

        {/* Detalhes */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-ink-900">
                {vehicle.brand} {vehicle.model}
              </h2>
              <p className="mt-1 text-ink-600">{vehicle.version}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                Valor
              </p>
              <p className="font-display text-3xl font-extrabold text-accent-600">
                {formatBRL(vehicle.price)}
              </p>
            </div>
          </div>

          {/* Specs grid */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center gap-3 rounded-xl bg-ink-50 px-4 py-3"
              >
                <span className="text-accent-500">{spec.icon}</span>
                <div>
                  <p className="text-xs text-ink-500">{spec.label}</p>
                  <p className="text-sm font-semibold text-ink-900">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Descrição */}
          {vehicle.description && (
            <div className="mt-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-500">
                Descrição
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {vehicle.description}
              </p>
            </div>
          )}

          {/* Features */}
          {vehicle.features.length > 0 && (
            <div className="mt-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-500">
                Equipamentos e características
              </h3>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {vehicle.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-ink-700"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 border-t border-ink-100 pt-6">
            <WhatsAppButton
              message={vehicleInquiryMessage(vehicle)}
              label="Tenho interesse neste veículo"
              variant="primary"
              className="w-full py-3.5 text-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
