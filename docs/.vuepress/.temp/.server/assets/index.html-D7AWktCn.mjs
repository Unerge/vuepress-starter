import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DySDaomA.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "bcrypt-ts/browser";
import "watermark-js-plus";
import "@iconify/vue";
import "@iconify/vue/offline";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="hint-container tip"><p class="hint-container-title">注意</p><p>（移动设备）点击左上角的<code>≡</code>以显示侧边栏.</p></div><h1 id="来自工程力学教材" tabindex="-1"><a class="header-anchor" href="#来自工程力学教材"><span>来自工程力学教材</span></a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/learn/工程力学/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/learn/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/","title":"工程力学","lang":"zh-CN","frontmatter":{"title":"工程力学","prev":false,"next":{"link":"./复习资料1.md","text":"静力学基础"},"description":"注意 （移动设备）点击左上角的≡以显示侧边栏. 来自工程力学教材","head":[["meta",{"property":"og:url","content":"https://docs.wenturc.com/learn/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/"}],["meta",{"property":"og:site_name","content":"WentUrc Docs"}],["meta",{"property":"og:title","content":"工程力学"}],["meta",{"property":"og:description","content":"注意 （移动设备）点击左上角的≡以显示侧边栏. 来自工程力学教材"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T14:29:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T14:29:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"工程力学\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T14:29:09.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.16,"words":49},"git":{"createdTime":1727188073000,"updatedTime":1730730549000,"contributors":[{"name":"Larch2352","email":"114554982+Larch4@users.noreply.github.com","commits":5},{"name":"Larch4","email":"114554982+Larch4@users.noreply.github.com","commits":2},{"name":"冰苷晶","email":"2749332490@qq.com","commits":1}]},"autoDesc":true,"filePathRelative":"learn/工程力学/README.md","categoryList":[{"id":"339d8d","sort":10001,"name":"learn"},{"id":"bae597","sort":10002,"name":"工程力学"}],"bulletin":false}');
export {
  index_html as comp,
  data
};
