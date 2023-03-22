const url = 'https://www.google.com/search?q=%E8%8E%B7%E5%8F%96url%E7%9A%84%E5%8F%82%E6%95%B0&oq=%E8%8E%B7%E5%8F%96url%E7%9A%84%E5%8F%82%E6%95%B0&aqs=chrome..69i57.7654j0j1&sourceid=chrome&ie=UTF-8';
const obj = {};
const params = url.split('?')[1].split('&');
params.forEach(item => {
    obj[item.split('=')[0]] = decodeURI(item.split('=')[1]);
})

console.log(obj);