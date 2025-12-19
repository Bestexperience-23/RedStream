import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import ContentShowcase from './components/ContentShowcase';
import Features from './components/Features';
import SupportedDevices from './components/SupportedDevices';
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

    // --- SEO ENGINE START ---
    document.title = content.seo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', content.seo.description);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', content.seo.keywords);

    const updateMeta = (property: string, contentStr: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentStr);
    };

    updateMeta('og:title', content.seo.title);
    updateMeta('og:description', content.seo.description);
    updateMeta('og:locale', lang.toLowerCase());
    updateMeta('og:image', 'data:image/svg+xml,%3Csvg width="800" height="418" viewBox="0 0 800 418" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="800" height="418" fill="%230A0A0A"/%3E%3Crect x="336" y="145" width="128" height="128" rx="24" fill="%23DC2626"/%3E%3Cpath d="M376 177L416 209L376 241" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/%3E%3Cpath d="M416 241H448" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E');

    // 5. Inject JSON-LD Schema (Google Rich Snippets)
    let schemaScript = document.querySelector('#schema-json-ld');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('id', 'schema-json-ld');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const logoUrl = "data:image/svg+xml,%3Csvg width='512' height='512' viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='512' height='512' rx='64' fill='%23DC2626'/%3E%3Cpath d='M128 128L256 256L128 384' stroke='white' stroke-width='48' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M288 384H416' stroke='white' stroke-width='48' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

    const schemaData = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RedStream IPTV",
        "url": window.location.origin,
        "logo": logoUrl,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+212-694-843-943",
          "contactType": "customer service",
          "availableLanguage": ["French", "English", "Arabic", "Spanish", "Italian"]
        }
      },
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "RedStream IPTV Premium Subscription",
        "image": logoUrl,
        "description": content.seo.description,
        "brand": {
          "@type": "Brand",
          "name": "RedStream"
        },
        "sku": "REDSTREAM-PREMIUM-P12M",
        "offers": {
          "@type": "Offer",
          "url": window.location.href,
          "priceCurrency": "EUR",
          "price": "49.00",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "EUR"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": "0",
                "maxValue": "0",
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": "0",
                "maxValue": "0",
                "unitCode": "DAY"
              }
            },
            "shippingDestination": {
              "@type": "DefinedRegion",
              "addressCountry": ["FR", "BE", "CH", "CA", "ES", "IT", "MA"]
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "FR",
            "returnPolicyCategory": "https://schema.org/MerchantReturnPolicyPrepaid",
            "merchantReturnDays": 1,
            "returnMethod": "https://schema.org/ReturnByMail",
            "returnFees": "https://schema.org/FreeReturn"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ];

    schemaScript.textContent = JSON.stringify(schemaData);

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
            <SupportedDevices content={content.supportedDevices} />
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
