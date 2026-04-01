import { unique, parseNumbers } from './duplikate-entfernen.util';

describe('unique', () => {

  it('should remove duplicates correctly', () => {
    expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(unique([])).toEqual([]);
  });

  it('should handle array with all duplicates', () => {
    expect(unique([4, 4, 4])).toEqual([4]);
  });

});

describe('parseNumbers', () => {

  it('should parse valid numbers', () => {
    expect(parseNumbers('1, 2, 3')).toEqual([1, 2, 3]);
  });

  it('should ignore invalid values', () => {
    expect(parseNumbers('1, a, 3')).toEqual([1, 3]);
  });

  it('should return empty array for empty input', () => {
    expect(parseNumbers('')).toEqual([]);
  });

});