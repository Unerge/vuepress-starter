<template><div><h1 id="弯矩图与剪力图" tabindex="-1"><a class="header-anchor" href="#弯矩图与剪力图"><span>弯矩图与剪力图</span></a></h1>
<p>为了绘制外伸梁的内力图（弯矩图和剪力图），我们需要先进行受力分析，计算支座反力，然后基于这些反力来绘制弯矩和剪力图。</p>
<h3 id="梁的受力分析" tabindex="-1"><a class="header-anchor" href="#梁的受力分析"><span>梁的受力分析</span></a></h3>
<ol>
<li>
<p><strong>已知条件</strong>：</p>
<ul>
<li>梁 $$ABCD$$ 长度分别为 $$2 , m$$, $$3 , m$$, $$1 , m$$。</li>
<li>$$AB$$ 段有均布载荷 $$q = 10 , kN/m$$。</li>
<li>点 $$C$$ 处有向下的集中荷载 $$F_p = 20 , kN$$。</li>
<li>$$B$$ 和 $$D$$ 为简单支座。</li>
</ul>
</li>
<li>
<p><strong>计算支座反力</strong>：</p>
<ul>
<li>
<p><strong>均布载荷产生的合力</strong>：
$$
F_q = q \cdot L_{AB} = 10 , kN/m \times 2 , m = 20 , kN
$$
该合力作用在 $$AB$$ 的中点，即距 $$A$$ 1米处。</p>
</li>
<li>
<p><strong>求取支座反力</strong>：
设 $$B$$ 点的反力为 $$R_B$$，$$D$$ 点的反力为 $$R_D$$。</p>
<p>对整个梁取矩平衡（以 $$B$$ 点为基点）：
$$
R_D \cdot 6m - 20kN \cdot 5m - 20kN \cdot 4m = 0
$$
$$
R_D = \frac{20 \times 5 + 20 \times 4}{6} = \frac{100 + 80}{6} = 30 , kN
$$</p>
<p>垂直力平衡：
$$
R_B + R_D = F_q + F_p = 20 + 20 = 40 , kN
$$
$$
R_B = 40 - R_D = 40 - 30 = 10 , kN
$$</p>
</li>
</ul>
</li>
<li>
<p><strong>绘制剪力图</strong>：</p>
<ul>
<li><strong>从左端 $$A$$ 开始</strong>：
<ul>
<li>在 $$A$$ 点，剪力 $$V_A = -F_q = -20 , kN$$。</li>
<li>在 $$B$$ 点，剪力 $$V_B = V_A + R_B = -20 + 10 = -10 , kN$$。</li>
<li>在 $$C$$ 点，剪力 $$V_C = V_B = -10 , kN$$。</li>
<li>在 $$C$$ 处由于集中力 $$F_p$$ 向下，剪力跳变：
$$
V_{C^+} = V_C - F_p = -10 - 20 = -30 , kN
$$</li>
<li>在 $$D$$ 点，剪力 $$V_D = V_{C^+} + R_D = -30 + 30 = 0 , kN$$。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>绘制弯矩图</strong>：</p>
<ul>
<li><strong>从左端 $$A$$ 开始</strong>：
<ul>
<li>在 $$A$$ 处，弯矩 $$M_A = 0$$。</li>
<li>在 $$B$$ 处，弯矩由均布载荷引起：
$$
M_B = -\frac{1}{2} \times q \times L_{AB}^2 = -\frac{1}{2} \times 10 \times 2^2 = -20 , kNm
$$</li>
<li>在 $$C$$ 处，弯矩增加由于 $$R_B$$ 的作用：
$$
M_C = M_B + R_B \times 3 = -20 + 10 \times 3 = 10 , kNm
$$</li>
<li>在 $$D$$ 处，弯矩减小由于集中荷载 $$F_p$$：
$$
M_D = M_C - F_p \times 1 = 10 - 20 = -10 , kNm
$$</li>
</ul>
</li>
</ul>
</li>
</ol>
<h3 id="最终剪力图和弯矩图绘制" tabindex="-1"><a class="header-anchor" href="#最终剪力图和弯矩图绘制"><span>最终剪力图和弯矩图绘制：</span></a></h3>
<ul>
<li>剪力图从 $$A$$ 开始为线性下降到 $$B$$（由于均布载荷），然后到 $$C$$ 处为常数，再次跳变后达到 $$D$$ 点。</li>
<li>弯矩图从 $$A$$ 开始为二次曲线到 $$B$$（均布载荷影响），然后为线性变化到 $$C$$ 和 $$D$$ 点。</li>
</ul>
<p>根据上述步骤和计算，可以精确绘制外伸梁的剪力图和弯矩图。</p>
</div></template>


