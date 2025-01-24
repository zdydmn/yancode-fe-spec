import { sidebar } from './relaConf/index';

module.exports = {
  title: 'My Documentation',
  description: 'This is a documentation site built with VitePress',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CSS编码规范', link: '/css/' },
    ],
    sidebar,
  },
};
