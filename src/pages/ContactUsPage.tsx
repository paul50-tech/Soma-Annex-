import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { ContactPage } from '../components/ContactPage';

interface ContactUsPageProps {
  lang: Language;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ lang }) => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="bg-emerald-950 text-white py-12 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
              Juja Campus · Kiambu County · Next to St. Paul's Catholic Church
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4">
              {lang === 'en' ? 'Get in Touch with Soma Annex' : 'Wasiliana na Shamba Letu Juja'}
            </h1>
            <p className="text-sm sm:text-base text-emerald-200 leading-relaxed">
              {lang === 'en'
                ? 'Have questions on seedling tray availability, commercial cut-flower contracts, on-farm consultations, or university student attachments? Reach our Juja agronomic desk.'
                : 'Una maswali kuhusu upatikanaji wa miche, oda za maua ya greenhouses, ushauri wa kilimo au mafunzo ya wanafunzi? Wasiliana nasi leo.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Contact Form & Interactive Google Map Component */}
      <div className="py-4">
        <ContactPage lang={lang} />
      </div>
    </div>
  );
};
