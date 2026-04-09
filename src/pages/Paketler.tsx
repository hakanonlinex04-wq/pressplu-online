import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';


import { CheckCircle2, XCircle, Star, Zap, MessageCircle, Tv2, Smartphone, Users, Trophy, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { siteConfig } from '../siteSettings';

function TiltCard({ children, className, featured }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!featured) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: featured ? rotateY : 0,
        rotateX: featured ? rotateX : 0,
        transformStyle: "preserve-3d"
      }}
      className={className}
    >
      <div style={{ transform: featured ? "translateZ(30px)" : "none" }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}

const plans = [
  {
    name: "3 Aylık Paket",
    description: "Başlangıç seviyesi eğlence",
    price: "600",
    period: "/ 3 Ay",
    badge: null,
    features: [
      { text: "1200+ Canlı Kanal", included: true },
      { text: "Full HD Yayın", included: true },
      { text: "Donma Karşıtı Anti-Freeze", included: true },
      { text: "4K HDR İçerik", included: false },
      { text: "VOD Film & Dizi Arşivi", included: false },
      { text: "7/24 VIP WhatsApp Destek", included: false },
      { text: "Eş Zamanlı Çoklu Ekran", included: false },
    ],
    featured: false,
  },
  {
    name: "1 Yıllık Full Paket",
    description: "Eksiksiz cinematic deneyim",
    price: "1500",
    period: "/ 12 Ay",
    badge: "⭐ En Çok Tercih Edilen",
    features: [
      { text: "1200+ Canlı Kanal", included: true },
      { text: "4K HDR Yayın Kalitesi", included: true, highlight: true },
      { text: "Donma Karşıtı Anti-Freeze", included: true },
      { text: "VOD Film & Dizi (10K+)", included: true, highlight: true },
      { text: "7/24 VIP WhatsApp Destek", included: true, highlight: true },
      { text: "Eş Zamanlı 2 Ekran", included: true },
      { text: "Cihaz Kilidi Yok", included: true },
    ],
    featured: true,
  },
  {
    name: "6 Aylık Paket",
    description: "Dengeli eğlence süresi",
    price: "1000",
    period: "/ 6 Ay",
    badge: "🔥 Popüler Seçim",
    features: [
      { text: "1200+ Canlı Kanal", included: true },
      { text: "FHD & UHD Yayın", included: true },
      { text: "Donma Karşıtı Anti-Freeze", included: true },
      { text: "Sınırlı VOD Arşivi", included: true },
      { text: "7/24 WhatsApp Destek", included: true },
      { text: "4K HDR İçerik", included: false },
      { text: "Eş Zamanlı Çoklu Ekran", included: false },
    ],
    featured: false,
  },
];

const faqs = [
  { q: 'Nasıl kurulum yapılır?', a: 'Satın alma sonrası 5 dakika içinde e-posta ve WhatsApp üzerinden kurulum bilgileriniz iletilir. Tüm cihazlarla uyumludur.' },
  { q: 'Yayınlar donar mı?', a: 'Anti-Freeze sistemi sayesinde donma sorunları minimuma indirilmiştir. 99.9% uptime garantisi sunuyoruz.' },
  { q: 'Hangi cihazlarda çalışır?', a: 'Smart TV, Android, iOS, PC, Mac, Amazon Fire Stick ve tüm IPTV destekli cihazlarda çalışır.' },
  { q: 'Deneme süresi var mı?', a: 'Evet! WhatsApp üzerinden bizimle iletişime geçerek ücretsiz test paketi talep edebilirsiniz.' },
  { q: 'Ödeme yöntemleri nelerdir?', a: 'Banka havalesi, EFT, Papara ve kripto para ile ödeme yapabilirsiniz.' },
];

function PackageQuiz() {
  const [step, setStep] = useState(0);

  const handleAnswer = () => {
    if (step === 1) setStep(2);
    else if (step === 2) {
      setStep(3);
      setTimeout(() => setStep(4), 2500);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-surface-container-high/50 border border-primary/30 rounded-3xl p-8 max-w-3xl mx-auto mb-20 relative overflow-hidden text-center shadow-[0_0_40px_rgba(203,163,40,0.1)]">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }}>
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-headline font-extrabold mb-2">Hangi Paket Bana Uygun?</h2>
            <p className="text-on-surface-variant mb-6">Yapay zeka asistanımız 2 soruda size en uygun paketi bulsun.</p>
            <button onClick={() => setStep(1)} className="gold-gradient text-black font-bold px-8 py-3 rounded-xl hover:scale-105 transition-transform">Testi Başlat</button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            <h2 className="text-xl font-headline font-bold mb-6">Evde TV izleme alışkanlığınız nasıldır?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button onClick={handleAnswer} className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/50 hover:bg-primary/5 transition-colors flex flex-col items-center gap-3">
                <Trophy className="w-8 h-8 text-on-surface" /> <span>Sadece Maç İzlerim</span>
              </button>
              <button onClick={handleAnswer} className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/50 hover:bg-primary/5 transition-colors flex flex-col items-center gap-3">
                <Users className="w-8 h-8 text-on-surface" /> <span>Tüm Aile İzleriz (Film+Dizi)</span>
              </button>
              <button onClick={handleAnswer} className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/50 hover:bg-primary/5 transition-colors flex flex-col items-center gap-3">
                <Tv2 className="w-8 h-8 text-on-surface" /> <span>Sadece Zapping Yaparım</span>
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            <h2 className="text-xl font-headline font-bold mb-6">Yayınları en çok nerede izleyeceksiniz?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
              <button onClick={handleAnswer} className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/50 hover:bg-primary/5 transition-colors flex flex-col items-center gap-3">
                <Tv2 className="w-8 h-8 text-on-surface" /> <span>Smart TV / Apple TV</span>
              </button>
              <button onClick={handleAnswer} className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/50 hover:bg-primary/5 transition-colors flex flex-col items-center gap-3">
                <Smartphone className="w-8 h-8 text-on-surface" /> <span>Telefon / Tablet / PC</span>
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Loader2 className="w-12 h-12 text-primary mx-auto mb-4 animate-spin" />
            <h2 className="text-xl font-headline font-bold mb-2">Analiz Ediliyor...</h2>
            <p className="text-on-surface-variant">Cevaplarınız işleniyor, veri tabanı taranıyor.</p>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="step4" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <Star className="w-16 h-16 text-primary fill-primary mx-auto mb-4 relative z-10" />
            <h2 className="text-3xl font-headline font-extrabold mb-2 relative z-10">Analiz Tamamlandı!</h2>
            <p className="text-on-surface-variant mb-6 text-lg relative z-10">İzleme alışkanlıklarınız ve donanımınıza göre sizin için <span className="font-bold text-primary">açık ara en mantıklı</span> ve kârlı seçim:</p>
            <div className="text-4xl md:text-5xl font-black text-on-surface mb-8 relative z-10 drop-shadow-md">1 Yıllık Full Paket 🎉</div>
            <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} className="gold-gradient text-black font-extrabold px-10 py-4 rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(203,163,40,0.5)] relative z-10">
              Paketi İncele ↓
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Paketler() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="inline-block gold-gradient text-black text-xs font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Şeffaf Fiyatlandırma
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold mb-4">
            Size Uygun <span className="text-primary italic">Paketi</span> Seçin
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
            Taahhüt yok, gizli ücret yok. Sadece saf eğlence.
          </p>
        </motion.div>

        {/* Quiz Section */}
        <PackageQuiz />

        {/* Plans */}
        <div style={{ perspective: "1000px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
          {plans.map((plan, index) => (
            <TiltCard
              key={plan.name}
              featured={plan.featured}
              className={`relative flex flex-col p-8 rounded-2xl border transition-colors duration-500 group ${
                plan.featured
                  ? 'bg-surface-container-high border-primary/40 shadow-[0_0_60px_rgba(203,163,40,0.12)] z-10'
                  : 'bg-surface-container-low border-outline-variant/10'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest whitespace-nowrap ${plan.featured ? 'gold-gradient text-black' : 'bg-surface-container-highest text-on-surface border border-outline-variant/20'}`}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-headline font-bold text-xl mb-1 ${plan.featured ? 'text-primary' : 'text-on-surface'}`}>
                  {plan.name}
                </h3>
                <p className="text-on-surface-variant text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className={`font-headline font-extrabold ${plan.featured ? 'text-5xl' : 'text-4xl'} text-on-surface`}>
                  {plan.price}
                </span>
                <span className="text-primary font-bold text-xl">₺</span>
                <span className="text-on-surface-variant text-sm ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className={`flex items-center gap-3 text-sm ${!feature.included ? 'text-on-surface-variant line-through opacity-50' : ''}`}>
                    {feature.highlight ? (
                      <Star className="w-5 h-5 text-primary fill-primary flex-shrink-0" />
                    ) : feature.included ? (
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-outline-variant flex-shrink-0" />
                    )}
                    <span className={feature.highlight ? 'font-semibold' : ''}>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={siteConfig.whatsappLink}
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-extrabold transition-all text-center block ${
                  plan.featured
                    ? 'gold-gradient text-black'
                    : 'bg-surface-container-highest text-on-surface border border-primary/20 hover:bg-primary hover:text-black'
                }`}
              >
                {plan.featured ? '🚀 AVANTAJI YAKALA' : 'Hemen Başla'}
              </motion.a>
            </TiltCard>
          ))}
        </div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-headline font-bold text-center mb-10">Sıkça Sorulan Sorular</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group p-6 rounded-xl bg-surface-container-low border border-outline-variant/10 cursor-pointer"
              >
                <summary className="font-headline font-bold text-base flex justify-between items-center list-none">
                  <span>{faq.q}</span>
                  <Zap className="w-4 h-4 text-primary flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-on-surface-variant text-sm mt-3 leading-relaxed">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </motion.div>

        {/* WhatsApp Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-10 rounded-2xl text-center border border-[#25D366]/30 bg-surface-container-low"
        >
          <MessageCircle className="w-12 h-12 text-[#25D366] mx-auto mb-4" />
          <h3 className="text-2xl font-headline font-extrabold mb-2">Hâlâ kararsız mısınız?</h3>
          <p className="text-on-surface-variant mb-6">Uzman ekibimiz size en uygun paketi seçmenize yardımcı olsun.</p>
          <a
            href={siteConfig.whatsappLink}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)]"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp'tan Danış
          </a>
        </motion.div>
      </div>
    </div>
  );
}
