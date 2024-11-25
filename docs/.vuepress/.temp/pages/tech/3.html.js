import comp from "C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/tech/3.html.vue"
const data = JSON.parse("{\"path\":\"/tech/3.html\",\"title\":\"不同风格的博客站导航栏样式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"tags\":[\"技术文档\"],\"prev\":{\"link\":\"./2.md\",\"text\":\"Hyper-V虚拟交换机无法显示交换机列表\"},\"next\":{\"link\":\"./4.md\",\"text\":\"在Windows中，可以通过多种方法修改文件的创建日期\"},\"title\":\"不同风格的博客站导航栏样式\"},\"headers\":[],\"readingTime\":{\"minutes\":10,\"words\":3001},\"filePathRelative\":\"tech/3.md\",\"categoryList\":[{\"id\":\"d9f913\",\"sort\":10016,\"name\":\"tech\"}],\"bulletin\":false}")
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
