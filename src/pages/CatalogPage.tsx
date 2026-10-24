import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Language, ProductCategory } from '../types';
import { CatalogSection } from '../components/CatalogSection';
import { Tray128GridIcon } from '../components/BotanicalIcons';
import { PWAInstallButton } from '../components/PWAInstallButton';
import { PRODUCTS } from '../data/somaData';

interface CatalogPageProps {
  lang: Language;
  onSelectProductForCalculator: (cropId: string) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  lang,
  onSelectProductForCalculator,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read initial filter values from URL parameters
  const paramQuery = searchParams.get('q') || searchParams.get('search') || '';
  const paramCategory = (searchParams.get('category') as ProductCategory) || 'all';

  const [searchQuery, setSearchQuery] = useState<string>(paramQuery);
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(
    ['all', 'leafy-greens', 'herbs-succulents', 'floriculture', 'inputs-value-add'].includes(paramCategory)
      ? paramCategory
      : 'all'
  );

  // Sync state changes to URL query params without reloading
  useEffect(() => {
    const nextParams = new URLSearchParams();
    if (searchQuery.trim()) {
      nextParams.set('q', searchQuery.trim());
    }
    if (activeCategory !== 'all') {
      nextParams.set('category', activeCategory);
    }
    setSearchParams(nextParams, { replace: true });
  }, [searchQuery, activeCategory, setSearchParams]);

  const quickCategories: { id: ProductCategory; labelEn: string; labelSw: string }[] = [
    { id: 'all', labelEn: 'All Varieties', labelSw: 'Zote' },
    { id: 'leafy-greens', labelEn: 'Leafy Greens', labelSw: 'Mboga' },
    { id: 'herbs-succulents', labelEn: 'Herbs & Succulents', labelSw: 'Dawa & Viungo' },
    { id: 'floriculture', labelEn: 'Flowers & Roses', labelSw: 'Maua & Waridi' },
    { id: 'inputs-value-add', labelEn: 'Inputs & Produce', labelSw: 'Substrate & Kuku' },
  ];

  const popularSearches = [
    { labelEn: 'Sukuma Wiki', labelSw: 'Sukuma Wiki', query: 'Sukuma Wiki' },
    { labelEn: 'Gloria Cabbage', labelSw: 'Kabichi ya Gloria', query: 'Cabbage' },
    { labelEn: 'Fordhook Spinach', labelSw: 'Spinach', query: 'Spinach' },
    { labelEn: 'Rosemary', labelSw: 'Rosemary', query: 'Rosemary' },
    { labelEn: 'Medicinal Aloe', labelSw: 'Aloe Vera', query: 'Aloe' },
    { labelEn: 'Snake Plant', labelSw: 'Snake Plant', query: 'Snake Plant' },
    { labelEn: 'Cut Roses', labelSw: 'Waridi', query: 'Rose' },
    { labelEn: 'Buffered Cocopeat', labelSw: 'Cocopeat', query: 'Cocopeat' },
    { labelEn: 'Kenbro Chickens', labelSw: 'Vifaranga vya Kenbro', query: 'Kenbro' },
  ];

  const handleClearFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };

  return (
    <div className="bg-white">
      {/* Header with Integrated Search Bar */}
      <div className="bg-emerald-950 text-white pt-10 pb-12 border-b border-emerald-900 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Seedling Catalog</span>
          </div>

          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
              Sterile Cocopeat · 128-Cell UV Plug Trays · Sun-Hardened
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-3">
              {lang === 'en' ? 'Propagated Seedling Varieties' : 'Aina za Miche ya Kitaluni'}
            </h1>
            <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed">
              {lang === 'en'
                ? 'Every seedling is raised in buffered coconut coir with intact, fibrous root balls. Zero field transplant shock, verified by agronomists prior to handover.'
                : 'Kila mche unakuzwa kwa ustadi ndani ya cocopeat safi. Mizizi imara inayoshika ardhi haraka bila kusinyaa shambani.'}
            </p>
          </div>

          {/* Interactive Search Bar Panel */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 max-w-4xl shadow-xl">
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
              
              {/* Main Search Input Field */}
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    lang === 'en'
                      ? 'Search seedlings & produce by name (e.g. Sukuma, Cabbage) or category (e.g. Herbs, Flowers)...'
                      : 'Tafuta miche na mazao kwa jina (mf. Sukuma, Kabichi) au kategoria (mf. Dawa, Maua)...'
                  }
                  className="w-full pl-11 pr-10 py-3 sm:py-3.5 text-sm sm:text-base bg-white text-neutral-900 placeholder:text-neutral-500 rounded-xl outline-none focus:ring-3 focus:ring-emerald-400 transition-all font-medium shadow-sm"
                  aria-label={lang === 'en' ? 'Search seedling and produce catalog' : 'Tafuta kwenye orodha ya miche na mazao'}
                />
                
                {/* Search Icon */}
                <svg
                  className="w-5 h-5 text-emerald-700 absolute left-3.5 top-3.5 sm:top-4 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>

                {/* Clear Input Button */}
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    title={lang === 'en' ? 'Clear search text' : 'Futa maneno'}
                    className="absolute right-3 top-3 sm:top-3.5 p-1 text-neutral-400 hover:text-neutral-800 rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Category Quick Filter Dropdown on Mobile / Segment on Tablet+ */}
              <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto pb-1 md:pb-0">
                {quickCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                      activeCategory === cat.id
                        ? 'bg-emerald-400 text-emerald-950 shadow-sm'
                        : 'bg-white/15 text-white hover:bg-white/25 border border-white/10'
                    }`}
                  >
                    {lang === 'en' ? cat.labelEn : cat.labelSw}
                  </button>
                ))}
              </div>

            </div>

            {/* Popular Search Suggestion Tags & Reset Control */}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-emerald-300 font-medium">
                  {lang === 'en' ? 'Popular searches:' : 'Matafuto maarufu:'}
                </span>
                {popularSearches.map((item) => (
                  <button
                    key={item.query}
                    onClick={() => {
                      setSearchQuery(item.query);
                    }}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                      searchQuery.toLowerCase() === item.query.toLowerCase()
                        ? 'bg-emerald-300 text-emerald-950 font-bold'
                        : 'bg-white/10 text-emerald-100 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {lang === 'en' ? item.labelEn : item.labelSw}
                  </button>
                ))}
              </div>

              {(searchQuery || activeCategory !== 'all') && (
                <button
                  onClick={handleClearFilters}
                  className="text-emerald-300 hover:text-white underline font-semibold text-xs ml-auto transition-colors"
                >
                  {lang === 'en' ? 'Clear all filters' : 'Weka upya filters zote'}
                </button>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Offline App Install Banner for Field Farmers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <PWAInstallButton variant="banner" />
      </div>

      {/* Synchronized Catalog Component */}
      <CatalogSection
        lang={lang}
        onSelectProductForCalculator={onSelectProductForCalculator}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Fast Tray Calculator Prompt */}
      <section className="py-12 bg-neutral-100/80 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl">
              <Tray128GridIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 font-display">
                {lang === 'en' ? 'Need an exact tray calculation for your acreage?' : 'Unahitaji hesabu ya trei kulingana na ekari zako?'}
              </h3>
              <p className="text-xs text-neutral-600 mt-0.5">
                {lang === 'en'
                  ? 'Calculate full 128-cell trays or loose plugs with Kiambu & Nairobi delivery options.'
                  : 'Piga hesabu kamili ya trei za chemba 128 au miche ya rejareja.'}
              </p>
            </div>
          </div>

          <Link
            to="/order"
            className="px-6 py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all whitespace-nowrap shadow-xs"
          >
            {lang === 'en' ? 'Go to Tray Calculator' : 'Fungua Kikokotoo'} &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};
