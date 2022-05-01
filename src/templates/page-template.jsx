import Layout from '../components/Layout'
import PageTemplateDetails from '../components/PageTemplateDetails'
import Sidebar from '../components/Sidebar'
import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

class PageTemplate extends React.Component {
  render() {
    const { title, subtitle, url } = this.props.data.site.siteMetadata
    const page = this.props.data.markdownRemark
    const { title: pageTitle, description: pageDescription } = page.frontmatter
    const description = pageDescription !== null ? pageDescription : subtitle

    const preview =
      page.frontmatter.preview &&
      page.frontmatter.preview.childImageSharp &&
      page.frontmatter.preview.childImageSharp.resize &&
      page.frontmatter.preview.childImageSharp.resize.src
        ? url + page.frontmatter.preview.childImageSharp.resize.src
        : `${url}/logo/favicon.png`

    const finalTitle = `${pageTitle} - ${title}`

    return (
      <Layout>
        <Helmet>
          <title>{`${pageTitle} - ${title}`}</title>
          <meta name="description" content={description} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:creator" content="@_marktani" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:src" content={preview} />
          <meta name="twitter:title" content={finalTitle} />

          <meta property="og:title" content={finalTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={preview} />
          <meta property="og:type" content="website" />
        </Helmet>
        <Sidebar {...this.props} />
        <PageTemplateDetails {...this.props} />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        url
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        preview {
          childImageSharp {
            original {
              src
            }
            resize {
              src
            }
          }
        }
      }
      fields {
        tagSlugs
        slug
        categorySlug
      }
    }
  }
`
