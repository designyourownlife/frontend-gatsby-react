import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

import Layout from "../components/Layout"

const Error = () => {
  return (
    <Layout>
      <Seo title="404 – not found" />
      <main className="error-page">
        <div className="error-container">
          <h1>Oops</h1>
          <div className="section-title">
            <h2>it’s a dead end</h2>
            <div className="underline"></div>
          </div>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
