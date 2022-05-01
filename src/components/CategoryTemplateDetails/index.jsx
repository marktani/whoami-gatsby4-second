import Post from '../Post'
import React from 'react'

class CategoryTemplateDetails extends React.Component {
  render() {
    const items = []
    const { category } = this.props.pageContext
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

export default CategoryTemplateDetails
