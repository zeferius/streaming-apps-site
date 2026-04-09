import React, { useState } from 'react';
import { Play, Check, Star, Users } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface NewBrazShowcaseProps {
  language: Language;
  onWhatsAppClick: () => void;
}

const NEWBRAZ_LOGO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414843623/K5FtQ9v4CTjXbgrnMqSARH/WhatsAppImage2026-02-16at13.22.31_9cdfdab4.jpeg';

export default function NewBrazShowcase({ language, onWhatsAppClick }: NewBrazShowcaseProps) {
  const content = {
    pt: {
      title: 'New Braz - O Melhor Streaming do Brasil',
      subtitle: 'Experiência Premium de Entretenimento',
      description: 'New Braz é o aplicativo completo para streaming de TV ao vivo, filmes, séries e muito mais. Com qualidade 4K e interface intuitiva, oferecemos a melhor experiência de entretenimento.',
      features: [
        'TV ao vivo com centenas de canais',
        'Catálogo completo de filmes e séries',
        'Qualidade até 4K',
        'Sem anúncios comerciais',
        'Compatível com todos os dispositivos',
        'Suporte 24/7'
      ],
      cta: 'Comece Agora',
      stats: [
        { label: 'Canais', value: '500+' },
        { label: 'Filmes', value: '5000+' },
        { label: 'Usuários', value: '100K+' }
      ]
    },
    en: {
      title: 'New Braz - Brazil\'s Best Streaming',
      subtitle: 'Premium Entertainment Experience',
      description: 'New Braz is the complete streaming application for live TV, movies, series and much more. With 4K quality and intuitive interface, we offer the best entertainment experience.',
      features: [
        'Live TV with hundreds of channels',
        'Complete catalog of movies and series',
        'Quality up to 4K',
        'No commercial ads',
        'Compatible with all devices',
        '24/7 Support'
      ],
      cta: 'Get Started',
      stats: [
        { label: 'Channels', value: '500+' },
        { label: 'Movies', value: '5000+' },
        { label: 'Users', value: '100K+' }
      ]
    },
    es: {
      title: 'New Braz - El Mejor Streaming de Brasil',
      subtitle: 'Experiencia de Entretenimiento Premium',
      description: 'New Braz es la aplicación de streaming completa para TV en vivo, películas, series y mucho más. Con calidad 4K e interfaz intuitiva, ofrecemos la mejor experiencia de entretenimiento.',
      features: [
        'TV en vivo con cientos de canales',
        'Catálogo completo de películas y series',
        'Calidad hasta 4K',
        'Sin anuncios comerciales',
        'Compatible con todos los dispositivos',
        'Soporte 24/7'
      ],
      cta: 'Comenzar',
      stats: [
        { label: 'Canales', value: '500+' },
        { label: 'Películas', value: '5000+' },
        { label: 'Usuarios', value: '100K+' }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="space-y-16">
      {/* Hero Section with Logo */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Logo Side */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl rounded-full" />
                <img
                  src={NEWBRAZ_LOGO}
                  alt="New Braz Logo"
                  className="relative w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold gradient-text leading-tight mb-4">
                  {t.title}
                </h1>
                <p className="text-xl text-orange-400 font-semibold mb-4">
                  {t.subtitle}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t.description}
                </p>
              </div>

              <button
                onClick={onWhatsAppClick}
                className="btn-primary inline-flex items-center gap-2 text-lg"
              >
                <Play className="w-6 h-6" />
                {t.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card/50 rounded-2xl">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            {language === 'pt' ? 'Por Que Escolher New Braz?' : language === 'en' ? 'Why Choose New Braz?' : '¿Por Qué Elegir New Braz?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.map((feature, idx) => (
              <div key={idx} className="card-glass space-y-4 flex items-start gap-4">
                <Check className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="glass rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            {language === 'pt' ? 'Pronto para a Melhor Experiência de Streaming?' : language === 'en' ? 'Ready for the Best Streaming Experience?' : '¿Listo para la Mejor Experiencia de Streaming?'}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {language === 'pt'
              ? 'Junte-se a milhares de usuários que já aprovam New Braz. Teste grátis por 7 dias!'
              : language === 'en'
              ? 'Join thousands of users who already approve New Braz. Free trial for 7 days!'
              : '¡Únete a miles de usuarios que ya aprueban New Braz. ¡Prueba gratis por 7 días!'}
          </p>
          <button
            onClick={onWhatsAppClick}
            className="btn-secondary inline-flex items-center gap-2 text-lg mx-auto"
          >
            <Star className="w-6 h-6" />
            {t.cta}
          </button>
        </div>
      </section>
    </div>
  );
}
