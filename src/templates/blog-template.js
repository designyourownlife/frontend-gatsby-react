import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Seo from "../components/Seo";

function BlogPage({ data }) {
  const { content } = data.blog.content.data
  const { title, image } = data.blog

  return (
    <Layout>
      <Seo title={title} description={content} />
      <section className="blog-template-page blog-template">
        <div className="section-center">
          <div className="section-title">
            <h2>{title}</h2>
            <div className="underline"></div>
          </div>
          {image && (image.length > 0) && (
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              centeredSlides={true}
              pagination={true}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              {image.map((slide, index) => {
                let sliderImg = getImage(
                  slide.localFile.childImageSharp.gatsbyImageData
                )
                return (
                  <SwiperSlide key={index}>
                    <GatsbyImage
                      image={sliderImg}
                      alt={slide.alternativeText}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          )}

          <article className="blog-content">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlog(slug: { eq: $slug }) {
      content {
        data {
          content
        }
      }
      image {
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
        alternativeText
      }
      title
    }
  }
`

export default BlogPage
