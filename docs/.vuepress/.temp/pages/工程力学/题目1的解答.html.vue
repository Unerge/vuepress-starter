<template><div><h1 id="在-github-上显示数学公式" tabindex="-1"><a class="header-anchor" href="#在-github-上显示数学公式"><span>在 Github 上显示数学公式</span></a></h1>
<p>要在 GitHub 上显示数学公式和格式化的文本，你可以使用 Markdown 语法，同时确保数学公式使用单个美元符号 <code v-pre>$</code> 来包裹行内公式，或者使用三重反引号 <code v-pre>```</code> 和 <code v-pre>math</code> 来包裹块级公式。</p>
<p>以下是将内容转换为 GitHub 可显示格式的示例：</p>
<hr>
<h3 id="要绘制竖柱ab的轴力图-我们需要分析柱子受到的荷载和其产生的轴力分布。" tabindex="-1"><a class="header-anchor" href="#要绘制竖柱ab的轴力图-我们需要分析柱子受到的荷载和其产生的轴力分布。"><span>要绘制竖柱AB的轴力图，我们需要分析柱子受到的荷载和其产生的轴力分布。</span></a></h3>
<h4 id="已知条件" tabindex="-1"><a class="header-anchor" href="#已知条件"><span>已知条件：</span></a></h4>
<ul>
<li>柱子的截面为正方形，边长为 $a$。</li>
<li>柱高为 $h$。</li>
<li>材料的堆密度为 $\gamma$。</li>
<li>柱顶受一个向下的集中荷载 $F$。</li>
</ul>
<h4 id="分析过程" tabindex="-1"><a class="header-anchor" href="#分析过程"><span>分析过程：</span></a></h4>
<ol>
<li>
<p><strong>自重计算</strong>：</p>
<p>柱的截面积 $A = a^2$。材料的堆密度 $\gamma$ 给出每单位体积的重量。</p>
<p>柱的体积为： $V$   $=$  $A \cdot h$  $=$  $a^2 \cdot h$。</p>
<p>柱的自重为： $W$   $=$  $\gamma \cdot V$  $=$  $\gamma \cdot a^2 \cdot h$。</p>
</li>
<li>
<p><strong>轴力计算</strong>：</p>
<p>轴力图反映的是沿柱高方向上的轴向力分布。</p>
<ul>
<li>在柱顶（点B），轴力 $N_B = -F$（向下的集中荷载）。</li>
<li>在柱底（点A），轴力 $N_A = -F - W$（集中荷载和自重的总和）。</li>
</ul>
</li>
<li>
<p><strong>轴力图的绘制</strong>：</p>
<ul>
<li>从柱顶到柱底，轴力呈线性变化，因为自重的分布是均匀的。</li>
<li>轴力图从 $N_B = -F$ 开始，到 $N_A = -F - W$ 结束。</li>
<li>轴力图的斜率等于每单位长度的重量：  $-\gamma$  $\cdot a^2$  。</li>
</ul>
</li>
</ol>
<h4 id="轴力图的形式" tabindex="-1"><a class="header-anchor" href="#轴力图的形式"><span>轴力图的形式：</span></a></h4>
<ul>
<li><strong>在B点</strong>，轴力 $N_B = -F$。</li>
<li><strong>在A点</strong>，轴力 $N_A = -F - \gamma \cdot a^2 \cdot h$。</li>
</ul>
<p>轴力图是一个线性下降的图，起点在 $N_B = -F$，终点在 $N_A = -F - \gamma a^2 h$，并且图的斜率为 $-\gamma a^2$。</p>
<p>这样，我们就完成了对柱子AB的轴力图的分析和绘制。</p>
<hr>
<p>确保在 GitHub 上的适当位置使用单个 <code v-pre>$</code> 符号来包围数学公式，或者使用三重反引号（```）和 <code v-pre>math</code> 语法来显示复杂公式和数学内容。</p>
</div></template>


