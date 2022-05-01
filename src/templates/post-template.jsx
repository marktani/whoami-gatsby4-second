import Layout from '../components/Layout'
import PostTemplateDetails from '../components/PostTemplateDetails'
import Sidebar from '../components/Sidebar'
import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle, url } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const { title: postTitle, description: postDescription } = post.frontmatter
    const description = postDescription !== null ? postDescription : subtitle

    const preview =
      post.frontmatter.preview &&
      post.frontmatter.preview.childImageSharp &&
      post.frontmatter.preview.childImageSharp.resize &&
      post.frontmatter.preview.childImageSharp.resize.src
        ? url + post.frontmatter.preview.childImageSharp.resize.src
        : `${url}/logo/favicon.png`

    const finalTitle = `${postTitle} - ${title}`

    return (
      <Layout>
        <Helmet>
          <title>{finalTitle}</title>
          <meta name="description" content={description} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:creator" content="@_marktani" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:src" content={preview} />
          <meta name="twitter:title" content={finalTitle} />

          <meta property="og:title" content={finalTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={preview} />
          <meta property="og:type" content="article" />
        </Helmet>
        <Sidebar {...this.props} />
        <PostTemplateDetails {...this.props} />
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
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
          twitter
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
        slug
        categorySlug
      }
      frontmatter {
        title
        tags
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
    }
  }
`
