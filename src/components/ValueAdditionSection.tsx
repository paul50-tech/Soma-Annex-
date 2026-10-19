import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/somaData';
import { SOMA_PHOTOS } from '../data/somaImages';
import { SomaImage } from './SomaImage';
import { SachetAromaIcon, WhatsAppIcon, SproutEmblem } from './BotanicalIcons';

interface ValueAdditionProps {
  lang: Language;
}

export const ValueAdditionSection: React.FC<ValueAdditionProps> = ({ lang }) => {
  const [selectedSachetImg, setSelectedSachetImg] = useState<number>(0);

  const sachetGallery = [
    {
      url: SOMA_PHOTOS.sachetHandHeldLabel,
      captionEn: 'Official Soma Annex Antistress Relaxation Sniff Sachet',
    },
    {
      url: SOMA_PHOTOS.sachetPackagedCases,
      captionEn: 'Hygienically packaged botanical sniff sachets with storage cases',
    },
    {
      url: SOMA_PHOTOS.sachetCloseUpPack,
      captionEn: 'Sun-cured lavender, chamomile & peppermint terpene blend',
    },
    {
      url: SOMA_PHOTOS.sachetHygienicBoxes,
      captionEn: 'Airtight protective cases preserving volatile herbal terpenes',
    },
  ];

  const handleSachetOrder = () => {
    const text = encodeURIComponent(
      lang === 'en'
        ? `Hello Soma Annex, I want to order Antistress Relaxation Sniff Sachets (KSh 50 per sachet) formulated with nursery lavender, chamomile, and peppermint. Please confirm availability and share payment details.`
        : `Jambo Soma Annex, ninahitaji kuagiza vifurushi vya asili vya kutuliza msongo wa mawazo na usingizi (Antistress Relaxation Sachets) kwa KSh 50 kwa kila kifurushi. Naomba maelezo ya malipo na upatikanaji.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${text}`, '_blank');
  };

  const handleTermiteInquiry = () => {
    const text = encodeURIComponent(
      lang === 'en'
        ? `Hello Soma Annex, I am inquiring about your Termite Production Farming (organic live chicken feed) system and starter kits.`
        : `Jambo Soma Annex, naulizia kuhusu mfumo wa kuzalisha mchwa kwa ajili ya chakula cha kuku wa asili (Termite Live Feed).`
    );
    window.open(`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${text}`, '_blank');
  };

  return (
    <section id="value-add" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">
            {lang === 'en' ? 'Specialty Innovations & Circular Agribusiness' : 'Ubunifu wa Ziada wa Kilimo'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-900 mb-4" style={{ textWrap: 'balance' }}>
            {lang === 'en' ? 'Botanical Wellness & High-Protein Live Feed' : 'Tiba za Asili za Mitishamba na Lishe ya Kuku'}
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            {lang === 'en'
              ? 'Beyond standard seedling propagation, Soma Annex Planters pioneers plant-based therapeutic value-addition and sustainable circular farm biology.'
              : 'Zaidi ya miche, Soma Annex inatengeneza vifurushi vya mitishamba ya uponyaji na uzalishaji wa chakula cha asili chenye protini nyingi kwa ndege wa kufugwa.'}
          </p>
        </div>

        {/* 2-Column Asymmetric Innovation Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Card 1: Antistress Relaxation Sniff Sachets (Featured Spotlight - 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100">
                    <SachetAromaIcon className="w-8 h-8 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 font-display">
                      {lang === 'en' ? 'Antistress Relaxation Sniff Sachets' : 'Vifurushi vya Usingizi na Utulivu wa Akili'}
                    </h3>
                    <p className="text-xs text-emerald-800 font-medium">
                      {lang === 'en' ? 'Botanical Sleep Aids · 100% Plant Based' : 'Mitishamba Asilia · Bila Kemikali'}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base sm:text-lg font-bold text-emerald-900 font-mono">
                    KES 50
                  </span>
                  <span className="block text-[11px] text-emerald-700 font-medium">
                    {lang === 'en' ? 'per sachet' : 'kwa kifurushi'}
                  </span>
                </div>
              </div>

              {/* Authentic Sachet Photo Showcase with Interactive Thumbnails */}
              <div className="mb-6">
                <div className="relative h-60 sm:h-68 rounded-xl overflow-hidden border border-neutral-200 mb-2.5">
                  <SomaImage
                    src={sachetGallery[selectedSachetImg].url}
                    alt={sachetGallery[selectedSachetImg].captionEn}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3.5">
                    <span className="text-xs font-medium text-white/95">
                      {sachetGallery[selectedSachetImg].captionEn}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {sachetGallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSachetImg(idx)}
                      className={`h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedSachetImg === idx
                          ? 'border-emerald-600 ring-2 ring-emerald-500/20'
                          : 'border-neutral-200 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <SomaImage
                        src={img.url}
                        alt={img.captionEn}
                        className="w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Hand-crafted at our Juja farm from sun-cured nursery lavender, chamomile blossoms, lemon balm, and peppermint. Naturally high in the terpenes linalyl acetate and linalool, which interact with olfactory receptors to calm nervous excitability and induce restorative sleep.'
                  : 'Vimetengenezwa kwa umaridadi kwa kutumia lavender, chamomile, lemon balm na nanaa zilizovunwa shambani Juja. Zina misombo halisi ya linalool na linalyl acetate inayotuliza ubongo na kuleta usingizi mzito wa amani.'}
              </p>

              {/* Mode of Usage & Verified Ingredients */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-emerald-50/50 rounded-xl p-4 border border-emerald-100 mb-6 text-xs">
                <div>
                  <strong className="block text-emerald-950 font-semibold mb-1">
                    {lang === 'en' ? 'Active Herbal Compounds:' : 'Virutubisho Hai vya Asili:'}
                  </strong>
                  <ul className="text-neutral-700 space-y-1">
                    <li>• <strong>Linalyl Acetate & Linalool</strong> (Lavender)</li>
                    <li>• <strong>Menthol & Menthone</strong> (Peppermint)</li>
                    <li>• <strong>Apigenin Terpenes</strong> (Chamomile)</li>
                  </ul>
                </div>

                <div>
                  <strong className="block text-emerald-950 font-semibold mb-1">
                    {lang === 'en' ? 'Mode of Usage:' : 'Jinsi ya Kutumia:'}
                  </strong>
                  <p className="text-neutral-700 leading-relaxed">
                    {lang === 'en'
                      ? 'Actively sniff / inhale the sachet deeply for 3 to 5 minutes before sleep or during high stress moments. Store in airtight container.'
                      : 'Vuta harufu ya kifurushi kwa pua kwa dakika 3 hadi 5 kabla ya kulala au unapochoka. Hifadhi vizuri kwenye kasha lake.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs text-neutral-500 font-mono block">
                  {lang === 'en' ? 'Breathable botanical pouch · KES 50 / sachet' : 'Kifungashio maalum cha asili · KES 50 / kifurushi'}
                </span>
                <span className="text-[11px] text-emerald-700 font-medium">
                  {lang === 'en' ? 'Payment details sent on WhatsApp after order' : 'Maelezo ya malipo hutumwa WhatsApp baada ya kuweka oda'}
                </span>
              </div>
              <button
                onClick={handleSachetOrder}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-2 shadow-xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                <span>{lang === 'en' ? 'Order (KES 50 / sachet)' : 'Agiza (KES 50 / kifurushi)'}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Termite Production Live Feed & Tissue Culture (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Termite Poultry Feed */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-3">
                  <span className="text-xs font-mono text-amber-700 font-semibold">
                    {lang === 'en' ? 'High-Protein Poultry Feed' : 'Chakula cha Kuku cha Kienyeji'}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">45% Protein</span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 font-display mb-1.5">
                  {lang === 'en' ? 'Termite Production Farming' : 'Ufugaji wa Mchwa kwa Chakula'}
                </h3>
                
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {lang === 'en'
                    ? 'Sustainable closed-loop organic feed supplying live termites rich in crude protein, healthy fats, and amino acids. Replaces costly industrial concentrates and enriches egg yolk vibrancy.'
                    : 'Uzalishaji endelevu wa mchwa hai kama lishe ya protini ya kuku. Huongeza uzito, afya ya manyoya na kuboresha viini vya mayai bila kemikali.'}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-900 font-mono">
                  {lang === 'en' ? 'Price on Request' : 'Bei kwa Maombi'}
                </span>
                <button
                  onClick={handleTermiteInquiry}
                  className="px-3.5 py-1.5 text-xs font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors"
                >
                  {lang === 'en' ? 'Inquire on Feed' : 'Ulizia Chakula'}
                </button>
              </div>
            </div>

            {/* Tissue Culture & Clean Rhizomes */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs flex-1 flex flex-col justify-between">
              <div>
                <div className="h-40 relative overflow-hidden">
                  <SomaImage
                    src={SOMA_PHOTOS.garlicAlliumLabeled}
                    alt="Labeled Garlic and Vegetative Stock at Soma Annex"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-between p-3.5">
                    <span className="text-xs font-mono text-emerald-300 font-semibold">
                      {lang === 'en' ? 'Biotechnology Clean Stock' : 'Mizizi Safi Isiyo na Magonjwa'}
                    </span>
                    <span className="text-[11px] font-mono text-white/90">Zero Bacterial Wilt</span>
                  </div>
                </div>

                <div className="p-6 pb-0">
                  <h3 className="text-lg font-bold text-neutral-900 font-display mb-1.5">
                    {lang === 'en' ? 'Tissue Culture & Vegetative Tubers' : 'Miche ya Mizizi ya Viazi & Viungo'}
                  </h3>
                  
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {lang === 'en'
                      ? 'Screened vegetative planting stock for root/tuber crops (garlic, cassava, orange-fleshed sweet potatoes) and culinary rhizomes (ginger, turmeric). Prevents virus carryover across growing seasons.'
                      : 'Mizizi na mikata ya kitunguu saumu, viazi lishe, tangawizi na manjano iliyopimwa maabara kuzuia magonjwa ya virusi na mnyauko wa bakteria.'}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500">Juja Campus propagation</span>
                <a
                  href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent(
                    lang === 'en' 
                      ? 'Hello Soma Annex, I want to inquire about tissue culture planting stock and tuber seedlings.'
                      : 'Jambo Soma Annex, ninahitaji miche ya mizizi ya viazi lishe na viungo.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
                >
                  {lang === 'en' ? 'Stock Inquiry' : 'Uliza Upatikanaji'}
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Nursery Substrates Banner: 5kg Cocopeat & 128 Trays */}
        <div className="bg-emerald-900 text-white rounded-2xl overflow-hidden border border-emerald-800 grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-4 h-56 lg:h-full relative">
            <SomaImage
              src={SOMA_PHOTOS.nurseryTrays128Overhead}
              alt="128-cell UV-stabilized propagation trays filled with buffered cocopeat"
              className="w-full h-full"
            />
          </div>
          <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                <SproutEmblem className="w-4 h-4 text-emerald-300" />
                <span>Nursery Propagation Supplies</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                {lang === 'en' ? 'Low-EC Buffered Cocopeat & UV-Stabilized Trays' : 'Cocopeat Safi ya Lita 70 & Trei Imara za Chemba 128'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                {lang === 'en'
                  ? 'Don’t let bad soil kill your seeds. Low-EC (<0.5 mS/cm) 5kg compressed blocks expand to ~70L of sterile moisture-holding media. Paired with heavy-duty UV 128-cell trays reusable for 15+ cycles.'
                  : 'Usiache mbegu zako zife kwenye udongo mchafu. Vitalu vya cocopeat vinatanuka hadi lita 70. Haina magonjwa na inalinda mizizi vizuri sana.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <div className="text-left sm:text-right text-xs">
                <span className="block text-emerald-200 font-medium">5kg Cocopeat & 128-cell Trays</span>
                <span className="block text-emerald-300">Quote on Request</span>
              </div>
              <a
                href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent(
                  lang === 'en'
                    ? 'Hello Soma Annex, I want to order 5kg Buffered Cocopeat blocks and 128-cell propagation trays.'
                    : 'Jambo Soma Annex, ninahitaji kuagiza vitalu vya cocopeat na trei za 128 za miche.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 text-xs font-semibold text-emerald-950 bg-white hover:bg-neutral-100 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-700" />
                <span>{lang === 'en' ? 'Order Substrates' : 'Agiza Cocopeat & Trei'}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
