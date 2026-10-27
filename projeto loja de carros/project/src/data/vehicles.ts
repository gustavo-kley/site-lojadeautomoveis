export type VehicleStatus = 'Disponível' | 'Reservado' | 'Vendido';

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  yearFabrication: number;
  yearModel: number;
  mileage: number;
  transmission: string;
  fuel: string;
  category: string;
  price: number;
  color: string;
  description: string;
  features: string[];
  images: string[];
  status: VehicleStatus;
  featured: boolean;
  demo: boolean;
}

/**
 * Veículos de DEMONSTRAÇÃO.
 *
 * Os registros abaixo são fictícios e servem apenas para demonstrar a interface.
 * NÃO representam veículos disponíveis na Lorenzo Automóveis.
 *
 * Para substituir por veículos reais:
 *  - Troque os campos de cada registro pelos dados reais.
 *  - Substitua as URLs das imagens por fotografias reais do veículo.
 *  - Defina `demo: false` nos veículos reais.
 *  - Use `status: "Disponível"` para veículos à venda.
 *  - Marque `featured: true` para destacar veículos na seção de oportunidades.
 */

export const vehicles: Vehicle[] = [
  {
    id: 'LA-001',
    brand: 'Toyota',
    model: 'Corolla',
    version: 'XEi 2.0 Flex Automatico',
    yearFabrication: 2022,
    yearModel: 2023,
    mileage: 24500,
    transmission: 'Automatico',
    fuel: 'Flex',
    category: 'Sedan',
    price: 128900,
    color: 'Prata',
    description:
      'Veiculo de demonstracao para apresentar a interface do site. As informacoes e a fotografia abaixo sao ilustrativas e nao correspondem a um veiculo real em estoque.',
    features: [
      'Ar-condicionado',
      'Direcao eletrica',
      'Multimidia Android Auto / CarPlay',
      'Freio ABS',
      'Controle de estabilidade',
      'Camera de re',
    ],
    images: [
      'https://images.pexels.com/photos/18845577/pexels-photo-18845577.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4895427/pexels-photo-4895427.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/19870015/pexels-photo-19870015.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    status: 'Disponível',
    featured: true,
    demo: true,
  },
  {
    id: 'LA-002',
    brand: 'Jeep',
    model: 'Compass',
    version: 'Longitude 4x2 Diesel',
    yearFabrication: 2021,
    yearModel: 2022,
    mileage: 38900,
    transmission: 'Automatico',
    fuel: 'Diesel',
    category: 'SUV',
    price: 165500,
    color: 'Branco',
    description:
      'Registro ficticio para teste da interface. Substitua por dados reais antes de publicar.',
    features: [
      'Ar-condicionado digital',
      'Bancos em couro',
      'Central multimidia',
      'Sensor de estacionamento',
      'Camera de re',
      'Rodas ligas 18',
    ],
    images: [
      'https://images.pexels.com/photos/4909544/pexels-photo-4909544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/14463716/pexels-photo-14463716.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/27497575/pexels-photo-27497575.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    status: 'Disponível',
    featured: true,
    demo: true,
  },
  {
    id: 'LA-003',
    brand: 'Honda',
    model: 'Civic',
    version: 'Touring 1.5 Turbo',
    yearFabrication: 2020,
    yearModel: 2021,
    mileage: 51200,
    transmission: 'CVT',
    fuel: 'Gasolina',
    category: 'Sedan',
    price: 142000,
    color: 'Preto',
    description:
      'Veiculo ficticio para demonstracao. Nao representa um carro real em estoque.',
    features: [
      'Bancos em couro',
      'Teto solar',
      'Honda Sensing',
      'CarPlay',
      'Camera de re',
      'Piloto automatico adaptativo',
    ],
    images: [
      'https://images.pexels.com/photos/17721412/pexels-photo-17721412.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/18393010/pexels-photo-18393010.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    status: 'Disponível',
    featured: true,
    demo: true,
  },
  {
    id: 'LA-004',
    brand: 'Volkswagen',
    model: 'Golf',
    version: 'GTI 2.0 TSI',
    yearFabrication: 2019,
    yearModel: 2020,
    mileage: 47300,
    transmission: 'Automatico',
    fuel: 'Gasolina',
    category: 'Hatch',
    price: 138500,
    color: 'Prata',
    description:
      'Registro de demonstracao. As fotos e especificacoes sao ilustrativas.',
    features: [
      'Modo Sport',
      'Bancos esportivos',
      'Central Digital',
      'Freio ABS',
      'Controle de tracao',
    ],
    images: [
      'https://images.pexels.com/photos/14436192/pexels-photo-14436192.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/27138933/pexels-photo-27138933.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/20303898/pexels-photo-20303898.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    status: 'Disponível',
    featured: false,
    demo: true,
  },
  {
    id: 'LA-005',
    brand: 'Chevrolet',
    model: 'S10',
    version: 'LT 2.8 4x4 Diesel',
    yearFabrication: 2021,
    yearModel: 2022,
    mileage: 55800,
    transmission: 'Automatico',
    fuel: 'Diesel',
    category: 'Picape',
    price: 245000,
    color: 'Vermelho',
    description:
      'Picape ficticia para teste da interface. Substitua por um veiculo real.',
    features: [
      'Tracao 4x4',
      'Cabine dupla',
      'Multimidia',
      'Camera de re',
      'Controle de descida',
      'Sensores de estacionamento',
    ],
    images: [
      'https://images.pexels.com/photos/29026609/pexels-photo-29026609.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/28502326/pexels-photo-28502326.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    status: 'Disponível',
    featured: true,
    demo: true,
  },
  {
    id: 'LA-006',
    brand: 'Hyundai',
    model: 'HB20',
    version: 'Sense 1.0 Flex',
    yearFabrication: 2023,
    yearModel: 2024,
    mileage: 8200,
    transmission: 'Manual',
    fuel: 'Flex',
    category: 'Hatch',
    price: 78900,
    color: 'Azul',
    description:
      'Hatch compacto de demonstracao. Dados e foto ilustrativos.',
    features: [
      'Ar-condicionado',
      'Direcao eletrica',
      'Vidros eletricos',
      'Travas eletricas',
      'ABS',
    ],
    images: [
      'https://images.pexels.com/photos/17078606/pexels-photo-17078606.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/18379601/pexels-photo-18379601.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    status: 'Disponível',
    featured: false,
    demo: true,
  },
  {
    id: 'LA-007',
    brand: 'Nissan',
    model: 'Kicks',
    version: 'SV 1.6 Flex',
    yearFabrication: 2022,
    yearModel: 2023,
    mileage: 19400,
    transmission: 'CVT',
    fuel: 'Flex',
    category: 'SUV',
    price: 112300,
    color: 'Cinza',
    description:
      'SUV de demonstracao. As informacoes nao correspondem a um veiculo real.',
    features: [
      'Ar-condicionado',
      'Multimidia',
      'Camera de re 360',
      'Rodas 17',
      'Freio ABS',
    ],
    images: [
      'https://images.pexels.com/photos/14038260/pexels-photo-14038260.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/28837399/pexels-photo-28837399.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/17274770/pexels-photo-17274770.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    status: 'Disponível',
    featured: false,
    demo: true,
  },
  {
    id: 'LA-008',
    brand: 'Fiat',
    model: 'Toro',
    version: 'Volcano 2.0 Diesel 4x4',
    yearFabrication: 2020,
    yearModel: 2021,
    mileage: 63100,
    transmission: 'Automatico',
    fuel: 'Diesel',
    category: 'Picape',
    price: 189900,
    color: 'Cinza',
    description:
      'Picape ficticia para apresentar o layout. Substitua por dados reais.',
    features: [
      'Cabine dupla',
      '4x4',
      'Central multimidia',
      'Camera de re',
      'Controle de estabilidade',
      'Rodas 18',
    ],
    images: [
      'https://images.pexels.com/photos/17274770/pexels-photo-17274770.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/14038260/pexels-photo-14038260.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    status: 'Disponível',
    featured: false,
    demo: true,
  },
];

export default vehicles;
