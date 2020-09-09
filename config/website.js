/* eslint-disable import/no-commonjs */
module.exports = {
  siteTitle: 'Alkemy Hossain', // Navigation and Site Title
  siteTitleAlt: 'The personal website of Alkemy Hossain', // Alternative Site title for SEO
  siteTitleShort: 'csalkemy', // short_name for manifest
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  siteUrl: process.env.ROOT_URL || 'https://alkemy.io', // Domain of your site. No trailing slash!
  lang: 'en', // Language Tag on <html> element
  pathPrefix: '/',
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'Come check out how Marcus Wood can help you with coding, entrepreneurship, and building products.',
  minibio: `
      <strong>Marcus Wood</strong> is a JavaScript software engineer that focuses on building products that scale using Typescript, React, and GraphQL. He has built and delivered solutions for some of the largest companies in the world.
    `,
  author: 'Marcus Wood', // Author for schemaORGJSONLD
  organization: 'Caldera, LLC',
  keywords: [
    'Software Engineer',
    'React Engineer',
    'Web developer',
    'Typescript Training',
    'JavaScript Developer',
  ],

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@dev_heros', // Twitter Username
  ogSiteName: 'mah.hridoy.5', // Facebook Site Name
  ogLanguage: 'en_US',

  // Manifest and Progress color
  themeColor: '#4660F6',
  backgroundColor: '#232739',

  // Social component
  twitter: 'https://twitter.com/dev_heros/',
  twitterHandle: '@dev_heros',
  github: 'https://github.com/csalkemy/',
  rss: '#',
  linkedin: 'https://www.linkedin.com/in/aalkemy/',
  postsPerPage: 5,
}
