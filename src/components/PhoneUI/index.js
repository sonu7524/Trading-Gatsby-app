import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
    return <div className="phone-ui">
        {data.map(({node})=> (
            node.frontmatter.display_picture !== null ? (
                <GatsbyImage
                    image={getImage(node.frontmatter.display_picture)}
                    alt="display_picture"
                />
            ) : null
        ))}
    </div>;
}

