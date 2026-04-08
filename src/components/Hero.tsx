import { motion } from 'motion/react';
import { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ağır çekim etkisi vermek için oynatma hızını yarıya düşürüyoruz
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  return (
    <section className="relative h-[500px] flex items-center overflow-hidden px-8 md:px-20 mb-16">
      <div className="absolute inset-0 z-0 overflow-hidden bg-background">
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover filter blur-[12px] opacity-30 scale-110 grayscale-[30%]"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-playing-football-with-a-shiny-ball-303-large.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Frosted overlay that adapts to both themes via CSS variables */}
        <div className="absolute inset-0 backdrop-blur-[8px]" style={{ background: 'var(--glass-bg)', opacity: 0.5 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-tertiary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block"
        >
          Premium Yayın Deneyimi
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-tight mb-6 tracking-tighter"
        >
          Sizin İçin En Uygun <span className="text-primary italic">Planı Seçin.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-on-surface-variant text-lg max-w-2xl leading-relaxed"
        >
          Binlerce kanal, en yeni filmler ve kesintisiz spor keyfi. Taahhüt yok, gizli ücret yok. Sadece saf eğlence.
        </motion.p>
      </div>
    </section>
  );
}
