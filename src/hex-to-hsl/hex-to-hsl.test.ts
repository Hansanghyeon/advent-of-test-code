import { assert, describe, test } from 'vitest'
import { hexToHSL } from './hex-to-hsl';

describe('hex to hsl', () => {
  test('hsl(${h}, ${s}%, ${l}%)', () => {
    assert.deepEqual(hexToHSL('hsl({{h}}, {{s}}%, {{l}}%)')('#ffffff'), 'hsl(0, 0%, 100%)')
  })
})

