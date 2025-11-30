import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppBtn: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] transition-all hover:scale-110 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Support Online
      </span>
    </a>
  );
};

export default WhatsAppBtn;