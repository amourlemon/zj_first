// let n = 12345;

let n = 256

for (let i = 0; i < 4; i++) {
    let temp = n >> 8;
    temp = temp << 8;
    console.log(n - temp);
    n = n >> 8;
}

let ip22 = "125.213.100.123"
let fragments = ip22.split(".")
let Ip_Num = 0;
for (let i = 0; i < fragments.length; i++) {
    Ip_Num = +fragments[i] | Ip_Num << 8
}
console.log(Ip_Num);   //打印结果  2111136891
