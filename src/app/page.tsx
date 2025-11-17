'use client';

import { useState } from 'react';
import { Activity, TrendingUp, Clock, Award, Flame, Target } from 'lucide-react';
import ProgressRing from '@/components/custom/progress-ring';
import ExerciseCard from '@/components/custom/exercise-card';
import Navbar from '@/components/custom/navbar';
import { EXERCISES } from '@/lib/constants';
import { UserProgress } from '@/lib/types';

export default function Home() {
  const [userProgress] = useState<UserProgress>({
    currentStreak: 7,
    totalWorkouts: 45,
    totalMinutes: 380,
    weeklyGoal: 150,
    completedThisWeek: 95
  });

  const weekProgress = (userProgress.completedThisWeek / userProgress.weeklyGoal) * 100;
  const todayExercises = EXERCISES.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 pt-12 pb-8 rounded-b-[2rem] shadow-xl">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1">Olá! 👋</h1>
              <p className="text-purple-100 text-lg">Pronto para se exercitar hoje?</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
              <Flame className="w-8 h-8" />
            </div>
          </div>

          {/* Streak */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
            <div className="bg-orange-500 p-3 rounded-xl">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold">{userProgress.currentStreak} dias</p>
              <p className="text-purple-100 text-sm">Sequência atual</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 -mt-6">
        {/* Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Weekly Progress */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <ProgressRing
              progress={weekProgress}
              size={140}
              strokeWidth={10}
              color="#A23E9E"
              value={`${userProgress.completedThisWeek}`}
              label="minutos"
            />
            <div className="mt-4 text-center">
              <p className="text-gray-900 dark:text-white font-bold text-lg">Meta Semanal</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {userProgress.completedThisWeek} de {userProgress.weeklyGoal} min
              </p>
            </div>
          </div>

          {/* Total Workouts */}
          <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-10 h-10" />
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                Total
              </div>
            </div>
            <p className="text-4xl font-bold mb-1">{userProgress.totalWorkouts}</p>
            <p className="text-cyan-100">Treinos Completos</p>
          </div>

          {/* Total Minutes */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-10 h-10" />
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                Tempo
              </div>
            </div>
            <p className="text-4xl font-bold mb-1">{userProgress.totalMinutes}</p>
            <p className="text-purple-100">Minutos Ativos</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-center gap-3">
            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
              <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Metas</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-center gap-3">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">+15%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Progresso</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-center gap-3">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
              <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Conquistas</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-center gap-3">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg">
              <Flame className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{userProgress.currentStreak}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Dias</p>
            </div>
          </div>
        </div>

        {/* Today's Exercises */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Exercícios de Hoje
            </h2>
            <span className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
              {todayExercises.length} exercícios
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {todayExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onStart={() => alert(`Iniciando: ${exercise.name}`)}
              />
            ))}
          </div>
        </div>

        {/* Motivational Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl shadow-xl p-8 text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Continue assim! 🎉</h3>
          <p className="text-purple-100 mb-4">
            Você está a apenas {userProgress.weeklyGoal - userProgress.completedThisWeek} minutos de atingir sua meta semanal
          </p>
          <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-xl hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg">
            Ver Todos os Exercícios
          </button>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
