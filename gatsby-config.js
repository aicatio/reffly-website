module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA4_CODE,
        enableWebVitalsTracking: true,
        pageTransitionDelay: 0,
      },
    },
    'gatsby-plugin-top-layout',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
  ],
};
