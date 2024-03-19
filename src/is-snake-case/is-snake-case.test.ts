import { describe, expect, it } from 'vitest';
import * as O from 'fp-ts/Option'
import { isSnakeCase } from './is-snake-case.ts';
import { isSnakeCase as fpIsSnakeCase } from './is-snake-case.fp.ts';

describe('isSnakeCase', () => {
    it('should return true for valid snake case strings', () => {
        expect(isSnakeCase('this_is_snake_case')).toBe(true);
        expect(isSnakeCase('snake_case')).toBe(true);
        expect(isSnakeCase('snake_case123')).toBe(false);
    });

    it('should return false for non-snake case strings', () => {
        expect(isSnakeCase('ThisIsNotSnakeCase')).toBe(false);
    });
});

describe('fromSnakeCase', () => {
    it('should return None for invalid snake case strings', () => {
        expect(fpIsSnakeCase('ThisIsNotSnakeCase')).toEqual(O.none);
    });

    it('should return Some for valid snake case strings', () => {
        expect(fpIsSnakeCase('this_is_snake_case')).toEqual(O.some('this_is_snake_case'));
        expect(fpIsSnakeCase('snake_case')).toEqual(O.some('snake_case'));
        expect(fpIsSnakeCase('snake_case123')).toEqual(O.some('snake_case123'));
    });
})