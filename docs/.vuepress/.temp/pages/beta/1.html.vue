<template><div><p>欧拉公式（Euler's formula）是复分析中的一个重要公式，由瑞士数学家莱昂哈德·欧拉（Leonhard Euler）在18世纪提出。这个公式揭示了复数指数函数与三角函数之间的深刻联系，其形式为：</p>
<p>$$
e^{ix} = \cos(x) + i\sin(x)
$$</p>
<p>其中：</p>
<ul>
<li>$e$ 是自然对数的底（约为2.71828）。</li>
<li>$i$ 是虚数单位，满足 $i^2 = -1$。</li>
<li>$x$ 是实数。</li>
</ul>
<p>这个公式可以通过多种方法推导出来，包括泰勒级数展开法和微分方程法。下面我会详细解释这两种推导方法。</p>
<h3 id="_1-泰勒级数展开法" tabindex="-1"><a class="header-anchor" href="#_1-泰勒级数展开法"><span>1. 泰勒级数展开法</span></a></h3>
<p>泰勒级数是一种将函数表示为无穷级数的方法。对于指数函数 $e^{ix}$、余弦函数 $\cos(x)$ 和正弦函数 $\sin(x)$，它们的泰勒级数分别为：</p>
<p>$$
e^{ix} = \sum_{n=0}^{\infty} \frac{(ix)^n}{n!}
$$</p>
<p>$$
\cos(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}
$$</p>
<p>$$
\sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}
$$</p>
<p>将 $e^{ix}$ 的泰勒级数展开：</p>
<p>$$
e^{ix} = 1 + ix + \frac{(ix)^2}{2!} + \frac{(ix)^3}{3!} + \frac{(ix)^4}{4!} + \cdots
$$</p>
<p>$$
= 1 + ix + \frac{i^2 x^2}{2!} + \frac{i^3 x^3}{3!} + \frac{i^4 x^4}{4!} + \cdots
$$</p>
<p>由于 $i^2 = -1$， $i^3 = -i$， $i^4 = 1$ 等，可以进一步简化：</p>
<p>$$
= 1 + ix - \frac{x^2}{2!} - \frac{ix^3}{3!} + \frac{x^4}{4!} + \cdots
$$</p>
<p>将实部和虚部分开：</p>
<p>$$
= \left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots \right) + i\left(x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots \right)
$$</p>
<p>观察到这些分别是余弦函数和正弦函数的泰勒级数：</p>
<p>$$
e^{ix} = \cos(x) + i\sin(x)
$$</p>
<h3 id="_2-微分方程法" tabindex="-1"><a class="header-anchor" href="#_2-微分方程法"><span>2. 微分方程法</span></a></h3>
<p>考虑复指数函数 $f(x) = e^{ix}$，我们知道它满足以下微分方程：</p>
<p>$$
f'(x) = i e^{ix} = if(x)
$$</p>
<p>假设 $f(x) = \cos(x) + i\sin(x)$，则：</p>
<p>$$
f'(x) = -\sin(x) + i\cos(x)
$$</p>
<p>比较两边，我们看到：</p>
<p>$$
i(\cos(x) + i\sin(x)) = -\sin(x) + i\cos(x)
$$</p>
<p>将右边展开：</p>
<p>$$
i\cos(x) - \sin(x) + i^2 \sin(x) = -\sin(x) + i\cos(x)
$$</p>
<p>因为 $i^2 = -1$，所以 $i^2 \sin(x) = -\sin(x)$，这两个表达式相等。因此，</p>
<p>$$
e^{ix} = \cos(x) + i\sin(x)
$$</p>
<h3 id="欧拉公式的几何解释" tabindex="-1"><a class="header-anchor" href="#欧拉公式的几何解释"><span>欧拉公式的几何解释</span></a></h3>
<p>欧拉公式在复平面上有一个重要的几何解释。考虑复平面上的一个点，其极坐标表示为 $re^{i\theta}$，其中 $r$ 是模长，$\theta$ 是辐角。根据欧拉公式，这个点的笛卡尔坐标表示为：</p>
<p>$$
(r\cos(\theta), r\sin(\theta))
$$</p>
<p>因此，复数 $e^{ix}$ 可以看作是一个单位圆上的点，其角度为 $x$ 弧度。</p>
<h3 id="欧拉恒等式" tabindex="-1"><a class="header-anchor" href="#欧拉恒等式"><span>欧拉恒等式</span></a></h3>
<p>欧拉公式在 $x = \pi$ 时，得到著名的欧拉恒等式：</p>
<p>$$
e^{i\pi} + 1 = 0
$$</p>
<p>这被认为是数学中最美丽的公式之一，因为它将五个最重要的数学常数 $e, i, \pi, 1, 0$ 通过简单的关系连接在一起。</p>
<p>欧拉公式不仅在纯数学中有重要应用，也在物理学、电工程学和其他工程领域中具有广泛的应用。它为许多复杂问题提供了简洁而强大的工具。</p>
</div></template>


