const NAND = require('../gates/NAND');

class L74HC00 {

    constructor(a1, b1, a2, b2, a3, b3, a4, b4){
        this.a1 = a1;
        this.b1 = b1;
        this.a2 = a2;
        this.b2 = b2;
        this.a3 = a3;
        this.b3 = b3;
        this.a4 = a4;
        this.b4 = b4;
    }

    get y1(){
        const NAND1 = new  NAND(this.a1, this.b1);
        return NAND1.o;
    }

    get y2(){
        const NAND2 = new  NAND(this.a2, this.b2);
        return NAND2.o;
    }

    get y3(){
        const NAND3 = new  NAND(this.a3, this.b3);
        return NAND3.o;
    }

    get y4(){
        const NAND4 = new  NAND(this.a4, this.b4);
        return NAND4.o;
    }
}

module.exports = L74HC00;