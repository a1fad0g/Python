const myArray = [1, 2, 3, 10]
console.log(myArray)
const res = myArray.forEach(el => console.log(el*2))
console.log(res)
console.log(myArray)
// перебор всех элементом массива

const myArray2 = [1, 2, 3]
console.log(myArray2)
const newArray = myArray2.map((el) => {
  return el*3
})
console.log(newArray)
console.log(myArray2)
// формирует новый массив
