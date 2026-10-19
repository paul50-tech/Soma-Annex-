import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/somaData';
import { SOMA_PHOTOS } from '../data/somaImages';
import { SomaImage } from './SomaImage';
import { SproutEmblem, RootPlugIcon, Tray128GridIcon, SachetAromaIcon, WhatsAppIcon } from './BotanicalIcons';

interface DetailedServicesSectionProps {
  lang: Language;
  onOpenOrderModal: (cropId?: string) => void;
}

export const DetailedServicesSection: React.FC<DetailedServicesSectionProps> = ({
  lang,
  onOpenOrderModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'nursery' | 'produce-florals' | 'engineering' | 'training'>('all');

  const services = [
    {
      id: 'srv-seedlings',
      category: 'nursery',
      imageUrl: SOMA_PHOTOS.cabbagePlugsClose,
      titleEn: 'Commercial & Kitchen-Garden Seedling Propagation',
      titleSw: 'Kuotesha Miche ya Mboga na Bustani za Nyumbani',
      descriptionEn: 'High-viability propagation of hybrid and open-pollinated vegetable, herb, and companion flower seedlings in 128-cell UV-stabilized plug trays. Raised in triple-washed, buffered cocopeat and finished with a structured open-field sun-hardening protocol.',
      descriptionSw: 'Kukuza miche ya mboga, viungo na maua kwenye trei maalum za chemba 128 kwa kutumia cocopeat safi. Miche inastahimishwa jua kabla ya kupandwa shambani ili kuzuia kufa.',
      icon: <RootPlugIcon className="w-6 h-6 text-emerald-700" />,
      benefits: [
        'Dense fibrous root plugs ensure near-zero transplant shock in open fields',
        'Sterile propagation media eliminates damping-off, fusarium wilt, and nematodes',
        'Shortens open-field maturity timeline by 2 to 3 weeks compared to direct seed sowing',
        'Dual-tier pricing with automatic wholesale discounts unlocked at 100+ seedlings',
      ],
      ctaLabelEn: 'Calculate & Order Trays',
      ctaLabelSw: 'Piga Hesabu ya Trei & Agiza',
      actionType: 'modal',
      cropId: 'cabbage-gloria',
    },
    {
      id: 'srv-produce',
      category: 'produce-florals',
      imageUrl: SOMA_PHOTOS.spinachSunlitLeaves,
      titleEn: 'Fresh Chemical-Free Organic Vegetables & Culinary Herbs',
      titleSw: 'Mboga Safi za Asili na Viungo vya Jikoni',
      descriptionEn: 'Dawn-harvested, pesticide-free fresh greens and culinary herbs harvested directly from our Juja demonstration plots at 6:00 AM, supplying local households, institutional kitchens, hospitals, and green grocers across Kiambu and Nairobi.',
      descriptionSw: 'Mboga freshi zilizovunwa asubuhi na mapema shambani Juja bila dawa za kemikali, zikihudumia familia, mahoteli, na wachuuzi wa mboga.',
      icon: <SproutEmblem className="w-6 h-6 text-emerald-600" />,
      benefits: [
        '100% free of synthetic pesticide residues, post-harvest chemical waxes, and chemical ripening agents',
        'Harvested at sunrise for peak cellular hydration, crunchiness, and rich iron content',
        'Direct farm-to-table traceability from Gachororo, Juja demonstration beds',
        'Available in daily bundles or scheduled recurring household and restaurant subscriptions',
      ],
      ctaLabelEn: 'Order Dawn Harvest Produce',
      ctaLabelSw: 'Agiza Mboga za Alfajiri',
      actionType: 'whatsapp',
      whatsappMsg: 'Hello Soma Annex, I want to order fresh dawn-harvested organic vegetables and culinary herbs.',
    },
    {
      id: 'srv-floriculture',
      category: 'produce-florals',
      imageUrl: SOMA_PHOTOS.bouquetLuxuryGrandWrap,
      titleEn: 'Greenhouse Cut-Roses, Chrysanthemums & Landscape Florals',
      titleSw: 'Maua ya Greenhouseni, Waridi na Mapambo',
      descriptionEn: 'Daily dawn harvest of hybrid tea and spray cut roses, radiant spray chrysanthemums, English lavender, and cascade petunia hanging baskets for residences, churches, weddings, and commercial landscaping.',
      descriptionSw: 'Uvunaji wa maua freshi ya waridi, chrysanthemum, na vikapu vya kuning\'iniza petunia kwa sherehe, nyumba na mapambo ya bustani.',
      icon: (
        <svg className="w-6 h-6 text-rose-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="16" cy="16" r="4" fill="#F43F5E" fillOpacity="0.2" />
          <path d="M16 6C13 6 12 10 16 12C20 10 19 6 16 6Z" fill="#F43F5E" fillOpacity="0.2" />
          <path d="M16 26C13 26 12 22 16 20C20 22 19 26 16 26Z" fill="#F43F5E" fillOpacity="0.2" />
          <path d="M6 16C6 13 10 12 12 16C10 20 6 19 6 16Z" fill="#F43F5E" fillOpacity="0.2" />
          <path d="M26 16C26 13 22 12 20 16C22 20 26 19 26 16Z" fill="#F43F5E" fillOpacity="0.2" />
        </svg>
      ),
      benefits: [
        'Exceptional vase life (14+ days) with sturdy, hand-graded stems cut same morning',
        'Artisan hand-tied bouquets from Ksh 500 (Chrysanthemums) and Ksh 700 (Roses & Assorted)',
        'Biological African tall marigolds that secrete alpha-terthienyl to control nematodes',
        'Pre-potted grandiflora cascade petunia baskets ready for immediate veranda display',
      ],
      ctaLabelEn: 'Order Fresh Blooms & Bouquets',
      ctaLabelSw: 'Agiza Maua Freshi',
      actionType: 'whatsapp',
      whatsappMsg: 'Hello Soma Annex, I want to order fresh cut roses / chrysanthemums / occasion bouquet.',
    },
    {
      id: 'srv-value-add',
      category: 'nursery',
      imageUrl: SOMA_PHOTOS.sachetHandHeldLabel,
      titleEn: 'Botanical Value-Addition, Natural Health & Circular Live Feed',
      titleSw: 'Tiba za Mitishamba na Chakula cha Kuku cha Mchwa',
      descriptionEn: 'Pioneering botanical health products including plant-based Antistress Relaxation Sniff Sachets (KES 50 per sachet) formulated with linalyl acetate and linalool from nursery herbs, alongside closed-loop high-protein live termite feed production for poultry.',
      descriptionSw: 'Uzalishaji wa vifurushi vya asili vya kutuliza akili na usingizi (KES 50), pamoja na ufugaji wa mchwa kama chakula chenye protini ya kuku.',
      icon: <SachetAromaIcon className="w-6 h-6 text-emerald-700" />,
      benefits: [
        'Natural plant-based terpene formulation for deep relaxation and sleep support (KES 50 / sachet)',
        'Live termite feed providing 45% crude protein, improving egg yolk richness and poultry vitality',
        'Sterile tissue-culture multiplication preventing bacterial wilt in sweet potato and ginger rhizomes',
        'Buffered 5kg cocopeat blocks expanding to ~70L for home potting and nursery propagation',
      ],
      ctaLabelEn: 'Inquire Botanical Wellness & Feed',
      ctaLabelSw: 'Ulizia Vifurushi & Chakula',
      actionType: 'whatsapp',
      whatsappMsg: 'Hello Soma Annex, I am inquiring about Antistress Sachets (KES 50) and Termite Live Poultry Feed.',
    },
    {
      id: 'srv-nursery-engineering',
      category: 'engineering',
      imageUrl: SOMA_PHOTOS.nurseryGreenhousePerspective,
      titleEn: 'Commercial Seedling Nursery Design & Shade-Net Construction',
      titleSw: 'Ujenzi wa Vitalu vya Kisasa na Shade Nets',
      descriptionEn: 'Full-scope engineering for commercial shade-net nurseries, automated misting systems, raised wire propagation benches, and sterile nursery layout planning tailored to East African solar irradiance and wind conditions.',
      descriptionSw: 'Ujenzi kamili wa vitalu vya kisasa vya biashara, mifumo ya umwagiliaji wa ukungu (misting), na meza maalum za miche.',
      icon: <Tray128GridIcon className="w-6 h-6 text-emerald-800" />,
      benefits: [
        'UV-stabilized shade nets (30%–50%) providing optimized photosynthetically active radiation (PAR)',
        'Low-pressure micro-misters delivering uniform droplet mist with zero soil compaction',
        'Raised bench architecture improving air-pruning of root tips and preventing fungal transfer',
        'Custom turnkey sizing for 10,000 to 500,000+ seedling monthly production capacity',
      ],
      ctaLabelEn: 'Book Nursery Engineering Advisory',
      ctaLabelSw: 'Weka Miadi ya Ujenzi wa Kitalu',
      actionType: 'whatsapp',
      whatsappMsg: 'Hello Soma Annex, I am looking for nursery design and shade-net construction consultancy.',
    },
    {
      id: 'srv-soil-restoration',
      category: 'engineering',
      imageUrl: SOMA_PHOTOS.nurseryTaggedVarieties,
      titleEn: 'Organic Soil Health Restoration & Composting Systems',
      titleSw: 'Kuponya Udongo na Kutengeneza Mboji ya Asili',
      descriptionEn: 'Practical on-farm soil diagnostics, compost formulation from farm biomass, and organic fertility management protocols designed to restore depleted, acidic soils to high-yield biological productivity.',
      descriptionSw: 'Uchunguzi wa afya ya udongo, maandalizi ya mboji ya vijidudu hai, na kurejesha rutuba ya asili kwenye mashamba yaliyochoka.',
      icon: (
        <svg className="w-6 h-6 text-emerald-800" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 24C8 20 14 20 18 24C22 28 28 28 32 24" stroke="#059669" />
          <path d="M4 28C8 24 14 24 18 28C22 32 28 32 32 28" stroke="#059669" />
          <path d="M16 18V8" stroke="#10B981" strokeWidth="2" />
          <path d="M16 8C20 6 22 10 16 12" fill="#10B981" fillOpacity="0.25" />
          <path d="M16 11C12 9 10 13 16 15" fill="#10B981" fillOpacity="0.25" />
        </svg>
      ),
      benefits: [
        'Rapidly increases soil organic matter (SOM) and water retention during dry seasons',
        'Restores beneficial mycorrhizal fungi and nitrogen-fixing soil microorganisms',
        'Reduces reliance on expensive synthetic mineral fertilizers by up to 50%',
        'Step-by-step training on windrow composting and microbial compost teas',
      ],
      ctaLabelEn: 'Request Soil Health Consultation',
      ctaLabelSw: 'Omba Ushauri wa Udongo',
      actionType: 'whatsapp',
      whatsappMsg: 'Hello Soma Annex agronomy team, I need guidance on organic soil health and composting systems.',
    },
    {
      id: 'srv-urban-gardens',
      category: 'engineering',
      imageUrl: SOMA_PHOTOS.dhaniaCorianderBed,
      titleEn: 'Urban Kitchen Gardening, Vertical Sacks & Balcony Hydroponics',
      titleSw: 'Bustani za Mjini, Mifuko ya Gorofa na Hydroponics',
      descriptionEn: 'Turnkey installation of space-saving vertical garden sacks, multi-tier raised planter boxes, and micro-drip systems that allow urban households and apartments to grow fresh vegetables in compact spaces.',
      descriptionSw: 'Kufunga bustani za mifuko ya kisasa ya ghorofa, masanduku ya balcony na mifumo ya matone kwa ajili ya nyumba za mijini zenye nafasi ndogo.',
      icon: (
        <svg className="w-6 h-6 text-teal-700" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="8" width="20" height="6" rx="2" stroke="currentColor" fill="#0D9488" fillOpacity="0.15" />
          <rect x="6" y="16" width="20" height="6" rx="2" stroke="currentColor" fill="#0D9488" fillOpacity="0.15" />
          <rect x="6" y="24" width="20" height="6" rx="2" stroke="currentColor" fill="#0D9488" fillOpacity="0.15" />
          <path d="M10 8V4" stroke="currentColor" />
          <path d="M22 8V4" stroke="currentColor" />
        </svg>
      ),
      benefits: [
        'Produces up to 100 vegetable heads in less than 2 square meters of floor space',
        'Conserves water by 70% using localized low-pressure drip irrigation lines',
        'Yields fresh daily harvests of spinach, sukuma wiki, coriander, and mint at home',
        'Ideal for residential compounds, verandas, schools, and rooftop terraces',
      ],
      ctaLabelEn: 'Install Urban Kitchen Garden',
      ctaLabelSw: 'Funga Bustani ya Mjini',
      actionType: 'whatsapp',
      whatsappMsg: 'Hello Soma Annex, I want to install a vertical kitchen garden / balcony setup at my home.',
    },
    {
      id: 'srv-attachments',
      category: 'training',
      imageUrl: SOMA_PHOTOS.nurserySunlitHardening,
      titleEn: 'Agricultural Student Attachments & Youth Mentorship',
      titleSw: 'Mafunzo ya Vitendo ya Wanafunzi (JKUAT) & Vijana',
      descriptionEn: 'Hands-on practical placement for certificate, diploma, and degree students from agricultural universities (such as nearby JKUAT and Egerton), paired with our community youth program, the Soma Annex Boys Gleam Team.',
      descriptionSw: 'Mafunzo rasmi ya vitendo kwa wanafunzi wa vyuo vikuu vya kilimo (kama JKUAT), pamoja na kulea vijana kupitia Soma Annex Boys Gleam Team.',
      icon: (
        <svg className="w-6 h-6 text-emerald-700" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M16 4L4 10L16 16L28 10L16 4Z" stroke="currentColor" fill="#10B981" fillOpacity="0.2" />
          <path d="M8 12V20C8 23 16 26 16 26C16 26 24 23 24 20V12" stroke="currentColor" />
          <path d="M28 10V20" stroke="currentColor" />
        </svg>
      ),
      benefits: [
        'Verified rotations across tray seeding, substrate buffering, IPM, and climate management',
        'Supervised mentorship satisfying official university accreditation requirements',
        'Youth development in commercial work ethic, self-reliance, and agribusiness record-keeping',
        'Active leadership in the "Tusitupe Taka Ovyo" community environmental cleanliness initiative',
      ],
      ctaLabelEn: 'Apply for Student Attachment',
      ctaLabelSw: 'Omba Nafasi ya Attachment',
      actionType: 'whatsapp',
      whatsappMsg: 'Hello Soma Annex agronomy team, I am an agricultural student seeking a practical attachment placement.',
    },
  ];

  const filteredServices = services.filter((srv) => {
    if (activeFilter === 'all') return true;
    return srv.category === activeFilter;
  });

  const handleAction = (srv: typeof services[0]) => {
    if (srv.actionType === 'modal') {
      onOpenOrderModal(srv.cropId);
    } else {
      const text = encodeURIComponent(srv.whatsappMsg || 'Hello Soma Annex, I want to inquire about your services.');
      window.open(`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${text}`, '_blank');
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
            <span>Core Capabilities & Agribusiness Services</span>
            <span aria-hidden="true">·</span>
            <span>Gachororo, Juja</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-neutral-900 mb-4" style={{ textWrap: 'balance' }}>
            {lang === 'en' ? 'Comprehensive Agronomic Services' : 'Huduma Kamili za Kilimo Biashara'}
          </h2>

          <p className="text-base text-neutral-600 leading-relaxed">
            {lang === 'en'
              ? 'From scientific seedling propagation in 128-cell trays to commercial nursery shade-net engineering, organic produce supply, and university training attachments.'
              : 'Kuanzia kuotesha miche ya kisasa hadi ujenzi wa vitalu, mboga za asili, na mafunzo rasmi ya wanafunzi wa vyuo vikuu.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-neutral-200 mb-10 overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeFilter === 'all'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            {lang === 'en' ? 'All Services (8)' : 'Huduma Zote (8)'}
          </button>
          <button
            onClick={() => setActiveFilter('nursery')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeFilter === 'nursery'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            {lang === 'en' ? 'Seedlings & Substrates' : 'Miche & Cocopeat'}
          </button>
          <button
            onClick={() => setActiveFilter('produce-florals')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeFilter === 'produce-florals'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            {lang === 'en' ? 'Produce & Floriculture' : 'Mboga & Maua'}
          </button>
          <button
            onClick={() => setActiveFilter('engineering')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeFilter === 'engineering'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            {lang === 'en' ? 'Nursery Engineering & Soil' : 'Ujenzi & Udongo'}
          </button>
          <button
            onClick={() => setActiveFilter('training')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeFilter === 'training'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            {lang === 'en' ? 'Attachments & Mentorship' : 'Mafunzo ya Vyuo'}
          </button>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-neutral-200 hover:border-emerald-500/60 transition-all overflow-hidden shadow-xs flex flex-col justify-between group"
            >
              <div>
                {/* Authentic Service Photo Banner */}
                <div className="h-52 relative overflow-hidden border-b border-neutral-100">
                  <SomaImage
                    src={service.imageUrl}
                    alt={lang === 'en' ? service.titleEn : service.titleSw}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent flex items-end justify-between p-4">
                    <span className="text-xs font-mono font-bold text-emerald-300">
                      SERVICE 0{index + 1}
                    </span>
                    <div className="p-2 bg-white/95 rounded-lg shadow-xs">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className="p-7 pb-0">
                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-neutral-900 font-display mb-3">
                    {lang === 'en' ? service.titleEn : service.titleSw}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {lang === 'en' ? service.descriptionEn : service.descriptionSw}
                  </p>

                  {/* Key Benefits List */}
                  <div className="space-y-2 mb-8 bg-neutral-50/70 rounded-xl p-4 border border-neutral-100">
                    <strong className="block text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Key Outcomes & Benefits:' : 'Faida Kuu kwa Mteja:'}
                    </strong>
                    <ul className="space-y-1.5 text-xs text-neutral-700">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold mt-0.5">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="px-7 pb-7 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500">
                  Juja Campus Delivery & Advisory
                </span>
                <button
                  onClick={() => handleAction(service)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-98 rounded-lg transition-all flex items-center gap-2 shadow-xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-200" />
                  <span>{lang === 'en' ? service.ctaLabelEn : service.ctaLabelSw}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Commercial Farm Consultation Banner */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 border border-emerald-900 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              Direct Agronomist Advisory
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {lang === 'en' ? 'Need Tailored Farm Planning or Nursery Setup?' : 'Unahitaji Mpango Maalum wa Shamba Lako?'}
            </h3>
            <p className="text-sm text-emerald-200 leading-relaxed">
              {lang === 'en'
                ? 'Speak directly with our senior agronomists in Juja. We assist with soil health restoration, seed variety selection, irrigation design, and staged transplant schedules.'
                : 'Wasiliana moja kwa moja na wataalamu wetu wa kilimo Juja kwa ushauri wa udongo, uchaguzi wa mbegu bora, na kupanga tarehe za kupanda.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenOrderModal('sukuma-wiki')}
              className="px-5 py-3 text-xs font-semibold text-emerald-950 bg-white hover:bg-neutral-100 rounded-xl transition-colors shadow-sm"
            >
              {lang === 'en' ? 'Open Tray Calculator' : 'Piga Hesabu ya Trei'}
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.primaryPhoneDigits}?text=${encodeURIComponent('Hello Soma Annex agronomy team, I would like to schedule an on-farm consultation.')}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 text-xs font-semibold text-emerald-300 border border-emerald-700 hover:bg-emerald-900 rounded-xl transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'en' ? 'Consult with Agronomist' : 'Wasiliana na Mtaalamu'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
