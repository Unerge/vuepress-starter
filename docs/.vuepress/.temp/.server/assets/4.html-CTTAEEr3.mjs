import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="在windows中-可以通过多种方法修改文件的创建日期。以下是一些常见的方法" tabindex="-1"><a class="header-anchor" href="#在windows中-可以通过多种方法修改文件的创建日期。以下是一些常见的方法"><span>在Windows中，可以通过多种方法修改文件的创建日期。以下是一些常见的方法：</span></a></h1><h3 id="方法1-使用powershell" tabindex="-1"><a class="header-anchor" href="#方法1-使用powershell"><span>方法1：使用PowerShell</span></a></h3><ol><li><p><strong>打开PowerShell</strong>： 按 <code>Win + X</code>，然后选择“Windows PowerShell (管理员)”。</p></li><li><p><strong>运行以下命令</strong>，修改文件的创建日期（以修改 <code>C:\\path\\to\\file.txt</code> 的创建日期为例）：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">$</span><span style="${ssrRenderStyle({ "--shiki-light": "#B07D48", "--shiki-dark": "#BD976A" })}">file</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#998418", "--shiki-dark": "#B8A965" })}"> Get-Item</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">C:\\path\\to\\file.txt</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">$</span><span style="${ssrRenderStyle({ "--shiki-light": "#B07D48", "--shiki-dark": "#BD976A" })}">file.CreationTime</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">2023-01-01 12:00:00</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="方法2-使用第三方工具" tabindex="-1"><a class="header-anchor" href="#方法2-使用第三方工具"><span>方法2：使用第三方工具</span></a></h3><p>一些第三方工具可以方便地修改文件属性，包括创建日期。例如：</p><ul><li><strong>BulkFileChanger</strong>： <ul><li>下载并安装BulkFileChanger。</li><li>打开程序，添加需要修改的文件。</li><li>选择文件后，点击“Change Time/Attributes”。</li><li>设置新的创建日期，点击“Do it”。</li></ul></li></ul><h3 id="方法3-使用命令行工具-如-setfiledate" tabindex="-1"><a class="header-anchor" href="#方法3-使用命令行工具-如-setfiledate"><span>方法3：使用命令行工具（如 <code>SetFileDate</code>）</span></a></h3><ol><li><p><strong>下载 <code>SetFileDate</code></strong>：</p><ul><li>从官方网站下载并安装SetFileDate工具。</li></ul></li><li><p><strong>打开命令提示符</strong>： 按 <code>Win + R</code>，输入 <code>cmd</code>，按 Enter。</p></li><li><p><strong>运行以下命令</strong>，修改文件的创建日期（以修改 <code>C:\\path\\to\\file.txt</code> 的创建日期为例）：</p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#B07D48", "--shiki-dark": "#BD976A" })}">setfiledate</span><span style="${ssrRenderStyle({ "--shiki-light": "#AB5959", "--shiki-dark": "#CB7676" })}"> -</span><span style="${ssrRenderStyle({ "--shiki-light": "#B07D48", "--shiki-dark": "#BD976A" })}">c</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">2023-01-01 12:00:00</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">C:\\path\\to\\file.txt</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div></li></ol><h3 id="方法4-编写自定义脚本" tabindex="-1"><a class="header-anchor" href="#方法4-编写自定义脚本"><span>方法4：编写自定义脚本</span></a></h3><p>如果你熟悉编程语言，也可以编写一个自定义脚本来修改文件的日期。例如，使用Python脚本：</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#1E754F", "--shiki-dark": "#4D9375" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#393A34", "--shiki-dark": "#DBD7CAEE" })}"> os</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#1E754F", "--shiki-dark": "#4D9375" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#393A34", "--shiki-dark": "#DBD7CAEE" })}"> datetime</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#A0ADA0", "--shiki-dark": "#758575DD" })}"># 文件路径</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#393A34", "--shiki-dark": "#DBD7CAEE" })}">file_path </span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}"> &quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">C:</span><span style="${ssrRenderStyle({ "--shiki-light": "#A65E2B", "--shiki-dark": "#C99076" })}">\\\\</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">path</span><span style="${ssrRenderStyle({ "--shiki-light": "#A65E2B", "--shiki-dark": "#C99076" })}">\\\\</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">to</span><span style="${ssrRenderStyle({ "--shiki-light": "#A65E2B", "--shiki-dark": "#C99076" })}">\\\\</span><span style="${ssrRenderStyle({ "--shiki-light": "#B56959", "--shiki-dark": "#C98A7D" })}">file.txt</span><span style="${ssrRenderStyle({ "--shiki-light": "#B5695977", "--shiki-dark": "#C98A7D77" })}">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#A0ADA0", "--shiki-dark": "#758575DD" })}"># 修改的创建日期</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#393A34", "--shiki-dark": "#DBD7CAEE" })}">new_creation_time </span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#393A34", "--shiki-dark": "#DBD7CAEE" })}"> datetime</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#393A34", "--shiki-dark": "#DBD7CAEE" })}">datetime</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#2F798A", "--shiki-dark": "#4C9A91" })}">2023</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#2F798A", "--shiki-dark": "#4C9A91" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#2F798A", "--shiki-dark": "#4C9A91" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#2F798A", "--shiki-dark": "#4C9A91" })}"> 12</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#2F798A", "--shiki-dark": "#4C9A91" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">).</span><span style="${ssrRenderStyle({ "--shiki-light": "#393A34", "--shiki-dark": "#DBD7CAEE" })}">timestamp</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">()</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#A0ADA0", "--shiki-dark": "#758575DD" })}"># 修改文件的创建日期</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#393A34", "--shiki-dark": "#DBD7CAEE" })}">os</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#393A34", "--shiki-dark": "#DBD7CAEE" })}">utime</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#393A34", "--shiki-dark": "#DBD7CAEE" })}">file_path</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-light": "#393A34", "--shiki-dark": "#DBD7CAEE" })}">new_creation_time</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#393A34", "--shiki-dark": "#DBD7CAEE" })}"> new_creation_time</span><span style="${ssrRenderStyle({ "--shiki-light": "#999999", "--shiki-dark": "#666666" })}">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上述代码保存为一个Python文件（如 <code>change_date.py</code>），然后在命令提示符下运行：</p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#393A34", "--shiki-dark": "#DBD7CAEE" })}">python change_date.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>选择最适合你的方法来修改文件的创建日期。使用PowerShell和第三方工具是比较简单和直接的方法，而编写脚本则适合需要批量处理或自定义需求的场景。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/tech/4.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _4_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "4.html.vue"]]);
const data = JSON.parse('{"path":"/tech/4.html","title":"在Windows中，可以通过多种方法修改文件的创建日期","lang":"zh-CN","frontmatter":{"tags":["技术文档"],"prev":{"link":"./3.md","text":"不同风格的博客站导航栏样式"},"next":{"link":"./5.md","text":"爬取Bing每日背景图"},"title":"在Windows中，可以通过多种方法修改文件的创建日期","description":"在Windows中，可以通过多种方法修改文件的创建日期。以下是一些常见的方法： 方法1：使用PowerShell 打开PowerShell： 按 Win + X，然后选择“Windows PowerShell (管理员)”。 运行以下命令，修改文件的创建日期（以修改 C:\\\\path\\\\to\\\\file.txt 的创建日期为例）： 方法2：使用第三方工具 一...","head":[["meta",{"property":"og:url","content":"https://docs.wenturc.com/tech/4.html"}],["meta",{"property":"og:site_name","content":"WentUrc Docs"}],["meta",{"property":"og:title","content":"在Windows中，可以通过多种方法修改文件的创建日期"}],["meta",{"property":"og:description","content":"在Windows中，可以通过多种方法修改文件的创建日期。以下是一些常见的方法： 方法1：使用PowerShell 打开PowerShell： 按 Win + X，然后选择“Windows PowerShell (管理员)”。 运行以下命令，修改文件的创建日期（以修改 C:\\\\path\\\\to\\\\file.txt 的创建日期为例）： 方法2：使用第三方工具 一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-04T14:29:09.000Z"}],["meta",{"property":"article:tag","content":"技术文档"}],["meta",{"property":"article:modified_time","content":"2024-11-04T14:29:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在Windows中，可以通过多种方法修改文件的创建日期\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T14:29:09.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"方法1：使用PowerShell","slug":"方法1-使用powershell","link":"#方法1-使用powershell","children":[]},{"level":3,"title":"方法2：使用第三方工具","slug":"方法2-使用第三方工具","link":"#方法2-使用第三方工具","children":[]},{"level":3,"title":"方法3：使用命令行工具（如 SetFileDate）","slug":"方法3-使用命令行工具-如-setfiledate","link":"#方法3-使用命令行工具-如-setfiledate","children":[]},{"level":3,"title":"方法4：编写自定义脚本","slug":"方法4-编写自定义脚本","link":"#方法4-编写自定义脚本","children":[]}],"readingTime":{"minutes":1.65,"words":496},"git":{"createdTime":1727188073000,"updatedTime":1730730549000,"contributors":[{"name":"Larch4","email":"114554982+Larch4@users.noreply.github.com","commits":1},{"name":"冰苷晶","email":"2749332490@qq.com","commits":1}]},"autoDesc":true,"filePathRelative":"tech/4.md","categoryList":[{"id":"d9f913","sort":10003,"name":"tech"}],"bulletin":false}');
export {
  _4_html as comp,
  data
};
