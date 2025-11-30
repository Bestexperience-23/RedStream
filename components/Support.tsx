import React from 'react';
import { Content } from '../types';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface Props {
  content: Content['support'];
}

const Support: React.FC<Props> = ({ content }) => {
  return (
    <section id="support" className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <MessageCircle className="text-red-500 w-8 h-8" />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-6">
          {content.title}
        </h2>
        
        <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          {content.desc}
        </p>

        <a 
          href={WHATSAPP_LINK}
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center space-x-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 shadow-lg"
        >
          <MessageCircle size={24} />
          <span>{content.button}</span>
        </a>
      </div>
    </section>
  );
};

export default Support;