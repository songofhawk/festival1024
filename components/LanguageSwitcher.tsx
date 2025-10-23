
import React from 'react';
import { GlobeIcon } from './Icons';

interface LanguageSwitcherProps {
  language: 'en' | 'zh';
  setLanguage: (lang: 'en' | 'zh') => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="absolute top-4 right-4 text-green-400 hover:text-green-200 hover:bg-green-900/50 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
      aria-label="Switch Language"
    >
        <div className="flex items-center space-x-2">
            <GlobeIcon className="w-6 h-6"/>
            <span className="font-bold">{language === 'en' ? '中文' : 'EN'}</span>
        </div>
    </button>
  );
};
