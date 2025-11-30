import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import ContentShowcase from './components/ContentShowcase';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
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

    // Dynamic SEO Updates
    document.title = content.seo.title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', content.seo.description);

    // Update Meta Keywords (Create if doesn't exist)
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', content.seo.keywords);

  }, [lang, content]);

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
            <ContentShowcase content={content.showcase} />
            <Features content={content.features} />
            <Pricing content={content.pricing} />
            <FAQ content={content.faq} />
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