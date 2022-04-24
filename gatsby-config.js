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
        path: '/coaching/'
      },
      {
        label: 'Consulting',
        path: '/consulting/'
      },
    ],
    projects: [
      {
        label: 'GROWING UP',
        path: '/growing-up/'
      },
      {
        label: 'DARK FABRICS',
        path: '/dark-fabrics/'
      },
      {
        label: 'YouTube Channel',
        path: '/youtube-channel/'
      },
      {
        label: 'Past Projects',
        path: '/past-projects/'
      },
    ],
    about: [
      {
        label: 'About',
        path: '/about/'
      }
    ],
    author: {
      name: 'Nilan Marktanner',
      email: 'nilan.marktanner@gmail.com',
      twitter: '_marktani',
      github: 'marktani',
      medium: 'nilan'
    }
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
        name: 'pages'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:400,400i,500,700`,
          `archivo\:400,400i,500,700`
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: false,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    'gatsby-plugin-sass',
  ],
}
