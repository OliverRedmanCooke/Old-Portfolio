import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import GitRepo from '../components/GitRepo';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="hero ">
            <div className="hero-body">
              <div className="container">
                <div className="hero-text"> 
                  <h1 className="title is-spaced is-size-2">
                  Oliver R Cooke 
                  </h1>
                  <h2 className="subtitle has-text-weight-bold">
                    Full stack developer with a passion for clean code and user centered design
                  </h2>
                </div> 
                <div className="content has-text-centered">
                  <Link className=" button dark" to="/contact">
                  Get in touch
                  </Link>
                </div>
              </div>
            </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <h2 className="has-text-weight-bold "> Projects -<Link to="/projects"> view more </Link> </h2>
            </div>
            <div className="columns">
            {posts
              .slice(0, 4).map(({ node: post }) =>  (
                <div
                  className="content column"
                  style={{ border: '1px solid #333', padding: '2em 4em' }}
                  key={post.id}
                >
                  <h3>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  <p>
                    {post.frontmatter.description}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Find out more
                    </Link>
                  </p>
                </div>
              ))}
              </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
            <h2 className="has-text-weight-bold" > My Github <a  href="https://github.com/OliverRedmanCooke" >Repositories</a></h2> 
            <GitRepo/>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
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


