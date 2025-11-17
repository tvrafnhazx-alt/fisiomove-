'use client';

import { Home, Dumbbell, Calendar, CreditCard, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Home, label: 'Início' },
    { href: '/exercicios', icon: Dumbbell, label: 'Exercícios' },
    { href: '/calendario', icon: Calendar, label: 'Calendário' },
    { href: '/assinaturas', icon: CreditCard, label: 'Planos' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-around py-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300
                  ${isActive 
                    ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400'
                  }
                `}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform`} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
