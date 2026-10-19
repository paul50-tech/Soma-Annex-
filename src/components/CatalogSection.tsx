import React, { useState } from 'react';
import { ProductCategory, ProductItem, Language } from '../types';
import { PRODUCTS, COMPANY_INFO } from '../data/somaData';
import { PRODUCT_PHOTO_MAP } from '../data/somaImages';
import { SomaImage } from './SomaImage';
import { ProductDetailModal } from './ProductDetailModal';
import { WhatsAppIcon, SproutEmblem, Tray128GridIcon, SachetAromaIcon, RootPlugIcon } from './BotanicalIcons';

interface CatalogSectionProps {
  lang: Language;
  onSelectProductForCalculator: (productId: string) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  lang,
  onSelectProductForCalculator,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categories: { id: ProductCategory; labelEn: string; labelSw: string; count: number }[] = [
    { id: 'all', labelEn: 'All Nursery Catalog', labelSw: 'Bidhaa Zote', count: PRODUCTS.length },
    { id: 'leafy-greens', labelEn: 'Leafy Greens & Brassicas', labelSw: 'Miche ya Mboga', count: PRODUCTS.filter(p => p.category === 'leafy-greens').length },
    { id: 'herbs-succulents', labelEn: 'Medicinal Herbs & Succulents', labelSw: 'Mimea ya Dawa na Viungo', count: PRODUCTS.filter(p => p.category === 'herbs-succulents').length },
    { id: 'floriculture', labelEn: 'Floriculture & Cut Flowers', labelSw: 'Maua na Mapambo', count: PRODUCTS.filter(p => p.category === 'floriculture').length },
    { id: 'inputs-value-add', labelEn: 'Inputs, Feed & Wellness', labelSw: 'Substrate & Thamani', count: PRODUCTS.filter(p => p.category === 'inputs-value-add').length },
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      item.nameEn.toLowerCase().includes(query) ||
      item.nameSw.toLowerCase().includes(query) ||
      item.variety.toLowerCase().includes(query) ||
      item.primaryUseEn.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const handleQuickWhatsApp = (product: ProductItem) => {
    const text = encodeURIComponent(
      lang === 'en'
        ? `Hello Soma Annex Farm, I want to order ${product.nameEn} (${product.variety}). Please confirm readiness at Juja nursery.`
        : `Jambo Soma Annex Farm, ninahitaji kuagiza ${product.nameSw} (${product.variety}). Naomba kuthibitisha upatikanaji kitaluni Juja.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${text}`, '_blank');
  };

  const renderProductIllustration = (item: ProductItem) => {
    switch (item.iconType) {
      case 'sachet':
        return <SachetAromaIcon className="w-12 h-12 text-emerald-700" />;
      case 'substrate':
        return <Tray128GridIcon className="w-12 h-12 text-emerald-800" />;
      case 'flower':
        return (
          <svg className="w-12 h-12 text-rose-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="16" cy="16" r="4" fill="#F43F5E" fillOpacity="0.2" />
            <path d="M16 6C13 6 12 10 16 12C20 10 19 6 16 6Z" fill="#F43F5E" fillOpacity="0.2" />
            <path d="M16 26C13 26 12 22 16 20C20 22 19 26 16 26Z" fill="#F43F5E" fillOpacity="0.2" />
            <path d="M6 16C6 13 10 12 12 16C10 20 6 19 6 16Z" fill="#F43F5E" fillOpacity="0.2" />
            <path d="M26 16C26 13 22 12 20 16C22 20 26 19 26 16Z" fill="#F43F5E" fillOpacity="0.2" />
          </svg>
        );
      case 'herb':
        return (
          <svg className="w-12 h-12 text-emerald-700" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M16 28V6" stroke="currentColor" strokeWidth="2" />
            <path d="M16 10C21 8 23 12 16 14" fill="#10B981" fillOpacity="0.2" />
            <path d="M16 16C11 14 9 18 16 20" fill="#10B981" fillOpacity="0.2" />
            <path d="M16 20C21 18 23 22 16 24" fill="#10B981" fillOpacity="0.2" />
          </svg>
        );
      case 'succulent':
        return (
          <svg className="w-12 h-12 text-teal-700" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M16 4C14 10 14 24 16 28C18 24 18 10 16 4Z" fill="#0D9488" fillOpacity="0.2" />
            <path d="M10 12C9 17 11 25 14 28" />
            <path d="M22 12C23 17 21 25 18 28" />
          </svg>
        );
      case 'poultry':
        return (
          <svg className="w-12 h-12 text-amber-700" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="16" cy="16" r="10" stroke="currentColor" fill="#F59E0B" fillOpacity="0.15" />
            <path d="M12 15C13 13 15 13 16 15C17 17 19 17 20 15" strokeLinecap="round" />
            <path d="M14 20H18" strokeLinecap="round" />
          </svg>
        );
      default:
        return <RootPlugIcon className="w-12 h-12 text-emerald-700" />;
    }
  };

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
            <span>Soma Annex Nursery</span>
            <span aria-hidden="true">·</span>
            <span>Juja Demonstration Plots</span>
            <span aria-hidden="true">·</span>
            <span>Dual-Tier Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-display mb-4" style={{ textWrap: 'balance' }}>
            {lang === 'en' ? 'Propagated Seedling Catalog & Pricing' : 'Katalogi ya Miche na Bei Rasmi'}
          </h2>

          <p className="text-base text-neutral-600 leading-relaxed">
            {lang === 'en'
              ? 'Raised in sterile, buffered cocopeat in 128-cell UV-stabilized plug trays. All seedlings undergo structured sun-hardening before release to guarantee rapid root establishment and zero field mortality.'
              : 'Miche yetu inakuzwa kwenye substrate ya cocopeat ndani ya trei za kisasa za chemba 128. Imestahimishwa jua na upepo tayari kupandwa shambani bila mshtuko.'}
          </p>
        </div>

        {/* Filter Controls (Allowed as interactive buttons per Frontend Constitution) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-white text-emerald-950 shadow-xs border border-neutral-200/60'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50'
                }`}
              >
                <span>{lang === 'en' ? cat.labelEn : cat.labelSw}</span>
                <span className="text-[10px] opacity-60 font-mono">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder={lang === 'en' ? 'Search cabbage, herbs, roses...' : 'Tafuta kabichi, dawa, maua...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none text-neutral-900"
            />
            <svg className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-neutral-50 rounded-xl border border-neutral-200">
            <SproutEmblem className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-neutral-800">
              {lang === 'en' ? 'No items match your search' : 'Hakuna bidhaa inayolingana na utafutaji wako'}
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              {lang === 'en' ? 'Try searching for "cabbage", "spinach", "roses" or clear filters.' : 'Jaribu kutafuta "kabichi", "spinach", au "waridi".'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100 rounded-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((item) => {
              const photoEntry = PRODUCT_PHOTO_MAP[item.id];
              return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-neutral-200 hover:border-emerald-600/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                
                {/* Visual Header Strip with Authentic Soma Annex Photo */}
                {photoEntry?.primary ? (
                  <div
                    onClick={() => setSelectedProduct(item)}
                    className="h-48 relative overflow-hidden border-b border-neutral-100 cursor-pointer"
                  >
                    <SomaImage
                      src={photoEntry.primary}
                      alt={`${item.nameEn} - ${item.variety}`}
                      className="w-full h-full"
                      imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent flex items-end justify-between p-4">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-300 tracking-wider uppercase block">
                          {item.category.replace('-', ' ')}
                        </span>
                        <span className="text-xs font-mono text-white/95 block mt-0.5">
                          {item.variety}
                        </span>
                      </div>
                      {photoEntry.gallery.length > 1 && (
                        <span className="text-[10px] font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded">
                          {photoEntry.gallery.length} photos
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="h-36 bg-gradient-to-br from-emerald-50/70 via-neutral-50 to-neutral-100/50 p-4 border-b border-neutral-100 flex items-center justify-between relative overflow-hidden">
                    <div className="z-10">
                      <span className="text-[11px] font-semibold text-emerald-800 tracking-wider uppercase block">
                        {item.category.replace('-', ' ')}
                      </span>
                      <span className="text-xs font-mono text-neutral-500 block mt-0.5">
                        {item.variety}
                      </span>
                    </div>

                    <div className="p-3 bg-white/90 backdrop-blur-xs rounded-xl shadow-xs border border-neutral-200/50 group-hover:scale-105 transition-transform z-10">
                      {renderProductIllustration(item)}
                    </div>

                    <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full border border-emerald-500/10 pointer-events-none" />
                  </div>
                )}

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-emerald-800 transition-colors font-display mb-1.5">
                      {lang === 'en' ? item.nameEn : item.nameSw}
                    </h3>

                    {/* Unboxed clean metadata (NO pill badges) */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                      {item.nurseryReadiness && (
                        <>
                          <span>Kitaluni: {item.nurseryReadiness}</span>
                          <span aria-hidden="true">·</span>
                        </>
                      )}
                      {item.fieldMaturity && (
                        <span>Mavuno: {item.fieldMaturity}</span>
                      )}
                    </div>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                      {lang === 'en' ? item.primaryUseEn : item.primaryUseSw}
                    </p>
                  </div>

                  {/* Pricing and Action Strip */}
                  <div className="pt-4 border-t border-neutral-100">
                    <div className="mb-4">
                      {item.retailPriceKES ? (
                        <div className="flex items-baseline justify-between">
                          <div>
                            <span className="block text-[11px] text-neutral-400">
                              {lang === 'en' ? 'Price / item' : 'Bei / kipengee'}
                            </span>
                            <span className="text-base font-bold font-mono text-neutral-900 tabular-nums">
                              KES {item.retailPriceKES}
                            </span>
                          </div>
                          {item.wholesalePriceKES && (
                            <div className="text-right">
                              <span className="block text-[11px] text-emerald-700 font-medium">
                                {lang === 'en' ? 'Wholesale (100+)' : 'Jumla (100+)'}
                              </span>
                              <span className="text-base font-bold font-mono text-emerald-800 tabular-nums">
                                KES {item.wholesalePriceKES}
                              </span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div>
                          <span className="block text-[11px] text-neutral-400">
                            {lang === 'en' ? 'Pricing (Retail & Wholesale)' : 'Bei (Rejareja & Jumla)'}
                          </span>
                          <span className="text-xs font-semibold text-emerald-800">
                            {lang === 'en' ? (item.priceNote || 'Quote on Request') : (item.priceNoteSw || 'Bei kwa Maombi')}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Interactive Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedProduct(item)}
                        className="py-2 px-2.5 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 active:scale-98 rounded-lg transition-colors text-center whitespace-nowrap truncate"
                      >
                        {lang === 'en' ? 'Agronomy Guide' : 'Maelezo ya Zao'}
                      </button>

                      <button
                        onClick={() => handleQuickWhatsApp(item)}
                        className="py-2 px-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-98 rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-xs"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-200" />
                        <span>{lang === 'en' ? 'WhatsApp' : 'Agiza'}</span>
                      </button>
                    </div>

                  </div>

                </div>

              </div>
              );
            })}
          </div>
        )}

        {/* Catalog Banner to Calculate Tray Packaging */}
        <div className="mt-12 p-6 sm:p-8 bg-neutral-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              {lang === 'en' ? 'Commercial Farmer Support' : 'Huduma ya Wakulima wa Biashara'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
              {lang === 'en' ? 'Need 500 to 50,000+ Seedling Plugs?' : 'Unahitaji Miche 500 hadi 50,000+?'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {lang === 'en'
                ? 'We book staggered advance nursery propagation contracts with scheduled delivery dates tailored to your land preparation and irrigation schedule.'
                : 'Tunapokea maagizo ya mapema ya vitalu kwa ajili ya mashamba makubwa. Tunapanga tarehe maalum za kuotesha ili ufikishiwe miche tayari shambani kwako.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectProductForCalculator('sukuma-wiki')}
              className="px-5 py-3 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-100 active:scale-98 rounded-lg transition-colors whitespace-nowrap"
            >
              {lang === 'en' ? 'Open Tray Calculator' : 'Piga Hesabu ya Trei'}
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent(
                lang === 'en' 
                  ? 'Hello Soma Annex, I want to discuss a bulk commercial nursery contract (500+ seedlings).'
                  : 'Jambo Soma Annex, ninahitaji makubaliano ya kuoteshewa miche mingi ya biashara (500+).'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 text-xs font-semibold text-emerald-300 border border-emerald-500/50 hover:bg-emerald-950 active:scale-98 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'en' ? 'Commercial Inquiry' : 'Wasiliana na Mkurugenzi'}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Modal for Agronomic Detail */}
      <ProductDetailModal
        product={selectedProduct}
        lang={lang}
        onClose={() => setSelectedProduct(null)}
        onSelectForCalculator={onSelectProductForCalculator}
      />
    </section>
  );
};
