const NAND = require('./NAND');

describe(`NAND gate`, () => {
    it(`should return false if both inputs are true`, () => {
        const nand = new NAND(true, true);
        expect(nand.o).toBe(false);
    });

    it(`should return true if both inputs are false`, () => {
        const nand = new NAND(false, false);
        expect(nand.o).toBe(true);
    });

    it(`should return true if both first input is true and second is false`, () => {
        const nand = new NAND(true, false);
        expect(nand.o).toBe(true);
    });

    it(`should return true if both first input is false and second is true`, () => {
        const nand = new NAND(false, true);
        expect(nand.o).toBe(true);
    });

    it(`should be able to set inputs by prop`, () => {
        const nand = new NAND(false, false);
        expect(nand.o).toBe(true);

        nand.i1 = true;
        nand.i2 = true;

        expect(nand.o).toBe(false);
    });
});
