import comp from "C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"description\":\"为什么昨晚的清醒与今日的倦意遥相呼应\",\"heroImage\":\"logo.jpg\",\"heroText\":\"WentUrc\",\"tagline\":\"为什么昨晚的清醒与今日的倦意遥相呼应\",\"features\":[{\"title\":\"HTML\",\"details\":\"超文本标记语言\"},{\"title\":\"CSS\",\"details\":\"层叠样式表\"},{\"title\":\"JavaScript\",\"details\":\"JS脚本\"}],\"footer\":\"冰苷晶 © 2024\"},\"headers\":[],\"git\":{\"updatedTime\":1727613831000,\"contributors\":[{\"name\":\"Larch2352\",\"email\":\"114554982+Larch4@users.noreply.github.com\",\"commits\":5},{\"name\":\"Larch4\",\"email\":\"114554982+Larch4@users.noreply.github.com\",\"commits\":5},{\"name\":\"Chucklee\",\"email\":\"59095086+Cedar2352@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
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
