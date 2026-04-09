import React from 'react';
import { Play, Download, Copy, Check } from 'lucide-react';
import { Language } from '@/lib/i18n';
import { useState } from 'react';

interface AppsGridProps {
  language: Language;
  onWhatsAppClick: () => void;
}

const NEWBRAZ_LOGO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414843623/K5FtQ9v4CTjXbgrnMqSARH/WhatsAppImage2026-02-16at13.22.31_9cdfdab4.jpeg';
const NEWHYBRID_LOGO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414843623/K5FtQ9v4CTjXbgrnMqSARH/pasted_file_Y7gopj_image_1f5f0711.png';
const DREAMTV_LOGO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414843623/K5FtQ9v4CTjXbgrnMqSARH/WhatsAppImage2026-01-08at15.52.25_202862ab.jpeg';
const XCLOUDTV_LOGO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414843623/K5FtQ9v4CTjXbgrnMqSARH/WhatsAppImage2026-01-05at16.41.57_07f4bd24.jpeg';

const apps = [
  {
    id: 'newbraz',
    name: 'New Braz',
    logo: NEWBRAZ_LOGO,
    code: '1586660',
    pt: {
      description: 'App oficial com tecnologia P2P',
      tagline: 'Tecnologia P2P integrada',
      features: [
        'Interface moderna',
        'Suporte 24/7',
        'Atualizações automáticas',
        'Tecnologia P2P avançada'
      ]
    },
    en: {
      description: 'Official app with P2P technology',
      tagline: 'Integrated P2P technology',
      features: [
        'Modern interface',
        '24/7 support',
        'Automatic updates',
        'Advanced P2P technology'
      ]
    },
    es: {
      description: 'App oficial con tecnología P2P',
      tagline: 'Tecnología P2P integrada',
      features: [
        'Interfaz moderna',
        'Soporte 24/7',
        'Actualizaciones automáticas',
        'Tecnología P2P avanzada'
      ]
    }
  },
  {
    id: 'newhybrid',
    name: 'New Hybrid',
    logo: NEWHYBRID_LOGO,
    code: '1941290',
    pt: {
      description: 'Solução híbrida IPTV + P2P',
      tagline: 'Híbrido IPTV/P2P',
      features: [
        'Alta performance',
        'Estável',
        'Versátil',
        'Melhor de dois mundos'
      ]
    },
    en: {
      description: 'Hybrid solution IPTV + P2P',
      tagline: 'Hybrid IPTV/P2P',
      features: [
        'High performance',
        'Stable',
        'Versatile',
        'Best of both worlds'
      ]
    },
    es: {
      description: 'Solución híbrida IPTV + P2P',
      tagline: 'Híbrido IPTV/P2P',
      features: [
        'Alto rendimiento',
        'Estable',
        'Versátil',
        'Lo mejor de ambos mundos'
      ]
    }
  },
  {
    id: 'dreamtv',
    name: 'Dream TV',
    logo: DREAMTV_LOGO,
    code: '8627648',
    pt: {
      description: 'Interface elegante e fluída',
      tagline: 'Design moderno',
      features: [
        'Fácil navegação',
        'Rápido',
        'Intuitivo',
        'Visual premium'
      ]
    },
    en: {
      description: 'Elegant and fluid interface',
      tagline: 'Modern design',
      features: [
        'Easy navigation',
        'Fast',
        'Intuitive',
        'Premium visual'
      ]
    },
    es: {
      description: 'Interfaz elegante y fluida',
      tagline: 'Diseño moderno',
      features: [
        'Fácil navegación',
        'Rápido',
        'Intuitivo',
        'Visual premium'
      ]
    }
  },
  {
    id: 'xcloudtv',
    name: 'XCloud TV',
    logo: XCLOUDTV_LOGO,
    code: '740644',
    pt: {
      description: 'Design moderno e visual bonito',
      tagline: 'Visual bonito',
      features: [
        'Fluído',
        'Modo cinema',
        'Favoritos',
        'Experiência premium'
      ]
    },
    en: {
      description: 'Modern design and beautiful visual',
      tagline: 'Beautiful visual',
      features: [
        'Smooth',
        'Cinema mode',
        'Favorites',
        'Premium experience'
      ]
    },
    es: {
      description: 'Diseño moderno y visual hermoso',
      tagline: 'Visual hermoso',
      features: [
        'Fluido',
        'Modo cine',
        'Favoritos',
        'Experiencia premium'
      ]
    }
  }
];

export default function AppsGrid({ language, onWhatsAppClick }: AppsGridProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

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
            const isCopied = copiedCode === app.code;
            
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
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {app.name}
                      </h3>
                      <p className="text-orange-400 font-semibold text-xs uppercase tracking-wide">
                        {content.tagline}
                      </p>
                    </div>
                    
                    <p className="text-gray-300 text-sm font-medium">
                      {content.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {content.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" />
                          <span className="text-xs text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Download Code */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-xs text-gray-400 mb-2">
                        {language === 'pt' ? 'Código Download' : language === 'en' ? 'Download Code' : 'Código Descarga'}
                      </p>
                      <div className="flex items-center justify-between gap-2">
                        <code className="text-sm font-mono font-bold text-orange-400">
                          {app.code}
                        </code>
                        <button
                          onClick={() => handleCopyCode(app.code)}
                          className="p-1.5 hover:bg-white/10 rounded transition-colors"
                          title={language === 'pt' ? 'Copiar' : language === 'en' ? 'Copy' : 'Copiar'}
                        >
                          {isCopied ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
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
