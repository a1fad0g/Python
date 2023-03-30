const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
})

const firstPost = {
  id: 1,
  author: 'Igor',
  return newPost
}
newPost(firstPost)
console.log(firstPost)
console.table(firstPost)
