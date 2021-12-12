class Depend {
    constructor() {
        this.reactiveFns = [];
    }
    addDepend(fn) {
        this.reactiveFns.push(fn);
    }
    notify() {
        this.reactiveFns.forEach(fn => {
            fn();
        })
    }
}

const depend = new Depend();
function watchFn(fn) {
    depend.addDepend(fn);
} 



const info = {
    name: '张三'
}

info.name = '李四';
watchFn(function() {
    console.log('name 发生变化了');
})

depend.notify();