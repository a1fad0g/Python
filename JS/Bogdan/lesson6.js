const age =  5

if (age >= 18) {
  console.log('Is adult')
} if (age >= 12 && age < 18) {
    console.log('Is teenager')
} if (age< 12) {
    console.log('Is child')
}

// why not work ??
//sumPositiveNumbers('a', true)
const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "ONe of the arguments is not a number"
    }
    if (a <=0 || b <=0) {
        return "Numbers are not positive"
    }

    return a + b
}

const month = 2 

switch (month) {
    case 12:
        console.log('Декабрь')
        break
    case 1:
        console.log('Яныврь')
        break
    case 2:
        console.log('Февраль')
        break
    default:
        console.log('Это не зимний месяц')
}