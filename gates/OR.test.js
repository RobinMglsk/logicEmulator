const OR = require('./OR');

describe(`OR gate`, () => {
    it(`should return true if both inputs are true`, () => {
        const or = new OR(true, true);
        expect(or.o).toBe(true);
    });

    it(`should return true if the first input is true and the second is false`, () => {
        const or = new OR(true, false);
        expect(or.o).toBe(true);
    });

    it(`should return true if the first input is false and the second is true`, () => {
        const or = new OR(false, true);
        expect(or.o).toBe(true);
    });

    it(`should return false if both inputs are false`, () => {
        const or = new OR(false, false);
        expect(or.o).toBe(false);
    });

    it(`should be able to change inputs by props`, () => {
        const or = new OR(true, true);
        expect(or.o).toBe(true);

        or.i1 = false;
        or.i2 = false;

        expect(or.o).toBe(false);
    });
});
