export type Language = 'en' | 'sw';

export type ProductCategory = 
  | 'all'
  | 'leafy-greens'
  | 'herbs-succulents'
  | 'floriculture'
  | 'inputs-value-add';

export interface ProductItem {
  id: string;
  nameEn: string;
  nameSw: string;
  variety: string;
  category: 'leafy-greens' | 'herbs-succulents' | 'floriculture' | 'inputs-value-add';
  nurseryReadiness?: string;
  fieldMaturity?: string;
  unit: string;
  unitSw: string;
  retailPriceKES?: number;
  wholesalePriceKES?: number;
  priceNote?: string;
  priceNoteSw?: string;
  minWholesaleQty?: number;
  primaryUseEn: string;
  primaryUseSw: string;
  descriptionEn: string;
  descriptionSw: string;
  iconType: 'cabbage' | 'kale' | 'spinach' | 'lettuce' | 'broccoli' | 'herb' | 'flower' | 'succulent' | 'substrate' | 'sachet' | 'poultry';
  highlights: string[];
  agronomyTips?: {
    spacing: string;
    sunlight: string;
    watering: string;
    companionPlanting?: string;
  };
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
  useWholesale: boolean;
}

export interface DeliveryZone {
  id: string;
  nameEn: string;
  nameSw: string;
  feeKES?: number;
  feeNote?: string;
  feeNoteSw?: string;
  estimatedTime: string;
  dispatchNote: string;
}
