import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

import { siteConfig } from './siteSettings';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PromoBanner from './components/PromoBanner';


// Pages
import AnaSayfa from './pages/AnaSayfa';
import KanalListesi from './pages/KanalListesi';
import Paketler from './pages/Paketler';
import Kurulum from './pages/Kurulum';
import Iletisim from './pages/Iletisim';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0e0e0e] text-white selection:bg-[#ffe792] selection:text-black flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AnaSayfa />} />
            <Route path="/ana-sayfa" element={<AnaSayfa />} />
            <Route path="/kanal-listesi" element={<KanalListesi />} />
            <Route path="/paketler" element={<Paketler />} />
            <Route path="/kurulum" element={<Kurulum />} />
            <Route path="/iletisim" element={<Iletisim />} />
          </Routes>
        </main>
        
        <Footer />

        {/* Floating WhatsApp Button */}
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-28 right-4 md:right-6 z-[100] bg-[#201f1f] text-[#ffe792] rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:bg-[#25D366] hover:text-white transition-all group"
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute right-20 bg-[#262626] text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {siteConfig.brandName} Destek - 7/24 Aktif
          </span>
        </motion.a>
        
        <PromoBanner />
      </div>
    </BrowserRouter>
  );
}
