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
      { text: 'beta', link: '/beta/' },
      { text: 'GPTstort', link: '/GPTstory/' },
      { text: 'tech', link: '/tech/' },
      { text: '房屋建筑学', link: '/房屋建筑学/' },
      { text: '工程力学', link: '/工程力学/' },
      { text: '管理学', link: '/管理学/' },
      { text: '近代史', link: '/近代史/' },
      { text: '经济学', link: '/经济学/' },
      { text: '英语', link: '/英语/' }
    ],

    sidebar: {
      '/beta/': [
        {
          text: 'beta',
          collapsible: true, // VuePress 2.x 中的 `collapsable` 替换为 `collapsible`
          children: [
            '/beta/',  // README.md 对应路径
          ],
        },
      ],
      '/GPTstory/': [
        {
          text: 'GPTstory',
          collapsible: true,
          children: [
            '1.md',
            '2.md',
          ],  // 这里也可以根据需要增加其他子页面
        },
      ],
      '/tech/': [
        {
          text: 'tech',
          collapsible: true,
          children: ['1.md','2.md','3.md','4.md','5.md','6.md','7.md','8.md'],  // 同样这里也可以增加其他子页面
        },
      ],
      '/工程力学/': [
        {
          text: '工程力学',
          collapsible: true,
          children: ['复习资料1.md','题目1的解答.md','题目解答2.md'],  // 同样这里也可以增加其他子页面
        },
      ],
      '/房屋建筑学/': [
        {
          text: '房屋建筑学',
          collapsible: true,
          children: ['复习资料 01.md',],  // 同样这里也可以增加其他子页面
        },
      ],
      '/管理学/': [
        {
          text: '管理学',
          collapsible: true,
          children: ['第一章.md',],  // 同样这里也可以增加其他子页面
        },
      ],
      '/经济学/': [
        {
          text: '经济学',
          collapsible: true,
          children: ['经济学期末考-复习1.md','经济学期末考-复习2.md'],  // 同样这里也可以增加其他子页面
        },
      ],
      '/英语/': [
        {
          text: '英语',
          collapsible: true,
          children: ['期末资料 .md',],  // 同样这里也可以增加其他子页面
        },
      ],
      '/近代史/': [
        {
          text: '近代史',
          collapsible: true,
          children: ['期末资料 .md',],  // 同样这里也可以增加其他子页面
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
    [
      'vuepress-plugin-mathjax',  // 插件名称
      {
        target: 'svg', // 使用 SVG 来渲染数学公式
        macros: {
          '*': '\\times',
        },
      },
    ],
  ],
})