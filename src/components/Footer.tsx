import { Link } from 'react-router-dom';
import { config } from '../config';


export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-surface-container-low border-t border-outline-variant/10 flex flex-col items-center gap-6 text-center">
      <div className="text-3xl font-black bg-gradient-to-r from-[#ffe792] via-[#ffd709] to-[#dfb73a] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,9,0.3)] tracking-tight">{config.brandName}</div>

      <div className="flex flex-wrap justify-center gap-8 text-on-surface-variant text-sm border-y border-outline-variant/10 py-4 w-full max-w-2xl">
        <Link to="/ana-sayfa" className="hover:text-on-surface transition-colors">Ana Sayfa</Link>
        <Link to="/kanal-listesi" className="hover:text-on-surface transition-colors">Kanal Listesi</Link>
        <Link to="/paketler" className="hover:text-on-surface transition-colors">Paketler</Link>
        <Link to="/kurulum" className="hover:text-on-surface transition-colors">Kurulum</Link>
        <Link to="/iletisim" className="hover:text-on-surface transition-colors">İletişim</Link>
      </div>
      <p className="font-body text-sm text-on-surface-variant max-w-2xl leading-relaxed">
        © 2024 {config.brandName}. Tüm hakları saklıdır. Bu platform sadece test amaçlı içerik sunar.
      </p>

      <div className="flex gap-4 mt-2">
        <Globe className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
        <Shield className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
        <CreditCard className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
      </div>
    </footer>
  );
}
