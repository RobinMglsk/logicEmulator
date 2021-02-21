const NOT = require('./NOT');

describe('NOT gate', () => {
    it(`should invert the input: true should return false`, () => {
        const not = new NOT(true);
        expect(not.o).toBe(false);
    });

    it(`should invert the input: false should return true`, () => {
        const not = new NOT(false);
        expect(not.o).toBe(true);
    });

    it(`should be able to set input by prop`, () => {
        const not = new NOT(false);
        expect(not.o).toBe(true);

        not.i = true;

        expect(not.o).toBe(false);
    });
});
