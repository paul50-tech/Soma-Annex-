import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { ValueAdditionSection } from '../components/ValueAdditionSection';
import { COMPANY_INFO } from '../data/somaData';
import { WhatsAppIcon, SachetAromaIcon } from '../components/BotanicalIcons';

interface ValueAdditionPageProps {
  lang: Language;
}

export const ValueAdditionPage: React.FC<ValueAdditionPageProps> = ({ lang }) => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="bg-emerald-950 text-white py-12 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Botanical Value-Addition</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
              Plant Therapeutics · Circular Farm Biology · Sterile Substrates
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4">
              {lang === 'en' ? 'Therapeutic Herbs & Propagation Media' : 'Mitishamba ya Asili & Substrate za Kitaluni'}
            </h1>
            <p className="text-sm sm:text-base text-emerald-200 leading-relaxed">
              {lang === 'en'
                ? 'Beyond conventional seedling propagation, Soma Annex Planters crafts therapeutic botanical sleep aids, circular high-protein poultry feeds, and buffered low-EC cocopeat substrates.'
                : 'Zaidi ya miche, tunatengeneza vifurushi vya mitishamba ya asili ya usingizi na utulivu (KES 50), uzalishaji wa mchwa hai wa kuku, na vitalu vya cocopeat safi.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Value Addition Component */}
      <div className="py-8">
        <ValueAdditionSection lang={lang} />
      </div>

      {/* Bulk Substrate Order Banner */}
      <section className="py-12 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl">
              <SachetAromaIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 font-display">
                {lang === 'en' ? 'Order Sniff Sachets (KES 50) or Bulk Substrates' : 'Agiza Vifurushi vya Asili (KES 50) au Cocopeat'}
              </h3>
              <p className="text-xs text-neutral-600 mt-0.5">
                {lang === 'en'
                  ? 'Payment details are provided via WhatsApp upon placing your order.'
                  : 'Maelezo ya malipo utatumiwa kupitia WhatsApp baada ya kuweka oda.'}
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent('Hello Soma Annex Farm, I want to order Antistress Relaxation Sniff Sachets and 5kg Cocopeat blocks.')}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>{lang === 'en' ? 'Place Order on WhatsApp' : 'Weka Oda WhatsApp'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
