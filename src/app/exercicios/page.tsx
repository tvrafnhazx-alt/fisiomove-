'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ExerciseCard from '@/components/custom/exercise-card';
import Navbar from '@/components/custom/navbar';
import { EXERCISES, CATEGORIES } from '@/lib/constants';

export default function ExerciciosPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExercises = EXERCISES.filter((exercise) => {
    const matchesCategory = selectedCategory === 'Todos' || exercise.category === selectedCategory;
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 pt-12 pb-8 rounded-b-[2rem] shadow-xl">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Biblioteca de Exercícios</h1>
          <p className="text-purple-100">Escolha os exercícios ideais para você</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 -mt-6">
        {/* Search Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar exercícios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl border-2 border-transparent focus:border-purple-500 focus:bg-white dark:focus:bg-gray-600 transition-all outline-none text-gray-900 dark:text-white text-lg"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Categorias</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm
                  ${selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Mostrando <span className="font-bold text-purple-600 dark:text-purple-400">{filteredExercises.length}</span> exercício(s)
          </p>
        </div>

        {/* Exercise Grid */}
        {filteredExercises.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onStart={() => alert(`Iniciando: ${exercise.name}\n\nInstruções:\n${exercise.instructions.join('\n')}`)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Nenhum exercício encontrado
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tente ajustar os filtros ou buscar por outro termo
            </p>
          </div>
        )}
      </div>

      <Navbar />
    </div>
  );
}
