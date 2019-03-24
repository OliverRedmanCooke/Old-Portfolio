import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default class ProjectPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section projects">
          <div className="container">
            <div className="content">
              <h2 className="has-text-weight-bold is-size-2">All Projects</h2>
            </div>
            <div>
            {posts
             .map(({ node: post }) =>  (
                <div
                  className=" column"
                  style={{ border: '1px solid #333', padding: '2em 4em' }}
                  key={post.id}
                >
                  <h3>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  <p>
                  {post.excerpt}
                  </p>
                  <p>
                    {post.frontmatter.description}
                  </p>
                  <p>
                    {post.frontmatter.date}
                  </p>
                    <Link className="button is-small" to={post.fields.slug}>
                      Find out more
                    </Link>
                </div>
              ))}
              </div>
          </div>
        </section>
      </Layout>
    )
  }
}

ProjectPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`


