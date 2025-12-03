import isapple from '../helper/isapple'

describe('isapple', () => {
    it('debe retornar un resultado de tipo boolean', () => {
        const result = isapple('manzana');
        expect(typeof result).toBe('boolean');
    });

    it('debe retornar true si entra la string manzana', () => {
        const result = isapple('manzana');
        expect(result).toBe(true);
    });

    it('debe retornar false si entra una string que no sea manzana', () => {
        const result = isapple('pera');
        expect(result).toBe(false);
    });
});
