import { describe, expect, it } from 'vitest';
import { camelToSnake } from './camel-to-snake.ts';

describe('camel-to-snake', () => {
  it('should convert camelCase to snake_case correctly', () => {
      // 테스트 케이스 정의
      const cases = [
          { camel: 'simpleTest', snake: 'simple_test' },
          { camel: 'easy', snake: 'easy' },
          { camel: 'HTMLToPDF', snake: 'html_to_pdf' },
          { camel: 'PDFGenerator', snake: 'pdf_generator' },
          { camel: 'thisIsALongTestString', snake: 'this_is_a_long_test_string' }
      ];

      // 각 테스트 케이스 실행
      cases.forEach(({ camel, snake }) => {
          expect(camelToSnake(camel)).toEqual(snake);
      });
  });
});