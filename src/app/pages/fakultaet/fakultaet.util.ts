export function calculateFakultaet(this: any): void {
  const value = Number(this.numberInput);

  if (isNaN(value)) {
    this.result = 'Bitte eine gültige Zahl eingeben.';
    return;
  }

  try {
    const fakultaet = berechneFakultaet(value);
    this.result = `Die Fakultät von ${value} ist ${fakultaet}.`;
  } catch (error) {
    this.result = (error as Error).message;
  }
}

  /**
   * Berechnet die Fakultät rekursiv.
   * Der Wertebereich ist bewusst begrenzt, um Überläufe zu vermeiden.
   */
   export function berechneFakultaet(n: number): number {
    if (n < 0 || n > 12) {
      throw new Error('n must be between 0 and 12');
    }

    if (n === 0) {
      return 1;
    }

    return n * berechneFakultaet(n - 1);
  }