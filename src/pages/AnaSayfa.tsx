import React, { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion';

import { Tv, Film, Trophy, Zap, Globe, Star, Play, Shield, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../siteSettings';

// --- Premium Features Components ---

function AnimatedCounter({ value, suffix = '' }: { value: number, suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { stiffness: 40, damping: 15 });
  const display = useTransform(spring, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const brands = ['NETFLIX', 'EXXEN', 'beIN SPORTS', 'DISNEY+', 'BLUTV', 'AMAZON PRIME', 'HBO MAX', 'SPOTIFY'];

const contentPosters = [
  { id: 1, img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80', title: 'Aksiyon & Bilim Kurgu' },
  { id: 2, img: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&q=80', title: 'Vizyon Filmleri' },
  { id: 3, img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&q=80', title: 'Canlı Spor' },
  { id: 4, img: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=500&q=80', title: 'Belgesel' },
  { id: 5, img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&q=80', title: 'Özel Platformlar' },
];

const testimonials = [
  { name: 'Ahmet Karaca.', text: 'Derbi maçlarında zerre donma olmadı. Görüntü kalitesi inanılmaz.', rating: 5 },
  { name: 'Selin Y.', text: 'Kurulumu WhatsApp üzerinden 3 dakikada hallettik. 4K Filmler muazzam.', rating: 5 },
  { name: 'Burak D.', text: 'Eskiden kullandığım IP firmalarının hepsini çizer geçer. VIP destek mükemmel.', rating: 5 },
  { name: 'Elif U.', text: 'Smart TV uygulamasında çok akıcı çalışıyor. Kesinlikle tavsiye ederim.', rating: 5 },
];

const features = [
  { icon: Tv, title: '1200+ Canlı Kanal', desc: 'Yerli ve yabancı binlerce kanal kesintisiz yayında' },
  { icon: Film, title: '10K+ Film & Dizi', desc: 'Güncel ve klasik içeriklerin tamamı sizin için' },
  { icon: Trophy, title: 'Özel Spor Kanalları', desc: 'Tüm maçlar, ligler ve spor etkinlikleri canlı' },
  { icon: Zap, title: 'Anında Kurulum', desc: '5 dakika içinde izlemeye başlayın, beklemeniz yok' },
  { icon: Globe, title: 'Cihaz Kilidi Yok', desc: 'TV, telefon, tablet, PC — istediğinizde izleyin' },
  { icon: Shield, title: '7/24 VIP Destek', desc: 'WhatsApp üzerinden anlık teknik destek alın' },
];

const stats = [
  { num: 15000, suffix: '+', label: 'Mutlu Müşteri' },
  { num: 1200, suffix: '+', label: 'Canlı Kanal' },
  { num: 99, suffix: '.9%', label: 'Uptime Garantisi' },
  { num: 5, suffix: 'dk', label: 'Ortalama Kurulum' },
];

export default function AnaSayfa() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover opacity-20 scale-110"
            autoPlay loop muted playsInline
            style={{ filter: 'blur(12px)', playbackRate: 0.5 } as React.CSSProperties}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-playing-football-with-a-shiny-ball-303-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'var(--glass-bg)', opacity: 0.5 }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-[1400px] mx-auto flex items-center justify-between px-4">
          
          {/* Left Floating Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, y: [0, -25, 0] }}
            transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.8 }, x: { duration: 1 } }}
            className="hidden lg:block w-[280px] xl:w-[350px] h-[380px] xl:h-[480px] relative flex-shrink-0 z-20 -mt-10"
          >
            <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full mix-blend-screen"></div>
            <img src="/floating-left.png" alt="Premium Sports TV" className="w-full h-full object-cover rounded-3xl border-[3px] border-primary/30 shadow-[0_0_60px_rgba(203,163,40,0.4)] -rotate-6 relative z-10 transform-gpu" />
          </motion.div>

          {/* Center Text Body */}
          <div className="max-w-4xl mx-auto relative z-30">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block gold-gradient text-black text-xs font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            🏆 Türkiye'nin #1 Premium IPTV Platformu
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-headline font-extrabold leading-tight mb-6 tracking-tighter text-on-surface">
            Sınırsız İzleme<br />
            <span className="text-primary italic">Deneyimi Başlıyor.</span>
          </h1>

          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            1200'den fazla kanal, 10.000+ film ve dizi, spor, belgesel ve daha fazlası. Hiç donmadan, hiç beklemeden.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href={siteConfig.whatsappLink}
              target="_blank" rel="noopener noreferrer"
              className="gold-gradient text-black font-extrabold px-8 py-4 rounded-xl text-lg shadow-lg"
            >
              Ücretsiz Test Al →
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/paketler"
                className="border-2 border-primary text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-primary hover:text-black transition-all"
              >
                Paketlere Bak
              </Link>
            </motion.div>
          </div>
          </div>

          {/* Right Floating Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, y: [0, 20, 0] }}
            transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.8 }, x: { duration: 1 } }}
            className="hidden lg:block w-[280px] xl:w-[350px] h-[380px] xl:h-[480px] relative flex-shrink-0 z-20 mt-10"
          >
            <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full mix-blend-screen"></div>
            <img src="/floating-right.png" alt="Premium Movies Mobile" className="w-full h-full object-cover rounded-3xl border-[3px] border-primary/30 shadow-[0_0_60px_rgba(203,163,40,0.4)] rotate-6 relative z-10 transform-gpu" />
          </motion.div>

        </motion.div>
      </section>

      {/* 1. Infinite Logo Marquee */}
      <div className="overflow-hidden w-full bg-surface-container-high/30 border-y border-outline-variant/10 py-6">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="mx-16 font-headline font-extrabold text-2xl text-on-surface-variant opacity-40">
              {brand}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-surface-container-low border border-outline-variant/10"
            >
              <div className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-2">
                <AnimatedCounter value={stat.num} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-on-surface-variant font-bold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-headline font-extrabold text-center mb-4"
        >
          Neden <span className="text-primary">{siteConfig.brandName}</span>?
        </motion.h2>
        <p className="text-center text-on-surface-variant mb-12">Premium içerik, premium kalite, premium fiyat.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 flex gap-4 items-start group"
            >
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 shadow group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg mb-1">{f.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-2xl border border-primary/20 shadow-[0_0_60px_rgba(203,163,40,0.1)] relative overflow-hidden bg-surface-container-low"
        >
          <Star className="absolute top-4 right-6 w-24 h-24 text-primary/5" />
          <Play className="absolute bottom-4 left-6 w-24 h-24 text-primary/5" />
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold mb-4 relative z-10">Hemen Başlamaya Hazır mısın?</h2>
          <p className="text-on-surface-variant mb-8 relative z-10">Taahhüt yok, gizli ücret yok. Sadece saf eğlence.</p>
          <motion.a
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            href={siteConfig.whatsappLink}
            target="_blank" rel="noopener noreferrer"
            className="gold-gradient text-black font-extrabold px-10 py-4 rounded-xl text-lg inline-block shadow-lg"
          >
            WhatsApp ile Başla 🚀
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
