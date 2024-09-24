export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"HTML笔记\",\"link\":\"/html/\"},{\"text\":\"CSS笔记\",\"link\":\"/css/\"},{\"text\":\"JS笔记\",\"link\":\"/JavaScript/\"}],\"sidebar\":{\"/html/\":[{\"text\":\"HTML笔记\",\"collapsible\":true,\"children\":[\"/html/\"]}],\"/css/\":[{\"text\":\"CSS笔记\",\"collapsible\":true,\"children\":[\"/css/\"]}],\"/JavaScript/\":[{\"text\":\"JS笔记\",\"collapsible\":true,\"children\":[\"/JavaScript/\"]}]},\"logo\":\"/img/logo1251.jpg\",\"search\":true,\"searchMaxSuggestions\":10,\"colorMode\":\"light\",\"colorModeSwitch\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
