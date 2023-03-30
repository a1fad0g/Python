//Условие ? Выражение 1 : Выражение 2 (Тернарный оператор)

const value = 11
value
  ? console.log('Condition is true')    // Условие 
  : console.log('Condition is false')

  const value1 = 11
  const value2 = 25
  value1 && value2
    ? myFunction1(value1, value2)
    : myFunction2()


let value3 = 11
console.log(value3 >= 0 ? value3 : -value)

value4 = -5
const res = value4 >= 0 ? value4 : -value
console.log(res)