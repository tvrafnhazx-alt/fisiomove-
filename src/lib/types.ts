// Tipos do App de Fisioterapia

export interface Exercise {
  id: string;
  name: string;
  description: string;
  duration: number; // em minutos
  difficulty: 'fácil' | 'moderado' | 'avançado';
  category: string;
  videoUrl?: string;
  imageUrl: string;
  instructions: string[];
  benefits: string[];
}

export interface DayProgress {
  date: string;
  completed: boolean;
  exercises: string[]; // IDs dos exercícios
  totalMinutes: number;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  period: 'semanal' | 'mensal' | 'anual' | 'vitalício';
  features: string[];
  popular?: boolean;
  discount?: number;
}

export interface UserProgress {
  currentStreak: number;
  totalWorkouts: number;
  totalMinutes: number;
  weeklyGoal: number;
  completedThisWeek: number;
}
