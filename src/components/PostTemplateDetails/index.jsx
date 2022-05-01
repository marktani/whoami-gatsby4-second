import './style.scss'
import Link from 'gatsby-link'
import moment from 'moment'
import React from 'react'

class PostTemplateDetails extends React.Component {
  render() {
    const { author } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const tags = post.fields.tagSlugs

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="post-single__tags-list-item" key={tag}>
                <Link to={tag} className="post-single__tags-list-item-link">
                  {post.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    return (
      <div className="content">
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div
              className="post-single__body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="post-single__date">
              <p>
                <em>
                  Published{' '}
                  {moment(post.frontmatter.date).format('D MMMM YYYY')}
                </em>
              </p>
              <Link to={'/'} className="post-single__footer-link">
                Back Home
              </Link>
            </div>
            <div className="post-single__footer">
              {tagsBlock}
              <hr />
              <p className="post-single__footer-text">
                Follow me&nbsp;
                <a
                  href={`https://twitter.com/${author.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  on Twitter
                </a>
                &nbsp;to receive updates about new posts.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostTemplateDetails
