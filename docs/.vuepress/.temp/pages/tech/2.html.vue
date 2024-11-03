<template><div><h1 id="hyper-v虚拟交换机无法显示交换机列表" tabindex="-1"><a class="header-anchor" href="#hyper-v虚拟交换机无法显示交换机列表"><span>Hyper-V虚拟交换机无法显示交换机列表</span></a></h1>
<p>Hyper-V虚拟交换机无法显示交换机列表的问题可能由多种原因引起。以下是一些常见的解决方法：</p>
<ol>
<li>
<p><strong>检查Hyper-V服务状态</strong>：</p>
<ul>
<li>确保Hyper-V的相关服务正在运行。你可以打开“服务”（services.msc），检查以下服务是否启动：
<ul>
<li>Hyper-V Virtual Machine Management (vmms)</li>
<li>Hyper-V Host Compute Service (vmcompute)</li>
</ul>
</li>
<li>如果这些服务未启动，请手动启动它们。</li>
</ul>
</li>
<li>
<p><strong>重启Hyper-V管理器</strong>：</p>
<ul>
<li>有时，简单的重启Hyper-V管理器可以解决显示问题。关闭Hyper-V管理器，然后重新打开它。</li>
</ul>
</li>
<li>
<p><strong>确保网络适配器驱动正常</strong>：</p>
<ul>
<li>打开设备管理器，检查你的网络适配器是否正常工作。如果有问题，尝试更新或重新安装网络适配器驱动。</li>
</ul>
</li>
<li>
<p><strong>验证Hyper-V虚拟交换机管理工具的配置</strong>：</p>
<ul>
<li>在PowerShell中运行以下命令来检查当前虚拟交换机的配置：<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">Get-VMSwitch</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>如果命令没有返回任何结果，说明当前没有配置虚拟交换机，或者配置可能损坏。可以尝试重新创建虚拟交换机。</li>
</ul>
</li>
<li>
<p><strong>检查Hyper-V角色是否完整安装</strong>：</p>
<ul>
<li>确保Hyper-V角色和管理工具完全安装。你可以在“服务器管理器”中检查或通过以下PowerShell命令来确认：<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">Get-WindowsFeature</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Name </span><span style="--shiki-light:#999999;--shiki-dark:#666666">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Hyper</span><span style="--shiki-light:#999999;--shiki-dark:#666666">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">V</span><span style="--shiki-light:#999999;--shiki-dark:#666666">*</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>如果某些组件未安装，可以通过以下命令安装：<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">Install-WindowsFeature</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Name Hyper</span><span style="--shiki-light:#999999;--shiki-dark:#666666">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">V </span><span style="--shiki-light:#999999;--shiki-dark:#666666">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">IncludeManagementTools</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>重置Hyper-V网络配置</strong>：</p>
<ul>
<li>如果虚拟交换机配置可能损坏，可以尝试删除现有的虚拟交换机，然后重新创建。</li>
<li>在PowerShell中运行以下命令删除所有虚拟交换机：<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">Get-VMSwitch</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> Remove-VMSwitch</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Force</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>然后重新创建新的虚拟交换机，例如：<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">New-VMSwitch</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Name </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">NewVirtualSwitch</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">NetAdapterName </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Ethernet</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">AllowManagementOS </span><span style="--shiki-light:#999999;--shiki-dark:#666666">$</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>检查系统日志</strong>：</p>
<ul>
<li>打开事件查看器（Event Viewer），检查系统和应用日志中是否有相关的错误或警告信息，这些信息可能提供有关问题的更多线索。</li>
</ul>
</li>
</ol>
<p>如果以上方法仍然无法解决问题，可能需要更深入的诊断，或者考虑联系微软支持以获得进一步的帮助。</p>
</div></template>


