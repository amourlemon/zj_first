function prePrint() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello!!!')
    }, 2000)
  })
}

async function helloWorld() {
  console.log(await prePrint());
}

export default helloWorld