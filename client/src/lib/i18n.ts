// i18n.ts - Sistema de internacionalização para Streaming Apps

export type Language = 'pt' | 'en' | 'es';

export const LANGUAGES: Record<Language, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español'
};

export const LANGUAGE_CODES: Record<Language, string> = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES'
};

export const APPS = [
  { id: 'new-braz', name: 'New Braz', description: 'Streaming completo com TV ao vivo e filmes' },
  { id: 'new-hybrid', name: 'New Hybrid', description: 'Híbrido com conteúdo exclusivo' },
  { id: 'dream-tv', name: 'Dream TV', description: 'Canais de sonho e séries premium' },
  { id: 'xcloud-tv', name: 'XCloud TV', description: 'Gaming e entretenimento em nuvem' }
];

export const PLANS = [
  { id: 'monthly', name: 'Mensal', price: 30, duration: '1 mês', value: 'Mensal R$30' },
  { id: 'quarterly', name: 'Trimestral', price: 90, duration: '3 meses', value: 'Trimestral R$90' },
  { id: 'biannual', name: 'Semestral', price: 162, duration: '6 meses', value: 'Semestral R$162' },
  { id: 'annual', name: 'Anual', price: 300, duration: '12 meses', value: 'Anual R$300' }
];

export const WHATSAPP_NUMBER = '+5532999103356';

// Translations for common elements
export const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.live': 'TV Ao Vivo',
    'nav.sports': 'Futebol',
    'nav.movies': 'Filmes',
    'nav.series': 'Séries',
    'nav.trial': 'Teste Grátis',
    'nav.plans': 'Planos',
    'nav.blog': 'Blog',
    
    // CTA
    'cta.start': 'Começar Agora',
    'cta.contact': 'Fale Conosco',
    'cta.trial': 'Teste Grátis',
    'cta.subscribe': 'Assinar',
    'cta.renew': 'Renovar',
    'cta.install': 'Instalar',
    'cta.activate': 'Ativar',
    
    // Apps
    'app.newbraz': 'New Braz',
    'app.newhybrid': 'New Hybrid',
    'app.dreamtv': 'Dream TV',
    'app.xcloudtv': 'XCloud TV',
    
    // Plans
    'plan.monthly': 'Mensal - R$30',
    'plan.quarterly': 'Trimestral - R$90',
    'plan.biannual': 'Semestral - R$162',
    'plan.annual': 'Anual - R$300',
    
    // Common
    'common.welcome': 'Bem-vindo',
    'common.loading': 'Carregando...',
    'common.error': 'Erro ao carregar',
    'common.success': 'Sucesso!',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.live': 'Live TV',
    'nav.sports': 'Football',
    'nav.movies': 'Movies',
    'nav.series': 'Series',
    'nav.trial': 'Free Trial',
    'nav.plans': 'Plans',
    'nav.blog': 'Blog',
    
    // CTA
    'cta.start': 'Get Started',
    'cta.contact': 'Contact Us',
    'cta.trial': 'Free Trial',
    'cta.subscribe': 'Subscribe',
    'cta.renew': 'Renew',
    'cta.install': 'Install',
    'cta.activate': 'Activate',
    
    // Apps
    'app.newbraz': 'New Braz',
    'app.newhybrid': 'New Hybrid',
    'app.dreamtv': 'Dream TV',
    'app.xcloudtv': 'XCloud TV',
    
    // Plans
    'plan.monthly': 'Monthly - $10',
    'plan.quarterly': 'Quarterly - $30',
    'plan.biannual': 'Biannual - $54',
    'plan.annual': 'Annual - $100',
    
    // Common
    'common.welcome': 'Welcome',
    'common.loading': 'Loading...',
    'common.error': 'Error loading',
    'common.success': 'Success!',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.live': 'TV en Vivo',
    'nav.sports': 'Fútbol',
    'nav.movies': 'Películas',
    'nav.series': 'Series',
    'nav.trial': 'Prueba Gratis',
    'nav.plans': 'Planes',
    'nav.blog': 'Blog',
    
    // CTA
    'cta.start': 'Comenzar',
    'cta.contact': 'Contáctenos',
    'cta.trial': 'Prueba Gratis',
    'cta.subscribe': 'Suscribirse',
    'cta.renew': 'Renovar',
    'cta.install': 'Instalar',
    'cta.activate': 'Activar',
    
    // Apps
    'app.newbraz': 'New Braz',
    'app.newhybrid': 'New Hybrid',
    'app.dreamtv': 'Dream TV',
    'app.xcloudtv': 'XCloud TV',
    
    // Plans
    'plan.monthly': 'Mensual - €9',
    'plan.quarterly': 'Trimestral - €27',
    'plan.biannual': 'Semestral - €49',
    'plan.annual': 'Anual - €90',
    
    // Common
    'common.welcome': 'Bienvenido',
    'common.loading': 'Cargando...',
    'common.error': 'Error al cargar',
    'common.success': '¡Éxito!',
  }
};

export function getTranslation(lang: Language, key: string): string {
  return translations[lang]?.[key] || key;
}

export function detectLanguage(): Language {
  const stored = localStorage.getItem('language') as Language | null;
  if (stored && ['pt', 'en', 'es'].includes(stored)) return stored;
  
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'pt') return 'pt';
  if (browserLang === 'es') return 'es';
  return 'en';
}

export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/en/')) return 'en';
  if (pathname.startsWith('/es/')) return 'es';
  return 'pt';
}

export function getPathForLanguage(pathname: string, targetLang: Language): string {
  const currentLang = getLanguageFromPath(pathname);
  if (currentLang === targetLang && targetLang === 'pt') return pathname;
  
  // Remove language prefix if exists
  let cleanPath = pathname;
  if (pathname.startsWith('/en/')) cleanPath = pathname.slice(3);
  if (pathname.startsWith('/es/')) cleanPath = pathname.slice(3);
  
  // Add language prefix for non-Portuguese
  if (targetLang === 'en') return '/en' + cleanPath;
  if (targetLang === 'es') return '/es' + cleanPath;
  return cleanPath;
}
