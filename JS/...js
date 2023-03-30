const button1 = {
  width: 200,
  text: 'Buy',
  color: 'blue'
}

const redButton = {
  ...button1,
  color: 'red'
}

console.table(redButton)

console.log(redButton)


const buttonInfo = {
  text: 'Buy'
}

const buttonStyle = {
  color: 'yellow',
  width: 200,
  height: 300
}
console.log(buttonInfo)
console.log(buttonStyle)
const button = {
  ...buttonInfo,
  ...buttonStyle
}
console.table(button)
console.log(button)
