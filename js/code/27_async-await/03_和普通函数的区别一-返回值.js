// async  函数的返回值是一个 promise

async function foo() {

}

const res1 = foo();
console.log(res1); // Promise { undefined }

async function boo() {
    return 'abc'
}

console.log(boo()); // Promise { 'abc' }

async function coo() {
    return new Promise((resolve, reject) => {
        resolve('ddd');
    })
}

console.log(coo()); // Promise { <pending> }

async function doo() {
    return {
        then: (resolve, reject) => {
            resolve('eee')
        }
    }
}

console.log(doo()); //Promise { <pending> }

const doo1 = doo();
doo1.then(res => {
    console.log(res);
})