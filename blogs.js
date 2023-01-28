const blogs = [
  { id: 1, name: "blog one" },
  { id: 2, name: "blog two" },
  { id: 3, name: "blog three" }
]

function getBlogs() {
  blogs.map(blog =>
    console.log(blog.name)
  )
}

function addBlog(newBlog, callback) { //!we are using callback here to make sure that the new blog is added before we get the blogs
  blogs.push(newBlog)
  callback()
}

addBlog({ id: 4, name: "blog four" }, getBlogs)