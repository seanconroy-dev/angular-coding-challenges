import { parseNumbers as parseSharedNumbers } from '../../shared/utils/number.util';

  export function unique(arr: number[]): number[] {
    // equivalent to: Set<Integer> seen = new LinkedHashSet<>();
    const seen = new Set<number>();

    // for (int x : arr)
    for (const x of arr) {
      seen.add(x);
    }

    // equivalent to: int[] result = new int[seen.size()];
    const result: number[] = [];

    // for (int x : seen)
    for (const x of seen) {
      result.push(x);
    }

    return result;
  }
  export function parseNumbers(input: string): number[] {
    return parseSharedNumbers(input);
  }