const L74HC00 = require('./L74HC00');

describe(`74HC00 chip`, () => {
    let l74HC00;
    beforeEach(() => {
        l74HC00 = new L74HC00(
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

    describe(`NAND gate 1`, () => {
        it(`Should return false if both inputs are true`, () => {
            l74HC00.a1 = true;
            l74HC00.b1 = true;

            expect(l74HC00.y1).toBe(false);
        });

        it(`Should return true if the first input is true and the second is false`, () => {
            l74HC00.a1 = true;
            l74HC00.b1 = false;

            expect(l74HC00.y1).toBe(true);
        });

        it(`Should return true if the first input is false and the second input is true`, () => {
            l74HC00.a1 = false;
            l74HC00.b1 = true;

            expect(l74HC00.y1).toBe(true);
        });

        it(`Should return true if both inputs are false`, () => {
            l74HC00.a1 = false;
            l74HC00.b1 = false;

            expect(l74HC00.y1).toBe(true);
        });
    });

    describe(`NAND gate 2`, () => {
        it(`Should return false if both inputs are true`, () => {
            l74HC00.a2 = true;
            l74HC00.b2 = true;

            expect(l74HC00.y2).toBe(false);
        });

        it(`Should return true if the first input is true and the second is false`, () => {
            l74HC00.a2 = true;
            l74HC00.b2 = false;

            expect(l74HC00.y2).toBe(true);
        });

        it(`Should return true if the first input is false and the second input is true`, () => {
            l74HC00.a2 = false;
            l74HC00.b2 = true;

            expect(l74HC00.y2).toBe(true);
        });

        it(`Should return true if both inputs are false`, () => {
            l74HC00.a2 = false;
            l74HC00.b2 = false;

            expect(l74HC00.y2).toBe(true);
        });
    });

    describe(`NAND gate 3`, () => {
        it(`Should return false if both inputs are true`, () => {
            l74HC00.a3 = true;
            l74HC00.b3 = true;

            expect(l74HC00.y3).toBe(false);
        });

        it(`Should return true if the first input is true and the second is false`, () => {
            l74HC00.a3 = true;
            l74HC00.b3 = false;

            expect(l74HC00.y3).toBe(true);
        });

        it(`Should return true if the first input is false and the second input is true`, () => {
            l74HC00.a3 = false;
            l74HC00.b3 = true;

            expect(l74HC00.y3).toBe(true);
        });

        it(`Should return true if both inputs are false`, () => {
            l74HC00.a3 = false;
            l74HC00.b3 = false;

            expect(l74HC00.y3).toBe(true);
        });
    });

    describe(`NAND gate 4`, () => {
        it(`Should return false if both inputs are true`, () => {
            l74HC00.a4 = true;
            l74HC00.b4 = true;

            expect(l74HC00.y4).toBe(false);
        });

        it(`Should return true if the first input is true and the second is false`, () => {
            l74HC00.a4 = true;
            l74HC00.b4 = false;

            expect(l74HC00.y4).toBe(true);
        });

        it(`Should return true if the first input is false and the second input is true`, () => {
            l74HC00.a4 = false;
            l74HC00.b4 = true;

            expect(l74HC00.y4).toBe(true);
        });

        it(`Should return true if both inputs are false`, () => {
            l74HC00.a4 = false;
            l74HC00.b4 = false;

            expect(l74HC00.y4).toBe(true);
        });
    });

    afterEach(() => {
        l74HC00 = null;
    });
});
