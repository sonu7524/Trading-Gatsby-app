import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import frame from "../../../static/images/frame.png";
import "./styles.css";
import { graphql, useStaticQuery } from "gatsby";
export default function ReviewContent() {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  author
                  designation
                  review
                  photo {
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
        <div className="review-content">
            <h1 className="title">Don’t take our word for it.</h1>
            <p>Hear it from our expert community of traders who have made insane amounts in a short amount of time</p>

            <div className="review-cards">
                {contentData.map(({ node }) => (
                    node.frontmatter.review !== null ? (
                        <div className="review-card" key={node.id}>
                            <img className="frame" src={frame} alt="frame" />
                          <p>{node.frontmatter.review}</p>
                          <div className="review-card-footer">
                            <div className="review-card-text">
                              <h3>{node.frontmatter.author}</h3>
                              <p>{node.frontmatter.designation}</p>
                            </div>
                            <div className="review-card-image">
                                <GatsbyImage
                                    image={getImage(node.frontmatter.photo)}
                                    alt="review"
                                />
                            </div>
                          </div>
                        </div>
                      ) : null
                ))}
            </div>
        </div>
    )
}