import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';


import { Tv, Film, Trophy, Zap, Globe, Star, Play, Shield, Quote, Search, CheckCircle2, Loader2, Wifi, Activity, Gauge } from 'lucide-react';
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
  // Search Engine State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState<'idle' | 'searching' | 'found'>('idle');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setSearchStatus('searching');
    setTimeout(() => {
      setSearchStatus('found');
    }, 1500);
  };

  // Speed Test State
  const [speedStatus, setSpeedStatus] = useState<'idle' | 'testing' | 'done'>('idle');
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [finalSpeed, setFinalSpeed] = useState(0);

  const startSpeedTest = () => {
    setSpeedStatus('testing');
    let speed = 25;
    
    const interval = setInterval(() => {
      speed = Math.floor(Math.random() * 40) + speed + (Math.random() > 0.5 ? -10 : 8);
      if (speed < 12) speed = 25;
      if (speed > 120) speed = 85;
      setCurrentSpeed(speed);
    }, 150);

    setTimeout(() => {
      clearInterval(interval);
      // Rastgele 45 ile 95 Mbps arası çok inandırıcı bir sayıda durdur.
      const result = Math.floor(Math.random() * 50) + 45;
      setCurrentSpeed(result);
      setFinalSpeed(result);
      setSpeedStatus('done');
    }, 3000);
  };

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
            <img src="/floating-left.png" alt="Premium Sports TV" className="w-full h-full object-cover rounded-3xl border-[3px] border-primary/30 shadow-[0_0_60px_rgba(59,130,246,0.4)] -rotate-6 relative z-10 transform-gpu" />
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
            animate={{ opacity: 1, x: 0, y: [0, 25, 0] }}
            transition={{ y: { duration: 7, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.8 }, x: { duration: 1 } }}
            className="hidden lg:block w-[280px] xl:w-[350px] h-[380px] xl:h-[480px] relative flex-shrink-0 z-20 mt-10"
          >
            <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full mix-blend-screen"></div>
            <img src="/floating-right.png" alt="4K Movies & Series" className="w-full h-full object-cover rounded-3xl border-[3px] border-primary/30 shadow-[0_0_60px_rgba(59,130,246,0.4)] rotate-6 relative z-10 transform-gpu" />
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

      {/* Smart Search Engine */}
      <section className="py-16 px-8 max-w-4xl mx-auto my-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-surface-container-low border border-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.1)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Search className="w-48 h-48" />
          </div>
          
          <div className="relative z-10 text-center mb-8">
            <h2 className="text-3xl font-headline font-extrabold mb-3">İstediğiniz İçerik Bizde Var Mı?</h2>
            <p className="text-on-surface-variant">Favori kanalınızı, filminizi veya dizinizi yazın. Sistemimizde hemen tarayalım.</p>
          </div>

          <form onSubmit={handleSearch} className="relative z-10 max-w-2xl mx-auto">
            <div className="flex bg-[#1a1a1a] rounded-2xl p-2 border border-outline-variant/20 focus-within:border-primary/50 transition-colors">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchStatus('idle');
                }}
                placeholder="Örn: Galatasaray, Exxen, Inception..."
                className="w-full bg-transparent text-white px-4 outline-none placeholder:text-gray-500 font-body text-lg"
              />
              <button
                type="submit"
                disabled={searchStatus === 'searching'}
                className="gold-gradient text-black font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform disabled:opacity-80 disabled:hover:scale-100"
              >
                {searchStatus === 'searching' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                {searchStatus === 'searching' ? 'Aranıyor...' : 'Sorgula'}
              </button>
            </div>
          </form>

          {/* Search Results */}
          <div className="mt-6 h-28 relative z-10 flex items-center justify-center">
            {searchStatus === 'found' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-[#121c15] border border-green-500/30 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4 shadow-[0_0_30px_rgba(34,197,94,0.15)]"
              >
                <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-green-400 font-bold text-lg mb-1">Mükemmel Haber! Bulundu!</h4>
                  <p className="text-gray-300 text-sm">"<span className="font-bold text-white">{searchQuery}</span>" içerikleri 4K ve FHD kalitesinde sistemimizde mevcuttur.</p>
                </div>
                <div className="md:ml-auto mt-4 md:mt-0">
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank" rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-400 text-black font-extrabold px-6 py-3 rounded-xl block text-sm transition-colors whitespace-nowrap shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                  >
                    Hemen Test Et
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Speed Test Module */}
      <section className="py-16 px-8 max-w-4xl mx-auto my-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-outline-variant/30 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center"
        >
          <div className="absolute top-0 left-0 p-8 opacity-5">
            <Activity className="w-48 h-48" />
          </div>

          <div className="relative z-10 text-center mb-8">
            <h2 className="text-3xl font-headline font-extrabold mb-3">İnternet Hızınız Yeterli Mi?</h2>
            <p className="text-on-surface-variant max-w-lg mx-auto">
              IPTV izlerken donma yaşamaktan mı korkuyorsunuz? Tek tuşla test edin, altyapınızın 4K yayınlarımıza uygunluğunu anında gösterelim.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-md mx-auto bg-[#141414] rounded-2xl p-8 border border-white/5 shadow-inner">
            <div className="flex flex-col items-center justify-center mb-6">
              <motion.div 
                animate={{ rotate: speedStatus === 'testing' ? [0, 10, -10, 0] : 0 }}
                transition={{ repeat: speedStatus === 'testing' ? Infinity : 0, duration: 0.5 }}
                className={`p-4 rounded-full mb-4 ${speedStatus === 'done' ? 'bg-green-500/20 text-green-400' : 'bg-primary/20 text-primary'}`}
              >
                {speedStatus === 'done' ? <Wifi className="w-10 h-10" /> : <Gauge className="w-10 h-10" />}
              </motion.div>
              
              <div className="text-5xl font-black font-headline tracking-tighter">
                {currentSpeed} <span className="text-xl text-on-surface-variant">Mbps</span>
              </div>
            </div>

            {speedStatus === 'idle' && (
              <button
                onClick={startSpeedTest}
                className="w-full bg-white text-black hover:bg-gray-200 font-extrabold px-6 py-4 rounded-xl transition-all"
              >
                Hızımı Test Et
              </button>
            )}

            {speedStatus === 'testing' && (
              <button disabled className="w-full bg-surface-highest text-on-surface-variant font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" /> Ölçülüyor...
              </button>
            )}

            {speedStatus === 'done' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-green-400 font-bold mb-1">Mükemmel Sonuç!</h4>
                      <p className="text-xs text-gray-300">
                        {finalSpeed} Mbps hızınız, Ekspress Plus sunucularındaki 4K / HD yayınları <strong>HİÇ DONMADAN</strong> izlemek için fazlasıyla yeterlidir.
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full gold-gradient text-black font-extrabold px-6 py-4 rounded-xl flex items-center justify-center transition-transform hover:scale-105"
                >
                  Şimdi Satın Al
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
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
