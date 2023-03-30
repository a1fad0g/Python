import {sum, mult as myltNumbers} from './moduleOne.mjs'

import sumNumbers from './moduleOne.mjs' 
import {
    one as oneRenamed,
    two
} from './moduleOne.mjs'
const res = sumNumbers(10, 2)
console.log(res)
//console.log(myName)
console.log(oneRenamed)  // 1
console.log(two)  //two

console.log(sum(10,2))
console.log(myltNumbers(10,2))