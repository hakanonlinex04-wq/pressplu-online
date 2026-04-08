import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Star } from 'lucide-react';
import { config } from '../App';



const plans = [
  {
    name: "3 Aylık Paket",
    description: "Başlangıç seviyesi eğlence",
    price: "375",
    period: "/ 3 Ay",
    features: [
      { text: "Tüm Kanallar Açık", included: true },
      { text: "4K & HDR İçerik", included: true },
      { text: "Aynı Anda 2 Ekran", included: false },
    ],
    featured: false
  },
  {
    name: "1 Yıllık Full Paket",
    description: "Eksiksiz cinematic deneyimi",
    price: "975",
    period: "/ 12 Ay",
    features: [
      { text: "VOD Kütüphanesi (10k+ Film)", included: true, highlight: true },
      { text: "Özel Spor Kanalları", included: true },
      { text: "7/24 Teknik Destek", included: true },
      { text: "Cihaz Kilidi Yok", included: true },
    ],
    featured: true
  },
  {
    name: "6 Aylık Paket",
    description: "Dengeli eğlence süresi",
    price: "675",
    period: "/ 6 Ay",
    features: [
      { text: "Tüm Kanallar Açık", included: true },
      { text: "HD & UHD Yayın", included: true },
      { text: "Hızlı Kurulum", included: true },
    ],
    featured: false
  }
];

export default function Pricing() {
  return (
    <section className="px-8 md:px-20 max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col p-8 rounded-xl border transition-all duration-500 group ${
              plan.featured 
                ? 'bg-surface-container-high border-primary/40 scale-105 shadow-[0_0_40px_rgba(255,231,146,0.1)] z-10' 
                : 'bg-surface-container-low border-outline-variant/10 hover:scale-[1.02]'
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-black px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest">
                En Çok Tercih Edilen
              </div>
            )}
            
            <div className="mb-8">
              <h3 className={`font-headline font-bold text-xl mb-2 ${plan.featured ? 'text-primary' : 'text-on-surface'}`}>
                {plan.name}
              </h3>
              <p className="text-on-surface-variant text-sm">{plan.description}</p>
            </div>

            <div className="mb-8 flex items-baseline gap-1">
              <span className={`font-headline font-extrabold ${plan.featured ? 'text-5xl' : 'text-4xl'} text-on-surface`}>
                {plan.price}
              </span>
              <span className="text-primary font-bold">₺</span>
              <span className="text-on-surface-variant text-sm ml-2">{plan.period}</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className={`flex items-center gap-3 text-sm ${!feature.included ? 'text-on-surface-variant line-through' : ''}`}>
                  {feature.highlight ? (
                    <Star className="w-5 h-5 text-primary fill-primary" />
                  ) : feature.included ? (
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  ) : (
                    <XCircle className="w-5 h-5 text-outline-variant" />
                  )}
                  <span className={feature.highlight ? 'font-semibold' : ''}>{feature.text}</span>
                </li>
              ))}
            </ul>

            <motion.a
              href={config.whatsappLink}

              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-lg font-bold transition-all text-center block ${
                plan.featured 
                  ? 'gold-gradient text-black font-extrabold' 
                  : 'bg-surface-container-highest text-on-surface border border-primary/20 hover:bg-primary hover:text-black'
              }`}
            >
              {plan.featured ? 'AVANTAJI YAKALA' : 'Hemen Başla'}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
