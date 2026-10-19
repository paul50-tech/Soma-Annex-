export interface PricingCalculationResult {
  hasPrice: boolean;
  unitPrice?: number;
  isWholesale: boolean;
  subtotal?: number;
  standardSubtotal?: number;
  savings?: number;
  fullTrays: number;
  remainderPlugs: number;
}

export function calculateSeedlingPrice(
  quantity: number,
  retailPrice?: number,
  wholesalePrice?: number,
  minWholesaleQty: number = 100
): PricingCalculationResult {
  const safeQty = Math.max(0, quantity);
  const fullTrays = Math.floor(safeQty / 128);
  const remainderPlugs = safeQty % 128;

  if (typeof retailPrice !== 'number' || isNaN(retailPrice)) {
    return {
      hasPrice: false,
      isWholesale: false,
      fullTrays,
      remainderPlugs,
    };
  }

  const isWholesale = safeQty >= minWholesaleQty && typeof wholesalePrice === 'number' && wholesalePrice > 0;
  const unitPrice = isWholesale ? (wholesalePrice as number) : retailPrice;

  const standardSubtotal = safeQty * retailPrice;
  const subtotal = safeQty * unitPrice;
  const savings = Math.max(0, standardSubtotal - subtotal);

  return {
    hasPrice: true,
    unitPrice,
    isWholesale,
    subtotal,
    standardSubtotal,
    savings,
    fullTrays,
    remainderPlugs,
  };
}

export function calculateGrandTotal(subtotal?: number, deliveryFee?: number): number | undefined {
  if (typeof subtotal !== 'number') return undefined;
  return Math.max(0, subtotal) + Math.max(0, deliveryFee || 0);
}
