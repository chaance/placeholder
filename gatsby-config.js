const config = {
  siteTitle: 'Chance the Developer',
  siteTitleAlt: 'A web developer who occasionally podcasts.',
  siteTitleShort: 'Chance the Dev',
  siteDescription: `Web developer, designer, and general dabbler in things. Welcome to my corner of the internet.`,
};

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: '@chancethedev',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: '/',
        background_color: '#1f1f1f',
        theme_color: '#558ca3',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
  ],
};
