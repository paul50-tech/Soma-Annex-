import React from 'react';
import { Language } from '../types';
import { YOUTH_GLEAM_TEAM, COMPANY_INFO } from '../data/somaData';
import { WhatsAppIcon } from './BotanicalIcons';

interface BoysGleamTeamProps {
  lang: Language;
}

export const BoysGleamTeam: React.FC<BoysGleamTeamProps> = ({ lang }) => {
  return (
    <section id="gleam-team" className="py-16 sm:py-24 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
            <span>Community Youth Stewardship</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Juja Mentorship Initiative</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-3" style={{ textWrap: 'balance' }}>
            {lang === 'en' ? YOUTH_GLEAM_TEAM.titleEn : YOUTH_GLEAM_TEAM.titleSw}
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed italic">
            "{lang === 'en' ? YOUTH_GLEAM_TEAM.mottoEn : YOUTH_GLEAM_TEAM.mottoSw}"
          </p>
        </div>

        {/* 2-Column Story & Impact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-12">
          
          {/* Left Column: Vision & Community Campaign (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-800/70 rounded-2xl border border-neutral-700 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-700 mb-6">
                <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">
                  MISSION MANIFESTO
                </span>
                <span className="text-xs text-neutral-400">Gachororo, Juja</span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-4">
                {lang === 'en' ? 'Grounded Young Men Serving Community & Planet' : 'Kulea Vijana Waadilifu na Wajibikaji'}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {lang === 'en' ? YOUTH_GLEAM_TEAM.visionEn : YOUTH_GLEAM_TEAM.visionSw}
              </p>

              {/* Environmental Cleanliness Banner ("Tusitupe Taka Ovyo") */}
              <div className="bg-emerald-950/70 rounded-xl p-5 border border-emerald-800/60 mb-6 flex items-start gap-4">
                <div className="p-3 bg-emerald-800/80 rounded-lg text-emerald-200 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wide block">
                    CIVIC CAMPAIGN: TUSITUPE TAKA OVYO
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-1">
                    {lang === 'en'
                      ? 'Our boys lead active roadside waste cleanup drives and educational awareness in Gachororo, teaching neighbors the vital link between environmental sanitation, organic composting, and healthy soil.'
                      : 'Vijana wetu wanaongoza kampeni za usafi wa mitaa ya Gachororo Juja chini ya kaulimbiu "Tusitupe Taka Ovyo" ili kutunza mazingira na kutengeneza mboji safi ya asili.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-700 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Weekly Agribusiness & Mentorship Sessions
              </span>
              <a
                href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent('Hello Soma Annex, I want to learn more about supporting the Boys Gleam Team youth mentorship program.')}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-200 rounded-lg transition-colors flex items-center gap-2"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-700" />
                <span>{lang === 'en' ? 'Support / Connect' : 'Ungana Nasi'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3 Pillars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {YOUTH_GLEAM_TEAM.pillars.map((pil, idx) => (
              <div
                key={idx}
                className="bg-neutral-800/80 rounded-xl p-5 border border-neutral-700 hover:border-neutral-500 transition-colors flex-1 flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-white font-display">
                    {lang === 'en' ? pil.titleEn : pil.titleSw}
                  </h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {lang === 'en' ? pil.descEn : pil.descSw}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
