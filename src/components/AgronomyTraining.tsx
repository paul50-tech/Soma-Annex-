import React from 'react';
import { Language } from '../types';
import { AGRONOMY_SERVICES, COMPANY_INFO } from '../data/somaData';
import { SproutEmblem, WhatsAppIcon } from './BotanicalIcons';

interface AgronomyTrainingProps {
  lang: Language;
}

export const AgronomyTraining: React.FC<AgronomyTrainingProps> = ({ lang }) => {
  const handleConsultationWhatsApp = (serviceTitle: string) => {
    const text = encodeURIComponent(
      lang === 'en'
        ? `Hello Soma Annex agronomy team, I am interested in consultation / training on: "${serviceTitle}". Please advise on upcoming schedules.`
        : `Jambo wataalamu wa kilimo Soma Annex, ninahitaji ushauri au mafunzo kuhusu: "${serviceTitle}". Naomba kujua ratiba na maelezo.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${text}`, '_blank');
  };

  return (
    <section id="training" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">
            {lang === 'en' ? 'Practical Agronomic Advisory & University Attachments' : 'Ushauri wa Kilimo & Mafunzo ya Vyuo'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-900 mb-4" style={{ textWrap: 'balance' }}>
            {lang === 'en' ? 'Hands-On Training & Nursery Engineering' : 'Mafunzo ya Vitendo na Ujenzi wa Vitalu vya Kisasa'}
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            {lang === 'en'
              ? 'We don’t just sell seedlings—we empower growers, youth, and tertiary agricultural students through structured on-site nursery attachments, soil restoration workshops, and commercial engineering.'
              : 'Hatuzi miche tu—tunajenga uwezo wa wakulima na wanafunzi wa vyuo vya kilimo (kama JKUAT) kupitia mafunzo halisi ya vitendo vitaluni.'}
          </p>
        </div>

        {/* 5-Item Advisory & Services Bento List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {AGRONOMY_SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:border-emerald-600/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200/80 mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-800">
                    0{idx + 1}
                  </span>
                  <SproutEmblem className="w-4 h-4 text-emerald-600" />
                </div>

                <h3 className="text-base font-bold text-neutral-900 font-display mb-2 leading-snug">
                  {lang === 'en' ? srv.titleEn : srv.titleSw}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  {srv.descEn}
                </p>
              </div>

              <button
                onClick={() => handleConsultationWhatsApp(srv.titleEn)}
                className="w-full py-2 px-3 text-xs font-semibold text-emerald-950 bg-white hover:bg-emerald-50 border border-neutral-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-700" />
                <span>{lang === 'en' ? 'Book Advisory' : 'Weka Nafasi ya Ushauri'}</span>
              </button>
            </div>
          ))}

          {/* JKUAT & University Attachments Special Card */}
          <div className="bg-emerald-800 text-white rounded-xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-emerald-300 font-semibold block mb-2">
                ACADEMIC ACCREDITATION
              </span>
              <h3 className="text-lg font-bold font-display text-white mb-2">
                {lang === 'en' ? 'JKUAT & Agricultural College Attachments' : 'Mafunzo ya Wanafunzi wa JKUAT na Vyuo'}
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed mb-4">
                {lang === 'en'
                  ? 'Located conveniently in Juja near Jomo Kenyatta University of Agriculture and Technology (JKUAT). We host diploma and degree students for practical rotations across propagation, climate control, IPM, and farm bookkeeping.'
                  : 'Tuko karibu sana na Chuo Kikuu cha JKUAT Juja. Tunapokea wanafunzi wa diploma na degree kwa mazoezi ya vitendo ya kilimo biashara.'}
              </p>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent('Hello Soma Annex, I am an agricultural student inquiring about practical attachment placements.')}`}
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-3 text-xs font-semibold text-emerald-950 bg-white hover:bg-emerald-50 rounded-lg transition-colors text-center"
            >
              {lang === 'en' ? 'Apply for Student Attachment' : 'Omba Nafasi ya Attachment'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
