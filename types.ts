export enum Language {
  EN = 'EN',
  FR = 'FR',
  IT = 'IT',
  ES = 'ES',
  AR = 'AR'
}

export interface Content {
  nav: {
    home: string;
    features: string;
    pricing: string;
    contact: string;
    tryNow: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    status: string;
  };
  partners: {
    title: string;
  };
  features: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  pricing: {
    title: string;
    paymentTitle: string;
    plans: {
      name: string;
      price: string;
      period: string;
      features: string[];
      button: string;
      recommended?: boolean;
    }[];
  };
  support: {
    title: string;
    desc: string;
    button: string;
  };
  footer: {
    rights: string;
    quickLinks: string;
    legal: string;
  };
}