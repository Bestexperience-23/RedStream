import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Support from './components/Support';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';
import Intro from './components/Intro';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [showIntro, setShowIntro] = useState(true);
  const content = TRANSLATIONS[lang];

  useEffect(() => {
    // Handle RTL for Arabic
    if (lang === Language.AR) {
      document.dir = 'rtl';
    } else {
      document.dir = 'ltr';
    }

    // Update document title for better SEO
    document.title = `RedStream IPTV | ${lang === Language.AR ? 'أفضل خدمة IPTV' : 'Premium IPTV Service'}`;
  }, [lang]);

  return (
    <>
      {showIntro ? (
        <Intro onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="min-h-screen bg-neutral-950 text-white selection:bg-red-500 selection:text-white opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <style>{`
            @keyframes fadeIn {
              to { opacity: 1; }
            }
          `}</style>
          <Navbar 
            lang={lang} 
            content={content.nav} 
            onLanguageChange={setLang} 
          />
          <main>
            <Hero content={content.hero} />
            <Partners content={content.partners} />
            <Features content={content.features} />
            <Pricing content={content.pricing} />
            <Support content={content.support} />
          </main>
          <Footer content={content.footer} />
          <WhatsAppBtn />
        </div>
      )}
    </>
  );
}

export default App;