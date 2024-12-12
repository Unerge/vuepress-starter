export const themeData = {"locales":{"/":{"selectLanguageName":"简体中文","selectLanguageText":"选择语言","appearanceText":"外观","lightModeSwitchTitle":"切换为浅色主题","darkModeSwitchTitle":"切换为深色主题","outlineLabel":"此页内容","returnToTopLabel":"返回顶部","editLinkText":"编辑此页","contributorsText":"贡献者","prevPageLabel":"上一页","nextPageLabel":"下一页","lastUpdated":{"text":"最后更新于"},"notFound":{"code":"404","title":"页面未找到","quote":"但是，如果你不改变方向，并且一直寻找，最终可能会到达你要去的地方。","linkText":"返回首页"},"encryptButtonText":"确认","encryptPlaceholder":"请输入密码","encryptGlobalText":"本站只允许密码访问","encryptPageText":"本页面只允许密码访问","footer":{"message":"Powered by <a target=\"_blank\" href=\"https://v2.vuepress.vuejs.org/\">VuePress</a> & <a target=\"_blank\" href=\"https://theme-plume.vuejs.press\">vuepress-theme-plume</a>"},"logo":"/img/logo1251.jpg","navbar":[{"text":"首页","link":"/"},{"text":"博客","link":"/blog/"},{"text":"标签","link":"/blog/tags/"},{"text":"归档","link":"/blog/archives/"}]}},"appearance":true,"blog":{"postCover":{"layout":"top","ratio":"16:9","compact":true}},"navbarSocialInclude":["github","twitter","discord","facebook"],"aside":true,"outline":[2,3],"externalLinkIcon":true,"editLink":true,"contributors":true,"prevPage":true,"nextPage":true,"footer":{"message":"Power by <a target=\"_blank\" href=\"https://v2.vuepress.vuejs.org/\">VuePress</a> & <a target=\"_blank\" href=\"https://theme-plume.vuejs.press\">vuepress-theme-plume</a>"},"logo":"/img/logo1251.jpg"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
