import React, { useState } from 'react';
import { Gamepad2, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState<'es' | 'en'>('es');

  return (
    <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur border-b border-neutral-800 shadow flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/')}
          className="text-yellow-400 hover:text-yellow-300 transition-colors p-2 rounded-full cursor-pointer"
          title={t('Inicio')}
        >
          <Gamepad2 className="w-7 h-7" />
        </button>
        <button
          onClick={() => navigate('/')}
          className="text-2xl font-extrabold text-yellow-400 select-none hover:text-yellow-300 transition-colors bg-transparent border-none outline-none"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          aria-label="Ir al inicio"
        >
          Just Play
        </button>
      </div>
      <div className="flex items-center gap-6">
        {/* Favoritos */}
        <button
          onClick={() => navigate('/favorites')}
          className="text-pink-400 hover:text-pink-300 transition-colors p-2 rounded-full cursor-pointer"
          title={t('Favoritos')}
        >
          <Heart className="w-6 h-6" fill="currentColor" />
        </button>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => { i18n.changeLanguage('es'); setLang('es'); localStorage.setItem('lang', 'es'); }}
            className={`px-2 py-1 rounded text-sm font-semibold cursor-pointer ${lang === 'es' ? 'bg-yellow-400 text-black' : 'bg-neutral-800 text-white'}`}
          >
            ES
          </button>
          <button
            onClick={() => { i18n.changeLanguage('en'); setLang('en'); localStorage.setItem('lang', 'en'); }}
            className={`px-2 py-1 rounded text-sm font-semibold cursor-pointer ${lang === 'en' ? 'bg-yellow-400 text-black' : 'bg-neutral-800 text-white'}`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 