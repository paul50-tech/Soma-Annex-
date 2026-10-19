import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { Hero } from '../components/Hero';
import { GUIDING_PILLARS, COMPANY_INFO } from '../data/somaData';
import { SOMA_PHOTOS, NURSERY_SHOWCASE_GALLERY } from '../data/somaImages';
import { SomaImage } from '../components/SomaImage';
import { Tray128GridIcon, WhatsAppIcon, FlowerBudIcon, SachetAromaIcon } from '../components/BotanicalIcons';

interface HomePageProps {
  lang: Language;
  onOpenOrderModal: (cropId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ lang, onOpenOrderModal }) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero
        lang={lang}
        onOpenOrderModal={() => onOpenOrderModal()}
      />

      {/* 4 Guiding Pillars Strip */}
      <section className="py-12 bg-emerald-950 text-white border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              {lang === 'en' ? 'Core Agronomic Mission' : 'Misingi Mikuu ya Kilimo'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
              {lang === 'en' ? 'Four Commitments to Kenyan Growers' : 'Ahadi Nne kwa Wakulima wa Kenya'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUIDING_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-emerald-900/50 rounded-xl p-5 border border-emerald-800/80 hover:border-emerald-700 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-emerald-400 block mb-2">
                  {pillar.number}.
                </span>
                <h3 className="text-sm font-bold text-white font-display mb-1.5">
                  {lang === 'en' ? pillar.titleEn : pillar.titleSw}
                </h3>
                <p className="text-xs text-emerald-200 leading-relaxed">
                  {lang === 'en' ? pillar.detailEn : pillar.detailSw}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independent Division Gateway Bento */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
              <span>Soma Annex Nursery Divisions</span>
              <span aria-hidden="true">·</span>
              <span>Gachororo, Juja</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-display">
              {lang === 'en' ? 'Specialized Agribusiness Departments' : 'Idara Maalum za Kilimo Biashara'}
            </h2>
            <p className="text-base text-neutral-600 mt-3 leading-relaxed">
              {lang === 'en'
                ? 'Explore our dedicated departments covering laboratory-grade propagation, commercial cut florals, therapeutic herbs, and agricultural engineering.'
                : 'Tembelea vitengo vyetu vilivyojitegemea vinavyotoa miche bora, maua ya greenhouses, mitishamba ya afya na ushauri wa kitaalamu.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1: Seedling Catalog */}
            <div className="bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-emerald-600 transition-all flex flex-col justify-between group shadow-xs overflow-hidden">
              <div>
                <div className="relative h-52 overflow-hidden">
                  <SomaImage
                    src={SOMA_PHOTOS.cabbagePlugsClose}
                    alt="Vigorous vegetable seedlings in 128-cell cocopeat plugs"
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-between p-4">
                    <span className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-wider">
                      Division 01 · 128-Cell Plugs
                    </span>
                    <div className="p-2 bg-white/95 rounded-lg text-emerald-800 shadow-xs">
                      <Tray128GridIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 font-display mb-2">
                    {lang === 'en' ? 'Vigorous Seedling Catalog' : 'Katalogi ya Miche ya Kitaluni'}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {lang === 'en'
                      ? '128-cell UV tray plugs raised in sterile cocopeat: cabbages, kales, capsicum, spinach, culinary herbs, and clean cassava rhizomes.'
                      : 'Miche ya mboga, viungo, na miti ya matunda iliyokuzwa ndani ya trei 128 zenye cocopeat safi.'}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link
                  to="/catalog"
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-emerald-800 group-hover:text-emerald-950 pt-4 border-t border-neutral-200"
                >
                  <span>{lang === 'en' ? 'Browse Catalog & Varieties' : 'Tazama Katalogi Kamili'} &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Box 2: Floriculture & Cut-Flowers */}
            <div className="bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-rose-500 transition-all flex flex-col justify-between group shadow-xs overflow-hidden">
              <div>
                <div className="relative h-52 overflow-hidden">
                  <SomaImage
                    src={SOMA_PHOTOS.bouquetLuxuryGrandWrap}
                    alt="Fresh cut chrysanthemums, roses and celebration bouquets"
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-between p-4">
                    <span className="text-xs font-mono text-rose-300 font-bold uppercase tracking-wider">
                      Division 02 · From Ksh 500
                    </span>
                    <div className="p-2 bg-white/95 rounded-lg text-rose-700 shadow-xs">
                      <FlowerBudIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 font-display mb-2">
                    {lang === 'en' ? 'Floriculture & Daily Cut Flowers' : 'Maua Freshi ya Greenhouses'}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {lang === 'en'
                      ? 'Fresh cut chrysanthemums (from Ksh 500), velvet roses (from Ksh 700), and handcrafted occasion bouquets for birthdays and weddings.'
                      : 'Maua ya chrysanthemum (kuanzia Ksh 500) na waridi za kisasa (kuanzia Ksh 700) kwa ajili ya hafla, sherehe na zawadi.'}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link
                  to="/floriculture"
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-rose-700 group-hover:text-rose-900 pt-4 border-t border-neutral-200"
                >
                  <span>{lang === 'en' ? 'View Floriculture Studio' : 'Tazama Idara ya Maua'} &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Box 3: Botanical Value-Addition */}
            <div className="bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-emerald-600 transition-all flex flex-col justify-between group shadow-xs overflow-hidden">
              <div>
                <div className="relative h-52 overflow-hidden">
                  <SomaImage
                    src={SOMA_PHOTOS.sachetHandHeldLabel}
                    alt="Soma Annex Antistress Relaxation Sniff Sachets"
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-between p-4">
                    <span className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-wider">
                      Division 03 · KES 50 / Sachet
                    </span>
                    <div className="p-2 bg-white/95 rounded-lg text-emerald-800 shadow-xs">
                      <SachetAromaIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 font-display mb-2">
                    {lang === 'en' ? 'Therapeutic Herbs & Substrates' : 'Mitishamba & Vifaa vya Vitalu'}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {lang === 'en'
                      ? 'Antistress Relaxation Sniff Sachets (KES 50 / sachet), buffered 5kg cocopeat blocks, 128-cell trays, and organic live termite feed.'
                      : 'Vifurushi vya usingizi na utulivu (KES 50 / sachet), cocopeat ya kilo 5 inayotanuka lita 70, na trei imara za kukuza miche.'}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link
                  to="/value-addition"
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-emerald-800 group-hover:text-emerald-950 pt-4 border-t border-neutral-200"
                >
                  <span>{lang === 'en' ? 'Explore Value-Addition' : 'Tazama Mitishamba & Vifaa'} &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Campus Visual Proof Strip */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                <span>From Our Juja Greenhouse & Demonstration Plots</span>
                <span aria-hidden="true">·</span>
                <span>Next to St. Paul's, Gachororo</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900">
                {lang === 'en' ? 'Grown & Hand-Graded at Soma Annex' : 'Picha Halisi Kutoka Shambani Juja'}
              </h2>
            </div>
            <Link
              to="/about"
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              {lang === 'en' ? 'Explore Our Nursery Story →' : 'Soma Historia ya Kitalu →'}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {NURSERY_SHOWCASE_GALLERY.slice(0, 4).map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs group"
              >
                <div className="h-52 overflow-hidden">
                  <SomaImage
                    src={photo.url}
                    alt={lang === 'en' ? photo.titleEn : photo.titleSw}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3.5">
                  <p className="text-xs font-semibold text-neutral-800 leading-snug">
                    {lang === 'en' ? photo.titleEn : photo.titleSw}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Order Fast-Track Banner */}
      <section className="py-14 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block mb-1">
              Immediate Tray Dispatch · Juja Nursery
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {lang === 'en' ? 'Ready to Plant with 100% Plug Cohesion?' : 'Uko Tayari Kupanda Miche Yenye Afya?'}
            </h3>
            <p className="text-sm text-emerald-100 mt-2 leading-relaxed">
              {lang === 'en'
                ? 'Use our interactive tray estimator or connect with our Juja dispatch desk via WhatsApp. Payment details are provided via WhatsApp after order confirmation.'
                : 'Tumia kikokotoo chetu cha trei au wasiliana nasi moja kwa moja kwa WhatsApp. Maelezo ya malipo utatumiwa kupitia WhatsApp baada ya oda.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to="/order"
              className="px-6 py-3.5 text-xs font-semibold text-emerald-950 bg-white hover:bg-neutral-100 rounded-lg shadow-sm transition-all whitespace-nowrap"
            >
              {lang === 'en' ? 'Open Tray Calculator' : 'Fungua Kikokotoo'}
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent('Hello Soma Annex Farm, I am on the home page and would like to order seedlings.')}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>{lang === 'en' ? 'WhatsApp Juja Desk' : 'WhatsApp Juja'}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
