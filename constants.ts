import { Content, Language } from './types';
import { Monitor, Zap, ShieldCheck, Globe, Smartphone, Headset } from 'lucide-react';

export const WHATSAPP_NUMBER = "212694843943";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const FEATURES_ICONS = [Monitor, Zap, ShieldCheck, Globe, Smartphone, Headset];

export const TRANSLATIONS: Record<Language, Content> = {
  [Language.EN]: {
    nav: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
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
    nav: {
      home: "Accueil",
      features: "Avantages",
      pricing: "Tarifs",
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
    nav: {
      home: "Home",
      features: "Caratteristiche",
      pricing: "Prezzi",
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
    features: {
      title: "Perché Scegliere RedStream?",
      items: [
        { title: "4K & 8K Ultra HD", desc: "Qualità dell'immagine cristallina." },
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
    nav: {
      home: "Inicio",
      features: "Características",
      pricing: "Precios",
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
    nav: {
      home: "الرئيسية",
      features: "المميزات",
      pricing: "الأسعار",
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