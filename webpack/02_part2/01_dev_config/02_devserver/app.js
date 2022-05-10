console.log('Hello, World')

fetch('http://localhost:9000/api/hello')
  .then(resp => resp.text())
  .then(res => {
    console.log(res);
  })