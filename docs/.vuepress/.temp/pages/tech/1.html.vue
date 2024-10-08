<template><div><h1 id="原神伤害公式" tabindex="-1"><a class="header-anchor" href="#原神伤害公式"><span>原神伤害公式</span></a></h1>
<p>在《原神》中，伤害计算的公式确实存在，且相对复杂，涉及多种因素。基本伤害公式如下：</p>
<p>[ \text{总伤害} = \left( \text{技能伤害} \times \text{攻击力} \times (1 + \text{伤害加成}) \times \text{暴击倍率} \times (1 - \text{抗性倍率}) \times \text{敌人减伤倍率} \right) ]</p>
<p>下面是对每个部分的详细解释：</p>
<ol>
<li><strong>技能伤害</strong>：技能面板上显示的基础倍率。</li>
<li><strong>攻击力</strong>：包括角色基础攻击力和装备（武器、圣遗物）提供的攻击力。</li>
<li><strong>伤害加成</strong>：来自圣遗物的元素伤害加成、角色天赋、武器特效等的总和。</li>
<li><strong>暴击倍率</strong>：
[
\text{暴击倍率} = 1 + \left( \text{暴击伤害} \times \text{暴击率} \right)
]
若未暴击，则为1，若暴击则为1 + 暴击伤害。</li>
<li><strong>抗性倍率</strong>：敌人的抗性计算较为复杂，基本公式为：
[
\text{抗性倍率} = 1 - \left( \frac{\text{抗性} - \text{减抗} - \text{抗性削弱}}{100 + \left| \text{抗性} - \text{减抗} - \text{抗性削弱} \right|} \right)
]</li>
<li><strong>敌人减伤倍率</strong>：敌人有时会有减伤效果，例如护盾或特定技能效果。</li>
</ol>
<h3 id="示例计算" tabindex="-1"><a class="header-anchor" href="#示例计算"><span>示例计算</span></a></h3>
<p>假设一个角色的普通攻击计算，假设以下数据：</p>
<ul>
<li>技能伤害倍率：100% (1.0)</li>
<li>角色攻击力：2000</li>
<li>伤害加成：50% (0.5)</li>
<li>暴击率：50% (0.5)</li>
<li>暴击伤害：100% (1.0)</li>
<li>敌人抗性：10%</li>
<li>减抗：0%</li>
<li>抗性削弱：0%</li>
<li>敌人减伤倍率：0%</li>
</ul>
<p>计算步骤如下：</p>
<ol>
<li>
<p><strong>技能伤害部分</strong>：
[
\text{技能伤害} = 1.0
]</p>
</li>
<li>
<p><strong>攻击力部分</strong>：
[
\text{攻击力} = 2000
]</p>
</li>
<li>
<p><strong>伤害加成部分</strong>：
[
1 + 0.5 = 1.5
]</p>
</li>
<li>
<p><strong>暴击倍率部分</strong>：
[
\text{暴击倍率} = 1 + (0.5 \times 1.0) = 1.5 \quad (\text{暴击时})
]
[
\text{暴击倍率} = 1 \quad (\text{非暴击时})
]</p>
</li>
<li>
<p><strong>抗性倍率部分</strong>：
[
\text{抗性倍率} = 1 - \left( \frac{10 - 0 - 0}{100 + |10 - 0 - 0|} \right) = 1 - \frac{10}{110} = 0.909
]</p>
</li>
<li>
<p><strong>敌人减伤倍率部分</strong>：
[
\text{敌人减伤倍率} = 1 \quad (\text{无减伤})
]</p>
</li>
</ol>
<p>暴击时：
[
\text{总伤害} = 1.0 \times 2000 \times 1.5 \times 1.5 \times 0.909 \times 1 = 4090.5
]</p>
<p>非暴击时：
[
\text{总伤害} = 1.0 \times 2000 \times 1.5 \times 1 \times 0.909 \times 1 = 2727
]</p>
<p>以上是基本的伤害计算公式和示例计算。根据实际情况，具体数值和结果会有所不同。</p>
<p>元素精通在《原神》中主要影响元素反应的伤害。不同元素反应类型的伤害公式有所不同。这里是常见元素反应（如融化、蒸发、超载等）的计算方式。</p>
<h3 id="元素反应伤害公式" tabindex="-1"><a class="header-anchor" href="#元素反应伤害公式"><span>元素反应伤害公式</span></a></h3>
<ol>
<li>
<p><strong>蒸发与融化</strong>（乘区）</p>
<ul>
<li>蒸发 (火 -&gt; 水) 和融化 (火 -&gt; 冰) 的伤害倍率为1.5倍</li>
<li>蒸发 (水 -&gt; 火) 和融化 (冰 -&gt; 火) 的伤害倍率为2倍</li>
</ul>
</li>
<li>
<p><strong>增幅反应</strong>（反应基数 × 元素精通加成 × 反应系数）</p>
<ul>
<li><strong>超载</strong>、<strong>感电</strong>、<strong>超导</strong>、<strong>超绽放</strong>、<strong>超激化</strong>等</li>
<li>基本公式：
[
\text{反应伤害} = \text{反应基数} \times (1 + \frac{16 \times \text{元素精通}}{\text{元素精通} + 2000}) \times \text{反应系数}
]</li>
</ul>
</li>
</ol>
<h3 id="详细公式说明" tabindex="-1"><a class="header-anchor" href="#详细公式说明"><span>详细公式说明</span></a></h3>
<ol>
<li><strong>反应基数</strong>：这是根据角色等级和反应类型确定的一个固定数值。</li>
<li><strong>元素精通加成</strong>：由角色的元素精通决定。加成计算方式如下：
[
\text{元素精通加成} = \frac{16 \times \text{元素精通}}{\text{元素精通} + 2000}
]</li>
<li><strong>反应系数</strong>：这是特定反应类型的固定值，不同的反应有不同的系数。</li>
</ol>
<h3 id="示例计算-1" tabindex="-1"><a class="header-anchor" href="#示例计算-1"><span>示例计算</span></a></h3>
<p>假设某角色触发了蒸发反应，以下是一些假设的数据：</p>
<ul>
<li>元素精通：200</li>
<li>反应基数：1000（假设值）</li>
<li>反应系数：1.5（蒸发反应，火-&gt;水）</li>
</ul>
<p>首先计算元素精通加成：
[
\text{元素精通加成} = \frac{16 \times 200}{200 + 2000} = \frac{3200}{2200} = 1.4545
]</p>
<p>然后计算总伤害：
[
\text{总伤害} = 1000 \times (1 + 1.4545) \times 1.5 = 1000 \times 2.4545 \times 1.5 = 3681.75
]</p>
<h3 id="实际应用" tabindex="-1"><a class="header-anchor" href="#实际应用"><span>实际应用</span></a></h3>
<p>在实际游戏中，不同的反应系数和反应基数需要根据具体情况查询或计算。总体来说，元素精通对增幅反应（如超载、超导、感电等）和反应系数的影响较大，对于蒸发和融化这类乘区反应，其影响也会通过公式体现。</p>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3>
<ol>
<li><strong>蒸发和融化</strong>：这些反应是基于普通攻击、重击、技能等伤害的倍率调整，而非直接计算的额外伤害。</li>
<li><strong>其他元素反应</strong>：如超载、感电、超导等，都是基于固定反应基数进行计算，并受到元素精通的加成影响。</li>
</ol>
<p>通过理解这些公式，玩家可以更好地优化角色和队伍，最大化伤害输出。</p>
<p>在《原神》中，元素反应基数是计算元素反应伤害的重要参数。它取决于角色的等级和具体的元素反应类型。以下是各元素反应的基数和相关系数。</p>
<h3 id="元素反应基数" tabindex="-1"><a class="header-anchor" href="#元素反应基数"><span>元素反应基数</span></a></h3>
<p>不同等级的角色有不同的元素反应基数。下表列出了部分常见等级的元素反应基数：</p>
<table>
<thead>
<tr>
<th style="text-align:center">角色等级</th>
<th style="text-align:center">超载、燃烧、超绽放</th>
<th style="text-align:center">超导</th>
<th style="text-align:center">感电、开花、激化</th>
<th style="text-align:center">蔓激化、烈绽放</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">7.2</td>
<td style="text-align:center">3</td>
<td style="text-align:center">6</td>
<td style="text-align:center">5</td>
</tr>
<tr>
<td style="text-align:center">20</td>
<td style="text-align:center">65.0</td>
<td style="text-align:center">27.1</td>
<td style="text-align:center">54.5</td>
<td style="text-align:center">45.5</td>
</tr>
<tr>
<td style="text-align:center">40</td>
<td style="text-align:center">155.2</td>
<td style="text-align:center">64.7</td>
<td style="text-align:center">130.2</td>
<td style="text-align:center">108.6</td>
</tr>
<tr>
<td style="text-align:center">60</td>
<td style="text-align:center">270.6</td>
<td style="text-align:center">112.8</td>
<td style="text-align:center">227.0</td>
<td style="text-align:center">189.4</td>
</tr>
<tr>
<td style="text-align:center">80</td>
<td style="text-align:center">408.4</td>
<td style="text-align:center">170.3</td>
<td style="text-align:center">342.4</td>
<td style="text-align:center">285.6</td>
</tr>
<tr>
<td style="text-align:center">90</td>
<td style="text-align:center">520.0</td>
<td style="text-align:center">217.4</td>
<td style="text-align:center">436.7</td>
<td style="text-align:center">364.9</td>
</tr>
</tbody>
</table>
<h3 id="反应系数" tabindex="-1"><a class="header-anchor" href="#反应系数"><span>反应系数</span></a></h3>
<p>反应系数是特定元素反应的固定值，用于计算伤害时的倍率。常见反应系数如下：</p>
<ul>
<li><strong>超载、燃烧、超绽放</strong>：1.0</li>
<li><strong>超导</strong>：0.5</li>
<li><strong>感电、开花、激化</strong>：1.2</li>
<li><strong>蔓激化</strong>：1.25</li>
<li><strong>烈绽放</strong>：3.0</li>
</ul>
<h3 id="元素精通加成" tabindex="-1"><a class="header-anchor" href="#元素精通加成"><span>元素精通加成</span></a></h3>
<p>元素精通加成根据角色的元素精通值计算，公式如下：</p>
<p>[
\text{元素精通加成} = \frac{16 \times \text{元素精通}}{\text{元素精通} + 2000}
]</p>
<h3 id="总伤害计算" tabindex="-1"><a class="header-anchor" href="#总伤害计算"><span>总伤害计算</span></a></h3>
<p>元素反应伤害公式可以表示为：</p>
<p>[
\text{反应伤害} = \text{反应基数} \times (1 + \frac{16 \times \text{元素精通}}{\text{元素精通} + 2000}) \times \text{反应系数}
]</p>
<h3 id="示例计算-2" tabindex="-1"><a class="header-anchor" href="#示例计算-2"><span>示例计算</span></a></h3>
<p>假设一个角色90级，元素精通为200，触发超载反应。超载反应的基数为520，系数为1.0。</p>
<ol>
<li>
<p>计算元素精通加成：
[
\text{元素精通加成} = \frac{16 \times 200}{200 + 2000} = \frac{3200}{2200} \approx 1.4545
]</p>
</li>
<li>
<p>计算反应伤害：
[
\text{反应伤害} = 520 \times (1 + 1.4545) \times 1.0 = 520 \times 2.4545 = 1276.34
]</p>
</li>
</ol>
<p>如果角色触发的是感电反应，感电反应的基数同样为520，但系数为1.2，则计算如下：</p>
<ol>
<li>
<p>计算元素精通加成：
[
\text{元素精通加成} = \frac{16 \times 200}{200 + 2000} = 1.4545
]</p>
</li>
<li>
<p>计算反应伤害：
[
\text{反应伤害} = 520 \times (1 + 1.4545) \times 1.2 = 520 \times 2.4545 \times 1.2 = 1531.61
]</p>
</li>
</ol>
<h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h3>
<p>通过了解反应基数和反应系数，以及如何将元素精通加成应用到公式中，玩家可以更准确地计算和优化角色的元素反应伤害。这有助于在游戏中选择合适的装备和队伍搭配，以最大化输出。</p>
</div></template>


