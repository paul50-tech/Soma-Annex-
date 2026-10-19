import React from 'react';
import { Language } from '../types';
import { WORKFLOW_STEPS, COMPANY_INFO } from '../data/somaData';
import { MPesaBadge, RootPlugIcon, WhatsAppIcon } from './BotanicalIcons';

interface ProcessWorkflowProps {
  lang: Language;
}

export const ProcessWorkflow: React.FC<ProcessWorkflowProps> = ({ lang }) => {
  return (
    <section id="workflow" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
            <span>Agronomist-Verified Protocol</span>
            <span aria-hidden="true">·</span>
            <span>Biological Handover Guarantee</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-900 mb-4" style={{ textWrap: 'balance' }}>
            {lang === 'en' ? 'The 4-Step Agronomist-Verified Process' : 'Hatua 4 za Kupokea Miche Yenye Afya'}
          </h2>

          <p className="text-base text-neutral-600 leading-relaxed">
            {lang === 'en'
              ? 'Seedlings are delicate living biological systems. We do not accept blind payments: every single plug batch is physically inspected by a trained agronomist in Juja before your order is confirmed and dispatched.'
              : 'Miche ni viumbe hai vinavyohitaji uangalifu mkubwa. Hatupokei malipo kabla mtaalamu wetu hajakagua mizizi na shina kitaluni Juja ili kuhakikisha inapandwa bila kufa.'}
          </p>
        </div>

        {/* 4-Step Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="relative bg-neutral-50 rounded-xl p-6 border border-neutral-200 flex flex-col justify-between"
            >
              <div>
                {/* Step index */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-4">
                  <span className="text-2xl font-bold font-mono text-emerald-800">
                    {step.stepNumber}
                  </span>
                  {step.stepNumber === '02' ? (
                    <RootPlugIcon className="w-6 h-6 text-emerald-700" />
                  ) : step.stepNumber === '03' ? (
                    <MPesaBadge />
                  ) : null}
                </div>

                <h3 className="text-base font-bold text-neutral-900 font-display mb-3">
                  {lang === 'en' ? step.titleEn : step.titleSw}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {lang === 'en' ? step.descEn : step.descSw}
                </p>
              </div>

              {step.stepNumber === '04' && (
                <div className="mt-4 pt-3 border-t border-neutral-200 text-[11px] font-semibold text-emerald-800">
                  {lang === 'en' ? '✓ Instant on-the-spot replacement guarantee' : '✓ Unabadilishiwa papo hapo ikiharibika njiani'}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Payment & Dispatch Reassurance Strip */}
        <div className="bg-emerald-50 rounded-2xl p-6 sm:p-8 border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
              {lang === 'en' ? 'Transparent Kenyan Agribusiness' : 'Malipo Salama ya Lipa na M-Pesa'}
            </span>
            <h4 className="text-lg font-bold text-neutral-900">
              {lang === 'en' ? 'Payment Details Provided via WhatsApp Upon Order Placement' : 'Maelezo ya Malipo Hutumwa WhatsApp Baada ya Kuweka Oda'}
            </h4>
            <p className="text-xs text-neutral-600 max-w-xl">
              {lang === 'en'
                ? `To ensure full biological safety and stock accuracy, official payment details (M-Pesa) are provided directly via WhatsApp after placing your order and verifying seedling batch readiness. You can also inspect root plugs in person at our Juja gate next to St. Paul's.`
                : `Hulipi kiholela: maelezo ya malipo hutumwa moja kwa moja kupitia WhatsApp baada ya kuweka oda yako na kuthibitishiwa miche ipo tayari. Unaweza pia kukagua miche shambani kwetu Juja.`}
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right">
              <span className="block text-[11px] text-neutral-500 font-mono">Farm Phone & WhatsApp</span>
              <span className="block text-sm font-bold text-neutral-900 font-mono">+254 115 864 901</span>
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent('Hello Soma Annex Farm, I want to confirm seedling stock readiness.')}`}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-emerald-700 hover:bg-emerald-800 rounded-xl text-white shadow-xs transition-colors"
              aria-label="Direct WhatsApp verification"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
