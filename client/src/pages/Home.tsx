import React, { useState } from 'react';
import { Play, Zap, Tv, Users, ChevronRight, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFlow from '@/components/WhatsAppFlow';
import { Language, APPS, PLANS, detectLanguage, getPathForLanguage } from '@/lib/i18n';

export default function Home() {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language') as Language | null;
    return stored || detectLanguage();
  });
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    const newPath = getPathForLanguage(window.location.pathname, lang);
    if (newPath !== window.location.pathname) {
      window.location.href = newPath;
    }
  };

  const content = {
    pt: {
      hero_title: 'Assista TV Ao Vivo, Filmes e Séries',
      hero_subtitle: 'Streaming de qualidade premium com os melhores apps de entretenimento',
      hero_cta: 'Começar Agora',
      features_title: 'Por que escolher nossos apps?',
      features: [
        {
          icon: Tv,
          title: 'TV Ao Vivo',
          description: 'Centenas de canais de TV ao vivo em tempo real'
        },
        {
          icon: Play,
          title: 'Filmes & Séries',
          description: 'Catálogo completo com lançamentos semanais'
        },
        {
          icon: Zap,
          title: 'Ultra Rápido',
          description: 'Streaming sem buffering com qualidade 4K'
        },
        {
          icon: Users,
          title: 'Multi-Dispositivos',
          description: 'Assista em Smart TV, TV Box, Firestick e mais'
        }
      ],
      apps_title: 'Nossos Apps',
      plans_title: 'Planos Acessíveis',
      trial_cta: 'Teste Grátis por 7 Dias',
      subscribe_cta: 'Assinar Agora',
      renew_cta: 'Renovar Assinatura',
      install_cta: 'Como Instalar',
      blog_title: 'Últimas Notícias',
      blog_posts: [
        { title: 'Como assistir TV online em 2026', date: 'Há 2 dias' },
        { title: 'Melhor streaming para futebol', date: 'Há 5 dias' },
        { title: 'Guia completo de instalação', date: 'Há 1 semana' }
      ]
    },
    en: {
      hero_title: 'Watch Live TV, Movies and Series',
      hero_subtitle: 'Premium quality streaming with the best entertainment apps',
      hero_cta: 'Get Started',
      features_title: 'Why choose our apps?',
      features: [
        {
          icon: Tv,
          title: 'Live TV',
          description: 'Hundreds of live TV channels in real-time'
        },
        {
          icon: Play,
          title: 'Movies & Series',
          description: 'Complete catalog with weekly releases'
        },
        {
          icon: Zap,
          title: 'Ultra Fast',
          description: 'Buffering-free streaming with 4K quality'
        },
        {
          icon: Users,
          title: 'Multi-Device',
          description: 'Watch on Smart TV, TV Box, Firestick and more'
        }
      ],
      apps_title: 'Our Apps',
      plans_title: 'Affordable Plans',
      trial_cta: 'Free Trial for 7 Days',
      subscribe_cta: 'Subscribe Now',
      renew_cta: 'Renew Subscription',
      install_cta: 'How to Install',
      blog_title: 'Latest News',
      blog_posts: [
        { title: 'How to watch TV online in 2026', date: '2 days ago' },
        { title: 'Best streaming for football', date: '5 days ago' },
        { title: 'Complete installation guide', date: '1 week ago' }
      ]
    },
    es: {
      hero_title: 'Ver TV en Vivo, Películas y Series',
      hero_subtitle: 'Streaming de calidad premium con las mejores aplicaciones de entretenimiento',
      hero_cta: 'Comenzar',
      features_title: '¿Por qué elegir nuestras aplicaciones?',
      features: [
        {
          icon: Tv,
          title: 'TV en Vivo',
          description: 'Cientos de canales de TV en vivo en tiempo real'
        },
        {
          icon: Play,
          title: 'Películas y Series',
          description: 'Catálogo completo con estrenos semanales'
        },
        {
          icon: Zap,
          title: 'Ultra Rápido',
          description: 'Streaming sin buffering con calidad 4K'
        },
        {
          icon: Users,
          title: 'Multi-Dispositivo',
          description: 'Ver en Smart TV, TV Box, Firestick y más'
        }
      ],
      apps_title: 'Nuestras Aplicaciones',
      plans_title: 'Planes Asequibles',
      trial_cta: 'Prueba Gratis por 7 Días',
      subscribe_cta: 'Suscribirse Ahora',
      renew_cta: 'Renovar Suscripción',
      install_cta: 'Cómo Instalar',
      blog_title: 'Últimas Noticias',
      blog_posts: [
        { title: 'Cómo ver TV en línea en 2026', date: 'Hace 2 días' },
        { title: 'Mejor streaming para fútbol', date: 'Hace 5 días' },
        { title: 'Guía completa de instalación', date: 'Hace 1 semana' }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        onWhatsAppClick={() => setIsWhatsAppOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-30" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text leading-tight">
                {t.hero_title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                {t.hero_subtitle}
              </p>
              <button
                onClick={() => setIsWhatsAppOpen(true)}
                className="btn-primary inline-flex items-center gap-2 mx-auto"
              >
                <Play className="w-5 h-5" />
                {t.hero_cta}
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              {t.features_title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="card-glass space-y-4">
                    <Icon className="w-8 h-8 text-orange-400" />
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              {t.apps_title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {APPS.map((app) => (
                <div key={app.id} className="card-glass space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">{app.name}</h3>
                  <p className="text-sm text-gray-400">{app.description}</p>
                  <button
                    onClick={() => setIsWhatsAppOpen(true)}
                    className="btn-secondary w-full text-sm"
                  >
                    {t.subscribe_cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              {t.plans_title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`card-glass space-y-6 flex flex-col ${
                    plan.id === 'annual' ? 'ring-2 ring-orange-500' : ''
                  }`}
                >
                  {plan.id === 'annual' && (
                    <div className="text-xs font-bold text-orange-400 uppercase">
                      {language === 'pt' ? 'Melhor Valor' : language === 'en' ? 'Best Value' : 'Mejor Valor'}
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-lg">{plan.name}</h3>
                    <p className="text-sm text-gray-400">{plan.duration}</p>
                  </div>
                  <div className="text-3xl font-bold gradient-text">
                    R${plan.price}
                  </div>
                  <button
                    onClick={() => setIsWhatsAppOpen(true)}
                    className="btn-primary w-full mt-auto"
                  >
                    {t.subscribe_cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="glass rounded-2xl p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                {language === 'pt' ? 'Pronto para começar?' : language === 'en' ? 'Ready to start?' : '¿Listo para comenzar?'}
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {language === 'pt'
                  ? 'Escolha seu app favorito e comece a assistir agora mesmo!'
                  : language === 'en'
                  ? 'Choose your favorite app and start watching now!'
                  : '¡Elige tu aplicación favorita y comienza a ver ahora!'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsWhatsAppOpen(true)}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  {t.trial_cta}
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsWhatsAppOpen(true)}
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  {t.subscribe_cta}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />

      {/* WhatsApp Flow Modal */}
      <WhatsAppFlow
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        language={language}
      />
    </div>
  );
}
