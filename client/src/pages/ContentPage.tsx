import React, { useState } from 'react';
import { ChevronRight, Play, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFlow from '@/components/WhatsAppFlow';
import { Language, detectLanguage, getPathForLanguage } from '@/lib/i18n';

interface ContentPageProps {
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  cta?: string;
  language?: Language;
}

export default function ContentPage({
  title,
  subtitle,
  description,
  features = [],
  cta = 'Comece Agora',
  language: initialLanguage,
}: ContentPageProps) {
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
                {title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                {subtitle}
              </p>
              <button
                onClick={() => setIsWhatsAppOpen(true)}
                className="btn-primary inline-flex items-center gap-2 mx-auto"
              >
                <Play className="w-5 h-5" />
                {cta}
              </button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <div className="prose prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6 text-lg">
                {description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        {features.length > 0 && (
          <section className="py-16 md:py-24 bg-card/50">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
                {language === 'pt' ? 'Benefícios' : language === 'en' ? 'Benefits' : 'Beneficios'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {features.map((feature, idx) => (
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
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {language === 'pt'
                  ? 'Entre em contato conosco via WhatsApp e comece sua jornada de streaming agora!'
                  : language === 'en'
                  ? 'Contact us via WhatsApp and start your streaming journey now!'
                  : '¡Contáctanos por WhatsApp y comienza tu viaje de streaming ahora!'}
              </p>
              <button
                onClick={() => setIsWhatsAppOpen(true)}
                className="btn-secondary inline-flex items-center gap-2 mx-auto"
              >
                <Play className="w-5 h-5" />
                {cta}
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
