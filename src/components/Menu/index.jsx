import './style.scss'
import Link from 'gatsby-link'
import React from 'react'

class Menu extends React.Component {
  render() {
    const { services, projects, about } = this.props.data

    const contentBlock = (
      <div>
        <div className="label">Blog</div>
        <ul className="menu__list">
          <li className="menu__top-item" key={'/'}>
            <Link
              to={'/'}
              className={'menu__top-item-link'}
              activeClassName={
                'menu__top-item-link menu__top-item-link--active'
              }
            >
              {'All Articles'}
            </Link>
          </li>
          {/* <li className="menu__top-item" key={'/categories'}>
            <Link
              to={'/categories'}
              className={'menu__top-item-link'}
              activeClassName={
                'menu__top-item-link menu__top-item-link--active'
              }
            >
              {'Categories'}
            </Link>
          </li> */}
        </ul>
      </div>
    )

    const servicesBlock = (
      <div>
        <hr className="menu__hr" />
        <div className="label">Services</div>
        <ul className="menu__list">
          {services &&
            services.map(item => (
              <li className="menu__list-item" key={item.path}>
                <Link
                  to={item.path}
                  className="menu__list-item-link"
                  activeClassName="menu__list-item-link menu__list-item-link--active"
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    const projectsBlock = (
      <div>
        <hr className="menu__hr" />
        <div className="label">Projects</div>
        <ul className="menu__list">
          {projects &&
            projects.map(item => (
              <li className="menu__list-item" key={item.path}>
                <Link
                  to={item.path}
                  className="menu__list-item-link"
                  activeClassName="menu__list-item-link menu__list-item-link--active"
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    const aboutBlock = (
      <div>
        <hr className="menu__hr" />
        <ul className="menu__list">
          {about &&
            about.map(item => (
              <li className="menu__list-item" key={item.path}>
                <Link
                  to={item.path}
                  className="menu__list-item-link"
                  activeClassName="menu__list-item-link menu__list-item-link--active"
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    return (
      <nav className="menu">
        {contentBlock}
        {servicesBlock}
        {projectsBlock}
        {aboutBlock}
      </nav>
    )
  }
}

export default Menu
