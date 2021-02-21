const OR = require('./OR.js');
const NOT = require('./NOT.js');

class NOR {
    constructor(i1,i2){
        this.i1 = i1;
        this.i2 = i2;
    }

    get o(){
        const or = new OR(this.i1, this.i2);
        const not = new NOT(or.o);
        return not.o;
    }
}

module.exports = NOR;