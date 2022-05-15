import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const ProjectsPage = ({
  data: {allStrapiProject: { nodes: projects }}
}) => {
  return (
    <Layout>
      <Seo title="Projects" />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        id
        github
        description
        title
        url
        image {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
              )
              fluid {
                src
              }
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
  }
`

export default ProjectsPage
