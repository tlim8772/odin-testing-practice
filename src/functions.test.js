import { analyzeArray, caeserCipher, Calculator, capitalize, reverse } from "./functions.js"

test('captialize test', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
})

test('reverse test', () => {
    expect(reverse('hello')).toBe('olleh');
})

test('calculator test', () => {
    calc = new Calculator();
    expect(calc.add(1, 2)).toBe(3);
    expect(calc.subtract(3, 1)).toBe(2);
    expect(calc.divide(4, 2)).toBe(2);
    expect(calc.divide(4, 3)).toBeCloseTo(1.33, 2);
    expect(calc.multiply(2, 3)).toBe(6);
})

test('caesar cipher test', () => {
    expect(caeserCipher('xyz', 3)).toBe('abc');
    expect(caeserCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caeserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('analyze array test', () => {
    const arr = [1,2,3];
    expect(analyzeArray(arr)).toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3
    });
})