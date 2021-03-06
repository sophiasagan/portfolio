import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in Touch</h3>
          <form action="https://formspree.io/f/xvovwgwg" method="POST">
            <div className="form-group">
              <input type="text" placeholder="name" name="name" className="form-control" />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
              <button type="submit" className="submit-btn btn">
                submit
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
