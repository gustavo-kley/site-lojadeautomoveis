/**
 * Configurações da Lorenzo Automóveis.
 * Centralize aqui todos os dados editáveis da empresa.
 *
 * Para publicar o site:
 *  1. Substitua o valor de whatsappNumber abaixo pelo número oficial
 *     no formato internacional, somente dígitos (ex.: 5549999999999).
 *  2. Se preferir aguardar, mantenha whatsappNumber vazio (""):
 *     os botões de contato exibirão uma orientação em vez de links inválidos.
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  city: string;
  state: string;
  cityState: string;
  instagramUrl: string;
  instagramHandle: string;
  instagramFollowers: string;
  whatsappNumber: string; // somente dígitos, formato internacional (ex.: 5549991234567)
  websiteDomain: string; // domínio configurável para publicação futura
  heroImage: string;
  aboutImage: string;
}

export const business: BusinessConfig = {
  name: 'GUSTAVO AUTOMÓVEIS',
  tagline: 'Veículos multimarcas em Lages/SC',
  city: 'Lages',
  state: 'Santa Catarina',
  cityState: 'Lages, Santa Catarina',
  instagramUrl: 'https://www.instagram.com/kley_guu/',
  instagramHandle: '@kley_guu',
  instagramFollowers: 'aprox. 2.800 seguidores',
  // ⚠️ Cadastre o número oficial antes de publicar.
  //    Formato: código do país + DDD + número, somente dígitos.
  //    Exemplo: '5549991234567'
  whatsappNumber: '',
  websiteDomain: 'www.lorenzoautomoveis.com.br',
  heroImage:
    'https://images.pexels.com/photos/5864164/pexels-photo-5864164.jpeg?auto=compress&cs=tinysrgb&w=1920',
  aboutImage:
    'https://images.pexels.com/photos/18108314/pexels-photo-18108314.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export default business;
