import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { DetailedServicesSection } from '../components/DetailedServicesSection';
import { AgronomyTraining } from '../components/AgronomyTraining';
import { ProcessWorkflow } from '../components/ProcessWorkflow';
import { COMPANY_INFO } from '../data/somaData';
import { WhatsAppIcon } from '../components/BotanicalIcons';

interface ServicesPageProps {
  lang: Language;
  onOpenOrderModal: (cropId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ lang, onOpenOrderModal }) => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-emerald-950 text-white py-12 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
              Comprehensive Horticultural & Agronomic Divisions
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4">
              {lang === 'en' ? 'Professional Farm Services & Engineering' : 'Huduma za Kisasa za Kilimo & Kitalu'}
            </h1>
            <p className="text-sm sm:text-base text-emerald-200 leading-relaxed">
              {lang === 'en'
                ? 'From sterile nursery propagation and commercial shade-net setup to organic soil remediation and university attachments, Soma Annex Planters delivers end-to-end agronomic support.'
                : 'Kuanzia uzalishaji wa miche bora, ujenzi wa vitalu vya shade-net hadi kuboresha rutuba ya udongo na mafunzo ya wanafunzi wa vyuo.'}
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Services Component */}
      <DetailedServicesSection
        lang={lang}
        onOpenOrderModal={onOpenOrderModal}
      />

      {/* 4-Step Fulfillment SOP */}
      <ProcessWorkflow lang={lang} />

      {/* Training & Attachments Component */}
      <AgronomyTraining lang={lang} />

      {/* Consultation Banner */}
      <section className="py-14 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
            {lang === 'en' ? 'Need On-Farm Consultation or Turnkey Nursery Setup?' : 'Unahitaji Ushauri Shambani au Ujenzi wa Kitalu?'}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
            {lang === 'en'
              ? 'Our agronomists visit farms across Kiambu County and Nairobi metropolitan area for soil assessment, irrigation planning, and nursery design.'
              : 'Wataalamu wetu wanafika shambani kwako kukagua udongo, kupanga umwagiliaji na kusanifu kitalu chako.'}
          </p>
          <a
            href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent('Hello Soma Annex Farm, I want to book an on-farm consultation or commercial nursery construction.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-xl transition-all shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'en' ? 'Book Agronomist Consultation on WhatsApp' : 'Weka Miadi ya Ushauri kwa WhatsApp'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
