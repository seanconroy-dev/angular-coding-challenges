import { bubbleSort, parseNumbers } from './bubble.util';

describe('bubbleSort', () => {

  it('should sort numbers correctly', () => {
    expect(bubbleSort('5,3,8,1')).toBe('1, 3, 5, 8');
  });

  it('should handle already sorted input', () => {
    expect(bubbleSort('1,2,3')).toBe('1, 2, 3');
  });

  it('should handle duplicate values', () => {
    expect(bubbleSort('4,2,2,1')).toBe('1, 2, 2, 4');
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