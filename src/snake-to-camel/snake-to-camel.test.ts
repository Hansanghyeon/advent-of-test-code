import { describe, expect, it } from 'vitest';
import { snakeToCamel } from './snake-to-camel.ts';

describe('snakeToCamel', () => {
  it('converts snake_case to camelCase correctly', () => {
      expect(snakeToCamel('this_is_a_test')).toEqual('thisIsATest');
      expect(snakeToCamel('example_string_here')).toEqual('exampleStringHere');
      expect(snakeToCamel('snake_to_camel')).toEqual('snakeToCamel');
  });

  it('handles strings with no underscores correctly', () => {
      expect(snakeToCamel('alreadyCamel')).toEqual('alreadyCamel');
      expect(snakeToCamel('')).toEqual('');
  });

  it('handles strings with multiple underscores correctly', () => {
      expect(snakeToCamel('__example__string__')).toEqual('__example__string__');
  });

  it('handles strings with uppercase letters', () => {
      expect(snakeToCamel('THIS_IS_UPPERCASE')).toEqual('thisIsUppercase');
  });
});