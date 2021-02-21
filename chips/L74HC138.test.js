const L74HC138 = require('./L74HC138');

describe(`74HC138 chip`, () => {
    let l74HC138;

    beforeEach(() => {
        l74HC138 = new L74HC138(false, false, false, true, true, false);
    });

    describe(`Chip enable pins`, () => {
        it(`Should enable the chip if e1 is false, e2 is false and e3 is true`, () => {
            l74HC138.e1 = false;
            l74HC138.e2 = false;
            l74HC138.e3 = true;

            l74HC138.a0 = false;
            l74HC138.a1 = false;
            l74HC138.a2 = false;

            const outputs = [
                l74HC138.y0,
                l74HC138.y1,
                l74HC138.y2,
                l74HC138.y3,
                l74HC138.y4,
                l74HC138.y5,
                l74HC138.y6,
                l74HC138.y7,
            ];

            expect(outputs).toEqual([
                false,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
            ]);
        });

        it(`Should disable the chip if e1 is true`, () => {
            l74HC138.e1 = true;
            l74HC138.e2 = false;
            l74HC138.e3 = true;

            l74HC138.a0 = false;
            l74HC138.a1 = false;
            l74HC138.a2 = false;

            const outputs = [
                l74HC138.y0,
                l74HC138.y1,
                l74HC138.y2,
                l74HC138.y3,
                l74HC138.y4,
                l74HC138.y5,
                l74HC138.y6,
                l74HC138.y7,
            ];

            expect(outputs).toEqual([
                true,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
            ]);
        });

        it(`Should disable the chip if e2 is true`, () => {
            l74HC138.e1 = false;
            l74HC138.e2 = true;
            l74HC138.e3 = true;

            l74HC138.a0 = false;
            l74HC138.a1 = false;
            l74HC138.a2 = false;

            const outputs = [
                l74HC138.y0,
                l74HC138.y1,
                l74HC138.y2,
                l74HC138.y3,
                l74HC138.y4,
                l74HC138.y5,
                l74HC138.y6,
                l74HC138.y7,
            ];

            expect(outputs).toEqual([
                true,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
            ]);
        });

        it(`Should disable the chip if e3 is false`, () => {
            l74HC138.e1 = false;
            l74HC138.e2 = false;
            l74HC138.e3 = false;

            l74HC138.a0 = false;
            l74HC138.a1 = false;
            l74HC138.a2 = false;

            const outputs = [
                l74HC138.y0,
                l74HC138.y1,
                l74HC138.y2,
                l74HC138.y3,
                l74HC138.y4,
                l74HC138.y5,
                l74HC138.y6,
                l74HC138.y7,
            ];

            expect(outputs).toEqual([
                true,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
            ]);
        });
    });

    describe(`addresses`, () => {
        for (let i = 0; i < 8; ++i) {
            const address = i
                .toString(2)
                .split('')
                .map((c) => !(c === '0'));
            it(`should return a low value if a0 is ${address[0]}, a1 is ${address[1]}, a2 is ${address[2]}`, () => {
                l74HC138.e1 = false;
                l74HC138.e2 = false;
                l74HC138.e3 = true;

                l74HC138.a0 = address[0];
                l74HC138.a1 = address[1];
                l74HC138.a2 = address[2];

                const outputs = [
                    l74HC138.y0,
                    l74HC138.y1,
                    l74HC138.y2,
                    l74HC138.y3,
                    l74HC138.y4,
                    l74HC138.y5,
                    l74HC138.y6,
                    l74HC138.y7,
                ];

                const output = [true, true, true, true, true, true, true, true];
                const index =
                    (this.a0 ? 1 : 0) +
                    ((this.a1 ? 1 : 0) << 1) +
                    ((this.a2 ? 1 : 0) << 2);
                output[index] = false;

                expect(outputs).toEqual(output);
            });
        }
    });

    afterEach(() => {
        l74HC138 = undefined;
    });
});
