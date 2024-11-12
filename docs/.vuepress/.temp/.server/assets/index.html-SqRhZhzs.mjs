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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="记录一些gpt小故事" tabindex="-1"><a class="header-anchor" href="#记录一些gpt小故事"><span>记录一些GPT小故事</span></a></h1><blockquote><p>AI生成内容，纯属娱乐，请勿当真</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/GPTstory/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/GPTstory/","title":"记录一些GPT小故事","lang":"zh-CN","frontmatter":{"prev":false,"next":{"link":"./1.md","text":"你可以写一个关于\\"兔兔兔兔热狗好吧吃几节课，我就计划计划赶不上变化\\"的故事吗？"},"description":"记录一些GPT小故事 AI生成内容，纯属娱乐，请勿当真","head":[["meta",{"property":"og:url","content":"https://docs.wenturc.com/GPTstory/"}],["meta",{"property":"og:site_name","content":"WentUrc Docs"}],["meta",{"property":"og:title","content":"记录一些GPT小故事"}],["meta",{"property":"og:description","content":"记录一些GPT小故事 AI生成内容，纯属娱乐，请勿当真"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T14:29:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T14:29:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"记录一些GPT小故事\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T14:29:09.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.21,"words":62},"git":{"createdTime":1727188073000,"updatedTime":1730730549000,"contributors":[{"name":"Larch4","email":"114554982+Larch4@users.noreply.github.com","commits":1},{"name":"冰苷晶","email":"2749332490@qq.com","commits":1}]},"autoDesc":true,"filePathRelative":"GPTstory/README.md","categoryList":[{"id":"6ddae0","sort":10006,"name":"GPTstory"}],"bulletin":false}');
export {
  index_html as comp,
  data
};
