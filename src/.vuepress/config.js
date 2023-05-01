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
    // lastUpdated: true, string | boolean
    lastUpdated: true, 
    nav: [
      {
        text: 'Guía',
        link: '/',
      },
    ],
   /* ORIGINAL CONFIG */
   /*  sidebar:[
      "/01-git/",
      '/02-css/',
      '/03-typescript/',
      '/04-vanillajs/',
      '/05-mongodb/'
    ], */
    /* CONFIG II  */
    sidebar:[
      {
        title:'Git',
        path:'/01-git/',
      },
      {
        title:'MongoDB',
        path:'/05-mongodb/',
        collapsable:true,
        children:[
          '/05-mongodb/basic-command.md',
          '/05-mongodb/cursor.md',
          '/05-mongodb/queries.md',
          '/05-mongodb/oper-comparacion.md',
          '/05-mongodb/oper-consulta-logica.md',
          '/05-mongodb/oper-consulta-elemen.md',
          '/05-mongodb/oper-consult-evalu.md',
          '/05-mongodb/update-documents.md',
          '/05-mongodb/deleting.md',
        ]
      },
      {
        title:'TypeScript',
        path:'/03-typescript/',
      },
      {
        title:'Css',
        path:'/02-css/',
      },
      /* nuevo 1 mayo 2023 */
      {
        title: 'POO',
        path:'/04-poo/'
      }
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    // '@vuepress/last-updated'
    '@vuepress/last-updated',/* {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).format('LLL')
      }
    } */
  ]
  // plugins: [
  //   '@vuepress/plugin-back-to-top',
  //   '@vuepress/plugin-medium-zoom',
  //   '@vuepress/last-updated'
  // ]
}
