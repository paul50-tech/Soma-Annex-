export interface GalleryPhoto {
  id: string;
  url: string;
  titleEn: string;
  titleSw: string;
  category: 'nursery' | 'seedlings' | 'roses' | 'chrysanthemums' | 'bouquets' | 'sachets';
}

/**
 * Self-hosted high-resolution photographs stored locally in /public/images/soma/
 */
export const SOMA_PHOTOS = {
  // Nursery Trays, Cocopeat & Shade-Net Greenhouse
  nurseryWideTrays: '/images/soma/IMG-20261019-WA0044.jpg', // WA0044: Shade-net rows of plug cells
  nurseryTrays128Overhead: '/images/soma/IMG-20261019-WA0097.jpg', // WA0097: 128-cell trays overhead
  nurseryGreenhousePerspective: '/images/soma/IMG-20261019-WA0060.jpg', // WA0060: Greenhouse tray perspective
  nurseryTaggedVarieties: '/images/soma/IMG-20261019-WA0048.jpg', // WA0048: Labeled nursery beds with tags
  nurserySunlitHardening: '/images/soma/IMG-20261019-WA0079.jpg', // WA0079: Sun-hardening beds
  nurseryYoungPlugs: '/images/soma/IMG-20261019-WA0103.jpg', // WA0103: Young plugs emerging in cocopeat
  nurseryDenseCanopy: '/images/soma/IMG-20261019-WA0102.jpg', // WA0102: Sunlit greenhouse tray canopy

  // Vegetable, Herb & Tuber Seedlings
  cabbagePlugsClose: '/images/soma/IMG-20261019-WA0028.jpg', // WA0028: Cabbage plugs in dark cocopeat
  cabbageHealthyLeaves: '/images/soma/IMG-20261019-WA0054.jpg', // WA0054: Vigorous cabbage leaves
  cabbageTrayCluster: '/images/soma/IMG-20261019-WA0078.jpg', // WA0078: Cabbage plug tray cluster
  sukumaWikiPlugs: '/images/soma/IMG-20261019-WA0070.jpg', // WA0070: Sukuma wiki seedlings
  sukumaKaleBed: '/images/soma/IMG-20261019-WA0043.jpg', // WA0043: Kale & brassica bed
  spinachFordhook: '/images/soma/IMG-20261019-WA0031.jpg', // WA0031: Spinach seedlings
  spinachTrayRows: '/images/soma/IMG-20261019-WA0033.jpg', // WA0033: Spinach in nursery trays
  spinachSunlitLeaves: '/images/soma/IMG-20261019-WA0073.jpg', // WA0073: Fresh sunlit spinach leaves
  spinachCanopy: '/images/soma/IMG-20261019-WA0096.jpg', // WA0096: Organic spinach bed
  swissChardRedVein: '/images/soma/IMG-20261019-WA0057.jpg', // WA0057: Red-veined chard/beetroot seedlings
  broccoliBlueGreen: '/images/soma/IMG-20261019-WA0056.jpg', // WA0056: Broccoli seedlings
  cauliflowerPlugs: '/images/soma/IMG-20261019-WA0094.jpg', // WA0094: Cauliflower plugs
  chineseCabbageCrisp: '/images/soma/IMG-20261019-WA0032.jpg', // WA0032: Chinese cabbage seedlings
  lettuceFrilly: '/images/soma/IMG-20261019-WA0083.jpg', // WA0083: Frilly lettuce/kale seedlings
  pakChoiVigorous: '/images/soma/IMG-20261019-WA0047.jpg', // WA0047: Vigorous pak choi / leafy plugs
  mintPeppermint: '/images/soma/IMG-20261019-WA0035.jpg', // WA0035: Peppermint / aromatic herb leaves
  capsicumPepperBed: '/images/soma/IMG-20261019-WA0062.jpg', // WA0062: Capsicum / sweet pepper canopy
  managuNightshade: '/images/soma/IMG-20261019-WA0077.jpg', // WA0077: Managu / nightshade seedlings
  dhaniaCorianderBed: '/images/soma/IMG-20261019-WA0111.jpg', // WA0111: Coriander / dhania & carrot bed
  parsleyHerbs: '/images/soma/IMG-20261019-WA0067.jpg', // WA0067: Parsley / serrated culinary herbs
  strawberryHerbBed: '/images/soma/IMG-20261019-WA0090.jpg', // WA0090: Perennial herbs & strawberry bed
  garlicAlliumLabeled: '/images/soma/IMG-20261019-WA0113.jpg', // WA0113: Labeled Garlic / Allium propagation
  courgetteSeedling: '/images/soma/IMG-20261019-WA0036.jpg', // WA0036: Courgette / cucurbit plugs
  pumpkinZucchini: '/images/soma/IMG-20261019-WA0092.jpg', // WA0092: Zucchini / squash seedling

  // Antistress Relaxation Sniff Sachets (KES 50 / sachet)
  sachetHandHeldLabel: '/images/soma/IMG-20261019-WA0037.jpg', // WA0037: Official Soma Annex labeled sniff sachet in hand
  sachetPackagedCases: '/images/soma/IMG-20261019-WA0076.jpg', // WA0076: Branded Soma Annex sachets with protective cases
  sachetCloseUpPack: '/images/soma/IMG-20261019-WA0105.jpg', // WA0105: Sachet close-up over protective packs
  sachetHygienicBoxes: '/images/soma/IMG-20261019-WA0040.jpg', // WA0040: Sealed protective sachet cases

  // Fresh Cut Chrysanthemums (Small: Ksh 500 | Big: Ksh 700 to 1,400)
  chrysanthemumSunburstYellow: '/images/soma/IMG-20261019-WA0042.jpg', // WA0042: Vibrant yellow spray chrysanthemums
  chrysanthemumGoldWhiteBurgundy: '/images/soma/IMG-20261019-WA0109.jpg', // WA0109: Rich golden, white & burgundy cluster
  chrysanthemumAutumnMix: '/images/soma/IMG-20261019-WA0039.jpg', // WA0039: Burgundy, orange & white bunch
  chrysanthemumPastelLilac: '/images/soma/IMG-20261019-WA0064.jpg', // WA0064: Pastel pink, white & burgundy spray blooms
  chrysanthemumHandHeldYellow: '/images/soma/IMG-20261019-WA0059.jpg', // WA0059: Yellow & lilac bunch held in hand
  chrysanthemumWhiteGold: '/images/soma/IMG-20261019-WA0091.jpg', // WA0091: White & golden yellow spray blooms
  chrysanthemumRainbowVase: '/images/soma/IMG-20261019-WA0106.jpg', // WA0106: White, blue & purple daisy chrysanthemums

  // Fresh Cut Roses (Small: Ksh 700 | Big: Ksh 1,400 to 2,000)
  rosesMagentaGypsophila: '/images/soma/IMG-20261019-WA0053.jpg', // WA0053: Deep pink/magenta roses with baby's breath
  rosesCrimsonYellowPink: '/images/soma/IMG-20261019-WA0034.jpg', // WA0034: Crimson, yellow & pink roses
  rosesPinkTipIvory: '/images/soma/IMG-20261019-WA0038.jpg', // WA0038: Pink-edged & ivory roses
  rosesLavenderCream: '/images/soma/IMG-20261019-WA0068.jpg', // WA0068: Lavender & cream roses with gypsophila
  rosesPureWhite: '/images/soma/IMG-20261019-WA0099.jpg', // WA0099: Pure white roses bunch
  rosesCreamGreenhouse: '/images/soma/IMG-20261019-WA0087.jpg', // WA0087: Cream long-stem roses
  rosesRedPinkGypsophila: '/images/soma/IMG-20261019-WA0093.jpg', // WA0093: Red & pink roses cluster

  // Assorted Occasion Bouquets (Small: Ksh 700 | Big: Ksh 1,400 to 2,000)
  bouquetLuxuryGrandWrap: '/images/soma/IMG-20261019-WA0101.jpg', // WA0101: Grand luxury assorted wrap
  bouquetRedPinkBabysBreath: '/images/soma/IMG-20261019-WA0114.jpg', // WA0114: Red & pink rose bouquet in wrap
  bouquetPeachWhiteGold: '/images/soma/IMG-20261019-WA0030.jpg', // WA0030: Peach roses & white chrysanthemums
  bouquetWhiteRoseLilacPom: '/images/soma/IMG-20261019-WA0049.jpg', // WA0049: White roses & purple pompons
  bouquetLavenderCreamRose: '/images/soma/IMG-20261019-WA0098.jpg', // WA0098: Lavender & cream rose gift bouquet
  bouquetCoralPinkRoseMix: '/images/soma/IMG-20261019-WA0108.jpg', // WA0108: Orange & pink rose mixed bouquet
  bouquetWhiteLilacSpray: '/images/soma/IMG-20261019-WA0029.jpg', // WA0029: White roses & lilac spray chrysanthemums
  bouquetHotPinkAlstroemeria: '/images/soma/IMG-20261019-WA0045.jpg', // WA0045: Hot pink roses & alstroemeria
};

export const PRODUCT_PHOTO_MAP: Record<string, { primary: string; gallery: string[] }> = {
  'cabbage-gloria': {
    primary: SOMA_PHOTOS.cabbagePlugsClose,
    gallery: [SOMA_PHOTOS.cabbagePlugsClose, SOMA_PHOTOS.cabbageHealthyLeaves, SOMA_PHOTOS.cabbageTrayCluster],
  },
  'sukuma-wiki': {
    primary: SOMA_PHOTOS.sukumaWikiPlugs,
    gallery: [SOMA_PHOTOS.sukumaWikiPlugs, SOMA_PHOTOS.sukumaKaleBed, SOMA_PHOTOS.nurseryWideTrays],
  },
  'spinach-fordhook': {
    primary: SOMA_PHOTOS.spinachFordhook,
    gallery: [SOMA_PHOTOS.spinachFordhook, SOMA_PHOTOS.spinachTrayRows, SOMA_PHOTOS.spinachSunlitLeaves],
  },
  'lettuce-varieties': {
    primary: SOMA_PHOTOS.lettuceFrilly,
    gallery: [SOMA_PHOTOS.lettuceFrilly, SOMA_PHOTOS.nurseryDenseCanopy],
  },
  'broccoli-seedlings': {
    primary: SOMA_PHOTOS.broccoliBlueGreen,
    gallery: [SOMA_PHOTOS.broccoliBlueGreen, SOMA_PHOTOS.cabbageTrayCluster],
  },
  'cauliflower-seedlings': {
    primary: SOMA_PHOTOS.cauliflowerPlugs,
    gallery: [SOMA_PHOTOS.cauliflowerPlugs, SOMA_PHOTOS.nurseryWideTrays],
  },
  'chinese-cabbage': {
    primary: SOMA_PHOTOS.chineseCabbageCrisp,
    gallery: [SOMA_PHOTOS.chineseCabbageCrisp, SOMA_PHOTOS.nurserySunlitHardening],
  },
  'pak-choi': {
    primary: SOMA_PHOTOS.pakChoiVigorous,
    gallery: [SOMA_PHOTOS.pakChoiVigorous, SOMA_PHOTOS.spinachTrayRows],
  },
  'rosemary-potted': {
    primary: SOMA_PHOTOS.strawberryHerbBed,
    gallery: [SOMA_PHOTOS.strawberryHerbBed, SOMA_PHOTOS.nurseryTaggedVarieties],
  },
  'mint-peppermint': {
    primary: SOMA_PHOTOS.mintPeppermint,
    gallery: [SOMA_PHOTOS.mintPeppermint, SOMA_PHOTOS.parsleyHerbs],
  },
  'sweet-basil': {
    primary: SOMA_PHOTOS.capsicumPepperBed,
    gallery: [SOMA_PHOTOS.capsicumPepperBed, SOMA_PHOTOS.managuNightshade],
  },
  'coriander-dhania': {
    primary: SOMA_PHOTOS.dhaniaCorianderBed,
    gallery: [SOMA_PHOTOS.dhaniaCorianderBed, SOMA_PHOTOS.parsleyHerbs],
  },
  'parsley-italian': {
    primary: SOMA_PHOTOS.parsleyHerbs,
    gallery: [SOMA_PHOTOS.parsleyHerbs, SOMA_PHOTOS.mintPeppermint],
  },
  'lemongrass-clump': {
    primary: SOMA_PHOTOS.garlicAlliumLabeled,
    gallery: [SOMA_PHOTOS.garlicAlliumLabeled, SOMA_PHOTOS.nurseryTaggedVarieties],
  },
  'aloe-vera-sucker': {
    primary: SOMA_PHOTOS.nurseryTaggedVarieties,
    gallery: [SOMA_PHOTOS.nurseryTaggedVarieties, SOMA_PHOTOS.courgetteSeedling],
  },
  'jade-plant': {
    primary: SOMA_PHOTOS.courgetteSeedling,
    gallery: [SOMA_PHOTOS.courgetteSeedling, SOMA_PHOTOS.nurseryTaggedVarieties],
  },
  'snake-plant': {
    primary: SOMA_PHOTOS.pumpkinZucchini,
    gallery: [SOMA_PHOTOS.pumpkinZucchini, SOMA_PHOTOS.nurseryTaggedVarieties],
  },
  'fresh-chrysanthemums-sm': {
    primary: SOMA_PHOTOS.chrysanthemumSunburstYellow,
    gallery: [
      SOMA_PHOTOS.chrysanthemumSunburstYellow,
      SOMA_PHOTOS.chrysanthemumAutumnMix,
      SOMA_PHOTOS.chrysanthemumHandHeldYellow,
    ],
  },
  'fresh-chrysanthemums-lg': {
    primary: SOMA_PHOTOS.chrysanthemumGoldWhiteBurgundy,
    gallery: [
      SOMA_PHOTOS.chrysanthemumGoldWhiteBurgundy,
      SOMA_PHOTOS.chrysanthemumPastelLilac,
      SOMA_PHOTOS.chrysanthemumWhiteGold,
      SOMA_PHOTOS.chrysanthemumRainbowVase,
    ],
  },
  'fresh-roses-sm': {
    primary: SOMA_PHOTOS.rosesPinkTipIvory,
    gallery: [
      SOMA_PHOTOS.rosesPinkTipIvory,
      SOMA_PHOTOS.rosesCrimsonYellowPink,
      SOMA_PHOTOS.rosesRedPinkGypsophila,
    ],
  },
  'fresh-roses-lg': {
    primary: SOMA_PHOTOS.rosesMagentaGypsophila,
    gallery: [
      SOMA_PHOTOS.rosesMagentaGypsophila,
      SOMA_PHOTOS.rosesLavenderCream,
      SOMA_PHOTOS.rosesPureWhite,
      SOMA_PHOTOS.rosesCreamGreenhouse,
    ],
  },
  'assorted-small': {
    primary: SOMA_PHOTOS.bouquetRedPinkBabysBreath,
    gallery: [
      SOMA_PHOTOS.bouquetRedPinkBabysBreath,
      SOMA_PHOTOS.bouquetCoralPinkRoseMix,
      SOMA_PHOTOS.bouquetWhiteLilacSpray,
    ],
  },
  'assorted-big': {
    primary: SOMA_PHOTOS.bouquetLuxuryGrandWrap,
    gallery: [
      SOMA_PHOTOS.bouquetLuxuryGrandWrap,
      SOMA_PHOTOS.bouquetPeachWhiteGold,
      SOMA_PHOTOS.bouquetWhiteRoseLilacPom,
      SOMA_PHOTOS.bouquetLavenderCreamRose,
    ],
  },
  'greenhouse-roses-commercial': {
    primary: SOMA_PHOTOS.rosesCreamGreenhouse,
    gallery: [SOMA_PHOTOS.rosesCreamGreenhouse, SOMA_PHOTOS.rosesPureWhite, SOMA_PHOTOS.rosesCrimsonYellowPink],
  },
  'marigold-african-tall': {
    primary: SOMA_PHOTOS.chrysanthemumWhiteGold,
    gallery: [SOMA_PHOTOS.chrysanthemumWhiteGold, SOMA_PHOTOS.chrysanthemumSunburstYellow],
  },
  'lavender-munstead': {
    primary: SOMA_PHOTOS.chrysanthemumRainbowVase,
    gallery: [SOMA_PHOTOS.chrysanthemumRainbowVase, SOMA_PHOTOS.sachetHandHeldLabel],
  },
  'petunia-hanging-basket': {
    primary: SOMA_PHOTOS.bouquetHotPinkAlstroemeria,
    gallery: [SOMA_PHOTOS.bouquetHotPinkAlstroemeria, SOMA_PHOTOS.chrysanthemumPastelLilac],
  },
  'fresh-organic-spinach': {
    primary: SOMA_PHOTOS.spinachSunlitLeaves,
    gallery: [SOMA_PHOTOS.spinachSunlitLeaves, SOMA_PHOTOS.spinachCanopy, SOMA_PHOTOS.swissChardRedVein],
  },
  'cocopeat-block-5kg': {
    primary: SOMA_PHOTOS.nurseryWideTrays,
    gallery: [SOMA_PHOTOS.nurseryWideTrays, SOMA_PHOTOS.nurseryYoungPlugs],
  },
  'nursery-trays-128': {
    primary: SOMA_PHOTOS.nurseryTrays128Overhead,
    gallery: [SOMA_PHOTOS.nurseryTrays128Overhead, SOMA_PHOTOS.nurseryGreenhousePerspective, SOMA_PHOTOS.nurseryWideTrays],
  },
  'antistress-sniff-sachet': {
    primary: SOMA_PHOTOS.sachetHandHeldLabel,
    gallery: [
      SOMA_PHOTOS.sachetHandHeldLabel,
      SOMA_PHOTOS.sachetPackagedCases,
      SOMA_PHOTOS.sachetCloseUpPack,
      SOMA_PHOTOS.sachetHygienicBoxes,
    ],
  },
  'termite-chicken-feed': {
    primary: SOMA_PHOTOS.nurseryDenseCanopy,
    gallery: [SOMA_PHOTOS.nurseryDenseCanopy, SOMA_PHOTOS.nurserySunlitHardening],
  },
};

export const FLORAL_LOOKBOOK_GALLERY: GalleryPhoto[] = [
  {
    id: 'wa0101',
    url: SOMA_PHOTOS.bouquetLuxuryGrandWrap,
    titleEn: 'Grand Luxury Assorted Bouquet (Big — Ksh 1,400 to 2,000)',
    titleSw: 'Bouquet Kubwa ya Sherehe (Ksh 1,400 hadi 2,000)',
    category: 'bouquets',
  },
  {
    id: 'wa0053',
    url: SOMA_PHOTOS.rosesMagentaGypsophila,
    titleEn: 'Velvet Magenta Roses with Baby’s Breath',
    titleSw: 'Waridi za Pinki na Gypsophila',
    category: 'roses',
  },
  {
    id: 'wa0109',
    url: SOMA_PHOTOS.chrysanthemumGoldWhiteBurgundy,
    titleEn: 'Sunburst Gold, White & Burgundy Chrysanthemums',
    titleSw: 'Maua ya Chrysanthemum ya Njano, Nyeupe na Damu ya Mzee',
    category: 'chrysanthemums',
  },
  {
    id: 'wa0114',
    url: SOMA_PHOTOS.bouquetRedPinkBabysBreath,
    titleEn: 'Hand-Tied Red & Pink Rose Wrap (Small — Ksh 700)',
    titleSw: 'Bouquet Ndogo ya Waridi (Ksh 700)',
    category: 'bouquets',
  },
  {
    id: 'wa0030',
    url: SOMA_PHOTOS.bouquetPeachWhiteGold,
    titleEn: 'Coral Roses & Ivory Chrysanthemum Arrangement',
    titleSw: 'Mpangilio wa Waridi na Chrysanthemum Nyeupe',
    category: 'bouquets',
  },
  {
    id: 'wa0068',
    url: SOMA_PHOTOS.rosesLavenderCream,
    titleEn: 'Lilac-Pink & Cream Greenhouse Roses',
    titleSw: 'Waridi za Rangi ya Zambarau-Pinki na Krimu',
    category: 'roses',
  },
  {
    id: 'wa0042',
    url: SOMA_PHOTOS.chrysanthemumSunburstYellow,
    titleEn: 'Fresh Dawn-Cut Yellow Spray Chrysanthemums (Small — Ksh 500)',
    titleSw: 'Chrysanthemum za Njano (Kifungu Kidogo — Ksh 500)',
    category: 'chrysanthemums',
  },
  {
    id: 'wa0098',
    url: SOMA_PHOTOS.bouquetLavenderCreamRose,
    titleEn: 'Pastel Lavender & Ivory Rose Milestone Bouquet',
    titleSw: 'Bouquet ya Harusi na Maadhimisho',
    category: 'bouquets',
  },
];

export const NURSERY_SHOWCASE_GALLERY: GalleryPhoto[] = [
  {
    id: 'wa0044',
    url: SOMA_PHOTOS.nurseryWideTrays,
    titleEn: 'Sterile Cocopeat Plug Trays in Shade-Net Greenhouse',
    titleSw: 'Trei za Miche Ndani ya Greenhouse ya Shade-Net',
    category: 'nursery',
  },
  {
    id: 'wa0097',
    url: SOMA_PHOTOS.nurseryTrays128Overhead,
    titleEn: '128-Cell UV-Stabilized Propagation Trays',
    titleSw: 'Trei za Chemba 128 Zinazokuza Mizizi Imara',
    category: 'nursery',
  },
  {
    id: 'wa0028',
    url: SOMA_PHOTOS.cabbagePlugsClose,
    titleEn: 'Vigorous Cabbage Plugs Ready for Transplanting',
    titleSw: 'Miche ya Kabichi Iliyo Tayari Kupandwa Shambani',
    category: 'seedlings',
  },
  {
    id: 'wa0048',
    url: SOMA_PHOTOS.nurseryTaggedVarieties,
    titleEn: 'Batch-Labeled Nursery Beds at Gachororo, Juja',
    titleSw: 'Vitalu Vilivyowekwa Lebo Rasmi Shambani Juja',
    category: 'nursery',
  },
  {
    id: 'wa0073',
    url: SOMA_PHOTOS.spinachSunlitLeaves,
    titleEn: 'Sun-Hardened Fordhook Giant Spinach Seedlings',
    titleSw: 'Miche ya Spinach Iliyostahimishwa Jua',
    category: 'seedlings',
  },
  {
    id: 'wa0113',
    url: SOMA_PHOTOS.garlicAlliumLabeled,
    titleEn: 'Labeled Garlic & Allium Vegetative Stock',
    titleSw: 'Miche ya Kitunguu Saumu (Garlic) Iliyopimwa',
    category: 'seedlings',
  },
  {
    id: 'wa0037',
    url: SOMA_PHOTOS.sachetHandHeldLabel,
    titleEn: 'Soma Annex Antistress Relaxation Sniff Sachet (KES 50)',
    titleSw: 'Kifurushi cha Kutuliza Akili na Usingizi (KES 50)',
    category: 'sachets',
  },
  {
    id: 'wa0079',
    url: SOMA_PHOTOS.nurserySunlitHardening,
    titleEn: 'Open-Field Equatorial Sun-Hardening Tables',
    titleSw: 'Meza za Kustahimisha Miche Jua Kabla ya Mauzo',
    category: 'nursery',
  },
];
