import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import Button from '../common/Button';
import './styles.css';

export default function PhoneDisplay() {
  // UseStaticQuery hook to fetch data
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              icon_image {
                childImageSharp {
                  gatsbyImageData(width: 100)
                }
              }
              phone_image {
                childImageSharp {
                  gatsbyImageData(width: 250)
                }
              }
            }
          }
        }
      }
    }
  `);

  // Extract the relevant data from the GraphQL query response
  const contentData = data.allMarkdownRemark.edges;

  return (
    <div className="phone-display" >
      {contentData.map(({ node }) => (
        node.frontmatter.title ? (
          <div className="phone-display-content" key={node.frontmatter.title} >
          <div classNam e="phone-display-image">
            <GatsbyImage
                    image={getImage(node.frontmatter.phone_image)}
                    alt="phone"
                    className="phone-display-phone"
            />
          </div>
          <div className="phone-display-text">
                <GatsbyImage
                    image={getImage(node.frontmatter.icon_image)}
                    alt="icon"
                    className="phone-display-icon"
                />
                <h1>{node.frontmatter.title}</h1>
                <p>{node.frontmatter.description}</p>
                <div className="phone-display-button"><Button text="TRADE NOW" /></div>
          </div>         
        </div>
        ) : null
      ))}
    </div>
  );
}

