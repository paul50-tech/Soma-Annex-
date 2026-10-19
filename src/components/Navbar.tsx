import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { SproutEmblem } from './BotanicalIcons';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', labelEn: 'Home', labelSw: 'Mwanzo' },
    { to: '/about', labelEn: 'About Us', labelSw: 'Kuhusu Sisi' },
    { to: '/services', labelEn: 'Services', labelSw: 'Huduma Zetu' },
    { to: '/catalog', labelEn: 'Seedling Catalog', labelSw: 'Katalogi ya Miche' },
    { to: '/floriculture', labelEn: 'Floriculture', labelSw: 'Maua & Waridi' },
    { to: '/value-addition', labelEn: 'Value-Addition', labelSw: 'Mitishamba & Vifaa' },
    { to: '/contact', labelEn: 'Contact Us', labelSw: 'Wasiliana Nasi' },
  ];

  const handleOrderClick = () => {
    navigate('/order');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-18">
          
          {/* Zone 1: Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-neutral-900 whitespace-nowrap shrink-0 group"
          >
            <SproutEmblem className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700 group-hover:scale-110 transition-transform" />
            <span>Soma Annex Planters</span>
          </Link>

          {/* Zone 2: Independent Page Nav Links with Active State */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-neutral-600">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors whitespace-nowrap py-1 relative ${
                    isActive
                      ? 'text-emerald-800 font-bold border-b-2 border-emerald-700'
                      : 'hover:text-emerald-800'
                  }`
                }
              >
                {lang === 'en' ? item.labelEn : item.labelSw}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Language Toggle + Direct Order Tray CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onToggleLang}
              aria-label="Switch language"
              className="px-2.5 py-1 text-xs font-semibold text-neutral-700 hover:text-emerald-800 bg-neutral-100 hover:bg-neutral-200 rounded transition-colors whitespace-nowrap shrink-0"
            >
              <span className="sm:hidden">{lang === 'en' ? 'SW' : 'EN'}</span>
              <span className="hidden sm:inline">{lang === 'en' ? 'Kiswahili' : 'English'}</span>
            </button>
            
            <button
              onClick={handleOrderClick}
              className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-98 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              {lang === 'en' ? 'Order Seedling Trays' : 'Agiza Trei za Miche'}
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-neutral-600 hover:text-neutral-900 focus:outline-none rounded-lg"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with Independent Page Links */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-sm font-medium rounded-lg px-2 transition-colors ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-900 font-bold'
                    : 'text-neutral-800 hover:bg-neutral-50 hover:text-emerald-700'
                }`
              }
            >
              {lang === 'en' ? item.labelEn : item.labelSw}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-neutral-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleOrderClick();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm text-center"
            >
              {lang === 'en' ? 'Order Seedling Trays' : 'Agiza Trei za Miche'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
