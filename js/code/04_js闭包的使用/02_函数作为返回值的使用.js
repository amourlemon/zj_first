function addMaker(count) {
    function add(num) {
        return count + num;
    }
     return add;
}

var add5 = addMaker(4);
console.log(add5(3));