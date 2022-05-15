import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { FaAngleDoubleRight } from "react-icons/fa"

import Title from "./Title"

const query = graphql`
  {
    allStrapiJob(sort: { fields: strapi_id, order: DESC }) {
      nodes {
        strapi_id
        company
        date
        desc {
          id
          name
        }
        position
      }
    }
  }
`

const Jobs = () => {
  const [value, setValue] = useState(0)
  const data = useStaticQuery(query)
  const {
    allStrapiJob: { nodes: jobs },
  } = data
  const { company, position, date, desc } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => (
            <button
              key={item.strapi_id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && "active-btn"}`}
            >
              {item.company}
            </button>
          ))}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
