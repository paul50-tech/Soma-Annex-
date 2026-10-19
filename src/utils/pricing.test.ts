import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSeedlingPrice, calculateGrandTotal } from './pricing.ts';

test('retail price applies when below wholesale minimum threshold', () => {
  const result = calculateSeedlingPrice(50, 4.0, 2.5, 100);
  assert.equal(result.hasPrice, true);
  assert.equal(result.isWholesale, false);
  assert.equal(result.unitPrice, 4.0);
  assert.equal(result.subtotal, 200.0);
  assert.equal(result.savings, 0);
  assert.equal(result.fullTrays, 0);
  assert.equal(result.remainderPlugs, 50);
});

test('handles unpriced items gracefully without inventing prices', () => {
  const result = calculateSeedlingPrice(128, undefined, undefined, 100);
  assert.equal(result.hasPrice, false);
  assert.equal(result.unitPrice, undefined);
  assert.equal(result.subtotal, undefined);
  assert.equal(result.fullTrays, 1);
  assert.equal(result.remainderPlugs, 0);
});

test('wholesale price unlocks when quantity >= minWholesaleQty', () => {
  const result = calculateSeedlingPrice(128, 4.0, 2.5, 100);
  assert.equal(result.hasPrice, true);
  assert.equal(result.isWholesale, true);
  assert.equal(result.unitPrice, 2.5);
  assert.equal(result.subtotal, 320.0); // 128 * 2.5
  assert.equal(result.standardSubtotal, 512.0); // 128 * 4.0
  assert.equal(result.savings, 192.0);
  assert.equal(result.fullTrays, 1);
  assert.equal(result.remainderPlugs, 0);
});

test('multi-tray remainder packaging calculates accurately', () => {
  // 300 seedlings in 128-cell trays = 2 full trays (256) + 44 plugs
  const result = calculateSeedlingPrice(300, 3.0, 2.0, 100);
  assert.equal(result.fullTrays, 2);
  assert.equal(result.remainderPlugs, 44);
  assert.equal(result.unitPrice, 2.0);
  assert.equal(result.subtotal, 600.0);
});

test('grand total includes delivery fee properly', () => {
  assert.equal(calculateGrandTotal(500, 200), 700);
  assert.equal(calculateGrandTotal(1200, 0), 1200);
  assert.equal(calculateGrandTotal(undefined, 200), undefined);
});
