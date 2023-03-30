//setTimeout(function() {
  //console.log('Отложенное сообщение')
//}, 1000)

(a, b) => {
  let c
  a = a + 2
  c = a + b
  return c
}
console.log('c')

setTimeout(() => {
  console.log('Отложенное сообщение')
}, 1000 )

function (value, multiplier = 1) {
  return value* multiplier

}
multByFactor(value, multiplier = 1) =>
  return value * multiplier
