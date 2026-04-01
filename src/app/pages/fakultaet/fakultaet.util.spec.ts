import { berechneFakultaet } from './fakultaet.util';

describe('berechneFakultaet', () => {
    
  it('should return 1 for 0', () => {
    expect(berechneFakultaet(0)).toBe(1);
  });

  it('should calculate factorial correctly', () => {
    expect(berechneFakultaet(5)).toBe(120);
  });

  it('should calculate small factorials correctly', () => {
    expect(berechneFakultaet(1)).toBe(1);
    expect(berechneFakultaet(2)).toBe(2);
    expect(berechneFakultaet(3)).toBe(6);
    expect(berechneFakultaet(4)).toBe(24);
  });
  
  it('should throw error for negative input', () => {
    expect(() => berechneFakultaet(-1)).toThrow('n must be between 0 and 12');
  });

    it('should throw error for input greater than 12', () => {
    expect(() => berechneFakultaet(13)).toThrow('n must be between 0 and 12');
  });

});
