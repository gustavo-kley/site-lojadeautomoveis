import { MessageCircle, AlertCircle } from 'lucide-react';
import { buildWhatsAppLink, isWhatsAppConfigured } from '@/lib/utils';

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  variant?: 'primary' | 'outline' | 'light';
  className?: string;
}

/**
 * Botão reutilizável de WhatsApp.
 * - Quando o número está configurado, abre uma conversa com mensagem pré-preenchida.
 * - Quando não está configurado, exibe um aviso em vez de gerar um link inválido.
 */
export default function WhatsAppButton({
  message,
  label = 'Falar no WhatsApp',
  variant = 'primary',
  className = '',
}: WhatsAppButtonProps) {
  const link = buildWhatsAppLink(message);
  const configured = isWhatsAppConfigured();

  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 px-5 py-3 text-sm';

  const styles: Record<string, string> = {
    primary: 'bg-[#25D366] text-white hover:bg-[#1eb858] shadow-md hover:shadow-lg',
    outline:
      'border-2 border-[#25D366] text-[#1eb858] hover:bg-[#25D366] hover:text-white',
    light:
      'bg-white text-[#1eb858] hover:bg-[#25D366] hover:text-white shadow-md',
  };

  if (!configured) {
    return (
      <span
        title="O número de WhatsApp ainda não foi cadastrado em src/config/business.ts"
        className={`${base} ${styles[variant]} cursor-not-allowed opacity-80 ${className}`}
      >
        <AlertCircle className="h-4 w-4" />
        {label}
      </span>
    );
  }

  return (
    <a
      href={link ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}
