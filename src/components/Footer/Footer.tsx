import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-neutral-900 text-gray-400 border-t border-neutral-800 py-6 px-4 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="font-bold text-yellow-400 text-lg">Just Play</span>
          <span>{t('Dirección')}: Calle Ficticia 123, Ciudad Gamer</span>
          <span>{t('Contacto')}: contacto@justplay.com</span>
          <span>© {new Date().getFullYear()} Just Play. {t('Todos los derechos reservados.')}</span>
        </div>
        <div className="flex gap-4 items-center">
          <a href="https://github.com/justplay" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/justplay" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="mailto:contacto@justplay.com" className="hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 