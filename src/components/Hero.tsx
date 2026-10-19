import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/somaData';
import { SOMA_PHOTOS } from '../data/somaImages';
import { SomaImage } from './SomaImage';
import { RootPlugIcon, Tray128GridIcon, WhatsAppIcon, SproutEmblem } from './BotanicalIcons';

interface HeroProps {
  lang: Language;
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenOrderModal }) => {
  const [activeStage, setActiveStage] = useState<number>(3); // Default to sun-hardened ready stage

  const stages = [
    {
      num: 1,
      titleEn: 'Buffered Cocopeat Media',
      titleSw: 'Substrate Safi ya Cocopeat',
      detailEn: 'Triple-washed coconut coir with low electrical conductivity (<0.5 mS/cm) eliminates soil-borne nematodes, damping-off fungi, and bacterial wilt.',
      detailSw: 'Udongo safi usio na magonjwa ya ukungu unaowezesha mbegu kuota kwa asilimia 98%.',
      metric: '0% Soil Pathogens',
      imageUrl: SOMA_PHOTOS.nurseryWideTrays,
      captionEn: 'Shade-net propagation beds filled with sterile low-EC cocopeat in Juja',
    },
    {
      num: 2,
      titleEn: '128-Cell Air-Pruning Plugs',
      titleSw: 'Chemba 128 za Hewa',
      detailEn: 'Inverted pyramid cells encourage vertical taproots and lateral fibrous branching without root circling or pot-bound strangulation.',
      detailSw: 'Mizizi haizunguki bali inajenga chane mnene wa nyuzi tayari kunyonya rutuba shambani.',
      metric: 'Dense Fibrous Root Ball',
      imageUrl: SOMA_PHOTOS.nurseryTrays128Overhead,
      captionEn: '128-cell heavy-duty trays supporting uniform root plug geometry',
    },
    {
      num: 3,
      titleEn: 'Structured Sun-Hardening',
      titleSw: 'Kustahimishwa Jua Kali',
      detailEn: 'Gradual progressive exposure from 30% shade net to full Kenyan equatorial sunlight paired with controlled moisture cycling.',
      detailSw: 'Miche inazoea jua kali la wazi kabla ya kutoka vitaluni ili isinyauke ikipandwa.',
      metric: 'Near-Zero Field Mortality',
      imageUrl: SOMA_PHOTOS.nurserySunlitHardening,
      captionEn: 'Seedling trays undergoing equatorial sun-hardening at Gachororo campus',
    },
    {
      num: 4,
      titleEn: 'Agronomist Quality Handover',
      titleSw: 'Uhakiki wa Mtaalamu Kabla ya Kupokea',
      detailEn: 'Every batch physically inspected for stem caliper, leaf color, and root plug cohesion before farm-gate pickup or crate transit.',
      detailSw: 'Kila trei inakaguliwa mzizi na shina. Ukikuta mche mbaya unabadilishwa papo hapo.',
      metric: '100% Replacement Guarantee',
      imageUrl: SOMA_PHOTOS.cabbagePlugsClose,
      captionEn: 'Vigorous, sun-hardened brassica plugs ready for field transplanting',
    },
  ];

  const currentStage = stages[activeStage];

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      lang === 'en'
        ? `Hello Soma Annex Farm, I am interested in ordering sun-hardened seedlings from your Juja nursery. Please share today's batch availability.`
        : `Jambo Soma Annex Farm, ninahitaji kuagiza miche iliyokuzwa vizuri kutoka kitalu chenu cha Juja. Naomba kujua miche iliyopo leo.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-neutral-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-neutral-200">
      {/* Subtle organic background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Regional trust markers without pill boxes - clean typographic separation */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-4">
          <span>Gachororo, Juja</span>
          <span aria-hidden="true" className="text-emerald-400">·</span>
          <span>Kiambu County, Kenya</span>
          <span aria-hidden="true" className="text-emerald-400">·</span>
          <span>Next to St. Paul's</span>
          <span aria-hidden="true" className="text-emerald-400">·</span>
          <span>Est. Nov 2024</span>
        </div>

        {/* 2-Column Responsive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-sm font-bold text-emerald-700 tracking-wide uppercase mb-2">
                {lang === 'en' ? COMPANY_INFO.headlineEn : COMPANY_INFO.headlineSw} · {lang === 'en' ? COMPANY_INFO.taglineEn : COMPANY_INFO.taglineSw}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-6 font-display" style={{ textWrap: 'balance' }}>
                {lang === 'en' ? (
                  <>
                    Scientific Seedling Propagation & <span className="text-emerald-700">High-Yield Harvests.</span>
                  </>
                ) : (
                  <>
                    Kukuza Miche Bora Kisayansi kwa <span className="text-emerald-700">Mavuno Mengi Shambani.</span>
                  </>
                )}
              </h1>

              <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mb-8">
                {lang === 'en' ? (
                  <>
                    Soma Annex Planters bridges the gap between laboratory-grade nursery science and Kenyan farming reality. We eliminate early crop failure—damping-off, poor germination, and transplant shock—by raising vigorous, sun-hardened seedlings in sterile cocopeat 128-cell trays with dense fibrous root systems.
                  </>
                ) : (
                  <>
                    Soma Annex Planters inakomesha hasara za mbegu kuto-ota au miche kukauka shambani. Tunakuza miche imara iliyoshupazwa na jua ndani ya trei za kisasa za cocopeat, ikiwa na mizizi mikubwa inayoshika ardhi mara moja bila mshtuko.
                  </>
                )}
              </p>
            </div>

            {/* Action Buttons & Primary WhatsApp CTA */}
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  onClick={onOpenOrderModal}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-98 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
                >
                  <Tray128GridIcon className="w-5 h-4 text-emerald-200" />
                  <span>{lang === 'en' ? 'Calculate & Order Trays' : 'Piga Hesabu ya Trei & Agiza'}</span>
                </button>

                <button
                  onClick={handleWhatsAppDirect}
                  className="px-5 py-3.5 text-sm font-semibold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 active:scale-98 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 border border-emerald-300"
                >
                  <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
                  <span>{lang === 'en' ? 'Direct WhatsApp Connect' : 'Wasiliana kwa WhatsApp'}</span>
                </button>

                <Link
                  to="/catalog"
                  className="px-4 py-3.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 underline underline-offset-4 whitespace-nowrap shrink-0"
                >
                  {lang === 'en' ? 'View Full Product Catalog →' : 'Tazama Katalogi Yote →'}
                </Link>
              </div>

              {/* Clean Editorial Footprint Checklist */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-200 text-xs text-neutral-600">
                <div className="flex items-start gap-2">
                  <SproutEmblem className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? '128-Cell UV Tray Plugs' : 'Trei za Chemba 128 UV'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <SproutEmblem className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Low-EC Buffered Cocopeat' : 'Cocopeat Safi ya Lita 70'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <SproutEmblem className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Wholesale from 100+ Seedlings' : 'Bei ya Jumla kuanzia 100+'}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Agronomic Hardening Visualizer */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between h-full">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6">
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 font-display">
                      {lang === 'en' ? 'The Soma Hardening Protocol' : 'Mfumo wa Kustahimisha Miche'}
                    </h3>
                    <p className="text-xs text-neutral-500">
                      {lang === 'en' ? 'From sterile media to zero field transplant shock' : 'Kutoka kitaluni hadi shambani bila kufa'}
                    </p>
                  </div>
                  <RootPlugIcon className="w-8 h-8 text-emerald-700" />
                </div>

                {/* Stage Selection Buttons */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {stages.map((stg, idx) => (
                    <button
                      key={stg.num}
                      onClick={() => setActiveStage(idx)}
                      className={`py-2 px-2 text-center rounded-lg border text-xs font-semibold transition-all ${
                        activeStage === idx
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      <span className="block text-[10px] text-neutral-400 font-mono">0{stg.num}</span>
                      <span className="truncate block">
                        {idx === 0 ? 'Media' : idx === 1 ? 'Roots' : idx === 2 ? 'Hardened' : 'Ready'}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Stage Details Display */}
                <div className="bg-neutral-50 rounded-lg overflow-hidden border border-neutral-100 mb-6">
                  <div className="relative h-44 w-full">
                    <SomaImage
                      src={currentStage.imageUrl}
                      alt={lang === 'en' ? currentStage.titleEn : currentStage.titleSw}
                      className="w-full h-full"
                      eager={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent flex items-end p-3.5">
                      <span className="text-[11px] font-medium text-white/95 leading-snug">
                        {currentStage.captionEn}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-emerald-800 tracking-wide uppercase">
                        Stage 0{currentStage.num}
                      </span>
                      <span className="text-xs font-semibold text-neutral-600 font-mono">
                        {currentStage.metric}
                      </span>
                    </div>
                    
                    <h4 className="text-base font-semibold text-neutral-900 mb-1.5">
                      {lang === 'en' ? currentStage.titleEn : currentStage.titleSw}
                    </h4>
                    
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {lang === 'en' ? currentStage.detailEn : currentStage.detailSw}
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Nursery Guarantee Footer */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span>Juja Demonstration Plots</span>
                <span className="font-semibold text-emerald-700">Open Mon–Sat 8AM–6PM</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
