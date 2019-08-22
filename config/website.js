const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Kishan Kumar', // Navigation and Site Title
  siteTitleAlt: 'Kishan', // Alternative Site title for SEO
  siteTitleShort: 'Kumar', // short_name for manifest
  siteHeadline: 'Mongodb Express \\<\\Angular\\React> Node - Javascript Stack Developer', // Headline for schema.org JSONLD
  siteUrl: 'http://kishankumar.info', // Domain of your site. No trailing slash! //'https://kishankumarnr.github.io'
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Edgeineer',
  author: 'Kishan', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@kishan_nr', // Twitter Username
  ogSiteName: 'kishan.nr', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-146220467-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
