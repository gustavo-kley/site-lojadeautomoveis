import { business } from '@/config/business';
import type { Vehicle } from '@/data/vehicles';

/** Formata um valor numérico como moeda brasileira (R$). */
export function formatBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value);
}

/** Formata quilometragem no padrão brasileiro (ex.: 24.500 km). */
export function formatMileage(km: number): string {
  return `${new Intl.NumberFormat('pt-BR').format(km)} km`;
}

/** Retorna true quando há um número de WhatsApp válido configurado. */
export function isWhatsAppConfigured(): boolean {
  return /^\d{10,15}$/.test(business.whatsappNumber);
}

/**
 * Gera um link wa.me com mensagem pré-preenchida.
 * Retorna null quando o WhatsApp não está configurado.
 */
export function buildWhatsAppLink(message: string): string | null {
  if (!isWhatsAppConfigured()) return null;
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Mensagem padrão de interesse em um veículo. */
export function vehicleInquiryMessage(vehicle: Vehicle): string {
  const label = `${vehicle.brand} ${vehicle.model} ${vehicle.version} (${vehicle.id})`;
  return `Ola! Acessei o site da Lorenzo Automoveis e gostaria de obter mais informacoes sobre o veiculo ${label}. Ele ainda esta disponivel?`;
}

/** Mensagem genérica de contato. */
export function generalContactMessage(name?: string): string {
  const prefix = name ? `Ola! Meu nome e ${name}. ` : 'Ola! ';
  return `${prefix}Acessei o site da Lorenzo Automoveis e gostaria de mais informacoes sobre os veiculos disponiveis.`;
}
