import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="静力学基础" tabindex="-1"><a class="header-anchor" href="#静力学基础"><span>静力学基础</span></a></h1><h2 id="静力学公理" tabindex="-1"><a class="header-anchor" href="#静力学公理"><span>静力学公理</span></a></h2><h3 id="_1-作用力与反作用力" tabindex="-1"><a class="header-anchor" href="#_1-作用力与反作用力"><span>1. 作用力与反作用力</span></a></h3><h3 id="_2-力的平行四边形法则" tabindex="-1"><a class="header-anchor" href="#_2-力的平行四边形法则"><span>2. 力的平行四边形法则</span></a></h3><h3 id="_3-二力平衡公理" tabindex="-1"><a class="header-anchor" href="#_3-二力平衡公理"><span>3. 二力平衡公理</span></a></h3><blockquote><p>作用于刚体上的两个力平衡的充要条件是这两个力大小相等、方向相反、作用线相同</p></blockquote><blockquote><p>对<strong>刚体</strong>来说是充要条件，对<strong>变形体</strong>来说是必要条件</p></blockquote><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "center" })}"></th><th style="${ssrRenderStyle({ "text-align": "center" })}">二力平衡</th><th style="${ssrRenderStyle({ "text-align": "center" })}">作用力反作用力</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">区别</td><td style="${ssrRenderStyle({ "text-align": "center" })}">对一个物体而言</td><td style="${ssrRenderStyle({ "text-align": "center" })}">对两个物体而言</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">共同点</td><td style="${ssrRenderStyle({ "text-align": "center" })}">等值、反向、共线</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr></tbody></table><h3 id="_4-加减平衡力公理" tabindex="-1"><a class="header-anchor" href="#_4-加减平衡力公理"><span>4. 加减平衡力公理</span></a></h3><h3 id="_5-刚化原理" tabindex="-1"><a class="header-anchor" href="#_5-刚化原理"><span>5. 刚化原理</span></a></h3><hr><h2 id="约束与约束反力" tabindex="-1"><a class="header-anchor" href="#约束与约束反力"><span>约束与约束反力</span></a></h2><h3 id="_1-柔索约束" tabindex="-1"><a class="header-anchor" href="#_1-柔索约束"><span>1. 柔索约束</span></a></h3><blockquote><p>只限制物体沿着柔索的中心线伸长方向的运动.</p></blockquote><blockquote><p><strong>约束反力</strong>永远为拉力，<strong>方向</strong>沿着柔索的中心线背离被约束的物体.</p></blockquote><blockquote><p><strong>符号</strong>用 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>F</mi><mi>T</mi></msub></mrow><annotation encoding="application/x-tex">F_T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="${ssrRenderStyle({ "height": "0.8333em", "vertical-align": "-0.15em" })}"></span><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.13889em" })}">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.3283em" })}"><span style="${ssrRenderStyle({ "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.13889em" })}">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.15em" })}"><span></span></span></span></span></span></span></span></span></span> 表示.</p></blockquote><h3 id="_2-光滑接触表面约束" tabindex="-1"><a class="header-anchor" href="#_2-光滑接触表面约束"><span>2. 光滑接触表面约束</span></a></h3><blockquote><p>限制物体沿着接触面在接触点的公法线方向指向约束物体的运动，而不能限制物体的其他运动.</p></blockquote><blockquote><p><strong>约束反力</strong>永为压力，作用在接触面处，方向在接触面处的公法线指向被约束的物体（即受力物体）</p></blockquote><blockquote><p><strong>符号</strong>用 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>F</mi><mi>N</mi></msub></mrow><annotation encoding="application/x-tex">F_N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="${ssrRenderStyle({ "height": "0.8333em", "vertical-align": "-0.15em" })}"></span><span class="mord"><span class="mord mathnormal" style="${ssrRenderStyle({ "margin-right": "0.13889em" })}">F</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.3283em" })}"><span style="${ssrRenderStyle({ "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" })}"><span class="pstrut" style="${ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${ssrRenderStyle({ "margin-right": "0.10903em" })}">N</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="${ssrRenderStyle({ "height": "0.15em" })}"><span></span></span></span></span></span></span></span></span></span> 表示.</p></blockquote><h3 id="_3-圆柱铰链约束" tabindex="-1"><a class="header-anchor" href="#_3-圆柱铰链约束"><span>3. 圆柱铰链约束</span></a></h3><blockquote><p>限制被连接的两个物体在（垂直于销钉轴线的）平面内沿任意方向的相对移动，而不能限制物体绕销钉轴线的相对转动和沿其轴线方向的相对滑动.</p></blockquote><blockquote><p><strong>约束反力</strong>铰链的约束反力作用在与销钉轴线垂直的平面内，并通过销钉中心，但<strong>方向待定</strong>.</p></blockquote><blockquote><p><em>为了方便，工程中常用铰链中心的相互垂直的两个分力表示</em>.</p></blockquote><h3 id="_4-固定铰支座" tabindex="-1"><a class="header-anchor" href="#_4-固定铰支座"><span>4. 固定铰支座</span></a></h3><blockquote><p>固定铰支座作用于被约束物体上的约束反力也应通过圆孔中心，但<strong>方向不定</strong>.</p></blockquote><h3 id="_5-链杆约束" tabindex="-1"><a class="header-anchor" href="#_5-链杆约束"><span>5. 链杆约束</span></a></h3><hr></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/learn/工程力学/复习资料1.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____1_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "复习资料1.html.vue"]]);
const data = JSON.parse('{"path":"/learn/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/%E5%A4%8D%E4%B9%A0%E8%B5%84%E6%96%991.html","title":"静力学基础","lang":"zh-CN","frontmatter":{"tags":["学习"],"title":"静力学基础","prev":{"link":"./README.md","text":"工程力学"},"next":{"link":"./题目1的解答.md","text":"在 Github 上显示数学公式"},"description":"静力学基础 静力学公理 1. 作用力与反作用力 2. 力的平行四边形法则 3. 二力平衡公理 作用于刚体上的两个力平衡的充要条件是这两个力大小相等、方向相反、作用线相同 对刚体来说是充要条件，对变形体来说是必要条件 4. 加减平衡力公理 5. 刚化原理 约束与约束反力 1. 柔索约束 只限制物体沿着柔索的中心线伸长方向的运动. 约束反力永远为拉力，方向...","head":[["meta",{"property":"og:url","content":"https://docs.wenturc.com/learn/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/%E5%A4%8D%E4%B9%A0%E8%B5%84%E6%96%991.html"}],["meta",{"property":"og:site_name","content":"WentUrc Docs"}],["meta",{"property":"og:title","content":"静力学基础"}],["meta",{"property":"og:description","content":"静力学基础 静力学公理 1. 作用力与反作用力 2. 力的平行四边形法则 3. 二力平衡公理 作用于刚体上的两个力平衡的充要条件是这两个力大小相等、方向相反、作用线相同 对刚体来说是充要条件，对变形体来说是必要条件 4. 加减平衡力公理 5. 刚化原理 约束与约束反力 1. 柔索约束 只限制物体沿着柔索的中心线伸长方向的运动. 约束反力永远为拉力，方向..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T14:29:09.000Z"}],["meta",{"property":"article:tag","content":"学习"}],["meta",{"property":"article:modified_time","content":"2024-11-04T14:29:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"静力学基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T14:29:09.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"静力学公理","slug":"静力学公理","link":"#静力学公理","children":[{"level":3,"title":"1. 作用力与反作用力","slug":"_1-作用力与反作用力","link":"#_1-作用力与反作用力","children":[]},{"level":3,"title":"2. 力的平行四边形法则","slug":"_2-力的平行四边形法则","link":"#_2-力的平行四边形法则","children":[]},{"level":3,"title":"3. 二力平衡公理","slug":"_3-二力平衡公理","link":"#_3-二力平衡公理","children":[]},{"level":3,"title":"4. 加减平衡力公理","slug":"_4-加减平衡力公理","link":"#_4-加减平衡力公理","children":[]},{"level":3,"title":"5. 刚化原理","slug":"_5-刚化原理","link":"#_5-刚化原理","children":[]}]},{"level":2,"title":"约束与约束反力","slug":"约束与约束反力","link":"#约束与约束反力","children":[{"level":3,"title":"1. 柔索约束","slug":"_1-柔索约束","link":"#_1-柔索约束","children":[]},{"level":3,"title":"2. 光滑接触表面约束","slug":"_2-光滑接触表面约束","link":"#_2-光滑接触表面约束","children":[]},{"level":3,"title":"3. 圆柱铰链约束","slug":"_3-圆柱铰链约束","link":"#_3-圆柱铰链约束","children":[]},{"level":3,"title":"4. 固定铰支座","slug":"_4-固定铰支座","link":"#_4-固定铰支座","children":[]},{"level":3,"title":"5. 链杆约束","slug":"_5-链杆约束","link":"#_5-链杆约束","children":[]}]}],"readingTime":{"minutes":1.73,"words":519},"git":{"createdTime":1727188073000,"updatedTime":1730730549000,"contributors":[{"name":"Larch4","email":"114554982+Larch4@users.noreply.github.com","commits":1},{"name":"冰苷晶","email":"2749332490@qq.com","commits":1}]},"autoDesc":true,"filePathRelative":"learn/工程力学/复习资料1.md","categoryList":[{"id":"339d8d","sort":10001,"name":"learn"},{"id":"bae597","sort":10002,"name":"工程力学"}],"bulletin":false}');
export {
  ____1_html as comp,
  data
};
