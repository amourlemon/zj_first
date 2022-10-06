// 入口函数
function observe(data) {
    if (typeof data !== 'object') return
    // 调用Observer
    new Observer(data)
  }
function defineReactive(data, key, value=data[key]) {
    observe(value)
    Object.defineProperty(data, key, {
        get() {
            console.log('被监听到了访问');
            return value;
        },
        set(newVal) {
            console.log('被监听到了设置');
            if(value === newVal) return
            value = newVal;
            // 设置的新值也需要更新
            observe(value);
        }
    })
}

// 如果一个数据有多个属性，我们可以新建一个类 Observer 来遍历对象
class Observer {
    constructor(target) {
        this.target = target;
        this.walk();
    }
    walk() {
        Object.keys(this.target).forEach(key => defineReactive(this.target, key));
    }
}

const person = {name: 'zs', age: 12};

observe(person);
console.log(person.name);
person.age = 15;
console.log(person.age);
