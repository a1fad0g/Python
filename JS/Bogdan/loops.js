const myArray = ['first', 'second', 'third']
for (let i = 0; i <myArray.length; ++i) {
    console.log(myArray[i])
}

// foreach

const myArray2 = ['first', 'second', 'third']

myArray2.forEach((element, index) => {
    console.log(element, index)
})

//while

let i = 0

while (i < 5) {
    console.log(i)
    i++
}
// do while использ когда нужно выполнить усл хотябы раз
let a = 0
do {
    console.log(i)
    a++
}   while (a <5)

// for in
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}
for (const key in myObject){
    console.log(key, myObject[key])
}

const myObject2 = {
    x: 10,
    y: true,
    z: 'abc'
}
Object.keys(myObject2).forEach(key => {
    console.log(key, myObject2[key])

Object.values(myObject2).forEach(value => {
    console.log(value)
})

})

const myArray7 = [true, 10, 'abc', null]  // forEach намного лучшее.

for (const key in myArray7) {
    console.log(myArray7[key])
}
// for of   не для объектов
const myString = 'Hey'
for (const letter of myString) {
    console.log(letter)
}

const myArray3 = [true, 10, 'abc', null]
for (const element of myArray3) {
    console.log(element)
}
// Лучше этот вариант
const myArray4 = [true, 10, 'abc', null]
myArray4.forEach(element =>{
    console.log(element)
})