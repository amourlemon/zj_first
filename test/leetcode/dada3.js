randomFn();

function randomFn() {
    const red = [];
    const blue = Math.floor(Math.random() * 6);
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 33)
        while (red.includes(num)) {
            num = Math.floor(Math.random() * 33)
        }
        red.push(num)
    }

    red.sort((a, b) => a - b)
}

