import icon32 from '../../../static/logo/favicon.png'
import '../../assets/scss/init.scss'
import PropTypes from 'prop-types'
import * as React from 'react'
import Helmet from 'react-helmet'

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Helmet
          defaultTitle="Blog by Nilan Marktanner"
          meta={[
            {
              name: 'description',
              content: 'Multifaceted and curious - Nilan Marktanner',
            },
            {
              name: 'keywords',
              content:
                'farsi, language, learning, poetry, development, graphql, improvement, cultures, meeting, philosophy',
            },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${icon32}` },
          ]}
        />
        <Helmet defaultTitle="Blog by Nilan Marktanner" />
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
