class L74HC138 {
    constructor(a0, a1, a2, e1, e2, e3) {
        // Address
        this.a0 = a0;
        this.a1 = a1;
        this.a2 = a2;

        // Enables
        this.e1 = e1; // Active low
        this.e2 = e2; // Active low
        this.e3 = e3;

        // Outputs
        this._y = [true, true, true, true, true, true, true, true];
    }

    get y0() {
        this.setOutputs();
        return this._y[0];
    }

    get y1() {
        this.setOutputs();
        return this._y[1];
    }

    get y2() {
        this.setOutputs();
        return this._y[2];
    }

    get y3() {
        this.setOutputs();
        return this._y[3];
    }

    get y4() {
        this.setOutputs();
        return this._y[4];
    }

    get y5() {
        this.setOutputs();
        return this._y[5];
    }

    get y6() {
        this.setOutputs();
        return this._y[6];
    }

    get y7() {
        this.setOutputs();
        return this._y[7];
    }

    setOutputs() {
        // To much work to build form logic gate classes: https://www.ti.com/product/SN74HC138

        this._y = [true, true, true, true, true, true, true, true];

        if (!this.e1 && !this.e2 && this.e3) {
            const output =
                (this.a0 ? 1 : 0) +
                ((this.a1 ? 1 : 0) << 1) +
                ((this.a2 ? 1 : 0) << 2);
                this._y[output] = false;
        }
    }
}

module.exports = L74HC138;