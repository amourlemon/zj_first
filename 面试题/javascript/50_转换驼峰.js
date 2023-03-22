function cssStyle2DomStyle(sName = '') {
    // // 填写JavaScript
    const len = sName.length;
    const arr = sName.split('')
    // return sName.replace
    for (let i = 0; i < len - 1; i++) {
        if (i !== 0 && sName[i] === '-') {
            const char = arr[i + 1].toUpperCase()
            arr[i + 1] = char;
        }
    }

    let name = arr.join('');

    return name.replace(/-/g, '')
}

console.log(cssStyle2DomStyle('font-size'));

const arr = [];
for (let i = 1; i < 6; i++) {
    arr.push(i);
}

const foo = (arr = [], number) => {
    while (arr.length > 1) {
        for (let i = 0; i < number - 1; i++) {
            arr.push(arr.shift());
        }
        arr.shift();
    }
    return arr;
}


console.log(foo(arr, 3));
