import { Search, Globe, Trophy, Film, Music, Newspaper, Baby, Tv } from 'lucide-react';
import { useState } from 'react';
import { config } from '../config';


const categories = [
  { icon: Trophy, label: 'Spor', color: '#ef4444' },
  { icon: Film, label: 'Film & Dizi', color: '#8b5cf6' },
  { icon: Newspaper, label: 'Haber', color: '#3b82f6' },
  { icon: Baby, label: 'Çocuk', color: '#f59e0b' },
  { icon: Music, label: 'Müzik', color: '#ec4899' },
  { icon: Globe, label: 'Uluslararası', color: '#10b981' },
  { icon: Tv, label: 'Ulusal', color: '#cba328' },
];

const channels = [
  { name: 'beIN Sports 1', cat: 'Spor', flag: '🇹🇷', hd: true },
  { name: 'beIN Sports 2', cat: 'Spor', flag: '🇹🇷', hd: true },
  { name: 'beIN Sports 3', cat: 'Spor', flag: '🇹🇷', hd: true },
  { name: 'S Sport', cat: 'Spor', flag: '🇹🇷', hd: true },
  { name: 'S Sport +', cat: 'Spor', flag: '🇹🇷', hd: true },
  { name: 'TRT Spor', cat: 'Spor', flag: '🇹🇷', hd: true },
  { name: 'TRT 1', cat: 'Ulusal', flag: '🇹🇷', hd: true },
  { name: 'Kanal D', cat: 'Ulusal', flag: '🇹🇷', hd: true },
  { name: 'Show TV', cat: 'Ulusal', flag: '🇹🇷', hd: true },
  { name: 'ATV', cat: 'Ulusal', flag: '🇹🇷', hd: true },
  { name: 'Star TV', cat: 'Ulusal', flag: '🇹🇷', hd: true },
  { name: 'FOX TV', cat: 'Ulusal', flag: '🇹🇷', hd: true },
  { name: 'CNN Türk', cat: 'Haber', flag: '🇹🇷', hd: true },
  { name: 'NTV', cat: 'Haber', flag: '🇹🇷', hd: true },
  { name: 'Habertürk', cat: 'Haber', flag: '🇹🇷', hd: true },
  { name: 'TRT Haber', cat: 'Haber', flag: '🇹🇷', hd: true },
  { name: 'Cartoon Network', cat: 'Çocuk', flag: '🌍', hd: true },
  { name: 'Disney Channel', cat: 'Çocuk', flag: '🌍', hd: true },
  { name: 'Nickelodeon', cat: 'Çocuk', flag: '🌍', hd: true },
  { name: 'TRT Çocuk', cat: 'Çocuk', flag: '🇹🇷', hd: true },
  { name: 'MTV', cat: 'Müzik', flag: '🌍', hd: true },
  { name: 'Number 1 TV', cat: 'Müzik', flag: '🇹🇷', hd: true },
  { name: 'Netflix Turkey', cat: 'Film & Dizi', flag: '🌍', hd: true },
  { name: 'Exxen', cat: 'Film & Dizi', flag: '🇹🇷', hd: true },
  { name: 'BBC World News', cat: 'Uluslararası', flag: '🇬🇧', hd: true },
  { name: 'CNN International', cat: 'Uluslararası', flag: '🇺🇸', hd: true },
  { name: 'Al Jazeera', cat: 'Uluslararası', flag: '🌍', hd: true },
  { name: 'Eurosport 1', cat: 'Spor', flag: '🌍', hd: true },
  { name: 'Eurosport 2', cat: 'Spor', flag: '🌍', hd: true },
  { name: 'NBA TV', cat: 'Spor', flag: '🇺🇸', hd: true },
];

export default function KanalListesi() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filtered = channels.filter(ch => {
    const matchCat = activeCategory === 'Tümü' || ch.cat === activeCategory;
    const matchSearch = ch.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-extrabold mb-4">
          Kanal <span className="text-primary italic">Listesi</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
          1200'den fazla kanal arasından aradığınızı bulmak için filtreleyin.
        </p>
      </motion.div>

      {/* Search */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="relative max-w-lg mx-auto mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Kanal ara... (örn: beIN Sports)"
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-outline-variant bg-surface-container-high text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
        />
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveCategory('Tümü')}
          className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${activeCategory === 'Tümü' ? 'gold-gradient text-black border-transparent' : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'}`}
        >
          Tümü ({channels.length}+)
        </button>
        {categories.map(cat => (
          <button
            key={cat.label}
            onClick={() => setActiveCategory(cat.label)}
            className={`px-5 py-2 rounded-full text-sm font-bold border transition-all flex items-center gap-2 ${activeCategory === cat.label ? 'gold-gradient text-black border-transparent' : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'}`}
          >
            <cat.icon className="w-4 h-4" /> {cat.label}
          </button>
        ))}
      </div>

      {/* Channel Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filtered.map((ch, i) => (
          <motion.div
            key={ch.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/10 flex flex-col items-center text-center gap-2 cursor-default"
          >
            <span className="text-2xl">{ch.flag}</span>
            <p className="font-bold text-sm leading-tight">{ch.name}</p>
            <div className="flex gap-1">
              <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold">{ch.cat}</span>
              {ch.hd && <span className="text-[10px] bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded-full font-bold">HD</span>}
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-on-surface-variant">
          <Tv className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p className="text-xl font-bold">Kanal bulunamadı.</p>
        </div>
      )}

      {/* More info banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-8 rounded-2xl text-center border border-primary/20 bg-surface-container-low"
      >
        <p className="text-on-surface-variant mb-4 text-lg">Bu sadece bir önizlemedir. <strong className="text-on-surface">1200+</strong> kanalın tamamına erişmek için hemen başlayın!</p>
        <a
          href={config.whatsappLink}
          target="_blank" rel="noopener noreferrer"
          className="gold-gradient text-black font-extrabold px-8 py-3 rounded-xl inline-block"
        >
          Tüm Kanallara Eriş →
        </a>

      </motion.div>
    </div>
  );
}
