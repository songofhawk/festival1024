import React, { useState, useEffect, useCallback } from 'react';
import { MatrixRain } from './components/MatrixRain';
import { Terminal } from './components/Terminal';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { translations } from './constants';

type Language = 'en' | 'zh';

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [easterEggActivated, setEasterEggActivated] = useState(false);
  const [konamiCodeProgress, setKonamiCodeProgress] = useState<string[]>([]);

  useEffect(() => {
    // FIX: The `userLanguage` property is non-standard and does not exist on the `Navigator` type in modern TypeScript definitions.
    // `navigator.language` is the correct, standard property to use.
    const browserLang = navigator.language;
    if (browserLang.toLowerCase().startsWith('zh')) {
      setLanguage('zh');
    } else {
      setLanguage('en');
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (easterEggActivated) return;

    const key = event.key;
    const newProgress = [...konamiCodeProgress, key];

    if (key === konamiCode[newProgress.length - 1]) {
      if (newProgress.length === konamiCode.length) {
        setEasterEggActivated(true);
        setKonamiCodeProgress([]);
      } else {
        setKonamiCodeProgress(newProgress);
      }
    } else {
      setKonamiCodeProgress([]);
    }
  }, [konamiCodeProgress, easterEggActivated]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const currentText = translations[language];

  return (
    <div className="relative w-screen h-screen font-mono bg-black">
      <MatrixRain />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative z-10 w-full max-w-4xl p-8 text-center bg-black/70 backdrop-blur-sm border-2 border-green-500 rounded-lg border-glow transition-opacity duration-1000">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
          
          <h1 className="text-7xl md:text-9xl font-bold text-green-400 text-glow animate-pulse">
            1024
          </h1>
          <h2 className="text-2xl md:text-4xl text-green-300 mt-2 text-glow">
            {currentText.title}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-green-200">
            {currentText.greeting}
          </p>

          {!easterEggActivated && (
            <p className="mt-8 text-sm text-green-600 animate-pulse">
              {currentText.easterEggHint}
            </p>
          )}

          {easterEggActivated && (
            <div className="mt-8">
              <Terminal message={currentText.easterEggMessage} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;