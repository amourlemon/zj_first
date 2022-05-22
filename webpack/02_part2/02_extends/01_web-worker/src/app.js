const sortBtn = document.createElement('button');
sortBtn.textContent = '排序';
document.body.appendChild(sortBtn)

const targetArr = document.createElement('div');
let arr = [4,3,1,8];
targetArr.textContent = arr;
document.body.appendChild(targetArr)


let worker = new Worker(new URL('./worker.js', import.meta.url));

sortBtn.addEventListener('click', () =>{
    worker.postMessage(arr);
})

const resultArr = document.createElement('div');
document.body.appendChild(resultArr)
worker.onmessage = (e) => {
    resultArr.textContent = e.data;
}