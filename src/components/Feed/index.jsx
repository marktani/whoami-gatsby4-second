import Post from '../Post'
import * as React from 'react'

class Feed extends React.Component {
  render() {
    const items = []
    const posts = this.props.data.allMarkdownRemark.edges
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />)
    })

    return (
      <div className="content">
        <div className="content__inner">{items}</div>
      </div>
    )
  }
}

export default Feed
