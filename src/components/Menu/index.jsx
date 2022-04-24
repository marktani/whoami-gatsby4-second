import React from 'react';
import Link from 'gatsby-link';
import './style.scss';

class Menu extends React.Component {
  render() {
    const { services, projects, about } = this.props.data;

    const contentBlock = (
      <div>
        <div className="label">Blog</div>
        <ul className="content__list">
        <li className="content__top-item" key={"/"}>
            <Link
              exact
              to={"/"}
              className={"content__top-item-link"}
              activeClassName={"content__top-item-link content__top-item-link--active"}
            >
              {"All Articles"}
            </Link>
          </li>
          <li className="content__top-item" key={"/categories"}>
            <Link
              exact
              to={"/categories"}
              className={"content__top-item-link"}
              activeClassName={"content__top-item-link content__top-item-link--active"}
            >
              {"Categories"}
            </Link>
          </li>
        </ul>
      </div>
    );

    const servicesBlock = (
      <div>
        <hr className="menu__hr" />
        <div className="label">Services</div>
        <ul className="menu__list">
          {services && services.map(item => (
            <li className="menu__list-item" key={item.path}>
              <Link
                exact
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
    );

    const projectsBlock = (
      <div>
        
        <hr className="menu__hr" />
        <div className="label">Projects</div>
        <ul className="menu__list">
          {projects && projects.map(item => (
            <li className="menu__list-item" key={item.path}>
              <Link
                exact
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
    );

    const aboutBlock = (
      <div>
        
        <hr className="menu__hr" />
        <ul className="menu__list">
          {about && about.map(item => (
            <li className="menu__list-item" key={item.path}>
              <Link
                exact
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
    );

    return (
      <nav className="menu">
        {contentBlock}
        {servicesBlock}
        {projectsBlock}
        {aboutBlock}
      </nav>
    );
  }
}

export default Menu;
