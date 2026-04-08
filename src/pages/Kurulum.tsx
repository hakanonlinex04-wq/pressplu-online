import { motion } from 'motion/react';


import { Tv, Smartphone, Monitor, Tablet, Download, Wifi, CheckCircle, MessageCircle } from 'lucide-react';
import { siteConfig } from '../siteSettings';

const devices = [
  { icon: Tv, label: 'Smart TV', desc: 'Samsung, LG, Sony ve diğer tüm Smart TV modelleri', steps: ['Smart TV ayarlarına girin', 'IPTV uygulamasını indirin (IPTV Smarters Pro)', 'Size gönderilen M3U linkini girin', 'İzlemeye başlayın!'] },
  { icon: Smartphone, label: 'Android / iOS', desc: 'Telefon ve tabletlerde kolay kurulum', steps: ['App Store veya Play Store\'u açın', 'IPTV Smarters Pro indirin', 'WhatsApp\'tan aldığınız bilgileri girin', 'Hazır! Hemen izleyin.'] },
  { icon: Monitor, label: 'Windows / Mac', desc: 'Bilgisayarınızda tam ekran deneyim', steps: ['VLC Media Player indirin', 'Medya > Ağ Akışını Aç seçin', 'M3U URL\'nizi yapıştırın', 'Oynat tuşuna basın.'] },
  { icon: Tablet, label: 'Fire TV Stick', desc: 'Amazon Fire Stick ile TV\'nize bağlayın', steps: ['Fire Stick\'e IPTV Smarters kurun', 'Giriş bilgilerinizi girin', 'Kanal listesi otomatik yüklenir', 'Uzaktan kumandayla izleyin!'] },
];

const steps = [
  { num: '01', title: 'Paket Seçin', desc: 'Size en uygun paketi seçip WhatsApp üzerinden bize ulaşın.' },
  { num: '02', title: 'Ödemeyi Yapın', desc: 'Havale, EFT veya diğer ödeme yöntemleriyle ödemenizi tamamlayın.' },
  { num: '03', title: 'Bilgileri Alın', desc: '5 dakika içinde giriş bilgileriniz WhatsApp ve e-posta ile gönderilir.' },
  { num: '04', title: 'Kurulumu Yapın', desc: 'Cihazınıza göre kurulum adımlarını izleyin, ekibimiz yardımcı olur.' },
  { num: '05', title: 'İzlemeye Başlayın', desc: 'Hepsi bu kadar! 1200+ kanal, 10K+ içerik sizi bekliyor.' },
];

export default function Kurulum() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <span className="inline-block gold-gradient text-black text-xs font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
          Kolay Kurulum
        </span>
        <h1 className="text-4xl md:text-6xl font-headline font-extrabold mb-4">
          5 Dakikada <span className="text-primary italic">Hazır</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
          Teknik bilgi gerektirmez. Her cihazda çalışır. Ekibimiz her adımda yanınızda.
        </p>
      </motion.div>

      {/* Steps */}
      <section className="mb-24">
        <h2 className="text-2xl font-headline font-bold text-center mb-10">Nasıl Başlarım?</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center p-6 rounded-xl bg-surface-container-low border border-outline-variant/10"
            >
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-black font-extrabold text-lg font-headline mb-4 shadow-lg">
                {step.num}
              </div>
              <h3 className="font-headline font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Device Guides */}
      <section className="mb-24">
        <h2 className="text-2xl font-headline font-bold text-center mb-10">Cihaza Göre Kurulum</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {devices.map((device, i) => (
            <motion.div
              key={device.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                  <device.icon className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl">{device.label}</h3>
                  <p className="text-sm text-on-surface-variant">{device.desc}</p>
                </div>
              </div>
              <ol className="space-y-3">
                {device.steps.map((step, si) => (
                  <li key={si} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-on-surface-variant">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="mb-16 max-w-3xl mx-auto text-center">
        <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10">
          <Wifi className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-headline font-bold text-xl mb-3">İnternet Gereksinimi</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            HD yayın için minimum <strong className="text-on-surface">10 Mbps</strong>, 4K içerik için <strong className="text-on-surface">25 Mbps</strong> internet hızı önerilir.
            Fiber bağlantı en iyi deneyimi sağlar. Mobil verilerle de sorunsuz çalışır.
          </p>
        </div>
      </section>

      {/* Help CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-2xl border border-[#25D366]/30 bg-surface-container-low"
      >
        <Download className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-headline font-extrabold mb-2">Yardım mı lazım?</h3>
        <p className="text-on-surface-variant mb-6">Ekibimiz kurulum sürecinde sizi adım adım yönlendirmeye hazır.</p>
        <a
          href={`${siteConfig.whatsappLink}&text=Merhaba, kurulum konusunda yardım almak istiyorum`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)]"
        >
          <MessageCircle className="w-5 h-5" /> Kurulum Desteği Al
        </a>
      </motion.div>
    </div>
  );
}
