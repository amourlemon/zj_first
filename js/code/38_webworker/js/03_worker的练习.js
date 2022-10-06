onmessage = function(event) {
    let value = parseInt(event.data);
    let res = 0;
    while(value > 0) {
        res += value;
        value--;
    }
    this.postMessage(res)
}