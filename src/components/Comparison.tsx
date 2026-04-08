import { Check, X } from 'lucide-react';

const features = [
  { name: "Canlı TV Kanalları (1200+)", plan3: true, plan12: true },
  { name: "Film & Dizi Arşivi (VOD)", plan3: "Sınırlı", plan12: "FULL ARŞİV" },
  { name: "Yayın Kalitesi", plan3: "FHD", plan12: "4K HDR" },
  { name: "Donma Karşıtı Anti-Freeze", plan3: true, plan12: true },
  { name: "7/24 WhatsApp VIP Destek", plan3: false, plan12: true },
];

export default function Comparison() {
  return (
    <section className="mt-32 px-8 md:px-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-headline font-bold text-center mb-12">Detaylı Paket Karşılaştırması</h2>
      <div className="overflow-x-auto no-scrollbar rounded-xl border border-outline-variant/10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="py-6 px-6 font-headline font-bold text-on-surface-variant uppercase text-xs tracking-widest border-b border-outline-variant/20">Özellikler</th>
              <th className="py-6 px-6 font-headline font-bold text-on-surface text-center border-b border-outline-variant/20">3 Aylık</th>
              <th className="py-6 px-6 font-headline font-bold text-primary text-center border-b border-outline-variant/20">12 Aylık</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr 
                key={feature.name}
                className={`border-b border-outline-variant/10 hover:bg-surface-container-high transition-colors ${index % 2 === 1 ? 'bg-surface-container-low/30' : ''}`}
              >
                <td className="py-5 px-6 text-sm font-medium">{feature.name}</td>
                <td className="py-5 px-6 text-center">
                  {typeof feature.plan3 === 'boolean' ? (
                    feature.plan3 ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-on-surface-variant mx-auto" />
                  ) : (
                    <span className="text-on-surface-variant text-xs">{feature.plan3}</span>
                  )}
                </td>
                <td className="py-5 px-6 text-center">
                  {typeof feature.plan12 === 'boolean' ? (
                    feature.plan12 ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-on-surface-variant mx-auto" />
                  ) : (
                    <span className={`text-xs font-bold uppercase ${feature.plan12 === 'FULL ARŞİV' ? 'text-primary' : ''}`}>
                      {feature.plan12}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
