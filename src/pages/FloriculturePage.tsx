import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { FloricultureStudio } from '../components/FloricultureStudio';
import { COMPANY_INFO } from '../data/somaData';
import { WhatsAppIcon, FlowerBudIcon } from '../components/BotanicalIcons';

interface FloriculturePageProps {
  lang: Language;
}

export const FloriculturePage: React.FC<FloriculturePageProps> = ({ lang }) => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      {/* Page Header */}
      <div className="bg-neutral-950 py-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono text-rose-400 mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Floriculture & Cut-Flowers</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-2">
              Juja Greenhouses · Daily Dawn Harvest · 14+ Day Vase Longevity
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4">
              {lang === 'en' ? 'Fresh Cut Florals & Celebration Bouquets' : 'Maua Freshi ya Kukata na Sherehe'}
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {lang === 'en'
                ? 'Harvested every morning at sunrise from our Juja greenhouse farm. Hand-graded long straight stems, vibrant chrysanthemums, and velvety roses for birthdays, weddings, church ceremonies, and milestones.'
                : 'Maua freshi yanayovunwa kila alfajiri shambani mwetu Juja karibu na Kanisa la St. Paul. Yanadumu kwenye chombo kwa zaidi ya wiki mbili yakiwa na harufu nzuri ya asili.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Floriculture Studio Component with Verified Prices */}
      <FloricultureStudio lang={lang} />

      {/* Commercial Wholesale & Event Inquiry Strip */}
      <section className="py-14 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-3xl p-8 sm:p-12 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                <FlowerBudIcon className="w-4 h-4 text-rose-400" />
                <span>Commercial Florist & Event Contracts</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                {lang === 'en' ? 'Bulk Florist Supply & Event Decoration' : 'Mikataba ya Maua ya Jumla na Hafla Kubwa'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {lang === 'en'
                  ? 'We supply commercial florist shops, banquet halls, hotels, and church decorators with regular weekly dispatches. Custom quote upon commercial inquiry.'
                  : 'Tunasambaza maua kwa maduka ya maua, hoteli, kumbi za harusi na makanisa kwa bei nafuu ya mkataba.'}
              </p>
              <div className="mt-3 text-xs text-rose-300">
                {lang === 'en'
                  ? 'Note: Payment details are sent via WhatsApp after order confirmation.'
                  : 'Zingatio: Maelezo ya malipo hutumwa WhatsApp baada ya kuthibitisha agizo.'}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent('Hello Soma Annex Floriculture desk, I want to inquire about bulk flower supply and commercial events.')}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-700" />
                <span>{lang === 'en' ? 'Inquire Bulk Floral Contracts' : 'Ulizia Mikataba ya Jumla'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
