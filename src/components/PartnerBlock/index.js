import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./styles.css";
import { Link, graphql, useStaticQuery } from "gatsby";
export default function PartnerBlock() {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  partner_name
                  partner_designation
                  social_media_image {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  partner_image {
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

  // Extract the relevant data from the GraphQL query response
  const contentData = data.allMarkdownRemark.edges;
    return (
        <div className="partner-block">
            <div className="partner-content">
              <h1 className="title">Meet the <b className="glow">Visionaries </b>behind Density.</h1>
              <p className="subtitle">No Complexity of Trading Fee, generate volume and win</p>
            </div>
            <div className="partner-cards">
                {contentData.map(({ node }) => (
                    node.frontmatter.partner_name !== null ? (
                        <div className="partner-card" key={node.id}>
                          <div className="partner-info-content">
                            <div className="partner-info">
                              <h2>{node.frontmatter.partner_name}</h2>
                              <p>{node.frontmatter.partner_designation}</p>
                            </div>
                            <div className="social-media-icon">
                              <Link to="/"><GatsbyImage
                                image={getImage(node.frontmatter.social_media_image)}
                                alt="partner_photo"
                              /></Link>
                            </div>
                          </div> 
                          <div className="partner-image">
                            <GatsbyImage
                              image={getImage(node.frontmatter.partner_image)}
                              alt="partner_photo"
                            />
                          </div>
                        </div>
                      ) : null
                ))}
            </div>
        </div>
    )
}