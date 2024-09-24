<template><div><h1 id="在windows中-可以通过多种方法修改文件的创建日期。以下是一些常见的方法" tabindex="-1"><a class="header-anchor" href="#在windows中-可以通过多种方法修改文件的创建日期。以下是一些常见的方法"><span>在Windows中，可以通过多种方法修改文件的创建日期。以下是一些常见的方法：</span></a></h1>
<h3 id="方法1-使用powershell" tabindex="-1"><a class="header-anchor" href="#方法1-使用powershell"><span>方法1：使用PowerShell</span></a></h3>
<ol>
<li>
<p><strong>打开PowerShell</strong>：
按 <code v-pre>Win + X</code>，然后选择“Windows PowerShell (管理员)”。</p>
</li>
<li>
<p><strong>运行以下命令</strong>，修改文件的创建日期（以修改 <code v-pre>C:\path\to\file.txt</code> 的创建日期为例）：</p>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre v-pre><code><span class="line"><span class="token variable">$file</span> = <span class="token function">Get-Item</span> <span class="token string">"C:\path\to\file.txt"</span></span>
<span class="line"><span class="token variable">$file</span><span class="token punctuation">.</span>CreationTime = <span class="token string">"2023-01-01 12:00:00"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="方法2-使用第三方工具" tabindex="-1"><a class="header-anchor" href="#方法2-使用第三方工具"><span>方法2：使用第三方工具</span></a></h3>
<p>一些第三方工具可以方便地修改文件属性，包括创建日期。例如：</p>
<ul>
<li><strong>BulkFileChanger</strong>：
<ul>
<li>下载并安装BulkFileChanger。</li>
<li>打开程序，添加需要修改的文件。</li>
<li>选择文件后，点击“Change Time/Attributes”。</li>
<li>设置新的创建日期，点击“Do it”。</li>
</ul>
</li>
</ul>
<h3 id="方法3-使用命令行工具-如-setfiledate" tabindex="-1"><a class="header-anchor" href="#方法3-使用命令行工具-如-setfiledate"><span>方法3：使用命令行工具（如 <code v-pre>SetFileDate</code>）</span></a></h3>
<ol>
<li>
<p><strong>下载 <code v-pre>SetFileDate</code></strong>：</p>
<ul>
<li>从官方网站下载并安装SetFileDate工具。</li>
</ul>
</li>
<li>
<p><strong>打开命令提示符</strong>：
按 <code v-pre>Win + R</code>，输入 <code v-pre>cmd</code>，按 Enter。</p>
</li>
<li>
<p><strong>运行以下命令</strong>，修改文件的创建日期（以修改 <code v-pre>C:\path\to\file.txt</code> 的创建日期为例）：</p>
<div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd" data-title="cmd"><pre v-pre><code><span class="line">setfiledate -c &quot;2023-01-01 12:00:00&quot; &quot;C:\path\to\file.txt&quot;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="方法4-编写自定义脚本" tabindex="-1"><a class="header-anchor" href="#方法4-编写自定义脚本"><span>方法4：编写自定义脚本</span></a></h3>
<p>如果你熟悉编程语言，也可以编写一个自定义脚本来修改文件的日期。例如，使用Python脚本：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> os</span>
<span class="line"><span class="token keyword">import</span> datetime</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 文件路径</span></span>
<span class="line">file_path <span class="token operator">=</span> <span class="token string">"C:\\path\\to\\file.txt"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改的创建日期</span></span>
<span class="line">new_creation_time <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">(</span><span class="token number">2023</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改文件的创建日期</span></span>
<span class="line">os<span class="token punctuation">.</span>utime<span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> <span class="token punctuation">(</span>new_creation_time<span class="token punctuation">,</span> new_creation_time<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上述代码保存为一个Python文件（如 <code v-pre>change_date.py</code>），然后在命令提示符下运行：</p>
<div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd" data-title="cmd"><pre v-pre><code><span class="line">python change_date.py</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>选择最适合你的方法来修改文件的创建日期。使用PowerShell和第三方工具是比较简单和直接的方法，而编写脚本则适合需要批量处理或自定义需求的场景。</p>
</div></template>


