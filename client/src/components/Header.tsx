import React, { useState } from 'react';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';
import { Language, LANGUAGES, getPathForLanguage } from '@/lib/i18n';
import { useLocation } from 'wouter';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onWhatsAppClick: () => void;
}

export default function Header({ language, onLanguageChange, onWhatsAppClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: language === 'pt' ? 'Início' : language === 'en' ? 'Home' : 'Inicio', path: '/' },
    { label: language === 'pt' ? 'TV Ao Vivo' : language === 'en' ? 'Live TV' : 'TV en Vivo', path: '/watch-live-tv-online.html' },
    { label: language === 'pt' ? 'Planos' : language === 'en' ? 'Plans' : 'Planes', path: '/planos.html' },
    { label: language === 'pt' ? 'Blog' : language === 'en' ? 'Blog' : 'Blog', path: '/blog/' },
  ];

  const handleNavClick = (path: string) => {
    const newPath = getPathForLanguage(path, language);
    window.location.href = newPath;
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 glass border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="hidden sm:inline font-bold gradient-text">Streaming Apps</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="hidden sm:flex items-center gap-2 bg-white/10 rounded-lg p-1">
            {(Object.keys(LANGUAGES) as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  language === lang
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* WhatsApp Button */}
          <button
            onClick={onWhatsAppClick}
            className="hidden sm:flex items-center gap-2 btn-secondary"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">WhatsApp</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Language Selector */}
            <div className="px-4 py-2 border-t border-white/10 pt-4">
              <div className="text-xs font-medium text-gray-400 mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Idioma
              </div>
              <div className="flex gap-2">
                {(Object.keys(LANGUAGES) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      onLanguageChange(lang);
                      setIsMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 rounded text-xs font-medium transition-all ${
                      language === lang
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile WhatsApp Button */}
            <button
              onClick={() => {
                onWhatsAppClick();
                setIsMenuOpen(false);
              }}
              className="w-full btn-secondary flex items-center justify-center gap-2 mt-4"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
