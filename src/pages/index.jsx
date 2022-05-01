import Feed from '../components/Feed'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { graphql } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'

class IndexPage extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata

    return (
      <Layout>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <Feed {...this.props} />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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
