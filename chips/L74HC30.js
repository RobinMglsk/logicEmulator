const NOT = require('../gates/NOT');
const NAND = require('../gates/NAND');
const NOR = require('../gates/NOR');
const OR = require('../gates/OR');

class L74HC30 {

    constructor(a,b,c,d,e,f,g,h){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
        this.g = g;
        this.h = h;
    }

    get y(){
        const NOTa = new NOT(this.a);
        const NOTb = new NOT(this.b);
        const NOTc = new NOT(this.c);
        const NOTd = new NOT(this.d);
        const NOTe = new NOT(this.e);
        const NOTf = new NOT(this.f);
        const NOTg = new NOT(this.g);
        const NOTh = new NOT(this.h);

        const OR1 = new OR(NOTa.o, NOTb.o);
        const OR2 = new OR(NOTc.o, NOTd.o);
        const OR3 = new OR(NOTe.o, NOTf.o);
        const OR4 = new OR(NOTg.o, NOTh.o);

        const NOR1 = new NOR(OR1.o,OR2.o);
        const NOR2 = new NOR(OR3.o,OR4.o);

        return new NAND(NOR1.o,NOR2.o).o;
    }

}

module.exports = L74HC30;