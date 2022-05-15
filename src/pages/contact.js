import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/mvoldwry" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
              <button type="submit" className="submit-btn btn">
                send now
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
