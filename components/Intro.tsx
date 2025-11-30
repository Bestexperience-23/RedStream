import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

const Intro: React.FC<Props> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000; // Faster, smoother load

    const animFrame = requestAnimationFrame(function animate() {
      const now = Date.now();
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth progress
      const easeOutQuart = 1 - Math.pow(1 - p, 4);
      
      setProgress(easeOutQuart * 100);

      if (p < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 500);
      }
    });

    return () => {
        cancelAnimationFrame(animFrame);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-neutral-950 z-[100] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Center Logo */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-xl flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.4)] mb-6 animate-float">
            <Play className="text-white w-8 h-8 md:w-10 md:h-10 fill-current" />
        </div>
      </div>
      
      <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-white mb-8">
        RED<span className="text-red-500">STREAM</span>
      </h1>

      {/* Elegant Loader Bar */}
      <div className="w-64 h-1.5 bg-neutral-800 rounded-full overflow-hidden relative">
        <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="mt-4 text-neutral-500 text-xs font-medium tracking-widest uppercase">
        Loading Experience...
      </p>

    </div>
  );
};

export default Intro;