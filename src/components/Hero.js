import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "avatar-sophia.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div className="underline"></div>
        <h1> I'm Sophia</h1>
        <h4>full stack web developer</h4>
        <Link to="/contact" className="btn">
          contact me
        </Link>
        <SocialLinks />
      </article>
      <Image fluid={fluid} className="hero-img"/>

    </div>
    </header>
}

export default Hero
