import React from 'react';
import { Content } from '../types';
import { Play, CheckCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface Props {
  content: Content['hero'];
}

const Hero: React.FC<Props> = ({ content }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 pt-20">
      
      {/* Background Elements - Elegant & Subtle */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Soft Red Glow Top Center */}
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] bg-red-600/10 rounded-full blur-[120px]"></div>
        
        {/* Subtle Gradient Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Status Badge - Professional */}
        <div className="inline-flex items-center space-x-2 bg-neutral-900/50 border border-neutral-800 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm shadow-sm animate-fade-in-up">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-gray-300 text-xs font-semibold tracking-wide uppercase">{content.status}</span>
        </div>

        {/* Main Title - Clean & Bold */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1] animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          {content.title.split(' ')[0]} <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
            {content.title.split(' ').slice(1).join(' ')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
           {content.subtitle}
        </p>

        {/* CTA Buttons - Modern */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="group relative w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-bold text-sm tracking-wide rounded-lg transition-all hover:bg-red-700 hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:-translate-y-1"
          >
            <span className="flex items-center justify-center space-x-2">
              <Play size={18} fill="currentColor" />
              <span>{content.ctaPrimary}</span>
            </span>
          </a>

          <a 
            href="#pricing"
            className="group w-full sm:w-auto px-8 py-4 bg-neutral-900 border border-neutral-800 text-gray-300 font-bold text-sm tracking-wide rounded-lg hover:bg-neutral-800 hover:text-white transition-all flex items-center justify-center space-x-2"
          >
            <span>{content.ctaSecondary}</span>
          </a>
        </div>

        {/* Features Preview */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
          <div className="flex items-center space-x-2 text-gray-400">
            <CheckCircle className="text-red-500 w-5 h-5" />
            <span className="text-sm font-medium">4K Ultra HD</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <CheckCircle className="text-red-500 w-5 h-5" />
            <span className="text-sm font-medium">Anti-Freeze</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <CheckCircle className="text-red-500 w-5 h-5" />
            <span className="text-sm font-medium">99.9% Uptime</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;