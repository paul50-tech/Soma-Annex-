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
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  activeCategory?: ProductCategory;
  onCategoryChange?: (category: ProductCategory) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  lang,
  onSelectProductForCalculator,
  searchQuery: externalSearchQuery,
  onSearchChange: externalOnSearchChange,
  activeCategory: externalActiveCategory,
  onCategoryChange: externalOnCategoryChange,
}) => {
  const [internalActiveCategory, setInternalActiveCategory] = useState<ProductCategory>('all');
  const [internalSearchQuery, setInternalSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const activeCategory = externalActiveCategory !== undefined ? externalActiveCategory : internalActiveCategory;
  const setActiveCategory = externalOnCategoryChange || setInternalActiveCategory;

  const searchQuery = externalSearchQuery !== undefined ? externalSearchQuery : internalSearchQuery;
  const setSearchQuery = externalOnSearchChange || setInternalSearchQuery;

  const categories: { id: ProductCategory; labelEn: string; labelSw: string; count: number }[] = [
    { id: 'all', labelEn: 'All Nursery Catalog', labelSw: 'Bidhaa Zote', count: PRODUCTS.length },
    { id: 'leafy-greens', labelEn: 'Leafy Greens & Brassicas', labelSw: 'Miche ya Mboga', count: PRODUCTS.filter(p => p.category === 'leafy-greens').length },
    { id: 'herbs-succulents', labelEn: 'Medicinal Herbs & Succulents', labelSw: 'Mimea ya Dawa na Viungo', count: PRODUCTS.filter(p => p.category === 'herbs-succulents').length },
    { id: 'floriculture', labelEn: 'Floriculture & Cut Flowers', labelSw: 'Maua na Mapambo', count: PRODUCTS.filter(p => p.category === 'floriculture').length },
    { id: 'inputs-value-add', labelEn: 'Inputs, Feed & Wellness', labelSw: 'Substrate & Thamani', count: PRODUCTS.filter(p => p.category === 'inputs-value-add').length },
  ];

  const categoryKeywords: Record<ProductCategory, string[]> = {
    all: [],
    'leafy-greens': [
      'leafy', 'greens', 'brassica', 'brassicas', 'vegetable', 'vegetables',
      'mboga', 'miche ya mboga', 'greens and brassicas', 'kales', 'sukuma', 'cabbage', 'spinach', 'lettuce'
    ],
    'herbs-succulents': [
      'herb', 'herbs', 'medicinal', 'succulent', 'succulents', 'viungo',
      'mimea ya dawa', 'dawa', 'aromatic', 'tea', 'spices', 'medicinal herbs'
    ],
    'floriculture': [
      'floriculture', 'flower', 'flowers', 'cut flower', 'cut flowers',
      'maua', 'mapambo', 'ornamental', 'landscaping', 'floral', 'roses', 'rose'
    ],
    'inputs-value-add': [
      'input', 'inputs', 'substrate', 'feed', 'wellness', 'poultry',
      'chicken', 'chickens', 'kuku', 'thamani', 'value add', 'value addition',
      'cocopeat', 'sachet', 'sachets', 'pullets', 'compost', 'produce'
    ],
  };

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();

    if (!query) {
      return matchesCategory;
    }

    // Check if query matches category metadata
    const catObj = categories.find(c => c.id === item.category);
    const categoryMatches =
      item.category.toLowerCase().includes(query) ||
      (catObj && (catObj.labelEn.toLowerCase().includes(query) || catObj.labelSw.toLowerCase().includes(query))) ||
      (categoryKeywords[item.category] && categoryKeywords[item.category].some(kw => query.includes(kw) || kw.includes(query)));

    const textMatches =
      item.nameEn.toLowerCase().includes(query) ||
      item.nameSw.toLowerCase().includes(query) ||
      item.variety.toLowerCase().includes(query) ||
      item.primaryUseEn.toLowerCase().includes(query) ||
      item.primaryUseSw.toLowerCase().includes(query) ||
      item.descriptionEn.toLowerCase().includes(query) ||
      item.descriptionSw.toLowerCase().includes(query) ||
      item.highlights.some(h => h.toLowerCase().includes(query));

    return matchesCategory && (textMatches || categoryMatches);
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

        {/* Filter Controls */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
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

            {/* In-Catalog Search Bar */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                placeholder={lang === 'en' ? 'Filter by name or category (e.g. cabbage, herbs)...' : 'Tafuta kwa jina au kategoria (mf. mboga, dawa)...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none text-neutral-900 transition-all placeholder:text-neutral-400"
              />
              <svg className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  title={lang === 'en' ? 'Clear search' : 'Futa utafutaji'}
                  className="absolute right-2.5 top-2 p-0.5 text-neutral-400 hover:text-neutral-700 rounded-md hover:bg-neutral-200/60 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

          </div>

          {/* Active Filter & Results Summary Bar */}
          <div className="flex flex-wrap items-center justify-between text-xs text-neutral-600 pt-2 border-t border-neutral-100 gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-medium text-neutral-700">
                {lang === 'en'
                  ? `Showing ${filteredProducts.length} of ${PRODUCTS.length} varieties`
                  : `Inaonyesha aina ${filteredProducts.length} kati ya ${PRODUCTS.length}`}
              </span>
              
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-md text-[11px]">
                  <span>"{searchQuery}"</span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="hover:text-emerald-700 ml-0.5"
                    title={lang === 'en' ? 'Remove filter' : 'Ondoa kichujio'}
                  >
                    ×
                  </button>
                </span>
              )}

              {activeCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-200 rounded-md text-[11px]">
                  <span>{categories.find(c => c.id === activeCategory)?.[lang === 'en' ? 'labelEn' : 'labelSw']}</span>
                  <button
                    onClick={() => setActiveCategory('all')}
                    className="hover:text-neutral-900 ml-0.5"
                    title={lang === 'en' ? 'Reset category' : 'Weka upya kundi'}
                  >
                    ×
                  </button>
                </span>
              )}
            </div>

            {(searchQuery || activeCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 hover:underline transition-colors"
              >
                {lang === 'en' ? 'Clear all filters' : 'Futa vichujio vyote'}
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-neutral-50 rounded-xl border border-neutral-200">
            <SproutEmblem className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-neutral-900">
              {lang === 'en' ? 'No seedlings or produce match your search' : 'Hakuna miche au mazao yanayolingana na utafutaji wako'}
            </h3>
            <p className="text-xs text-neutral-500 max-w-md mx-auto mt-1 mb-4 leading-relaxed">
              {searchQuery
                ? lang === 'en'
                  ? `No results found for "${searchQuery}" in ${activeCategory === 'all' ? 'any category' : categories.find(c => c.id === activeCategory)?.labelEn}. Try checking the spelling or browse suggestions below.`
                  : `Hakuna matokeo ya "${searchQuery}". Jaribu kurekebisha jina au bonyeza mapendekezo hapa chini.`
                : lang === 'en'
                ? 'No items found in this category at this moment.'
                : 'Hakuna bidhaa kwenye kategoria hii kwa sasa.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <span className="text-[11px] text-neutral-400">
                {lang === 'en' ? 'Suggested searches:' : 'Matafuto yaliyopendekezwa:'}
              </span>
              {['Sukuma Wiki', 'Cabbage', 'Rosemary', 'Spinach', 'Roses', 'Cocopeat'].map((sug) => (
                <button
                  key={sug}
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery(sug);
                  }}
                  className="px-2.5 py-1 text-xs font-medium text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-50 rounded-md transition-colors"
                >
                  {sug}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors"
            >
              {lang === 'en' ? 'Reset All Filters & View Catalog' : 'Weka Upya na Tazama Bidhaa Zote'}
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
                                {lang === 'en' ? 'Wholesale (1,000+)' : 'Jumla (1,000+)'}
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
