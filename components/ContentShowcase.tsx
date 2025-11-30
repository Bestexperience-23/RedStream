import React from 'react';
import { Content } from '../types';
import { Play } from 'lucide-react';

interface Props {
  content: Content['showcase'];
}

const ContentShowcase: React.FC<Props> = ({ content }) => {
  // Using high quality abstract/cinematic placeholders to represent latest content
  const movies = [
    { id: 1, title: "Cyber Action", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop", type: "4K HDR" },
    { id: 2, title: "Speed Racing", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop", type: "LIVE" },
    { id: 3, title: "Dark World", img: "https://images.unsplash.com/photo-1517604931442-71053e6e2619?q=80&w=800&auto=format&fit=crop", type: "FHD" },
    { id: 4, title: "Future City", img: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?q=80&w=800&auto=format&fit=crop", type: "4K" },
  ];

  const series = [
    { id: 5, title: "The Stadium", img: "https://images.unsplash.com/photo-1596727147705-54a9d6ed27e6?q=80&w=800&auto=format&fit=crop", type: "S4 EP5" },
    { id: 6, title: "Retro Vibes", img: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?q=80&w=800&auto=format&fit=crop", type: "New Season" },
    { id: 7, title: "Cinema Life", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop", type: "Trending" },
    { id: 8, title: "Wild Nature", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop", type: "Docu" },
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
              <div key={item.id} className="group relative aspect-[2/3] md:aspect-video rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-black/50">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                  {item.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h4 className="text-white font-bold truncate mb-1">{item.title}</h4>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    <Play size={14} className="fill-white text-white" />
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
              <div key={item.id} className="group relative aspect-[2/3] md:aspect-video rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-black/50">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 brightness-75 group-hover:brightness-100"
                />
                 <div className="absolute top-2 right-2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">
                  {item.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h4 className="text-white font-bold truncate mb-1">{item.title}</h4>
                  <div className="w-8 h-8 rounded-full bg-red-600 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    <Play size={14} className="fill-white text-white" />
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