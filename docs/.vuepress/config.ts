import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'WentUrc', // 网站标题
  description: '持续学习大学课程', // 网站描述
  head: [ // 注入到当前HTMl页面 <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],

  theme: plumeTheme({
    // 其他主题配置
    logo: '/img/logo1251.jpg',
    notes: false,
    autoFrontmatter: false,
    sidebar: {
        '/beta/': [
          {
            text: 'beta',
            collapsed: true, // VuePress 2.x 中的 `collapsable` 替换为 `collapsed`
            items: [
              '/beta/',  // README.md 对应路径
            ],
          },
        ],
        '/novel/':[
          {
            text: 'Novel',
            items: [
              {
                text: 'Re - 从零开始的异世界生活',
                collapsed: true,
                items: [
                  '/novel/Re - 从零开始的异世界生活/',
                    {
                      text: '第一卷',
                      collapsed: true,
                      items: [
                        '/novel/Re - 从零开始的异世界生活/第一卷/插图/插图.md',
                        {
                          text: '序章',
                          collapsed: true,
                          items: [
                          '/novel/Re - 从零开始的异世界生活/第一卷/序章/序章 开始的余韵.md',
                          ],
                        },
                        {
                          text: '第一章',
                          collapsed: true,
                          items: [
                            '/novel/Re - 从零开始的异世界生活/第一卷/第一章/第一章 开始的结束.md'
                          ]
                        },
                        {
                          text: '第二章',
                          collapsed: true,
                          items: [
                            '/novel/Re - 从零开始的异世界生活/第一卷/第二章/第二章 太迟的抵抗.md',
                          ]
                        },
                        {
                          text: '第三章',
                          collapsed: true,
                          items: [
                            '/novel/Re - 从零开始的异世界生活/第一卷/第三章/第三章 结束的开始.md',
                          ]
                        },
                        {
                          text: '第四章',
                          collapsed: true,
                          items: [
                            '/novel/Re - 从零开始的异世界生活/第一卷/第四章/第四章 第四次的正直.md',
                          ]
                        },
                        {
                          text: '第五章',
                          collapsed: true,
                          items: [
                            '/novel/Re - 从零开始的异世界生活/第一卷/第五章/第五章 从零开始的异世界生活.md',
                          ]
                        },
                        {
                          text: '终章',
                          collapsed: true,
                          items: [
                            '/novel/Re - 从零开始的异世界生活/第一卷/终章/终章 月亮都看在眼里.md',
                          ]
                        },
                        {
                          text: '后记',
                          collapsed: true,
                          items: [
                            '/novel/Re - 从零开始的异世界生活/第一卷/后记/后记.md',
                          ]
                        }
                      ],
                    },
                    
                ],
              },
            ],
          },
        ],
        '/GPTstory/': [
          {
            text: 'GPTstory',
            collapsed: true,
            items: [
              '1.md',
              '2.md',
              '3.md',
              '4.md',
              '5.md',
            ],  // 这里也可以根据需要增加其他子页面
          },
        ],
        '/tech/': [
          {
            text: 'tech',
            collapsed: true,
            items: ['1.md','2.md','3.md','4.md','5.md','6.md','7.md','8.md','9.md'],  // 同样这里也可以增加其他子页面
          },
        ],
        '/learn/': [
          //Group1
          {
            text: 'Learn',
            items: [
                  {
                      text: '工程力学',
                      collapsed: true,
                      items: ['/learn/工程力学/复习资料1.md','/learn/工程力学/题目1的解答.md','/learn/工程力学/题目解答2.md'],  // 同样这里也可以增加其他子页面
                  },
                  {
                      text: '管理学',
                      collapsed: true,
                      items: ['/learn/管理学/绪论.md','/learn/管理学/第一章.md', '/learn/管理学/第二章.md', '/learn/管理学/复习资料.md'],  // 同样这里也可以增加其他子页面
                  },
                  {
                      text: '经济学',
                      collapsed: true,
                      items: ['/learn/经济学/经济学期末考-复习1.md','/learn/经济学/经济学期末考-复习2.md'],  // 同样这里也可以增加其他子页面
                  },
                  {
                      text: '英语',
                      collapsed: true,
                      items: ['/learn/英语/期末资料 .md',
                        {
                          text: '四级复习',
                          collapsed: true,
                          items: ['/learn/英语/CET-4/README.md','/learn/英语/CET-4/1.md']
                        },

                      ],  // 同样这里也可以增加其他子页面
                  },
                  {
                      text: '近代史',
                      collapsed: true,
                      items: ['/learn/近代史/期末资料 .md',],  // 同样这里也可以增加其他子页面
                  },
                  {
                      text: '毛泽东概论',
                      collapsed: true,
                      items: ['/learn/毛概/导论.md', '/learn/毛概/第一章.md', '/learn/毛概/第二章.md',]
                  },
                  {
                      text: '房屋建筑学',
                      collapsed: true,
                      items: ['/learn/房屋建筑学/复习资料 01.md', ]
                  },
              ],
          },
      ],
    },
  }),

  bundler: viteBundler(),
})
