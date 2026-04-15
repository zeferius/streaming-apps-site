import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';
import { getLanguageFromPath } from '@/lib/i18n';

interface FAQItem {
  pt: { question: string; answer: string };
  en: { question: string; answer: string };
  es: { question: string; answer: string };
}

const faqItems: FAQItem[] = [
  {
    pt: {
      question: 'O que é IPTV e como funciona?',
      answer: 'IPTV (Internet Protocol Television) é um sistema de transmissão de TV através da internet. A New Braz usa tecnologia IPTV híbrida combinada com P2P para oferecer streaming estável de TV ao vivo, filmes e séries em alta qualidade. Funciona em qualquer dispositivo conectado à internet.'
    },
    en: {
      question: 'What is IPTV and how does it work?',
      answer: 'IPTV (Internet Protocol Television) is a TV transmission system through the internet. New Braz uses hybrid IPTV technology combined with P2P to offer stable streaming of live TV, movies and series in high quality. It works on any internet-connected device.'
    },
    es: {
      question: '¿Qué es IPTV y cómo funciona?',
      answer: 'IPTV (Protocolo de Internet Televisión) es un sistema de transmisión de TV a través de internet. New Braz utiliza tecnología IPTV híbrida combinada con P2P para ofrecer transmisión estable de TV en vivo, películas y series en alta calidad. Funciona en cualquier dispositivo conectado a internet.'
    }
  },
  {
    pt: {
      question: 'IPTV é grátis? Qual a diferença entre IPTV grátis e pago?',
      answer: 'Existem listas IPTV grátis na internet, mas geralmente são instáveis e desatualizam rapidamente. A New Braz oferece IPTV premium com suporte 24/7, atualizações diárias, canais em HD/4K, sem travamentos e com garantia de funcionamento. Vale muito a pena investir em um serviço confiável.'
    },
    en: {
      question: 'Is IPTV free? What\'s the difference between free and paid IPTV?',
      answer: 'There are free IPTV lists on the internet, but they are usually unstable and quickly outdated. New Braz offers premium IPTV with 24/7 support, daily updates, HD/4K channels, no freezing and guaranteed functionality. It\'s definitely worth investing in a reliable service.'
    },
    es: {
      question: '¿Es IPTV gratis? ¿Cuál es la diferencia entre IPTV gratis y de pago?',
      answer: 'Hay listas IPTV gratuitas en internet, pero generalmente son inestables y se desactualiza rápidamente. New Braz ofrece IPTV premium con soporte 24/7, actualizaciones diarias, canales en HD/4K, sin congelaciones y con garantía de funcionamiento. Definitivamente vale la pena invertir en un servicio confiable.'
    }
  },
  {
    pt: {
      question: 'Como instalar IPTV na Smart TV?',
      answer: 'Para instalar IPTV na Smart TV: 1) Acesse a Google Play Store ou app store da sua TV 2) Procure por "New Braz" ou "IPTV Smarters" 3) Instale o app 4) Abra o app e adicione a lista IPTV fornecida 5) Pronto! Agora você pode assistir TV ao vivo. A New Braz é compatível com todas as Smart TVs (Samsung, LG, Sony, Philco, etc).'
    },
    en: {
      question: 'How to install IPTV on Smart TV?',
      answer: 'To install IPTV on Smart TV: 1) Access Google Play Store or your TV\'s app store 2) Search for "New Braz" or "IPTV Smarters" 3) Install the app 4) Open the app and add the IPTV list provided 5) Done! Now you can watch live TV. New Braz is compatible with all Smart TVs (Samsung, LG, Sony, Philco, etc).'
    },
    es: {
      question: '¿Cómo instalar IPTV en Smart TV?',
      answer: 'Para instalar IPTV en Smart TV: 1) Accede a Google Play Store o app store de tu TV 2) Busca "New Braz" o "IPTV Smarters" 3) Instala la aplicación 4) Abre la app y agrega la lista IPTV proporcionada 5) ¡Listo! Ahora puedes ver TV en vivo. New Braz es compatible con todos los Smart TV (Samsung, LG, Sony, Philco, etc).'
    }
  },
  {
    pt: {
      question: 'Como instalar IPTV no TV Box?',
      answer: 'Para TV Box (Android TV): 1) Vá para Configurações > Aplicativos 2) Ative "Fontes desconhecidas" 3) Instale o app New Braz 4) Abra e configure com a lista IPTV 5) Aproveite! A New Braz funciona perfeitamente em TV Box, Fire Stick e Android TV Box com excelente performance.'
    },
    en: {
      question: 'How to install IPTV on TV Box?',
      answer: 'For TV Box (Android TV): 1) Go to Settings > Applications 2) Enable "Unknown sources" 3) Install New Braz app 4) Open and configure with IPTV list 5) Enjoy! New Braz works perfectly on TV Box, Fire Stick and Android TV Box with excellent performance.'
    },
    es: {
      question: '¿Cómo instalar IPTV en TV Box?',
      answer: 'Para TV Box (Android TV): 1) Ve a Configuración > Aplicaciones 2) Habilita "Fuentes desconocidas" 3) Instala la app New Braz 4) Abre y configura con la lista IPTV 5) ¡Disfruta! New Braz funciona perfectamente en TV Box, Fire Stick y Android TV Box con excelente rendimiento.'
    }
  },
  {
    pt: {
      question: 'Como usar IPTV no celular?',
      answer: 'Para usar IPTV no celular: 1) Baixe o app New Braz na Google Play Store 2) Instale e abra o app 3) Faça login com suas credenciais 4) Acesse a lista de canais e comece a assistir 5) Você pode assistir em qualquer lugar com conexão de internet. Compatível com iOS e Android.'
    },
    en: {
      question: 'How to use IPTV on mobile?',
      answer: 'To use IPTV on mobile: 1) Download New Braz app from Google Play Store 2) Install and open the app 3) Login with your credentials 4) Access the channel list and start watching 5) You can watch anywhere with internet connection. Compatible with iOS and Android.'
    },
    es: {
      question: '¿Cómo usar IPTV en el móvil?',
      answer: 'Para usar IPTV en móvil: 1) Descarga la app New Braz desde Google Play Store 2) Instala y abre la app 3) Inicia sesión con tus credenciales 4) Accede a la lista de canales y comienza a ver 5) Puedes ver en cualquier lugar con conexión a internet. Compatible con iOS y Android.'
    }
  },
  {
    pt: {
      question: 'Por que meu IPTV está travando?',
      answer: 'Travamentos geralmente ocorrem por: 1) Conexão de internet fraca (recomendado mínimo 10Mbps) 2) App desatualizado 3) Muitos apps abertos simultaneamente 4) Servidor sobrecarregado. Soluções: Atualize o app, feche outros apps, reinicie o dispositivo, ou entre em contato com suporte. A New Braz tem servidores otimizados para evitar travamentos.'
    },
    en: {
      question: 'Why is my IPTV freezing?',
      answer: 'Freezing usually occurs due to: 1) Weak internet connection (minimum 10Mbps recommended) 2) Outdated app 3) Too many apps open simultaneously 4) Overloaded server. Solutions: Update the app, close other apps, restart the device, or contact support. New Braz has optimized servers to prevent freezing.'
    },
    es: {
      question: '¿Por qué mi IPTV se congela?',
      answer: 'El congelamiento generalmente ocurre debido a: 1) Conexión de internet débil (se recomienda mínimo 10Mbps) 2) App desactualizada 3) Demasiadas aplicaciones abiertas simultáneamente 4) Servidor sobrecargado. Soluciones: Actualiza la app, cierra otras apps, reinicia el dispositivo o contacta con soporte. New Braz tiene servidores optimizados para evitar congelaciones.'
    }
  },
  {
    pt: {
      question: 'IPTV vale a pena? Qual é o melhor app IPTV?',
      answer: 'IPTV vale muito a pena! Você economiza em assinaturas de TV por cabo e tem acesso a centenas de canais. O melhor app IPTV depende do seu dispositivo: New Braz é excelente para todos, IPTV Smarters é popular, Kodi é versátil. Recomendamos New Braz pela qualidade, estabilidade e suporte 24/7.'
    },
    en: {
      question: 'Is IPTV worth it? What\'s the best IPTV app?',
      answer: 'IPTV is definitely worth it! You save on cable TV subscriptions and have access to hundreds of channels. The best IPTV app depends on your device: New Braz is excellent for all, IPTV Smarters is popular, Kodi is versatile. We recommend New Braz for quality, stability and 24/7 support.'
    },
    es: {
      question: '¿Vale la pena IPTV? ¿Cuál es la mejor app IPTV?',
      answer: 'IPTV definitivamente vale la pena! Ahorras en suscripciones de TV por cable y tienes acceso a cientos de canales. La mejor app IPTV depende de tu dispositivo: New Braz es excelente para todos, IPTV Smarters es popular, Kodi es versátil. Recomendamos New Braz por calidad, estabilidad y soporte 24/7.'
    }
  },
  {
    pt: {
      question: 'Como melhorar a qualidade do IPTV?',
      answer: 'Para melhorar a qualidade: 1) Use conexão de internet estável (WiFi 5GHz ou cabo) 2) Atualize o app regularmente 3) Feche apps em background 4) Escolha canais em HD/4K 5) Reinicie o dispositivo periodicamente 6) Aumente a velocidade de internet se possível. A New Braz oferece canais em até 4K com excelente qualidade.'
    },
    en: {
      question: 'How to improve IPTV quality?',
      answer: 'To improve quality: 1) Use stable internet connection (5GHz WiFi or cable) 2) Update the app regularly 3) Close background apps 4) Choose HD/4K channels 5) Restart the device periodically 6) Increase internet speed if possible. New Braz offers channels in up to 4K with excellent quality.'
    },
    es: {
      question: '¿Cómo mejorar la calidad de IPTV?',
      answer: 'Para mejorar la calidad: 1) Usa conexión de internet estable (WiFi 5GHz o cable) 2) Actualiza la app regularmente 3) Cierra apps en segundo plano 4) Elige canales en HD/4K 5) Reinicia el dispositivo periódicamente 6) Aumenta la velocidad de internet si es posible. New Braz ofrece canales en hasta 4K con excelente calidad.'
    }
  },
  {
    pt: {
      question: 'Como colocar lista IPTV no app?',
      answer: 'Para adicionar lista IPTV: 1) Abra o app New Braz 2) Vá para Configurações ou Preferências 3) Selecione "Adicionar Lista" ou "Importar" 4) Cole a URL da lista IPTV fornecida 5) Aguarde o carregamento 6) Pronto! Os canais aparecerão automaticamente. Se tiver dúvidas, nosso suporte 24/7 ajuda.'
    },
    en: {
      question: 'How to add IPTV list to app?',
      answer: 'To add IPTV list: 1) Open New Braz app 2) Go to Settings or Preferences 3) Select "Add List" or "Import" 4) Paste the IPTV list URL provided 5) Wait for loading 6) Done! Channels will appear automatically. If you have questions, our 24/7 support helps.'
    },
    es: {
      question: '¿Cómo agregar lista IPTV a la app?',
      answer: 'Para agregar lista IPTV: 1) Abre la app New Braz 2) Ve a Configuración o Preferencias 3) Selecciona "Agregar Lista" o "Importar" 4) Pega la URL de la lista IPTV proporcionada 5) Espera a que cargue 6) ¡Listo! Los canales aparecerán automáticamente. Si tienes dudas, nuestro soporte 24/7 ayuda.'
    }
  },
  {
    pt: {
      question: 'Qual é o melhor TV Box para IPTV?',
      answer: 'Os melhores TV Box para IPTV em 2026: 1) Xiaomi Mi Box S - Excelente custo-benefício 2) Amazon Fire TV Stick 4K - Integração com Alexa 3) Tanix TX6S - Ótimo processador 4) Mecool KM9 Pro - 4K e streaming fluido. Todos funcionam perfeitamente com New Braz. Recomendamos escolher conforme seu orçamento.'
    },
    en: {
      question: 'What\'s the best TV Box for IPTV?',
      answer: 'Best TV Box for IPTV in 2026: 1) Xiaomi Mi Box S - Excellent value for money 2) Amazon Fire TV Stick 4K - Alexa integration 3) Tanix TX6S - Great processor 4) Mecool KM9 Pro - 4K and smooth streaming. All work perfectly with New Braz. We recommend choosing based on your budget.'
    },
    es: {
      question: '¿Cuál es el mejor TV Box para IPTV?',
      answer: 'Mejores TV Box para IPTV en 2026: 1) Xiaomi Mi Box S - Excelente relación calidad-precio 2) Amazon Fire TV Stick 4K - Integración con Alexa 3) Tanix TX6S - Excelente procesador 4) Mecool KM9 Pro - 4K y transmisión fluida. Todos funcionan perfectamente con New Braz. Recomendamos elegir según tu presupuesto.'
    }
  }
];

export default function IPTVBlogPage() {
  const [location] = useLocation();
  const language = getLanguageFromPath(location);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const t = {
    pt: {
      title: 'Guia Completo IPTV 2026',
      subtitle: 'Tudo que você precisa saber sobre IPTV, listas, apps e como configurar',
      faqTitle: 'Perguntas Frequentes sobre IPTV',
      cta: 'Comece seu Teste Grátis de 3 Horas',
      keywords: 'IPTV grátis, lista IPTV, IPTV atualizada, como instalar IPTV, melhor app IPTV, IPTV Smart TV, IPTV TV Box, IPTV Fire Stick'
    },
    en: {
      title: 'Complete IPTV Guide 2026',
      subtitle: 'Everything you need to know about IPTV, lists, apps and how to configure',
      faqTitle: 'Frequently Asked Questions about IPTV',
      cta: 'Start Your Free 3-Hour Trial',
      keywords: 'free IPTV, IPTV list, updated IPTV, how to install IPTV, best IPTV app, IPTV Smart TV, IPTV TV Box, IPTV Fire Stick'
    },
    es: {
      title: 'Guía Completa IPTV 2026',
      subtitle: 'Todo lo que necesitas saber sobre IPTV, listas, apps y cómo configurar',
      faqTitle: 'Preguntas Frecuentes sobre IPTV',
      cta: 'Comienza tu Prueba Gratuita de 3 Horas',
      keywords: 'IPTV gratis, lista IPTV, IPTV actualizada, cómo instalar IPTV, mejor app IPTV, IPTV Smart TV, IPTV TV Box, IPTV Fire Stick'
    }
  };

  const content = t[language as keyof typeof t] || t.pt;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
            {content.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {content.subtitle}
          </p>
          <button
            onClick={() => window.location.href = 'https://wa.me/5532999103356'}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            {content.cta}
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {content.faqTitle}
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const currentItem = item[language as keyof typeof item] || item.pt;
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-purple-500/50 transition-colors"
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-left text-white">
                      {currentItem.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-purple-400 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-700">
                      <p className="text-gray-300 leading-relaxed">
                        {currentItem.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {language === 'pt' && 'Pronto para começar?'}
            {language === 'en' && 'Ready to get started?'}
            {language === 'es' && '¿Listo para comenzar?'}
          </h2>
          <button
            onClick={() => window.location.href = 'https://wa.me/5532999103356'}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all"
          >
            {content.cta}
          </button>
        </div>
      </section>
    </div>
  );
}
