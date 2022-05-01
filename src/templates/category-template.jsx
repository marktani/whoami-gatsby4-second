import CategoryTemplateDetails from '../components/CategoryTemplateDetails'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

class CategoryTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const { category } = this.props.pageContext

    return (
      <Layout>
        <Helmet title={`${category} - ${title}`} />
        <Sidebar {...this.props} />
        <CategoryTemplateDetails {...this.props} />
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryPage($category: String) {
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
      filter: {
        frontmatter: {
          category: { eq: $category }
          layout: { eq: "post" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`
