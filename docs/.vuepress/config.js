import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'WentUrc', // 网站标题
  description: '持续学习大学课程', // 网站描述
  head: [ // 注入到当前HTMl页面 <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],

  markdown: {
    lineNumbers: true, // 代码块显示行号
  },

  theme: defaultTheme({
    navbar: [ //导航栏
      { text: 'HTML笔记', link: '/html/' },
      { text: 'CSS笔记', link: '/css/' },
      { text: 'JS笔记', link: '/JavaScript/' }
    ],

    sidebar: {
      '/html/': [
        {
          text: 'HTML笔记',
          collapsible: true, // VuePress 2.x 中的 `collapsable` 替换为 `collapsible`
          children: [
            '/html/',  // README.md 对应路径
          ],
        },
      ],
      '/css/': [
        {
          text: 'CSS笔记',
          collapsible: true,
          children: ['/css/'],  // 这里也可以根据需要增加其他子页面
        },
      ],
      '/JavaScript/': [
        {
          text: 'JS笔记',
          collapsible: true,
          children: ['/JavaScript/'],  // 同样这里也可以增加其他子页面
        },
      ],
    },

    // 其他主题配置
    logo: '/img/logo1251.jpg',
    search: true,
    searchMaxSuggestions: 10,
    colorMode: 'light', // 'light' | 'dark' | 'auto'
    colorModeSwitch: true,
  }),

  bundler: viteBundler(),

  plugins: [
    '@vuepress/plugin-back-to-top', // 返回顶部的插件
    '@vuepress/plugin-medium-zoom', // 图片放大的插件
    [
      'vuepress-plugin-one-click-copy', // 注意插件名称已更新
      {
        copyMessage: '复制成功',
      },
    ],
  ],
})