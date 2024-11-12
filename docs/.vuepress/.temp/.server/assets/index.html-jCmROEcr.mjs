import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.BX9rY_GM.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "bcrypt-ts/browser";
import "watermark-js-plus";
import "@iconify/vue";
import "@iconify/vue/offline";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="hint-container tip"><p class="hint-container-title">注意</p><p>（移动设备）点击左上角的<code>≡</code>以显示侧边栏.</p></div><h1 id="存放管理学复习资料的地方" tabindex="-1"><a class="header-anchor" href="#存放管理学复习资料的地方"><span>存放管理学复习资料的地方</span></a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/learn/管理学/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/learn/%E7%AE%A1%E7%90%86%E5%AD%A6/","title":"管理学","lang":"zh-CN","frontmatter":{"title":"管理学","prev":false,"next":{"link":"./绪论.md","text":"绪论"},"description":"注意 （移动设备）点击左上角的≡以显示侧边栏. 存放管理学复习资料的地方","head":[["meta",{"property":"og:url","content":"https://docs.wenturc.com/learn/%E7%AE%A1%E7%90%86%E5%AD%A6/"}],["meta",{"property":"og:site_name","content":"WentUrc Docs"}],["meta",{"property":"og:title","content":"管理学"}],["meta",{"property":"og:description","content":"注意 （移动设备）点击左上角的≡以显示侧边栏. 存放管理学复习资料的地方"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T14:29:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T14:29:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"管理学\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T14:29:09.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.16,"words":47},"git":{"createdTime":1727188073000,"updatedTime":1730730549000,"contributors":[{"name":"Larch4","email":"114554982+Larch4@users.noreply.github.com","commits":2},{"name":"冰苷晶","email":"2749332490@qq.com","commits":1}]},"autoDesc":true,"filePathRelative":"learn/管理学/README.md","categoryList":[{"id":"339d8d","sort":10002,"name":"learn"},{"id":"7d1f6c","sort":10005,"name":"管理学"}],"bulletin":false}');
export {
  index_html as comp,
  data
};
