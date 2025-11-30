import React from 'react';
import { Content } from '../types';
import { Play } from 'lucide-react';

interface Props {
  content: Content['showcase'];
}

const ContentShowcase: React.FC<Props> = ({ content }) => {
  // Updated Real Official Posters from TMDB (Reliable High-Res Links)
  const movies = [
    { id: 1, title: "Dune: Part Two", img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", type: "4K HDR" },
    { id: 2, title: "Avatar: Way of Water", img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", type: "IMAX 3D" },
    { id: 3, title: "John Wick: Chapter 4", img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gh2bmprLtUQ8oXCSluzfQAcY0co.jpg", type: "ACTION" },
    { id: 4, title: "Oppenheimer", img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", type: "DRAMA" },
  ];

  const series = [
    { id: 5, title: "House of the Dragon", img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7QMsOTMUswlwxJP0rTTZferzVVc.jpg", type: "S2 EP1" },
    { id: 6, title: "The Last of Us", img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/u3bZgnGQ9T01sWNhyve4z0wH0Hl.jpg", type: "HBO MAX" },
    { id: 7, title: "Stranger Things 5", img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", type: "NETFLIX" },
    { id: 8, title: "Peaky Blinders", img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg", type: "COMPLETE" },
  ];

  return (
    <section className="py-20 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {content.title}
          </h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-wide">
            {content.subtitle}
          </p>
        </div>

        {/* Movies Row */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-1 h-6 bg-red-600 rounded-full"></div>
            <h3 className="text-xl font-bold text-white">{content.category_movies}</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {movies.map((item) => (
              <div key={item.id} className="group relative aspect-[2/3] rounded-xl overflow-hidden cursor-pointer shadow-lg shadow-black/50 border border-neutral-800 hover:border-red-600/50 transition-colors">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm shadow-sm z-10">
                  {item.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 p-4 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-bold text-lg mb-1 leading-tight drop-shadow-md">{item.title}</h4>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                     <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                        <Play size={14} className="fill-white text-white ml-0.5" />
                     </div>
                     <span className="text-xs font-medium text-gray-300">Watch Now</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Series Row */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
             <div className="w-1 h-6 bg-red-600 rounded-full"></div>
             <h3 className="text-xl font-bold text-white">{content.category_series}</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {series.map((item) => (
              <div key={item.id} className="group relative aspect-[2/3] rounded-xl overflow-hidden cursor-pointer shadow-lg shadow-black/50 border border-neutral-800 hover:border-red-600/50 transition-colors">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                 <div className="absolute top-3 right-3 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-sm shadow-sm z-10">
                  {item.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 p-4 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-bold text-lg mb-1 leading-tight drop-shadow-md">{item.title}</h4>
                   <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                     <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Play size={14} className="fill-black text-black ml-0.5" />
                     </div>
                     <span className="text-xs font-medium text-gray-300">Stream</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContentShowcase;