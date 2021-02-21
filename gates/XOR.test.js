const XOR = require('./XOR');

describe(`XOR gate`, () => {
    it(`should return false if both inputs are false`, () => {
        const xor = new XOR(false, false);
        expect(xor.o).toBe(false);
    });

    it(`should return true if the first input is true and the second is false`, () => {
        const xor = new XOR(true, false);
        expect(xor.o).toBe(true);
    });

    it(`should return true if the first input is false and the second is true`, () => {
        const xor = new XOR(false, true);
        expect(xor.o).toBe(true);
    });

    it(`should return true if both inputs are true`, () => {
        const xor = new XOR(true, true);
        expect(xor.o).toBe(false);
    });

    it(`should be able to set inputs by props`, () => {
        const xor = new XOR(true, true);
        expect(xor.o).toBe(false);

        xor.i1 = false;
        expect(xor.o).toBe(true);

        xor.i2 = false;
        expect(xor.o).toBe(false);
    });
});
