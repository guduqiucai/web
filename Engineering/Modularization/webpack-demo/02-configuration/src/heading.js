export default () => {
  const element = document.createElement('h2')
  element.textContent = 'Hello World'
  element.addEventListener('click', () => {
    alert('Hello Webpack')
  })
  return element
}
