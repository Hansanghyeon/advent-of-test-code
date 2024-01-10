import { describe, expect, it } from 'vitest';
import { isSnakeCase } from './is-snake-case.ts';

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