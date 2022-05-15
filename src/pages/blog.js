import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Blogs from "../components/Blogs"

const Blog = ({ data }) => {
  const {
    allStrapiBlog: { nodes: blogs },
  } = data

  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlog(sort: { fields: date, order: DESC }) {
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

export default Blog
