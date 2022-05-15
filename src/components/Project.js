import React from "react"
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({id, index, github, description, stack, title, image, url}) => {
  const img = getImage(image.localFile.childImageSharp);
  
  return <article className="project">
    {image &&
      <GatsbyImage image={img} alt={image.alternativeText} className="project-img" />
    }
    <div className="project-info">
      <span className="project-number">{index+1}</span>
      <h3>{title}</h3>
      <p className="project-desc">
        {description}
      </p>
      <div className="project-stack">
        {stack.map(item => {
          return <span key={item.id}>{item.name}</span>
        })}
      </div>
      <div className="project-links">
        <Link to={github}>
          <FaGithubSquare className="project-icon" />
        </Link>
        <Link to={url}>
        <FaShareSquare className="project-icon" />
        </Link>
      </div>
    </div>
  </article>
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Project
