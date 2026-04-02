import { calculateArrayStats} from './min-max-durch.util';



describe('calculateArrayStats', () => {
  it('should return min, max and average', () => {
    const result = calculateArrayStats([1, 2, 3, 4, 5]);

    expect(result).toEqual({
      min: 1,
      max: 5,
      average: 3,
    });
  });

  it('should return null for empty array', () => {
    expect(calculateArrayStats([])).toBeNull();
  });

  it('should work with negative numbers', () => {
    const result = calculateArrayStats([-5, 10, 0]);

    expect(result).toEqual({
      min: -5,
      max: 10,
      average: 5 / 3,
    });
  });
});