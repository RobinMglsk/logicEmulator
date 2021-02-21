class NOT {
    constructor(i){
        this._i = i;
    }

    set i(value){
        this._i = value;
    }

    get o(){
        return (!this._i);
    }
}
module.exports = NOT;