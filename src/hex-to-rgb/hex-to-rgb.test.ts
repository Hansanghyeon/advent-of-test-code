import { expect, describe, it } from 'vitest'
import { HexToRgb } from './hex-to-rgb.ts';

describe('HexToRgb', () => {
  it('should convert hex color to RGB format', () => {
    const formattedRGB = HexToRgb('{{r}} {{g}} {{b}}')('#ffffff');
    expect(formattedRGB).toBe('255 255 255');
  });
});
