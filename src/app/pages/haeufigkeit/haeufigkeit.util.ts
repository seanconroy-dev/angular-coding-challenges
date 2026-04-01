import { parseNumbers } from '../../shared/utils/number.util';

export function parsenumbers(input: string): number[] {
  return parseNumbers(input);
}

  export function countOccurrences(arr: number[]): string[] {
    const count: number[] = [];

    for (const x of arr) {
      // this only makes sense for whole numbers >= 0
      // If x can be 2.5 or -1, this counting-array approach breaks.
      count[x] = (count[x] || 0) + 1;
    }

    const result: string[] = [];
    for (let i = 0; i < count.length; i++) {
      if (count[i] > 0) {
        result.push(`${i} kommt ${count[i]} mal vor`);
      }
    }

    return result;
  }