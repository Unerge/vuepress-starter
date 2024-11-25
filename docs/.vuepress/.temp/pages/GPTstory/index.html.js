import comp from "C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/GPTstory/index.html.vue"
const data = JSON.parse("{\"path\":\"/GPTstory/\",\"title\":\"记录一些GPT小故事\",\"lang\":\"zh-CN\",\"frontmatter\":{\"prev\":false,\"next\":{\"link\":\"./1.md\",\"text\":\"你可以写一个关于\\\"兔兔兔兔热狗好吧吃几节课，我就计划计划赶不上变化\\\"的故事吗？\"}},\"headers\":[],\"readingTime\":{\"minutes\":0.21,\"words\":62},\"filePathRelative\":\"GPTstory/README.md\",\"categoryList\":[{\"id\":\"6ddae0\",\"sort\":10000,\"name\":\"GPTstory\"}],\"bulletin\":false}")
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
