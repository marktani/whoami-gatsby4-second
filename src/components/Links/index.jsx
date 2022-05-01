import '../../assets/fonts/fontello-4136890b/css/fontello.css'
import './style.scss'
import React from 'react'

class Links extends React.Component {
  render() {
    const author = this.props.data
    const { twitter, github, email, medium, youtube } = author
    const links = {
      twitter,
      github,
      email,
      medium,
      youtube,
    }

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item-twitter">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.twitter.com/${links.twitter}`}
            >
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item-github">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.github.com/${links.github}`}
            >
              <i className="icon-github" />
            </a>
          </li>
          {/* <li className="links__list-item-medium">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://medium.com/@${links.medium}`}
            >
              <i className="icon-medium" />
            </a>
          </li> */}
          <li className="links__list-item-youtube">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.youtube.com/channel/${links.youtube}`}
            >
              <i className="icon-youtube" />
            </a>
          </li>
          <li className="links__list-item-email">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links
