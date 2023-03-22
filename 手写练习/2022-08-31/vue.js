class Vue {
    constructor(obj_instance) {
        this.$data = obj_instance.data;
        Observer(this.$data)
        Compile(obj_instance.el, this)
    }
}

// 监听事件
function Observer(data_instance) {
    if (!data_instance || typeof data_instance !== 'object') return
    const dependency = new Dependency()
    for (const key in data_instance) {
        defineReactive(data_instance, key, data_instance[key], dependency);
    }
}

function defineReactive(data_instance, key, value = data_instance[key], dependency) {
    Observer(value)
    Object.defineProperty(data_instance, key, {
        get() {
            console.log('属性被监听了');
            // 添加到订阅者数组当中
            Dependency.temp && dependency.addSub(Dependency.temp);
            // if(Dependency.temp) {
            //     console.log(Dependency.temp);
            // }
            return value
        },
        set(newVal) {
            if (newVal === value) return
            value = newVal;
            Observer(value);
            // 通知订阅者进行更新
            dependency.notify()
        }
    })
}

// HTML 模板解析 - 替换 DOM
function Compile(element, vm) {
    vm.$el = document.querySelector(element);
    const fragment = document.createDocumentFragment();
    let child;
    while (child = vm.$el.firstChild) {
        fragment.append(child);
    }
    fragment_compile(fragment)
    // 替换文档碎片的内容
    function fragment_compile(node) {
        // 匹配插值表达式 s* 表示有多个空格或者没有空格， \S+ 表示任意字符
        const pattern = /\{\{\s*(\S+)\s*\}\}/;
        if (node.nodeType === 3) {
            const xxx = node.nodeValue;
            // exec 返回符合条件的数组
            // console.log(node.nodeValue);
            const result_regex = pattern.exec(node.nodeValue);
            if (result_regex) {
                //? 获取到插值表达式当中的内容，比方说 more.like
                const arr = result_regex[1].split('.');
                // 获取插值表达式中的值
                const value = arr.reduce((total, current) => total[current], vm.$data);
                // 正则表达式的基本替换
                node.nodeValue = xxx.replace(pattern, value);
                // ------------------------------到这一步我们只是将数据绑定在了视图之上，而没有进行一个更新----------------------------------------------

                // 订阅者接受变化消息
                new Watcher(vm, result_regex[1], newVal => {
                    node.nodeValue = xxx.replace(pattern, newVal);
                })
            }
            return
        }
        // 找到 input 节点
        if (node.nodeType === 1 && node.nodeName === 'INPUT') {
            const attr = Array.from(node.attributes);
            attr.forEach(i => {
                if (i.nodeName === 'v-model') {
                    const value = i.nodeValue.split('.').reduce((total, current) => {
                        return total[current]
                    }, vm.$data)
                    node.value = value;
                    // 创建订阅者，以便更新输入框中的值
                    new Watcher(vm, i.nodeValue, newVal => {
                        node.value = newVal;
                    })
                    // 视图更新数据
                    node.addEventListener('input', e => {
                        // [more, like]
                        const arr1 = i.nodeValue.split('.');
                        // [more]
                        const arr2 = arr1.slice(0, arr1.length - 1);
                        // vm.$data.more
                        const final = arr2.reduce((total, current) => total[current], vm.$data);
                        // vm.$data.more['more']
                        final[arr1[arr1.length - 1]] = e.target.value;
                    })
                }
            })
        }
        node.childNodes.forEach(child => fragment_compile(child))
    }
    vm.$el.appendChild(fragment)
}


// 依赖 - 收集和通知订阅者
class Dependency {
    constructor() {
        // this.subscribers = [];
        this.subscribers = new Set();
    }

    addSub(sub) {
        // this.subscribers.push(sub);
        this.subscribers.add(sub);
    }

    notify() {
        this.subscribers.forEach(sub => sub.update())
    }
}

// 订阅者
class Watcher {
    constructor(vm, key, callback) {
        this.vm = vm;
        // 实例的属性 key
        this.key = key;
        // 进行节点的变化
        this.callback = callback;
        // 临时变量，触发 getter
        Dependency.temp = this;
        key.split('.').reduce((total, current) => total[current], vm.$data);
        // 因为会过多的触发 getter 函数，所以需要清空 temp， 防止订阅者多次被添加
        Dependency.temp = null
    }
    // 创建 update 函数 ,问题1 什么时候创建 订阅者
    // 什么时候对文档进行更新的，我们要告诉订阅者将来要怎么更新自己
    update() {
        const value = this.key.split('.').reduce((total, current) => total[current], vm.$data);
        this.callback(value)
    }
}