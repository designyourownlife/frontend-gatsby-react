import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteURL
        siteTitle: title
      }
    }
  }
`

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { author, siteTitle, siteDesc, image, siteURL } = site.siteMetadata

  //trim the string to the maximum length
  let descText = description.substr(0, 179);
  //re-trim if we are in the middle of a word
  descText = descText.substr(0, Math.min(descText.length, descText.lastIndexOf(" ")))

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="author" content={author} />
      <meta name="description" content={descText || siteDesc} />
      <meta name="image" content={image} />
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@johndo" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteURL}${image}`}/>
    </Helmet>
  )
}

export default Seo
