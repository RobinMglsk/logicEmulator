const AND = require('./AND.js');
const NOT = require('./NOT.js');

class NAND {
    constructor(i1,i2){
        this.i1 = i1;
        this.i2 = i2;
    }

    get o(){
        const and = new AND(this.i1, this.i2);
        const not = new NOT(and.o);
        return not.o;
    }
}

module.exports = NAND;