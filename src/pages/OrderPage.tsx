import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Language } from '../types';
import { TrayCalculator } from '../components/TrayCalculator';
import { COMPANY_INFO } from '../data/somaData';
import { SproutEmblem, WhatsAppIcon } from '../components/BotanicalIcons';

interface OrderPageProps {
  lang: Language;
}

export const OrderPage: React.FC<OrderPageProps> = ({ lang }) => {
  const [searchParams] = useSearchParams();
  const preselectedCrop = searchParams.get('crop') || 'cabbage-gloria';

  return (
    <div className="bg-neutral-100/70 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-6">
          <Link to="/" className="hover:underline text-emerald-800">Home</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:underline text-emerald-800">Catalog</Link>
          <span>/</span>
          <span className="text-neutral-900 font-semibold">Tray Order Calculator</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold mb-3">
            <SproutEmblem className="w-4 h-4 text-emerald-700" />
            <span>Juja Nursery Direct Dispatch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 mb-3">
            {lang === 'en' ? 'Seedling Tray Calculator & Ordering' : 'Kikokotoo cha Trei za Miche & Kuagiza'}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            {lang === 'en'
              ? 'Calculate retail plugs or full 128-cell wholesale propagation trays with protective crate delivery across Kiambu, Nairobi, and surrounding agricultural zones.'
              : 'Piga hesabu kamili ya trei zako za chemba 128 au miche ya bustani ya nyumbani, ukichagua sehemu ya kupokelea miche.'}
          </p>
        </div>

        {/* The Tray Calculator */}
        <div className="shadow-sm rounded-2xl overflow-hidden mb-10">
          <TrayCalculator
            lang={lang}
            preselectedProductId={preselectedCrop}
          />
        </div>

        {/* Reassurance FAQ / Handover SOP */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 space-y-4 text-xs text-neutral-600">
          <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider font-display">
            {lang === 'en' ? 'Our Dispatch & Handover Guarantee' : 'Uhakika wa Miche na Uletaji Salama'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div>
              <strong className="block text-neutral-900 font-semibold mb-1">
                {lang === 'en' ? 'Physical Inspection' : 'Ukaguzi wa Mizizi'}
              </strong>
              <p>
                {lang === 'en'
                  ? 'All plugs are physically inspected for stem caliper, root plug cohesion, and zero leaf yellowing before handover.'
                  : 'Kila trei inakaguliwa kuhakikisha mizizi imeshikana vizuri na haina magonjwa kabla hujalipia.'}
              </p>
            </div>
            <div>
              <strong className="block text-neutral-900 font-semibold mb-1">
                {lang === 'en' ? '100% Replacement' : 'Mbadala Papo Hapo'}
              </strong>
              <p>
                {lang === 'en'
                  ? 'In the rare event of transit damage, replacement seedlings are dispatched immediately on the spot.'
                  : 'Mche ukiharibika njiani unabadilishwa papo hapo bila malipo ya ziada.'}
              </p>
            </div>
            <div>
              <strong className="block text-neutral-900 font-semibold mb-1">
                {lang === 'en' ? 'Payment Procedure' : 'Utaratibu wa Malipo'}
              </strong>
              <p>
                {lang === 'en'
                  ? 'You will receive payment details via WhatsApp after placing your order and batch readiness is confirmed.'
                  : 'Maelezo ya malipo utatumiwa kwa WhatsApp baada ya kuweka oda na kuthibitisha tarehe ya kuchukua.'}
              </p>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link
            to="/catalog"
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1"
          >
            &larr; {lang === 'en' ? 'Back to Seedling Catalog' : 'Rudi kwenye Katalogi ya Miche'}
          </Link>
        </div>

      </div>
    </div>
  );
};
