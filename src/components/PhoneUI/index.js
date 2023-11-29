import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./styles.css";

export default function PhoneUI() {
    const query = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
        edges {
          node {
            frontmatter {
              display_picture {
                id
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
  }
`);
    const data = query.allMarkdownRemark.edges;
    return (
        <div className="phone-ui">
            {data.map(({node})=> (
                node.frontmatter.display_picture !== null ? (
                    <GatsbyImage
                        className="phone-ui-image"
                        image={getImage(node.frontmatter.display_picture)}
                        alt="display_picture"
                    />
                ) : null
            ))}
        </div>
    )
}

