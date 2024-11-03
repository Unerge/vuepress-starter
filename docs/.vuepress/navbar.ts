import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  // ...
    { text: 'beta', 
      link: '/beta/' 
    },

    { text: 'Novel', 
      items: 
      [
        {
          text:'小说',
          link: '/novel/',
        },
        {
          text: 'Re - 从零开始的异世界生活',
          link: '/novel/Re - 从零开始的异世界生活/'
        },
      ]
    }, 

    { text: 'GPTstort', 
      link: '/GPTstory/',
    },

    { text: 'tech', 
      link: '/tech/',
    },

    { text: 'WentUrc Learn', 
      items: 
      [
        {
          text: '前言',
          link: '/learn/',
        },
        {
          text: '工程力学',
          link: '/learn/工程力学/',
        },

        {
          text: '管理学',
          link: '/learn/管理学/',
        },

        {
          text: '经济学',
          link: '/learn/经济学/',
        },

        {
          text: '英语',
          link: '/learn/英语/',
        },

        {
          text: '近代史',
          link: '/learn/近代史/',
        },

        {
          text: '毛泽东概论',
          link: '/learn/毛概/',
        },

      ]
    }
])