import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>copyright&copy;{new Date().getFullYear()}</h4>
        <span>
          built by Sophia Jung using React, Gatsby, Strapi & Contentful,{" "}
        </span>{" "}
        <span>all rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
