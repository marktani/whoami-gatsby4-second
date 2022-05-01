import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import * as React from 'react'

class NotFoundPage extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata

    return (
      <Layout>
        <Seo title={title} />
        <Sidebar {...this.props} />
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        services {
          label
          path
        }
        projects {
          label
          path
        }
        about {
          label
          path
        }
        author {
          name
          email
          twitter
          github
          medium
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            category
            description
            path
          }
          fields {
            tagSlugs
            slug
            categorySlug
          }
        }
      }
    }
  }
`
