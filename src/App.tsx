/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { siteConfig } from './siteSettings';

import AnaSayfa from './pages/AnaSayfa';
import KanalListesi from './pages/KanalListesi';
import Paketler from './pages/Paketler';
import Kurulum from './pages/Kurulum';
import Iletisim from './pages/Iletisim';

// Original home page sections
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import CTA from './components/CTA';

function HomePage() {
  return (
    <main className="pt-24">
      <Hero />
      <Pricing />
      <Comparison />
      <CTA />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background selection:bg-primary selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ana-sayfa" element={<AnaSayfa />} />
          <Route path="/kanal-listesi" element={<KanalListesi />} />
          <Route path="/paketler" element={<Paketler />} />
          <Route path="/kurulum" element={<Kurulum />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
        <Footer />

        {/* Floating WhatsApp Button */}
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 right-6 z-[100] bg-surface-container-high text-primary rounded-full w-16 h-16 flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:bg-[#25D366] hover:text-white transition-all group"
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute right-20 bg-surface-container-highest text-on-surface px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {siteConfig.brandName} Destek - 7/24 Aktif
          </span>
        </motion.a>
      </div>
    </BrowserRouter>
  );
}
