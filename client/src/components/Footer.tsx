import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { Language, APPS, WHATSAPP_NUMBER } from '@/lib/i18n';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerContent = {
    pt: {
      about: 'Sobre',
      aboutText: 'Streaming Apps oferece os melhores serviços de TV ao vivo, filmes, séries e esportes.',
      apps: 'Apps',
      pages: 'Páginas',
      support: 'Suporte',
      contact: 'Contato',
      legal: 'Legal',
      privacy: 'Privacidade',
      terms: 'Termos',
      rights: 'Todos os direitos reservados.',
      pages_list: ['TV Ao Vivo', 'Filmes', 'Séries', 'Futebol', 'Planos', 'Blog'],
    },
    en: {
      about: 'About',
      aboutText: 'Streaming Apps offers the best live TV, movies, series and sports services.',
      apps: 'Apps',
      pages: 'Pages',
      support: 'Support',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: 'All rights reserved.',
      pages_list: ['Live TV', 'Movies', 'Series', 'Football', 'Plans', 'Blog'],
    },
    es: {
      about: 'Acerca de',
      aboutText: 'Streaming Apps ofrece los mejores servicios de TV en vivo, películas, series y deportes.',
      apps: 'Aplicaciones',
      pages: 'Páginas',
      support: 'Soporte',
      contact: 'Contacto',
      legal: 'Legal',
      privacy: 'Privacidad',
      terms: 'Términos',
      rights: 'Todos los derechos reservados.',
      pages_list: ['TV en Vivo', 'Películas', 'Series', 'Fútbol', 'Planes', 'Blog'],
    },
  };

  const content = footerContent[language];

  return (
    <footer className="bg-card border-t border-white/10">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-4">{content.about}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{content.aboutText}</p>
          </div>

          {/* Apps */}
          <div>
            <h3 className="font-bold text-white mb-4">{content.apps}</h3>
            <ul className="space-y-2">
              {APPS.map((app) => (
                <li key={app.id}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {app.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-bold text-white mb-4">{content.pages}</h3>
            <ul className="space-y-2">
              {content.pages_list.map((page) => (
                <li key={page}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">{content.contact}</h3>
            <a
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors mb-4"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-purple-600/0 via-purple-600/50 to-purple-600/0 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © {currentYear} Streaming Apps. {content.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              {content.privacy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {content.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
