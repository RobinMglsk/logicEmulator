class AND {
    constructor(i1,i2){
        this.i1 = i1;
        this.i2 = i2;
    }

    get o(){
        return (this.i1 && this.i2);
    }
}

module.exports = AND;