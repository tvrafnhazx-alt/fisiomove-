import { Exercise, SubscriptionPlan } from './types';

export const EXERCISES: Exercise[] = [
  {
    id: '1',
    name: 'Alongamento de Braços',
    description: 'Exercício suave para melhorar a flexibilidade dos braços',
    duration: 5,
    difficulty: 'fácil',
    category: 'Alongamento',
    imageUrl: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop',
    instructions: [
      'Sente-se confortavelmente em uma cadeira',
      'Estenda um braço para frente',
      'Com a outra mão, puxe suavemente os dedos para trás',
      'Mantenha por 15 segundos',
      'Repita com o outro braço'
    ],
    benefits: ['Melhora flexibilidade', 'Reduz tensão muscular', 'Previne lesões']
  },
  {
    id: '2',
    name: 'Caminhada Estacionária',
    description: 'Exercício cardiovascular de baixo impacto',
    duration: 10,
    difficulty: 'fácil',
    category: 'Cardio',
    imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=300&fit=crop',
    instructions: [
      'Fique em pé com postura ereta',
      'Levante um joelho de cada vez',
      'Balance os braços naturalmente',
      'Mantenha ritmo constante',
      'Continue por 10 minutos'
    ],
    benefits: ['Fortalece coração', 'Melhora circulação', 'Aumenta resistência']
  },
  {
    id: '3',
    name: 'Rotação de Ombros',
    description: 'Mobilidade para região dos ombros',
    duration: 5,
    difficulty: 'fácil',
    category: 'Mobilidade',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    instructions: [
      'Sente-se ou fique em pé',
      'Relaxe os braços ao lado do corpo',
      'Faça círculos com os ombros para frente',
      'Repita 10 vezes',
      'Faça círculos para trás 10 vezes'
    ],
    benefits: ['Alivia tensão', 'Melhora postura', 'Aumenta mobilidade']
  },
  {
    id: '4',
    name: 'Flexão de Joelhos',
    description: 'Fortalecimento das pernas com apoio',
    duration: 8,
    difficulty: 'moderado',
    category: 'Fortalecimento',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop',
    instructions: [
      'Segure em uma cadeira para apoio',
      'Dobre um joelho levando o pé para trás',
      'Mantenha por 3 segundos',
      'Retorne à posição inicial',
      'Repita 10 vezes cada perna'
    ],
    benefits: ['Fortalece pernas', 'Melhora equilíbrio', 'Aumenta mobilidade']
  },
  {
    id: '5',
    name: 'Respiração Profunda',
    description: 'Exercício de relaxamento e oxigenação',
    duration: 5,
    difficulty: 'fácil',
    category: 'Respiração',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
    instructions: [
      'Sente-se confortavelmente',
      'Inspire profundamente pelo nariz (4 segundos)',
      'Segure o ar (4 segundos)',
      'Expire lentamente pela boca (6 segundos)',
      'Repita 10 vezes'
    ],
    benefits: ['Reduz estresse', 'Melhora oxigenação', 'Promove relaxamento']
  },
  {
    id: '6',
    name: 'Elevação de Pernas',
    description: 'Fortalecimento de abdômen e pernas',
    duration: 7,
    difficulty: 'moderado',
    category: 'Fortalecimento',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop',
    instructions: [
      'Deite-se de costas em um tapete',
      'Mantenha as mãos ao lado do corpo',
      'Levante uma perna reta até 45 graus',
      'Mantenha por 3 segundos',
      'Repita 8 vezes cada perna'
    ],
    benefits: ['Fortalece abdômen', 'Melhora core', 'Aumenta estabilidade']
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'weekly',
    name: 'Semanal',
    price: 19.90,
    period: 'semanal',
    features: [
      'Acesso a todos os exercícios',
      'Calendário personalizado',
      'Acompanhamento de progresso',
      'Suporte por email'
    ]
  },
  {
    id: 'monthly',
    name: 'Mensal',
    price: 49.90,
    period: 'mensal',
    popular: true,
    discount: 37,
    features: [
      'Acesso a todos os exercícios',
      'Calendário personalizado',
      'Acompanhamento de progresso',
      'Suporte prioritário',
      'Planos personalizados',
      'Vídeos em alta qualidade'
    ]
  },
  {
    id: 'annual',
    name: 'Anual',
    price: 399.90,
    period: 'anual',
    discount: 33,
    features: [
      'Acesso a todos os exercícios',
      'Calendário personalizado',
      'Acompanhamento de progresso',
      'Suporte VIP 24/7',
      'Planos personalizados',
      'Vídeos em alta qualidade',
      'Consultas online mensais',
      'Relatórios detalhados'
    ]
  },
  {
    id: 'lifetime',
    name: 'Vitalício',
    price: 999.90,
    period: 'vitalício',
    features: [
      'Acesso VITALÍCIO ilimitado',
      'Todos os recursos premium',
      'Atualizações gratuitas para sempre',
      'Suporte VIP prioritário',
      'Consultas online ilimitadas',
      'Acesso antecipado a novos recursos',
      'Certificado de conclusão',
      'Comunidade exclusiva'
    ]
  }
];

export const CATEGORIES = [
  'Todos',
  'Alongamento',
  'Cardio',
  'Mobilidade',
  'Fortalecimento',
  'Respiração'
];
