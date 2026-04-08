import React, { useState } from 'react';
import { motion } from 'motion';

import { MessageCircle, Mail, Clock, MapPin, Send } from 'lucide-react';
import { siteConfig } from '../siteSettings';

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    desc: '7/24 anlık destek',
    value: siteConfig.whatsappNumber,
    href: siteConfig.whatsappLink,
    color: '#25D366',
    btn: 'WhatsApp\'tan Yaz',
  },
  {
    icon: Mail,
    title: 'E-Posta',
    desc: 'Detaylı sorularınız için',
    value: siteConfig.contactEmail,
    href: `mailto:${siteConfig.contactEmail}`,
    color: '#cba328',
    btn: 'E-Posta Gönder',
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    desc: 'Her gün aktifiz',
    value: '7/24 - 365 Gün',
    href: null,
    color: '#8b5cf6',
    btn: null,
  },
];

export default function Iletisim() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Merhaba, ben ${form.name}.\nTelefon: ${form.phone}\n\n${form.message}`);
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-8 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <span className="inline-block gold-gradient text-black text-xs font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
          Bize Ulaşın
        </span>
        <h1 className="text-4xl md:text-6xl font-headline font-extrabold mb-4">
          Buradayız, <span className="text-primary italic">Hazırız</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
          Sorularınız, önerileriniz veya destek talepleriniz için bize istediğiniz kanaldan ulaşın.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {contactMethods.map((method, i) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 flex flex-col items-center text-center group"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform"
              style={{ background: method.color + '22', border: `1.5px solid ${method.color}44` }}
            >
              <method.icon className="w-8 h-8" style={{ color: method.color }} />
            </div>
            <h3 className="font-headline font-bold text-xl mb-1">{method.title}</h3>
            <p className="text-on-surface-variant text-sm mb-3">{method.desc}</p>
            <p className="font-bold text-on-surface mb-4">{method.value}</p>
            {method.href && method.btn && (
              <a
                href={method.href}
                target="_blank" rel="noopener noreferrer"
                className="mt-auto px-6 py-2.5 rounded-xl text-sm font-bold transition-all text-white"
                style={{ background: method.color }}
              >
                {method.btn}
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-headline font-extrabold mb-3">Mesaj Gönderin</h2>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            Formu doldurun, mesajınız otomatik olarak WhatsApp üzerinden ekibimize iletilsin.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2 text-on-surface">Adınız</label>
              <input
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Adınızı girin"
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-high text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-on-surface">Telefon</label>
              <input
                required
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                placeholder="+90 5__ ___ __ __"
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-high text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-on-surface">Mesajınız</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Sorunuzu veya talebinizi yazın..."
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-high text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-xl font-extrabold flex items-center justify-center gap-2 transition-all ${sent ? 'bg-[#25D366] text-white' : 'gold-gradient text-black'}`}
            >
              <Send className="w-5 h-5" />
              {sent ? '✓ WhatsApp\'a Yönlendirildi!' : 'WhatsApp\'tan Gönder'}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10">
            <h3 className="font-headline font-bold text-xl mb-6">Neden Bizi Seçmelisiniz?</h3>
            {[
              '✅ 15.000+ memnun müşteri',
              '✅ 5 dakika içinde aktifleştirme',
              '✅ 7/24 anlık WhatsApp desteği',
              '✅ %99.9 uptime garantisi',
              '✅ Taahhütsüz ve esnek paketler',
              '✅ Tüm cihazlarla uyumluluk',
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="text-on-surface-variant text-sm py-2 border-b border-outline-variant/10 last:border-0"
              >
                {item}
              </motion.p>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-low border border-primary/20 flex items-center gap-4">
            <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <p className="font-bold text-sm">Türkiye Genelinde Hizmet</p>
              <p className="text-on-surface-variant text-xs mt-1">Tüm şehirlere ve yurt dışına hizmet veriyoruz.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
