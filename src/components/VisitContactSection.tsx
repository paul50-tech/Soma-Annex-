import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/somaData';
import { WhatsAppIcon, MPesaBadge, InstagramIcon, TikTokIcon } from './BotanicalIcons';

interface VisitContactProps {
  lang: Language;
}

export const VisitContactSection: React.FC<VisitContactProps> = ({ lang }) => {
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [purpose, setPurpose] = useState('seedlings');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitVisit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim() || !visitorPhone.trim()) return;

    const purposeLabels: Record<string, string> = {
      seedlings: 'Inspect & Collect Seedling Trays',
      flowers: 'Buy Fresh Cut Roses / Chrysanthemums',
      training: 'Agronomy Consultation / Student Attachment',
      sachets: 'Antistress Sachets & Plant Wellness',
      general: 'Farm Tour & Demonstration Plot Visit',
    };

    const text = encodeURIComponent(
      lang === 'en'
        ? `Hello Soma Annex Farm, I am planning a nursery visit.\n\nName: ${visitorName}\nPhone: ${visitorPhone}\nPreferred Date: ${visitDate || 'This Week'}\nPurpose: ${purposeLabels[purpose]}\n\nPlease confirm agronomist availability at the Juja campus.`
        : `Jambo Soma Annex Farm, napanga kutembelea kitalu chenu Juja.\n\nJina: ${visitorName}\nSimu: ${visitorPhone}\nTarehe: ${visitDate || 'Wiki Hii'}\nLengo: ${purposeLabels[purpose]}\n\nNaomba kuthibitisha uwepo wa mtaalamu.`
    );

    window.open(`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
            <span>Juja Campus · Farm Gate</span>
            <span aria-hidden="true">·</span>
            <span>Kiambu County, Kenya</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-900 mb-4" style={{ textWrap: 'balance' }}>
            {lang === 'en' ? 'Visit Our Nursery & Order Today' : 'Tembelea Kitalu Chetu Juja & Weka Agizo'}
          </h2>

          <p className="text-base text-neutral-600 leading-relaxed">
            {lang === 'en'
              ? 'We welcome growers, kitchen gardeners, and agribusiness students to inspect our seedling trays in person. Our qualified agronomists are on-site Monday to Saturday.'
              : 'Karibu sana shambani kwetu Gachororo, Juja kukagua miche kwa macho yako na kuongea na wataalamu wetu wa kilimo.'}
          </p>
        </div>

        {/* 2-Column Contact & Visit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Campus Info, Hours, M-Pesa & Phones (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Location & Access Card */}
            <div className="bg-neutral-50 rounded-2xl p-6 sm:p-7 border border-neutral-200">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide block">
                    MAIN NURSERY CAMPUS
                  </span>
                  <p className="text-base font-bold text-neutral-900 mt-0.5 font-display">
                    {COMPANY_INFO.campus}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Conveniently accessed from Thika Superhighway via Gachororo Road, directly adjacent to St. Paul's Catholic Church.
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-neutral-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-neutral-500 block">Operating Days</span>
                  <span className="font-semibold text-neutral-900">{COMPANY_INFO.workingHours.days}</span>
                  <span className="text-emerald-700 font-bold block mt-0.5">{COMPANY_INFO.workingHours.hours}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Sundays</span>
                  <span className="font-semibold text-neutral-600">{COMPANY_INFO.workingHours.sunday}</span>
                  <span className="text-[11px] text-neutral-400 block mt-0.5">Scheduled WhatsApp orders only</span>
                </div>
              </div>
            </div>

            {/* Direct Connect & Telephones */}
            <div className="bg-neutral-50 rounded-2xl p-6 sm:p-7 border border-neutral-200">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-3">
                DIRECT PHONES & WHATSAPP
              </span>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent('Hello Soma Annex Farm, I want to inquire about seedlings.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-neutral-200 hover:border-emerald-500 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
                    <div>
                      <span className="block text-xs font-bold text-neutral-900 font-mono">
                        {COMPANY_INFO.phones[0]}
                      </span>
                      <span className="text-[11px] text-neutral-500">
                        Primary Order & Dispatch Desk
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
                    Chat →
                  </span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.secondaryPhoneDigits}`}
                  className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-neutral-200 hover:border-emerald-500 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1 bg-neutral-100 rounded text-neutral-700">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-neutral-900 font-mono">
                        {COMPANY_INFO.phones[1]}
                      </span>
                      <span className="text-[11px] text-neutral-500">
                        Agronomist Consultation Line
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-neutral-700 group-hover:translate-x-0.5 transition-transform">
                    Call →
                  </span>
                </a>

                <div className="p-3.5 bg-white rounded-xl border border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-1 bg-neutral-100 rounded text-neutral-700">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-neutral-900">
                        {COMPANY_INFO.email}
                      </span>
                      <span className="text-[11px] text-neutral-500">Official Correspondence</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href={COMPANY_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-xl border border-neutral-200 hover:border-pink-500 hover:bg-pink-50/20 transition-all flex items-center gap-2.5 text-xs text-neutral-800 font-semibold group"
                  >
                    <div className="p-1.5 bg-pink-50 text-pink-600 rounded-lg">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-bold text-neutral-900 group-hover:text-pink-600 transition-colors">Instagram</span>
                      <span className="text-[10px] text-neutral-500 font-normal">Nursery Updates</span>
                    </div>
                  </a>
                  <a
                    href={COMPANY_INFO.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-xl border border-neutral-200 hover:border-neutral-800 hover:bg-neutral-50 transition-all flex items-center gap-2.5 text-xs text-neutral-800 font-semibold group"
                  >
                    <div className="p-1.5 bg-neutral-900 text-white rounded-lg">
                      <TikTokIcon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <span className="block font-bold text-neutral-900 group-hover:text-neutral-950 transition-colors">TikTok</span>
                      <span className="text-[10px] text-neutral-500 font-normal">Farming Videos</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* M-Pesa Official Verification Notice */}
            <div className="bg-emerald-900 text-white rounded-2xl p-5 border border-emerald-800">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-emerald-800/80">
                <div className="flex items-center gap-2">
                  <MPesaBadge till="3289066" />
                  <span className="text-xs text-emerald-300 font-medium hidden sm:inline">Soma Annex Planters</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-emerald-300">Till No:</span>
                  <span className="font-mono text-lg font-bold text-white tracking-widest bg-emerald-950/70 px-3 py-0.5 rounded border border-emerald-700/60 shadow-xs">
                    3289066
                  </span>
                </div>
              </div>
              <p className="text-xs text-emerald-200 mt-2.5 leading-relaxed">
                {lang === 'en'
                  ? 'Official Lipa na M-Pesa Buy Goods Till: 3289066 (SOMA ANNEX PLANTERS). Confirmation is dispatched upon nursery tray readiness.'
                  : 'Nambari rasmi ya Lipa na M-Pesa Buy Goods Till: 3289066 (SOMA ANNEX PLANTERS). Thibitisho hutolewa baada ya miche kuwa tayari.'}
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Visit Booking & Pre-Order Form (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-neutral-100 mb-6">
                <h3 className="text-xl font-bold text-neutral-900 font-display">
                  {lang === 'en' ? 'Book a Nursery Visit / Inquire Stock' : 'Panga Ziara ya Kitalu au Uliza Miche'}
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  {lang === 'en'
                    ? 'Let our agronomists prepare your seedling trays in advance of your arrival.'
                    : 'Wajulishe wataalamu wetu mapema ili wakukusanyie trei zako kabla hujafika.'}
                </p>
              </div>

              <form onSubmit={handleSubmitVisit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'Full Name' : 'Jina Kamili'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Grace Wanjiku"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none text-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'WhatsApp / Phone Number' : 'Nambari ya Simu / WhatsApp'} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0705 016 758"
                    value={visitorPhone}
                    onChange={(e) => setVisitorPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none text-neutral-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                      {lang === 'en' ? 'Planned Date' : 'Tarehe ya Kufika'}
                    </label>
                    <input
                      type="date"
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                      {lang === 'en' ? 'Visit Purpose' : 'Lengo la Ziara'}
                    </label>
                    <select
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none text-neutral-900"
                    >
                      <option value="seedlings">Inspect & Buy Seedlings</option>
                      <option value="flowers">Fresh Roses / Chrysanthemums</option>
                      <option value="sachets">Antistress Sachets & Herbs</option>
                      <option value="training">Agronomy & Attachments</option>
                      <option value="general">Demonstration Plot Tour</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-98 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <WhatsAppIcon className="w-5 h-5 text-emerald-200" />
                  <span>
                    {lang === 'en' ? 'Confirm Visit via WhatsApp' : 'Thibitisha Ziara kwa WhatsApp'}
                  </span>
                </button>
              </form>

              {submitted && (
                <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 text-center font-medium">
                  ✓ Request sent! Our Juja campus agronomist will confirm your reception time shortly.
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
              <span>Next to St. Paul's, Gachororo, Juja</span>
              <span className="text-emerald-700 font-semibold">Quality Guaranteed</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
