module.exports = {
  siteMetadata: {
    title: `Contentful Gatsby`,
    description: `Conents from  Contentful CMS`,
    author: `@gatsbyjs`,
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
        name: `gatsby-starter-default`,
        short_name: `gatsby-contentful`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `y3lsn88xhkkr`,
        accessToken: `kJ7Z-0bUI7G-ERfMvOvKRnTbQW83eRRWivE5KzVklUc`,
        downloadLocal: true,
      },
    },
  ],
}
