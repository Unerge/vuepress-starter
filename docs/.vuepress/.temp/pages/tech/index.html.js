import comp from "C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/tech/index.html.vue"
const data = JSON.parse("{\"path\":\"/tech/\",\"title\":\"专门用于存放技术文档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"prev\":false,\"next\":{\"link\":\"./1.md\",\"text\":\"原神伤害公式\"}},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":22},\"filePathRelative\":\"tech/README.md\",\"categoryList\":[{\"id\":\"d9f913\",\"sort\":10016,\"name\":\"tech\"}],\"bulletin\":false}")
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
