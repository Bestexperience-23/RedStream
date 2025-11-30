import React from 'react';
import { Content } from '../types';
import { Check, Star } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import PaymentMethods from './PaymentMethods';

interface Props {
  content: Content['pricing'];
}

const Pricing: React.FC<Props> = ({ content }) => {
  return (
    <section id="pricing" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {content.title}
          </h2>
          <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">
            Transparent Pricing • No Hidden Fees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {content.plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                plan.recommended 
                  ? 'bg-neutral-900 border-red-600 shadow-2xl shadow-red-900/10 scale-105 z-10' 
                  : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center shadow-lg">
                  <Star size={12} className="mr-1 fill-white" /> BEST VALUE
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-400 mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-gray-500 ml-2 text-sm font-medium">/ {plan.period}</span>
                </div>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <div className={`p-1 rounded-full mr-3 ${plan.recommended ? 'bg-red-600/20' : 'bg-neutral-800'}`}>
                        <Check size={14} className={`${plan.recommended ? 'text-red-500' : 'text-gray-400'}`} />
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noreferrer"
                className={`w-full py-4 px-4 rounded-xl font-bold text-center transition-all text-sm tracking-wide ${
                  plan.recommended 
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20' 
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {plan.button}
              </a>
            </div>
          ))}
        </div>

        <PaymentMethods content={content} />
      </div>
    </section>
  );
};

export default Pricing;