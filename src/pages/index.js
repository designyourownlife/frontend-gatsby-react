import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Seo from "../components/Seo"

const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
    allStrapiBlog: { nodes: blogs },
  } = data
  return (
    <Layout>
      <Seo title="Home" description="WordPress design and development agency. We create quality-driven digital experiences for startups to enterprise projects. Your success is our mission." />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="Latest news" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProject(filter: {featured: {eq: true}}) {
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
    allStrapiBlog(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        id
        slug
        title
        date(formatString: "DD.MM.YYYY")
        excerpt
        categories {
          name
          slug
          id
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
              )
              fluid {
                src
              }
            }
          }
          alternativeText
        }
      }
    }
  }
`

export default IndexPage
