module.exports = {
    title: 'My Documentation',
    description: 'This is a documentation site built with VitePress',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Getting Started', link: '/guide/getting-started' },
                    { text: 'Advanced Features', link: '/guide/advanced' },
                ],
            },
        ],
    },
};