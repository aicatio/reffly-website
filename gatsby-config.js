require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    /** This plugin must be the last plugin witch work with CSS */
    'gatsby-plugin-mini-css-class-name',
  ],
};
