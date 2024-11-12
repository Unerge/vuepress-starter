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
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/learn/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse(`{"path":"/learn/","title":"","lang":"zh-CN","frontmatter":{"config":[{"type":"hero","full":true,"background":"tint-plate","hero":{"name":"WentUrc Learn","tagline":"We can got it","text":"与其顺从命运我更愿意挺身而出","actions":[{"theme":"brand","text":"快速学习 ▶","link":"/learn/工程力学/"}]}},{"type":"image-text","title":"欢迎来到 *WentUrc Learn*","description":"一个既严谨又充满趣味的学习世界!","image":"/img/logo2465.png","list":[{"title":"工程力学","description":"在这个模块中，你将了解到支撑一切技术的核心原理。无论是桥梁的承重还是摩天大楼的稳定，工程力学为我们提供了设计的基础。准备好计算那些让人头疼的公式了吗？别急，掌握这些后，你将拥有无可匹敌的工程智慧。"},{"title":"经济学","description":"供给与需求，财富与决策，这些看似抽象的概念实际却主导了我们日常生活的每一个选择。在这个模块中，你将了解什么推动了市场的运转，又是什么让股市崩盘。经济学不仅仅是数字游戏，它揭示了隐藏在繁荣背后的秘密。"},{"title":"毛泽东概论","description":"在毛泽东的思想中，我们学会了如何面对挑战并持之以恒。无论是战场上的策略，还是人生中的坚持，《论持久战》不只是历史书，而是你我面对困难时的信念指引。"},{"title":"英语","description":"It's MYGO!!! 英语，不只是沟通工具，更是打开全球视野的钥匙。通过这个模块，感受语言的力量，与世界建立起更紧密的联系。"},{"title":"管理学","description":"在这个模块里，你将体会到管理的艺术。如何不仅仅是雇佣一个员工，而是赢得一颗心？管理学不仅教会你领导力的技巧，更帮助你理解如何打造高效而充满活力的团队。"}]}],"pageLayout":"home","head":[["meta",{"property":"og:url","content":"https://docs.wenturc.com/learn/"}],["meta",{"property":"og:site_name","content":"WentUrc Docs"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-03T15:16:15.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-03T15:16:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-03T15:16:15.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.56,"words":468},"git":{"createdTime":1727454228000,"updatedTime":1730646975000,"contributors":[{"name":"Larch4","email":"114554982+Larch4@users.noreply.github.com","commits":3},{"name":"Larch2352","email":"114554982+Larch4@users.noreply.github.com","commits":1},{"name":"冰苷晶","email":"74816859+IGCrystal@users.noreply.github.com","commits":1}]},"filePathRelative":"learn/README.md","categoryList":[{"id":"339d8d","sort":10001,"name":"learn"}],"bulletin":false}`);
export {
  index_html as comp,
  data
};
