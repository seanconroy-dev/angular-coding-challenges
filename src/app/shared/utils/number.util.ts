export function parseNumbers(input: string): number[] {
  const parts = input.split(',');
  const arr: number[] = [];

  for (let i = 0; i < parts.length; i++) {
    const trimmed = parts[i].trim();

    if (trimmed === '') {
      continue;
    }

    const value = Number(trimmed);

    if (!isNaN(value)) {
      arr.push(value);
    }
  }

  return arr;
}