import { parseNumbers as parseSharedNumbers } from '../../shared/utils/number.util';

export function bubbleSort(input: string): string {
  let a: number[] = input.split(',').map(Number);
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        swapped = true;
      }
    }
  }

  return a.join(', ');
}

export function parseNumbers(input: string): number[] {
  return parseSharedNumbers(input);
}