import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { AboutSection } from '../components/AboutSection';
import { COMPANY_INFO } from '../data/somaData';
import { WhatsAppIcon, SproutEmblem } from '../components/BotanicalIcons';

interface AboutPageProps {
  lang: Language;
  onOpenOrderModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onOpenOrderModal }) => {
  return (
    <div className="bg-white">
      {/* Page Header / Breadcrumb */}
      <div className="bg-emerald-950 text-white py-12 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
              Corporate & Agronomic History · Juja, Kiambu County
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4">
              {lang === 'en' ? 'Where Farming Begins.' : 'Mwanzo wa Kilimo Chenye Mafanikio.'}
            </h1>
            <p className="text-sm sm:text-base text-emerald-200 leading-relaxed">
              {lang === 'en'
                ? 'Soma Annex Planters (operating as Soma Annex Farm) was established in November 2024 to bridge the gap between laboratory nursery science and Kenyan farming reality.'
                : 'Soma Annex Planters ilianzishwa Novemba 2024 hapa Gachororo, Juja ili kuwapa wakulima wa Kenya miche bora isiyo na magonjwa na inayostahimili jua la shambani.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main About Component */}
      <div className="py-8">
        <AboutSection
          lang={lang}
          onOpenOrderModal={onOpenOrderModal}
        />
      </div>

      {/* Campus Location Summary Box */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 font-display">
              {lang === 'en' ? 'Visit Our Juja Demonstration Plots' : 'Tembelea Shamba Letu Juja'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              {COMPANY_INFO.campus} · Open {COMPANY_INFO.workingHours.days} ({COMPANY_INFO.workingHours.hours})
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 text-xs font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
            >
              {lang === 'en' ? 'View Map & Directions' : 'Angalia Ramani & Maelekezo'}
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent('Hello Soma Annex Farm, I would like to schedule a visit to the Juja nursery.')}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>{lang === 'en' ? 'Connect on WhatsApp' : 'Wasiliana Nasi'}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
