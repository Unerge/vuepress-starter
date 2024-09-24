export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/css/", { loader: () => import(/* webpackChunkName: "css_index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/css/index.html.js"), meta: {"title":""} }],
  ["/html/getting-started.html", { loader: () => import(/* webpackChunkName: "html_getting-started.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/html/getting-started.html.js"), meta: {"title":""} }],
  ["/html/", { loader: () => import(/* webpackChunkName: "html_index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/html/index.html.js"), meta: {"title":""} }],
  ["/JavaScript/", { loader: () => import(/* webpackChunkName: "JavaScript_index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/JavaScript/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
