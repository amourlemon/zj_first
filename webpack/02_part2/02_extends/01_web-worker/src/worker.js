onmessage = function(e) {
    console.log(e);
    const data = e.data;
    this.postMessage(
        data.sort((a, b) => a - b)
    )
}