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
    lastUpdated: true,
    nav: [
      {
        text: 'Guía',
        link: '/',
      },
    ],
    sidebar:[/* "/", */"/01-git/",'/02-css/','/03-typescript/']
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated'
  ]
}
