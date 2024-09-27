import comp from "C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/learn/经济学/index.html.vue"
const data = JSON.parse("{\"path\":\"/learn/%E7%BB%8F%E6%B5%8E%E5%AD%A6/\",\"title\":\"经济学复习资料\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"learn/经济学/README.md\"}")
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
