'use client';

import { Check, Crown, Sparkles, Zap } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { SUBSCRIPTION_PLANS } from '@/lib/constants';

export default function AssinaturasPage() {
  const handleSubscribe = (planId: string, planName: string) => {
    alert(`Você selecionou o plano: ${planName}\n\nEm breve você será redirecionado para o pagamento!`);
  };

  const getPlanIcon = (period: string) => {
    switch (period) {
      case 'semanal':
        return <Zap className="w-6 h-6" />;
      case 'mensal':
        return <Sparkles className="w-6 h-6" />;
      case 'anual':
        return <Crown className="w-6 h-6" />;
      case 'vitalício':
        return <Crown className="w-6 h-6" />;
      default:
        return <Check className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 pt-12 pb-8 rounded-b-[2rem] shadow-xl">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Escolha Seu Plano</h1>
          <p className="text-purple-100 text-lg">Invista na sua saúde e bem-estar</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 -mt-6">
        {/* Benefits Banner */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Por que assinar? ✨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div className="bg-purple-500 p-2 rounded-lg">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Exercícios Ilimitados</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Acesso completo à biblioteca</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl">
              <div className="bg-cyan-500 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Planos Personalizados</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Adaptados para você</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="bg-green-500 p-2 rounded-lg">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Suporte Premium</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ajuda quando precisar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden
                transition-all duration-300 hover:shadow-2xl hover:scale-105
                ${plan.popular ? 'ring-4 ring-purple-500 ring-offset-4 dark:ring-offset-gray-900' : ''}
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-bl-xl text-sm font-bold">
                  MAIS POPULAR
                </div>
              )}

              {/* Discount Badge */}
              {plan.discount && (
                <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 rounded-br-xl text-xs font-bold">
                  -{plan.discount}%
                </div>
              )}

              <div className="p-6">
                {/* Icon */}
                <div className={`
                  inline-flex p-3 rounded-xl mb-4
                  ${plan.period === 'vitalício' 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white' 
                    : plan.popular
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }
                `}>
                  {getPlanIcon(plan.period)}
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      R$ {plan.price.toFixed(2)}
                    </span>
                    {plan.period !== 'vitalício' && (
                      <span className="text-gray-500 dark:text-gray-400">
                        /{plan.period === 'semanal' ? 'sem' : plan.period === 'mensal' ? 'mês' : 'ano'}
                      </span>
                    )}
                  </div>
                  {plan.period === 'vitalício' && (
                    <p className="text-sm text-green-600 dark:text-green-400 font-semibold mt-1">
                      Pagamento único
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handleSubscribe(plan.id, plan.name)}
                  className={`
                    w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300
                    ${plan.period === 'vitalício'
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white shadow-lg hover:shadow-xl'
                      : plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                    }
                  `}
                >
                  {plan.period === 'vitalício' ? 'Garantir Acesso Vitalício' : 'Assinar Agora'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-4">
            <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Posso cancelar a qualquer momento?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.
              </p>
            </div>

            <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                O que está incluso no plano vitalício?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Acesso completo e permanente a todos os recursos, incluindo futuras atualizações e novos exercícios.
              </p>
            </div>

            <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Há garantia de reembolso?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Sim! Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos seu dinheiro.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Junte-se a milhares de pessoas! 🎉</h3>
          <p className="text-purple-100 mb-4">
            Mais de 10.000 pessoas já melhoraram sua qualidade de vida com nossos exercícios
          </p>
          <div className="flex items-center justify-center gap-8 mt-6">
            <div>
              <p className="text-3xl font-bold">4.9⭐</p>
              <p className="text-sm text-purple-100">Avaliação média</p>
            </div>
            <div>
              <p className="text-3xl font-bold">10k+</p>
              <p className="text-sm text-purple-100">Usuários ativos</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50k+</p>
              <p className="text-sm text-purple-100">Exercícios realizados</p>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
