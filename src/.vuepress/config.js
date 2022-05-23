module.exports = {
  dest:"docs",
  title: "Notes Git, Css, JavaScript, NodeJS, MongoDB y VueJS",
  description: "Guía básica sobre el stack mevn",
  base:"/stack-mevn/",
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    // repo: '',
    editLinks: false,
    // docsDir: '',
    editLinkText: '',
    // lastUpdated: true,
    lastUpdated: true, 
    nav: [
      {
        text: 'Guía',
        link: '/',
      },
    ],
    sidebar:[/* "/", */"/01-git/",'/02-css/','/03-typescript/','/04-vanillajs/']
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
      }
    }
    ]
  ]
  // plugins: [
  //   '@vuepress/plugin-back-to-top',
  //   '@vuepress/plugin-medium-zoom',
  //   '@vuepress/last-updated'
  // ]
}
