const postCssPlugins = require('./postcss-config.js')

module.exports = {
  siteMetadata: {
    url: 'https://nilan.netlify.com',
    title: 'Blog by Nilan Marktanner',
    subtitle: 'Building bridges between everything.',
    copyright: '© All rights reserved.',
    description: 'Building bridges between everything.',
    siteUrl: 'https://nilan.netlify.com',
    services: [
      {
        label: 'Coaching',
        path: '/coaching/',
      },
      {
        label: 'Consulting',
        path: '/consulting/',
      },
    ],
    projects: [
      {
        label: 'GROWING UP',
        path: '/growing-up/',
      },
      {
        label: 'DARK FABRICS',
        path: '/dark-fabrics/',
      },
      {
        label: 'YouTube Channel',
        path: '/youtube-channel/',
      },
      {
        label: 'Previous Projects',
        path: '/projects/',
      },
    ],
    about: [
      {
        label: 'About Nilan',
        path: '/about/',
      },
    ],
    author: {
      name: 'Nilan Marktanner',
      email: 'nilan.marktanner@gmail.com',
      twitter: '_marktani',
      github: 'marktani',
      medium: 'nilan',
      youtube: 'UCaeLJt6ReVftlF9aMsaBVkg',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nilan Marktanner`,
        short_name: `Nilan`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/logo/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto\:400,400i,500,700`, `archivo\:400,400i,500,700`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              aliases: {
                sh: 'shell',
              },
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
  ],
}
