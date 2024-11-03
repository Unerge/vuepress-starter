import comp from "C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"config\":[{\"type\":\"banner\",\"banner\":\"/img/154.jpg\",\"bannerMask\":{\"dark\":0.5,\"light\":0.3},\"hero\":{\"name\":\"WentUrc Docs\",\"tagline\":\"为什么昨晚的清醒与今日的倦意遥相呼应\",\"text\":\"话说这个 text 必须要写吗\",\"actions\":[{\"text\":\"快速开始\",\"link\":\"/learn/\",\"theme\":\"brand\"},{\"text\":\"Github\",\"link\":\"https://github.com/Unerge/vuepress-starter\",\"theme\":\"alt\"},{\"text\":\"WentUrc\",\"link\":\"https://wenturc.com\",\"theme\":\"alt\"}]}}],\"pageLayout\":\"home\"},\"headers\":[],\"readingTime\":{\"minutes\":0.24,\"words\":71},\"filePathRelative\":\"README.md\",\"categoryList\":[],\"bulletin\":false}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
