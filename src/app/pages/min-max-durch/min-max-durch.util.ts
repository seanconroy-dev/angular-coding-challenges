export interface NumberStats {
    min: number;
    max: number;
    average: number;
  }

  export function calculateArrayStats(arr: number[]): NumberStats | null {
    if (arr.length === 0) return null;

    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (const value of arr) {
      if (value < min) min = value;
      if (value > max) max = value;
      sum += value;
    }

   return {
    min,
    max,
    average: sum / arr.length,
  };
  }