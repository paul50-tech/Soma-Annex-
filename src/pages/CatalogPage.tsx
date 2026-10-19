import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { CatalogSection } from '../components/CatalogSection';
import { Tray128GridIcon } from '../components/BotanicalIcons';

interface CatalogPageProps {
  lang: Language;
  onSelectProductForCalculator: (cropId: string) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  lang,
  onSelectProductForCalculator,
}) => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-emerald-950 text-white py-12 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Seedling Catalog</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
              Sterile Cocopeat · 128-Cell UV Plug Trays · Sun-Hardened
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4">
              {lang === 'en' ? 'Propagated Seedling Varieties' : 'Aina za Miche ya Kitaluni'}
            </h1>
            <p className="text-sm sm:text-base text-emerald-200 leading-relaxed">
              {lang === 'en'
                ? 'Every seedling is raised in buffered coconut coir with intact, fibrous root balls. Zero field transplant shock, verified by agronomists prior to handover.'
                : 'Kila mche unakuzwa kwa ustadi ndani ya cocopeat safi. Mizizi imara inayoshika ardhi haraka bila kusinyaa shambani.'}
            </p>
          </div>
        </div>
      </div>

      {/* Catalog Component */}
      <CatalogSection
        lang={lang}
        onSelectProductForCalculator={onSelectProductForCalculator}
      />

      {/* Fast Tray Calculator Prompt */}
      <section className="py-12 bg-neutral-100/80 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl">
              <Tray128GridIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 font-display">
                {lang === 'en' ? 'Need an exact tray calculation for your acreage?' : 'Unahitaji hesabu ya trei kulingana na ekari zako?'}
              </h3>
              <p className="text-xs text-neutral-600 mt-0.5">
                {lang === 'en'
                  ? 'Calculate full 128-cell trays or loose plugs with Kiambu & Nairobi delivery options.'
                  : 'Piga hesabu kamili ya trei za chemba 128 au miche ya rejareja.'}
              </p>
            </div>
          </div>

          <Link
            to="/order"
            className="px-6 py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all whitespace-nowrap shadow-xs"
          >
            {lang === 'en' ? 'Go to Tray Calculator' : 'Fungua Kikokotoo'} &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};
