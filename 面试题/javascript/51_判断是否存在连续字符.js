function containsRepeatingLetter(str = '') {
    str = str.replace(/[^a-zA-Z]*/g, '');
    console.log(str);
    const reg = /(.)\1{1}/
    return reg.test(str)

}

console.log(containsRepeatingLetter('sd1,24fasds'));