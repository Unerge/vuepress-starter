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
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/novel/Re - 从零开始的异世界生活/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/","title":"章节","lang":"zh-CN","frontmatter":{"title":"章节","config":[{"type":"banner","banner":"/img/1.jpg","bannerMask":{"light":0.4,"dark":0.6},"hero":{"name":"Re-从零开始的异世界生活","tagline":"开始是结束的起点, 结束后的重新开始","actions":[{"theme":"brand","text":"开始阅读","link":"/novel/Re - 从零开始的异世界生活/第一卷/序章/02-序章 开始的余韵.md"}]}}],"pageLayout":"home","head":[["meta",{"property":"og:url","content":"https://docs.wenturc.com/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/"}],["meta",{"property":"og:site_name","content":"WentUrc Docs"}],["meta",{"property":"og:title","content":"章节"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T14:29:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T14:29:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"章节\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T14:29:09.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.27,"words":81},"git":{"createdTime":1728559441000,"updatedTime":1730730549000,"contributors":[{"name":"冰苷晶","email":"74816859+IGCrystal@users.noreply.github.com","commits":2},{"name":"Larch4","email":"74816859+IGCrystal@users.noreply.github.com","commits":1},{"name":"冰苷晶","email":"2749332490@qq.com","commits":1}]},"filePathRelative":"novel/Re - 从零开始的异世界生活/README.md","categoryList":[{"id":"d638d1","sort":10010,"name":"novel"},{"id":"89a6d1","sort":10011,"name":"Re - 从零开始的异世界生活"}],"bulletin":false}');
export {
  index_html as comp,
  data
};
