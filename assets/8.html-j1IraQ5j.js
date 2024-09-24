import{_ as n,c as a,a as e,o as p}from"./app-BH3LvvQX.js";const t={};function l(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="vuepress自定义主题配置" tabindex="-1"><a class="header-anchor" href="#vuepress自定义主题配置"><span>Vuepress自定义主题配置</span></a></h1><p>在 VuePress 中，自定义主题配置可以帮助你打造一个更符合你需求和风格的文档站。以下是一些常见的自定义主题配置建议，供你参考：</p><h3 id="_1-导航栏-navbar" tabindex="-1"><a class="header-anchor" href="#_1-导航栏-navbar"><span>1. <strong>导航栏（Navbar）</strong></span></a></h3><p>你可以自定义导航栏，以便用户可以轻松访问重要的文档部分或外部链接。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Guide&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide/&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;GitHub&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://github.com/your-repo&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-侧边栏-sidebar" tabindex="-1"><a class="header-anchor" href="#_2-侧边栏-sidebar"><span>2. <strong>侧边栏（Sidebar）</strong></span></a></h3><p>侧边栏通常用于展示文档的目录结构，帮助用户更好地导航。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&#39;/guide/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Guide&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token string">&#39;/guide/README.md&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;/guide/getting-started.md&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&#39;/guide/configuration.md&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-网站-logo" tabindex="-1"><a class="header-anchor" href="#_3-网站-logo"><span>3. <strong>网站 Logo</strong></span></a></h3><p>你可以为文档站添加一个 Logo，让它看起来更加专业。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将你的 Logo 图片放在 <code>docs/.vuepress/public/images/</code> 目录下，并使用相对路径引用它。</p><h3 id="_4-主页设置-home-page" tabindex="-1"><a class="header-anchor" href="#_4-主页设置-home-page"><span>4. <strong>主页设置（Home Page）</strong></span></a></h3><p>自定义主页的布局，可以让主页更具吸引力。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">heroImage</span><span class="token operator">:</span> <span class="token string">&#39;/images/hero.png&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">heroText</span><span class="token operator">:</span> <span class="token string">&#39;Welcome to My Docs&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">tagline</span><span class="token operator">:</span> <span class="token string">&#39;The best place to find everything&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">actionText</span><span class="token operator">:</span> <span class="token string">&#39;Get Started&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">actionLink</span><span class="token operator">:</span> <span class="token string">&#39;/guide/&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Feature 1&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">details</span><span class="token operator">:</span> <span class="token string">&#39;Describe your feature here.&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Feature 2&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">details</span><span class="token operator">:</span> <span class="token string">&#39;Describe your feature here.&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-脚注-footer" tabindex="-1"><a class="header-anchor" href="#_5-脚注-footer"><span>5. <strong>脚注（Footer）</strong></span></a></h3><p>你可以添加一个自定义的页脚，用于展示版权信息或其他链接。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">&#39;© 2024 My Documentation Site | Powered by VuePress&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-代码高亮" tabindex="-1"><a class="header-anchor" href="#_6-代码高亮"><span>6. <strong>代码高亮</strong></span></a></h3><p>可以通过配置代码高亮样式，让代码示例在文档中更容易阅读。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">prismjs</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;prism-tomorrow&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;line-numbers&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-搜索功能" tabindex="-1"><a class="header-anchor" href="#_7-搜索功能"><span>7. <strong>搜索功能</strong></span></a></h3><p>如果你的文档内容较多，可以启用搜索功能，帮助用户快速找到他们需要的内容。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">searchMaxSuggestions</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-自定义颜色" tabindex="-1"><a class="header-anchor" href="#_8-自定义颜色"><span>8. <strong>自定义颜色</strong></span></a></h3><p>你可以更改主题颜色，使它与你的品牌或设计风格相匹配。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">colorMode</span><span class="token operator">:</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span> <span class="token comment">// &#39;light&#39; | &#39;dark&#39; | &#39;auto&#39;</span></span>
<span class="line">  <span class="token literal-property property">colorModeSwitch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>这些配置可以帮助你定制 VuePress 文档站的外观和功能，使其更符合你的需求和用户体验。如果你有特定的需求或希望深入定制，可以进一步探索 VuePress 的 <a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">官方文档</a> 或告诉我，我可以提供更具体的建议。</p>`,29)]))}const r=n(t,[["render",l],["__file","8.html.vue"]]),c=JSON.parse('{"path":"/tech/8.html","title":"Vuepress自定义主题配置","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"1. 导航栏（Navbar）","slug":"_1-导航栏-navbar","link":"#_1-导航栏-navbar","children":[]},{"level":3,"title":"2. 侧边栏（Sidebar）","slug":"_2-侧边栏-sidebar","link":"#_2-侧边栏-sidebar","children":[]},{"level":3,"title":"3. 网站 Logo","slug":"_3-网站-logo","link":"#_3-网站-logo","children":[]},{"level":3,"title":"4. 主页设置（Home Page）","slug":"_4-主页设置-home-page","link":"#_4-主页设置-home-page","children":[]},{"level":3,"title":"5. 脚注（Footer）","slug":"_5-脚注-footer","link":"#_5-脚注-footer","children":[]},{"level":3,"title":"6. 代码高亮","slug":"_6-代码高亮","link":"#_6-代码高亮","children":[]},{"level":3,"title":"7. 搜索功能","slug":"_7-搜索功能","link":"#_7-搜索功能","children":[]},{"level":3,"title":"8. 自定义颜色","slug":"_8-自定义颜色","link":"#_8-自定义颜色","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"updatedTime":1727188073000,"contributors":[{"name":"Larch4","email":"114554982+Larch4@users.noreply.github.com","commits":1}]},"filePathRelative":"tech/8.md"}');export{r as comp,c as data};
