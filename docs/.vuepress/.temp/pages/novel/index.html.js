import comp from "C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/novel/index.html.vue"
const data = JSON.parse("{\"path\":\"/novel/\",\"title\":\"小说\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"小说\",\"heroImage\":\"logo.jpg\",\"heroText\":\"Novel\",\"tagline\":\"小说\",\"footer\":\"冰苷晶 © 2024\"},\"headers\":[],\"git\":{\"updatedTime\":1728559441000,\"contributors\":[{\"name\":\"Larch4\",\"email\":\"74816859+IGCrystal@users.noreply.github.com\",\"commits\":2}]},\"filePathRelative\":\"novel/README.md\"}")
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
