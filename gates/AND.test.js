const AND = require('./AND');

describe('AND gate', () => {
    it(`should return true if both inputs are true`, () => {
        const and = new AND(true, true);
        expect(and.o).toBe(true);
    });

    it(`should return false if both inputs are false`, () => {
        const and = new AND(false, false);
        expect(and.o).toBe(false);
    });

    it(`should return false if first input is false and second is true`, () => {
        const and = new AND(false, true);
        expect(and.o).toBe(false);
    });

    it(`should return true if first input is true and second is false`, () => {
        const and = new AND(true, false);
        expect(and.o).toBe(false);
    });

    it(`should be able to set inputs by prop`, () => {
        const and = new AND(false, false);
        expect(and.o).toBe(false);

        and.i1 = true;
        and.i2 = true;

        expect(and.o).toBe(true);
    });
});
