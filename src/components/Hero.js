import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import SocialLinks from "../constants/social_links"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i’m matthias</h1>
            <h4>freelance web designer/developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="Webdesign"
          className="hero-img"
          placeholder="blurred"
        />
        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  )
}

export default Hero