import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/somaData';
import { SproutEmblem, WhatsAppIcon } from './BotanicalIcons';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Slogans (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white text-xl font-bold font-display group w-fit">
              <SproutEmblem className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
              <span>Soma Annex Planters</span>
            </Link>

            <p className="text-xs text-emerald-400 font-semibold tracking-wider uppercase">
              {COMPANY_INFO.headlineEn} ({COMPANY_INFO.headlineSw})
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.taglineEn} · {COMPANY_INFO.taglineSw}. Established in November 2024 in Gachororo, Juja, Kenya. Raising the bar for horticultural nursery propagation and farmer productivity.
            </p>

            <div className="text-xs text-neutral-500 space-y-1 pt-2">
              <p>📍 {COMPANY_INFO.campus}</p>
              <p>⏰ Mon – Sat: 8:00 AM – 6:00 PM (Closed Sundays)</p>
            </div>
          </div>

          {/* Independent Page Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'en' ? 'Explore Pages' : 'Kurasa za Tovuti'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  {lang === 'en' ? 'About Our Nursery' : 'Kuhusu Kitalu Chetu'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors">
                  {lang === 'en' ? 'Agronomic Services' : 'Huduma za Kilimo'}
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-emerald-400 transition-colors">
                  {lang === 'en' ? 'Seedling Varieties' : 'Katalogi ya Miche'}
                </Link>
              </li>
              <li>
                <Link to="/floriculture" className="hover:text-emerald-400 transition-colors">
                  {lang === 'en' ? 'Cut Flowers & Roses' : 'Maua na Waridi'}
                </Link>
              </li>
              <li>
                <Link to="/value-addition" className="hover:text-emerald-400 transition-colors">
                  {lang === 'en' ? 'Sniff Sachets (KES 50)' : 'Vifurushi vya Usingizi (KES 50)'}
                </Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-emerald-400 transition-colors font-semibold text-emerald-400">
                  {lang === 'en' ? 'Tray Order Calculator' : 'Kikokotoo cha Trei'} &rarr;
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  {lang === 'en' ? 'Contact Us & Google Map' : 'Wasiliana Nasi & Ramani'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Advisory (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'en' ? 'Youth & Agronomy' : 'Vijana & Kilimo'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  {lang === 'en' ? 'Community Organic Composting & Soil Health' : 'Utengenezaji Mboji na Kuponya Udongo'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  {lang === 'en' ? 'Gachororo Environmental Stewardship' : 'Uhifadhi wa Mazingira Gachororo'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors">
                  JKUAT & Agricultural University Attachments
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors">
                  Shade-Net & Nursery Construction Advisory
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent('Hello Soma Annex Farm, I would like to order seedlings.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-200" />
                <span>+254 115 864 901</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Quiet Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Soma Annex Planters (operating as Soma Annex Farm). Gachororo, Juja, Kenya.</p>
          <div className="flex items-center gap-4">
            <span>Operating under Kenyan Horticultural Best Practices</span>
            <span aria-hidden="true">·</span>
            <span>M-Pesa Buy Goods & Services</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
