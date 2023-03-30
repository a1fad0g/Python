function myFn(a, b)  {
  let c
  a = a + 1
  c = a + b
  return c
}

myFn(10, 5)



function myFn(a, b)  {
    let c
    a = a + 1
    c = a + b
    return c
  }

  myFn(10, 5)

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))
