import { Content, Language } from './types';
import { Monitor, Zap, ShieldCheck, Globe, Smartphone, Headset } from 'lucide-react';

export const WHATSAPP_NUMBER = "212694843943";

export const createWhatsAppLink = (message: string = "") => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const FEATURES_ICONS = [Monitor, Zap, ShieldCheck, Globe, Smartphone, Headset];

export const TRANSLATIONS: Record<Language, Content> = {
  [Language.EN]: {
    seo: {
      title: "RedStream IPTV | Best 4K IPTV Service 2024 - Anti-Freeze",
      description: "Get the best IPTV subscription with 15,000+ Channels, Movies & Series in 4K/8K. Compatible with Smart TV, Firestick, Android Box, Mag, Enigma. 24/7 Support.",
      keywords: "IPTV Subscription, Best IPTV Service, 4K Streaming, IPTV Smarters Pro, M3U Playlist, Xtream Codes, Mag 254, Android TV, Firestick IPTV, Anti-Freeze, USA IPTV, UK IPTV"
    },
    nav: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
      tryNow: "Try Free Trial"
    },
    hero: {
      title: "NEXT GEN STREAMING",
      subtitle: "Experience the ultimate entertainment with 4K/8K quality. No buffering, anti-freeze technology, and 99.9% uptime.",
      ctaPrimary: "Get Started Now",
      ctaSecondary: "View Channels",
      status: "SYSTEM STATUS: ONLINE"
    },
    partners: {
      title: "AVAILABLE CONTENT & PARTNERS"
    },
    showcase: {
      title: "LATEST RELEASES",
      subtitle: "Unlimited Access to 50,000+ Movies & Series VOD",
      category_movies: "New Movies",
      category_series: "Trending Series",
      included_badge: "INCLUDED"
    },
    features: {
      title: "Why Choose RedStream?",
      items: [
        { title: "4K & 8K Ultra HD", desc: "Crystal clear picture quality with high bitrate support." },
        { title: "Anti-Freeze Tech", desc: "Proprietary buffer-free technology for uninterrupted viewing." },
        { title: "Secure & Private", desc: "End-to-end encryption. No logs policy. 100% Anonymous." },
        { title: "15,000+ Channels", desc: "Worldwide coverage: US, UK, CA, EU, AR, and more." },
        { title: "Multi-Device", desc: "Works on Smart TV, Android, iOS, Mag, Firestick, PC." },
        { title: "24/7 Premium Support", desc: "Dedicated support team ready to help via WhatsApp." }
      ]
    },
    supportedDevices: {
      title: "Compatible Devices",
      subtitle: "Watch your favorite content on any device, anywhere.",
      items: ["Smart TV", "Android Box", "iOS / Apple", "Firestick", "Windows PC", "macOS"]
    },
    pricing: {
      title: "Subscription Plans",
      paymentTitle: "ACCEPTED PAYMENT METHODS",
      plans: [
        {
<<<<<<< HEAD
          name: "Monthly Pass",
          price: "€12",
          period: "1 Month",
          features: ["1 Device", "4K/8K Ultra HD", "Live TV + VOD", "Anti-Freeze Technology", "24/7 Premium Support"],
          button: "Order Now"
        },
        {
          name: "Semi-Annual",
          price: "€29",
          period: "6 Months",
          features: ["1 Device", "4K/8K Ultra HD", "Live TV + VOD", "Anti-Freeze Technology", "24/7 Premium Support"],
          button: "Order Now"
        },
        {
          name: "Annual Pass",
          price: "€49",
          period: "12 Months",
          features: ["1 Device", "4K/8K Ultra HD", "Live TV + VOD", "Anti-Freeze Technology", "VIP Priority Support"],
=======
          name: "Starter",
          price: "€12",
          period: "1 Month",
          features: ["1 Device", "4K/FHD/HD Quality", "Anti-Freeze Technology", "24/7 Support", "Full VOD Library"],
          button: "Order Now"
        },
        {
          name: "Eco Year",
          price: "€29",
          period: "12 Months",
          features: ["1 Device", "FHD/HD Quality", "Live TV Only (No VOD)", "Standard Support", "Stable Connection"],
          button: "Order Now"
        },
        {
          name: "Elite Year",
          price: "€49",
          period: "12 Months",
          features: ["3 Devices", "4K/8K Ultra HD", "Live TV + VOD (Movies)", "VIP Priority Support", "Anti-Freeze Max"],
>>>>>>> 306d59a6c13fb63ad14aa14788ba79f30317c17d
          button: "Order Now",
          recommended: true
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
<<<<<<< HEAD
        { question: "What channels are included?", answer: "We provide over 15,000 live channels from around the world, including Sports, News, Movies, and Kids channels in 4K/FHD quality." },
        { question: "How fast is the delivery?", answer: "Delivery is instant. You will receive your credentials via WhatsApp or Email immediately after payment." },
        { question: "Does it work on my device?", answer: "Yes! We support Smart TVs (Samsung, LG), Android Box, Firestick, Apple TV, Mag, PC, and Mobile." },
        { question: "Do I need a VPN?", answer: "No, our service is secure. However, we can activate a VPN remotely on your account upon request." }
=======
        { question: "What is the difference between Eco and Elite?", answer: "The Eco plan (€29) offers Live TV only in FHD. The Elite plan (€49) includes 4K quality, VOD (Movies & Series), and supports up to 3 devices." },
        { question: "How fast is the delivery?", answer: "Delivery is instant. You will receive your credentials via WhatsApp or Email immediately after payment." },
        { question: "Does it work on my device?", answer: "Yes! We support Smart TVs (Samsung, LG), Android Box, Firestick, Apple TV, Mag, PC, and Mobile." },
        { question: "Do I need a VPN?", answer: "No, our service is secure and does not require a VPN. However, you can use one if you prefer." }
>>>>>>> 306d59a6c13fb63ad14aa14788ba79f30317c17d
      ]
    },
    support: {
      title: "Need Assistance?",
      desc: "Our team is available 24/7 on WhatsApp to assist you with installation and activation.",
      button: "Chat on WhatsApp"
    },
    footer: {
      rights: "© 2024 RedStream. All rights reserved.",
      quickLinks: "Quick Links",
      legal: "Legal"
    }
  },
  [Language.FR]: {
    seo: {
      title: "RedStream IPTV | Meilleur Abonnement IPTV 4K France",
      description: "Abonnement IPTV Premium. +15 000 Chaînes FR/Int, Films & Séries. Compatible Smart TV, Android Box, Mag, PC. Sans coupure, Support 24/7.",
      keywords: "IPTV France, Abonnement IPTV, Meilleur IPTV, IPTV Smarters Pro, Code Xtream, M3U France, Boitier Android IPTV, Chaines Canal, Bein Sport Gratuit, IPTV Stable"
    },
    nav: {
      home: "Accueil",
      features: "Avantages",
      pricing: "Tarifs",
      faq: "FAQ",
      contact: "Contact",
      tryNow: "Essai Gratuit"
    },
    hero: {
      title: "STREAMING NOUVELLE GÉNÉRATION",
      subtitle: "Vivez l'expérience ultime en 4K/8K. Sans coupure, technologie anti-freeze et 99.9% de disponibilité.",
      ctaPrimary: "Commencer Maintenant",
      ctaSecondary: "Voir les Chaînes",
      status: "ÉTAT DU SYSTÈME : EN LIGNE"
    },
    partners: {
      title: "CONTENU DISPONIBLE & PARTENAIRES"
    },
    showcase: {
      title: "DERNIÈRES NOUVEAUTÉS",
      subtitle: "Accès illimité à +50 000 Films & Séries VOD",
      category_movies: "Films Récents",
      category_series: "Séries Tendances",
      included_badge: "INCLUS"
    },
    features: {
      title: "Pourquoi Choisir RedStream ?",
      items: [
        { title: "Ultra HD 4K & 8K", desc: "Qualité d'image cristalline avec support haut débit." },
        { title: "Technologie Anti-Freeze", desc: "Technologie propriétaire sans mise en mémoire tampon." },
        { title: "Sécurisé & Privé", desc: "Chiffrement de bout en bout. 100% Anonyme." },
        { title: "15,000+ Chaînes", desc: "Couverture mondiale : FR, BE, CH, CA, AR, et plus." },
        { title: "Multi-Supports", desc: "Smart TV, Android, iOS, Mag, Firestick, PC." },
        { title: "Support Premium 24/7", desc: "Équipe dédiée prête à aider via WhatsApp." }
      ]
    },
    supportedDevices: {
      title: "Appareils Compatibles",
      subtitle: "Regardez vos contenus préférés sur tous vos écrans.",
      items: ["Smart TV", "Box Android", "iOS / Apple", "Firestick", "Windows PC", "macOS"]
    },
    pricing: {
      title: "Nos Formules",
      paymentTitle: "MÉTHODES DE PAIEMENT",
      plans: [
        {
<<<<<<< HEAD
          name: "Pass Mensuel",
          price: "12€",
          period: "1 Mois",
          features: ["1 Appareil", "Qualité 4K/8K UHD", "TV Direct + VOD", "Anti-Freeze", "Support 24/7"],
          button: "Commander"
        },
        {
          name: "Pass Semestriel",
          price: "29€",
          period: "6 Mois",
          features: ["1 Appareil", "Qualité 4K/8K UHD", "TV Direct + VOD", "Anti-Freeze", "Support 24/7"],
          button: "Commander"
        },
        {
          name: "Pass Annuel",
          price: "49€",
          period: "12 Mois",
          features: ["1 Appareil", "Qualité 4K/8K UHD", "TV Direct + VOD", "Anti-Freeze Max", "Support Prioritaire"],
=======
          name: "Starter",
          price: "12€",
          period: "1 Mois",
          features: ["1 Appareil", "Qualité 4K/FHD", "Anti-Freeze", "Support 24/7", "VOD Incluse"],
          button: "Commander"
        },
        {
          name: "Éco Annuel",
          price: "29€",
          period: "12 Mois",
          features: ["1 Appareil", "Qualité FHD/HD", "TV Direct (Pas de VOD)", "Support Standard", "Connexion Stable"],
          button: "Commander"
        },
        {
          name: "Élite Annuel",
          price: "49€",
          period: "12 Mois",
          features: ["3 Appareils", "Qualité 4K/8K UHD", "TV + VOD (Films/Séries)", "Support VIP Prioritaire", "Anti-Freeze Max"],
>>>>>>> 306d59a6c13fb63ad14aa14788ba79f30317c17d
          button: "Commander",
          recommended: true
        }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
<<<<<<< HEAD
        { question: "Quelles sont les chaînes incluses ?", answer: "Nous proposons plus de 15 000 chaînes en direct du monde entier, incluant Sports, Cinéma, Enfants, Documentaires en 4K/FHD." },
        { question: "Quelle est la vitesse de livraison ?", answer: "La livraison est immédiate. Vous recevez vos identifiants par WhatsApp ou Email juste après le paiement." },
        { question: "Est-ce compatible avec mon appareil ?", answer: "Oui ! Nous supportons Smart TV (Samsung, LG), Android Box, Firestick, Apple TV, Mag, PC et Mobile." },
        { question: "Ai-je besoin d'un VPN ?", answer: "Non, notre service est sécurisé. Nous pouvons activer un VPN à distance sur votre compte sur simple demande." }
=======
        { question: "Quelle différence entre Éco et Élite ?", answer: "Le plan Éco (29€) offre la TV en direct en FHD sans VOD. Le plan Élite (49€) inclut la 4K, toute la VOD (Films/Séries) et 3 écrans." },
        { question: "Quelle est la vitesse de livraison ?", answer: "La livraison est immédiate. Vous recevez vos identifiants par WhatsApp ou Email juste après le paiement." },
        { question: "Est-ce compatible avec mon appareil ?", answer: "Oui ! Nous supportons Smart TV (Samsung, LG), Android Box, Firestick, Apple TV, Mag, PC et Mobile." },
        { question: "Ai-je besoin d'un VPN ?", answer: "Non, notre service est sécurisé et ne nécessite pas de VPN. Cependant, vous pouvez en utiliser un si vous le souhaitez." }
>>>>>>> 306d59a6c13fb63ad14aa14788ba79f30317c17d
      ]
    },
    support: {
      title: "Besoin d'aide ?",
      desc: "Notre équipe est disponible 24/7 sur WhatsApp pour vous aider à l'installation.",
      button: "Discuter sur WhatsApp"
    },
    footer: {
      rights: "© 2024 RedStream. Tous droits réservés.",
      quickLinks: "Liens Rapides",
      legal: "Légal"
    }
  },
  [Language.IT]: {
    seo: {
      title: "RedStream IPTV | Miglior IPTV Italia 4K - Stabile",
      description: "Scopri il miglior servizio IPTV in Italia. Canali Sky, DAZN, Film e Serie in 4K. Nessun blocco, Assistenza 24/7. Compatibile Smart TV e Android.",
      keywords: "IPTV Italia, Abbonamento IPTV, Liste M3U Italia, IPTV Smarters, Sky Gratis, DAZN Streaming, Android Box IPTV, Miglior Pezzotto, IPTV Senza Blocchi"
    },
    nav: {
      home: "Home",
      features: "Caratteristiche",
      pricing: "Prezzi",
      faq: "FAQ",
      contact: "Contatto",
      tryNow: "Prova Ora"
    },
    hero: {
      title: "STREAMING DI NUOVA GENERAZIONE",
      subtitle: "Vivi l'intrattenimento definitivo in 4K/8K. Nessun buffering, tecnologia anti-blocco.",
      ctaPrimary: "Inizia Ora",
      ctaSecondary: "Vedi Canali",
      status: "STATO SISTEMA: ONLINE"
    },
    partners: {
      title: "CONTENUTI DISPONIBILI & PARTNER"
    },
    showcase: {
      title: "ULTIME USCITE",
      subtitle: "Accesso illimitato a +50.000 Film e Serie VOD",
      category_movies: "Film Recenti",
      category_series: "Serie di Tendenza",
      included_badge: "INCLUSO"
    },
    features: {
      title: "Perché Scegliere RedStream?",
      items: [
        { title: "4K & 8K Ultra HD", desc: "Qualità dell'immagine cristalline." },
        { title: "Tecnologia Anti-Freeze", desc: "Visione ininterrotta senza buffering." },
        { title: "Sicuro e Privato", desc: "Crittografia end-to-end. 100% Anonimo." },
        { title: "15,000+ Canali", desc: "Copertura mondiale: IT, DE, UK, US, e altro." },
        { title: "Multi-Dispositivo", desc: "Smart TV, Android, iOS, Mag, Firestick, PC." },
        { title: "Supporto 24/7", desc: "Team dedicato pronto ad aiutare via WhatsApp." }
      ]
    },
    supportedDevices: {
      title: "Dispositivi Supportati",
      subtitle: "Guarda i tuoi contenuti preferiti su qualsiasi schermo.",
      items: ["Smart TV", "Android Box", "iOS / Apple", "Firestick", "Windows PC", "macOS"]
    },
    pricing: {
      title: "Piani di Abbonamento",
      paymentTitle: "METODI DI PAGAMENTO",
      plans: [
        {
<<<<<<< HEAD
          name: "Pass Mensile",
          price: "€12",
          period: "1 Mese",
          features: ["1 Dispositivo", "Qualità 4K/8K", "Live TV + VOD", "Anti-Freeze", "Supporto 24/7"],
          button: "Ordina Ora"
        },
        {
          name: "Pass Semestrale",
          price: "€29",
          period: "6 Mesi",
          features: ["1 Dispositivo", "Qualità 4K/8K", "Live TV + VOD", "Anti-Freeze", "Supporto 24/7"],
          button: "Ordina Ora"
        },
        {
          name: "Pass Annuale",
          price: "€49",
          period: "12 Mesi",
          features: ["1 Dispositivo", "Qualità 4K/8K", "Live TV + VOD", "Anti-Freeze Max", "Supporto Prioritario"],
=======
          name: "Starter",
          price: "€12",
          period: "1 Mese",
          features: ["1 Dispositivo", "Qualità 4K/FHD", "Anti-Freeze", "Supporto 24/7", "VOD Inclusi"],
          button: "Ordina Ora"
        },
        {
          name: "Eco Annuale",
          price: "€29",
          period: "12 Mesi",
          features: ["1 Dispositivo", "Qualità FHD/HD", "Solo Live TV (No VOD)", "Supporto Standard", "Connessione Stabile"],
          button: "Ordina Ora"
        },
        {
          name: "Elite Annuale",
          price: "€49",
          period: "12 Mesi",
          features: ["3 Dispositivi", "Qualità 4K/8K", "Live TV + VOD (Film)", "Supporto VIP", "Anti-Freeze Max"],
>>>>>>> 306d59a6c13fb63ad14aa14788ba79f30317c17d
          button: "Ordina Ora",
          recommended: true
        }
      ]
    },
    faq: {
      title: "Domande Frequenti",
      items: [
<<<<<<< HEAD
        { question: "Quali canali sono inclusi?", answer: "Offriamo oltre 15.000 canali live da tutto il mondo, inclusi Sport, Film e Bambini in qualità 4K/FHD." },
        { question: "Quanto è veloce la consegna?", answer: "La consegna è immediata. Riceverai le credenziali via WhatsApp o Email subito dopo il pagamento." },
        { question: "Funziona sul mio dispositivo?", answer: "Sì! Supportiamo Smart TV, Android Box, Firestick, Apple TV, Mag, PC e Smartphone." },
        { question: "Serve una VPN?", answer: "No, il servizio è sicuro. Possiamo attivare una VPN da remoto sul tuo account su richiesta." }
=======
        { question: "Qual è la differenza tra Eco ed Elite?", answer: "Il piano Eco (€29) offre solo canali Live in FHD. Il piano Elite (€49) include 4K, VOD (Film/Serie) e 3 dispositivi." },
        { question: "Quanto è veloce la consegna?", answer: "La consegna è immediata. Riceverai le credenziali via WhatsApp o Email subito dopo il pagamento." },
        { question: "Funziona sul mio dispositivo?", answer: "Sì! Supportiamo Smart TV, Android Box, Firestick, Apple TV, Mag, PC e Smartphone." },
        { question: "Serve una VPN?", answer: "No, il servizio è sicuro e non richiede VPN. Tuttavia puoi usarne una se preferisci." }
>>>>>>> 306d59a6c13fb63ad14aa14788ba79f30317c17d
      ]
    },
    support: {
      title: "Hai bisogno di assistenza?",
      desc: "Il nostro team è disponibile 24/7 su WhatsApp.",
      button: "Chatta su WhatsApp"
    },
    footer: {
      rights: "© 2024 RedStream. Tutti i diritti riservati.",
      quickLinks: "Link Rapidi",
      legal: "Legale"
    }
  },
  [Language.ES]: {
    seo: {
      title: "RedStream IPTV | Mejor IPTV España y Latino 4K - Estable",
      description: "El mejor servicio IPTV 2024. +15,000 Canales, Películas y Series. Sin cortes. Compatible con Smart TV, Android, Firestick. Soporte 24/7.",
      keywords: "IPTV España, IPTV Latino, Listas M3U Gratis, IPTV Smarters Pro, Ver Futbol Online, Movistar Plus Gratis, Android TV Box, Mejor IPTV Sin Cortes"
    },
    nav: {
      home: "Inicio",
      features: "Características",
      pricing: "Precios",
      faq: "FAQ",
      contact: "Contacto",
      tryNow: "Prueba Gratis"
    },
    hero: {
      title: "STREAMING DE PRÓXIMA GENERACIÓN",
      subtitle: "Experimenta el entretenimiento definitivo en 4K/8K. Sin cortes, tecnología anti-congelamiento.",
      ctaPrimary: "Empezar Ahora",
      ctaSecondary: "Ver Canales",
      status: "ESTADO DEL SISTEMA: EN LÍNEA"
    },
    partners: {
      title: "CONTENIDO DISPONIBLE Y SOCIOS"
    },
    showcase: {
      title: "ÚLTIMOS LANZAMIENTOS",
      subtitle: "Acceso ilimitado a +50,000 Películas y Series VOD",
      category_movies: "Películas Nuevas",
      category_series: "Series en Tendencia",
      included_badge: "INCLUIDO"
    },
    features: {
      title: "¿Por qué elegir RedStream?",
      items: [
        { title: "4K & 8K Ultra HD", desc: "Calidad de imagen cristalina." },
        { title: "Tecnología Anti-Freeze", desc: "Visualización ininterrumpida." },
        { title: "Seguro y Privado", desc: "Cifrado de extremo a extremo. 100% Anónimo." },
        { title: "15,000+ Canales", desc: "Cobertura mundial: ES, LATAM, US, UK." },
        { title: "Multi-Dispositivo", desc: "Smart TV, Android, iOS, Mag, Firestick, PC." },
        { title: "Soporte 24/7", desc: "Equipo dedicado listo para ayudar vía WhatsApp." }
      ]
    },
    supportedDevices: {
      title: "Dispositivos Compatibles",
      subtitle: "Disfruta de tu contenido en cualquier dispositivo.",
      items: ["Smart TV", "Android Box", "iOS / Apple", "Firestick", "Windows PC", "macOS"]
    },
    pricing: {
      title: "Planes de Suscripción",
      paymentTitle: "MÉTODOS DE PAGO",
      plans: [
        {
<<<<<<< HEAD
          name: "Pase Mensual",
          price: "€12",
          period: "1 Mes",
          features: ["1 Dispositivo", "Calidad 4K/8K", "TV en Vivo + VOD", "Anti-Freeze", "Soporte 24/7"],
          button: "Pedir Ahora"
        },
        {
          name: "Pase Semestral",
          price: "€29",
          period: "6 Meses",
          features: ["1 Dispositivo", "Calidad 4K/8K", "TV en Vivo + VOD", "Anti-Freeze", "Soporte 24/7"],
          button: "Pedir Ahora"
        },
        {
          name: "Pase Anual",
          price: "€49",
          period: "12 Meses",
          features: ["1 Dispositivo", "Calidad 4K/8K", "TV en Vivo + VOD", "Anti-Freeze Max", "Soporte Prioritario"],
=======
          name: "Starter",
          price: "€12",
          period: "1 Mes",
          features: ["1 Dispositivo", "Calidad 4K/FHD", "Anti-Freeze", "Soporte 24/7", "Incluye VOD"],
          button: "Pedir Ahora"
        },
        {
          name: "Eco Anual",
          price: "€29",
          period: "12 Meses",
          features: ["1 Dispositivo", "Calidad FHD/HD", "Solo TV en Vivo (Sin VOD)", "Soporte Estándar", "Conexión Estable"],
          button: "Pedir Ahora"
        },
        {
          name: "Élite Anual",
          price: "€49",
          period: "12 Meses",
          features: ["3 Conexiones", "Calidad 4K/8K", "TV + VOD (Películas)", "Soporte VIP", "Anti-Freeze Max"],
>>>>>>> 306d59a6c13fb63ad14aa14788ba79f30317c17d
          button: "Pedir Ahora",
          recommended: true
        }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
<<<<<<< HEAD
        { question: "¿Qué canales están incluidos?", answer: "Ofrecemos más de 15,000 canales en vivo de todo el mundo, incluyendo Deportes, Cine y Niños en calidad 4K/FHD." },
        { question: "¿Qué tan rápida es la entrega?", answer: "La entrega es inmediata. Recibirás tus credenciales por WhatsApp o Email justo después del pago." },
        { question: "¿Funciona en mi dispositivo?", answer: "¡Sí! Soportamos Smart TV, Android Box, Firestick, Apple TV, Mag, PC y Móvil." },
        { question: "¿Necesito una VPN?", answer: "No, nuestro servicio es seguro. Podemos activar una VPN de forma remota en su cuenta bajo petición." }
=======
        { question: "¿Diferencia entre Eco y Élite?", answer: "El plan Eco (€29) es solo TV en Vivo FHD. El plan Élite (€49) incluye 4K, VOD (Películas/Series) y 3 dispositivos." },
        { question: "¿Qué tan rápida es la entrega?", answer: "La entrega es inmediata. Recibirás tus credenciales por WhatsApp o Email justo después del pago." },
        { question: "¿Funciona en mi dispositivo?", answer: "¡Sí! Soportamos Smart TV, Android Box, Firestick, Apple TV, Mag, PC y Móvil." },
        { question: "¿Necesito una VPN?", answer: "No, nuestro servicio es seguro y no requiere VPN. Sin embargo, puedes usar una si prefieres." }
>>>>>>> 306d59a6c13fb63ad14aa14788ba79f30317c17d
      ]
    },
    support: {
      title: "¿Necesitas ayuda?",
      desc: "Nuestro equipo está disponible 24/7 en WhatsApp.",
      button: "Chatear en WhatsApp"
    },
    footer: {
      rights: "© 2024 RedStream. Todos los derechos reservados.",
      quickLinks: "Enlaces Rápidos",
      legal: "Legal"
    }
  },
  [Language.AR]: {
    seo: {
      title: "RedStream IPTV | أفضل اشتراك IPTV 4K بدون تقطيع",
      description: "أقوى سيرفر IPTV في العالم. +15000 قناة رياضية وترفيهية 4K. يدعم Smarters, Android Box, شاشات سمارت. تجربة مجانية ودعم 24/7.",
      keywords: "اشتراك IPTV, IPTV Smarters Pro, قنوات بين سبورت, شاهد VIP مجانا, سيرفر IPTV قوي, بدون تقطيع, تطبيق IPTV, ملفات M3U, قنوات عربية 4K"
    },
    nav: {
      home: "الرئيسية",
      features: "المميزات",
      pricing: "الأسعار",
      faq: "أسئلة شائعة",
      contact: "اتصل بنا",
      tryNow: "جرب الآن"
    },
    hero: {
      title: "الجيل القادم من البث",
      subtitle: "استمتع بتجربة ترفيهية فائقة بجودة 4K/8K. بدون تقطيع، تقنية منع التجميد، ووقت تشغيل 99.9%.",
      ctaPrimary: "ابدأ الآن",
      ctaSecondary: "عرض القنوات",
      status: "حالة النظام: متصل"
    },
    partners: {
      title: "المحتوى المتاح والشركاء"
    },
    showcase: {
      title: "أحدث الإصدارات",
      subtitle: "وصول غير محدود لأكثر من 50,000 فيلم ومسلسل",
      category_movies: "أحدث الأفلام",
      category_series: "مسلسلات رائجة",
      included_badge: "مشمول"
    },
    features: {
      title: "لماذا تختار RedStream؟",
      items: [
        { title: "جودة 4K و 8K", desc: "جودة صورة فائقة الوضوح مع دعم معدل بت عالي." },
        { title: "تقنية منع التجميد", desc: "تقنية خاصة لضمان مشاهدة متواصلة." },
        { title: "آمن وخاص", desc: "تشفير كامل. سياسة عدم الاحتفاظ بالسجلات." },
        { title: "+15,000 قناة", desc: "تغطية عالمية: القنوات العربية، الأوروبية، الأمريكية." },
        { title: "متعدد الأجهزة", desc: "يعمل على Smart TV و Android و iOS و Mag و PC." },
        { title: "دعم فني 24/7", desc: "فريق دعم مخصص جاهز للمساعدة عبر واتساب." }
      ]
    },
    supportedDevices: {
      title: "الأجهزة المدعومة",
      subtitle: "شاهد محتواك المفضل على جميع أجهزتك.",
      items: ["شاشة ذكية", "أندرويد بوكس", "أجهزة آبل", "فاير ستيك", "كمبيوتر", "ماك"]
    },
    pricing: {
      title: "باقات الاشتراك",
      paymentTitle: "طرق الدفع المقبولة",
      plans: [
        {
<<<<<<< HEAD
          name: "باقة شهرية",
          price: "€12",
          period: "1 شهر",
          features: ["جهاز واحد", "جودة 4K/8K", "قنوات + مكتبة VOD", "تقنية منع التجميد", "دعم 24/7"],
          button: "اطلب الآن"
        },
        {
          name: "نصف سنوي",
          price: "€29",
          period: "6 أشهر",
          features: ["جهاز واحد", "جودة 4K/8K", "قنوات + مكتبة VOD", "تقنية منع التجميد", "دعم 24/7"],
          button: "اطلب الآن"
        },
        {
          name: "الباقة السنوية",
          price: "€49",
          period: "12 شهر",
          features: ["جهاز واحد", "جودة 4K/8K", "قنوات + مكتبة VOD", "أعلى ثبات (VIP)", "دعم فني ذو أولوية"],
=======
          name: "البداية",
          price: "€12",
          period: "1 شهر",
          features: ["جهاز واحد", "جودة 4K/FHD", "تقنية منع التجميد", "دعم 24/7", "مكتبة VOD كاملة"],
          button: "اطلب الآن"
        },
        {
          name: "اقتصادي سنوي",
          price: "€29",
          period: "12 شهر",
          features: ["جهاز واحد", "جودة FHD/HD", "قنوات مباشرة فقط", "بدون مكتبة أفلام", "اتصال مستقر"],
          button: "اطلب الآن"
        },
        {
          name: "النخبة سنوي",
          price: "€49",
          period: "12 شهر",
          features: ["3 اتصالات", "جودة 4K/8K", "قنوات + أفلام ومسلسلات", "دعم VIP فوري", "ثبات عالي جداً"],
>>>>>>> 306d59a6c13fb63ad14aa14788ba79f30317c17d
          button: "اطلب الآن",
          recommended: true
        }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
<<<<<<< HEAD
        { question: "ما هي القنوات المشمولة؟", answer: "نقدم أكثر من 15000 قناة مباشرة تشمل الرياضة والأفلام والأطفال بجودة 4K." },
        { question: "ما سرعة التسليم؟", answer: "التسليم فوري. ستتلقى بيانات الاشتراك عبر واتساب أو البريد الإلكتروني فور الدفع." },
        { question: "هل يعمل على جهازي؟", answer: "نعم! ندعم جميع الأجهزة الذكية، أندرويد بوكس، الهواتف، والحواسيب." },
        { question: "هل أحتاج إلى VPN؟", answer: "لا، خدمتنا آمنة. يمكننا تفعيل VPN عن بُعد على حسابك عند الطلب." }
=======
        { question: "ما الفرق بين الباقة الاقتصادية والنخبة؟", answer: "الباقة الاقتصادية (29€) تشمل قنوات مباشرة فقط بجودة FHD. باقة النخبة (49€) تشمل مكتبة الأفلام والمسلسلات وجودة 4K و3 أجهزة." },
        { question: "ما سرعة التسليم؟", answer: "التسليم فوري. ستتلقى بيانات الاشتراك عبر واتساب أو البريد الإلكتروني فور الدفع." },
        { question: "هل يعمل على جهازي؟", answer: "نعم! ندعم جميع الأجهزة الذكية، أندرويد بوكس، الهواتف، والحواسيب." },
        { question: "هل أحتاج إلى VPN؟", answer: "لا، خدمتنا آمنة ولا تتطلب VPN. لكن يمكنك استخدامه إذا رغبت." }
>>>>>>> 306d59a6c13fb63ad14aa14788ba79f30317c17d
      ]
    },
    support: {
      title: "هل تحتاج إلى مساعدة؟",
      desc: "فريقنا متاح 24/7 على واتساب لمساعدتك في التثبيت والتفعيل.",
      button: "تحدث عبر واتساب"
    },
    footer: {
      rights: "© 2024 RedStream. جميع الحقوق محفوظة.",
      quickLinks: "روابط سريعة",
      legal: "قانوني"
    }
  }
};