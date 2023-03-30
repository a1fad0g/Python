fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => respons.json())
  .then(json => console.log(json))
  .catch(error => console.log(error.message))

  const getData = (url) =>
    new Promise((resolve, reject) =>
      fetch(url)
        .then(respons => respons.json())
        .then(json => resolve(json))
        .catch(error => reject(error))
    )

    getData('https://jsonplaceholder.typicode.com/todos/3')
      .then(data => console.log(data))
      .catch(error => console.log(error.message))

const asyncFn = async () => {
  return "Success!"
}
asyncFn()
