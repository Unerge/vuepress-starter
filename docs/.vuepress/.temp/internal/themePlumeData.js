export const themeData = {"locales":{"/":{"selectLanguageName":"简体中文","selectLanguageText":"选择语言","appearanceText":"外观","lightModeSwitchTitle":"切换为浅色主题","darkModeSwitchTitle":"切换为深色主题","outlineLabel":"此页内容","returnToTopLabel":"返回顶部","editLinkText":"编辑此页","contributorsText":"贡献者","prevPageLabel":"上一页","nextPageLabel":"下一页","lastUpdated":{"text":"最后更新于"},"notFound":{"code":"404","title":"页面未找到","quote":"但是，如果你不改变方向，并且一直寻找，最终可能会到达你要去的地方。","linkText":"返回首页"},"encryptButtonText":"确认","encryptPlaceholder":"请输入密码","encryptGlobalText":"本站只允许密码访问","encryptPageText":"本页面只允许密码访问","footer":{"message":"Ice Glycoside Crystal","copyright":"冰苷晶 © 2024"},"logo":"/logo.jpg","docsRepo":"https://github.com/Unerge/vuepress-starter","docsBranch":"docs","docsDir":"docs","profile":{"avatar":"/logo-O2.jpg","name":"WentUrc Docs","description":"持续学习大学课程"},"navbar":[{"text":"Text","link":"/beta/"},{"text":"Tech-Document","link":"/tech/"},{"text":"ChatGPT Said","link":"/GPTstory/"},{"text":"WentUrc Learn","items":[{"text":"前言","link":"/learn/"},{"text":"工程力学","link":"/learn/工程力学/"},{"text":"管理学","link":"/learn/管理学/"},{"text":"经济学","link":"/learn/经济学/"},{"text":"英语","link":"/learn/英语/"},{"text":"近代史","link":"/learn/近代史/"},{"text":"毛泽东概论","link":"/learn/毛概/"}]},{"text":"Novel","items":[{"text":"小说","link":"/novel/"},{"text":"Re - 从零开始的异世界生活","link":"/novel/Re - 从零开始的异世界生活/"}]}]}},"appearance":true,"blog":{"postCover":{"layout":"top","ratio":"16:9","compact":true}},"navbarSocialInclude":["github","twitter","discord","facebook"],"aside":true,"outline":[2,3],"externalLinkIcon":true,"editLink":true,"contributors":true,"prevPage":true,"nextPage":true,"footer":{"message":"Ice Glycoside Crystal","copyright":"冰苷晶 © 2024"},"logo":"/logo.jpg","docsRepo":"https://github.com/Unerge/vuepress-starter","docsBranch":"docs","docsDir":"docs","profile":{"avatar":"/logo-O2.jpg","name":"WentUrc Docs","description":"持续学习大学课程"}}

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
