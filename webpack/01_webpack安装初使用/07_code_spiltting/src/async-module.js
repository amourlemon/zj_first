function getComponent() {
  return import('loadsh')
    .then(({
      default: _
    }) => {
      const element = document.createElement('div')
      console.log('构建一个div');
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      return element
    })
}

getComponent().then(component => {
  document.body.appendChild(component)
})