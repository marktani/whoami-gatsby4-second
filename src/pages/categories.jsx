import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'
import React from 'react'
import Helmet from 'react-helmet'

class Categories extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const categories = this.props.data.allMarkdownRemark.group

    return (
      <Layout>
        <Helmet title={`All Categories - ${title}`} />
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">Categories</h1>
              <div className="page__body">
                <div className="categories">
                  <ul className="categories__list">
                    {categories.map(category => (
                      <li
                        key={category.fieldValue}
                        className="categories__list-item"
                      >
                        <Link
                          to={`/categories/${kebabCase(category.fieldValue)}/`}
                          className="categories__list-item-link"
                        >
                          {category.fieldValue} ({category.totalCount})
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Categories

export const pageQuery = graphql`
  query CategoryesQuery {
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
      limit: 2000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
