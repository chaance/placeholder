import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import './header.css';

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="Header__card">
      <Image className="Header__image" />
      <h1 className="Header__heading">{siteTitle}</h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

export const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "chances.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      alt="Chance Strickland headshot"
      fluid={data.placeholderImage.childImageSharp.fluid}
      {...props}
    />
  );
};
