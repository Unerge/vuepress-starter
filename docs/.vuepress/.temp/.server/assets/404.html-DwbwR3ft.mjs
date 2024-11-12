import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CYIVHeH9.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "bcrypt-ts/browser";
import "watermark-js-plus";
import "@iconify/vue";
import "@iconify/vue/offline";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>404 Not Found</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/404.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "404.html.vue"]]);
const data = JSON.parse('{"path":"/404.html","title":"","lang":"zh-CN","frontmatter":{"layout":"NotFound","description":"404 Not Found","head":[["meta",{"property":"og:url","content":"https://docs.wenturc.com/404.html"}],["meta",{"property":"og:site_name","content":"WentUrc Docs"}],["meta",{"property":"og:description","content":"404 Not Found"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"\\",\\"description\\":\\"404 Not Found\\"}"]]},"headers":[],"readingTime":{"minutes":0.01,"words":3},"git":{},"autoDesc":true,"filePathRelative":null,"bulletin":false}');
export {
  _404_html as comp,
  data
};
