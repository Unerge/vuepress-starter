import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.ClH-Mpnn.mjs";
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/novel/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/novel/","title":"","lang":"zh-CN","frontmatter":{"config":[{"type":"hero","full":true,"background":"tint-plate","tintPlate":156,"hero":{"name":"Novel","tagline":"小说","actions":[{"theme":"brand","text":"开始阅读","link":"/novel/Re - 从零开始的异世界生活/"}]}}],"pageLayout":"home","head":[["meta",{"property":"og:url","content":"https://docs.wenturc.com/novel/"}],["meta",{"property":"og:site_name","content":"WentUrc Docs"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-03T15:16:15.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-03T15:16:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-03T15:16:15.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.13,"words":39},"git":{"createdTime":1727101230000,"updatedTime":1730646975000,"contributors":[{"name":"冰苷晶","email":"74816859+IGCrystal@users.noreply.github.com","commits":1,"url":"https://github.com/冰苷晶"},{"name":"Larch4","email":"74816859+IGCrystal@users.noreply.github.com","commits":3,"url":"https://github.com/Larch4"}]},"filePathRelative":"novel/README.md","categoryList":[{"id":"d638d1","sort":10003,"name":"novel"}],"bulletin":false}');
export {
  index_html as comp,
  data
};
