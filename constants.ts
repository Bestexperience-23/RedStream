import { Content, Language } from './types';
import { Monitor, Zap, ShieldCheck, Globe, Smartphone, Headset } from 'lucide-react';

export const WHATSAPP_NUMBER = "212694843943";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const FEATURES_ICONS = [Monitor, Zap, ShieldCheck, Globe, Smartphone, Headset];

export const TRANSLATIONS: Record<Language, Content> = {
  [Language.EN]: {
    seo: {
      title: "RedStream IPTV | Best 4K IPTV Service 2024 - Anti-Freeze",
      description: "Get the best IPTV service with 15,000+ Channels, Movies & Series in 4K/8K. Buffer-free, 24/7 Support, Compatible with all devices. Try it now!",
      keywords: "IPTV, Premium IPTV, 4K Streaming, Live TV, Sports Streaming, Anti-Freeze IPTV, Best IPTV UK, Best IPTV USA"
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
      category_series: "Trending Series"
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
    pricing: {
      title: "Subscription Plans",
      paymentTitle: "ACCEPTED PAYMENT METHODS",
      plans: [
        {
          name: "Starter",
          price: "€15",
          period: "1 Month",
          features: ["1 Device", "4K/FHD/HD Quality", "Anti-Freeze Technology", "24/7 Support"],
          button: "Order Now"
        },
        {
          name: "Premium",
          price: "€40",
          period: "6 Months",
          features: ["2 Connections", "4K/FHD/HD Quality", "Anti-Freeze Technology", "VIP Support", "VOD Library"],
          button: "Order Now",
          recommended: true
        },
        {
          name: "Ultimate",
          price: "€65",
          period: "12 Months",
          features: ["3 Connections", "4K/FHD/HD Quality", "Anti-Freeze Technology", "VIP Support", "VOD + Series"],
          button: "Order Now"
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { question: "How fast is the delivery?", answer: "Delivery is instant. You will receive your credentials via WhatsApp or Email immediately after payment." },
        { question: "Does it work on my device?", answer: "Yes! We support Smart TVs (Samsung, LG), Android Box, Firestick, Apple TV, Mag, PC, and Mobile." },
        { question: "Do I need a VPN?", answer: "No, our service is secure and does not require a VPN. However, you can use one if you prefer." },
        { question: "What internet speed do I need?", answer: "We recommend at least 12 Mbps for 4K streaming and 8 Mbps for HD channels." }
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
      title: "RedStream IPTV | Meilleur IPTV 4K France - Anti-Coupure",
      description: "Profitez du meilleur service IPTV en France. +15 000 Chaînes, Films et Séries en 4K/8K. Sans coupure, Support 24/7, Compatible tous appareils.",
      keywords: "IPTV France, Abonnement IPTV, Streaming 4K, IPTV Pas Cher, Meilleur IPTV 2024, Chaines Sport, VOD Illimité"
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
      category_series: "Séries Tendances"
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
    pricing: {
      title: "Nos Formules",
      paymentTitle: "MÉTHODES DE PAIEMENT",
      plans: [
        {
          name: "Starter",
          price: "15€",
          period: "1 Mois",
          features: ["1 Appareil", "Qualité 4K/FHD/HD", "Technologie Anti-Freeze", "Support 24/7"],
          button: "Commander"
        },
        {
          name: "Premium",
          price: "40€",
          period: "6 Mois",
          features: ["2 Connexions", "Qualité 4K/FHD/HD", "Technologie Anti-Freeze", "Support VIP", "Bibliothèque VOD"],
          button: "Commander",
          recommended: true
        },
        {
          name: "Ultimate",
          price: "65€",
          period: "12 Mois",
          features: ["3 Connexions", "Qualité 4K/FHD/HD", "Technologie Anti-Freeze", "Support VIP", "VOD + Séries"],
          button: "Commander"
        }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        { question: "Quelle est la vitesse de livraison ?", answer: "La livraison est immédiate. Vous recevez vos identifiants par WhatsApp ou Email juste après le paiement." },
        { question: "Est-ce compatible avec mon appareil ?", answer: "Oui ! Nous supportons Smart TV (Samsung, LG), Android Box, Firestick, Apple TV, Mag, PC et Mobile." },
        { question: "Ai-je besoin d'un VPN ?", answer: "Non, notre service est sécurisé et ne nécessite pas de VPN. Cependant, vous pouvez en utiliser un si vous le souhaitez." },
        { question: "Quelle vitesse internet est requise ?", answer: "Nous recommandons au moins 12 Mbps pour la 4K et 8 Mbps pour la HD." }
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
      description: "Scopri il miglior servizio IPTV in Italia. Canali Sky, DAZN, Film e Serie in 4K. Nessun blocco, Assistenza 24/7. Prova ora!",
      keywords: "IPTV Italia, Abbonamento IPTV, Streaming Calcio, Sky Gratis, IPTV Stabile, Miglior IPTV, VOD"
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
      category_series: "Serie di Tendenza"
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
    pricing: {
      title: "Piani di Abbonamento",
      paymentTitle: "METODI DI PAGAMENTO",
      plans: [
        {
          name: "Starter",
          price: "€15",
          period: "1 Mese",
          features: ["1 Dispositivo", "Qualità 4K/FHD/HD", "Anti-Freeze", "Supporto 24/7"],
          button: "Ordina Ora"
        },
        {
          name: "Premium",
          price: "€40",
          period: "6 Mesi",
          features: ["2 Connessioni", "Qualità 4K/FHD/HD", "Anti-Freeze", "Supporto VIP", "Libreria VOD"],
          button: "Ordina Ora",
          recommended: true
        },
        {
          name: "Ultimate",
          price: "€65",
          period: "12 Mesi",
          features: ["3 Connessioni", "Qualità 4K/FHD/HD", "Anti-Freeze", "Supporto VIP", "VOD + Serie"],
          button: "Ordina Ora"
        }
      ]
    },
    faq: {
      title: "Domande Frequenti",
      items: [
        { question: "Quanto è veloce la consegna?", answer: "La consegna è immediata. Riceverai le credenziali via WhatsApp o Email subito dopo il pagamento." },
        { question: "Funziona sul mio dispositivo?", answer: "Sì! Supportiamo Smart TV, Android Box, Firestick, Apple TV, Mag, PC e Smartphone." },
        { question: "Serve una VPN?", answer: "No, il servizio è sicuro e non richiede VPN. Tuttavia puoi usarne una se preferisci." },
        { question: "Che velocità internet serve?", answer: "Raccomandiamo almeno 12 Mbps per il 4K e 8 Mbps per l'HD." }
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
      title: "RedStream IPTV | Mejor IPTV España y Latino 4K",
      description: "El mejor servicio IPTV en español. +15,000 Canales, Películas y Series. Sin cortes, Soporte 24/7. Compatible con Smart TV y Android.",
      keywords: "IPTV España, IPTV Latino, Canales Futbol, Streaming 4K, Listas M3U, Mejor IPTV, Sin Cortes"
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
      category_series: "Series en Tendencia"
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
    pricing: {
      title: "Planes de Suscripción",
      paymentTitle: "MÉTODOS DE PAGO",
      plans: [
        {
          name: "Starter",
          price: "€15",
          period: "1 Mes",
          features: ["1 Dispositivo", "Calidad 4K/FHD/HD", "Anti-Freeze", "Soporte 24/7"],
          button: "Pedir Ahora"
        },
        {
          name: "Premium",
          price: "€40",
          period: "6 Meses",
          features: ["2 Conexiones", "Calidad 4K/FHD/HD", "Anti-Freeze", "Soporte VIP", "Biblioteca VOD"],
          button: "Pedir Ahora",
          recommended: true
        },
        {
          name: "Ultimate",
          price: "€65",
          period: "12 Meses",
          features: ["3 Conexiones", "Calidad 4K/FHD/HD", "Anti-Freeze", "Soporte VIP", "VOD + Series"],
          button: "Pedir Ahora"
        }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        { question: "¿Qué tan rápida es la entrega?", answer: "La entrega es inmediata. Recibirás tus credenciales por WhatsApp o Email justo después del pago." },
        { question: "¿Funciona en mi dispositivo?", answer: "¡Sí! Soportamos Smart TV, Android Box, Firestick, Apple TV, Mag, PC y Móvil." },
        { question: "¿Necesito una VPN?", answer: "No, nuestro servicio es seguro y no requiere VPN. Sin embargo, puedes usar una si prefieres." },
        { question: "¿Qué velocidad de internet necesito?", answer: "Recomendamos al menos 12 Mbps para 4K y 8 Mbps para HD." }
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
      title: "RedStream IPTV | أفضل اشتراك IPTV بدون تقطيع 4K",
      description: "أفضل خدمة IPTV في العالم العربي. +15,000 قناة رياضية وترفيهية. جودة 4K حقيقية، بدون تقطيع، دعم فني 24/7. جرب الآن!",
      keywords: "اشتراك IPTV, IPTV 2024, قنوات رياضية, بي ان سبورت, شاهد VIP, افضل اشتراك, بدون تقطيع"
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
      category_series: "مسلسلات رائجة"
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
    pricing: {
      title: "باقات الاشتراك",
      paymentTitle: "طرق الدفع المقبولة",
      plans: [
        {
          name: "البداية",
          price: "€15",
          period: "1 شهر",
          features: ["جهاز واحد", "جودة 4K/FHD/HD", "تقنية منع التجميد", "دعم 24/7"],
          button: "اطلب الآن"
        },
        {
          name: "المميزة",
          price: "€40",
          period: "6 أشهر",
          features: ["اتصالين", "جودة 4K/FHD/HD", "تقنية منع التجميد", "دعم VIP", "مكتبة أفلام ومسلسلات"],
          button: "اطلب الآن",
          recommended: true
        },
        {
          name: "القصوى",
          price: "€65",
          period: "12 شهر",
          features: ["3 اتصالات", "جودة 4K/FHD/HD", "تقنية منع التجميد", "دعم VIP", "مكتبة شاملة"],
          button: "اطلب الآن"
        }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        { question: "ما سرعة التسليم؟", answer: "التسليم فوري. ستتلقى بيانات الاشتراك عبر واتساب أو البريد الإلكتروني فور الدفع." },
        { question: "هل يعمل على جهازي؟", answer: "نعم! ندعم جميع الأجهزة الذكية، أندرويد بوكس، الهواتف، والحواسيب." },
        { question: "هل أحتاج إلى VPN؟", answer: "لا، خدمتنا آمنة ولا تتطلب VPN. لكن يمكنك استخدامه إذا رغبت." },
        { question: "ما هي سرعة الإنترنت المطلوبة؟", answer: "نوصي بسرعة 12 ميجابايت على الأقل لجودة 4K و 8 ميجابايت لجودة HD." }
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