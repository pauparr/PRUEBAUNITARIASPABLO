import divide from '../helper/divide'

describe('divide', () => {
    it('debe retornar un número', () => {
        const result = divide(10, 2);
        expect(typeof result).toBe('number');
    });

    it('debe retornar null si entra una string', () => {
        const result = divide('hola', 2);
        expect(result).toBe(null);
    });

    it('debe realizar la división de 10 y 2', () => {
        const result = divide(10, 2);
        expect(result).toBe(5);
    });

    it('debe realizar la división de 10 y 4', () => {
        const result = divide(10, 4);
        expect(result).toBe(2.5);
    });

    it('debe retornar null si se divide por 0', () => {
        const result = divide(10, 0);
        expect(result).toBe(null);
    });
});
