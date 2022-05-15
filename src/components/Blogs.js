import React from "react"
import { Link } from "gatsby"

import Title from "./Title"
import Blog from "./Blog"

const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section blog">
      <Title title={title} />
      <div className="section-center blog-center">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}

export default Blogs
