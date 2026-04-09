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
      aboutText: 'Streaming Apps oferece os melhores serviços de TV ao vivo, filmes, séries e esportes em qualidade premium.',
      apps: 'Apps',
      install: 'Instalação',
      streaming: 'Streaming',
      account: 'Conta',
      support: 'Suporte',
      contact: 'Contato',
      legal: 'Legal',
      privacy: 'Privacidade',
      terms: 'Termos',
      rights: 'Todos os direitos reservados.',
      
      install_pages: [
        { name: 'Instalar New Braz', url: '/instalar-newbraz.html' },
        { name: 'Instalar Smart TV', url: '/instalar-smart-tv.html' },
        { name: 'Instalar TV Box', url: '/instalar-tv-box.html' },
        { name: 'Instalar Firestick', url: '/instalar-firestick.html' },
      ],
      
      streaming_pages: [
        { name: 'TV Ao Vivo', url: '/watch-live-tv-online.html' },
        { name: 'Futebol Ao Vivo', url: '/futebol-ao-vivo.html' },
        { name: 'Filmes Online', url: '/filmes-online.html' },
        { name: 'Séries Online', url: '/series-online.html' },
        { name: 'Canais Ao Vivo', url: '/canais-ao-vivo.html' },
        { name: 'TV Online Brasil', url: '/tv-online-brasil.html' },
        { name: 'Assistir Brasil', url: '/assistir-brasil.html' },
        { name: 'Canal Brasil', url: '/assistir-canal-brasil.html' },
      ],
      
      account_pages: [
        { name: 'Teste Grátis', url: '/newbraz-teste-gratis.html' },
        { name: 'Planos', url: '/new-braz-planos.html' },
        { name: 'Assinar', url: '/assinar-newbraz.html' },
        { name: 'Ativação', url: '/newbraz-ativacao.html' },
        { name: 'Renovar Smart TV', url: '/renovar-smart-tv.html' },
        { name: 'Renovar TV Box', url: '/renovar-tv-box.html' },
        { name: 'Renovar App', url: '/renovar-app.html' },
        { name: 'Renovar New Braz', url: '/renovar-new-braz.html' },
        { name: 'Pagar Plano', url: '/pagar-plano.html' },
        { name: 'Segunda Via', url: '/segunda-via.html' },
      ],
      
      blog_pages: [
        { name: 'Como Assistir TV Online', url: '/blog/como-assistir-tv-online.html' },
        { name: 'Melhor Streaming 2026', url: '/blog/melhor-streaming-2026.html' },
        { name: 'Como Ver Futebol Ao Vivo', url: '/blog/como-ver-futebol-ao-vivo.html' },
        { name: 'Como Instalar na Smart TV', url: '/blog/como-instalar-na-smart-tv.html' },
        { name: 'App para TV Box', url: '/blog/app-para-tv-box.html' },
      ],
    },
    
    en: {
      about: 'About',
      aboutText: 'Streaming Apps offers the best live TV, movies, series and sports services in premium quality.',
      apps: 'Apps',
      install: 'Installation',
      streaming: 'Streaming',
      account: 'Account',
      support: 'Support',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: 'All rights reserved.',
      
      install_pages: [
        { name: 'Install New Braz', url: '/en/instalar-newbraz.html' },
        { name: 'Install Smart TV', url: '/en/install-smart-tv.html' },
        { name: 'Install TV Box', url: '/en/install-tv-box.html' },
        { name: 'Install Firestick', url: '/en/install-firestick.html' },
      ],
      
      streaming_pages: [
        { name: 'Live TV', url: '/en/watch-live-tv.html' },
        { name: 'Live Sports', url: '/en/live-sports.html' },
        { name: 'Movies Online', url: '/en/movies-online.html' },
        { name: 'Series Online', url: '/en/series-online.html' },
        { name: 'Live Channels', url: '/en/live-channels.html' },
        { name: 'TV Online Brazil', url: '/en/tv-online-brazil.html' },
        { name: 'Free Streaming App', url: '/en/free-streaming-app.html' },
        { name: 'Watch Live Sports Free', url: '/en/watch-live-sports-free.html' },
      ],
      
      account_pages: [
        { name: 'Free Trial', url: '/en/free-trial.html' },
        { name: 'Plans', url: '/en/plans.html' },
        { name: 'Subscribe', url: '/en/subscribe.html' },
        { name: 'Activation', url: '/en/activation.html' },
        { name: 'Renew Smart TV', url: '/en/renew-smart-tv.html' },
        { name: 'Renew TV Box', url: '/en/renew-tv-box.html' },
        { name: 'Renew App', url: '/en/renew-app.html' },
        { name: 'Renew New Braz', url: '/en/renew-new-braz.html' },
        { name: 'Pay Plan', url: '/en/pay-plan.html' },
        { name: 'Invoice', url: '/en/invoice.html' },
      ],
      
      blog_pages: [
        { name: 'How to Watch Live TV Online', url: '/en/blog/how-to-watch-live-tv-online.html' },
        { name: 'Best Streaming Platforms 2026', url: '/en/blog/best-streaming-platforms-2026.html' },
        { name: 'Watch Football Online', url: '/en/blog/watch-football-online.html' },
        { name: 'How to Install on Smart TV', url: '/en/blog/how-to-install-on-smart-tv.html' },
        { name: 'Best App for TV Box', url: '/en/blog/best-app-for-tv-box.html' },
      ],
    },
    
    es: {
      about: 'Acerca de',
      aboutText: 'Streaming Apps ofrece los mejores servicios de TV en vivo, películas, series y deportes en calidad premium.',
      apps: 'Aplicaciones',
      install: 'Instalación',
      streaming: 'Streaming',
      account: 'Cuenta',
      support: 'Soporte',
      contact: 'Contacto',
      legal: 'Legal',
      privacy: 'Privacidad',
      terms: 'Términos',
      rights: 'Todos los derechos reservados.',
      
      install_pages: [
        { name: 'Instalar New Braz', url: '/es/instalar-newbraz.html' },
        { name: 'Instalar Smart TV', url: '/es/instalar-smart-tv.html' },
        { name: 'Instalar TV Box', url: '/es/instalar-tv-box.html' },
        { name: 'Instalar Firestick', url: '/es/instalar-firestick.html' },
      ],
      
      streaming_pages: [
        { name: 'TV en Línea', url: '/es/tv-online.html' },
        { name: 'Fútbol en Vivo', url: '/es/futbol-en-vivo.html' },
        { name: 'Películas', url: '/es/peliculas.html' },
        { name: 'Series en Línea', url: '/es/series-online.html' },
        { name: 'Canales en Vivo', url: '/es/canales-en-vivo.html' },
        { name: 'TV Online Brasil', url: '/es/tv-online-brasil.html' },
        { name: 'App Streaming Gratis', url: '/es/app-streaming-gratis.html' },
        { name: 'Ver Deportes en Vivo Gratis', url: '/es/ver-deportes-en-vivo-gratis.html' },
      ],
      
      account_pages: [
        { name: 'Prueba Gratis', url: '/es/prueba-gratis.html' },
        { name: 'Planes', url: '/es/planes.html' },
        { name: 'Suscribirse', url: '/es/suscribirse.html' },
        { name: 'Activación', url: '/es/activacion.html' },
        { name: 'Renovar Smart TV', url: '/es/renovar-smart-tv.html' },
        { name: 'Renovar TV Box', url: '/es/renovar-tv-box.html' },
        { name: 'Renovar App', url: '/es/renovar-app.html' },
        { name: 'Renovar New Braz', url: '/es/renovar-new-braz.html' },
        { name: 'Pagar Plan', url: '/es/pagar-plan.html' },
        { name: 'Segunda Vía', url: '/es/segunda-via.html' },
      ],
      
      blog_pages: [
        { name: 'Ver TV en Línea', url: '/es/blog/ver-tv-online.html' },
        { name: 'Ver Fútbol en Vivo', url: '/es/blog/ver-futbol-en-vivo.html' },
        { name: 'Mejor Streaming 2026', url: '/es/blog/mejor-streaming-2026.html' },
        { name: 'Cómo Instalar en Smart TV', url: '/es/blog/como-instalar-en-smart-tv.html' },
        { name: 'Mejor App para TV Box', url: '/es/blog/mejor-app-para-tv-box.html' },
      ],
    },
  };

  const content = footerContent[language];

  return (
    <footer className="bg-card border-t border-white/10">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-4">{content.about}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{content.aboutText}</p>
          </div>

          {/* Installation Pages */}
          <div>
            <h3 className="font-bold text-white mb-4">{content.install}</h3>
            <ul className="space-y-2">
              {content.install_pages.map((page) => (
                <li key={page.url}>
                  <a
                    href={page.url}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Streaming Pages */}
          <div>
            <h3 className="font-bold text-white mb-4">{content.streaming}</h3>
            <ul className="space-y-2">
              {content.streaming_pages.map((page) => (
                <li key={page.url}>
                  <a
                    href={page.url}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Pages */}
          <div>
            <h3 className="font-bold text-white mb-4">{content.account}</h3>
            <ul className="space-y-2">
              {content.account_pages.map((page) => (
                <li key={page.url}>
                  <a
                    href={page.url}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
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
            <div className="flex gap-4 mt-4">
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

        {/* Blog Links Section */}
        <div className="mb-8 pb-8 border-b border-white/10">
          <h3 className="font-bold text-white mb-4">Blog</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {content.blog_pages.map((page) => (
              <a
                key={page.url}
                href={page.url}
                className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                {page.name}
              </a>
            ))}
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
