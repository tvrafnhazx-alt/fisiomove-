'use client';

import { Exercise } from '@/lib/types';
import { Clock, TrendingUp, Play } from 'lucide-react';
import Image from 'next/image';

interface ExerciseCardProps {
  exercise: Exercise;
  onStart?: () => void;
}

export default function ExerciseCard({ exercise, onStart }: ExerciseCardProps) {
  const difficultyColors = {
    fácil: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    moderado: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    avançado: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-48 w-full">
        <Image
          src={exercise.imageUrl}
          alt={exercise.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[exercise.difficulty]}`}>
            {exercise.difficulty}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-lg text-xs font-medium">
            {exercise.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {exercise.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {exercise.description}
        </p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{exercise.duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>{exercise.benefits.length} benefícios</span>
          </div>
        </div>
        
        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
        >
          <Play className="w-5 h-5" />
          Iniciar Exercício
        </button>
      </div>
    </div>
  );
}
