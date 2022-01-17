// 哈希函数的实现
function hashFn(str, limit) {
    const PRIME = 31;
    let hashCode = 0;
    // 使用 霍纳法则 计算 hashcode
    for (const item of str) {
        hashCode = PRIME * hashCode + item.charCodeAt();
    }
    // 压缩取余
    return hashCode % limit;
}

class HashTable {
    constructor() {
        this.MAX_LOAD_FACTOR = 0.75;
        this.MIN_LOAD_FACTOR = 0.25;
        this.storage = [];
        this.count = 0;
        this.limit = 7;
    }

    hashFn(str) {
        const PRIME = 31;
        let hashCode = 0;
        // 使用 霍纳法则 计算 hashcode
        for (const item of str) {
            hashCode = PRIME * hashCode + item.charCodeAt();
        }
        // 压缩取余
        return hashCode % this.limit;
    }

    // put(key, value) 插入或修改操作。
    put(key, value) {
        // 判断是否添加
        let overwrite = false;
        const index = this.hashFn(key);
        let bucket = this.storage[index];
        if (bucket === undefined || bucket.length === 0) {
            bucket = [];
            this.storage[index] = bucket;
        }
        for (const meta of bucket) {
            if (meta[0] === key) {
                meta[1] === value
                // 进行完修改操作后，不需要继续向下执行
                return;
            }
        }
        bucket.push([key, value]);
        this.count++;
        // 当存放的数据的数量超过一定数后，对哈希表进行扩容
        if (this.count / this.limit > this.MAX_LOAD_FACTOR) {
            const prime = this.getPrime(this.limit * 2);
            this.resize(prime);
        }
    }
    // get(key) 获取哈希表中特定位置的元素。
    get(key) {
        const index = this.hashFn(key);
        const bucket = this.storage[index];
        if (bucket === undefined || bucket.length === 0) {
            return null;
        } else {
            for (const meta of bucket) {
                if (meta[0] === key) {
                    return meta[1];
                }
            }
        }
    }
    // remove(key) 删除哈希表中特定位置的元素。
    remove(key) {
        const index = this.hashFn(key);
        const bucket = this.storage[index];
        if (bucket === undefined) {
            return null;
        } else {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                    this.count--;
                    // 当存放的数量变小时，对哈希表进行压缩
                    if (this.count > 7 && this.count / this.limit < this.MIN_LOAD_FACTOR) {
                        const prime = this.getPrime(Math.floor(this.limit / 2));
                        this.resize(prime);
                    }
                }
            }
        }
    }
    // isEmpty() 如果哈希表中不包含任何元素，返回 trun，如果哈希表长度大于 0 则返回 false。
    isEmpty() {
        return this.count === 0;
    }
    // size() 返回哈希表包含的元素个数。
    size() {
        return this.count;
    }
    // resize(value) 对哈希表进行扩容操作。
    resize(newLimit) {
        const oldStorage = this.storage;
        this.storage = [];
        this.limit = newLimit;
        for (const bucket of oldStorage) {
            if (bucket) {
                for (const meta of bucket) {
                    // 重新进行哈希化
                    this.put(meta[0], meta[1]);
                }
            }
        }
    }
    // 判断是不是质数
    isPrime(value) {
        // 对平方根进行向上取整
        const sqr = Math.ceil(Math.sqrt(value));
        for (let i = 2; i < sqr; i++) {
            if (sqr % i === 0) {
                return false;
            }
        }
        return true;
    }
    // 获取质数
    getPrime(value) {
        while (!this.isPrime(value)) {
            value++;
        }
        return value
    }

}

const hashTable = new HashTable();
hashTable.put('name', '张三');
hashTable.put('age', 23);
hashTable.put('height', '1.88');


hashTable.put('name', '李四');
hashTable.put('fdwerwes', '哈哈哈')
hashTable.put('aaaa', '哈哈哈')
hashTable.put('bbbb', '哈哈哈')
hashTable.put('cccc', '哈哈哈')
hashTable.put('aaa', '哈哈哈')
hashTable.put('bbb', '哈哈哈')
hashTable.put('ccc', '哈哈哈')
hashTable.put('ddd', '哈哈哈')

hashTable.remove('age');
console.log(hashTable.isEmpty());
console.log(hashTable.size());
hashTable.put('age', 23);
console.log(hashTable);