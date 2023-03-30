class Comment {
  constructor(text) {
    this.text = text
    this.voresQty = 0
  }

  upvote() {
    this.voresQty += 1
  }
static mergeComments(first, second) {
  return `${first} ${second}`
  }
}

const firstComment = new Comment('First comment')

firstComment.upvote()
console.log(firstComment.voresQty)
firstComment.upvote()
console.log(firstComment.voresQty)

class NumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => acc += el, 0)
  }
}
const myArray = new NumbersArray(2, 5, 7)
console.log(myArray)
myArray.sum()
