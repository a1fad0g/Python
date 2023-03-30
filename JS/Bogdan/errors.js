// works code
const fnWithError = () => {
  throw new Error('Same error')
}

try {
  fnWithError()
} catch (error) {
  console.error(error)
  console.log(error.message)
}

console.log('Continue...')
// not working good.only first part
//const fnWithError = () => {
//  throw new Error('Some error')
//}
//fnWithError()
//console.log('Continue...')
let a;
const b = 5;
if (a>b) {
  console.log('a is larger');
}

for (let i = 0; i++; i <5) {
  console.log(i);
}
 function myFn(a) {
   console.log(a);
 }
const b1 = 3;
let c = 10;

myFn(2+3)
myFn(b1)
myFn(c = c + 1)
//myFn(c = c + 1;)
//myFn(let b)
