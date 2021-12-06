const message = 'Hello World';
console.log(message.padStart(15, '-'));
console.log(message); // message 并没有发生变化

const newMessage = message.padStart(15, '-').padEnd(20,'_');
console.log(newMessage);
console.log(newMessage.length);  // 20

// 应用

const tel = '17865563960';
console.log(tel.slice(0, 3)); // 左闭右开
const newTel = tel.slice(0, 3).padEnd(7, '*').concat(tel.slice(-4));
console.log(tel);
console.log(newTel);