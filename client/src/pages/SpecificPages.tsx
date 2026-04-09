import React, { useState } from 'react';
import { ChevronRight, Play, Tv, Zap, Users, Shield, Smartphone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFlow from '@/components/WhatsAppFlow';
import { Language, PLANS, detectLanguage, getPathForLanguage } from '@/lib/i18n';

interface SpecificPageProps {
  pageType: 'install-newbraz' | 'football' | 'movies' | 'series' | 'trial' | 'plans' | 'subscribe' | 'activation' | 'renew' | 'payment' | 'invoice' | 'channels' | 'install-smart-tv' | 'install-tv-box' | 'install-firestick' | 'tv-brasil' | 'newbraz' | 'assistir' | 'canal-brasil';
}

export default function SpecificPages({ pageType }: SpecificPageProps) {
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

  const pageContent = {
    'install-newbraz': {
      pt: {
        title: 'Como Instalar New Braz',
        subtitle: 'Guia completo para instalar o app New Braz em qualquer dispositivo',
        description: 'O New Braz é um aplicativo de streaming completo que oferece TV ao vivo, filmes, séries e muito mais. Siga nosso guia passo a passo para instalar em seu dispositivo.',
        features: ['Instalação em 5 minutos', 'Compatível com todos os dispositivos', 'Suporte 24/7', 'Teste grátis de 7 dias']
      },
      en: {
        title: 'How to Install New Braz',
        subtitle: 'Complete guide to install New Braz app on any device',
        description: 'New Braz is a complete streaming application that offers live TV, movies, series and much more. Follow our step-by-step guide to install on your device.',
        features: ['Installation in 5 minutes', 'Compatible with all devices', '24/7 Support', '7-day free trial']
      },
      es: {
        title: 'Cómo Instalar New Braz',
        subtitle: 'Guía completa para instalar la aplicación New Braz en cualquier dispositivo',
        description: 'New Braz es una aplicación de streaming completa que ofrece TV en vivo, películas, series y mucho más. Siga nuestra guía paso a paso para instalar en su dispositivo.',
        features: ['Instalación en 5 minutos', 'Compatible con todos los dispositivos', 'Soporte 24/7', 'Prueba gratuita de 7 días']
      }
    },
    'football': {
      pt: {
        title: 'Futebol Ao Vivo',
        subtitle: 'Assista todos os jogos de futebol em tempo real',
        description: 'Não perca nenhum jogo! Acompanhe futebol ao vivo com qualidade HD e sem cortes. Campeonato Brasileiro, Libertadores, Copa do Brasil e muito mais.',
        features: ['Todos os jogos em HD', 'Sem intervalos comerciais', 'Comentários ao vivo', 'Múltiplas câmeras']
      },
      en: {
        title: 'Live Football',
        subtitle: 'Watch all football matches in real time',
        description: 'Don\'t miss any game! Follow live football with HD quality and no interruptions. Brazilian Championship, Libertadores, Copa do Brasil and much more.',
        features: ['All games in HD', 'No commercial breaks', 'Live commentary', 'Multiple cameras']
      },
      es: {
        title: 'Fútbol en Vivo',
        subtitle: 'Mira todos los partidos de fútbol en tiempo real',
        description: 'No te pierdas ningún partido! Sigue el fútbol en vivo con calidad HD y sin interrupciones. Campeonato Brasileño, Libertadores, Copa de Brasil y mucho más.',
        features: ['Todos los partidos en HD', 'Sin comerciales', 'Comentarios en vivo', 'Múltiples cámaras']
      }
    },
    'movies': {
      pt: {
        title: 'Filmes Online',
        subtitle: 'Catálogo completo de filmes em streaming',
        description: 'Acesse nossa biblioteca com milhares de filmes. Desde clássicos do cinema até os lançamentos mais recentes. Filmes de ação, drama, comédia, terror e muito mais.',
        features: ['Milhares de filmes', 'Lançamentos semanais', 'Qualidade até 4K', 'Sem anúncios']
      },
      en: {
        title: 'Movies Online',
        subtitle: 'Complete catalog of streaming movies',
        description: 'Access our library with thousands of movies. From cinema classics to the latest releases. Action, drama, comedy, horror and much more.',
        features: ['Thousands of movies', 'Weekly releases', 'Quality up to 4K', 'Ad-free']
      },
      es: {
        title: 'Películas en Línea',
        subtitle: 'Catálogo completo de películas en streaming',
        description: 'Accede a nuestra biblioteca con miles de películas. Desde clásicos del cine hasta los estrenos más recientes. Películas de acción, drama, comedia, terror y mucho más.',
        features: ['Miles de películas', 'Estrenos semanales', 'Calidad hasta 4K', 'Sin anuncios']
      }
    },
    'series': {
      pt: {
        title: 'Séries Online',
        subtitle: 'As melhores séries em um só lugar',
        description: 'Maratone suas séries favoritas com qualidade premium. Dramas, comédias, thrillers, ficção científica e muito mais. Novos episódios toda semana.',
        features: ['Séries exclusivas', 'Novos episódios semanais', 'Qualidade 4K', 'Sem limite de visualizações']
      },
      en: {
        title: 'Online Series',
        subtitle: 'The best series in one place',
        description: 'Binge your favorite series with premium quality. Dramas, comedies, thrillers, science fiction and much more. New episodes every week.',
        features: ['Exclusive series', 'New episodes weekly', '4K quality', 'Unlimited views']
      },
      es: {
        title: 'Series en Línea',
        subtitle: 'Las mejores series en un solo lugar',
        description: 'Maratona tus series favoritas con calidad premium. Dramas, comedias, thrillers, ciencia ficción y mucho más. Nuevos episodios cada semana.',
        features: ['Series exclusivas', 'Nuevos episodios semanales', 'Calidad 4K', 'Visualizaciones ilimitadas']
      }
    },
    'trial': {
      pt: {
        title: 'Teste Grátis',
        subtitle: 'Comece seu teste gratuito de 7 dias agora',
        description: 'Acesso completo a todos os nossos apps por 7 dias sem pagar nada. Sem cartão de crédito, sem compromisso. Cancele a qualquer momento.',
        features: ['7 dias grátis', 'Sem cartão de crédito', 'Acesso total', 'Cancele quando quiser']
      },
      en: {
        title: 'Free Trial',
        subtitle: 'Start your 7-day free trial now',
        description: 'Full access to all our apps for 7 days at no cost. No credit card, no commitment. Cancel anytime.',
        features: ['7 days free', 'No credit card', 'Full access', 'Cancel anytime']
      },
      es: {
        title: 'Prueba Gratis',
        subtitle: 'Comienza tu prueba gratuita de 7 días ahora',
        description: 'Acceso completo a todas nuestras aplicaciones durante 7 días sin costo. Sin tarjeta de crédito, sin compromiso. Cancela en cualquier momento.',
        features: ['7 días gratis', 'Sin tarjeta de crédito', 'Acceso completo', 'Cancela en cualquier momento']
      }
    },
    'plans': {
      pt: {
        title: 'Nossos Planos',
        subtitle: 'Escolha o plano perfeito para você',
        description: 'Oferecemos planos flexíveis para todos os orçamentos. Desde o plano mensal até o anual com desconto especial. Todos com acesso completo a todo conteúdo.',
        features: ['Plano Mensal R$30', 'Plano Trimestral R$90', 'Plano Semestral R$162', 'Plano Anual R$300']
      },
      en: {
        title: 'Our Plans',
        subtitle: 'Choose the perfect plan for you',
        description: 'We offer flexible plans for all budgets. From monthly plan to annual with special discount. All with full access to all content.',
        features: ['Monthly Plan $10', 'Quarterly Plan $30', 'Biannual Plan $54', 'Annual Plan $100']
      },
      es: {
        title: 'Nuestros Planes',
        subtitle: 'Elige el plan perfecto para ti',
        description: 'Ofrecemos planes flexibles para todos los presupuestos. Desde plan mensual hasta anual con descuento especial. Todos con acceso completo a todo contenido.',
        features: ['Plan Mensual €9', 'Plan Trimestral €27', 'Plan Semestral €49', 'Plan Anual €90']
      }
    },
    'subscribe': {
      pt: {
        title: 'Assinar Agora',
        subtitle: 'Comece seu streaming premium hoje',
        description: 'Escolha seu app favorito e comece a assistir. Processo rápido e seguro. Acesso imediato após a confirmação do pagamento.',
        features: ['Processo rápido', 'Pagamento seguro', 'Acesso imediato', 'Suporte 24/7']
      },
      en: {
        title: 'Subscribe Now',
        subtitle: 'Start your premium streaming today',
        description: 'Choose your favorite app and start watching. Quick and secure process. Immediate access after payment confirmation.',
        features: ['Quick process', 'Secure payment', 'Immediate access', '24/7 Support']
      },
      es: {
        title: 'Suscribirse Ahora',
        subtitle: 'Comienza tu streaming premium hoy',
        description: 'Elige tu aplicación favorita y comienza a ver. Proceso rápido y seguro. Acceso inmediato después de la confirmación del pago.',
        features: ['Proceso rápido', 'Pago seguro', 'Acceso inmediato', 'Soporte 24/7']
      }
    },
    'activation': {
      pt: {
        title: 'Ativar Sua Assinatura',
        subtitle: 'Ative seu acesso em minutos',
        description: 'Após comprar sua assinatura, ative seu acesso seguindo nosso guia simples. Você receberá um código de ativação por email.',
        features: ['Ativação em minutos', 'Código por email', 'Suporte técnico', 'Problemas resolvidos em 24h']
      },
      en: {
        title: 'Activate Your Subscription',
        subtitle: 'Activate your access in minutes',
        description: 'After purchasing your subscription, activate your access by following our simple guide. You will receive an activation code by email.',
        features: ['Activation in minutes', 'Code by email', 'Technical support', 'Issues resolved in 24h']
      },
      es: {
        title: 'Activar Tu Suscripción',
        subtitle: 'Activa tu acceso en minutos',
        description: 'Después de comprar tu suscripción, activa tu acceso siguiendo nuestra guía simple. Recibirás un código de activación por correo electrónico.',
        features: ['Activación en minutos', 'Código por correo', 'Soporte técnico', 'Problemas resueltos en 24h']
      }
    },
    'renew': {
      pt: {
        title: 'Renovar Assinatura',
        subtitle: 'Renove seu acesso sem interrupções',
        description: 'Sua assinatura está próxima do vencimento? Renove agora e continue assistindo sem interrupções. Processo rápido e seguro.',
        features: ['Renovação rápida', 'Sem interrupções', 'Mesmos benefícios', 'Desconto para renovação']
      },
      en: {
        title: 'Renew Subscription',
        subtitle: 'Renew your access without interruptions',
        description: 'Your subscription is about to expire? Renew now and keep watching without interruptions. Quick and secure process.',
        features: ['Quick renewal', 'No interruptions', 'Same benefits', 'Renewal discount']
      },
      es: {
        title: 'Renovar Suscripción',
        subtitle: 'Renueva tu acceso sin interrupciones',
        description: '¿Tu suscripción está a punto de vencer? Renueva ahora y sigue viendo sin interrupciones. Proceso rápido y seguro.',
        features: ['Renovación rápida', 'Sin interrupciones', 'Mismos beneficios', 'Descuento de renovación']
      }
    },
    'payment': {
      pt: {
        title: 'Pagar Plano',
        subtitle: 'Escolha sua forma de pagamento',
        description: 'Aceitamos múltiplas formas de pagamento para sua conveniência. Cartão de crédito, débito, PIX e mais.',
        features: ['Cartão de crédito', 'Débito', 'PIX', 'Boleto bancário']
      },
      en: {
        title: 'Pay Plan',
        subtitle: 'Choose your payment method',
        description: 'We accept multiple payment methods for your convenience. Credit card, debit, and more.',
        features: ['Credit card', 'Debit card', 'Bank transfer', 'Digital wallets']
      },
      es: {
        title: 'Pagar Plan',
        subtitle: 'Elige tu método de pago',
        description: 'Aceptamos múltiples métodos de pago para tu conveniencia. Tarjeta de crédito, débito y más.',
        features: ['Tarjeta de crédito', 'Tarjeta de débito', 'Transferencia bancaria', 'Billeteras digitales']
      }
    },
    'invoice': {
      pt: {
        title: 'Segunda Via',
        subtitle: 'Solicite sua segunda via de fatura',
        description: 'Precisa de uma segunda via da sua fatura? Solicite aqui e receba por email em minutos.',
        features: ['Emissão rápida', 'Por email', 'Sem taxa', 'Histórico completo']
      },
      en: {
        title: 'Invoice Copy',
        subtitle: 'Request your invoice copy',
        description: 'Need an invoice copy? Request here and receive by email in minutes.',
        features: ['Quick issuance', 'By email', 'No fee', 'Complete history']
      },
      es: {
        title: 'Copia de Factura',
        subtitle: 'Solicita tu copia de factura',
        description: '¿Necesitas una copia de factura? Solicítala aquí y recibe por correo en minutos.',
        features: ['Emisión rápida', 'Por correo', 'Sin tarifa', 'Historial completo']
      }
    },
    'channels': {
      pt: {
        title: 'Canais Ao Vivo',
        subtitle: 'Centenas de canais disponíveis',
        description: 'Assista centenas de canais de TV ao vivo em qualidade HD. Esportes, notícias, entretenimento e muito mais.',
        features: ['Centenas de canais', 'Qualidade HD', 'Sem cortes', 'Guia de programação']
      },
      en: {
        title: 'Live Channels',
        subtitle: 'Hundreds of channels available',
        description: 'Watch hundreds of live TV channels in HD quality. Sports, news, entertainment and much more.',
        features: ['Hundreds of channels', 'HD quality', 'No interruptions', 'Program guide']
      },
      es: {
        title: 'Canales en Vivo',
        subtitle: 'Cientos de canales disponibles',
        description: 'Mira cientos de canales de TV en vivo en calidad HD. Deportes, noticias, entretenimiento y mucho más.',
        features: ['Cientos de canales', 'Calidad HD', 'Sin interrupciones', 'Guía de programación']
      }
    },
    'install-smart-tv': {
      pt: {
        title: 'Instalar em Smart TV',
        subtitle: 'Guia passo a passo para Smart TV',
        description: 'Instale nossos apps em sua Smart TV em poucos minutos. Compatível com Samsung, LG, Sony e outras marcas.',
        features: ['Compatível com todas marcas', 'Instalação em 5 minutos', 'Controle remoto', 'Qualidade 4K']
      },
      en: {
        title: 'Install on Smart TV',
        subtitle: 'Step-by-step guide for Smart TV',
        description: 'Install our apps on your Smart TV in just a few minutes. Compatible with Samsung, LG, Sony and other brands.',
        features: ['Compatible with all brands', 'Installation in 5 minutes', 'Remote control', '4K quality']
      },
      es: {
        title: 'Instalar en Smart TV',
        subtitle: 'Guía paso a paso para Smart TV',
        description: 'Instala nuestras aplicaciones en tu Smart TV en pocos minutos. Compatible con Samsung, LG, Sony y otras marcas.',
        features: ['Compatible con todas marcas', 'Instalación en 5 minutos', 'Control remoto', 'Calidad 4K']
      }
    },
    'install-tv-box': {
      pt: {
        title: 'Instalar em TV Box',
        subtitle: 'Guia para Android TV Box',
        description: 'Instale nossos apps em seu TV Box Android. Suporta a maioria dos modelos disponíveis no mercado.',
        features: ['Compatível com Android', 'Instalação rápida', 'Sem complicações', 'Suporte técnico']
      },
      en: {
        title: 'Install on TV Box',
        subtitle: 'Guide for Android TV Box',
        description: 'Install our apps on your Android TV Box. Supports most models available on the market.',
        features: ['Android compatible', 'Quick installation', 'No complications', 'Technical support']
      },
      es: {
        title: 'Instalar en TV Box',
        subtitle: 'Guía para Android TV Box',
        description: 'Instala nuestras aplicaciones en tu Android TV Box. Compatible con la mayoría de modelos disponibles.',
        features: ['Compatible con Android', 'Instalación rápida', 'Sin complicaciones', 'Soporte técnico']
      }
    },
    'install-firestick': {
      pt: {
        title: 'Instalar em Firestick',
        subtitle: 'Guia para Amazon Firestick',
        description: 'Instale nossos apps em seu Amazon Firestick. Compatível com todos os modelos Firestick.',
        features: ['Compatível com Firestick', 'Instalação fácil', 'Qualidade 4K', 'Suporte 24/7']
      },
      en: {
        title: 'Install on Firestick',
        subtitle: 'Guide for Amazon Firestick',
        description: 'Install our apps on your Amazon Firestick. Compatible with all Firestick models.',
        features: ['Firestick compatible', 'Easy installation', '4K quality', '24/7 Support']
      },
      es: {
        title: 'Instalar en Firestick',
        subtitle: 'Guía para Amazon Firestick',
        description: 'Instala nuestras aplicaciones en tu Amazon Firestick. Compatible con todos los modelos Firestick.',
        features: ['Compatible con Firestick', 'Instalación fácil', 'Calidad 4K', 'Soporte 24/7']
      }
    },
    'tv-brasil': {
      pt: {
        title: 'TV Online Brasil',
        subtitle: 'Assista TV brasileira de qualquer lugar',
        description: 'Acesse a melhor programação de TV brasileira em qualquer lugar do mundo. Canais abertos, fechados e premium.',
        features: ['Canais brasileiros', 'Ao vivo', 'Qualidade HD', 'Sem restrições geográficas']
      },
      en: {
        title: 'TV Online Brazil',
        subtitle: 'Watch Brazilian TV from anywhere',
        description: 'Access the best Brazilian TV programming from anywhere in the world. Open, closed and premium channels.',
        features: ['Brazilian channels', 'Live', 'HD quality', 'No geographic restrictions']
      },
      es: {
        title: 'TV en Línea Brasil',
        subtitle: 'Mira TV brasileña desde cualquier lugar',
        description: 'Accede a la mejor programación de TV brasileña desde cualquier lugar del mundo. Canales abiertos, cerrados y premium.',
        features: ['Canales brasileños', 'En vivo', 'Calidad HD', 'Sin restricciones geográficas']
      }
    },
    'newbraz': {
      pt: {
        title: 'New Braz',
        subtitle: 'O melhor app de streaming do Brasil',
        description: 'New Braz é o aplicativo completo para streaming de TV ao vivo, filmes, séries e muito mais. Qualidade premium com interface intuitiva.',
        features: ['TV ao vivo', 'Filmes e séries', 'Qualidade 4K', 'Sem anúncios']
      },
      en: {
        title: 'New Braz',
        subtitle: 'The best streaming app in Brazil',
        description: 'New Braz is the complete streaming application for live TV, movies, series and much more. Premium quality with intuitive interface.',
        features: ['Live TV', 'Movies and series', '4K quality', 'Ad-free']
      },
      es: {
        title: 'New Braz',
        subtitle: 'La mejor aplicación de streaming de Brasil',
        description: 'New Braz es la aplicación de streaming completa para TV en vivo, películas, series y mucho más. Calidad premium con interfaz intuitiva.',
        features: ['TV en vivo', 'Películas y series', 'Calidad 4K', 'Sin anuncios']
      }
    },
    'assistir': {
      pt: {
        title: 'Assistir Online',
        subtitle: 'Assista seus conteúdos favoritos online',
        description: 'Acesse toda a programação de TV, filmes e séries online. Qualidade premium sem buffering.',
        features: ['Sem buffering', 'Qualidade HD', 'Múltiplos dispositivos', 'Offline']
      },
      en: {
        title: 'Watch Online',
        subtitle: 'Watch your favorite content online',
        description: 'Access all TV programming, movies and series online. Premium quality without buffering.',
        features: ['No buffering', 'HD quality', 'Multiple devices', 'Offline']
      },
      es: {
        title: 'Ver en Línea',
        subtitle: 'Mira tu contenido favorito en línea',
        description: 'Accede a toda la programación de TV, películas y series en línea. Calidad premium sin buffering.',
        features: ['Sin buffering', 'Calidad HD', 'Múltiples dispositivos', 'Desconectado']
      }
    },
    'canal-brasil': {
      pt: {
        title: 'Canal Brasil',
        subtitle: 'Conteúdo exclusivo de qualidade',
        description: 'Assista conteúdo exclusivo do Canal Brasil. Documentários, filmes e séries de qualidade.',
        features: ['Conteúdo exclusivo', 'Documentários', 'Qualidade HD', 'Sem comerciais']
      },
      en: {
        title: 'Brasil Channel',
        subtitle: 'Exclusive quality content',
        description: 'Watch exclusive content from Brasil Channel. Documentaries, movies and quality series.',
        features: ['Exclusive content', 'Documentaries', 'HD quality', 'Ad-free']
      },
      es: {
        title: 'Canal Brasil',
        subtitle: 'Contenido exclusivo de calidad',
        description: 'Mira contenido exclusivo del Canal Brasil. Documentales, películas y series de calidad.',
        features: ['Contenido exclusivo', 'Documentales', 'Calidad HD', 'Sin anuncios']
      }
    }
  };

  const content = pageContent[pageType]?.[language] || pageContent[pageType]?.pt;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        onWhatsAppClick={() => setIsWhatsAppOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-20" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text leading-tight">
                {content?.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                {content?.subtitle}
              </p>
              <button
                onClick={() => setIsWhatsAppOpen(true)}
                className="btn-primary inline-flex items-center gap-2 mx-auto"
              >
                <Play className="w-5 h-5" />
                {language === 'pt' ? 'Comece Agora' : language === 'en' ? 'Get Started' : 'Comenzar'}
              </button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <p className="text-gray-300 leading-relaxed text-lg">
              {content?.description}
            </p>
          </div>
        </section>

        {/* Features Section */}
        {content?.features && content.features.length > 0 && (
          <section className="py-16 md:py-24 bg-card/50">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
                {language === 'pt' ? 'Benefícios' : language === 'en' ? 'Benefits' : 'Beneficios'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {content.features.map((feature, idx) => (
                  <div key={idx} className="card-glass space-y-4 flex items-start gap-4">
                    <Check className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="glass rounded-2xl p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                {language === 'pt' ? 'Pronto para começar?' : language === 'en' ? 'Ready to start?' : '¿Listo para comenzar?'}
              </h2>
              <button
                onClick={() => setIsWhatsAppOpen(true)}
                className="btn-secondary inline-flex items-center gap-2 mx-auto"
              >
                <Play className="w-5 h-5" />
                {language === 'pt' ? 'Fale Conosco' : language === 'en' ? 'Contact Us' : 'Contáctanos'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />

      <WhatsAppFlow
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        language={language}
      />
    </div>
  );
}

import { Check } from 'lucide-react';
