class Depend {
    constructor() {
        this.reactiveFns = [];
    }
    addDepend(fn) {
        this.reactiveFns.push(fn);
    }
    notify() {
        
    }
}