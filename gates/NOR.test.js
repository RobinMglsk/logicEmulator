const NOR = require('./NOR');

describe(`NOR gate`, () => {
    it(`should output true if inputs are both false`, () => {
        const nor = new NOR(false, false);
        expect(nor.o).toBe(true);
    });

    it(`should output false if inputs are both true`, () => {
        const nor = new NOR(true, true);
        expect(nor.o).toBe(false);
    });

    it(`should output false if one input is true and second is false`, () => {
        const nor = new NOR(true, false);
        expect(nor.o).toBe(false);
    });

    it(`should output false if one input is false and second is true`, () => {
        const nor = new NOR(true, false);
        expect(nor.o).toBe(false);
    });

    it(`should be able to test input values by props`, () => {
        const nor = new NOR(true, true);
        expect(nor.o).toBe(false);

        nor.i1 = false;
        nor.i2 = false;

        expect(nor.o).toBe(true);
    });
});
