'use client';

import { useState } from 'react';
import { Calendar as CalendarIcon, TrendingUp, Award, Target } from 'lucide-react';
import Calendario from '@/components/custom/calendario';
import Navbar from '@/components/custom/navbar';

export default function CalendarioPage() {
  // Simulando datas completas (formato: YYYY-MM-DD)
  const [completedDates] = useState([
    '2024-01-15',
    '2024-01-16',
    '2024-01-17',
    '2024-01-18',
    '2024-01-19',
    '2024-01-20',
    '2024-01-21',
    '2024-01-23',
    '2024-01-24',
    '2024-01-25',
    '2024-01-26',
    '2024-01-28',
    '2024-01-29',
    '2024-01-30'
  ]);

  const handleDateClick = (date: string) => {
    console.log('Data clicada:', date);
    // Aqui você pode adicionar lógica para mostrar exercícios do dia
  };

  const stats = {
    thisMonth: 14,
    lastMonth: 18,
    bestStreak: 7,
    currentStreak: 3
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 pt-12 pb-8 rounded-b-[2rem] shadow-xl">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <CalendarIcon className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Meu Calendário</h1>
          </div>
          <p className="text-purple-100">Acompanhe seu progresso diário</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 -mt-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Este Mês</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.thisMonth}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">dias ativos</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Mês Passado</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.lastMonth}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">dias ativos</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Melhor Sequência</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.bestStreak}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">dias seguidos</p>
          </div>

          <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-xl shadow-lg p-5 text-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">Sequência Atual</span>
            </div>
            <p className="text-3xl font-bold">{stats.currentStreak}</p>
            <p className="text-xs opacity-90 mt-1">dias seguidos</p>
          </div>
        </div>

        {/* Calendar */}
        <div className="mb-8">
          <Calendario
            completedDates={completedDates}
            onDateClick={handleDateClick}
          />
        </div>

        {/* Progress Insights */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Insights do Mês
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 p-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Excelente consistência!</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Você treinou {stats.thisMonth} dias este mês</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Novo recorde!</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sua melhor sequência foi de {stats.bestStreak} dias</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Continue assim!</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Você está {stats.thisMonth > stats.lastMonth ? 'melhorando' : 'mantendo'} seu ritmo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Motivational Card */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Continue sua jornada! 🎯</h3>
          <p className="text-purple-100 mb-4">
            Cada dia de exercício é um passo em direção a uma vida mais saudável
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
              <p className="text-3xl font-bold">{completedDates.length}</p>
              <p className="text-sm text-purple-100">Total de treinos</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
              <p className="text-3xl font-bold">{stats.bestStreak}</p>
              <p className="text-sm text-purple-100">Melhor sequência</p>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
