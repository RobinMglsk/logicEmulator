const L74HC30 = require('./L74HC30');

describe(`74HC30 chip`, () => {
    let l74HC30;

    beforeEach(() => {
        l74HC30 = new L74HC30(
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        );
    });

    it(`should return true if all inputs are false`, () => {
        expect(l74HC30.y).toBe(true);
    });

    it(`should return true if at least one input is false`, () => {
        for (let i = 1; i < 255; ++i) {
            inputs = i
                .toString(2)
                .split('')
                .map((c) => (c === '0' ? false : true));

            l74HC30.a = inputs[0];
            l74HC30.b = inputs[1];
            l74HC30.c = inputs[2];
            l74HC30.d = inputs[3];
            l74HC30.e = inputs[4];
            l74HC30.f = inputs[5];
            l74HC30.g = inputs[6];
            l74HC30.h = inputs[7];

            expect(l74HC30.y).toBe(true);
        }
    });

    it(`should return false if all inputs are true`, () => {
        l74HC30.a = true;
        l74HC30.b = true;
        l74HC30.c = true;
        l74HC30.d = true;
        l74HC30.e = true;
        l74HC30.f = true;
        l74HC30.g = true;
        l74HC30.h = true;
        expect(l74HC30.y).toBe(false);
    });

    afterEach(() => {
        l74HC30 = undefined;
    });
});
