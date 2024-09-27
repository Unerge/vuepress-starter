export const siteData = JSON.parse("{\"base\":\"/vuepress-starter/\",\"lang\":\"en-US\",\"title\":\"WentUrc\",\"description\":\"持续学习大学课程\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/vuepress-starter/logo.jpg\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
