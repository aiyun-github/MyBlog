const moment = require('moment');
module.exports = {
    title: "我的博客",
    description: "我的博客我的博客",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content: '博客' }],
        ['meta', { name: 'keywords', content: '我的博奥克guanzijain' }],
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    moment.locale(lang)
                    return moment(timestamp).format("LLLL")
                }
            }
        ]
    ],
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/hero.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' },
                ]
            }
        ],
        sidebar: [{
            title: '美丽的css 1', // 必要的
            path: '/css/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
            children: [
                '/css/c-aaa',
                '/css/c-bbb',
                '/css/c-ccc',
            ]
        }, ]
    }
}