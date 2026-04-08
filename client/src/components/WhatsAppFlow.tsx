import React, { useState } from 'react';
import { X, MessageCircle, ChevronRight } from 'lucide-react';
import { APPS, PLANS, WHATSAPP_NUMBER } from '@/lib/i18n';

type FlowStep = 'welcome' | 'name' | 'app' | 'action' | 'plans' | 'trial' | 'confirm';

interface FlowData {
  name: string;
  app: string;
  action: string;
  plan?: string;
  appInstalled?: string;
}

interface WhatsAppFlowProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'pt' | 'en' | 'es';
}

const messages = {
  pt: {
    welcome: 'Olá! 👋 Bem-vindo aos nossos apps de streaming!',
    name: 'Qual é o seu nome?',
    app: 'Qual app você deseja?',
    action: 'O que você deseja fazer?',
    plans: 'Escolha seu plano:',
    trial: 'Você já instalou o app?',
    confirm: 'Perfeito! Vamos enviar sua solicitação via WhatsApp.',
    actions: ['Contratar', 'Renovar', 'Teste Grátis'],
    trialOptions: ['Sim, já instalei', 'Não, quero instalar'],
    send: 'Enviar pelo WhatsApp',
    cancel: 'Cancelar',
    back: 'Voltar',
  },
  en: {
    welcome: 'Hello! 👋 Welcome to our streaming apps!',
    name: 'What is your name?',
    app: 'Which app do you want?',
    action: 'What would you like to do?',
    plans: 'Choose your plan:',
    trial: 'Have you already installed the app?',
    confirm: 'Perfect! We will send your request via WhatsApp.',
    actions: ['Subscribe', 'Renew', 'Free Trial'],
    trialOptions: ['Yes, already installed', 'No, I want to install'],
    send: 'Send via WhatsApp',
    cancel: 'Cancel',
    back: 'Back',
  },
  es: {
    welcome: '¡Hola! 👋 ¡Bienvenido a nuestras aplicaciones de streaming!',
    name: '¿Cuál es tu nombre?',
    app: '¿Qué aplicación deseas?',
    action: '¿Qué deseas hacer?',
    plans: 'Elige tu plan:',
    trial: '¿Ya instalaste la aplicación?',
    confirm: '¡Perfecto! Enviaremos tu solicitud por WhatsApp.',
    actions: ['Contratar', 'Renovar', 'Prueba Gratis'],
    trialOptions: ['Sí, ya instalé', 'No, quiero instalar'],
    send: 'Enviar por WhatsApp',
    cancel: 'Cancelar',
    back: 'Atrás',
  },
};

export default function WhatsAppFlow({ isOpen, onClose, language }: WhatsAppFlowProps) {
  const [step, setStep] = useState<FlowStep>('welcome');
  const [data, setData] = useState<FlowData>({
    name: '',
    app: '',
    action: '',
  });
  const [inputValue, setInputValue] = useState('');
  const t = messages[language];

  const handleNameSubmit = () => {
    if (inputValue.trim()) {
      setData({ ...data, name: inputValue });
      setStep('app');
      setInputValue('');
    }
  };

  const handleAppSelect = (appId: string) => {
    setData({ ...data, app: appId });
    setStep('action');
  };

  const handleActionSelect = (action: string) => {
    setData({ ...data, action });
    if (action === 'Teste Grátis' || action === 'Free Trial' || action === 'Prueba Gratis') {
      setStep('trial');
    } else {
      setStep('plans');
    }
  };

  const handlePlanSelect = (plan: string) => {
    setData({ ...data, plan });
    setStep('confirm');
  };

  const handleTrialSelect = (option: string) => {
    setData({ ...data, appInstalled: option });
    setStep('confirm');
  };

  const generateMessage = (): string => {
    const appName = APPS.find(a => a.id === data.app)?.name || data.app;
    const planName = data.plan || '';
    const installed = data.appInstalled || '';

    if (language === 'pt') {
      let msg = `Olá! Meu nome é ${data.name}.\n\n`;
      msg += `Gostaria de ${data.action.toLowerCase()} o app ${appName}.\n`;
      if (planName) msg += `Plano escolhido: ${planName}\n`;
      if (installed) msg += `Já instalei: ${installed}\n`;
      return msg;
    } else if (language === 'en') {
      let msg = `Hello! My name is ${data.name}.\n\n`;
      msg += `I would like to ${data.action.toLowerCase()} the ${appName} app.\n`;
      if (planName) msg += `Chosen plan: ${planName}\n`;
      if (installed) msg += `Already installed: ${installed}\n`;
      return msg;
    } else {
      let msg = `¡Hola! Mi nombre es ${data.name}.\n\n`;
      msg += `Me gustaría ${data.action.toLowerCase()} la app ${appName}.\n`;
      if (planName) msg += `Plan elegido: ${planName}\n`;
      if (installed) msg += `Ya instalé: ${installed}\n`;
      return msg;
    }
  };

  const handleSendWhatsApp = () => {
    const message = generateMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER.replace(/\D/g, '')}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleBack = () => {
    if (step === 'name') setStep('welcome');
    else if (step === 'app') setStep('name');
    else if (step === 'action') setStep('app');
    else if (step === 'plans' || step === 'trial') setStep('action');
    else if (step === 'confirm') {
      if (data.action === 'Teste Grátis' || data.action === 'Free Trial' || data.action === 'Prueba Gratis') {
        setStep('trial');
      } else {
        setStep('plans');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass rounded-2xl w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-orange-400" />
            <h2 className="text-xl font-bold gradient-text">WhatsApp</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Welcome Step */}
          {step === 'welcome' && (
            <div className="space-y-4">
              <p className="text-center text-lg">{t.welcome}</p>
              <button
                onClick={() => setStep('name')}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {t.cancel === 'Cancelar' ? 'Começar' : t.cancel === 'Cancel' ? 'Start' : 'Comenzar'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Name Step */}
          {step === 'name' && (
            <div className="space-y-4">
              <p className="text-center text-sm text-gray-300">{t.name}</p>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
                placeholder="Digite seu nome..."
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={handleBack}
                  className="btn-outline flex-1"
                >
                  {t.back}
                </button>
                <button
                  onClick={handleNameSubmit}
                  className="btn-primary flex-1"
                >
                  {t.cancel === 'Cancelar' ? 'Próximo' : 'Next'}
                </button>
              </div>
            </div>
          )}

          {/* App Selection */}
          {step === 'app' && (
            <div className="space-y-4">
              <p className="text-center text-sm text-gray-300">{t.app}</p>
              <div className="space-y-2">
                {APPS.map((app) => (
                  <button
                    key={app.id}
                    onClick={() => handleAppSelect(app.id)}
                    className="w-full text-left p-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-purple-500 transition-all"
                  >
                    <div className="font-semibold">{app.name}</div>
                    <div className="text-xs text-gray-400">{app.description}</div>
                  </button>
                ))}
              </div>
              <button onClick={handleBack} className="btn-outline w-full">
                {t.back}
              </button>
            </div>
          )}

          {/* Action Selection */}
          {step === 'action' && (
            <div className="space-y-4">
              <p className="text-center text-sm text-gray-300">{t.action}</p>
              <div className="space-y-2">
                {t.actions.map((action) => (
                  <button
                    key={action}
                    onClick={() => handleActionSelect(action)}
                    className="w-full p-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-orange-500 transition-all font-semibold"
                  >
                    {action}
                  </button>
                ))}
              </div>
              <button onClick={handleBack} className="btn-outline w-full">
                {t.back}
              </button>
            </div>
          )}

          {/* Plans Selection */}
          {step === 'plans' && (
            <div className="space-y-4">
              <p className="text-center text-sm text-gray-300">{t.plans}</p>
              <div className="space-y-2">
                {PLANS.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => handlePlanSelect(plan.value)}
                    className="w-full text-left p-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-purple-500 transition-all"
                  >
                    <div className="font-semibold">{plan.name}</div>
                    <div className="text-xs text-gray-400">R${plan.price} - {plan.duration}</div>
                  </button>
                ))}
              </div>
              <button onClick={handleBack} className="btn-outline w-full">
                {t.back}
              </button>
            </div>
          )}

          {/* Trial Selection */}
          {step === 'trial' && (
            <div className="space-y-4">
              <p className="text-center text-sm text-gray-300">{t.trial}</p>
              <div className="space-y-2">
                {t.trialOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleTrialSelect(option)}
                    className="w-full p-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-orange-500 transition-all font-semibold"
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button onClick={handleBack} className="btn-outline w-full">
                {t.back}
              </button>
            </div>
          )}

          {/* Confirm Step */}
          {step === 'confirm' && (
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4 space-y-2 text-sm">
                <div><span className="text-gray-400">Nome:</span> {data.name}</div>
                <div><span className="text-gray-400">App:</span> {APPS.find(a => a.id === data.app)?.name}</div>
                <div><span className="text-gray-400">Ação:</span> {data.action}</div>
                {data.plan && <div><span className="text-gray-400">Plano:</span> {data.plan}</div>}
                {data.appInstalled && <div><span className="text-gray-400">Instalado:</span> {data.appInstalled}</div>}
              </div>
              <p className="text-center text-sm text-gray-300">{t.confirm}</p>
              <div className="flex gap-2">
                <button
                  onClick={handleBack}
                  className="btn-outline flex-1"
                >
                  {t.back}
                </button>
                <button
                  onClick={handleSendWhatsApp}
                  className="btn-secondary flex-1 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.send}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
