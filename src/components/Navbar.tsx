import { motion } from 'motion/react';


import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { siteConfig } from '../siteSettings';



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('TR');

  const languages = [
    { code: 'TR', flag: '🇹🇷', name: 'Türkçe' },
    { code: 'EN', flag: '🇬🇧', name: 'English' },
    { code: 'DE', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'NL', flag: '🇳🇱', name: 'Nederlands' },
  ];

  const navLinks = [
    { to: '/ana-sayfa', label: 'Ana Sayfa' },
    { to: '/kanal-listesi', label: 'Kanal Listesi' },
    { to: '/paketler', label: 'Paketler' },
    { to: '/kurulum', label: 'Kurulum' },
    { to: '/iletisim', label: 'İletişim' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-overlay shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex justify-between items-center px-8 py-4 max-w-full font-headline tracking-tight"
    >
      {/* Logo */}
      <Link to="/" className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#ff3333] via-[#e50914] to-[#b81d24] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(229,9,20,0.3)] flex-shrink-0 tracking-tight">
        {siteConfig.brandName}
      </Link>



      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? 'text-primary font-semibold border-b-2 border-primary pb-1 transition-all'
                : 'text-on-surface-variant hover:text-on-surface transition-colors hover:scale-105 duration-300'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Language Dropdown */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 px-3 h-10 rounded-full border border-outline-variant bg-surface-container-high hover:bg-surface-container-highest transition-all shadow-sm"
          >
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-on-surface">{activeLang}</span>
          </motion.button>

          {langOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full mt-2 lg:left-1/2 lg:-translate-x-1/2 right-0 w-36 glass-overlay border border-outline-variant/20 rounded-xl overflow-hidden shadow-lg p-1 flex flex-col gap-1 z-50"
            >
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => { setActiveLang(l.code); setLangOpen(false); }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-colors ${activeLang === l.code ? 'bg-primary/20 text-primary font-bold' : 'hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface'}`}
                >
                  <span className="text-lg">{l.flag}</span> {l.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* CTA Button - hidden on mobile */}
          <motion.a
          href={siteConfig.whatsappLink}

          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-block gold-gradient text-white px-6 py-2 rounded-lg font-bold transition-all"
        >
          Ücretsiz Test Al
        </motion.a>


        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant bg-surface-container-high"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü aç"
        >
          {menuOpen ? <X className="w-5 h-5 text-on-surface" /> : <Menu className="w-5 h-5 text-on-surface" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass-overlay border-t border-outline-variant/10 flex flex-col items-stretch px-8 py-6 gap-4 md:hidden"
        >
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 text-base font-bold border-b border-outline-variant/10 last:border-0 ${isActive ? 'text-primary' : 'text-on-surface-variant'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={siteConfig.whatsappLink}
            target="_blank" rel="noopener noreferrer"
            className="mt-2 gold-gradient text-white px-6 py-3 rounded-lg font-bold text-center"
          >

            Ücretsiz Test Al
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
