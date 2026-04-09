import React from 'react';
import { Play, Download } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface AppsGridProps {
  language: Language;
  onWhatsAppClick: () => void;
}

const NEWBRAZ_LOGO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414843623/K5FtQ9v4CTjXbgrnMqSARH/WhatsAppImage2026-02-16at13.22.31_9cdfdab4.jpeg';
const NEWHYBRID_LOGO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414843623/K5FtQ9v4CTjXbgrnMqSARH/pasted_file_Y7gopj_image_1f5f0711.png';
const XCLOUDTV_LOGO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414843623/K5FtQ9v4CTjXbgrnMqSARH/WhatsAppImage2026-01-05at16.41.57_07f4bd24.jpeg';

const apps = [
  {
    id: 'newbraz',
    name: 'New Braz',
    logo: NEWBRAZ_LOGO,
    pt: {
      description: 'O melhor app de streaming do Brasil',
      features: 'TV ao vivo, filmes, séries e muito mais'
    },
    en: {
      description: 'Brazil\'s best streaming app',
      features: 'Live TV, movies, series and more'
    },
    es: {
      description: 'La mejor aplicación de streaming de Brasil',
      features: 'TV en vivo, películas, series y más'
    }
  },
  {
    id: 'newhybrid',
    name: 'New Hybrid',
    logo: NEWHYBRID_LOGO,
    pt: {
      description: 'Streaming híbrido com conteúdo exclusivo',
      features: 'Canais premium, conteúdo original'
    },
    en: {
      description: 'Hybrid streaming with exclusive content',
      features: 'Premium channels, original content'
    },
    es: {
      description: 'Streaming híbrido con contenido exclusivo',
      features: 'Canales premium, contenido original'
    }
  },
  {
    id: 'dreamtv',
    name: 'Dream TV',
    logo: 'https://via.placeholder.com/200x200/3b82f6/ffffff?text=Dream+TV',
    pt: {
      description: 'Sonhe com o melhor entretenimento',
      features: 'Filmes, séries e documentários'
    },
    en: {
      description: 'Dream with the best entertainment',
      features: 'Movies, series and documentaries'
    },
    es: {
      description: 'Sueña con el mejor entretenimiento',
      features: 'Películas, series y documentales'
    }
  },
  {
    id: 'xcloudtv',
    name: 'XCloud TV',
    logo: XCLOUDTV_LOGO,
    pt: {
      description: 'Streaming na nuvem com qualidade 4K',
      features: 'Sem downloads, acesso instantâneo'
    },
    en: {
      description: 'Cloud streaming with 4K quality',
      features: 'No downloads, instant access'
    },
    es: {
      description: 'Streaming en la nube con calidad 4K',
      features: 'Sin descargas, acceso instantáneo'
    }
  }
];

export default function AppsGrid({ language, onWhatsAppClick }: AppsGridProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {language === 'pt' ? 'Nossos Apps de Streaming' : language === 'en' ? 'Our Streaming Apps' : 'Nuestras Aplicaciones de Streaming'}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {language === 'pt'
              ? 'Escolha o app perfeito para suas necessidades de entretenimento'
              : language === 'en'
              ? 'Choose the perfect app for your entertainment needs'
              : 'Elige la aplicación perfecta para tus necesidades de entretenimiento'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => {
            const content = app[language] || app.pt;
            return (
              <div
                key={app.id}
                className="card-glass rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col"
              >
                {/* Logo Container */}
                <div className="h-40 bg-gradient-to-br from-purple-600/10 to-pink-600/10 flex items-center justify-center p-4">
                  <img
                    src={app.logo}
                    alt={app.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3 mb-6">
                    <h3 className="text-xl font-bold text-white">
                      {app.name}
                    </h3>
                    <p className="text-orange-400 font-semibold text-sm">
                      {content.description}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {content.features}
                    </p>
                  </div>

                  <button
                    onClick={onWhatsAppClick}
                    className="btn-primary w-full inline-flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {language === 'pt' ? 'Instalar' : language === 'en' ? 'Install' : 'Instalar'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
