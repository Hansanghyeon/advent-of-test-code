import { expect, it } from 'vitest'
import { css2json } from './css-to-json.ts'

// css string을 json을 변환
it('should convert css string to json', () => {
  const css = `
    font-size: 36px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: -0.36px;
    text-align: left;
  `
  const json = {
    'font-size': '36px',
    'font-weight': '800',
    'font-stretch': 'normal',
    'font-style': 'normal',
    'line-height': '1.33',
    'letter-spacing': '-0.36px',
    'text-align': 'left',
  }
  expect(css2json(css)).toEqual(json);
})