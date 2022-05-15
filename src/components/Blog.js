import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Blog({ id, title, image, slug, date, excerpt, categories }) {
  const firstImg = image[0];
  const img = getImage(firstImg.localFile.childImageSharp.gatsbyImageData);
  return (
    <div className="card">
        <div className="card-side card-front">
          <GatsbyImage
            image={img}
            alt={firstImg.alternativeText}
          />
          <div className="card-info">
          <p>{date}</p>
            <h4>{title}</h4>
            <p>{excerpt}</p>
            <div className="card-footer">
              <div className="project-stack">
              {categories.map(category => {
                return <span key={category.id}>{category.name}</span>
              })}
              </div>
            </div>
          </div>
        </div>
        <div className="card-side card-back">
          <Link to={`/blogs/${slug}`} key={id} className="btn center-btn">read more</Link>
        </div>
    </div>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired, 
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Blog
