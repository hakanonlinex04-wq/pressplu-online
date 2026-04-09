import { motion, AnimatePresence } from 'motion/react';
import { Gift, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../siteSettings';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 1 }}
        className="fixed bottom-0 left-0 w-full z-[90] p-3 sm:p-4"
      >
        <div className="max-w-4xl mx-auto glass-overlay bg-[#0e0e0e]/80 border border-primary/30 rounded-2xl shadow-[0_-10px_40px_rgba(59,130,246,0.15)] flex items-center justify-between p-3 sm:px-6 relative overflow-hidden">
          
          {/* Animated Background Glow */}
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12 translate-x-[-100%]"
            style={{ width: '200%' }}
          />

          <div className="flex items-center gap-3 sm:gap-4 relative z-10 w-full">
            <div className="bg-primary/20 p-2 rounded-full hidden sm:block">
              <Gift className="w-6 h-6 text-primary" />
            </div>
            
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🔥</span>
                <span className="font-headline font-bold text-sm sm:text-base text-white">
                  Sınırlı Süre: 12 Ay Alanlara <span className="text-primary">+3 Ay Hediye!</span>
                </span>
              </div>
              <p className="text-xs text-on-surface-variant hidden md:block border-l border-outline-variant/30 pl-3">
                Bu fırsat kısa bir süre için geçerlidir. Kaçırmayın!
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient text-white font-extrabold px-3 sm:px-6 py-2 rounded-lg text-xs sm:text-sm flex items-center gap-1 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.4)] whitespace-nowrap"
              >
                Hemen Al <ChevronRight className="w-4 h-4 hidden sm:block" />
              </a>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-on-surface-variant hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
