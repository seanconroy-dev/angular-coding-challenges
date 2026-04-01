import { parsenumbers, countOccurrences } from './haeufigkeit.util';

describe('parsenumbers', () => {

  it('should parse valid numbers', () => {
    expect(parsenumbers('1, 2, 3')).toEqual([1, 2, 3]);
  });

  it('should ignore invalid values', () => {
    expect(parsenumbers('1, a, 3')).toEqual([1, 3]);
  });

  it('should return empty array for empty input', () => {
    expect(parsenumbers('')).toEqual([]);
  });

});

describe('countOccurrences', () => {

  it('should count occurrences correctly', () => {
    expect(countOccurrences([1, 2, 2, 3])).toEqual([
      '1 kommt 1 mal vor',
      '2 kommt 2 mal vor',
      '3 kommt 1 mal vor',
    ]);
  });

  it('should handle empty array', () => {
    expect(countOccurrences([])).toEqual([]);
  });

  it('should handle array with all duplicates', () => {
    expect(countOccurrences([4, 4, 4])).toEqual(['4 kommt 3 mal vor']);
  });

});