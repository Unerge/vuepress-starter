<template><div><p>在VuePress中添加评论功能可以通过多种插件实现，以下是一些常用的插件及其特点：</p>
<ol>
<li>
<p><strong>vuepress-plugin-comment-plus</strong> ：</p>
<ul>
<li>支持Waline（推荐）、Gitalk、Valine等多种评论服务。</li>
<li>后续会增加更多评论服务，请关注。</li>
</ul>
</li>
<li>
<p><strong>vssue</strong> ：</p>
<ul>
<li>一个Vue驱动的、基于Issue的评论插件。</li>
<li>支持多个代码托管平台，包括GitHub、GitLab、Bitbucket、Gitee和Gitea。</li>
<li>可以让用户通过这些平台的帐号登录，将评论存储在这些平台的Issue系统中，并在当前页面展示。</li>
</ul>
</li>
<li>
<p><strong>@vuepress/plugin-comment</strong> ：</p>
<ul>
<li>主题使用@vuepress/plugin-comment提供评论支持。</li>
<li>目前支持Artalk、Giscus、Twikoo、Waline四种评论服务。</li>
<li>如果你不需要评论功能，请忽略此选项。</li>
</ul>
</li>
<li>
<p><strong>Valine</strong> ：</p>
<ul>
<li>一款快速、简洁且高效的无后端评论系统。</li>
<li>支持在VuePress中使用，自动管理SPA路由相关的工作。</li>
</ul>
</li>
<li>
<p><strong>Giscus</strong> ：</p>
<ul>
<li>GitHub的一个功能，用于专门存放评论的功能。</li>
<li>需要依托一个仓库，可以通过Settings&gt;Features&gt;Discussions来开通。</li>
</ul>
</li>
<li>
<p><strong>Artalk</strong> ：</p>
<ul>
<li>配置文件在data目录下，可以通过修改配置文件来管理评论。</li>
</ul>
</li>
<li>
<p><strong>vuepress-plugin-vdoing-comment</strong> ：</p>
<ul>
<li>支持Gitalk、Valine、Artalk等评论服务。</li>
</ul>
</li>
<li>
<p><strong>vuepress-plugin-comment</strong> ：</p>
<ul>
<li>如果你想要在指定页面隐藏评论插件，可以在frontmatter中设置comment或comments为false。</li>
</ul>
</li>
</ol>
<p>选择合适的评论插件可以根据你的需求和偏好。例如，如果你希望使用GitHub的Issue系统来管理评论，可以选择vssue；如果你希望使用一个快速且高效的无后端评论系统，可以选择Valine。每个插件都有其特定的配置步骤和特点，建议根据具体需求进行选择和配置。</p>
<h4 id="如何在vuepress中配置和使用vuepress-plugin-comment-plus插件" tabindex="-1"><a class="header-anchor" href="#如何在vuepress中配置和使用vuepress-plugin-comment-plus插件"><span>如何在VuePress中配置和使用vuepress-plugin-comment-plus插件？</span></a></h4>
<p>在VuePress中配置和使用<code v-pre>vuepress-plugin-comment-plus</code>插件的步骤如下：</p>
<ol>
<li><strong>安装插件</strong>：首先，你需要在项目中安装<code v-pre>vuepress-plugin-comment-plus</code>插件。可以通过npm或yarn来安装：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">   <span class="token function">npm</span> <span class="token function">install</span> vuepress-plugin-comment-plus <span class="token parameter variable">--save</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">   <span class="token function">yarn</span> <span class="token function">add</span> vuepress-plugin-comment-plus</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li><strong>配置插件</strong>：在你的VuePress项目的根目录下的<code v-pre>config.js </code>文件中，添加并配置该插件。例如：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">   module<span class="token punctuation">.</span>exports  <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">       <span class="token punctuation">[</span><span class="token string">'vuepress-plugin-comment-plus'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token comment">// 在这里添加你的插件选项</span></span>
<span class="line">       <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">     <span class="token punctuation">]</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据插件的文档，你可能需要提供一些配置选项，比如API密钥、评论系统的类型等。</p>
<ol start="3">
<li>
<p><strong>使用插件</strong>：在你的Markdown文件中，你可以通过特定的语法来使用插件的功能。例如，如果你使用的是Valine作为评论系统，你可以在Markdown文件中添加相应的代码块来启用评论功能。</p>
</li>
<li>
<p><strong>客户端配置</strong>：如果需要更复杂的配置，你可以在客户端配置文件中进行设置。这可以通过VuePress提供的客户端配置API来实现。</p>
</li>
</ol>
<h4 id="vssue插件在vuepress中的具体配置步骤是什么" tabindex="-1"><a class="header-anchor" href="#vssue插件在vuepress中的具体配置步骤是什么"><span>vssue插件在VuePress中的具体配置步骤是什么？</span></a></h4>
<p>在VuePress中配置vssue插件的具体步骤如下：</p>
<ol>
<li>
<p>安装vssue插件：使用yarn或npm命令安装@vssue/vuepress插件。例如，可以使用<code v-pre>yarn add @vssue/vuepress</code>命令进行安装。</p>
</li>
<li>
<p>在<code v-pre>.vuepress/config.js </code>文件中配置vssue插件。具体配置如下：</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">   <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">     <span class="token punctuation">[</span><span class="token string">'vuepress-plugin-vssue-global'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token literal-property property">platform</span><span class="token operator">:</span> <span class="token string">'github'</span><span class="token punctuation">,</span> <span class="token comment">// 选择你的平台，如github、gitlab等</span></span>
<span class="line">       <span class="token literal-property property">owner</span><span class="token operator">:</span> <span class="token string">'你的用户名'</span><span class="token punctuation">,</span></span>
<span class="line">       <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">'你的仓库名'</span><span class="token punctuation">,</span></span>
<span class="line">       <span class="token literal-property property">issueId</span><span class="token operator">:</span> <span class="token string">'你的issue id'</span></span>
<span class="line">     <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">   <span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的<code v-pre>platform</code>参数需要根据你使用的平台进行选择，如github、gitlab等。同时，你需要提供你的GitHub用户名、仓库名以及issue的id。</p>
<ol start="3">
<li>
<p>如果你不想使用官方提供的插件，也可以直接在VuePress中引入Vssue组件。但是，为了兼容SSR（服务器端渲染），建议将Vssue组件放置在<code v-pre>&lt;ClientOnly&gt;</code>组件中。</p>
</li>
<li>
<p>在Markdown文件中直接使用Vssue组件。例如：</p>
</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Vssue</span> <span class="token attr-name">:issue-id</span> <span class="token attr-name">quote</span> <span class="token punctuation">/></span></span></span>
<span class="line">   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样可以在你的VuePress Markdown文件中直接使用Vssue组件。</p>
<ol start="5">
<li>如果你对Vssue的样式进行了自定义，可以直接在VuePress中引入Vssue组件，而不需要使用@vssue/vuepress-plugin-vssue。但是，为了兼容SSR，建议将Vssue组件放置在<code v-pre>&lt;ClientOnly&gt;</code>组件中。</li>
</ol>
<h4 id="vuepress-plugin-comment支持的评论服务有哪些-以及如何配置" tabindex="-1"><a class="header-anchor" href="#vuepress-plugin-comment支持的评论服务有哪些-以及如何配置"><span>@vuepress/plugin-comment支持的评论服务有哪些，以及如何配置？</span></a></h4>
<p>@vuepress/plugin-comment 支持多种不同的评论服务提供商，包括 Artalk、Giscus、Twikoo 和 Waline。这些服务提供商各有特点，可以根据个人需求进行选择和配置。</p>
<h3 id="支持的评论服务" tabindex="-1"><a class="header-anchor" href="#支持的评论服务"><span>支持的评论服务</span></a></h3>
<ol>
<li><strong>Artalk</strong></li>
<li><strong>Giscus</strong></li>
<li><strong>Twikoo</strong></li>
<li><strong>Waline</strong></li>
</ol>
<h3 id="配置方法" tabindex="-1"><a class="header-anchor" href="#配置方法"><span>配置方法</span></a></h3>
<h4 id="_1-安装插件" tabindex="-1"><a class="header-anchor" href="#_1-安装插件"><span>1. 安装插件</span></a></h4>
<p>首先需要在 VuePress 项目中安装 <code v-pre>vuepress-plugin-comment</code> 插件。可以通过 npm 或 yarn 进行安装：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> vuepress-plugin-comment <span class="token parameter variable">--save</span></span>
<span class="line"><span class="token comment"># 或者使用 yarn</span></span>
<span class="line"><span class="token function">yarn</span> <span class="token function">add</span> vuepress-plugin-comment</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-配置插件" tabindex="-1"><a class="header-anchor" href="#_2-配置插件"><span>2. 配置插件</span></a></h4>
<p>在项目的 <code v-pre>config.js </code> 文件中添加插件配置：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports  <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">'vuepress-plugin-comment'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 选择评论服务提供商</span></span>
<span class="line">      <span class="token literal-property property">comment</span><span class="token operator">:</span> <span class="token string">'valine'</span><span class="token punctuation">,</span> <span class="token comment">// 或者选择其他服务如 'giscus', 'twikoo', 'waline'</span></span>
<span class="line">      <span class="token comment">// 配置选项，具体参数取决于所选的评论服务</span></span>
<span class="line">      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#valine-vuepress-comment'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'your-app-id'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">appKey</span><span class="token operator">:</span> <span class="token string">'your-app-key'</span></span>
<span class="line">        <span class="token comment">// 其他参数根据所选服务提供商的要求进行配置</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如，如果选择使用 Valine，可以这样配置：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports  <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">'vuepress-plugin-comment'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">comment</span><span class="token operator">:</span> <span class="token string">'valine'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#valine-vuepress-comment'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'your-app-id'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">appKey</span><span class="token operator">:</span> <span class="token string">'your-app-key'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">#### Valine插件在VuePress项目中的安装和使用指南。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">在VuePress项目中安装和使用Valine评论插件的步骤如下：</span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span> <span class="token operator">**</span>安装Valine插件<span class="token operator">**</span>：</span>
<span class="line">   <span class="token operator">-</span> 使用npm安装：<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">npm install --save vuepress-plugin-comment</span><span class="token template-punctuation string">`</span></span></span>
<span class="line">   <span class="token operator">-</span> 或者使用yarn安装：<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">yarn add vuepress-plugin-comment -D</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span> <span class="token operator">**</span>配置Valine插件<span class="token operator">**</span>：</span>
<span class="line">   <span class="token operator">-</span> 在你的VuePress项目的<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">config.js </span><span class="token template-punctuation string">`</span></span>文件中引入插件。例如：</span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>`javascript</span>
<span class="line">module<span class="token punctuation">.</span>exports  <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token string">'vuepress-plugin-comment'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token literal-property property">app_id</span><span class="token operator">:</span> <span class="token string">'your-app-id'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token literal-property property">app_key</span><span class="token operator">:</span> <span class="token string">'your-app-key'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token comment">// 其他配置项...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>获取appId和appKey：前往LeanCloud官网注册账号，然后在应用设置中获取。</li>
</ul>
<ol start="3">
<li>
<p><strong>美化Valine组件</strong>（可选）：</p>
<ul>
<li>可以通过自定义CSS来美化Valine组件，例如在<code v-pre>src CSS</code>文件中添加样式。</li>
</ul>
</li>
<li>
<p><strong>引用Valine组件</strong>：</p>
<ul>
<li>将<code v-pre>Valine.vue </code>组件引用到你想要显示评论的地方。</li>
</ul>
</li>
<li>
<p><strong>主题内置Valine评论功能</strong>：</p>
<ul>
<li>如果你使用的是<code v-pre>vuepress-theme-reco</code>主题，该主题已经内置了Valine评论插件，你不需要额外安装和配置。</li>
</ul>
</li>
</ol>
<p>以上步骤基于搜索结果中的，它们提供了关于如何在VuePress项目中安装和使用Valine评论插件的详细指南。</p>
<h4 id="giscus插件如何在vuepress网站上实现-并管理其设置" tabindex="-1"><a class="header-anchor" href="#giscus插件如何在vuepress网站上实现-并管理其设置"><span>Giscus插件如何在VuePress网站上实现，并管理其设置？</span></a></h4>
<p>要在VuePress网站上实现Giscus插件并管理其设置，可以按照以下步骤进行：</p>
<p>首先，你需要在你的VuePress项目中安装Giscus插件。可以通过npm命令来安装：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">   <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> vuepress-plugin-comment</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这个插件可以帮助你在VuePress网站上开启评论功能。</p>
<p>安装完成后，你需要在VuePress的配置文件中添加Giscus插件。通常，这个配置文件是<code v-pre>config.js </code>或<code v-pre>config.ts </code>。在该文件中，你可以通过引入和配置插件来启用Giscus评论功能：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">   module<span class="token punctuation">.</span>exports  <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line"><span class="token punctuation">[</span></span>
<span class="line"><span class="token string">'vuepress-plugin-comment'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">// 配置选项</span></span>
<span class="line"><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'your-giscus-id'</span><span class="token punctuation">,</span> <span class="token comment">// 你的Giscus实例ID</span></span>
<span class="line"><span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">'your-repo-name'</span><span class="token punctuation">,</span> <span class="token comment">// GitHub仓库名称</span></span>
<span class="line"><span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span> <span class="token comment">// 讨论分类</span></span>
<span class="line"><span class="token literal-property property">映射</span><span class="token operator">:</span> <span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token comment">// 映射字段</span></span>
<span class="line"><span class="token literal-property property">mapping</span><span class="token operator">:</span> <span class="token string">'title'</span><span class="token punctuation">,</span> <span class="token comment">// 映射字段</span></span>
<span class="line">granular Mapping<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否启用细粒</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


