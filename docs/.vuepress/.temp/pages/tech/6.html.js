import comp from "C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/tech/6.html.vue"
const data = JSON.parse("{\"path\":\"/tech/6.html\",\"title\":\"仿制哔哩哔哩站点样式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"tags\":[\"技术文档\"],\"prev\":{\"link\":\"./5.md\",\"text\":\"爬取Bing每日背景图\"},\"next\":{\"link\":\"./7.md\",\"text\":\"虚拟机嵌套虚拟化\"},\"title\":\"仿制哔哩哔哩站点样式\"},\"headers\":[],\"readingTime\":{\"minutes\":2.3,\"words\":691},\"filePathRelative\":\"tech/6.md\",\"categoryList\":[{\"id\":\"d9f913\",\"sort\":10016,\"name\":\"tech\"}],\"bulletin\":false}")
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
