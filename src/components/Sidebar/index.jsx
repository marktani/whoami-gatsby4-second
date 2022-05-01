import profilePic from '../../pages/photo.jpg'
import Links from '../Links'
import Menu from '../Menu'
import './style.scss'
import Link from 'gatsby-link'
import React from 'react'

class Sidebar extends React.Component {
  render() {
    const { author, subtitle, services, projects, about } =
      this.props.data.site.siteMetadata

    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    )
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div>
            <Menu data={{ services, projects, about }} />
            <div className="sidebar__author">{authorBlock}</div>
            <Links data={author} />
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
