import { motion } from 'motion/react';


import { Bolt, Mail, MessageCircle, HelpCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="mt-32 px-8 md:px-20 max-w-7xl mx-auto pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-surface-container-low p-12 rounded-xl flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 transform group-hover:rotate-12 transition-transform duration-700">
            <Bolt className="w-32 h-32 text-primary" />
          </div>
          <h3 className="text-3xl font-headline font-extrabold mb-4 relative z-10">Anında Kurulum</h3>
          <p className="text-on-surface-variant leading-relaxed mb-8 relative z-10">
            Ödemenizi takiben 5 dakika içerisinde bilgileriniz mail ve WhatsApp üzerinden iletilir. Beklemek yok, hemen izlemeye başla.
          </p>
          <div className="flex gap-4 relative z-10">
            <div className="bg-surface-container-highest px-4 py-2 rounded border border-outline-variant/20 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest">E-Posta</span>
            </div>
            <div className="bg-surface-container-highest px-4 py-2 rounded border border-outline-variant/20 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest">WhatsApp</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-surface-container-high p-12 rounded-xl flex flex-col items-center text-center justify-center border border-primary/10 shadow-[0_0_30px_rgba(255,231,146,0.05)]"
        >
          <HelpCircle className="w-12 h-12 text-primary mb-6" />
          <h3 className="text-3xl font-headline font-extrabold mb-4">Aklınızda Soru mu Var?</h3>
          <p className="text-on-surface-variant mb-8">
            Hangi paketin size uygun olduğuna karar veremediyseniz WhatsApp üzerinden uzman ekibimize danışabilirsiniz.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            href="#"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp'tan Sor
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
