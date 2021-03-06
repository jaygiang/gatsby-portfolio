module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Jay Giang Portfolio`,
    author: `@jaygiang`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'jcjs4fij',
        dataset: 'production',
        overlayDrafts: true,
        watchMode: true,
        token:
          'sksJtvyvXfilWdI6mUgSVQX8HYJmGTcLfPmYKw1KshrdZ0aRa3VvwzEP5oOOgoCTqzpLI8mrLFN2iKAZgtZnhXjmy7D2B8kE6NOwqidGDfHNe7OR74sLnrt8ku90Y4XgYTbIbY6QdRIGSgGgiTzMeOjbqgYW5DQjPGspxDpfLXEkzt2evqFe'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
