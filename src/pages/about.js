import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"

import Title from "../components/Title"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  
  const { title, content, image, stack } = nodes[0]
  const img = getImage(image.localFile.childImageSharp)

  return (
    <Layout>
      <Seo title="About" description={content.data.content} />
      <section className="about-page">
        <div className="section-center about-center">
          {image && (
            <GatsbyImage
              image={img}
              alt={image.alternativeText}
              className="about-img"
            />
          )}
          <article className="about-text">
            <div className="project-stack">
              <Title title={title} />
              <ReactMarkdown>{content.data.content}</ReactMarkdown>
              <div className="about-stack">
                {stack.map(item => {
                  return <span key={item.id}>{item.name}</span>
                })}
              </div>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        id
        image {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              fluid {
                src
              }
            }
          }
        }
        title
        content {
          data {
            content
            id
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

export default About
