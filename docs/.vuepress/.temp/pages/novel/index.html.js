import comp from "C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/novel/index.html.vue"
const data = JSON.parse("{\"path\":\"/novel/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"tintPlate\":156,\"hero\":{\"name\":\"Novel\",\"tagline\":\"小说\",\"actions\":[{\"theme\":\"brand\",\"text\":\"开始阅读\",\"link\":\"/novel/Re - 从零开始的异世界生活/\"}]}}],\"pageLayout\":\"home\"},\"headers\":[],\"readingTime\":{\"minutes\":0.13,\"words\":39},\"filePathRelative\":\"novel/README.md\",\"categoryList\":[{\"id\":\"d638d1\",\"sort\":10007,\"name\":\"novel\"}],\"bulletin\":false}")
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
