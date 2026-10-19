import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/somaData';
import { SOMA_PHOTOS, FLORAL_LOOKBOOK_GALLERY } from '../data/somaImages';
import { SomaImage } from './SomaImage';
import { WhatsAppIcon } from './BotanicalIcons';

interface FloricultureStudioProps {
  lang: Language;
}

export const FloricultureStudio: React.FC<FloricultureStudioProps> = ({ lang }) => {
  const [selectedOccasion, setSelectedOccasion] = useState<string>('birthday');
  const [bouquetSize, setBouquetSize] = useState<'standard' | 'deluxe'>('standard');

  const occasionOptions = [
    { id: 'birthday', nameEn: 'Birthday Celebration', nameSw: 'Siku ya Kuzaliwa' },
    { id: 'anniversary', nameEn: 'Anniversary & Romance', nameSw: 'Maadhimisho ya Ndoa & Upendo' },
    { id: 'wedding', nameEn: 'Wedding & Church Altar', nameSw: 'Harusi & Madhabahu' },
    { id: 'appreciation', nameEn: 'Appreciation & Get Well', nameSw: 'Shukrani & Kupona Haraka' },
  ];

  const bouquetOptions = {
    standard: { labelEn: 'Standard Bunch', labelSw: 'Kifurushi cha Kawaida', stems: '10–12 stems', vaseLife: '10–14 days' },
    deluxe: { labelEn: 'Deluxe Banquet Wrap', labelSw: 'Kifurushi Kikubwa cha Sherehe', stems: '22–26 stems', vaseLife: '12–16 days' },
  };

  const handleBouquetWhatsAppOrder = (itemTitle: string, sizeLabel: string) => {
    const occLabel = occasionOptions.find(o => o.id === selectedOccasion)?.nameEn || 'Special Event';
    const text = encodeURIComponent(
      lang === 'en'
        ? `Hello Soma Annex Flowers, I want to inquire about a fresh cut flower arrangement: ${itemTitle} (${sizeLabel}) for ${occLabel}. Please share current farm-gate prices and availability for morning cut.`
        : `Jambo Soma Annex Flowers, ninahitaji kuagiza bouquet ya maua freshi: ${itemTitle} (${sizeLabel}) kwa ajili ya ${occLabel}. Naomba kujua bei ya leo na upatikanaji wa maua ya asubuhi.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${text}`, '_blank');
  };

  return (
    <section id="floriculture" className="py-16 sm:py-24 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-2">
              {lang === 'en' ? 'Maua na Mapambo · Greenhouse Cut-Flowers' : 'Maua na Mapambo · Shamba la Maua Juja'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-3" style={{ textWrap: 'balance' }}>
              {lang === 'en' ? 'Fresh Chrysanthemums & Roses Daily' : 'Maua Freshi ya Waridi na Chrysanthemum Kila Siku'}
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {lang === 'en'
                ? 'Harvested at dawn inside our Juja greenhouses next to St. Paul’s. Hand-graded for thick sturdy stems, radiant petals, and lasting vase freshness for celebrations, homes, and events.'
                : 'Maua yetu yanavunwa asubuhi na mapema shambani Juja. Yanakaa kwenye vase kwa muda mrefu yakiwa na harufu nzuri na uzuri wa kupendeza.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.primaryPhoneDigits}`}
              className="px-4 py-2 text-xs font-semibold text-neutral-300 border border-neutral-700 hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap"
            >
              Call {COMPANY_INFO.phones[0]}
            </a>
            <button
              onClick={() => handleBouquetWhatsAppOrder('Custom Occasion Floral Bouquet', bouquetOptions[bouquetSize].labelEn)}
              className="px-5 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>{lang === 'en' ? 'Inquire on Flowers' : 'Ulizia Maua'}</span>
            </button>
          </div>
        </div>

        {/* 3-Card Floriculture Showcase with Authentic Photos & Price Tables */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Fresh Cut Chrysanthemums */}
          <div className="bg-neutral-800/80 rounded-xl border border-neutral-700 overflow-hidden flex flex-col justify-between hover:border-neutral-500 transition-colors group">
            <div>
              <div className="h-52 relative overflow-hidden">
                <SomaImage
                  src={SOMA_PHOTOS.chrysanthemumGoldWhiteBurgundy}
                  alt="Fresh Cut Spray Chrysanthemums"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-black/20 to-transparent flex items-end justify-between p-4">
                  <span className="text-xs font-mono text-neutral-300">01 / Cut Florals</span>
                  <span className="text-xs font-semibold text-amber-400">Daily Dawn Cut</span>
                </div>
              </div>

              <div className="p-6 pb-0">
                <h3 className="text-xl font-bold text-white font-display mb-2">
                  {lang === 'en' ? 'Fresh Chrysanthemums' : 'Maua ya Chrysanthemum'}
                </h3>
                
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {lang === 'en'
                    ? 'Abundant clusters of long-lasting spray petals in sunburst yellow, clean white, lavender, and rich bronze.'
                    : 'Maua yenye rangi za kupendeza yanayodumu kwenye chombo kwa zaidi ya wiki mbili.'}
                </p>

                {/* Price Points */}
                <div className="space-y-3 bg-neutral-900/90 rounded-lg p-4 border border-neutral-700/60 mb-6 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="text-neutral-400">Small Bunch (Vase size)</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">Ksh 500</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2 border-t border-neutral-800">
                    <span className="text-neutral-400">Big Bunch (Banquets / Large)</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">Ksh 700 to 1,400</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={() => handleBouquetWhatsAppOrder('Fresh Chrysanthemums', 'Small (Ksh 500) / Big (Ksh 700 to 1,400)')}
                className="w-full py-2.5 px-3 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-200 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-700" />
                <span>{lang === 'en' ? 'Order Chrysanthemums' : 'Agiza Chrysanthemum'}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Fresh Cut Roses */}
          <div className="bg-neutral-800/80 rounded-xl border border-neutral-700 overflow-hidden flex flex-col justify-between hover:border-neutral-500 transition-colors group">
            <div>
              <div className="h-52 relative overflow-hidden">
                <SomaImage
                  src={SOMA_PHOTOS.rosesMagentaGypsophila}
                  alt="Fresh Greenhouse Cut Roses"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-black/20 to-transparent flex items-end justify-between p-4">
                  <span className="text-xs font-mono text-neutral-300">02 / Greenhouse</span>
                  <span className="text-xs font-semibold text-rose-400">Velvet Calyx</span>
                </div>
              </div>

              <div className="p-6 pb-0">
                <h3 className="text-xl font-bold text-white font-display mb-2">
                  {lang === 'en' ? 'Fresh Cut Roses' : 'Waridi Freshi (Roses)'}
                </h3>
                
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {lang === 'en'
                    ? 'Hybrid tea and spray greenhouse roses with straight sturdy stems, gentle natural fragrance, and uniform buds.'
                    : 'Waridi lenye mashina marefu na harufu nzuri ya asili lililovunwa kutoka greenhouseni Juja.'}
                </p>

                {/* Price Points */}
                <div className="space-y-3 bg-neutral-900/90 rounded-lg p-4 border border-neutral-700/60 mb-6 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="text-neutral-400">Small Bouquet (Hand-tied)</span>
                    <span className="font-mono font-bold text-rose-400 text-sm">Ksh 700</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2 border-t border-neutral-800">
                    <span className="text-neutral-400">Big Bouquet (Premium Velvet)</span>
                    <span className="font-mono font-bold text-rose-400 text-sm">Ksh 1,400 to 2,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={() => handleBouquetWhatsAppOrder('Fresh Cut Roses', 'Small (Ksh 700) / Big (Ksh 1,400 to 2,000)')}
                className="w-full py-2.5 px-3 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-200 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-700" />
                <span>{lang === 'en' ? 'Order Fresh Roses' : 'Agiza Waridi'}</span>
              </button>
            </div>
          </div>

          {/* Card 3: Celebration Bouquets */}
          <div className="bg-neutral-800/80 rounded-xl border border-neutral-700 overflow-hidden flex flex-col justify-between hover:border-neutral-500 transition-colors group">
            <div>
              <div className="h-52 relative overflow-hidden">
                <SomaImage
                  src={SOMA_PHOTOS.bouquetLuxuryGrandWrap}
                  alt="Assorted Celebration Floral Bouquet"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-black/20 to-transparent flex items-end justify-between p-4">
                  <span className="text-xs font-mono text-neutral-300">03 / Artisan Florist</span>
                  <span className="text-xs font-semibold text-amber-300">Farm-Gate</span>
                </div>
              </div>

              <div className="p-6 pb-0">
                <h3 className="text-xl font-bold text-white font-display mb-2">
                  {lang === 'en' ? 'Assorted Occasion Bouquets' : 'Mkusanyiko wa Bouquets za Sherehe'}
                </h3>
                
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {lang === 'en'
                    ? 'Artisan florist wrap for birthdays, weddings, anniversaries, graduations, and church dedications.'
                    : 'Mpangilio maridadi wa maua mchanganyiko na vifungashio vya kisasa kwa zawadi ya heshima.'}
                </p>

                {/* Price Points */}
                <div className="space-y-3 bg-neutral-900/90 rounded-lg p-4 border border-neutral-700/60 mb-6 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="text-neutral-400">Assorted Small</span>
                    <span className="font-mono font-bold text-amber-400 text-sm">Ksh 700</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2 border-t border-neutral-800">
                    <span className="text-neutral-400">Assorted Big (Luxury Wrap)</span>
                    <span className="font-mono font-bold text-amber-400 text-sm">Ksh 1,400 to 2,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={() => handleBouquetWhatsAppOrder('Assorted Occasion Bouquet', 'Small (Ksh 700) / Big (Ksh 1,400 to 2,000)')}
                className="w-full py-2.5 px-3 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-200 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-700" />
                <span>{lang === 'en' ? 'Order Gift Bouquet' : 'Agiza Zawadi ya Maua'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Authentic Floral & Bouquet Lookbook Gallery */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1.5">
              {lang === 'en' ? 'Juja Floriculture Lookbook · Real Farm Arrangements' : 'Picha Halisi za Maua Yetu · Juja'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {lang === 'en' ? 'Recent Bouquets & Greenhouse Harvests' : 'Mifano ya Bouquets na Maua Yaliyovunwa'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1.5">
              {lang === 'en'
                ? 'Hand-harvested and wrapped at Soma Annex Planters. Click any bouquet to order a similar arrangement via WhatsApp.'
                : 'Yamevunwa na kufungwa kwa ustadi shambani Soma Annex. Bonyeza picha yoyote kuagiza kupitia WhatsApp.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FLORAL_LOOKBOOK_GALLERY.map((photo) => (
              <div
                key={photo.id}
                onClick={() => handleBouquetWhatsAppOrder(photo.titleEn, bouquetOptions[bouquetSize].labelEn)}
                className="bg-neutral-800/90 rounded-xl border border-neutral-700 hover:border-rose-500/70 overflow-hidden cursor-pointer group transition-all flex flex-col justify-between"
              >
                <div className="h-56 overflow-hidden relative">
                  <SomaImage
                    src={photo.url}
                    alt={lang === 'en' ? photo.titleEn : photo.titleSw}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-300 font-semibold">
                      {photo.category}
                    </span>
                  </div>
                </div>
                <div className="p-3.5 flex items-center justify-between gap-2">
                  <p className="text-xs font-medium text-neutral-200 leading-snug line-clamp-2">
                    {lang === 'en' ? photo.titleEn : photo.titleSw}
                  </p>
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Occasion Floral Builder Banner */}
        <div className="bg-neutral-800 rounded-2xl p-6 sm:p-8 border border-neutral-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-2/3">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
              Custom Floral Booking Assistant
            </span>
            <h4 className="text-lg font-bold text-white mb-2">
              {lang === 'en' ? 'What milestone are you celebrating?' : 'Unasherehekea tukio gani maalum?'}
            </h4>
            
            {/* Occasion Selector */}
            <div className="flex flex-wrap gap-2 mb-4">
              {occasionOptions.map((occ) => (
                <button
                  key={occ.id}
                  onClick={() => setSelectedOccasion(occ.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                    selectedOccasion === occ.id
                      ? 'border-rose-500 bg-rose-500/20 text-rose-200'
                      : 'border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-600'
                  }`}
                >
                  {lang === 'en' ? occ.nameEn : occ.nameSw}
                </button>
              ))}
            </div>

            {/* Size Switch */}
            <div className="flex items-center gap-4 text-xs text-neutral-400">
              <span className="text-white font-medium">Select Size:</span>
              <button
                onClick={() => setBouquetSize('standard')}
                className={`px-2.5 py-1 rounded transition-colors ${bouquetSize === 'standard' ? 'bg-neutral-700 text-white font-semibold' : 'text-neutral-400'}`}
              >
                Small Bunch (Ksh 500 – 700)
              </button>
              <button
                onClick={() => setBouquetSize('deluxe')}
                className={`px-2.5 py-1 rounded transition-colors ${bouquetSize === 'deluxe' ? 'bg-neutral-700 text-white font-semibold' : 'text-neutral-400'}`}
              >
                Big Banquet (Ksh 1,400 – 2,000)
              </button>
            </div>
            <p className="text-[11px] text-emerald-400/90 mt-2">
              {lang === 'en'
                ? 'Note: You will receive payment details via WhatsApp after placing your order.'
                : 'Zingatio: Maelezo ya malipo utatumiwa kupitia WhatsApp baada ya kuweka oda.'}
            </p>
          </div>

          <div className="shrink-0 text-right">
            <button
              onClick={() => handleBouquetWhatsAppOrder('Tailored Milestone Bouquet', bouquetOptions[bouquetSize].labelEn)}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 active:scale-98 rounded-lg shadow-sm transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>
                {lang === 'en' ? 'Order on WhatsApp' : 'Weka Oda WhatsApp'}
              </span>
            </button>
            <span className="block text-[11px] text-neutral-400 mt-1">
              Direct dispatch from Juja Farm
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
