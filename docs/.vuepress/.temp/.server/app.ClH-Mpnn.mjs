import { shallowRef, defineComponent, computed, h as h$1, toRef, ref, onMounted, defineAsyncComponent, reactive, inject, onUnmounted, getCurrentInstance, camelize, capitalize, watch, nextTick as nextTick$1, useSSRContext, mergeProps, isRef, watchEffect, readonly, toValue, onUpdated, provide, customRef, resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, createVNode, resolveDynamicComponent, renderSlot, createTextVNode, toDisplayString, normalizeClass, watchPostEffect, Fragment, renderList, useSlots, toHandlers, withKeys, onBeforeUnmount, onBeforeUpdate, createSSRApp } from "vue";
import { isLinkWithProtocol, isString, dedupeHead, resolveLocalePath, splitPath, isLinkHttp, removeLeadingSlash, normalizeRoutePath, removeEndingSlash, ensureLeadingSlash, ensureEndingSlash, isFunction, isLinkExternal, isPlainObject } from "@vuepress/shared";
import { useRouter, useRoute, createRouter, START_LOCATION, createMemoryHistory } from "vue-router";
import { useEventListener, useFullscreen, onKeyStroke, useStorage, useMediaQuery, onClickOutside, useSessionStorage, useLocalStorage, useThrottleFn, watchDebounced, useDark, hasOwn, tryOnScopeDispose, useWindowScroll, useScrollLock, useElementSize, useWindowSize, useCssVar } from "@vueuse/core";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrRenderStyle, ssrRenderVNode, ssrIncludeBooleanAttr, ssrRenderSlotInner } from "vue/server-renderer";
import { genSaltSync, compare } from "bcrypt-ts/browser";
import "watermark-js-plus";
import "@iconify/vue";
import { Icon } from "@iconify/vue/offline";
const redirects$1 = JSON.parse("{}");
const routes$1 = Object.fromEntries([
  ["/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-DbCSjRWj.mjs"
  ), meta: { "title": "" } }],
  ["/beta/", { loader: () => import(
    /* webpackChunkName: "beta_index.html" */
    "./assets/index.html-CSzLKYQW.mjs"
  ), meta: { "title": "2024-06-11T14:41_欧拉公式" } }],
  ["/GPTstory/1.html", { loader: () => import(
    /* webpackChunkName: "GPTstory_1.html" */
    "./assets/1.html-sPh67vBR.mjs"
  ), meta: { "title": '你可以写一个关于"兔兔兔兔热狗好吧吃几节课，我就计划计划赶不上变化"的故事吗？' } }],
  ["/GPTstory/2.html", { loader: () => import(
    /* webpackChunkName: "GPTstory_2.html" */
    "./assets/2.html-Pr9yH0vR.mjs"
  ), meta: { "title": '你可以写一个关于"他回复二技能重新设置大哥"的故事吗？' } }],
  ["/GPTstory/3.html", { loader: () => import(
    /* webpackChunkName: "GPTstory_3.html" */
    "./assets/3.html-CLXsHcfj.mjs"
  ), meta: { "title": "你可以写一个关于你的一切的2000字的故事吗？" } }],
  ["/GPTstory/4.html", { loader: () => import(
    /* webpackChunkName: "GPTstory_4.html" */
    "./assets/4.html-V9z6qtEk.mjs"
  ), meta: { "title": "桂花湖将与下班就穿越异世界" } }],
  ["/GPTstory/5.html", { loader: () => import(
    /* webpackChunkName: "GPTstory_5.html" */
    "./assets/5.html-Bl1Sa0PG.mjs"
  ), meta: { "title": "存在于自我探索" } }],
  ["/GPTstory/", { loader: () => import(
    /* webpackChunkName: "GPTstory_index.html" */
    "./assets/index.html-D1Qghrn0.mjs"
  ), meta: { "title": "记录一些GPT小故事" } }],
  ["/learn/", { loader: () => import(
    /* webpackChunkName: "learn_index.html" */
    "./assets/index.html-ruUOWk7a.mjs"
  ), meta: { "title": "" } }],
  ["/novel/", { loader: () => import(
    /* webpackChunkName: "novel_index.html" */
    "./assets/index.html-GubaRVfl.mjs"
  ), meta: { "title": "" } }],
  ["/tech/1.html", { loader: () => import(
    /* webpackChunkName: "tech_1.html" */
    "./assets/1.html-DFPXv6oJ.mjs"
  ), meta: { "title": "原神伤害公式" } }],
  ["/tech/10.html", { loader: () => import(
    /* webpackChunkName: "tech_10.html" */
    "./assets/10.html-Dv4uiW_1.mjs"
  ), meta: { "title": "在宝塔面板中 Docker 环境安装 Tailchat" } }],
  ["/tech/11.html", { loader: () => import(
    /* webpackChunkName: "tech_11.html" */
    "./assets/11.html-D0sU0KSb.mjs"
  ), meta: { "title": "创新创业作业" } }],
  ["/tech/2.html", { loader: () => import(
    /* webpackChunkName: "tech_2.html" */
    "./assets/2.html-ZxLokM3j.mjs"
  ), meta: { "title": "Hyper-V虚拟交换机无法显示交换机列表" } }],
  ["/tech/3.html", { loader: () => import(
    /* webpackChunkName: "tech_3.html" */
    "./assets/3.html-CF5_wTYY.mjs"
  ), meta: { "title": "不同风格的博客站导航栏样式" } }],
  ["/tech/4.html", { loader: () => import(
    /* webpackChunkName: "tech_4.html" */
    "./assets/4.html-CM8GcvXz.mjs"
  ), meta: { "title": "在Windows中，可以通过多种方法修改文件的创建日期" } }],
  ["/tech/5.html", { loader: () => import(
    /* webpackChunkName: "tech_5.html" */
    "./assets/5.html-lI_Fd9Bu.mjs"
  ), meta: { "title": "爬取Bing每日背景图" } }],
  ["/tech/6.html", { loader: () => import(
    /* webpackChunkName: "tech_6.html" */
    "./assets/6.html-COiRwPoZ.mjs"
  ), meta: { "title": "仿制哔哩哔哩站点样式" } }],
  ["/tech/7.html", { loader: () => import(
    /* webpackChunkName: "tech_7.html" */
    "./assets/7.html-BDAWADoI.mjs"
  ), meta: { "title": "虚拟机嵌套虚拟化" } }],
  ["/tech/8.html", { loader: () => import(
    /* webpackChunkName: "tech_8.html" */
    "./assets/8.html-Dxhy1HOw.mjs"
  ), meta: { "title": "Vuepress自定义主题配置" } }],
  ["/tech/9.html", { loader: () => import(
    /* webpackChunkName: "tech_9.html" */
    "./assets/9.html-B31Fefa1.mjs"
  ), meta: { "title": "在VuePress中添加评论功能" } }],
  ["/tech/", { loader: () => import(
    /* webpackChunkName: "tech_index.html" */
    "./assets/index.html-v24-G9sd.mjs"
  ), meta: { "title": "专门用于存放技术文档" } }],
  ["/learn/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/", { loader: () => import(
    /* webpackChunkName: "learn_工程力学_index.html" */
    "./assets/index.html-7tBED0Kt.mjs"
  ), meta: { "title": "工程力学" } }],
  ["/learn/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/%E5%A4%8D%E4%B9%A0%E8%B5%84%E6%96%991.html", { loader: () => import(
    /* webpackChunkName: "learn_工程力学_复习资料1.html" */
    "./assets/复习资料1.html-DKizXruQ.mjs"
  ), meta: { "title": "静力学基础" } }],
  ["/learn/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/%E9%A2%98%E7%9B%AE1%E7%9A%84%E8%A7%A3%E7%AD%94.html", { loader: () => import(
    /* webpackChunkName: "learn_工程力学_题目1的解答.html" */
    "./assets/题目1的解答.html-D47i3E2c.mjs"
  ), meta: { "title": "在 Github 上显示数学公式" } }],
  ["/learn/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/%E9%A2%98%E7%9B%AE%E8%A7%A3%E7%AD%942.html", { loader: () => import(
    /* webpackChunkName: "learn_工程力学_题目解答2.html" */
    "./assets/题目解答2.html-CI17smwV.mjs"
  ), meta: { "title": "弯矩图与剪力图" } }],
  ["/learn/%E7%AE%A1%E7%90%86%E5%AD%A6/", { loader: () => import(
    /* webpackChunkName: "learn_管理学_index.html" */
    "./assets/index.html-hNuaH8sH.mjs"
  ), meta: { "title": "管理学" } }],
  ["/learn/%E7%AE%A1%E7%90%86%E5%AD%A6/%E5%A4%8D%E4%B9%A0%E8%B5%84%E6%96%99.html", { loader: () => import(
    /* webpackChunkName: "learn_管理学_复习资料.html" */
    "./assets/复习资料.html-Dt62aAM6.mjs"
  ), meta: { "title": "复习资料" } }],
  ["/learn/%E7%AE%A1%E7%90%86%E5%AD%A6/%E7%AC%AC%E4%B8%80%E7%AB%A0.html", { loader: () => import(
    /* webpackChunkName: "learn_管理学_第一章.html" */
    "./assets/第一章.html-BTlBTHkP.mjs"
  ), meta: { "title": "第一章 管理导论" } }],
  ["/learn/%E7%AE%A1%E7%90%86%E5%AD%A6/%E7%AC%AC%E4%BA%8C%E7%AB%A0.html", { loader: () => import(
    /* webpackChunkName: "learn_管理学_第二章.html" */
    "./assets/第二章.html-DZE-Y9_I.mjs"
  ), meta: { "title": "第二章 管理理论的历史演变" } }],
  ["/learn/%E7%AE%A1%E7%90%86%E5%AD%A6/%E7%BB%AA%E8%AE%BA.html", { loader: () => import(
    /* webpackChunkName: "learn_管理学_绪论.html" */
    "./assets/绪论.html-DsB7kLj0.mjs"
  ), meta: { "title": "绪论" } }],
  ["/learn/%E6%AF%9B%E6%A6%82/", { loader: () => import(
    /* webpackChunkName: "learn_毛概_index.html" */
    "./assets/index.html-Bfna9kHY.mjs"
  ), meta: { "title": "毛泽东概论" } }],
  ["/learn/%E6%AF%9B%E6%A6%82/%E5%AF%BC%E8%AE%BA.html", { loader: () => import(
    /* webpackChunkName: "learn_毛概_导论.html" */
    "./assets/导论.html-CfwbPWjJ.mjs"
  ), meta: { "title": "导论 马克思主义中国化时代化的历史进程与理论成果" } }],
  ["/learn/%E6%AF%9B%E6%A6%82/%E7%AC%AC%E4%B8%80%E7%AB%A0.html", { loader: () => import(
    /* webpackChunkName: "learn_毛概_第一章.html" */
    "./assets/第一章.html-Cja7TnYQ.mjs"
  ), meta: { "title": "第一章 毛泽东思想及其历史地位" } }],
  ["/learn/%E6%AF%9B%E6%A6%82/%E7%AC%AC%E4%BA%8C%E7%AB%A0.html", { loader: () => import(
    /* webpackChunkName: "learn_毛概_第二章.html" */
    "./assets/第二章.html-qVcmVqDU.mjs"
  ), meta: { "title": "第二章 新民主主义革命理论" } }],
  ["/learn/%E7%BB%8F%E6%B5%8E%E5%AD%A6/", { loader: () => import(
    /* webpackChunkName: "learn_经济学_index.html" */
    "./assets/index.html-p7ES60Yk.mjs"
  ), meta: { "title": "经济学" } }],
  ["/learn/%E7%BB%8F%E6%B5%8E%E5%AD%A6/%E7%BB%8F%E6%B5%8E%E5%AD%A6%E6%9C%9F%E6%9C%AB%E8%80%83-%E5%A4%8D%E4%B9%A01.html", { loader: () => import(
    /* webpackChunkName: "learn_经济学_经济学期末考-复习1.html" */
    "./assets/经济学期末考-复习1.html-t0cnm5vn.mjs"
  ), meta: { "title": "经济学-复习资料1" } }],
  ["/learn/%E7%BB%8F%E6%B5%8E%E5%AD%A6/%E7%BB%8F%E6%B5%8E%E5%AD%A6%E6%9C%9F%E6%9C%AB%E8%80%83-%E5%A4%8D%E4%B9%A02.html", { loader: () => import(
    /* webpackChunkName: "learn_经济学_经济学期末考-复习2.html" */
    "./assets/经济学期末考-复习2.html--OPS9G6z.mjs"
  ), meta: { "title": "经济学-复习资料2" } }],
  ["/learn/%E8%8B%B1%E8%AF%AD/", { loader: () => import(
    /* webpackChunkName: "learn_英语_index.html" */
    "./assets/index.html-DXv8MTwX.mjs"
  ), meta: { "title": "英语" } }],
  ["/learn/%E8%8B%B1%E8%AF%AD/%E6%9C%9F%E6%9C%AB%E8%B5%84%E6%96%99%20.html", { loader: () => import(
    /* webpackChunkName: "learn_英语_期末资料 .html" */
    "./assets/期末资料 .html-DpzKvw7m.mjs"
  ), meta: { "title": "英语-复习资料1" } }],
  ["/learn/%E8%BF%91%E4%BB%A3%E5%8F%B2/", { loader: () => import(
    /* webpackChunkName: "learn_近代史_index.html" */
    "./assets/index.html-DRIHAFrE.mjs"
  ), meta: { "title": "近代史" } }],
  ["/learn/%E8%BF%91%E4%BB%A3%E5%8F%B2/%E6%9C%9F%E6%9C%AB%E8%B5%84%E6%96%99%20.html", { loader: () => import(
    /* webpackChunkName: "learn_近代史_期末资料 .html" */
    "./assets/期末资料 .html-CJboebie.mjs"
  ), meta: { "title": "近代史-复习资料" } }],
  ["/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/", { loader: () => import(
    /* webpackChunkName: "novel_Re - 从零开始的异世界生活_index.html" */
    "./assets/index.html-CKDEN_m7.mjs"
  ), meta: { "title": "章节" } }],
  ["/learn/%E8%8B%B1%E8%AF%AD/CET-4/0.html", { loader: () => import(
    /* webpackChunkName: "learn_英语_CET-4_0.html" */
    "./assets/0.html-BkRPAbXT.mjs"
  ), meta: { "title": "CET-4_试卷" } }],
  ["/learn/%E8%8B%B1%E8%AF%AD/CET-4/1.html", { loader: () => import(
    /* webpackChunkName: "learn_英语_CET-4_1.html" */
    "./assets/1.html-DjTp35Y3.mjs"
  ), meta: { "title": "2024/10/9" } }],
  ["/learn/%E8%8B%B1%E8%AF%AD/CET-4/2.html", { loader: () => import(
    /* webpackChunkName: "learn_英语_CET-4_2.html" */
    "./assets/2.html-DMu20B58.mjs"
  ), meta: { "title": "CET-4_作文" } }],
  ["/learn/%E8%8B%B1%E8%AF%AD/CET-4/", { loader: () => import(
    /* webpackChunkName: "learn_英语_CET-4_index.html" */
    "./assets/index.html-B1nT0OzW.mjs"
  ), meta: { "title": "四级复习" } }],
  ["/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E6%8F%92%E5%9B%BE/01-%E6%8F%92%E5%9B%BE.html", { loader: () => import(
    /* webpackChunkName: "novel_Re - 从零开始的异世界生活_第一卷_插图_01-插图.html" */
    "./assets/01-插图.html-CODcnWOT.mjs"
  ), meta: { "title": "插图" } }],
  ["/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E5%BA%8F%E7%AB%A0/02-%E5%BA%8F%E7%AB%A0%20%E5%BC%80%E5%A7%8B%E7%9A%84%E4%BD%99%E9%9F%B5.html", { loader: () => import(
    /* webpackChunkName: "novel_Re - 从零开始的异世界生活_第一卷_序章_02-序章 开始的余韵.html" */
    "./assets/02-序章 开始的余韵.html-BJhb1NaB.mjs"
  ), meta: { "title": "序章 开始的余韵" } }],
  ["/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E5%90%8E%E8%AE%B0/09-%E5%90%8E%E8%AE%B0.html", { loader: () => import(
    /* webpackChunkName: "novel_Re - 从零开始的异世界生活_第一卷_后记_09-后记.html" */
    "./assets/09-后记.html-mUarJznW.mjs"
  ), meta: { "title": "后记" } }],
  ["/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E7%AC%AC%E4%B8%80%E7%AB%A0/03-%E7%AC%AC%E4%B8%80%E7%AB%A0%20%E5%BC%80%E5%A7%8B%E7%9A%84%E7%BB%93%E6%9D%9F.html", { loader: () => import(
    /* webpackChunkName: "novel_Re - 从零开始的异世界生活_第一卷_第一章_03-第一章 开始的结束.html" */
    "./assets/03-第一章 开始的结束.html-C8VP3DCb.mjs"
  ), meta: { "title": "第一章 开始的结束" } }],
  ["/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E7%AC%AC%E4%B8%89%E7%AB%A0/05-%E7%AC%AC%E4%B8%89%E7%AB%A0%20%E7%BB%93%E6%9D%9F%E7%9A%84%E5%BC%80%E5%A7%8B.html", { loader: () => import(
    /* webpackChunkName: "novel_Re - 从零开始的异世界生活_第一卷_第三章_05-第三章 结束的开始.html" */
    "./assets/05-第三章 结束的开始.html-DyvmY7Sb.mjs"
  ), meta: { "title": "第三章 结束的开始" } }],
  ["/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E7%AC%AC%E4%BA%8C%E7%AB%A0/04-%E7%AC%AC%E4%BA%8C%E7%AB%A0%20%E5%A4%AA%E8%BF%9F%E7%9A%84%E6%8A%B5%E6%8A%97.html", { loader: () => import(
    /* webpackChunkName: "novel_Re - 从零开始的异世界生活_第一卷_第二章_04-第二章 太迟的抵抗.html" */
    "./assets/04-第二章 太迟的抵抗.html-CqVSbTSt.mjs"
  ), meta: { "title": "第二章 太迟的抵抗" } }],
  ["/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E7%AC%AC%E4%BA%94%E7%AB%A0/07-%E7%AC%AC%E4%BA%94%E7%AB%A0%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB.html", { loader: () => import(
    /* webpackChunkName: "novel_Re - 从零开始的异世界生活_第一卷_第五章_07-第五章 从零开始的异世界生活.html" */
    "./assets/07-第五章 从零开始的异世界生活.html-B5b4MASE.mjs"
  ), meta: { "title": "第五章 从零开始的异世界生活" } }],
  ["/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E7%AC%AC%E5%9B%9B%E7%AB%A0/06-%E7%AC%AC%E5%9B%9B%E7%AB%A0%20%E7%AC%AC%E5%9B%9B%E6%AC%A1%E7%9A%84%E6%AD%A3%E7%9B%B4.html", { loader: () => import(
    /* webpackChunkName: "novel_Re - 从零开始的异世界生活_第一卷_第四章_06-第四章 第四次的正直.html" */
    "./assets/06-第四章 第四次的正直.html-8N2usvif.mjs"
  ), meta: { "title": "第四章 第四次的正直" } }],
  ["/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E7%BB%88%E7%AB%A0/08-%E7%BB%88%E7%AB%A0%20%E6%9C%88%E4%BA%AE%E9%83%BD%E7%9C%8B%E5%9C%A8%E7%9C%BC%E9%87%8C.html", { loader: () => import(
    /* webpackChunkName: "novel_Re - 从零开始的异世界生活_第一卷_终章_08-终章 月亮都看在眼里.html" */
    "./assets/08-终章 月亮都看在眼里.html-DUYa_wB4.mjs"
  ), meta: { "title": "终章 月亮都看在眼里" } }],
  ["/404.html", { loader: () => import(
    /* webpackChunkName: "404.html" */
    "./assets/404.html-WeeZbg5K.mjs"
  ), meta: { "title": "" } }],
  ["/blog/", { loader: () => import(
    /* webpackChunkName: "blog_index.html" */
    "./assets/index.html-Bpw5mj7U.mjs"
  ), meta: { "title": "博客" } }],
  ["/blog/tags/", { loader: () => import(
    /* webpackChunkName: "blog_tags_index.html" */
    "./assets/index.html-CY4O-zXg.mjs"
  ), meta: { "title": "标签" } }],
  ["/blog/archives/", { loader: () => import(
    /* webpackChunkName: "blog_archives_index.html" */
    "./assets/index.html-BzTyE9bh.mjs"
  ), meta: { "title": "归档" } }],
  ["/blog/categories/", { loader: () => import(
    /* webpackChunkName: "blog_categories_index.html" */
    "./assets/index.html-CzcIbLaT.mjs"
  ), meta: { "title": "分类" } }]
]);
var clientDataSymbol = Symbol(
  ""
);
var useClientData = () => {
  const clientData = inject(clientDataSymbol);
  if (!clientData) {
    throw new Error("useClientData() is called without provider.");
  }
  return clientData;
};
var usePageComponent = () => useClientData().pageComponent;
var usePageData = () => useClientData().pageData;
var usePageFrontmatter = () => useClientData().pageFrontmatter;
var usePageHead = () => useClientData().pageHead;
var usePageLang = () => useClientData().pageLang;
var usePageLayout = () => useClientData().pageLayout;
var useRouteLocale = () => useClientData().routeLocale;
var useRoutePath = () => useClientData().routePath;
var useSiteData = () => useClientData().siteData;
var useSiteLocaleData = () => useClientData().siteLocaleData;
var redirects = shallowRef(redirects$1);
var routes = shallowRef(routes$1);
var resolveRoutePath = (pathname, currentPath) => {
  const normalizedRoutePath = normalizeRoutePath(pathname, currentPath);
  if (routes.value[normalizedRoutePath]) return normalizedRoutePath;
  const encodedRoutePath = encodeURI(normalizedRoutePath);
  if (routes.value[encodedRoutePath]) {
    return encodedRoutePath;
  }
  const redirectedRoutePath = redirects.value[normalizedRoutePath] || redirects.value[encodedRoutePath];
  if (redirectedRoutePath) {
    return redirectedRoutePath;
  }
  return normalizedRoutePath;
};
var resolveRoute = (path, currentPath) => {
  const { pathname, hashAndQueries } = splitPath(path);
  const routePath = resolveRoutePath(pathname, currentPath);
  const routeFullPath = routePath + hashAndQueries;
  if (!routes.value[routePath]) {
    return {
      ...routes.value["/404.html"],
      path: routeFullPath,
      notFound: true
    };
  }
  return {
    ...routes.value[routePath],
    path: routeFullPath,
    notFound: false
  };
};
var resolveRouteFullPath = (path, currentPath) => {
  const { pathname, hashAndQueries } = splitPath(path);
  return resolveRoutePath(pathname, currentPath) + hashAndQueries;
};
var guardEvent = (event2) => {
  if (event2.metaKey || event2.altKey || event2.ctrlKey || event2.shiftKey) return;
  if (event2.defaultPrevented) return;
  if (event2.button !== void 0 && event2.button !== 0) return;
  if (event2.currentTarget) {
    const target = event2.currentTarget.getAttribute("target");
    if (target == null ? void 0 : target.match(/\b_blank\b/i)) return;
  }
  event2.preventDefault();
  return true;
};
var RouteLink = defineComponent({
  name: "RouteLink",
  props: {
    /**
     * The route path to link to
     */
    to: {
      type: String,
      required: true
    },
    /**
     * Whether the link is active to have an active class
     *
     * Notice that the active status is not automatically determined according to the current route.
     */
    active: Boolean,
    /**
     * The class to add when the link is active
     */
    activeClass: {
      type: String,
      default: "route-link-active"
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const router = useRouter();
    const route = useRoute();
    const path = computed(
      () => props.to.startsWith("#") || props.to.startsWith("?") ? props.to : `${"/"}${resolveRouteFullPath(props.to, route.path).substring(1)}`
    );
    return () => h$1(
      "a",
      {
        class: ["route-link", { [props.activeClass]: props.active }],
        href: path.value,
        onClick: (event2 = {}) => {
          if (guardEvent(event2)) {
            void router.push(props.to).catch();
          }
        }
      },
      slots.default()
    );
  }
});
defineComponent({
  name: "AutoLink",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const config2 = toRef(props, "config");
    const route = useRoute();
    const siteData2 = useSiteData();
    const withProtocol = computed(() => isLinkWithProtocol(config2.value.link));
    const linkTarget = computed(
      () => config2.value.target || (withProtocol.value ? "_blank" : void 0)
    );
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const isInternal = computed(
      () => !withProtocol.value && !isBlankTarget.value
    );
    const linkRel = computed(
      () => config2.value.rel || (isBlankTarget.value ? "noopener noreferrer" : null)
    );
    const linkAriaLabel = computed(
      () => config2.value.ariaLabel ?? config2.value.text
    );
    const shouldBeActiveInSubpath = computed(() => {
      if (config2.value.exact) return false;
      const localePaths = Object.keys(siteData2.value.locales);
      return localePaths.length ? (
        // Check all the locales
        localePaths.every((key) => key !== config2.value.link)
      ) : (
        // Check root
        config2.value.link !== "/"
      );
    });
    const isActive2 = computed(() => {
      if (!isInternal.value) return false;
      if (config2.value.activeMatch) {
        return (config2.value.activeMatch instanceof RegExp ? config2.value.activeMatch : new RegExp(config2.value.activeMatch, "u")).test(route.path);
      }
      if (shouldBeActiveInSubpath.value) {
        return route.path.startsWith(config2.value.link);
      }
      return route.path === config2.value.link;
    });
    return () => {
      const { before, after, default: defaultSlot } = slots;
      const content = (defaultSlot == null ? void 0 : defaultSlot(config2.value)) ?? [
        before == null ? void 0 : before(config2.value),
        config2.value.text,
        after == null ? void 0 : after(config2.value)
      ];
      return isInternal.value ? h$1(
        RouteLink,
        {
          "class": "auto-link",
          "to": config2.value.link,
          "active": isActive2.value,
          "aria-label": linkAriaLabel.value
        },
        () => content
      ) : h$1(
        "a",
        {
          "class": "auto-link external-link",
          "href": config2.value.link,
          "aria-label": linkAriaLabel.value,
          "rel": linkRel.value,
          "target": linkTarget.value
        },
        content
      );
    };
  }
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
    };
  }
});
var Content$1 = defineComponent({
  name: "Content",
  props: {
    path: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const pageComponent = usePageComponent();
    const ContentComponent = computed(() => {
      if (!props.path) return pageComponent.value;
      const route = resolveRoute(props.path);
      return defineAsyncComponent(
        async () => route.loader().then(({ comp }) => comp)
      );
    });
    return () => h$1(ContentComponent.value);
  }
});
var LAYOUT_NAME_DEFAULT = "Layout";
var LANG_DEFAULT = "en-US";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (pageHeadTitle, pageFrontmatter, siteLocaleDate) => {
    const description = isString(pageFrontmatter.description) ? pageFrontmatter.description : siteLocaleDate.description;
    const head = [
      ...Array.isArray(pageFrontmatter.head) ? pageFrontmatter.head : [],
      ...siteLocaleDate.head,
      ["title", {}, pageHeadTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (pageData, siteLocaleDate) => [pageData.title, siteLocaleDate.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (pageData, siteLocaleData) => pageData.lang || siteLocaleData.lang || LANG_DEFAULT,
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (pageData, layouts) => {
    const layoutName = isString(pageData.frontmatter.layout) ? pageData.frontmatter.layout : LAYOUT_NAME_DEFAULT;
    if (!layouts[layoutName]) {
      throw new Error(`[vuepress] Cannot resolve layout: ${layoutName}`);
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, decodeURI(routePath)),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: ({ base, locales: locales2, ...siteData2 }, routeLocale) => {
    var _a;
    return {
      ...siteData2,
      ...locales2[routeLocale],
      head: [
        // when merging head, the locales head should be placed before root head
        // to get higher priority
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- unsafe indexed access
        ...((_a = locales2[routeLocale]) == null ? void 0 : _a.head) ?? [],
        ...siteData2.head
      ]
    };
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url)) return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
var config_default$3 = {};
const clientConfig0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config_default$3
}, Symbol.toStringTag, { value: "Module" }));
var contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f2) => f2 !== fn);
  });
}
function runCallbacks(lifeCircleType) {
  contentUpdatedCallbacks.forEach((fn) => fn(lifeCircleType));
}
var Content = defineComponent({
  name: "Content",
  props: {
    path: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const pageComponent = usePageComponent();
    const ContentComponent = computed(() => {
      if (!props.path)
        return pageComponent.value;
      const route = resolveRoute(props.path);
      return defineAsyncComponent(() => route.loader().then(({ comp }) => comp));
    });
    return () => h$1(ContentComponent.value, {
      onVnodeMounted: () => runCallbacks({ mounted: true }),
      onVnodeUpdated: () => runCallbacks({ updated: true }),
      onVnodeBeforeUnmount: () => runCallbacks({ beforeUnmount: true })
    });
  }
});
var config_default$2 = defineClientConfig({
  enhance({ app }) {
    if (app._context.components.Content)
      delete app._context.components.Content;
    app.component("Content", Content);
  }
});
const clientConfig1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config_default$2
}, Symbol.toStringTag, { value: "Module" }));
const LoadingIcon = ({ size = 48, stroke = 4, wrapper = true, height = 2 * size }) => {
  const icon = h$1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    preserveAspectRatio: "xMidYMid",
    viewBox: "25 25 50 50"
  }, [
    h$1("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      dur: "2s",
      keyTimes: "0;1",
      repeatCount: "indefinite",
      values: "0;360"
    }),
    h$1("circle", {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none",
      "stroke": "currentColor",
      "stroke-width": stroke,
      "stroke-linecap": "round"
    }, [
      h$1("animate", {
        attributeName: "stroke-dasharray",
        dur: "1.5s",
        keyTimes: "0;0.5;1",
        repeatCount: "indefinite",
        values: "1,200;90,200;1,200"
      }),
      h$1("animate", {
        attributeName: "stroke-dashoffset",
        dur: "1.5s",
        keyTimes: "0;0.5;1",
        repeatCount: "indefinite",
        values: "0;-35px;-125px"
      })
    ])
  ]);
  return wrapper ? h$1("div", {
    class: "loading-icon-wrapper",
    style: `display:flex;align-items:center;justify-content:center;height:${height}px`
  }, icon) : icon;
};
LoadingIcon.displayName = "LoadingIcon";
const hasGlobalComponent = (name, app) => {
  var _a;
  const globalComponents2 = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.components;
  if (!globalComponents2)
    return false;
  return name in globalComponents2 || camelize(name) in globalComponents2 || capitalize(camelize(name)) in globalComponents2;
};
const wait = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});
const useLocaleConfig = (localesConfig) => {
  const routeLocale = useRouteLocale();
  return computed(() => localesConfig[routeLocale.value] ?? {});
};
const isDef = (val) => typeof val !== "undefined";
const { isArray } = Array;
const startsWith = (str, prefix) => isString(str) && str.startsWith(prefix);
const isLinkAbsolute = (test) => startsWith(test, "/");
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const addClass = (element, name) => {
  element.classList.add(name);
};
const removeClass = (element, name) => {
  element.classList.remove(name);
};
const removeElement = (element) => {
  var _a;
  (_a = element == null ? void 0 : element.parentNode) == null ? void 0 : _a.removeChild(element);
};
const clamp = (n2, min, max) => {
  if (n2 < min)
    return min;
  if (n2 > max)
    return max;
  return n2;
};
const toBarPercent = (n2) => (-1 + n2) * 100;
const queue = /* @__PURE__ */ (() => {
  const pending = [];
  const nextStep = () => {
    const fn = pending.shift();
    if (fn) {
      fn(nextStep);
    }
  };
  return (fn) => {
    pending.push(fn);
    if (pending.length === 1)
      nextStep();
  };
})();
const camelCase = (content) => content.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (_, letter) => letter.toUpperCase());
const addStyle = /* @__PURE__ */ (() => {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  const getVendorProp = (name) => {
    const { style } = document.body;
    if (name in style)
      return name;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let index = cssPrefixes.length;
    while (index--) {
      const vendorName = `${cssPrefixes[index]}${capName}`;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  };
  const getStyleProp = (name) => {
    const finalizedName = camelCase(name);
    return cssProps[finalizedName] ?? (cssProps[finalizedName] = getVendorProp(finalizedName));
  };
  const applyCss = (element, prop, value) => {
    element.style[getStyleProp(prop)] = value;
  };
  return (element, properties) => {
    for (const prop in properties) {
      const value = properties[prop];
      if (Object.hasOwn(properties, prop) && isDef(value))
        applyCss(element, prop, value);
    }
  };
})();
const SETTINGS = {
  minimum: 0.08,
  easing: "ease",
  speed: 200,
  trickle: true,
  trickleRate: 0.02,
  trickleSpeed: 800,
  barSelector: '[role="bar"]',
  parent: "body",
  template: '<div class="bar" role="bar"></div>'
};
const nprogress = {
  percent: null,
  isRendered: () => Boolean(document.getElementById("nprogress")),
  set: (progress) => {
    const { speed, easing } = SETTINGS;
    const inProgress = nprogress.isStarted();
    const newPercent = clamp(progress, SETTINGS.minimum, 1);
    nprogress.percent = newPercent === 1 ? null : newPercent;
    const nprogressElement = nprogress.render(!inProgress);
    const barElement = nprogressElement.querySelector(SETTINGS.barSelector);
    nprogressElement.offsetWidth;
    queue((next) => {
      addStyle(barElement, {
        transform: `translate3d(${toBarPercent(newPercent)}%,0,0)`,
        transition: `all ${speed}ms ${easing}`
      });
      if (newPercent === 1) {
        addStyle(nprogressElement, {
          transition: "none",
          opacity: "1"
        });
        nprogressElement.offsetWidth;
        setTimeout(() => {
          addStyle(nprogressElement, {
            transition: `all ${speed}ms linear`,
            opacity: "0"
          });
          setTimeout(() => {
            nprogress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => {
          next();
        }, speed);
      }
    });
    return nprogress;
  },
  isStarted: () => typeof nprogress.percent === "number",
  start: () => {
    if (!nprogress.percent)
      nprogress.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress.percent)
          return;
        nprogress.trickle();
        work();
      }, SETTINGS.trickleSpeed);
    };
    work();
    return nprogress;
  },
  done: (force) => {
    if (!force && !nprogress.percent)
      return nprogress;
    return nprogress.increase(0.3 + 0.5 * Math.random()).set(1);
  },
  increase: (amount) => {
    let { percent } = nprogress;
    if (!percent) {
      return nprogress.start();
    }
    percent = clamp(percent + (typeof amount === "number" ? amount : (1 - percent) * clamp(Math.random() * percent, 0.1, 0.95)), 0, 0.994);
    return nprogress.set(percent);
  },
  trickle: () => nprogress.increase(Math.random() * SETTINGS.trickleRate),
  render: (fromStart) => {
    if (nprogress.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const nprogressElement = document.createElement("div");
    nprogressElement.id = "nprogress";
    nprogressElement.innerHTML = SETTINGS.template;
    const barElement = nprogressElement.querySelector(SETTINGS.barSelector);
    const parentElement = document.querySelector(SETTINGS.parent);
    const percent = fromStart ? "-100" : toBarPercent(nprogress.percent ?? 0);
    addStyle(barElement, {
      transition: "all 0 linear",
      transform: `translate3d(${percent}%,0,0)`
    });
    if (parentElement) {
      if (parentElement !== document.body) {
        addClass(parentElement, "nprogress-custom-parent");
      }
      parentElement.appendChild(nprogressElement);
    }
    return nprogressElement;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(SETTINGS.parent), "nprogress-custom-parent");
    removeElement(document.getElementById("nprogress"));
  }
};
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress.done();
    });
  });
};
const config$2 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const clientConfig2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$2
}, Symbol.toStringTag, { value: "Module" }));
const m = ref({}), g = Symbol(""), f$2 = () => inject(g), O$1 = (e) => {
  e.provide(g, m);
}, y = '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>', S$1 = (e) => isString(e) ? Array.from(document.querySelectorAll(e)) : e.map((t2) => Array.from(document.querySelectorAll(t2))).flat(), p$2 = (e) => new Promise((t2, a2) => {
  e.complete ? t2({ type: "image", element: e, src: e.src, width: e.naturalWidth, height: e.naturalHeight, alt: e.alt, msrc: e.src }) : (e.onload = () => {
    t2(p$2(e));
  }, e.onerror = () => {
    a2();
  });
}), b = (e, { download: t2 = true, fullscreen: a2 = true } = {}) => {
  e.on("uiRegister", () => {
    if (e.ui.registerElement({ name: "bulletsIndicator", className: "photo-swipe-bullets-indicator", appendTo: "wrapper", onInit: (o) => {
      const s2 = [];
      let l2 = -1;
      for (let r2 = 0; r2 < e.getNumItems(); r2++) {
        const i2 = document.createElement("div");
        i2.className = "photo-swipe-bullet", i2.onclick = (n2) => {
          e.goTo(s2.indexOf(n2.target));
        }, s2.push(i2), o.appendChild(i2);
      }
      e.on("change", () => {
        l2 >= 0 && s2[l2].classList.remove("active"), s2[e.currIndex].classList.add("active"), l2 = e.currIndex;
      });
    } }), a2) {
      const { isSupported: o, toggle: s2 } = useFullscreen();
      o.value && e.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
        s2();
      } });
    }
    t2 && e.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (o) => {
      o.setAttribute("download", ""), o.setAttribute("target", "_blank"), o.setAttribute("rel", "noopener"), e.on("change", () => {
        o.setAttribute("href", e.currSlide.data.src);
      });
    } });
  });
}, k$1 = (e, { scrollToClose: t2 = true, download: a2 = true, fullscreen: o = true, ...s2 }) => import("photoswipe").then(({ default: l2 }) => {
  let r2 = null;
  const i2 = e.map((n2) => ({ html: y, element: n2, msrc: n2.src }));
  return e.forEach((n2, u2) => {
    const c = () => {
      r2 == null ? void 0 : r2.destroy(), r2 = new l2({ preloaderDelay: 0, showHideAnimationType: "zoom", ...s2, dataSource: i2, index: u2, ...t2 ? { closeOnVerticalDrag: true, wheelToZoom: false } : {} }), b(r2, { download: a2, fullscreen: o }), r2.addFilter("thumbEl", () => n2), r2.addFilter("placeholderSrc", () => n2.src), r2.init();
    };
    n2.getAttribute("photo-swipe") || (n2.style.cursor = "zoom-in", n2.addEventListener("click", () => {
      c();
    }), n2.addEventListener("keypress", ({ key: d }) => {
      d === "Enter" && c();
    }), n2.setAttribute("photo-swipe", "")), p$2(n2).then((d) => {
      i2.splice(u2, 1, d), r2 == null ? void 0 : r2.refreshSlideContent(u2);
    });
  }), t2 ? useEventListener("wheel", () => {
    r2 == null ? void 0 : r2.close();
  }) : () => {
  };
}), B = ({ selector: e, locales: t2, delay: a2 = 500, download: o = true, fullscreen: s2 = true, scrollToClose: l2 = true }) => {
  const r2 = f$2(), i2 = useLocaleConfig(t2), n2 = usePageData(), u2 = usePageFrontmatter();
  let c = null;
  const d = () => {
    const { photoSwipe: h2 } = u2.value;
    h2 !== false && nextTick$1().then(() => wait(a2)).then(async () => {
      const C2 = isString(h2) ? h2 : e;
      c = await k$1(S$1(C2), { ...r2.value, ...i2.value, download: o, fullscreen: s2, scrollToClose: l2 });
    });
  };
  onMounted(() => {
    d(), watch(() => [n2.value.path, r2.value], () => {
      c == null ? void 0 : c(), d();
    });
  }), onUnmounted(() => {
    c == null ? void 0 : c();
  });
};
var define_PS_LOCALES_default = { "/": { closeTitle: "关闭", downloadTitle: "下载图片", fullscreenTitle: "切换全屏", zoomTitle: "缩放", arrowPrevTitle: "上一个 (左箭头)", arrowNextTitle: "下一个 (右箭头)" } };
const t = ".plume-content > img, .plume-content :not(a) > img", r = define_PS_LOCALES_default, p$1 = 300, S = true, l$1 = true, n$3 = true;
var s$1 = defineClientConfig({ enhance: ({ app: _ }) => {
  O$1(_);
}, setup: () => {
  B({ selector: t, delay: p$1, locales: r, download: S, fullscreen: l$1, scrollToClose: n$3 });
} });
const clientConfig3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: s$1
}, Symbol.toStringTag, { value: "Module" }));
const searchIndex = { "/": () => import("./assets/searchBox-default-CPw0b48G.mjs") };
var defaultLocales = {
  "/": {
    placeholder: "Search",
    resetButtonTitle: "Reset search",
    backButtonTitle: "Close search",
    noResultsText: "No results for",
    footer: {
      selectText: "to select",
      selectKeyAriaLabel: "enter",
      navigateText: "to navigate",
      navigateUpKeyAriaLabel: "up arrow",
      navigateDownKeyAriaLabel: "down arrow",
      closeText: "to close",
      closeKeyAriaLabel: "escape"
    }
  }
};
function useLocale(locales2) {
  const localesRef = toRef(locales2);
  const routeLocale = useRouteLocale();
  const locale = computed(() => localesRef.value[routeLocale.value] ?? defaultLocales[routeLocale.value] ?? defaultLocales["/"]);
  return locale;
}
var searchIndexData = shallowRef(searchIndex);
function useSearchIndex() {
  return searchIndexData;
}
const _sfc_main$1x = /* @__PURE__ */ defineComponent({
  __name: "SearchButton",
  props: {
    locales: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const locale = useLocale(toRef(props.locales));
    const __returned__ = { props, locale };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_ssrRender$1x(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: "mini-search mini-search-button",
    "aria-label": $setup.locale.placeholder
  }, _attrs))}><span class="mini-search-button-container"><svg class="mini-search-search-icon" width="20" height="20" viewBox="0 0 20 20" aria-label="search icon"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="mini-search-button-placeholder">${ssrInterpolate($setup.locale.placeholder)}</span></span><span class="mini-search-button-keys"><kbd class="mini-search-button-key"></kbd><kbd class="mini-search-button-key">K</kbd></span></button>`);
}
const _sfc_setup$1x = _sfc_main$1x.setup;
_sfc_main$1x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress-plume/plugin-search/lib/client/components/SearchButton.vue");
  return _sfc_setup$1x ? _sfc_setup$1x(props, ctx) : void 0;
};
const SearchButton = /* @__PURE__ */ _export_sfc(_sfc_main$1x, [["ssrRender", _sfc_ssrRender$1x], ["__file", "SearchButton.vue"]]);
const _sfc_main$1w = /* @__PURE__ */ defineComponent({
  __name: "Search",
  props: {
    locales: {},
    options: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const SearchBox = defineAsyncComponent(() => import("./assets/SearchBox-BYVJykXx.mjs"));
    const showSearch = ref(false);
    onKeyStroke("k", (event2) => {
      if (event2.ctrlKey || event2.metaKey) {
        event2.preventDefault();
        showSearch.value = true;
      }
    });
    onKeyStroke("/", (event2) => {
      if (!isEditingContent(event2)) {
        event2.preventDefault();
        showSearch.value = true;
      }
    });
    function isEditingContent(event2) {
      const element = event2.target;
      const tagName = element.tagName;
      return element.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";
    }
    const __returned__ = { SearchBox, showSearch, isEditingContent, SearchButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-wrapper" }, _attrs))} data-v-97535d1e>`);
  if ($setup.showSearch) {
    _push(ssrRenderComponent($setup["SearchBox"], {
      locales: $props.locales,
      options: $props.options,
      onClose: ($event) => $setup.showSearch = false
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div id="local-search" data-v-97535d1e>`);
  _push(ssrRenderComponent($setup["SearchButton"], {
    locales: $props.locales,
    onClick: ($event) => $setup.showSearch = true
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1w = _sfc_main$1w.setup;
_sfc_main$1w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress-plume/plugin-search/lib/client/components/Search.vue");
  return _sfc_setup$1w ? _sfc_setup$1w(props, ctx) : void 0;
};
const Search = /* @__PURE__ */ _export_sfc(_sfc_main$1w, [["ssrRender", _sfc_ssrRender$1w], ["__scopeId", "data-v-97535d1e"], ["__file", "Search.vue"]]);
var define_SEARCH_LOCALES_default = { "/": { placeholder: "搜索文档", resetButtonTitle: "重置搜索", backButtonTitle: "关闭", noResultsText: "无搜索结果：", footer: { selectText: "选择", selectKeyAriaLabel: "输入", navigateText: "切换", navigateUpKeyAriaLabel: "向上", navigateDownKeyAriaLabel: "向下", closeText: "关闭", closeKeyAriaLabel: "退出" } } };
var define_SEARCH_OPTIONS_default = {};
var locales = define_SEARCH_LOCALES_default;
var searchOptions = define_SEARCH_OPTIONS_default;
var config_default$1 = defineClientConfig({
  enhance({ app }) {
    app.component("SearchBox", (props) => h$1(Search, {
      locales,
      options: searchOptions,
      ...props
    }));
  }
});
const clientConfig4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config_default$1
}, Symbol.toStringTag, { value: "Module" }));
function useCollapsedLines({
  selector = 'div[class*="language-"] > .collapsed-lines'
} = {}) {
  useEventListener("click", (e) => {
    const el = e.target;
    if (el.matches(selector)) {
      const parent = el.parentElement;
      if (parent == null ? void 0 : parent.classList.toggle("collapsed")) {
        parent.scrollIntoView({ block: "center", behavior: "instant" });
      }
    }
  });
}
const client$1 = {
  setup() {
    useCollapsedLines();
  }
};
const clientConfig5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: client$1
}, Symbol.toStringTag, { value: "Module" }));
const clientConfig6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const config$1 = {
  enhance: ({ app }) => {
  }
};
const clientConfig7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$1
}, Symbol.toStringTag, { value: "Module" }));
const TAB_STORE_NAME = "VUEPRESS_TAB_STORE";
const _sfc_main$1v = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  props: {
    id: {},
    tabId: { default: "" },
    active: { default: 0 },
    data: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const tabStore = useStorage(TAB_STORE_NAME, {});
    const activeIndex = ref(props.active);
    const tabRefs = shallowRef([]);
    function updateStore() {
      if (props.tabId)
        tabStore.value[props.tabId] = props.data[activeIndex.value].id;
    }
    function activateNext(index = activeIndex.value) {
      activeIndex.value = index < tabRefs.value.length - 1 ? index + 1 : 0;
      tabRefs.value[activeIndex.value].focus();
    }
    function activatePrev(index = activeIndex.value) {
      activeIndex.value = index > 0 ? index - 1 : tabRefs.value.length - 1;
      tabRefs.value[activeIndex.value].focus();
    }
    function keyboardHandler(event2, index) {
      if (event2.key === " " || event2.key === "Enter") {
        event2.preventDefault();
        activeIndex.value = index;
      } else if (event2.key === "ArrowRight") {
        event2.preventDefault();
        activateNext();
      } else if (event2.key === "ArrowLeft") {
        event2.preventDefault();
        activatePrev();
      }
      updateStore();
    }
    function getInitialIndex() {
      if (props.tabId) {
        const valueIndex = props.data.findIndex(
          ({ id }) => tabStore.value[props.tabId] === id
        );
        if (valueIndex !== -1)
          return valueIndex;
      }
      return props.active;
    }
    onMounted(() => {
      activeIndex.value = getInitialIndex();
      watch(
        () => tabStore.value[props.tabId],
        (newValue, oldValue) => {
          if (props.tabId && newValue !== oldValue) {
            const index = props.data.findIndex(({ id }) => id === newValue);
            if (index !== -1)
              activeIndex.value = index;
          }
        }
      );
    });
    function onTabNavClick(index) {
      activeIndex.value = index;
      updateStore();
    }
    const __returned__ = { props, TAB_STORE_NAME, tabStore, activeIndex, tabRefs, updateStore, activateNext, activatePrev, keyboardHandler, getInitialIndex, onTabNavClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1v(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.data.length) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-tabs" }, _attrs))}><div class="vp-tabs-nav" role="tablist"><!--[-->`);
    ssrRenderList($props.data, (item, index) => {
      _push(`<button class="${ssrRenderClass([{ active: index === $setup.activeIndex }, "vp-tab-nav"])}" type="button" role="tab"${ssrRenderAttr("aria-controls", `tab-${$props.id}-${index}`)}${ssrRenderAttr("aria-selected", index === $setup.activeIndex)}>`);
      ssrRenderSlot(_ctx.$slots, `title${index}`, {
        value: item.id,
        isActive: index === $setup.activeIndex
      }, null, _push, _parent);
      _push(`</button>`);
    });
    _push(`<!--]--></div><!--[-->`);
    ssrRenderList($props.data, (item, index) => {
      _push(`<div${ssrRenderAttr("id", `tab-${$props.id}-${index}`)} class="${ssrRenderClass([{ active: index === $setup.activeIndex }, "vp-tab"])}" role="tabpanel"${ssrRenderAttr("aria-expanded", index === $setup.activeIndex)}><div class="vp-tab-title">`);
      ssrRenderSlot(_ctx.$slots, `title${index}`, {
        value: item.id,
        isActive: index === $setup.activeIndex
      }, null, _push, _parent);
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, `tab${index}`, {
        value: item.id,
        isActive: index === $setup.activeIndex
      }, null, _push, _parent);
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1v = _sfc_main$1v.setup;
_sfc_main$1v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue");
  return _sfc_setup$1v ? _sfc_setup$1v(props, ctx) : void 0;
};
const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$1v, [["ssrRender", _sfc_ssrRender$1v], ["__file", "Tabs.vue"]]);
const CODE_TAB_STORE_NAME = "VUEPRESS_CODE_TAB_STORE";
const _sfc_main$1u = /* @__PURE__ */ defineComponent({
  __name: "CodeTabs",
  props: {
    id: {},
    tabId: { default: "" },
    active: { default: 0 },
    data: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const codeTabStore = useStorage(CODE_TAB_STORE_NAME, {});
    const activeIndex = ref(props.active);
    const tabRefs = shallowRef([]);
    function updateStore() {
      if (props.tabId)
        codeTabStore.value[props.tabId] = props.data[activeIndex.value].id;
    }
    function activateNext(index = activeIndex.value) {
      activeIndex.value = index < tabRefs.value.length - 1 ? index + 1 : 0;
      tabRefs.value[activeIndex.value].focus();
    }
    function activatePrev(index = activeIndex.value) {
      activeIndex.value = index > 0 ? index - 1 : tabRefs.value.length - 1;
      tabRefs.value[activeIndex.value].focus();
    }
    function keyboardHandler(event2, index) {
      if (event2.key === " " || event2.key === "Enter") {
        event2.preventDefault();
        activeIndex.value = index;
      } else if (event2.key === "ArrowRight") {
        event2.preventDefault();
        activateNext();
      } else if (event2.key === "ArrowLeft") {
        event2.preventDefault();
        activatePrev();
      }
      if (props.tabId)
        codeTabStore.value[props.tabId] = props.data[activeIndex.value].id;
    }
    function getInitialIndex() {
      if (props.tabId) {
        const valueIndex = props.data.findIndex(
          ({ id }) => codeTabStore.value[props.tabId] === id
        );
        if (valueIndex !== -1)
          return valueIndex;
      }
      return props.active;
    }
    onMounted(() => {
      activeIndex.value = getInitialIndex();
      watch(
        () => codeTabStore.value[props.tabId],
        (newValue, oldValue) => {
          if (props.tabId && newValue !== oldValue) {
            const index = props.data.findIndex(({ id }) => id === newValue);
            if (index !== -1)
              activeIndex.value = index;
          }
        }
      );
    });
    function onTabNavClick(index) {
      activeIndex.value = index;
      updateStore();
    }
    const __returned__ = { props, CODE_TAB_STORE_NAME, codeTabStore, activeIndex, tabRefs, updateStore, activateNext, activatePrev, keyboardHandler, getInitialIndex, onTabNavClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1u(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.data.length) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-code-tabs" }, _attrs))}><div class="vp-code-tabs-nav" role="tablist"><!--[-->`);
    ssrRenderList($props.data, (item, index) => {
      _push(`<button class="${ssrRenderClass([{ active: index === $setup.activeIndex }, "vp-code-tab-nav"])}" type="button" role="tab"${ssrRenderAttr("aria-controls", `codetab-${$props.id}-${index}`)}${ssrRenderAttr("aria-selected", index === $setup.activeIndex)}>`);
      ssrRenderSlot(_ctx.$slots, `title${index}`, {
        value: item.id,
        isActive: index === $setup.activeIndex
      }, null, _push, _parent);
      _push(`</button>`);
    });
    _push(`<!--]--></div><!--[-->`);
    ssrRenderList($props.data, (item, index) => {
      _push(`<div${ssrRenderAttr("id", `codetab-${$props.id}-${index}`)} class="${ssrRenderClass([{ active: index === $setup.activeIndex }, "vp-code-tab"])}" role="tabpanel"${ssrRenderAttr("aria-expanded", index === $setup.activeIndex)}><div class="vp-code-tab-title">`);
      ssrRenderSlot(_ctx.$slots, `title${index}`, {
        value: item.id,
        isActive: index === $setup.activeIndex
      }, null, _push, _parent);
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, `tab${index}`, {
        value: item.id,
        isActive: index === $setup.activeIndex
      }, null, _push, _parent);
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1u = _sfc_main$1u.setup;
_sfc_main$1u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue");
  return _sfc_setup$1u ? _sfc_setup$1u(props, ctx) : void 0;
};
const CodeTabs = /* @__PURE__ */ _export_sfc(_sfc_main$1u, [["ssrRender", _sfc_ssrRender$1u], ["__file", "CodeTabs.vue"]]);
const _sfc_main$1t = /* @__PURE__ */ defineComponent({
  __name: "Plot",
  props: {
    mask: {},
    color: {},
    trigger: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const matter = usePageFrontmatter();
    const options = computed(() => {
      const plot = {};
      return {
        trigger: props.trigger || matter.value.plotTrigger || plot.trigger || "hover",
        color: props.color || plot.color,
        mask: props.mask || plot.mask
      };
    });
    const styles = computed(() => {
      const plot = options.value;
      if (!plot.color && !plot.mask)
        return {};
      const style = {};
      if (plot.color) {
        if (typeof plot.color === "string") {
          style["--vp-c-plot-light"] = plot.color;
        } else {
          style["--vp-c-plot-light"] = plot.color.light;
          style["--vp-c-plot-dark"] = plot.color.dark;
        }
      }
      if (plot.mask) {
        if (typeof plot.mask === "string") {
          style["--vp-c-bg-plot-light"] = plot.mask;
        } else {
          style["--vp-c-bg-plot-light"] = plot.mask.light;
          style["--vp-c-bg-plot-dark"] = plot.mask.dark;
        }
      }
      return style;
    });
    const isMobile = useMediaQuery("(max-width: 768px)");
    const active2 = ref(false);
    const el = shallowRef();
    onClickOutside(el, () => {
      if (options.value.trigger === "click" || isMobile.value)
        active2.value = false;
    });
    function onClick2() {
      if (props.trigger === "click" || isMobile.value)
        active2.value = !active2.value;
    }
    const __returned__ = { props, matter, options, styles, isMobile, active: active2, el, onClick: onClick2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1t(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({
    ref: "el",
    class: ["vp-plot", { hover: $setup.options.trigger !== "click", active: $setup.active }],
    style: $setup.styles
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$1t = _sfc_main$1t.setup;
_sfc_main$1t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue");
  return _sfc_setup$1t ? _sfc_setup$1t(props, ctx) : void 0;
};
const Plot = /* @__PURE__ */ _export_sfc(_sfc_main$1t, [["ssrRender", _sfc_ssrRender$1t], ["__file", "Plot.vue"]]);
const _sfc_main$1s = /* @__PURE__ */ defineComponent({
  __name: "FileTreeItem",
  props: {
    type: {},
    expanded: { type: Boolean },
    empty: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const active2 = ref(!!props.expanded);
    const el = ref();
    function toggle(e) {
      const target = e.target;
      if (target.matches(".comment") || e.currentTarget === target)
        return;
      active2.value = !active2.value;
    }
    onMounted(() => {
      var _a;
      if (!el.value || props.type !== "folder")
        return;
      (_a = el.value.querySelector(".tree-node.folder")) == null ? void 0 : _a.addEventListener(
        "click",
        toggle
      );
    });
    onUnmounted(() => {
      var _a;
      if (!el.value || props.type !== "folder")
        return;
      (_a = el.value.querySelector(".tree-node.folder")) == null ? void 0 : _a.removeEventListener(
        "click",
        toggle
      );
    });
    const __returned__ = { props, active: active2, el, toggle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${ssrRenderAttrs(mergeProps({
    ref: "el",
    class: ["file-tree-item", { expanded: $setup.active }]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if ($setup.props.type === "folder" && $setup.props.empty) {
    _push(`<ul><li class="file-tree-item"><span class="tree-node file"><span class="name">…</span></span></li></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li>`);
}
const _sfc_setup$1s = _sfc_main$1s.setup;
_sfc_main$1s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue");
  return _sfc_setup$1s ? _sfc_setup$1s(props, ctx) : void 0;
};
const FileTreeItem = /* @__PURE__ */ _export_sfc(_sfc_main$1s, [["ssrRender", _sfc_ssrRender$1s], ["__file", "FileTreeItem.vue"]]);
const config = defineClientConfig({
  enhance({ router, app }) {
    app.component("Tabs", Tabs);
    app.component("CodeTabs", CodeTabs);
    app.component("Plot", Plot);
    app.component("FileTreeItem", FileTreeItem);
  }
});
const clientConfig8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config
}, Symbol.toStringTag, { value: "Module" }));
const clientConfig9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var define_COMMENT_OPTIONS_default = { provider: "Giscus", comment: true, repo: "unerge/vuepress-starter", repoId: "R_kgDOM13P7A", category: "Ideas", categoryId: "DIC_kwDOM13P7M4Cj96G" };
const s = define_COMMENT_OPTIONS_default, n$2 = ref(s), f$1 = Symbol(""), i$2 = () => inject(f$1), C = i$2, k = (e) => {
  e.provide(f$1, n$2);
};
const n$1 = ["ar", "ca", "da", "de", "en", "eo", "es", "fa", "fr", "he", "id", "it", "ja", "ko", "nl", "pl", "pt", "ro", "ru", "th", "tr", "uk", "uz", "vi", "zh-CN", "zh-TW"];
var h = defineComponent({ name: "GiscusComment", props: { identifier: { type: String, required: true }, darkmode: Boolean }, setup(r2) {
  const e = C(), a2 = usePageLang(), l2 = computed(() => !!(e.value.repo && e.value.repoId && e.value.category && e.value.categoryId)), i2 = ref(false), p2 = computed(() => {
    if (n$1.includes(a2.value)) return a2.value;
    const u2 = a2.value.split("-")[0];
    return n$1.includes(u2) ? u2 : "en";
  }), s2 = computed(() => ({ repo: e.value.repo, repoId: e.value.repoId, category: e.value.category, categoryId: e.value.categoryId, lang: p2.value, theme: r2.darkmode ? e.value.darkTheme || "dark" : e.value.lightTheme || "light", mapping: e.value.mapping || "pathname", term: r2.identifier, inputPosition: e.value.inputPosition || "top", reactionsEnabled: e.value.reactionsEnabled === false ? "0" : "1", strict: e.value.strict === false ? "0" : "1", loading: e.value.lazyLoading === false ? "eager" : "lazy", emitMetadata: "0" }));
  return onMounted(async () => {
    await import("giscus"), i2.value = true;
  }), () => l2.value ? h$1("div", { id: "comment", class: ["giscus-wrapper", { "input-top": e.value.inputPosition !== "bottom" }] }, i2.value ? h$1("giscus-widget", s2.value) : h$1(LoadingIcon)) : null;
} });
var f = defineComponent({ name: "CommentService", props: { darkmode: Boolean }, setup(e) {
  const m2 = i$2(), t2 = usePageData(), o = usePageFrontmatter(), n2 = computed(() => o.value.comment ?? m2.value.comment !== false);
  return () => h$1(h, { class: "vp-comment", "vp-comment": "", identifier: o.value.commentID ?? t2.value.path, darkmode: e.darkmode, style: { display: n2.value ? "block" : "none" } });
} }), v = defineClientConfig({ enhance: ({ app: e }) => {
  k(e), e.component("CommentService", f);
} });
const clientConfig10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: v
}, Symbol.toStringTag, { value: "Module" }));
const sidebar = { "/": { "/beta/": [{ "text": "beta", "collapsed": false, "items": ["/beta/"] }], "/novel/": [{ "text": "Novel", "items": [{ "text": "Re - 从零开始的异世界生活", "collapsed": false, "items": ["/novel/Re - 从零开始的异世界生活/", { "text": "第一卷", "collapsed": false, "items": ["/novel/Re - 从零开始的异世界生活/第一卷/插图/01-插图.md", "/novel/Re - 从零开始的异世界生活/第一卷/序章/02-序章 开始的余韵.md", "/novel/Re - 从零开始的异世界生活/第一卷/第一章/03-第一章 开始的结束.md", "/novel/Re - 从零开始的异世界生活/第一卷/第二章/04-第二章 太迟的抵抗.md", "/novel/Re - 从零开始的异世界生活/第一卷/第三章/05-第三章 结束的开始.md", "/novel/Re - 从零开始的异世界生活/第一卷/第四章/06-第四章 第四次的正直.md", "/novel/Re - 从零开始的异世界生活/第一卷/第五章/07-第五章 从零开始的异世界生活.md", "/novel/Re - 从零开始的异世界生活/第一卷/终章/08-终章 月亮都看在眼里.md", "/novel/Re - 从零开始的异世界生活/第一卷/后记/09-后记.md"] }] }] }], "/GPTstory/": [{ "text": "GPTstory", "collapsed": false, "items": ["1.md", "2.md", "3.md", "4.md", "5.md"] }], "/tech/": [{ "text": "tech", "collapsed": false, "items": ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md", "11.md"] }], "/learn/": [{ "text": "Learn", "items": [{ "text": "工程力学", "collapsed": false, "items": ["/learn/工程力学/复习资料1.md", "/learn/工程力学/题目1的解答.md", "/learn/工程力学/题目解答2.md"] }, { "text": "管理学", "collapsed": false, "items": ["/learn/管理学/绪论.md", "/learn/管理学/第一章.md", "/learn/管理学/第二章.md", "/learn/管理学/复习资料.md"] }, { "text": "经济学", "collapsed": false, "items": ["/learn/经济学/经济学期末考-复习1.md", "/learn/经济学/经济学期末考-复习2.md"] }, { "text": "英语", "collapsed": false, "items": ["/learn/英语/期末资料 .md", { "text": "四级复习", "collapsed": true, "items": ["/learn/英语/CET-4/README.md", "/learn/英语/CET-4/0.md", "/learn/英语/CET-4/1.md", "/learn/英语/CET-4/2.md"] }] }, { "text": "近代史", "collapsed": false, "items": ["/learn/近代史/期末资料 .md"] }, { "text": "毛泽东概论", "collapsed": false, "items": ["/learn/毛概/导论.md", "/learn/毛概/第一章.md", "/learn/毛概/第二章.md"] }] }] }, "__auto__": {}, "__home__": {} };
function resolveRepoType(repo) {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
}
var editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
function resolveEditLinkPatterns({
  docsRepo,
  editLinkPattern
}) {
  if (editLinkPattern)
    return editLinkPattern;
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null)
    return editLinkPatterns[repoType];
  return null;
}
function resolveEditLink({
  docsRepo,
  docsBranch,
  docsDir,
  filePathRelative,
  editLinkPattern
}) {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(
    /:repo/,
    isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`
  ).replace(/:branch/, docsBranch).replace(
    /:path/,
    removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`)
  );
}
function resolveNavLink(link) {
  const { notFound, meta, path } = resolveRoute(link);
  return notFound ? { text: path, link: path } : {
    text: meta.title || path,
    link: path,
    icon: meta.icon
  };
}
function normalizeLink(base = "", link = "") {
  return isLinkAbsolute(link) || isLinkWithProtocol(link) ? link : ensureLeadingSlash(`${base}/${link}`.replace(/\/+/g, "/"));
}
function normalizePrefix(base, link = "") {
  return ensureEndingSlash(normalizeLink(base, link));
}
var HASH_RE = /#.*$/;
var EXT_RE = /(index|README)?\.(md|html)$/;
var inBrowser = typeof document !== "undefined";
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0)
    return false;
  currentPath = normalize(`/${currentPath.replace(/^\//, "")}`);
  if (asRegex)
    return new RegExp(matchPath).test(currentPath);
  if (normalize(matchPath) !== currentPath)
    return false;
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch)
    return (inBrowser ? location.hash : "") === hashMatch[0];
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
const themeData$1 = { "locales": { "/": { "selectLanguageName": "简体中文", "selectLanguageText": "选择语言", "appearanceText": "外观", "lightModeSwitchTitle": "切换为浅色主题", "darkModeSwitchTitle": "切换为深色主题", "outlineLabel": "此页内容", "returnToTopLabel": "返回顶部", "editLinkText": "编辑此页", "contributorsText": "贡献者", "prevPageLabel": "上一页", "nextPageLabel": "下一页", "lastUpdated": { "text": "最后更新于" }, "notFound": { "code": "404", "title": "页面未找到", "quote": "但是，如果你不改变方向，并且一直寻找，最终可能会到达你要去的地方。", "linkText": "返回首页" }, "encryptButtonText": "确认", "encryptPlaceholder": "请输入密码", "encryptGlobalText": "本站只允许密码访问", "encryptPageText": "本页面只允许密码访问", "footer": { "message": "Ice Glycoside Crystal", "copyright": "冰苷晶 © 2024" }, "logo": "/logo.jpg", "docsRepo": "https://github.com/Unerge/vuepress-starter", "docsBranch": "docs", "docsDir": "docs", "profile": { "avatar": "/logo-O2.jpg", "name": "WentUrc Docs", "description": "持续学习大学课程" }, "navbar": [{ "text": "Text", "link": "/beta/" }, { "text": "Tech-Document", "link": "/tech/" }, { "text": "ChatGPT Said", "link": "/GPTstory/" }, { "text": "WentUrc Learn", "items": [{ "text": "前言", "link": "/learn/" }, { "text": "工程力学", "link": "/learn/工程力学/" }, { "text": "管理学", "link": "/learn/管理学/" }, { "text": "经济学", "link": "/learn/经济学/" }, { "text": "英语", "link": "/learn/英语/" }, { "text": "近代史", "link": "/learn/近代史/" }, { "text": "毛泽东概论", "link": "/learn/毛概/" }] }, { "text": "Novel", "items": [{ "text": "小说", "link": "/novel/" }, { "text": "Re - 从零开始的异世界生活", "link": "/novel/Re - 从零开始的异世界生活/" }] }] } }, "appearance": true, "blog": { "postCover": { "layout": "top", "ratio": "16:9", "compact": true } }, "navbarSocialInclude": ["github", "twitter", "discord", "facebook"], "aside": true, "outline": [2, 3], "externalLinkIcon": true, "editLink": true, "contributors": true, "prevPage": true, "nextPage": true, "footer": { "message": "Ice Glycoside Crystal", "copyright": "冰苷晶 © 2024" }, "logo": "/logo.jpg", "docsRepo": "https://github.com/Unerge/vuepress-starter", "docsBranch": "docs", "docsDir": "docs", "profile": { "avatar": "/logo-O2.jpg", "name": "WentUrc Docs", "description": "持续学习大学课程" } };
const encrypt$1 = [false, ":", "", [], {}];
const blogPostData$1 = [{ "path": "/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E7%BB%88%E7%AB%A0/08-%E7%BB%88%E7%AB%A0%20%E6%9C%88%E4%BA%AE%E9%83%BD%E7%9C%8B%E5%9C%A8%E7%9C%BC%E9%87%8C.html", "title": "终章 月亮都看在眼里", "categoryList": [{ "id": "d638d1", "sort": 10003, "name": "novel" }, { "id": "89a6d1", "sort": 10005, "name": "Re - 从零开始的异世界生活" }, { "id": "d1a344", "sort": 10006, "name": "第一卷" }, { "id": "f99a7e", "sort": 10022, "name": "终章" }], "tags": ["小说"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E7%AC%AC%E5%9B%9B%E7%AB%A0/06-%E7%AC%AC%E5%9B%9B%E7%AB%A0%20%E7%AC%AC%E5%9B%9B%E6%AC%A1%E7%9A%84%E6%AD%A3%E7%9B%B4.html", "title": "第四章 第四次的正直", "categoryList": [{ "id": "d638d1", "sort": 10003, "name": "novel" }, { "id": "89a6d1", "sort": 10005, "name": "Re - 从零开始的异世界生活" }, { "id": "d1a344", "sort": 10006, "name": "第一卷" }, { "id": "a0eba5", "sort": 10021, "name": "第四章" }], "tags": ["小说"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E7%AC%AC%E4%BA%94%E7%AB%A0/07-%E7%AC%AC%E4%BA%94%E7%AB%A0%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB.html", "title": "第五章 从零开始的异世界生活", "categoryList": [{ "id": "d638d1", "sort": 10003, "name": "novel" }, { "id": "89a6d1", "sort": 10005, "name": "Re - 从零开始的异世界生活" }, { "id": "d1a344", "sort": 10006, "name": "第一卷" }, { "id": "923663", "sort": 10019, "name": "第五章" }], "tags": ["小说"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E7%AC%AC%E4%BA%8C%E7%AB%A0/04-%E7%AC%AC%E4%BA%8C%E7%AB%A0%20%E5%A4%AA%E8%BF%9F%E7%9A%84%E6%8A%B5%E6%8A%97.html", "title": "第二章 太迟的抵抗", "categoryList": [{ "id": "d638d1", "sort": 10003, "name": "novel" }, { "id": "89a6d1", "sort": 10005, "name": "Re - 从零开始的异世界生活" }, { "id": "d1a344", "sort": 10006, "name": "第一卷" }, { "id": "4d37fb", "sort": 10020, "name": "第二章" }], "tags": ["小说"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E7%AC%AC%E4%B8%89%E7%AB%A0/05-%E7%AC%AC%E4%B8%89%E7%AB%A0%20%E7%BB%93%E6%9D%9F%E7%9A%84%E5%BC%80%E5%A7%8B.html", "title": "第三章 结束的开始", "categoryList": [{ "id": "d638d1", "sort": 10003, "name": "novel" }, { "id": "89a6d1", "sort": 10005, "name": "Re - 从零开始的异世界生活" }, { "id": "d1a344", "sort": 10006, "name": "第一卷" }, { "id": "7ab40b", "sort": 10010, "name": "第三章" }], "tags": ["小说"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E7%AC%AC%E4%B8%80%E7%AB%A0/03-%E7%AC%AC%E4%B8%80%E7%AB%A0%20%E5%BC%80%E5%A7%8B%E7%9A%84%E7%BB%93%E6%9D%9F.html", "title": "第一章 开始的结束", "categoryList": [{ "id": "d638d1", "sort": 10003, "name": "novel" }, { "id": "89a6d1", "sort": 10005, "name": "Re - 从零开始的异世界生活" }, { "id": "d1a344", "sort": 10006, "name": "第一卷" }, { "id": "1101ec", "sort": 10018, "name": "第一章" }], "tags": ["小说"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E5%90%8E%E8%AE%B0/09-%E5%90%8E%E8%AE%B0.html", "title": "后记", "categoryList": [{ "id": "d638d1", "sort": 10003, "name": "novel" }, { "id": "89a6d1", "sort": 10005, "name": "Re - 从零开始的异世界生活" }, { "id": "d1a344", "sort": 10006, "name": "第一卷" }, { "id": "0f870c", "sort": 10007, "name": "后记" }], "tags": ["小说"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E5%BA%8F%E7%AB%A0/02-%E5%BA%8F%E7%AB%A0%20%E5%BC%80%E5%A7%8B%E7%9A%84%E4%BD%99%E9%9F%B5.html", "title": "序章 开始的余韵", "categoryList": [{ "id": "d638d1", "sort": 10003, "name": "novel" }, { "id": "89a6d1", "sort": 10005, "name": "Re - 从零开始的异世界生活" }, { "id": "d1a344", "sort": 10006, "name": "第一卷" }, { "id": "99d3ee", "sort": 10017, "name": "序章" }], "tags": ["小说"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/novel/Re%20-%20%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BC%82%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB/%E7%AC%AC%E4%B8%80%E5%8D%B7/%E6%8F%92%E5%9B%BE/01-%E6%8F%92%E5%9B%BE.html", "title": "插图", "categoryList": [{ "id": "d638d1", "sort": 10003, "name": "novel" }, { "id": "89a6d1", "sort": 10005, "name": "Re - 从零开始的异世界生活" }, { "id": "d1a344", "sort": 10006, "name": "第一卷" }, { "id": "b77724", "sort": 10011, "name": "插图" }], "tags": ["小说"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E8%8B%B1%E8%AF%AD/CET-4/2.html", "title": "CET-4_作文", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "c44fc1", "sort": 10008, "name": "英语" }, { "id": "6a9995", "sort": 10009, "name": "CET-4" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E8%8B%B1%E8%AF%AD/CET-4/1.html", "title": "2024/10/9", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "c44fc1", "sort": 10008, "name": "英语" }, { "id": "6a9995", "sort": 10009, "name": "CET-4" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E8%8B%B1%E8%AF%AD/CET-4/0.html", "title": "CET-4_试卷", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "c44fc1", "sort": 10008, "name": "英语" }, { "id": "6a9995", "sort": 10009, "name": "CET-4" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E8%BF%91%E4%BB%A3%E5%8F%B2/%E6%9C%9F%E6%9C%AB%E8%B5%84%E6%96%99%20.html", "title": "近代史-复习资料", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "fbd5a8", "sort": 10012, "name": "近代史" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E8%8B%B1%E8%AF%AD/%E6%9C%9F%E6%9C%AB%E8%B5%84%E6%96%99%20.html", "title": "英语-复习资料1", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "c44fc1", "sort": 10008, "name": "英语" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E7%BB%8F%E6%B5%8E%E5%AD%A6/%E7%BB%8F%E6%B5%8E%E5%AD%A6%E6%9C%9F%E6%9C%AB%E8%80%83-%E5%A4%8D%E4%B9%A02.html", "title": "经济学-复习资料2", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "4ab540", "sort": 10013, "name": "经济学" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E7%BB%8F%E6%B5%8E%E5%AD%A6/%E7%BB%8F%E6%B5%8E%E5%AD%A6%E6%9C%9F%E6%9C%AB%E8%80%83-%E5%A4%8D%E4%B9%A01.html", "title": "经济学-复习资料1", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "4ab540", "sort": 10013, "name": "经济学" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E6%AF%9B%E6%A6%82/%E7%AC%AC%E4%BA%8C%E7%AB%A0.html", "title": "第二章 新民主主义革命理论", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "916ffe", "sort": 10014, "name": "毛概" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E6%AF%9B%E6%A6%82/%E7%AC%AC%E4%B8%80%E7%AB%A0.html", "title": "第一章 毛泽东思想及其历史地位", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "916ffe", "sort": 10014, "name": "毛概" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E6%AF%9B%E6%A6%82/%E5%AF%BC%E8%AE%BA.html", "title": "导论 马克思主义中国化时代化的历史进程与理论成果", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "916ffe", "sort": 10014, "name": "毛概" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E7%AE%A1%E7%90%86%E5%AD%A6/%E7%BB%AA%E8%AE%BA.html", "title": "绪论", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "7d1f6c", "sort": 10015, "name": "管理学" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E7%AE%A1%E7%90%86%E5%AD%A6/%E7%AC%AC%E4%BA%8C%E7%AB%A0.html", "title": "第二章 管理理论的历史演变", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "7d1f6c", "sort": 10015, "name": "管理学" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E7%AE%A1%E7%90%86%E5%AD%A6/%E7%AC%AC%E4%B8%80%E7%AB%A0.html", "title": "第一章 管理导论", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "7d1f6c", "sort": 10015, "name": "管理学" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E7%AE%A1%E7%90%86%E5%AD%A6/%E5%A4%8D%E4%B9%A0%E8%B5%84%E6%96%99.html", "title": "复习资料", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "7d1f6c", "sort": 10015, "name": "管理学" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/%E9%A2%98%E7%9B%AE%E8%A7%A3%E7%AD%942.html", "title": "弯矩图与剪力图", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "bae597", "sort": 10016, "name": "工程力学" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/%E9%A2%98%E7%9B%AE1%E7%9A%84%E8%A7%A3%E7%AD%94.html", "title": "在 Github 上显示数学公式", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "bae597", "sort": 10016, "name": "工程力学" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/learn/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/%E5%A4%8D%E4%B9%A0%E8%B5%84%E6%96%991.html", "title": "静力学基础", "categoryList": [{ "id": "339d8d", "sort": 10001, "name": "learn" }, { "id": "bae597", "sort": 10016, "name": "工程力学" }], "tags": ["学习"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/tech/9.html", "title": "在VuePress中添加评论功能", "categoryList": [{ "id": "d9f913", "sort": 1e4, "name": "tech" }], "tags": ["技术文档"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "", "cover": "https://api.wenturc.com/" }, { "path": "/tech/8.html", "title": "Vuepress自定义主题配置", "categoryList": [{ "id": "d9f913", "sort": 1e4, "name": "tech" }], "tags": ["技术文档"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "", "cover": "https://api.wenturc.com/" }, { "path": "/tech/7.html", "title": "虚拟机嵌套虚拟化", "categoryList": [{ "id": "d9f913", "sort": 1e4, "name": "tech" }], "tags": ["技术文档"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "", "cover": "https://api.wenturc.com/" }, { "path": "/tech/6.html", "title": "仿制哔哩哔哩站点样式", "categoryList": [{ "id": "d9f913", "sort": 1e4, "name": "tech" }], "tags": ["技术文档"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "", "cover": "https://api.wenturc.com/" }, { "path": "/tech/5.html", "title": "爬取Bing每日背景图", "categoryList": [{ "id": "d9f913", "sort": 1e4, "name": "tech" }], "tags": ["技术文档"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "", "cover": "https://api.wenturc.com/" }, { "path": "/tech/4.html", "title": "在Windows中，可以通过多种方法修改文件的创建日期", "categoryList": [{ "id": "d9f913", "sort": 1e4, "name": "tech" }], "tags": ["技术文档"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "", "cover": "https://api.wenturc.com/" }, { "path": "/tech/3.html", "title": "不同风格的博客站导航栏样式", "categoryList": [{ "id": "d9f913", "sort": 1e4, "name": "tech" }], "tags": ["技术文档"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "", "cover": "https://api.wenturc.com/" }, { "path": "/tech/2.html", "title": "Hyper-V虚拟交换机无法显示交换机列表", "categoryList": [{ "id": "d9f913", "sort": 1e4, "name": "tech" }], "tags": ["技术文档"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "", "cover": "https://api.wenturc.com/" }, { "path": "/tech/11.html", "title": "创新创业作业", "categoryList": [{ "id": "d9f913", "sort": 1e4, "name": "tech" }], "tags": ["技术文档"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "", "cover": "https://api.wenturc.com/" }, { "path": "/tech/10.html", "title": "在宝塔面板中 Docker 环境安装 Tailchat", "categoryList": [{ "id": "d9f913", "sort": 1e4, "name": "tech" }], "tags": ["技术文档"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "", "cover": "https://api.wenturc.com/" }, { "path": "/tech/1.html", "title": "原神伤害公式", "categoryList": [{ "id": "d9f913", "sort": 1e4, "name": "tech" }], "tags": ["技术文档"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "", "cover": "https://api.wenturc.com/" }, { "path": "/GPTstory/5.html", "title": "存在于自我探索", "categoryList": [{ "id": "6ddae0", "sort": 10002, "name": "GPTstory" }], "tags": ["故事"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/GPTstory/4.html", "title": "桂花湖将与下班就穿越异世界", "categoryList": [{ "id": "6ddae0", "sort": 10002, "name": "GPTstory" }], "tags": ["故事"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/GPTstory/3.html", "title": "你可以写一个关于你的一切的2000字的故事吗？", "categoryList": [{ "id": "6ddae0", "sort": 10002, "name": "GPTstory" }], "tags": ["故事"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/GPTstory/2.html", "title": '你可以写一个关于"他回复二技能重新设置大哥"的故事吗？', "categoryList": [{ "id": "6ddae0", "sort": 10002, "name": "GPTstory" }], "tags": ["故事"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }, { "path": "/GPTstory/1.html", "title": '你可以写一个关于"兔兔兔兔热狗好吧吃几节课，我就计划计划赶不上变化"的故事吗？', "categoryList": [{ "id": "6ddae0", "sort": 10002, "name": "GPTstory" }], "tags": ["故事"], "createTime": "Invalid Date", "lang": "zh-CN", "excerpt": "" }];
const articleTagColors = { "beta": "w6o9", "故事": "58p2", "技术文档": "2u2u", "学习": "t4ky", "小说": "z4xh" };
const icons = "{}";
const i$1 = ref({}), O = (e) => {
  isRef(e) ? watch(e, (t2) => {
    i$1.value = t2;
  }, { immediate: true }) : isFunction(e) ? watch(e, (t2) => {
    i$1.value = t2;
  }) : i$1.value = e;
};
var define_PLUME_PRESET_LOCALE_default = { "/": { home: "首页", blog: "博客", tag: "标签", archive: "归档", category: "分类" }, "/en/": { home: "Home", blog: "Blog", tag: "Tags", archive: "Archives", category: "Categories" } };
var themeLocaleDataSymbol = Symbol(
  ""
);
var themeData = ref(themeData$1);
function useThemeData() {
  return themeData;
}
function useThemeLocaleData() {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
}
function resolveThemeLocaleData(theme, routeLocale) {
  const { locales: locales2, ...baseOptions } = theme;
  return {
    ...baseOptions,
    ...locales2 == null ? void 0 : locales2[routeLocale]
  };
}
function setupThemeData(app) {
  const themeData2 = useThemeData();
  const clientData = app._context.provides[clientDataSymbol];
  const themeLocaleData = computed(
    () => resolveThemeLocaleData(themeData2.value, clientData.routeLocale.value)
  );
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
}
var darkModeSymbol = Symbol(
  ""
);
function setupDarkMode(app) {
  const theme = useThemeData();
  const transition2 = theme.value.transition;
  const disableTransition = typeof transition2 === "object" ? transition2.appearance === false : transition2 === false;
  const appearance = theme.value.appearance;
  const isDark = appearance === "force-dark" ? ref(true) : appearance ? useDark({
    storageKey: "vuepress-theme-appearance",
    attribute: "data-theme",
    valueLight: "light",
    valueDark: "dark",
    disableTransition,
    initialValue: () => typeof appearance === "string" ? appearance : "auto",
    ...typeof appearance === "object" ? appearance : {}
  }) : ref(false);
  app.provide(darkModeSymbol, isDark);
  Object.defineProperty(app.config.globalProperties, "$isDark", {
    get: () => isDark
  });
}
function useDarkMode() {
  const isDarkMode = inject(darkModeSymbol);
  if (!isDarkMode)
    throw new Error("useDarkMode() is called without provider.");
  return isDarkMode;
}
function useData() {
  const theme = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  const site = useSiteLocaleData();
  const isDark = useDarkMode();
  const lang = usePageLang();
  return { theme, page, frontmatter, lang, site, isDark };
}
var encrypt = ref(resolveEncryptData(encrypt$1));
function useEncryptData() {
  return encrypt;
}
function resolveEncryptData([global, separator, admin, matches, rules]) {
  return {
    global,
    separator,
    matches,
    admins: admin.split(separator),
    ruleList: Object.keys(rules).map((key) => ({
      key,
      match: matches[key],
      rules: rules[key].split(separator)
    }))
  };
}
var EncryptSymbol = Symbol(
  ""
);
var storage = useSessionStorage("2a0a3d6afb2fdf1f", () => ({
  s: [genSaltSync(10), genSaltSync(10)],
  g: "",
  p: {}
}));
function mergeHash(hash) {
  const [left, right] = storage.value.s;
  return left + hash + right;
}
function splitHash(hash) {
  const [left, right] = storage.value.s;
  if (!hash.startsWith(left) || !hash.endsWith(right))
    return "";
  return hash.slice(left.length, hash.length - right.length);
}
var compareCache = /* @__PURE__ */ new Map();
async function compareDecrypt(content, hash, separator = ":") {
  const key = [content, hash].join(separator);
  if (compareCache.has(key))
    return compareCache.get(key);
  try {
    const result = await compare(content, hash);
    compareCache.set(key, result);
    return result;
  } catch {
    compareCache.set(key, false);
    return false;
  }
}
var matchCache = /* @__PURE__ */ new Map();
function createMatchRegex(match) {
  if (matchCache.has(match))
    return matchCache.get(match);
  const regex = new RegExp(match);
  matchCache.set(match, regex);
  return regex;
}
function toMatch(match, pagePath, filePathRelative) {
  const relativePath = filePathRelative || "";
  if (match[0] === "^") {
    const regex = createMatchRegex(match);
    return regex.test(pagePath) || relativePath && regex.test(relativePath);
  }
  if (match.endsWith(".md"))
    return relativePath && relativePath.endsWith(match);
  return pagePath.startsWith(match) || relativePath.startsWith(match);
}
function setupEncrypt() {
  const { page } = useData();
  const route = useRoute();
  const encrypt2 = useEncryptData();
  const hasPageEncrypt = computed(() => {
    const pagePath = route.path;
    const filePathRelative = page.value.filePathRelative;
    return encrypt2.value.ruleList.length ? encrypt2.value.matches.some((match) => toMatch(match, pagePath, filePathRelative)) : false;
  });
  const isGlobalDecrypted = computed(() => {
    if (!encrypt2.value.global)
      return true;
    const hash = splitHash(storage.value.g);
    return !!hash && encrypt2.value.admins.includes(hash);
  });
  const hashList = computed(() => {
    const pagePath = route.path;
    const filePathRelative = page.value.filePathRelative;
    return encrypt2.value.ruleList.length ? encrypt2.value.ruleList.filter((item) => toMatch(item.match, pagePath, filePathRelative)) : [];
  });
  const isPageDecrypted = computed(() => {
    if (!hasPageEncrypt.value)
      return true;
    const hash = splitHash(storage.value.p.__GLOBAL__ || "");
    if (hash && encrypt2.value.admins.includes(hash))
      return true;
    for (const { key, rules } of hashList.value) {
      if (hasOwn(storage.value.p, key)) {
        const hash2 = splitHash(storage.value.p[key]);
        if (hash2 && rules.includes(hash2))
          return true;
      }
    }
    return false;
  });
  provide(EncryptSymbol, {
    hasPageEncrypt,
    isGlobalDecrypted,
    isPageDecrypted,
    hashList
  });
}
function useEncrypt() {
  const result = inject(EncryptSymbol);
  if (!result)
    throw new Error("useEncrypt() is called without setup");
  return result;
}
function useEncryptCompare() {
  const encrypt2 = useEncryptData();
  const { page } = useData();
  const route = useRoute();
  const { hashList } = useEncrypt();
  async function compareGlobal(password) {
    if (!password)
      return false;
    for (const admin of encrypt2.value.admins) {
      if (await compareDecrypt(password, admin, encrypt2.value.separator)) {
        storage.value.g = mergeHash(admin);
        return true;
      }
    }
    return false;
  }
  async function comparePage(password) {
    if (!password)
      return false;
    const pagePath = route.path;
    const filePathRelative = page.value.filePathRelative;
    let decrypted = false;
    for (const { match, key, rules } of hashList.value) {
      if (toMatch(match, pagePath, filePathRelative)) {
        for (const rule of rules) {
          if (await compareDecrypt(password, rule, encrypt2.value.separator)) {
            decrypted = true;
            storage.value.p = {
              ...storage.value.p,
              [key]: mergeHash(rule)
            };
            break;
          }
        }
        if (decrypted)
          break;
      }
    }
    if (!decrypted) {
      decrypted = await compareGlobal(password);
    }
    return decrypted;
  }
  return { compareGlobal, comparePage };
}
var { __auto__, __home__, ...items } = sidebar;
var sidebarData = ref(items);
var autoDirSidebar = ref(__auto__);
var autoHomeData = ref(__home__);
var sidebarSymbol = Symbol(
  ""
);
function setupSidebar() {
  const { page, frontmatter } = useData();
  const routeLocale = useRouteLocale();
  const hasSidebar = computed(() => {
    return frontmatter.value.pageLayout !== "home" && frontmatter.value.pageLayout !== "friends" && frontmatter.value.sidebar !== false && frontmatter.value.layout !== "NotFound";
  });
  const sidebarData2 = computed(() => {
    return hasSidebar.value ? getSidebar(typeof frontmatter.value.sidebar === "string" ? frontmatter.value.sidebar : page.value.path, routeLocale.value) : [];
  });
  provide(sidebarSymbol, sidebarData2);
}
function useSidebarData() {
  const sidebarData2 = inject(sidebarSymbol);
  if (!sidebarData2) {
    throw new Error("useSidebarData() is called without provider.");
  }
  return sidebarData2;
}
function getSidebar(routePath, routeLocal) {
  const _sidebar = sidebarData.value[routeLocal];
  if (_sidebar === "auto") {
    return resolveSidebarItems(autoDirSidebar.value[routeLocal]);
  } else if (isArray(_sidebar)) {
    return resolveSidebarItems(_sidebar, routeLocal);
  } else if (isPlainObject(_sidebar)) {
    routePath = decodeURIComponent(routePath);
    const dir = Object.keys(_sidebar).sort((a2, b2) => b2.split("/").length - a2.split("/").length).find((dir2) => {
      return routePath.startsWith(`${routeLocal}${removeLeadingSlash(dir2)}`);
    }) || "";
    const sidebar2 = dir ? _sidebar[dir] : void 0;
    if (sidebar2 === "auto") {
      return resolveSidebarItems(
        dir ? autoDirSidebar.value[dir] : [],
        routeLocal
      );
    } else if (isArray(sidebar2)) {
      return resolveSidebarItems(sidebar2, dir);
    } else if (isPlainObject(sidebar2)) {
      const prefix = normalizePrefix(dir, sidebar2.prefix);
      return resolveSidebarItems(
        sidebar2.items === "auto" ? autoDirSidebar.value[prefix] : sidebar2.items,
        prefix
      );
    }
  }
  return [];
}
function resolveSidebarItems(sidebarItems, _prefix = "") {
  const resolved = [];
  sidebarItems.forEach((item) => {
    if (isString(item)) {
      resolved.push(resolveNavLink(normalizeLink(_prefix, item)));
    } else {
      const { link, items: items2, prefix, dir, ...args } = item;
      const navLink = { ...args };
      if (link) {
        navLink.link = normalizeLink(_prefix, link);
        const nav = resolveNavLink(navLink.link);
        navLink.icon = nav.icon;
      }
      const nextPrefix = normalizePrefix(_prefix, prefix || dir);
      if (items2 === "auto") {
        navLink.items = autoDirSidebar.value[nextPrefix];
        if (!navLink.link && autoHomeData.value[nextPrefix]) {
          navLink.link = normalizeLink(autoHomeData.value[nextPrefix]);
          const nav = resolveNavLink(navLink.link);
          navLink.icon = nav.icon;
        }
      } else {
        navLink.items = (items2 == null ? void 0 : items2.length) ? resolveSidebarItems(items2, nextPrefix) : void 0;
      }
      resolved.push(navLink);
    }
  });
  return resolved;
}
function getSidebarGroups(sidebar2) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar2) {
    const item = sidebar2[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function hasActiveLink(path, items2) {
  if (Array.isArray(items2)) {
    return items2.some((item) => hasActiveLink(path, item));
  }
  return isActive(
    path,
    items2.link ? resolveRouteFullPath(items2.link) : void 0
  ) ? true : items2.items ? hasActiveLink(path, items2.items) : false;
}
var containsActiveLink = hasActiveLink;
function useSidebar() {
  const { theme, frontmatter, page } = useData();
  const routeLocal = useRouteLocale();
  const is960 = useMediaQuery("(min-width: 960px)");
  const { isPageDecrypted } = useEncrypt();
  const isOpen = ref(false);
  const sidebarKey = computed(() => {
    const _sidebar = sidebarData.value[routeLocal.value];
    if (!_sidebar || _sidebar === "auto" || isArray(_sidebar))
      return routeLocal.value;
    return Object.keys(_sidebar).sort((a2, b2) => b2.split("/").length - a2.split("/").length).find((dir) => {
      return page.value.path.startsWith(ensureLeadingSlash(dir));
    }) || "";
  });
  const sidebar2 = useSidebarData();
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar2.value.length > 0 && frontmatter.value.pageLayout !== "home";
  });
  const hasAside = computed(() => {
    if (frontmatter.value.pageLayout === "home" || frontmatter.value.home)
      return false;
    if (frontmatter.value.pageLayout === "friends" || frontmatter.value.friends)
      return false;
    if (!isPageDecrypted.value)
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme.value.aside !== false;
  });
  const leftAside = computed(() => {
    if (hasAside.value) {
      return frontmatter.value.aside == null ? theme.value.aside === "left" : frontmatter.value.aside === "left";
    }
    return false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar2.value) : [];
  });
  const open = () => {
    isOpen.value = true;
  };
  const close = () => {
    isOpen.value = false;
  };
  const toggle = () => {
    if (isOpen.value) {
      close();
    } else {
      open();
    }
  };
  return {
    isOpen,
    sidebar: sidebar2,
    sidebarKey,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page } = useData();
  const route = useRoute();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(
      page.value.path,
      item.value.link ? resolveRouteFullPath(item.value.link) : void 0
    );
  };
  watch([() => page.value.path, item, () => route.hash], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink2 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? containsActiveLink(page.value.path, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watch(() => [page.value.path, isActiveLink.value, hasActiveLink2.value], () => {
    if (isActiveLink.value || hasActiveLink2.value) {
      collapsed.value = false;
    }
  }, { immediate: true, flush: "post" });
  const toggle = () => {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  };
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink2,
    hasChildren,
    toggle
  };
}
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value)
      return false;
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
var blogPostData = ref(blogPostData$1);
function usePostList() {
  return blogPostData;
}
function useLocalePostList() {
  const locale = usePageLang();
  return computed(() => blogPostData.value.filter((item) => item.lang === locale.value));
}
function useArchives() {
  const list = useLocalePostList();
  const archives = computed(() => {
    const archives2 = [];
    list.value.forEach((item) => {
      var _a;
      const createTime = ((_a = item.createTime) == null ? void 0 : _a.split(/\s|T/)[0]) || "";
      const year = createTime.split("/")[0];
      let current = archives2.find((archive) => archive.label === year);
      if (!current) {
        current = { label: year, list: [] };
        archives2.push(current);
      }
      current.list.push({
        title: item.title,
        path: item.path,
        createTime: createTime.slice(year.length + 1).replace(/\//g, "-")
      });
    });
    return archives2;
  });
  return { archives };
}
function useBlogCategory() {
  const postList = useLocalePostList();
  const categories = computed(() => {
    const list = [];
    postList.value.forEach((item) => {
      const categoryList = item.categoryList;
      if (!categoryList || categoryList.length === 0) {
        list.push({ type: "post", title: item.title, path: item.path });
      } else {
        let cate = list;
        let i2 = 0;
        while (i2 < categoryList.length) {
          const { id, name, sort } = categoryList[i2];
          const current = cate.find((item2) => item2.type === "category" && item2.id === id);
          if (!current) {
            const items2 = [];
            cate.push({ type: "category", title: name, id, sort, items: items2 });
            cate = items2;
          } else {
            cate = current.items;
          }
          i2++;
        }
        cate.push({ type: "post", title: item.title, path: item.path });
      }
    });
    return sortCategory(list);
  });
  return { categories };
}
function sortCategory(items2) {
  for (const item of items2) {
    if (item.type === "category" && item.items.length) {
      item.items = sortCategory(item.items);
    }
  }
  return items2.sort((a2, b2) => {
    if (a2.type === "category" && b2.type === "category") {
      return a2.sort < b2.sort ? -1 : 1;
    }
    if (a2.type === "category" && b2.type === "post") {
      return -1;
    }
    if (a2.type === "post" && b2.type === "category") {
      return 1;
    }
    return 0;
  });
}
var _queue = /* @__PURE__ */ new WeakMap();
function useRouteQuery(name, defaultValue, options = {}) {
  const {
    mode = "replace",
    route = useRoute(),
    router = useRouter(),
    transform = (value) => value
  } = options;
  if (!_queue.has(router))
    _queue.set(router, /* @__PURE__ */ new Map());
  const _queriesQueue = _queue.get(router);
  let query = route.query[name];
  tryOnScopeDispose(() => {
    query = void 0;
  });
  let _trigger;
  const proxy = customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        track();
        return transform(query !== void 0 ? query : toValue(defaultValue));
      },
      set(v2) {
        if (query === v2)
          return;
        query = v2;
        _queriesQueue.set(name, v2);
        trigger();
        nextTick$1(() => {
          if (_queriesQueue.size === 0)
            return;
          const newQueries = Object.fromEntries(_queriesQueue.entries());
          _queriesQueue.clear();
          const { query: query2, hash, path } = route;
          router[toValue(mode)]({
            path,
            query: { ...query2, ...newQueries },
            hash
          });
        });
      }
    };
  });
  watch(
    () => route.query[name],
    (v2) => {
      query = v2;
      _trigger();
    },
    { flush: "sync" }
  );
  return proxy;
}
var tagColorsRef = ref(articleTagColors);
var useTagColors = () => tagColorsRef;
function useTags() {
  const { theme } = useData();
  const list = useLocalePostList();
  const colors = useTagColors();
  const tags = computed(() => {
    const blog = theme.value.blog || {};
    const tagTheme = blog.tagsTheme ?? "colored";
    const tagMap = {};
    list.value.forEach((item) => {
      if (item.tags) {
        toArray(item.tags).forEach((tag) => {
          if (tagMap[tag])
            tagMap[tag] += 1;
          else
            tagMap[tag] = 1;
        });
      }
    });
    return Object.keys(tagMap).map((tag) => ({
      name: tag,
      count: tagMap[tag] > 99 ? "99+" : tagMap[tag],
      className: colors.value[tag] ? `vp-tag-${colors.value[tag]}` : `tag-${tagTheme}`
    }));
  });
  const currentTag = useRouteQuery("tag");
  const postList = computed(() => {
    if (!currentTag.value)
      return [];
    return list.value.filter((item) => {
      if (item.tags)
        return toArray(item.tags).includes(currentTag.value);
      return false;
    }).map((item) => ({
      title: item.title,
      path: item.path,
      createTime: item.createTime.split(" ")[0].replace(/\//g, "-")
    }));
  });
  const handleTagClick = (tag) => {
    currentTag.value = tag;
  };
  return {
    tags,
    currentTag,
    postList,
    handleTagClick
  };
}
var presetLocales = define_PLUME_PRESET_LOCALE_default;
function getPresetLocaleData(locale, name) {
  var _a;
  return ((_a = presetLocales[locale]) == null ? void 0 : _a[name]) || presetLocales["/"][name];
}
function useInternalLink() {
  const { theme } = useData();
  const routeLocale = useRouteLocale();
  function resolveLink(name, link) {
    return {
      link: (routeLocale.value + link).replace(/\/+/g, "/"),
      text: getPresetLocaleData(routeLocale.value, name)
    };
  }
  const blogData = computed(() => theme.value.blog || {});
  const home = computed(() => resolveLink("home", "/"));
  const blog = computed(() => blogData.value.postList !== false ? resolveLink("blog", blogData.value.link || "blog/") : home.value);
  const tags = computed(() => blogData.value.tags !== false ? resolveLink("tag", blogData.value.tagsLink || "blog/tags/") : void 0);
  const archive = computed(() => blogData.value.archives !== false ? resolveLink("archive", blogData.value.archivesLink || "blog/archives/") : void 0);
  const categories = computed(() => blogData.value.categories !== false ? resolveLink("category", blogData.value.categoriesLink || "blog/categories/") : void 0);
  return {
    home,
    blog,
    tags,
    archive,
    categories
  };
}
function useBlogExtract() {
  const { theme } = useData();
  const postList = useLocalePostList();
  const { tags: tagsList } = useTags();
  const { categories: categoryList } = useBlogCategory();
  const blog = computed(() => theme.value.blog || {});
  const links = useInternalLink();
  const hasBlogExtract = computed(
    () => blog.value.archives !== false || blog.value.tags !== false || blog.value.categories !== false
  );
  const tags = computed(() => {
    var _a, _b;
    return {
      link: (_a = links.tags.value) == null ? void 0 : _a.link,
      text: (_b = links.tags.value) == null ? void 0 : _b.text,
      total: tagsList.value.length
    };
  });
  const archives = computed(() => {
    var _a, _b;
    return {
      link: (_a = links.archive.value) == null ? void 0 : _a.link,
      text: (_b = links.archive.value) == null ? void 0 : _b.text,
      total: postList.value.length
    };
  });
  const categories = computed(() => {
    var _a, _b;
    return {
      link: (_a = links.categories.value) == null ? void 0 : _a.link,
      text: (_b = links.categories.value) == null ? void 0 : _b.text,
      total: getCategoriesTotal(categoryList.value)
    };
  });
  return {
    hasBlogExtract,
    tags,
    archives,
    categories
  };
}
function getCategoriesTotal(categories) {
  let total = 0;
  for (const category of categories) {
    if (category.type === "category") {
      total += 1;
      if (category.items.length) {
        total += getCategoriesTotal(category.items);
      }
    }
  }
  return total;
}
var DEFAULT_PER_PAGE = 15;
function usePostListControl(homePage) {
  const { theme } = useData();
  const list = useLocalePostList();
  const blog = computed(() => theme.value.blog || {});
  const is960 = useMediaQuery("(max-width: 960px)");
  const postList = computed(() => {
    const stickyList = list.value.filter(
      (item) => item.sticky === true || typeof item.sticky === "number"
    );
    const otherList = list.value.filter(
      (item) => item.sticky === void 0 || item.sticky === false
    );
    return [
      ...stickyList.sort((prev, next) => {
        if (next.sticky === true && prev.sticky === true)
          return 0;
        return next.sticky > prev.sticky ? 1 : -1;
      }),
      ...otherList
    ];
  });
  const page = useRouteQuery("p", 1, {
    mode: "push",
    transform(val) {
      const page2 = Number(val);
      if (!Number.isNaN(page2) && page2 > 0)
        return page2;
      return 1;
    }
  });
  const perPage = computed(() => {
    var _a;
    if (blog.value.pagination === false)
      return 0;
    if (typeof blog.value.pagination === "number")
      return blog.value.pagination;
    return ((_a = blog.value.pagination) == null ? void 0 : _a.perPage) || DEFAULT_PER_PAGE;
  });
  const totalPage = computed(() => {
    if (blog.value.pagination === false)
      return 0;
    return Math.ceil(postList.value.length / perPage.value);
  });
  const isLastPage = computed(() => page.value >= totalPage.value);
  const isFirstPage = computed(() => page.value <= 1);
  const isPaginationEnabled = computed(() => blog.value.pagination !== false && totalPage.value > 1);
  const finalList = computed(() => {
    if (blog.value.pagination === false)
      return postList.value;
    if (postList.value.length <= perPage.value)
      return postList.value;
    return postList.value.slice(
      (page.value - 1) * perPage.value,
      page.value * perPage.value
    );
  });
  const pageRange = computed(() => {
    let range = [];
    const total = totalPage.value;
    const _page = page.value;
    const per = is960.value ? 4 : 5;
    if (total <= 0)
      return range;
    if (total <= 10) {
      range = Array.from({ length: total }, (_, i2) => ({ value: i2 + 1 }));
    } else {
      let i2 = 1;
      let hasMore = false;
      while (i2 <= total) {
        if (_page <= per && i2 <= per || _page >= total - (per - 1) && i2 >= total - (per - 1)) {
          hasMore = false;
          range.push({ value: i2 });
        } else if (i2 <= 2 || i2 >= total - 1) {
          hasMore = false;
          range.push({ value: i2 });
        } else if ((_page > per + 1 || _page < total - (per + 1)) && _page - i2 < per - 2 && i2 - _page < per - 2) {
          hasMore = false;
          range.push({ value: i2 });
        } else if (!hasMore) {
          hasMore = true;
          range.push({ value: i2, more: true });
        }
        i2++;
      }
    }
    return range;
  });
  const changePage = (current) => {
    if (page.value === current)
      return;
    page.value = current;
    setTimeout(() => {
      var _a;
      let top = 0;
      if (homePage.value) {
        top = ((_a = document.querySelector(".vp-blog")) == null ? void 0 : _a.getBoundingClientRect().top) || 0;
        top += window.scrollY - 64;
      }
      window.scrollTo({ top, behavior: "instant" });
    }, 0);
  };
  return {
    postList: finalList,
    page,
    totalPage,
    pageRange,
    isLastPage,
    isFirstPage,
    isPaginationEnabled,
    changePage
  };
}
var showBulletin = ref(false);
function useBulletin() {
  const { theme } = useData();
  const bulletin = computed(() => theme.value.bulletin === true ? {} : theme.value.bulletin);
  return bulletin;
}
function useBulletinControl() {
  const session = useSessionStorage("plume:bulletin", "");
  const local = useLocalStorage("plume:bulletin", "");
  const { page } = useData();
  const bulletin = useBulletin();
  const enableBulletin = computed(() => page.value.bulletin ?? true);
  watch(() => {
    var _a;
    return (_a = bulletin.value) == null ? void 0 : _a.lifetime;
  }, (lifetime) => {
    var _a;
    const id = (_a = bulletin.value) == null ? void 0 : _a.id;
    if (lifetime === "session") {
      showBulletin.value = session.value !== id;
    } else if (lifetime === "once") {
      showBulletin.value = local.value !== id;
    } else {
      showBulletin.value = true;
    }
  }, { immediate: true });
  function close() {
    var _a, _b;
    showBulletin.value = false;
    const lifetime = (_a = bulletin.value) == null ? void 0 : _a.lifetime;
    const id = (_b = bulletin.value) == null ? void 0 : _b.id;
    if (lifetime === "session") {
      session.value = id;
    } else if (lifetime === "once") {
      local.value = id;
    }
  }
  return {
    bulletin,
    enableBulletin,
    showBulletin,
    close
  };
}
function useContributors() {
  const { theme, page, frontmatter } = useData();
  return computed(() => {
    var _a;
    const config2 = frontmatter.value.contributors ?? theme.value.contributors ?? true;
    if (config2 === false)
      return [];
    const contributors = config2 === true ? [] : toArray(config2);
    const gitContributors = (((_a = page.value.git) == null ? void 0 : _a.contributors) ?? []).map(({ name }) => name);
    return Array.from(/* @__PURE__ */ new Set([...gitContributors, ...contributors]));
  });
}
function useEditLink() {
  const { theme, page, frontmatter } = useData();
  return computed(() => {
    const showEditLink = frontmatter.value.editLink ?? theme.value.editLink ?? true;
    if (!showEditLink)
      return null;
    const {
      docsRepo,
      docsBranch = "main",
      docsDir = "",
      editLinkText
    } = theme.value;
    if (!docsRepo)
      return null;
    const editLink = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      filePathRelative: page.value.filePathRelative,
      editLinkPattern: frontmatter.value.editLinkPattern ?? theme.value.editLinkPattern
    });
    if (!editLink)
      return null;
    return {
      text: editLinkText ?? "Edit this page",
      link: editLink
    };
  });
}
var focusedElement = ref();
var active = false;
var listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    if (!active) {
      activateFocusTracking();
    }
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners)
        deactivateFocusTracking();
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
var lightTint = {
  r: { value: 200, offset: 36 },
  g: { value: 200, offset: 36 },
  b: { value: 200, offset: 36 }
};
var darkTint = {
  r: { value: 32, offset: 36 },
  g: { value: 32, offset: 36 },
  b: { value: 32, offset: 36 }
};
function useHomeHeroTintPlate(canvas, enable, tintPlate) {
  const isDark = useDarkMode();
  let ctx = null;
  let t2 = 0;
  let timer;
  const plate = computed(() => {
    const defaultTint = isDark.value ? darkTint : lightTint;
    if (!tintPlate.value)
      return defaultTint;
    const plate2 = tintPlate.value;
    if (typeof plate2 === "string" || typeof plate2 === "number") {
      if (isDark.value)
        return darkTint;
      const values = toPlate(plate2);
      return values.length !== 3 ? lightTint : toTint(values);
    }
    if (typeof plate2 === "object") {
      if ("r" in plate2) {
        if (isDark.value)
          return darkTint;
        return toNumber({ ...lightTint, ...plate2 });
      }
      const key = isDark.value ? "dark" : "light";
      if (key in plate2) {
        const _plate = plate2[key];
        if (typeof _plate === "string" || typeof _plate === "number") {
          const values = toPlate(_plate);
          return values.length !== 3 ? lightTint : toTint(values);
        }
        return toNumber({ ...defaultTint, ...plate2 });
      }
    }
    return defaultTint;
  });
  onMounted(() => {
    if (canvas.value && enable.value) {
      ctx = canvas.value.getContext("2d");
      if (timer) {
        window.cancelAnimationFrame(timer);
      }
      run();
    }
  });
  onUnmounted(() => {
    if (timer) {
      window.cancelAnimationFrame(timer);
    }
  });
  function run() {
    for (let x = 0; x <= 35; x++) {
      for (let y2 = 0; y2 <= 35; y2++)
        col(x, y2, R(x, y2, t2), G(x, y2, t2), B2(x, y2, t2));
    }
    t2 = t2 + 0.02;
    timer = window.requestAnimationFrame(run);
  }
  function col(x, y2, r2, g2, b2) {
    if (!ctx)
      return;
    ctx.fillStyle = `rgb(${r2},${g2},${b2})`;
    ctx.fillRect(x, y2, 1, 1);
  }
  function R(x, y2, t22) {
    const r2 = plate.value.r;
    return Math.floor(r2.value + r2.offset * Math.cos((x * x - y2 * y2) / 300 + t22));
  }
  function G(x, y2, t22) {
    const g2 = plate.value.g;
    return Math.floor(g2.value + g2.offset * Math.sin((x * x * Math.cos(t22 / 4) + y2 * y2 * Math.sin(t22 / 3)) / 300));
  }
  function B2(x, y2, t22) {
    const b2 = plate.value.b;
    return Math.floor(b2.value + b2.offset * Math.sin(5 * Math.sin(t22 / 9) + ((x - 100) * (x - 100) + (y2 - 100) * (y2 - 100)) / 1100));
  }
}
function toPlate(plate) {
  return typeof plate === "number" || Number(plate) === Number.parseInt(plate) ? [plate, plate, plate].map((n2) => Number(n2)) : plate.includes(",") ? plate.replace(/\s/g, "").split(",").map((n2) => Number(n2)) : [];
}
function toTint([r2, g2, b2]) {
  return { r: toColor(r2), g: toColor(g2), b: toColor(b2) };
}
function toColor(num) {
  const offset = 256 - num;
  return { value: num, offset: offset > 64 ? 64 : offset };
}
function toNumber(tint) {
  Object.keys(tint).forEach((key) => {
    const p2 = tint[key];
    p2.value = Number(p2.value);
    p2.offset = Number(p2.offset);
  });
  return tint;
}
var iconsData = ref(icons);
var useIconsData = () => iconsData;
function useBlogPageData() {
  const { page } = useData();
  const postList = usePostList();
  const isBlogPost = computed(() => {
    return postList.value.some((item) => item.path === page.value.path);
  });
  const isBlogLayout = computed(() => {
    const type = page.value.type;
    return type === "blog" || type === "blog-archives" || type === "blog-tags" || type === "blog-categories";
  });
  return {
    isBlogPost,
    isBlogLayout
  };
}
function useLangs({
  removeCurrent = true
} = {}) {
  const theme = useThemeData();
  const { page } = useData();
  const routeLocale = useRouteLocale();
  const { isBlogPost } = useBlogPageData();
  const currentLang = computed(() => {
    var _a, _b;
    const link = routeLocale.value;
    return {
      label: (_b = (_a = theme.value.locales) == null ? void 0 : _a[link]) == null ? void 0 : _b.selectLanguageName,
      link
    };
  });
  const getPageLink = (locale) => {
    const filepath = page.value.filePathRelative ? `/${page.value.filePathRelative}` : page.value.path;
    const pagePath = filepath.slice(routeLocale.value.length);
    const targetPath = normalizeLink(locale, pagePath);
    const { notFound, path } = resolveRoute(targetPath);
    if (!notFound)
      return path;
    const blog = theme.value.blog;
    if (isBlogPost.value && blog !== false)
      return withBase((blog == null ? void 0 : blog.link) || normalizeLink(locale, "blog/"));
    const home = withBase(theme.value.home || "/");
    const fallbackResolve = resolveRoute(withBase(locale));
    return fallbackResolve.notFound ? home : fallbackResolve.path;
  };
  const localeLinks = computed(
    () => Object.entries(theme.value.locales || {}).flatMap(
      ([key, locale]) => removeCurrent && currentLang.value.label === locale.selectLanguageName ? [] : {
        text: locale.selectLanguageName,
        link: getPageLink(key)
      }
    )
  );
  return { localeLinks, currentLang };
}
function useLastUpdated() {
  const { theme, page, frontmatter } = useData();
  const lang = usePageLang();
  const date = computed(() => {
    var _a;
    return ((_a = page.value.git) == null ? void 0 : _a.updatedTime) ? new Date(page.value.git.updatedTime) : null;
  });
  const isoDatetime = computed(() => {
    var _a;
    return (_a = date.value) == null ? void 0 : _a.toISOString();
  });
  const datetime = ref("");
  const lastUpdatedText = computed(() => {
    var _a;
    if (theme.value.lastUpdated === false)
      return;
    return ((_a = theme.value.lastUpdated) == null ? void 0 : _a.text) || theme.value.lastUpdatedText || "Last updated";
  });
  onMounted(() => {
    watchEffect(() => {
      var _a, _b, _c;
      if (frontmatter.value.lastUpdated === false || theme.value.lastUpdated === false)
        return;
      datetime.value = date.value ? new Intl.DateTimeFormat(
        ((_b = (_a = theme.value.lastUpdated) == null ? void 0 : _a.formatOptions) == null ? void 0 : _b.forceLocale) ? lang.value : void 0,
        ((_c = theme.value.lastUpdated) == null ? void 0 : _c.formatOptions) ?? {
          dateStyle: "short",
          timeStyle: "short"
        }
      ).format(date.value) : "";
    });
  });
  return {
    datetime,
    isoDatetime,
    lastUpdatedText
  };
}
var SEARCH_RE = /\.md(?:(?:#|\?).*)?$/;
function useLink(href, target) {
  const route = useRoute();
  const { page } = useData();
  const isExternal = computed(
    () => {
      const link2 = toValue(href);
      const rawTarget = toValue(target);
      return link2 && isLinkExternal(link2) || rawTarget === "_blank";
    }
  );
  const link = computed(() => {
    const link2 = toValue(href);
    if (!link2)
      return void 0;
    if (isExternal.value)
      return link2;
    const currentPath = link2.startsWith("./") && SEARCH_RE.test(link2) ? `/${page.value.filePathRelative}` : route.path;
    const path = resolveRouteFullPath(link2, currentPath);
    if (path.includes("#")) {
      if (path.slice(0, path.indexOf("#")) === route.path) {
        return path.slice(path.indexOf("#"));
      }
    }
    return path;
  });
  return { isExternal, link };
}
function useNavbarData() {
  const { theme } = useData();
  return computed(() => resolveNavbar(theme.value.navbar || []));
}
function resolveNavbar(navbar, _prefix = "") {
  const resolved = [];
  navbar.forEach((item) => {
    if (typeof item === "string") {
      resolved.push(resolveNavLink(normalizeLink(_prefix, item)));
    } else {
      const { items: items2, prefix, ...args } = item;
      const res = { ...args };
      if ("link" in res) {
        res.link = normalizeLink(_prefix, res.link);
      }
      if (items2 == null ? void 0 : items2.length) {
        res.items = resolveNavbar(
          items2,
          normalizeLink(_prefix, prefix)
        );
      }
      resolved.push(res);
    }
  });
  return resolved;
}
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    if (isScreenOpen.value) {
      closeScreen();
    } else {
      openScreen();
    }
  }
  function closeScreenOnTabletWindow() {
    if (window.outerWidth >= 768) {
      closeScreen();
    }
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
var resolvedHeaders = [];
var headersSymbol = Symbol(
  ""
);
function setupHeaders() {
  const { frontmatter, theme } = useData();
  const headers = ref([]);
  onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
  });
  provide(headersSymbol, headers);
  return headers;
}
function useHeaders() {
  const headers = inject(headersSymbol);
  if (!headers) {
    throw new Error("useHeaders() is called without provider.");
  }
  return headers;
}
function getHeaders(range) {
  const headers = Array.from(
    document.querySelectorAll(".vp-doc :where(h1,h2,h3,h4,h5,h6)")
  ).filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: `#${el.id}`,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  const anchor = h2.firstChild;
  const el = anchor == null ? void 0 : anchor.firstChild;
  let ret = "";
  for (const node of Array.from((el == null ? void 0 : el.childNodes) ?? [])) {
    if (node.nodeType === 1) {
      if (node.classList.contains("vp-badge") || node.classList.contains("ignore-header")) {
        continue;
      }
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  let next = anchor == null ? void 0 : anchor.nextSibling;
  while (next) {
    if (next.nodeType === 1 || next.nodeType === 3)
      ret += next.textContent;
    next = next.nextSibling;
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false)
    return [];
  const levelsRange = range || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  headers = headers.filter((h2) => h2.level >= high && h2.level <= low);
  resolvedHeaders.length = 0;
  for (const { element, link } of headers)
    resolvedHeaders.push({ element, link });
  const ret = [];
  outer: for (let i2 = 0; i2 < headers.length; i2++) {
    const cur = headers[i2];
    if (i2 === 0) {
      ret.push(cur);
    } else {
      for (let j = i2 - 1; j >= 0; j--) {
        const prev = headers[j];
        if (prev.level < cur.level) {
          (prev.children || (prev.children = [])).push(cur);
          continue outer;
        }
      }
      ret.push(cur);
    }
  }
  return ret;
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const router = useRouter();
  const routeHash = ref(router.currentRoute.value.hash);
  let prevActiveLink = null;
  const setActiveLink = () => {
    if (!isAsideEnabled.value)
      return;
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    const headers = resolvedHeaders.map(({ element, link }) => ({
      link,
      top: getAbsoluteTop(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a2, b2) => a2.top - b2.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link, top } of headers) {
      if (top > scrollY + 88)
        break;
      activeLink = link;
    }
    activateLink(activeLink);
  };
  function activateLink(hash) {
    var _a;
    routeHash.value = hash || "";
    if (prevActiveLink)
      prevActiveLink.classList.remove("active");
    if (hash == null) {
      prevActiveLink = null;
    } else {
      prevActiveLink = ((_a = container.value) == null ? void 0 : _a.querySelector(
        `a[href="${decodeURIComponent(hash)}"]`
      )) ?? null;
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      if (marker.value) {
        marker.value.style.top = `${activeLink.offsetTop + 39}px`;
        marker.value.style.opacity = "1";
      }
    } else {
      if (marker.value) {
        marker.value.style.top = "33px";
        marker.value.style.opacity = "0";
      }
    }
  }
  const onScroll2 = useThrottleFn(setActiveLink, 100);
  watchDebounced(routeHash, () => {
    updateHash(router, routeHash.value);
  }, { debounce: 500 });
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll2);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll2);
  });
}
function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      return Number.NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
async function updateHash(router, hash) {
  const { path, query } = router.currentRoute.value;
  const { scrollBehavior } = router.options;
  router.options.scrollBehavior = void 0;
  await router.replace({ path, query, hash });
  router.options.scrollBehavior = scrollBehavior;
}
function usePrevNext() {
  const route = useRoute();
  const { frontmatter, theme } = useData();
  const { sidebar: sidebar2 } = useSidebar();
  const postList = usePostList();
  const locale = usePageLang();
  const { isBlogPost } = useBlogPageData();
  const prevNavList = computed(() => {
    if (theme.value.prevPage === false)
      return null;
    const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
    if (prevConfig !== false)
      return prevConfig;
    if (isBlogPost.value) {
      return resolveFromBlogPostData(
        postList.value.filter((item) => item.lang === locale.value),
        route.path,
        -1
      );
    } else {
      return resolveFromSidebarItems(flatSidebar(sidebar2.value), route.path, -1);
    }
  });
  const nextNavList = computed(() => {
    if (theme.value.nextPage === false)
      return null;
    const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
    if (nextConfig !== false)
      return nextConfig;
    if (isBlogPost.value) {
      return resolveFromBlogPostData(
        postList.value.filter((item) => item.lang === locale.value),
        route.path,
        1
      );
    } else {
      return resolveFromSidebarItems(flatSidebar(sidebar2.value), route.path, 1);
    }
  });
  return {
    prev: prevNavList,
    next: nextNavList
  };
}
function resolveFromFrontmatterConfig(conf) {
  if (conf === false)
    return null;
  if (isString(conf))
    return resolveNavLink(conf);
  if (isPlainObject(conf))
    return conf;
  return false;
}
function flatSidebar(sidebar2, res = []) {
  for (const item of sidebar2) {
    if (item.link)
      res.push({ link: item.link, text: item.text || item.dir || "" });
    if (Array.isArray(item.items) && item.items.length)
      flatSidebar(item.items, res);
  }
  return res;
}
function resolveFromSidebarItems(sidebarItems, currentPath, offset) {
  const index = sidebarItems.findIndex((item) => resolveRouteFullPath(item.link) === currentPath);
  if (index !== -1) {
    const targetItem = sidebarItems[index + offset];
    if (targetItem == null ? void 0 : targetItem.link) {
      return {
        link: targetItem.link,
        text: targetItem.text
      };
    }
  }
  return null;
}
function resolveFromBlogPostData(postList, currentPath, offset) {
  const index = postList.findIndex((item) => item.path === currentPath);
  if (index !== -1) {
    const targetItem = postList[index + offset];
    if (!(targetItem == null ? void 0 : targetItem.path))
      return null;
    return {
      link: targetItem.path,
      text: targetItem.title
    };
  }
  return null;
}
var promise = null;
var promiseResolve = null;
var scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
var useScrollPromise = () => scrollPromise;
function enhanceScrollBehavior(router) {
  router.options.scrollBehavior = async (to, from, savedPosition) => {
    await useScrollPromise().wait();
    if (savedPosition)
      return savedPosition;
    if (to.hash)
      return { el: to.hash, top: 64 };
    return { top: 0 };
  };
  router.beforeEach(() => {
    if (inBrowser) {
      document.documentElement.classList.remove("smooth");
    }
  });
  router.afterEach(() => nextTick$1(() => {
    if (inBrowser) {
      document.documentElement.classList.add("smooth");
    }
  }));
}
function setupWatermark() {
  const { frontmatter } = useData();
  O(computed(() => {
    const disableFullPage = typeof frontmatter.value.watermark === "object" && frontmatter.value.watermark.fullPage === false;
    return {
      parent: disableFullPage ? ".vp-doc" : "body"
    };
  }));
}
const _sfc_main$1r = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  props: {
    text: { default: void 0 },
    type: { default: "tip" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({
    class: ["vp-badge", $props.type]
  }, _attrs))} data-v-c1a14298>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate($props.text)}`);
  }, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$1r = _sfc_main$1r.setup;
_sfc_main$1r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/global/VPBadge.vue");
  return _sfc_setup$1r ? _sfc_setup$1r(props, ctx) : void 0;
};
const VPBadge = /* @__PURE__ */ _export_sfc(_sfc_main$1r, [["ssrRender", _sfc_ssrRender$1r], ["__scopeId", "data-v-c1a14298"], ["__file", "VPBadge.vue"]]);
const _sfc_main$1q = /* @__PURE__ */ defineComponent({
  __name: "VPIconify",
  props: {
    name: { default: "" },
    size: { default: "" },
    color: { default: "" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const icon = ref(null);
    const loaded = ref(false);
    async function loadIconComponent() {
      if (icon.value)
        return;
      {
        loaded.value = true;
      }
    }
    watch(() => props.name, loadIconComponent, { immediate: true });
    const size = computed(() => {
      const size2 = props.size || "1em";
      if (String(Number(size2)) === size2)
        return `${size2}px`;
      return size2;
    });
    const color = computed(() => props.color || "currentColor");
    const bind = computed(() => ({
      icon: icon.value,
      color: props.color,
      height: size.value
    }));
    const __returned__ = { props, icon, loaded, loadIconComponent, size, color, bind, get OfflineIcon() {
      return Icon;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (!$setup.loaded) {
          _push2(`<span class="vp-icon iconify" style="${ssrRenderStyle({ color: $setup.color, width: $setup.size, height: $setup.size })}"${_scopeId}></span>`);
        } else if ($setup.icon) {
          _push2(ssrRenderComponent($setup["OfflineIcon"], mergeProps({ class: "vp-icon iconify" }, $setup.bind), null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          !$setup.loaded ? (openBlock(), createBlock("span", {
            key: 0,
            class: "vp-icon iconify",
            style: { color: $setup.color, width: $setup.size, height: $setup.size }
          }, null, 4)) : $setup.icon ? (openBlock(), createBlock($setup["OfflineIcon"], mergeProps({
            key: 1,
            class: "vp-icon iconify"
          }, $setup.bind), null, 16)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1q = _sfc_main$1q.setup;
_sfc_main$1q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPIconify.vue");
  return _sfc_setup$1q ? _sfc_setup$1q(props, ctx) : void 0;
};
const VPIconify = /* @__PURE__ */ _export_sfc(_sfc_main$1q, [["ssrRender", _sfc_ssrRender$1q], ["__file", "VPIconify.vue"]]);
const _sfc_main$1p = /* @__PURE__ */ defineComponent({
  __name: "VPIcon",
  props: {
    name: {},
    size: {},
    color: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const iconsData2 = useIconsData();
    const type = computed(() => {
      if (typeof props.name === "string" && (isLinkHttp(props.name) || props.name[0] === "/")) {
        return "link";
      }
      if (typeof props.name === "object" && !!props.name.svg) {
        return "svg";
      }
      if (typeof props.name === "string" && iconsData2.value[props.name]) {
        return "local";
      }
      return "remote";
    });
    const svg = computed(() => {
      if (type.value === "svg")
        return props.name.svg;
      return "";
    });
    const link = computed(() => {
      if (type.value === "link") {
        const link2 = props.name;
        return isLinkHttp(link2) ? link2 : withBase(link2);
      }
      return "";
    });
    const className = computed(() => {
      if (type.value === "local") {
        const name = props.name;
        return iconsData2.value[name] || "";
      }
      return "";
    });
    const size = computed(() => {
      const size2 = props.size;
      if (!size2)
        return void 0;
      if (String(Number(size2)) === size2)
        return `${size2}px`;
      return size2;
    });
    const style = computed(() => ({
      "background-color": props.color,
      "width": size.value,
      "height": size.value
    }));
    const __returned__ = { props, iconsData: iconsData2, type, svg, link, className, size, style, VPIconify };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.type === "link") {
    _push(`<span${ssrRenderAttrs(mergeProps({ class: "vp-icon-img" }, _attrs))} data-v-b4d9ccea><img${ssrRenderAttr("src", $setup.link)} alt="" style="${ssrRenderStyle({ height: $setup.size })}" data-v-b4d9ccea></span>`);
  } else if ($setup.type === "svg") {
    _push(`<span${ssrRenderAttrs(mergeProps({
      class: "vp-icon",
      style: $setup.style
    }, _attrs))} data-v-b4d9ccea>${$setup.svg ?? ""}</span>`);
  } else if ($setup.type === "local" && $setup.className) {
    _push(`<span${ssrRenderAttrs(mergeProps({
      class: ["vp-icon", [$setup.className]],
      style: $setup.style
    }, _attrs))} data-v-b4d9ccea></span>`);
  } else {
    _push(ssrRenderComponent($setup["VPIconify"], mergeProps({
      name: $props.name,
      size: $setup.size,
      color: $props.color
    }, _attrs), null, _parent));
  }
}
const _sfc_setup$1p = _sfc_main$1p.setup;
_sfc_main$1p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPIcon.vue");
  return _sfc_setup$1p ? _sfc_setup$1p(props, ctx) : void 0;
};
const VPIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1p, [["ssrRender", _sfc_ssrRender$1p], ["__scopeId", "data-v-b4d9ccea"], ["__file", "VPIcon.vue"]]);
const _sfc_main$1o = /* @__PURE__ */ defineComponent({
  __name: "VPCard",
  props: {
    title: {},
    icon: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const icon = computed(() => {
      var _a;
      if (((_a = props.icon) == null ? void 0 : _a[0]) === "{") {
        try {
          return JSON.parse(icon);
        } catch {
        }
      }
      return props.icon;
    });
    const __returned__ = { props, icon, VPIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "vp-card-wrapper" }, _attrs))} data-v-2461ac93>`);
  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
    if ($props.title || $setup.icon) {
      _push(`<p class="title" data-v-2461ac93>`);
      if ($setup.icon) {
        _push(ssrRenderComponent($setup["VPIcon"], { name: $setup.icon }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ($props.title) {
        _push(`<span data-v-2461ac93>${$props.title ?? ""}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p>`);
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<div class="body" data-v-2461ac93>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></article>`);
}
const _sfc_setup$1o = _sfc_main$1o.setup;
_sfc_main$1o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/global/VPCard.vue");
  return _sfc_setup$1o ? _sfc_setup$1o(props, ctx) : void 0;
};
const VPCard = /* @__PURE__ */ _export_sfc(_sfc_main$1o, [["ssrRender", _sfc_ssrRender$1o], ["__scopeId", "data-v-2461ac93"], ["__file", "VPCard.vue"]]);
const _sfc_main$1n = /* @__PURE__ */ defineComponent({
  __name: "VPCardGrid",
  props: {
    cols: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const md = useMediaQuery("(min-width: 768px)");
    const lg = useMediaQuery("(min-width: 960px)");
    const repeat = ref(1);
    function resolveCols() {
      const reset = { sm: 1, md: 2, lg: 2 };
      if (!props.cols)
        return reset;
      if (typeof props.cols === "number" || typeof props.cols === "string") {
        const cols = Number(props.cols);
        return { sm: cols, md: cols, lg: cols };
      }
      return { ...reset, ...toValue(props.cols) };
    }
    function getRepeat() {
      const cols = resolveCols();
      if (lg.value)
        return cols.lg;
      if (md.value)
        return cols.md;
      return cols.sm;
    }
    watch(() => [md.value, lg.value, props.cols], () => {
      repeat.value = getRepeat();
    });
    onMounted(() => {
      repeat.value = getRepeat();
    });
    const __returned__ = { props, md, lg, repeat, resolveCols, getRepeat };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vp-card-grid", [`cols-${$setup.repeat}`]],
    style: { gridTemplateColumns: `repeat(${$setup.repeat}, 1fr)` }
  }, _attrs))} data-v-5027bc73>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1n = _sfc_main$1n.setup;
_sfc_main$1n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/global/VPCardGrid.vue");
  return _sfc_setup$1n ? _sfc_setup$1n(props, ctx) : void 0;
};
const VPCardGrid = /* @__PURE__ */ _export_sfc(_sfc_main$1n, [["ssrRender", _sfc_ssrRender$1n], ["__scopeId", "data-v-5027bc73"], ["__file", "VPCardGrid.vue"]]);
const _sfc_main$1m = /* @__PURE__ */ defineComponent({
  __name: "VPImageCard",
  props: {
    image: {},
    title: {},
    description: {},
    href: {},
    author: {},
    date: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const lang = usePageLang();
    const title = computed(() => {
      if (props.title)
        return props.title;
      const image = props.image || "";
      const dirs = image.split("/");
      return dirs[dirs.length - 1];
    });
    const date = computed(() => {
      if (!props.date)
        return "";
      const date2 = props.date instanceof Date ? props.date : new Date(props.date);
      const intl = new Intl.DateTimeFormat(
        lang.value,
        { year: "numeric", month: "short", day: "numeric" }
      );
      return intl.format(date2);
    });
    const __returned__ = { props, lang, title, date };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-image-card" }, _attrs))} data-v-6ee5292e><div class="image-container" data-v-6ee5292e><img${ssrRenderAttr("src", $props.image)}${ssrRenderAttr("alt", $setup.title)} loading="lazy" data-v-6ee5292e><div class="image-info" data-v-6ee5292e><h3 class="title" data-v-6ee5292e>`);
  if ($props.href) {
    _push(`<a${ssrRenderAttr("href", $props.href)} target="_blank" rel="noopener noreferrer" class="no-icon" data-v-6ee5292e>${ssrInterpolate($setup.title)}</a>`);
  } else {
    _push(`<span data-v-6ee5292e>${ssrInterpolate($setup.title)}</span>`);
  }
  _push(`</h3>`);
  if ($props.author || $setup.date) {
    _push(`<p class="copyright" data-v-6ee5292e>`);
    if ($props.author) {
      _push(`<span data-v-6ee5292e>${ssrInterpolate($props.author)}</span>`);
    } else {
      _push(`<!---->`);
    }
    if ($props.author && $setup.date) {
      _push(`<span data-v-6ee5292e> | </span>`);
    } else {
      _push(`<!---->`);
    }
    if ($setup.date) {
      _push(`<span data-v-6ee5292e>${ssrInterpolate($setup.date)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.description) {
    _push(`<p class="description" data-v-6ee5292e>${ssrInterpolate($props.description)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup$1m = _sfc_main$1m.setup;
_sfc_main$1m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/global/VPImageCard.vue");
  return _sfc_setup$1m ? _sfc_setup$1m(props, ctx) : void 0;
};
const VPImageCard = /* @__PURE__ */ _export_sfc(_sfc_main$1m, [["ssrRender", _sfc_ssrRender$1m], ["__scopeId", "data-v-6ee5292e"], ["__file", "VPImageCard.vue"]]);
const _sfc_main$1l = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  props: {
    tag: {},
    href: {},
    text: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const router = useRouter();
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const { link, isExternal } = useLink(toRef(props, "href"), toRef(props, "target"));
    function linkTo(e) {
      if (!isExternal.value) {
        e.preventDefault();
        if (link.value)
          router.push(link.value);
      }
    }
    const __returned__ = { props, router, tag, link, isExternal, linkTo, get withBase() {
      return withBase;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent($setup.tag), mergeProps({
    class: ["vp-link no-icon", { link: $setup.link }],
    href: $setup.withBase($setup.link || ""),
    target: $props.target ?? ($setup.isExternal ? "_blank" : void 0),
    rel: $props.rel ?? ($setup.isExternal ? "noreferrer" : void 0),
    onClick: ($event) => $setup.linkTo($event)
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push2(`${ssrInterpolate($props.text || $props.href)}`);
        }, _push2, _parent2, _scopeId);
        if ($setup.isExternal && !$props.noIcon) {
          _push2(`<span class="vpi-external-link icon" data-v-4cf2465c${_scopeId}></span>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString($props.text || $props.href), 1)
          ], true),
          $setup.isExternal && !$props.noIcon ? (openBlock(), createBlock("span", {
            key: 0,
            class: "vpi-external-link icon"
          })) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$1l = _sfc_main$1l.setup;
_sfc_main$1l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPLink.vue");
  return _sfc_setup$1l ? _sfc_setup$1l(props, ctx) : void 0;
};
const VPLink = /* @__PURE__ */ _export_sfc(_sfc_main$1l, [["ssrRender", _sfc_ssrRender$1l], ["__scopeId", "data-v-4cf2465c"], ["__file", "VPLink.vue"]]);
const _sfc_main$1k = /* @__PURE__ */ defineComponent({
  __name: "VPLinkCard",
  props: {
    href: {},
    title: {},
    icon: {},
    description: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VPIcon, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-link-card" }, _attrs))} data-v-ad0c865c><span class="body" data-v-ad0c865c>`);
  _push(ssrRenderComponent($setup["VPLink"], {
    href: $props.href,
    "no-icon": "",
    class: "link no-icon"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
          if ($props.icon) {
            _push2(ssrRenderComponent($setup["VPIcon"], { name: $props.icon }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          if ($props.title) {
            _push2(`<span data-v-ad0c865c${_scopeId}>${$props.title ?? ""}</span>`);
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "title", {}, () => [
            $props.icon ? (openBlock(), createBlock($setup["VPIcon"], {
              key: 0,
              name: $props.icon
            }, null, 8, ["name"])) : createCommentVNode("", true),
            $props.title ? (openBlock(), createBlock("span", {
              key: 1,
              innerHTML: $props.title
            }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
          ], true)
        ];
      }
    }),
    _: 3
  }, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    if ($props.description) {
      _push(`<p data-v-ad0c865c>${$props.description ?? ""}</p>`);
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</span><span class="vpi-arrow-right" data-v-ad0c865c></span></div>`);
}
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/global/VPLinkCard.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
const VPLinkCard = /* @__PURE__ */ _export_sfc(_sfc_main$1k, [["ssrRender", _sfc_ssrRender$1k], ["__scopeId", "data-v-ad0c865c"], ["__file", "VPLinkCard.vue"]]);
const _sfc_main$1j = /* @__PURE__ */ defineComponent({
  __name: "VPHomeBox",
  props: {
    type: {},
    full: { type: Boolean },
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean },
    containerClass: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isDark = useDarkMode();
    const styles = computed(() => {
      if (!props.backgroundImage)
        return null;
      const image = typeof props.backgroundImage === "string" ? props.backgroundImage : props.backgroundImage[isDark.value ? "dark" : "light"] ?? props.backgroundImage.light;
      const link = isLinkHttp(image) ? props.backgroundImage : withBase(image);
      return {
        "background-image": `url(${link})`,
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-attachment": props.backgroundAttachment || ""
      };
    });
    const containerClass = computed(() => normalizeClass(props.containerClass || ""));
    const __returned__ = { props, isDark, styles, containerClass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vp-home-box", { full: $setup.props.full }],
    style: $setup.styles
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
  _push(`<div class="${ssrRenderClass([$setup.containerClass, "container"])}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Home/VPHomeBox.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
const VPHomeBox = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["ssrRender", _sfc_ssrRender$1j], ["__file", "VPHomeBox.vue"]]);
const _sfc_main$1i = {};
function _sfc_ssrRender$1i(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "vp-switch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-ca10b6e4><span class="check" data-v-ca10b6e4>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-ca10b6e4>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPSwitch.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["ssrRender", _sfc_ssrRender$1i], ["__scopeId", "data-v-ca10b6e4"], ["__file", "VPSwitch.vue"]]);
const _sfc_main$1h = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  setup(__props, { expose: __expose }) {
    __expose();
    const checked = ref(false);
    const { theme, isDark } = useData();
    const toggleAppearance = inject("toggle-appearance", () => {
      isDark.value = !isDark.value;
    });
    const switchTitle = ref("");
    watchPostEffect(() => {
      switchTitle.value = isDark.value ? theme.value.lightModeSwitchTitle || "Switch to light theme" : theme.value.darkModeSwitchTitle || "Switch to dark theme";
    });
    const __returned__ = { checked, theme, isDark, toggleAppearance, switchTitle, VPSwitch };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["VPSwitch"], mergeProps({
    class: "vp-switch-appearance",
    title: $setup.switchTitle,
    "aria-checked": $setup.checked,
    onClick: $setup.toggleAppearance
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="vpi-sun sun" data-v-b50b5673${_scopeId}></span><span class="vpi-moon moon" data-v-b50b5673${_scopeId}></span>`);
      } else {
        return [
          createVNode("span", { class: "vpi-sun sun" }),
          createVNode("span", { class: "vpi-moon moon" })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPSwitchAppearance.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["ssrRender", _sfc_ssrRender$1h], ["__scopeId", "data-v-b50b5673"], ["__file", "VPSwitchAppearance.vue"]]);
const _sfc_main$1g = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme } = useData();
    const __returned__ = { theme, VPSwitchAppearance };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.theme.appearance && $setup.theme.appearance !== "force-dark") {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-navbar-appearance" }, _attrs))} data-v-187b9f2f>`);
    _push(ssrRenderComponent($setup["VPSwitchAppearance"], null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavBarAppearance.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["ssrRender", _sfc_ssrRender$1g], ["__scopeId", "data-v-187b9f2f"], ["__file", "VPNavBarAppearance.vue"]]);
const _sfc_main$1f = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  props: {
    item: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const { page } = useData();
    const __returned__ = { page, VPIcon, VPLink, get resolveRouteFullPath() {
      return resolveRouteFullPath;
    }, get isActive() {
      return isActive;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-menu-link" }, _attrs))} data-v-0e289a28>`);
  _push(ssrRenderComponent($setup["VPLink"], {
    class: {
      active: $setup.isActive(
        $setup.page.path,
        $props.item.activeMatch || $setup.resolveRouteFullPath($props.item.link),
        !!$props.item.activeMatch
      )
    },
    href: $props.item.link
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($props.item.icon) {
          _push2(ssrRenderComponent($setup["VPIcon"], {
            name: $props.item.icon
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(` ${ssrInterpolate($props.item.text)}`);
      } else {
        return [
          $props.item.icon ? (openBlock(), createBlock($setup["VPIcon"], {
            key: 0,
            name: $props.item.icon
          }, null, 8, ["name"])) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString($props.item.text), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPMenuLink.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["ssrRender", _sfc_ssrRender$1f], ["__scopeId", "data-v-0e289a28"], ["__file", "VPMenuLink.vue"]]);
const _sfc_main$1e = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  props: {
    text: {},
    icon: {},
    items: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VPIcon, VPMenuLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-menu-group" }, _attrs))} data-v-4a7abda0>`);
  if ($props.text) {
    _push(`<p class="title" data-v-4a7abda0>`);
    if ($props.icon) {
      _push(ssrRenderComponent($setup["VPIcon"], { name: $props.icon }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<span data-v-4a7abda0>${ssrInterpolate($props.text)}</span></p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<!--[-->`);
    if ("link" in item) {
      _push(ssrRenderComponent($setup["VPMenuLink"], {
        key: item == null ? void 0 : item.link,
        item
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPMenuGroup.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["ssrRender", _sfc_ssrRender$1e], ["__scopeId", "data-v-4a7abda0"], ["__file", "VPMenuGroup.vue"]]);
const _sfc_main$1d = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  props: {
    items: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VPMenuGroup, VPMenuLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-menu" }, _attrs))} data-v-64a9aecf>`);
  if ($props.items) {
    _push(`<div class="items" data-v-64a9aecf><!--[-->`);
    ssrRenderList($props.items, (item) => {
      _push(`<!--[-->`);
      if ("link" in item) {
        _push(ssrRenderComponent($setup["VPMenuLink"], { item }, null, _parent));
      } else {
        _push(ssrRenderComponent($setup["VPMenuGroup"], {
          text: item.text,
          items: item.items,
          icon: item.icon
        }, null, _parent));
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPMenu.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["ssrRender", _sfc_ssrRender$1d], ["__scopeId", "data-v-64a9aecf"], ["__file", "VPMenu.vue"]]);
const _sfc_main$1c = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  props: {
    prefixIcon: {},
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    const __returned__ = { open, el, onBlur, VPIcon, VPMenu };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "el",
    class: "vp-flyout"
  }, _attrs))} data-v-adf561bd><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", $setup.open)}${ssrRenderAttr("aria-label", $props.label)} data-v-adf561bd>`);
  if ($props.button || $props.icon) {
    _push(`<span class="text" data-v-adf561bd>`);
    if ($props.prefixIcon) {
      _push(ssrRenderComponent($setup["VPIcon"], { name: $props.prefixIcon }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($props.icon) {
      _push(`<span class="${ssrRenderClass([[$props.icon], "option-icon"])}" data-v-adf561bd></span>`);
    } else {
      _push(`<!---->`);
    }
    if ($props.button) {
      _push(`<span data-v-adf561bd>${$props.button ?? ""}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<span class="vpi-chevron-down text-icon" data-v-adf561bd></span></span>`);
  } else {
    _push(`<span class="vpi-more-horizontal icon" data-v-adf561bd></span>`);
  }
  _push(`</button><div class="menu" data-v-adf561bd>`);
  _push(ssrRenderComponent($setup["VPMenu"], { items: $props.items }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPFlyout.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["ssrRender", _sfc_ssrRender$1c], ["__scopeId", "data-v-adf561bd"], ["__file", "VPFlyout.vue"]]);
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const svg = computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return `<span class="vpi-social-${props.icon}" />`;
    });
    const __returned__ = { props, svg };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    class: "vp-social-link no-icon",
    href: $props.link,
    "aria-label": $props.ariaLabel ?? (typeof $props.icon === "string" ? $props.icon : ""),
    target: "_blank",
    rel: "noopener"
  }, _attrs))} data-v-501bae4c>${$setup.svg ?? ""}</a>`);
}
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPSocialLink.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["ssrRender", _sfc_ssrRender$1b], ["__scopeId", "data-v-501bae4c"], ["__file", "VPSocialLink.vue"]]);
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  props: {
    links: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VPSocialLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-social-links" }, _attrs))} data-v-8914e359><!--[-->`);
  ssrRenderList($props.links, ({ link, icon }) => {
    _push(ssrRenderComponent($setup["VPSocialLink"], {
      key: link,
      icon,
      link
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPSocialLinks.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["ssrRender", _sfc_ssrRender$1a], ["__scopeId", "data-v-8914e359"], ["__file", "VPSocialLinks.vue"]]);
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme } = useData();
    const { localeLinks, currentLang } = useLangs();
    const social = computed(() => {
      var _a;
      const includes = theme.value.navbarSocialInclude ?? [];
      if (!includes.length)
        return theme.value.social;
      return (_a = theme.value.social) == null ? void 0 : _a.filter(({ icon }) => {
        if (typeof icon === "string")
          return includes.includes(icon);
        if (icon.name)
          return includes.includes(icon.name);
        return false;
      });
    });
    const hasExtraContent = computed(
      () => {
        var _a;
        return localeLinks.value.length && currentLang.value.label || theme.value.appearance || ((_a = social.value) == null ? void 0 : _a.length);
      }
    );
    const __returned__ = { theme, localeLinks, currentLang, social, hasExtraContent, VPFlyout, VPMenuLink, VPSocialLinks, VPSwitchAppearance };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$19(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.hasExtraContent) {
    _push(ssrRenderComponent($setup["VPFlyout"], mergeProps({
      class: "vp-navbar-extra",
      label: "extra navigation"
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if ($setup.localeLinks.length && $setup.currentLang.label) {
            _push2(`<div class="group translations" data-v-db7add1c${_scopeId}><p class="trans-title" data-v-db7add1c${_scopeId}>${ssrInterpolate($setup.currentLang.label)}</p><!--[-->`);
            ssrRenderList($setup.localeLinks, (locale) => {
              _push2(ssrRenderComponent($setup["VPMenuLink"], { item: locale }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            _push2(`<!---->`);
          }
          if ($setup.theme.appearance && $setup.theme.appearance !== "force-dark") {
            _push2(`<div class="group" data-v-db7add1c${_scopeId}><div class="item appearance" data-v-db7add1c${_scopeId}><p class="label" data-v-db7add1c${_scopeId}>${ssrInterpolate($setup.theme.appearanceText || "Appearance")}</p><div class="appearance-action" data-v-db7add1c${_scopeId}>`);
            _push2(ssrRenderComponent($setup["VPSwitchAppearance"], null, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          if ($setup.social) {
            _push2(`<div class="group" data-v-db7add1c${_scopeId}><div class="item social-links" data-v-db7add1c${_scopeId}>`);
            _push2(ssrRenderComponent($setup["VPSocialLinks"], {
              class: "social-links-list",
              links: $setup.social
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            $setup.localeLinks.length && $setup.currentLang.label ? (openBlock(), createBlock("div", {
              key: 0,
              class: "group translations"
            }, [
              createVNode("p", { class: "trans-title" }, toDisplayString($setup.currentLang.label), 1),
              (openBlock(true), createBlock(Fragment, null, renderList($setup.localeLinks, (locale) => {
                return openBlock(), createBlock($setup["VPMenuLink"], {
                  key: locale.link,
                  item: locale
                }, null, 8, ["item"]);
              }), 128))
            ])) : createCommentVNode("", true),
            $setup.theme.appearance && $setup.theme.appearance !== "force-dark" ? (openBlock(), createBlock("div", {
              key: 1,
              class: "group"
            }, [
              createVNode("div", { class: "item appearance" }, [
                createVNode("p", { class: "label" }, toDisplayString($setup.theme.appearanceText || "Appearance"), 1),
                createVNode("div", { class: "appearance-action" }, [
                  createVNode($setup["VPSwitchAppearance"])
                ])
              ])
            ])) : createCommentVNode("", true),
            $setup.social ? (openBlock(), createBlock("div", {
              key: 2,
              class: "group"
            }, [
              createVNode("div", { class: "item social-links" }, [
                createVNode($setup["VPSocialLinks"], {
                  class: "social-links-list",
                  links: $setup.social
                }, null, 8, ["links"])
              ])
            ])) : createCommentVNode("", true)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavBarExtra.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["ssrRender", _sfc_ssrRender$19], ["__scopeId", "data-v-db7add1c"], ["__file", "VPNavBarExtra.vue"]]);
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$18(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: ["vp-navbar-hamburger", { active: $props.active }],
    "aria-label": "mobile navigation",
    "aria-expanded": $props.active,
    "aria-controls": "nav-screen"
  }, _attrs))} data-v-0f20a9ac><span class="container" data-v-0f20a9ac><span class="top" data-v-0f20a9ac></span><span class="middle" data-v-0f20a9ac></span><span class="bottom" data-v-0f20a9ac></span></span></button>`);
}
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavBarHamburger.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["ssrRender", _sfc_ssrRender$18], ["__scopeId", "data-v-0f20a9ac"], ["__file", "VPNavBarHamburger.vue"]]);
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  props: {
    item: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { page } = useData();
    function isChildActive(navItem) {
      if ("link" in navItem) {
        return isActive(
          page.value.path,
          resolveRouteFullPath(navItem.link),
          !!props.item.activeMatch
        );
      } else {
        return navItem.items.some(isChildActive);
      }
    }
    const childrenActive = computed(() => isChildActive(props.item));
    const __returned__ = { props, page, isChildActive, childrenActive, VPFlyout, get isActive() {
      return isActive;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$17(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["VPFlyout"], mergeProps({
    class: ["vp-navbar-menu-group", {
      active: $setup.isActive(
        $setup.page.path,
        $props.item.activeMatch,
        !!$props.item.activeMatch
      ) || $setup.childrenActive
    }],
    button: $props.item.text,
    items: $props.item.items,
    "prefix-icon": $props.item.icon
  }, _attrs), null, _parent));
}
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavBarMenuGroup.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const VPNavBarMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["ssrRender", _sfc_ssrRender$17], ["__file", "VPNavBarMenuGroup.vue"]]);
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  props: {
    item: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const { page } = useData();
    const __returned__ = { page, VPIcon, VPLink, get resolveRouteFullPath() {
      return resolveRouteFullPath;
    }, get isActive() {
      return isActive;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$16(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["VPLink"], mergeProps({
    class: ["navbar-menu-link", {
      active: $setup.isActive(
        $setup.page.path,
        $props.item.activeMatch || $setup.resolveRouteFullPath($props.item.link),
        !!$props.item.activeMatch
      )
    }],
    href: $props.item.link,
    "no-icon": $props.item.noIcon,
    target: $props.item.target,
    rel: $props.item.rel,
    tabindex: "0"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($props.item.icon) {
          _push2(ssrRenderComponent($setup["VPIcon"], {
            name: $props.item.icon
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<span data-v-f647df42${_scopeId}>${$props.item.text ?? ""}</span>`);
      } else {
        return [
          $props.item.icon ? (openBlock(), createBlock($setup["VPIcon"], {
            key: 0,
            name: $props.item.icon
          }, null, 8, ["name"])) : createCommentVNode("", true),
          createVNode("span", {
            innerHTML: $props.item.text
          }, null, 8, ["innerHTML"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavBarMenuLink.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["ssrRender", _sfc_ssrRender$16], ["__scopeId", "data-v-f647df42"], ["__file", "VPNavBarMenuLink.vue"]]);
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  setup(__props, { expose: __expose }) {
    __expose();
    const navbar = useNavbarData();
    const __returned__ = { navbar, VPNavBarMenuGroup, VPNavBarMenuLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$15(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.navbar.length) {
    _push(`<nav${ssrRenderAttrs(mergeProps({
      "aria-labelledby": "main-nav-aria-label",
      class: "vp-navbar-menu"
    }, _attrs))} data-v-8be35ef1><span id="main-nav-aria-label" class="visually-hidden" data-v-8be35ef1>Main Navigation</span><!--[-->`);
    ssrRenderList($setup.navbar, (item) => {
      _push(`<!--[-->`);
      if ("link" in item) {
        _push(ssrRenderComponent($setup["VPNavBarMenuLink"], { item }, null, _parent));
      } else {
        _push(ssrRenderComponent($setup["VPNavBarMenuGroup"], { item }, null, _parent));
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></nav>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavBarMenu.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["ssrRender", _sfc_ssrRender$15], ["__scopeId", "data-v-8be35ef1"], ["__file", "VPNavBarMenu.vue"]]);
const _sfc_main$14 = {};
function _sfc_ssrRender$14(_ctx, _push, _parent, _attrs) {
  const _component_SearchBox = resolveComponent("SearchBox");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-navbar-search" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_SearchBox, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavBarSearch.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const VPNavBarSearch = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["ssrRender", _sfc_ssrRender$14], ["__file", "VPNavBarSearch.vue"]]);
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme } = useData();
    const social = computed(() => {
      var _a;
      const includes = theme.value.navbarSocialInclude ?? [];
      if (!includes.length)
        return theme.value.social;
      return (_a = theme.value.social) == null ? void 0 : _a.filter(({ icon }) => {
        if (typeof icon === "string")
          return includes.includes(icon);
        if (icon.name)
          return includes.includes(icon.name);
        return false;
      });
    });
    const __returned__ = { theme, social, VPSocialLinks };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$13(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.social) {
    _push(ssrRenderComponent($setup["VPSocialLinks"], mergeProps({
      class: "vp-navbar-social-links",
      links: $setup.social
    }, _attrs), null, _parent));
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavBarSocialLinks.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["ssrRender", _sfc_ssrRender$13], ["__scopeId", "data-v-e8e8bd28"], ["__file", "VPNavBarSocialLinks.vue"]]);
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "VPImage",
  props: {
    image: {},
    alt: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get withBase() {
      return withBase;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$12(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VPImage = resolveComponent("VPImage", true);
  if ($props.image) {
    _push(`<!--[-->`);
    if (typeof $props.image === "string" || "src" in $props.image) {
      _push(`<img${ssrRenderAttrs(mergeProps({ class: "vp-image" }, typeof $props.image === "string" ? _ctx.$attrs : { ...$props.image, ..._ctx.$attrs }, {
        src: $setup.withBase(typeof $props.image === "string" ? $props.image : $props.image.src),
        alt: $props.alt ?? (typeof $props.image === "string" ? "" : $props.image.alt || "")
      }))} data-v-1610b399>`);
    } else {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_VPImage, mergeProps({
        class: "dark",
        image: $props.image.dark,
        alt: $props.image.alt
      }, _ctx.$attrs), null, _parent));
      _push(ssrRenderComponent(_component_VPImage, mergeProps({
        class: "light",
        image: $props.image.light,
        alt: $props.image.alt
      }, _ctx.$attrs), null, _parent));
      _push(`<!--]-->`);
    }
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPImage.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["ssrRender", _sfc_ssrRender$12], ["__scopeId", "data-v-1610b399"], ["__file", "VPImage.vue"]]);
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme, site } = useData();
    const { hasSidebar } = useSidebar();
    const routeLocale = useRouteLocale();
    const __returned__ = { theme, site, hasSidebar, routeLocale, VPImage, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$11(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vp-navbar-title", { "has-sidebar": $setup.hasSidebar }]
  }, _attrs))} data-v-40a6a422>`);
  _push(ssrRenderComponent($setup["VPLink"], {
    class: "title",
    href: $setup.theme.home ?? $setup.routeLocale
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
        if ($setup.theme.logo) {
          _push2(ssrRenderComponent($setup["VPImage"], {
            class: "logo",
            image: { light: $setup.theme.logo, dark: $setup.theme.logoDark || $setup.theme.logo }
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<span data-v-40a6a422${_scopeId}>${ssrInterpolate($setup.site.title)}</span>`);
        ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true),
          $setup.theme.logo ? (openBlock(), createBlock($setup["VPImage"], {
            key: 0,
            class: "logo",
            image: { light: $setup.theme.logo, dark: $setup.theme.logoDark || $setup.theme.logo }
          }, null, 8, ["image"])) : createCommentVNode("", true),
          createVNode("span", null, toDisplayString($setup.site.title), 1),
          renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavBarTitle.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["ssrRender", _sfc_ssrRender$11], ["__scopeId", "data-v-40a6a422"], ["__file", "VPNavBarTitle.vue"]]);
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme } = useData();
    const { currentLang, localeLinks } = useLangs();
    const __returned__ = { theme, currentLang, localeLinks, VPFlyout, VPMenuLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$10(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.localeLinks.length && $setup.currentLang.label) {
    _push(ssrRenderComponent($setup["VPFlyout"], mergeProps({
      class: "vp-navbar-translations",
      icon: "vpi-languages",
      label: $setup.theme.selectLanguageText || "Change Language"
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="items" data-v-771f1fc2${_scopeId}><p class="title" data-v-771f1fc2${_scopeId}>${ssrInterpolate($setup.currentLang.label)}</p><!--[-->`);
          ssrRenderList($setup.localeLinks, (locale) => {
            _push2(ssrRenderComponent($setup["VPMenuLink"], { item: locale }, null, _parent2, _scopeId));
          });
          _push2(`<!--]--></div>`);
        } else {
          return [
            createVNode("div", { class: "items" }, [
              createVNode("p", { class: "title" }, toDisplayString($setup.currentLang.label), 1),
              (openBlock(true), createBlock(Fragment, null, renderList($setup.localeLinks, (locale) => {
                return openBlock(), createBlock($setup["VPMenuLink"], {
                  key: locale.link,
                  item: locale
                }, null, 8, ["item"]);
              }), 128))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavBarTranslations.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["ssrRender", _sfc_ssrRender$10], ["__scopeId", "data-v-771f1fc2"], ["__file", "VPNavBarTranslations.vue"]]);
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggleScreen"],
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { frontmatter } = useData();
    const { y: y2 } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const classes2 = ref({});
    watchPostEffect(() => {
      classes2.value = {
        "has-sidebar": hasSidebar.value,
        "home": frontmatter.value.pageLayout === "home",
        "top": y2.value === 0,
        "screen-open": props.isScreenOpen
      };
    });
    const __returned__ = { props, frontmatter, y: y2, hasSidebar, classes: classes2, VPNavBarAppearance, VPNavBarExtra, VPNavBarHamburger, VPNavBarMenu, VPNavBarSearch, VPNavBarSocialLinks, VPNavBarTitle, VPNavBarTranslations };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$$(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vp-navbar", $setup.classes],
    "vp-navbar": ""
  }, _attrs))} data-v-9bf91a26><div class="wrapper" data-v-9bf91a26><div class="container" data-v-9bf91a26><div class="title" data-v-9bf91a26>`);
  _push(ssrRenderComponent($setup["VPNavBarTitle"], null, {
    "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
        ];
      }
    }),
    "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div><div class="content" data-v-9bf91a26><div class="content-body" data-v-9bf91a26>`);
  ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
  _push(ssrRenderComponent($setup["VPNavBarSearch"], { class: "search" }, null, _parent));
  _push(ssrRenderComponent($setup["VPNavBarMenu"], { class: "menu" }, null, _parent));
  _push(ssrRenderComponent($setup["VPNavBarTranslations"], { class: "translations" }, null, _parent));
  _push(ssrRenderComponent($setup["VPNavBarAppearance"], { class: "appearance" }, null, _parent));
  _push(ssrRenderComponent($setup["VPNavBarSocialLinks"], { class: "social-links" }, null, _parent));
  _push(ssrRenderComponent($setup["VPNavBarExtra"], { class: "extra" }, null, _parent));
  ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
  _push(ssrRenderComponent($setup["VPNavBarHamburger"], {
    class: "hamburger",
    active: $props.isScreenOpen,
    onClick: ($event) => _ctx.$emit("toggleScreen")
  }, null, _parent));
  _push(`</div></div></div></div><div class="divider" data-v-9bf91a26><div class="divider-line" data-v-9bf91a26></div></div></div>`);
}
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavBar.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const VPNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["ssrRender", _sfc_ssrRender$$], ["__scopeId", "data-v-9bf91a26"], ["__file", "VPNavBar.vue"]]);
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme } = useData();
    const __returned__ = { theme, VPSwitchAppearance };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$_(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.theme.appearance && $setup.theme.appearance !== "force-dark") {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-nav-screen-appearance" }, _attrs))} data-v-57133d1b><p class="text" data-v-57133d1b>${ssrInterpolate($setup.theme.appearanceText ?? "Appearance")}</p>`);
    _push(ssrRenderComponent($setup["VPSwitchAppearance"], null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavScreenAppearance.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$_], ["__scopeId", "data-v-57133d1b"], ["__file", "VPNavScreenAppearance.vue"]]);
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  props: {
    item: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const closeScreen = inject("close-screen");
    const __returned__ = { closeScreen, VPIcon, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$Z(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["VPLink"], mergeProps({
    class: "vp-nav-screen-menu-group-link",
    href: $props.item.link,
    target: $props.item.target,
    rel: $props.item.rel,
    "no-icon": $props.item.noIcon,
    onClick: $setup.closeScreen
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($props.item.icon) {
          _push2(ssrRenderComponent($setup["VPIcon"], {
            name: $props.item.icon
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<span data-v-92e31d01${_scopeId}>${$props.item.text ?? ""}</span>`);
      } else {
        return [
          $props.item.icon ? (openBlock(), createBlock($setup["VPIcon"], {
            key: 0,
            name: $props.item.icon
          }, null, 8, ["name"])) : createCommentVNode("", true),
          createVNode("span", {
            innerHTML: $props.item.text
          }, null, 8, ["innerHTML"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["ssrRender", _sfc_ssrRender$Z], ["__scopeId", "data-v-92e31d01"], ["__file", "VPNavScreenMenuGroupLink.vue"]]);
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  props: {
    icon: {},
    text: {},
    items: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VPNavScreenMenuGroupLink, VPIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$Y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-nav-screen-menu-group-section" }, _attrs))} data-v-f3f6d39e>`);
  if ($props.text) {
    _push(`<p class="title" data-v-f3f6d39e>`);
    if ($props.icon) {
      _push(ssrRenderComponent($setup["VPIcon"], { name: $props.icon }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(` ${ssrInterpolate($props.text)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(ssrRenderComponent($setup["VPNavScreenMenuGroupLink"], {
      key: item.text,
      item
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["ssrRender", _sfc_ssrRender$Y], ["__scopeId", "data-v-f3f6d39e"], ["__file", "VPNavScreenMenuGroupSection.vue"]]);
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  props: {
    text: {},
    icon: {},
    items: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `nav-screen-menu-group-${props.text.replace(" ", "-").toLowerCase()}`
    );
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    const __returned__ = { props, isOpen, groupId, toggle, VPNavScreenMenuGroupLink, VPNavScreenMenuGroupSection, VPIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$X(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vp-nav-screen-menu-group", { open: $setup.isOpen }]
  }, _attrs))} data-v-ee8d5351><button class="button"${ssrRenderAttr("aria-controls", $setup.groupId)}${ssrRenderAttr("aria-expanded", $setup.isOpen)} data-v-ee8d5351><span class="button-text" data-v-ee8d5351>`);
  if ($props.icon) {
    _push(ssrRenderComponent($setup["VPIcon"], { name: $props.icon }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<span data-v-ee8d5351>${$props.text ?? ""}</span></span><span class="vpi-plus button-icon" data-v-ee8d5351></span></button><div${ssrRenderAttr("id", $setup.groupId)} class="items" data-v-ee8d5351><!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<!--[-->`);
    if ("link" in item) {
      _push(`<div class="item" data-v-ee8d5351>`);
      _push(ssrRenderComponent($setup["VPNavScreenMenuGroupLink"], { item }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<div class="group" data-v-ee8d5351>`);
      _push(ssrRenderComponent($setup["VPNavScreenMenuGroupSection"], {
        text: item.text,
        items: item.items,
        icon: item.icon
      }, null, _parent));
      _push(`</div>`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavScreenMenuGroup.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$X], ["__scopeId", "data-v-ee8d5351"], ["__file", "VPNavScreenMenuGroup.vue"]]);
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  props: {
    item: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const closeScreen = inject("close-screen");
    const __returned__ = { closeScreen, VPIcon, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$W(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["VPLink"], mergeProps({
    class: "vp-nav-screen-menu-link",
    href: $props.item.link,
    target: $props.item.target,
    rel: $props.item.rel,
    "no-icon": $props.item.noIcon,
    onClick: $setup.closeScreen
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($props.item.icon) {
          _push2(ssrRenderComponent($setup["VPIcon"], {
            name: $props.item.icon
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<span data-v-bcff65e8${_scopeId}>${$props.item.text ?? ""}</span>`);
      } else {
        return [
          $props.item.icon ? (openBlock(), createBlock($setup["VPIcon"], {
            key: 0,
            name: $props.item.icon
          }, null, 8, ["name"])) : createCommentVNode("", true),
          createVNode("span", {
            innerHTML: $props.item.text
          }, null, 8, ["innerHTML"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavScreenMenuLink.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["ssrRender", _sfc_ssrRender$W], ["__scopeId", "data-v-bcff65e8"], ["__file", "VPNavScreenMenuLink.vue"]]);
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  setup(__props, { expose: __expose }) {
    __expose();
    const navbar = useNavbarData();
    const __returned__ = { navbar, VPNavScreenMenuGroup, VPNavScreenMenuLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$V(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.navbar.length) {
    _push(`<nav${ssrRenderAttrs(mergeProps({ class: "vp-nav-screen-menu" }, _attrs))}><!--[-->`);
    ssrRenderList($setup.navbar, (item) => {
      _push(`<!--[-->`);
      if ("link" in item) {
        _push(ssrRenderComponent($setup["VPNavScreenMenuLink"], { item }, null, _parent));
      } else {
        _push(ssrRenderComponent($setup["VPNavScreenMenuGroup"], {
          text: item.text || "",
          items: item.items,
          icon: item.icon
        }, null, _parent));
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></nav>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavScreenMenu.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const VPNavScreenMenu = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$V], ["__file", "VPNavScreenMenu.vue"]]);
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme } = useData();
    const __returned__ = { theme, VPSocialLinks };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$U(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.theme.social) {
    _push(ssrRenderComponent($setup["VPSocialLinks"], mergeProps({
      class: "vp-nav-screen-social-links",
      links: $setup.theme.social
    }, _attrs), null, _parent));
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavScreenSocialLinks.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const VPNavScreenSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$U], ["__file", "VPNavScreenSocialLinks.vue"]]);
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  setup(__props, { expose: __expose }) {
    __expose();
    const { localeLinks, currentLang } = useLangs();
    const isOpen = ref(false);
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    const __returned__ = { localeLinks, currentLang, isOpen, toggle, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$T(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.localeLinks.length && $setup.currentLang.label) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: ["vp-nav-screen-translations", { open: $setup.isOpen }]
    }, _attrs))} data-v-b6435984><button class="title" data-v-b6435984><span class="vpi-languages icon lang" data-v-b6435984></span> ${ssrInterpolate($setup.currentLang.label)} <span class="vpi-chevron-down icon chevron" data-v-b6435984></span></button><ul class="list" data-v-b6435984><!--[-->`);
    ssrRenderList($setup.localeLinks, (locale) => {
      _push(`<li class="item" data-v-b6435984>`);
      _push(ssrRenderComponent($setup["VPLink"], {
        class: "link",
        href: locale.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(locale.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(locale.text), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavScreenTranslations.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const VPNavScreenTranslates = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$T], ["__scopeId", "data-v-b6435984"], ["__file", "VPNavScreenTranslations.vue"]]);
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  props: {
    open: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    const __returned__ = { isLocked, VPNavScreenAppearance, VPNavScreenMenu, VPNavScreenSocialLinks, VPNavScreenTranslates };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$S(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.open) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      id: "navScreen",
      class: "vp-nav-screen"
    }, _attrs))} data-v-649a33a1><div class="container" data-v-649a33a1>`);
    ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
    _push(ssrRenderComponent($setup["VPNavScreenMenu"], { class: "menu" }, null, _parent));
    _push(ssrRenderComponent($setup["VPNavScreenTranslates"], { class: "translations" }, null, _parent));
    _push(ssrRenderComponent($setup["VPNavScreenAppearance"], { class: "appearance" }, null, _parent));
    _push(ssrRenderComponent($setup["VPNavScreenSocialLinks"], { class: "social-links" }, null, _parent));
    ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNavScreen.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$S], ["__scopeId", "data-v-649a33a1"], ["__file", "VPNavScreen.vue"]]);
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  setup(__props, { expose: __expose }) {
    __expose();
    const { page, frontmatter } = useData();
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const fixedInclude = ["blog", "friends", "blog-archives", "blog-tags", "blog-categories"];
    const fixed = computed(() => {
      return fixedInclude.includes(page.value.type);
    });
    const hasNavbar = computed(() => {
      return frontmatter.value.navbar !== false;
    });
    provide("close-screen", closeScreen);
    watchEffect(() => {
      if (inBrowser) {
        document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
      }
    });
    const __returned__ = { page, frontmatter, isScreenOpen, closeScreen, toggleScreen, fixedInclude, fixed, hasNavbar, VPNavbar, VPNavScreen };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$R(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.hasNavbar) {
    _push(`<header${ssrRenderAttrs(mergeProps({
      class: ["vp-nav", { fixed: $setup.fixed }]
    }, _attrs))} data-v-fe69e761>`);
    _push(ssrRenderComponent($setup["VPNavbar"], {
      "is-screen-open": $setup.isScreenOpen,
      onToggleScreen: $setup.toggleScreen
    }, {
      "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
          ];
        }
      }),
      "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
          ];
        }
      }),
      "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
          ];
        }
      }),
      "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
          ];
        }
      }),
      _: 3
    }, _parent));
    _push(ssrRenderComponent($setup["VPNavScreen"], { open: $setup.isScreenOpen }, {
      "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
          ];
        }
      }),
      "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
          ];
        }
      }),
      _: 3
    }, _parent));
    _push(`</header>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Nav/VPNav.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$R], ["__scopeId", "data-v-fe69e761"], ["__file", "VPNav.vue"]]);
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  props: {
    show: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$Q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.show) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-backdrop" }, _attrs))} data-v-d841a7b7></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPBackdrop.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$Q], ["__scopeId", "data-v-d841a7b7"], ["__file", "VPBackdrop.vue"]]);
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPBackToTop",
  setup(__props, { expose: __expose }) {
    __expose();
    const body = shallowRef();
    const { height: bodyHeight } = useElementSize(body);
    const { height: windowHeight } = useWindowSize();
    onMounted(() => {
      body.value = document.body;
    });
    const { page } = useData();
    const { y: y2 } = useWindowScroll();
    const isScrolling = ref(false);
    const progress = computed(
      () => y2.value / (bodyHeight.value - windowHeight.value) * 100
    );
    const percent = computed(() => `${Math.min(Math.round(progress.value), 100) || 0}%`);
    const stroke = computed(
      () => `calc(${Math.PI * progress.value}% - ${4 * Math.PI}px) calc(${Math.PI * 100}% - ${4 * Math.PI}px)`
    );
    const mustHidden = computed(() => {
      return page.value.frontmatter.backToTop === false || page.value.frontmatter.pageLayout === "home" && page.value.frontmatter.config && page.value.frontmatter.config.length <= 1;
    });
    const show = computed(() => {
      if (bodyHeight.value < windowHeight.value)
        return false;
      else
        return y2.value > windowHeight.value / 2;
    });
    let timer = null;
    function resetScrolling() {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        isScrolling.value = false;
      }, 1e3);
    }
    watch(y2, () => {
      isScrolling.value = true;
      resetScrolling();
    });
    function handleClick() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const __returned__ = { body, bodyHeight, windowHeight, page, y: y2, isScrolling, progress, percent, stroke, mustHidden, show, get timer() {
      return timer;
    }, set timer(v2) {
      timer = v2;
    }, resetScrolling, handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$P(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    style: !$setup.mustHidden && ($setup.show || $setup.isScrolling) ? null : { display: "none" },
    type: "button",
    class: "vp-back-to-top",
    "aria-label": "back to top"
  }, _attrs))} data-v-b7b96f63><span class="${ssrRenderClass([{ show: $setup.isScrolling }, "percent"])}" data-allow-mismatch data-v-b7b96f63>${ssrInterpolate($setup.percent)}</span><span class="${ssrRenderClass([{ show: !$setup.isScrolling }, "icon vpi-back-to-top"])}" data-v-b7b96f63></span><svg aria-hidden="true" data-v-b7b96f63><circle cx="50%" cy="50%" data-allow-mismatch style="${ssrRenderStyle({ "stroke-dasharray": $setup.stroke })}" data-v-b7b96f63></circle></svg></button>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPBackToTop.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const VPBackToTop = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$P], ["__scopeId", "data-v-b7b96f63"], ["__file", "VPBackToTop.vue"]]);
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "VPBulletin",
  setup(__props, { expose: __expose }) {
    __expose();
    const UserBulletin = hasGlobalComponent("Bulletin") ? resolveComponent("Bulletin") : null;
    const UserBulletinContent = hasGlobalComponent("BulletinContent") ? resolveComponent("BulletinContent") : null;
    const { bulletin, showBulletin: showBulletin2, enableBulletin, close } = useBulletinControl();
    const __returned__ = { UserBulletin, UserBulletinContent, bulletin, showBulletin: showBulletin2, enableBulletin, close };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$O(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.UserBulletin && $setup.enableBulletin && $setup.showBulletin) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent($setup.UserBulletin), mergeProps({ class: "vp-bulletin" }, _attrs), null), _parent);
  } else if ($setup.bulletin && $setup.enableBulletin && $setup.showBulletin) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: ["vp-bulletin preset", {
        border: $setup.bulletin.border ?? true,
        [$setup.bulletin.layout ?? "top-right"]: true
      }]
    }, _attrs))}><button type="button" class="close"><span class="vpi-close"></span></button>`);
    ssrRenderSlot(_ctx.$slots, "bulletin-content", {}, () => {
      if ($setup.bulletin.title) {
        _push(`<h2>${$setup.bulletin.title ?? ""}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container">`);
      if ($setup.UserBulletinContent) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent($setup.UserBulletinContent), { class: "content vp-doc" }, null), _parent);
      } else if ($setup.bulletin.content) {
        _push(`<div class="content vp-doc">${$setup.bulletin.content ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPBulletin.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const VPBulletin = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$O], ["__file", "VPBulletin.vue"]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPShortPostList",
  props: {
    postList: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$N(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "vp-blog-short-post-list" }, _attrs))} data-v-9c367666><!--[-->`);
  ssrRenderList($props.postList, (post) => {
    _push(`<li data-v-9c367666><p class="post-title" data-v-9c367666>`);
    _push(ssrRenderComponent($setup["VPLink"], {
      class: "post-link",
      href: post.path
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(post.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(post.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</p><span class="post-time" data-v-9c367666>${ssrInterpolate(post.createTime)}</span></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPShortPostList.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const VPShortPostList = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$N], ["__scopeId", "data-v-9c367666"], ["__file", "VPShortPostList.vue"]]);
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPBlogArchives",
  setup(__props, { expose: __expose }) {
    __expose();
    const { archive: archiveLink } = useInternalLink();
    const { archives } = useArchives();
    const __returned__ = { archiveLink, archives, VPShortPostList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$M(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-blog-archives" }, _attrs))} data-v-23dcf76d>`);
  ssrRenderSlot(_ctx.$slots, "blog-archives-before", {}, null, _push, _parent);
  _push(`<h2 class="archives-title" data-v-23dcf76d><span class="vpi-archive icon" data-v-23dcf76d></span><span data-v-23dcf76d>${ssrInterpolate(((_a = $setup.archiveLink) == null ? void 0 : _a.text) ?? "Archives")}</span></h2>`);
  if ($setup.archives.length) {
    _push(`<div class="archives" data-v-23dcf76d><!--[-->`);
    ssrRenderList($setup.archives, (archive) => {
      _push(`<div class="archive" data-v-23dcf76d><h3 class="archive-title" data-v-23dcf76d>${ssrInterpolate(archive.label)}</h3>`);
      _push(ssrRenderComponent($setup["VPShortPostList"], {
        "post-list": archive.list
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "blog-archives-after", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPBlogArchives.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const VPBlogArchives = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$M], ["__scopeId", "data-v-23dcf76d"], ["__file", "VPBlogArchives.vue"]]);
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPBlogNav",
  props: {
    isLocal: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const route = useRoute();
    const { hasBlogExtract, tags, archives, categories } = useBlogExtract();
    const __returned__ = { props, route, hasBlogExtract, tags, archives, categories, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$L(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.hasBlogExtract) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: ["vp-blog-nav", { local: $setup.props.isLocal }]
    }, _attrs))} data-v-04d00098>`);
    _push(ssrRenderComponent($setup["VPLink"], {
      class: ["nav-link", { active: $setup.route.path === $setup.tags.link }],
      href: $setup.tags.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="icon icon-logo vpi-tag" data-v-04d00098${_scopeId}></span><span class="text" data-v-04d00098${_scopeId}>${ssrInterpolate($setup.tags.text)}</span><span class="total" data-v-04d00098${_scopeId}>${ssrInterpolate($setup.tags.total)}</span><span class="icon vpi-chevron-right" data-v-04d00098${_scopeId}></span>`);
        } else {
          return [
            createVNode("span", { class: "icon icon-logo vpi-tag" }),
            createVNode("span", { class: "text" }, toDisplayString($setup.tags.text), 1),
            createVNode("span", { class: "total" }, toDisplayString($setup.tags.total), 1),
            createVNode("span", { class: "icon vpi-chevron-right" })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent($setup["VPLink"], {
      class: ["nav-link", { active: $setup.route.path === $setup.categories.link }],
      href: $setup.categories.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="icon icon-logo vpi-category" data-v-04d00098${_scopeId}></span><span class="text" data-v-04d00098${_scopeId}>${ssrInterpolate($setup.categories.text)}</span><span class="total" data-v-04d00098${_scopeId}>${ssrInterpolate($setup.categories.total)}</span><span class="icon vpi-chevron-right" data-v-04d00098${_scopeId}></span>`);
        } else {
          return [
            createVNode("span", { class: "icon icon-logo vpi-category" }),
            createVNode("span", { class: "text" }, toDisplayString($setup.categories.text), 1),
            createVNode("span", { class: "total" }, toDisplayString($setup.categories.total), 1),
            createVNode("span", { class: "icon vpi-chevron-right" })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent($setup["VPLink"], {
      class: ["nav-link", { active: $setup.route.path === $setup.archives.link }],
      href: $setup.archives.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="icon icon-logo vpi-archive" data-v-04d00098${_scopeId}></span><span class="text" data-v-04d00098${_scopeId}>${ssrInterpolate($setup.archives.text)}</span><span class="total" data-v-04d00098${_scopeId}>${ssrInterpolate($setup.archives.total)}</span><span class="icon vpi-chevron-right" data-v-04d00098${_scopeId}></span>`);
        } else {
          return [
            createVNode("span", { class: "icon icon-logo vpi-archive" }),
            createVNode("span", { class: "text" }, toDisplayString($setup.archives.text), 1),
            createVNode("span", { class: "total" }, toDisplayString($setup.archives.total), 1),
            createVNode("span", { class: "icon vpi-chevron-right" })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPBlogNav.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const VPBlogNav = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$L], ["__scopeId", "data-v-04d00098"], ["__file", "VPBlogNav.vue"]]);
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPBlogProfile",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme } = useData();
    const profile = computed(
      () => theme.value.profile
    );
    const imageUrl = computed(() => {
      var _a, _b;
      const url = ((_a = profile.value) == null ? void 0 : _a.avatar) ?? ((_b = profile.value) == null ? void 0 : _b.url);
      if (!url)
        return "";
      if (isLinkHttp(url))
        return url;
      return withBase(url);
    });
    const __returned__ = { theme, profile, imageUrl, VPSocialLinks };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$K(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.profile) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-blog-profile" }, _attrs))} data-v-59b41f9f>`);
    if ($setup.imageUrl) {
      _push(`<p class="${ssrRenderClass({ circle: !!$setup.profile.circle })}" data-v-59b41f9f><img${ssrRenderAttr("src", $setup.imageUrl)}${ssrRenderAttr("alt", $setup.profile.name)}${ssrRenderAttr("width", $setup.profile.originalWidth)}${ssrRenderAttr("height", $setup.profile.originalHeight)} data-v-59b41f9f></p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="profile-info" data-v-59b41f9f><h3 data-v-59b41f9f>${ssrInterpolate($setup.profile.name)}</h3>`);
    if ($setup.profile.description) {
      _push(`<p data-v-59b41f9f>${$setup.profile.description ?? ""}</p>`);
    } else {
      _push(`<!---->`);
    }
    if ($setup.profile.location) {
      _push(`<div class="profile-location" data-v-59b41f9f><span class="vpi-location" data-v-59b41f9f></span>`);
      if ($setup.profile.location) {
        _push(`<p data-v-59b41f9f>${$setup.profile.location ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($setup.profile.organization) {
      _push(`<div class="profile-organization" data-v-59b41f9f><span class="vpi-organization" data-v-59b41f9f></span>`);
      if ($setup.profile.organization) {
        _push(`<p data-v-59b41f9f>${$setup.profile.organization ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if ($setup.theme.social) {
      _push(`<div class="profile-social" data-v-59b41f9f>`);
      _push(ssrRenderComponent($setup["VPSocialLinks"], {
        links: $setup.theme.social
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPBlogProfile.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const VPBlogProfile = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$K], ["__scopeId", "data-v-59b41f9f"], ["__file", "VPBlogProfile.vue"]]);
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPBlogAside",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme } = useData();
    const __returned__ = { theme, VPBlogNav, VPBlogProfile };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$J(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.theme.profile) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-blog-aside" }, _attrs))} data-v-7abc6b79>`);
    ssrRenderSlot(_ctx.$slots, "blog-aside-top", {}, null, _push, _parent);
    _push(ssrRenderComponent($setup["VPBlogProfile"], null, null, _parent));
    _push(ssrRenderComponent($setup["VPBlogNav"], null, null, _parent));
    ssrRenderSlot(_ctx.$slots, "blog-aside-bottom", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPBlogAside.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const VPBlogAside = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$J], ["__scopeId", "data-v-7abc6b79"], ["__file", "VPBlogAside.vue"]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPCategoriesGroup",
  props: {
    item: {},
    depth: { default: 0 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { theme } = useData();
    const route = useRoute();
    const el = ref(null);
    const expand = ref(true);
    const isExpand = ref(false);
    const expandDepth = computed(() => {
      const blog = typeof theme.value.blog === "boolean" ? {} : theme.value.blog;
      const depth = (blog == null ? void 0 : blog.categoriesExpand) ?? "deep";
      if (depth === "deep")
        return Infinity;
      const d = Number(depth);
      if (Number.isNaN(d))
        return Infinity;
      return d;
    });
    watch(
      () => [route.query, props.item, expandDepth.value],
      () => {
        const id = route.query.id;
        if (!id) {
          expand.value = props.depth <= expandDepth.value;
        } else {
          expand.value = hasExpand(props.item, id);
        }
        isExpand.value = id ? props.item.id === id : false;
      },
      { immediate: true }
    );
    function hasExpand(item, id) {
      return item.id === id || item.items.filter((item2) => item2.type === "category").some((item2) => hasExpand(item2, id));
    }
    function toggle() {
      expand.value = !expand.value;
    }
    onMounted(() => {
      if (el.value && isExpand.value) {
        el.value.scrollIntoView({ block: "center" });
      }
    });
    const __returned__ = { props, theme, route, el, expand, isExpand, expandDepth, hasExpand, toggle, VPCategories };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$I(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "el",
    class: ["vp-category-group", { expand: $setup.expand }]
  }, _attrs))} data-v-b07cd1e2><p class="folder" data-v-b07cd1e2><span class="${ssrRenderClass([[$setup.expand ? "vpi-folder-open" : "vpi-folder"], "icon"])}" data-v-b07cd1e2></span><span data-v-b07cd1e2>${ssrInterpolate($props.item.title)}</span></p>`);
  if ($props.item.items.length) {
    _push(ssrRenderComponent($setup["VPCategories"], {
      class: "group",
      items: $props.item.items,
      depth: $props.depth
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPCategoriesGroup.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const VPCategoriesGroup = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$I], ["__scopeId", "data-v-b07cd1e2"], ["__file", "VPCategoriesGroup.vue"]]);
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPCategories",
  props: {
    items: {},
    depth: { default: 0 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VPCategoriesGroup, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$H(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "vp-categories" }, _attrs))} data-v-06c22874><!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<li class="vp-categories-item" data-v-06c22874>`);
    if (item.type === "post") {
      _push(`<p class="post" data-v-06c22874><span class="vpi-post" data-v-06c22874></span>`);
      _push(ssrRenderComponent($setup["VPLink"], {
        href: item.path,
        text: item.title
      }, null, _parent));
      _push(`</p>`);
    } else {
      _push(ssrRenderComponent($setup["VPCategoriesGroup"], {
        item,
        depth: $props.depth + 1
      }, null, _parent));
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPCategories.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const VPCategories = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$H], ["__scopeId", "data-v-06c22874"], ["__file", "VPCategories.vue"]]);
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPBlogCategories",
  setup(__props, { expose: __expose }) {
    __expose();
    const { categories: categoriesLink } = useInternalLink();
    const { categories } = useBlogCategory();
    const __returned__ = { categoriesLink, categories, VPCategories };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-blog-categories" }, _attrs))} data-v-a5db0150>`);
  ssrRenderSlot(_ctx.$slots, "blog-categories-before", {}, null, _push, _parent);
  _push(`<h2 class="categories-title" data-v-a5db0150><span class="vpi-category icon" data-v-a5db0150></span><span data-v-a5db0150>${ssrInterpolate(((_a = $setup.categoriesLink) == null ? void 0 : _a.text) ?? "Categories")}</span></h2>`);
  ssrRenderSlot(_ctx.$slots, "blog-categories-content-before", {}, null, _push, _parent);
  _push(`<div class="content" data-v-a5db0150>`);
  _push(ssrRenderComponent($setup["VPCategories"], {
    items: $setup.categories,
    depth: 0
  }, null, _parent));
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "blog-categories-after", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPBlogCategories.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const VPBlogCategories = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$G], ["__scopeId", "data-v-a5db0150"], ["__file", "VPBlogCategories.vue"]]);
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPBlogExtract",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme } = useData();
    const route = useRoute();
    const profile = computed(() => theme.value.profile);
    const imageUrl = computed(() => {
      var _a, _b;
      const url = ((_a = profile.value) == null ? void 0 : _a.avatar) ?? ((_b = profile.value) == null ? void 0 : _b.url);
      if (!url)
        return "";
      if (isLinkHttp(url))
        return url;
      return withBase(url);
    });
    const { hasBlogExtract, tags, archives, categories } = useBlogExtract();
    const open = ref(false);
    const lazyOpen = ref(false);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    watch(() => route.path, () => {
      open.value = false;
    });
    watch(open, async () => {
      if (open.value) {
        setTimeout(() => {
          lazyOpen.value = true;
        }, 200);
      } else {
        lazyOpen.value = false;
      }
    });
    watch(
      [() => open.value],
      () => {
        if (open.value)
          isLocked.value = true;
        else isLocked.value = false;
      },
      { immediate: true, flush: "post" }
    );
    const showBlogExtract = computed(() => {
      return profile.value || hasBlogExtract.value;
    });
    const __returned__ = { theme, route, profile, imageUrl, hasBlogExtract, tags, archives, categories, open, lazyOpen, isLocked, showBlogExtract, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.showBlogExtract) {
    _push(`<!--[--><div class="vp-blog-extract" data-v-9eb02b6c><span class="vpi-blog-ext icon" data-v-9eb02b6c></span></div><div style="${ssrRenderStyle($setup.open ? null : { display: "none" })}" class="blog-modal" data-v-9eb02b6c><div class="${ssrRenderClass([{ open: $setup.lazyOpen }, "blog-modal-container"])}" data-v-9eb02b6c>`);
    ssrRenderSlot(_ctx.$slots, "blog-extract-before", {}, null, _push, _parent);
    if ($setup.profile) {
      _push(`<div class="profile" data-v-9eb02b6c>`);
      if ($setup.imageUrl) {
        _push(`<p class="avatar" data-v-9eb02b6c><img${ssrRenderAttr("src", $setup.imageUrl)}${ssrRenderAttr("alt", $setup.profile.name)} data-v-9eb02b6c></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-9eb02b6c><h3 data-v-9eb02b6c>${ssrInterpolate($setup.profile.name)}</h3><p class="desc" data-v-9eb02b6c>${ssrInterpolate($setup.profile.description)}</p><div class="profile-info" data-v-9eb02b6c>`);
      if ($setup.profile.location) {
        _push(`<div class="profile-location" data-v-9eb02b6c><span class="vpi-location" data-v-9eb02b6c></span>`);
        if ($setup.profile.location) {
          _push(`<p data-v-9eb02b6c>${$setup.profile.location ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if ($setup.profile.organization) {
        _push(`<div class="profile-organization" data-v-9eb02b6c><span class="vpi-organization" data-v-9eb02b6c></span>`);
        if ($setup.profile.organization) {
          _push(`<p data-v-9eb02b6c>${$setup.profile.organization ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($setup.hasBlogExtract) {
      _push(`<div class="${ssrRenderClass([{ "no-profile": !$setup.profile }, "blog-nav"])}" data-v-9eb02b6c>`);
      _push(ssrRenderComponent($setup["VPLink"], {
        class: "nav-link",
        href: $setup.tags.link,
        "no-icon": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="vpi-tag icon" data-v-9eb02b6c${_scopeId}></span><span data-v-9eb02b6c${_scopeId}>${ssrInterpolate($setup.tags.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "vpi-tag icon" }),
              createVNode("span", null, toDisplayString($setup.tags.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent($setup["VPLink"], {
        class: "nav-link",
        href: $setup.categories.link,
        "no-icon": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="vpi-category icon" data-v-9eb02b6c${_scopeId}></span><span data-v-9eb02b6c${_scopeId}>${ssrInterpolate($setup.categories.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "vpi-category icon" }),
              createVNode("span", null, toDisplayString($setup.categories.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent($setup["VPLink"], {
        class: "nav-link",
        href: $setup.archives.link,
        "no-icon": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="vpi-archive icon" data-v-9eb02b6c${_scopeId}></span><span data-v-9eb02b6c${_scopeId}>${ssrInterpolate($setup.archives.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "vpi-archive icon" }),
              createVNode("span", null, toDisplayString($setup.archives.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    ssrRenderSlot(_ctx.$slots, "blog-extract-after", {}, null, _push, _parent);
    _push(`</div></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPBlogExtract.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const VPBlogExtract = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$F], ["__scopeId", "data-v-9eb02b6c"], ["__file", "VPBlogExtract.vue"]]);
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPBlogTags",
  setup(__props, { expose: __expose }) {
    __expose();
    const { tags: tagsLink } = useInternalLink();
    const { tags, currentTag, postList, handleTagClick } = useTags();
    const __returned__ = { tagsLink, tags, currentTag, postList, handleTagClick, VPShortPostList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vp-blog-tags", { "has-list": $setup.postList.length > 0 }]
  }, _attrs))} data-v-8dcd5316>`);
  ssrRenderSlot(_ctx.$slots, "blog-tags-before", {}, null, _push, _parent);
  _push(`<div class="tags-nav" data-v-8dcd5316><h2 class="tags-title" data-v-8dcd5316><span class="vpi-tag icon" data-v-8dcd5316></span><span data-v-8dcd5316>${ssrInterpolate(((_a = $setup.tagsLink) == null ? void 0 : _a.text) ?? "Tags")}</span></h2>`);
  ssrRenderSlot(_ctx.$slots, "blog-tags-title-after", {}, null, _push, _parent);
  _push(`<div class="tags" data-v-8dcd5316><!--[-->`);
  ssrRenderList($setup.tags, (tag) => {
    _push(`<p class="${ssrRenderClass([{ active: tag.name === $setup.currentTag, [tag.className]: true }, "tag"])}" data-v-8dcd5316><span class="tag-name" data-v-8dcd5316>${ssrInterpolate(tag.name)}</span><span class="tag-count" data-v-8dcd5316>${ssrInterpolate(tag.count)}</span></p>`);
  });
  _push(`<!--]--></div></div>`);
  ssrRenderSlot(_ctx.$slots, "blog-tags-content-before", {}, null, _push, _parent);
  if ($setup.currentTag) {
    _push(`<div class="tags-container" data-v-8dcd5316><h3 class="tag-title" data-v-8dcd5316>${ssrInterpolate($setup.currentTag)}</h3>`);
    if ($setup.postList.length) {
      _push(ssrRenderComponent($setup["VPShortPostList"], { "post-list": $setup.postList }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "blog-tags-after", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPBlogTags.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const VPBlogTags = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$E], ["__scopeId", "data-v-8dcd5316"], ["__file", "VPBlogTags.vue"]]);
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPPagination",
  props: {
    page: {},
    totalPage: {},
    isFirstPage: { type: Boolean },
    isLastPage: { type: Boolean },
    pageRange: {}
  },
  emits: ["change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const { theme } = useData();
    const __returned__ = { emit, theme };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-blog-pagination" }, _attrs))} data-v-30ed06f6><button type="button" class="btn prev"${ssrIncludeBooleanAttr($props.isFirstPage) ? " disabled" : ""} data-v-30ed06f6>${ssrInterpolate($setup.theme.prevPageLabel || "Prev")}</button><div class="page-range" data-v-30ed06f6><!--[-->`);
  ssrRenderList($props.pageRange, ({ value, more }) => {
    _push(`<button${ssrIncludeBooleanAttr(more) ? " disabled" : ""} class="${ssrRenderClass([{ more, active: value === $props.page }, "btn"])}" type="button" data-v-30ed06f6>${ssrInterpolate(more ? "..." : value)}</button>`);
  });
  _push(`<!--]--></div><button type="button" class="btn next"${ssrIncludeBooleanAttr($props.isLastPage) ? " disabled" : ""} data-v-30ed06f6>${ssrInterpolate($setup.theme.nextPageLabel || "Next")}</button></div>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPPagination.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const VPPagination = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$D], ["__scopeId", "data-v-30ed06f6"], ["__file", "VPPagination.vue"]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPPostItem",
  props: {
    post: {},
    index: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { theme } = useData();
    const colors = useTagColors();
    const { categories: categoriesLink, tags: tagsLink } = useInternalLink();
    const createTime = computed(() => {
      var _a;
      return (_a = props.post.createTime) == null ? void 0 : _a.split(/\s|T/)[0].replace(/\//g, "-");
    });
    const categoryList = computed(() => props.post.categoryList ?? []);
    const sticky = computed(() => {
      if (typeof props.post.sticky === "boolean") {
        return props.post.sticky;
      } else if (typeof props.post.sticky === "number") {
        return props.post.sticky >= 0;
      }
      return false;
    });
    const tags = computed(() => {
      const blog = theme.value.blog || {};
      const tagTheme = blog.tagsTheme ?? "colored";
      return (props.post.tags ?? []).slice(0, 4).map((tag) => ({
        name: tag,
        className: colors.value[tag] ? `vp-tag-${colors.value[tag]}` : `tag-${tagTheme}`
      }));
    });
    const cover = computed(() => {
      var _a;
      if (!props.post.cover)
        return null;
      const opt = (typeof theme.value.blog === "boolean" ? "right" : (_a = theme.value.blog) == null ? void 0 : _a.postCover) ?? "right";
      const options = typeof opt === "string" ? { layout: opt } : opt;
      const cover2 = typeof props.post.cover === "string" ? { url: props.post.cover } : props.post.cover;
      return { layout: "right", ratio: "4:3", ...options, ...cover2 };
    });
    const isMobile = useMediaQuery("(max-width: 496px)");
    const coverLayout = computed(() => {
      var _a;
      if (isMobile.value)
        return "top";
      const layout = ((_a = cover.value) == null ? void 0 : _a.layout) ?? "right";
      const odd = (props.index + 1) % 2 === 1;
      if (layout === "odd-left")
        return odd ? "left" : "right";
      if (layout === "odd-right")
        return odd ? "right" : "left";
      return layout;
    });
    const coverCompact = computed(() => {
      var _a;
      if (props.post.excerpt || coverLayout.value === "top")
        return false;
      return ((_a = cover.value) == null ? void 0 : _a.compact) ?? false;
    });
    const coverStyles = computed(() => {
      if (!cover.value)
        return null;
      let ratio;
      if (typeof cover.value.ratio === "number") {
        ratio = cover.value.ratio;
      } else {
        const [w, h2] = cover.value.ratio.split(/[:/]/).map(Number);
        ratio = h2 / w;
      }
      if (coverLayout.value === "left" || coverLayout.value === "right") {
        const w = cover.value.width ?? 240;
        return { width: `${w}px`, height: `${w * ratio}px` };
      }
      return { height: 0, paddingBottom: `${ratio * 100}%` };
    });
    const isCoverLoaded = ref(false);
    const loadedImages = /* @__PURE__ */ new Set();
    watchEffect(() => {
      var _a;
      const url = (_a = cover.value) == null ? void 0 : _a.url;
      if (url && !loadedImages.has(url)) {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedImages.add(url);
          isCoverLoaded.value = true;
        };
      } else if (url) {
        isCoverLoaded.value = true;
      }
    });
    const __returned__ = { props, theme, colors, categoriesLink, tagsLink, createTime, categoryList, sticky, tags, cover, isMobile, coverLayout, coverCompact, coverStyles, isCoverLoaded, loadedImages, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: $props.post.path,
    class: "vp-blog-post-item-link"
  }, _attrs))} data-v-b1f260c3><div data-allow-mismatch class="${ssrRenderClass([{ "has-cover": $setup.cover, [$setup.coverLayout]: $setup.cover }, "vp-blog-post-item"])}" data-v-b1f260c3>`);
  if ($setup.cover) {
    _push(`<div data-allow-mismatch class="${ssrRenderClass([{ compact: $setup.coverCompact, "is-loaded": $setup.isCoverLoaded }, "post-cover"])}" style="${ssrRenderStyle($setup.coverStyles)}" data-v-b1f260c3><img${ssrRenderAttr("src", $setup.cover.url)}${ssrRenderAttr("alt", $props.post.title)} loading="lazy" class="${ssrRenderClass({ "img-visible": $setup.isCoverLoaded })}" data-v-b1f260c3></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="blog-post-item-content" data-v-b1f260c3><h3 data-v-b1f260c3>`);
  if ($setup.sticky) {
    _push(`<span class="sticky" data-v-b1f260c3>TOP</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.post.encrypt) {
    _push(`<span class="icon-lock vpi-lock" data-v-b1f260c3></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent($setup["VPLink"], {
    href: $props.post.path,
    text: $props.post.title
  }, null, _parent));
  _push(`</h3><div class="post-meta" data-v-b1f260c3>`);
  if ($setup.categoryList.length) {
    _push(`<div class="category-list" data-v-b1f260c3><span class="icon vpi-folder" data-v-b1f260c3></span><!--[-->`);
    ssrRenderList($setup.categoryList, (cate, i2) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent($setup["VPLink"], {
        href: $setup.categoriesLink ? `${$setup.categoriesLink.link}?id=${cate.id}` : void 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(cate.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(cate.name), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      if (i2 !== $setup.categoryList.length - 1) {
        _push(`<span data-v-b1f260c3>/</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.tags.length) {
    _push(`<div class="tag-list" data-v-b1f260c3><span class="icon vpi-tag" data-v-b1f260c3></span><!--[-->`);
    ssrRenderList($setup.tags, (tag) => {
      _push(ssrRenderComponent($setup["VPLink"], {
        class: ["tag", tag.className],
        href: $setup.tagsLink ? `${$setup.tagsLink.link}?tag=${tag.name}` : void 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(tag.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(tag.name), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.createTime) {
    _push(`<div class="create-time" data-v-b1f260c3><span class="icon vpi-clock" data-v-b1f260c3></span><span data-v-b1f260c3>${ssrInterpolate($setup.createTime)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.post.excerpt) {
    _push(`<div class="vp-doc excerpt" data-v-b1f260c3>${$props.post.excerpt ?? ""}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></a>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPPostItem.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const VPPostItem = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$C], ["__scopeId", "data-v-b1f260c3"], ["__file", "VPPostItem.vue"]]);
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPTransitionDrop",
  props: {
    delay: { default: 0 },
    duration: { default: 0.25 },
    appear: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { theme } = useData();
    const enabledTransition = computed(() => {
      const transition2 = theme.value.transition;
      return typeof transition2 === "object" ? transition2.postList !== false : transition2 !== false;
    });
    let _transition = "";
    function beforeAppear(item) {
      const el = item;
      el.style.transform = "translateY(-20px)";
      el.style.opacity = "0";
    }
    function setStyle(item) {
      var _a;
      const el = item;
      if (!_transition) {
        const value = typeof window !== "undefined" ? (_a = window.getComputedStyle) == null ? void 0 : _a.call(window, el).transition : "";
        _transition = value && !value.includes("all") ? `${value || ""}, ` : " ";
      }
      el.style.transition = `${_transition}transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
    }
    function unsetStyle(item) {
      const el = item;
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
      el.style.transition = _transition;
    }
    const __returned__ = { props, theme, enabledTransition, get _transition() {
      return _transition;
    }, set _transition(v2) {
      _transition = v2;
    }, beforeAppear, setStyle, unsetStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.enabledTransition) {
    _push(`<template>`);
    ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
    _push(`</template>`);
  } else {
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  }
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPTransitionDrop.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const VPTransitionDrop = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$B], ["__file", "VPTransitionDrop.vue"]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPPostList",
  props: {
    homeBlog: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const {
      postList,
      page,
      totalPage,
      pageRange,
      isLastPage,
      isFirstPage,
      isPaginationEnabled,
      changePage
    } = usePostListControl(computed(() => !!props.homeBlog));
    const __returned__ = { props, postList, page, totalPage, pageRange, isLastPage, isFirstPage, isPaginationEnabled, changePage, VPPagination, VPPostItem, VPTransitionDrop };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-blog-post-list" }, _attrs))} data-v-445dc837>`);
  ssrRenderSlot(_ctx.$slots, "blog-post-list-before", {}, null, _push, _parent);
  _push(`<!--[-->`);
  ssrRenderList($setup.postList, (post, index) => {
    _push(ssrRenderComponent($setup["VPTransitionDrop"], {
      appear: "",
      delay: index * 0.025
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent($setup["VPPostItem"], {
            key: post.path,
            post,
            index
          }, null, _parent2, _scopeId));
        } else {
          return [
            (openBlock(), createBlock($setup["VPPostItem"], {
              key: post.path,
              post,
              index
            }, null, 8, ["post", "index"]))
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]-->`);
  ssrRenderSlot(_ctx.$slots, "blog-post-list-after", {}, null, _push, _parent);
  if ($setup.isPaginationEnabled) {
    _push(ssrRenderComponent($setup["VPPagination"], {
      page: $setup.page,
      "total-page": $setup.totalPage,
      "page-range": $setup.pageRange,
      "is-last-page": $setup.isLastPage,
      "is-first-page": $setup.isFirstPage,
      onChange: $setup.changePage
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "blog-post-list-pagination-after", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPPostList.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const VPPostList = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$A], ["__scopeId", "data-v-445dc837"], ["__file", "VPPostList.vue"]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPTransitionFadeSlideY",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme } = useData();
    const { resolve: onBeforeEnter, pending: onBeforeLeave } = useScrollPromise();
    const enabledTransition = computed(() => {
      const transition2 = theme.value.transition;
      return typeof transition2 === "object" ? transition2.page !== false : transition2 !== false;
    });
    const __returned__ = { theme, onBeforeEnter, onBeforeLeave, enabledTransition };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.enabledTransition) {
    ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
  } else {
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  }
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPTransitionFadeSlideY.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const VPTransitionFadeSlideY = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$z], ["__file", "VPTransitionFadeSlideY.vue"]]);
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPBlog",
  props: {
    homeBlog: { type: Boolean },
    type: {},
    onlyOnce: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme, page } = useData();
    const __returned__ = { theme, page, VPBlogArchives, VPBlogAside, VPBlogCategories, VPBlogExtract, VPBlogNav, VPBlogTags, VPPostList, VPTransitionFadeSlideY };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vp-blog", { "home-blog": $props.homeBlog }],
    "vp-blog": ""
  }, _attrs))} data-v-b9aca701>`);
  ssrRenderSlot(_ctx.$slots, "blog-top", {}, null, _push, _parent);
  _push(`<div class="${ssrRenderClass([{ "no-profile": !$setup.theme.profile, "left": ((_a = $setup.theme.profile) == null ? void 0 : _a.layout) === "left" }, "blog-container"])}" data-v-b9aca701>`);
  if (!$setup.theme.profile) {
    _push(ssrRenderComponent($setup["VPBlogNav"], { "is-local": "" }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent($setup["VPTransitionFadeSlideY"], null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($setup.page.type === "blog-archives") {
          _push2(ssrRenderComponent($setup["VPBlogArchives"], null, {
            "blog-archives-before": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "blog-archives-before", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "blog-archives-before", {}, void 0, true)
                ];
              }
            }),
            "blog-archives-after": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "blog-archives-after", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "blog-archives-after", {}, void 0, true)
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else if ($setup.page.type === "blog-tags") {
          _push2(ssrRenderComponent($setup["VPBlogTags"], null, {
            "blog-tags-before": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "blog-tags-before", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "blog-tags-before", {}, void 0, true)
                ];
              }
            }),
            "blog-tags-after": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "blog-tags-after", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "blog-tags-after", {}, void 0, true)
                ];
              }
            }),
            "blog-tags-title-after": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "blog-tags-title-after", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "blog-tags-title-after", {}, void 0, true)
                ];
              }
            }),
            "blog-tags-content-before": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "blog-tags-content-before", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "blog-tags-content-before", {}, void 0, true)
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else if ($setup.page.type === "blog-categories") {
          _push2(ssrRenderComponent($setup["VPBlogCategories"], null, {
            "blog-categories-before": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "blog-categories-before", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "blog-categories-before", {}, void 0, true)
                ];
              }
            }),
            "blog-categories-after": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "blog-categories-after", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "blog-categories-after", {}, void 0, true)
                ];
              }
            }),
            "blog-categories-content-before": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "blog-categories-content-before", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "blog-categories-content-before", {}, void 0, true)
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else {
          _push2(ssrRenderComponent($setup["VPPostList"], { "home-blog": $props.homeBlog }, {
            "blog-post-list-before": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "blog-post-list-before", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "blog-post-list-before", {}, void 0, true)
                ];
              }
            }),
            "blog-post-list-after": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "blog-post-list-after", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "blog-post-list-after", {}, void 0, true)
                ];
              }
            }),
            "blog-post-list-pagination-after": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "blog-post-list-pagination-after", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "blog-post-list-pagination-after", {}, void 0, true)
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        }
      } else {
        return [
          $setup.page.type === "blog-archives" ? (openBlock(), createBlock($setup["VPBlogArchives"], { key: 0 }, {
            "blog-archives-before": withCtx(() => [
              renderSlot(_ctx.$slots, "blog-archives-before", {}, void 0, true)
            ]),
            "blog-archives-after": withCtx(() => [
              renderSlot(_ctx.$slots, "blog-archives-after", {}, void 0, true)
            ]),
            _: 3
          })) : $setup.page.type === "blog-tags" ? (openBlock(), createBlock($setup["VPBlogTags"], { key: 1 }, {
            "blog-tags-before": withCtx(() => [
              renderSlot(_ctx.$slots, "blog-tags-before", {}, void 0, true)
            ]),
            "blog-tags-after": withCtx(() => [
              renderSlot(_ctx.$slots, "blog-tags-after", {}, void 0, true)
            ]),
            "blog-tags-title-after": withCtx(() => [
              renderSlot(_ctx.$slots, "blog-tags-title-after", {}, void 0, true)
            ]),
            "blog-tags-content-before": withCtx(() => [
              renderSlot(_ctx.$slots, "blog-tags-content-before", {}, void 0, true)
            ]),
            _: 3
          })) : $setup.page.type === "blog-categories" ? (openBlock(), createBlock($setup["VPBlogCategories"], { key: 2 }, {
            "blog-categories-before": withCtx(() => [
              renderSlot(_ctx.$slots, "blog-categories-before", {}, void 0, true)
            ]),
            "blog-categories-after": withCtx(() => [
              renderSlot(_ctx.$slots, "blog-categories-after", {}, void 0, true)
            ]),
            "blog-categories-content-before": withCtx(() => [
              renderSlot(_ctx.$slots, "blog-categories-content-before", {}, void 0, true)
            ]),
            _: 3
          })) : (openBlock(), createBlock($setup["VPPostList"], {
            key: 3,
            "home-blog": $props.homeBlog
          }, {
            "blog-post-list-before": withCtx(() => [
              renderSlot(_ctx.$slots, "blog-post-list-before", {}, void 0, true)
            ]),
            "blog-post-list-after": withCtx(() => [
              renderSlot(_ctx.$slots, "blog-post-list-after", {}, void 0, true)
            ]),
            "blog-post-list-pagination-after": withCtx(() => [
              renderSlot(_ctx.$slots, "blog-post-list-pagination-after", {}, void 0, true)
            ]),
            _: 3
          }, 8, ["home-blog"]))
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(ssrRenderComponent($setup["VPBlogAside"], null, {
    "blog-aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "blog-aside-top", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "blog-aside-top", {}, void 0, true)
        ];
      }
    }),
    "blog-aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "blog-aside-bottom", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "blog-aside-bottom", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(ssrRenderComponent($setup["VPBlogExtract"], null, {
    "blog-extract-before": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "blog-extract-before", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "blog-extract-before", {}, void 0, true)
        ];
      }
    }),
    "blog-extract-after": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "blog-extract-after", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "blog-extract-after", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "blog-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Blog/VPBlog.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const VPBlog = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$y], ["__scopeId", "data-v-b9aca701"], ["__file", "VPBlog.vue"]]);
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  props: {
    tag: { default: void 0 },
    size: { default: "medium" },
    theme: { default: "brand" },
    text: {},
    href: { default: void 0 },
    target: { default: void 0 },
    rel: { default: void 0 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const router = useRouter();
    const component = computed(() => {
      return props.tag || props.href ? "a" : "button";
    });
    const { link, isExternal } = useLink(toRef(props, "href"), toRef(props, "target"));
    function linkTo(e) {
      var _a;
      if (!isExternal.value && ((_a = link.value) == null ? void 0 : _a[0]) !== "#") {
        e.preventDefault();
        if (link.value)
          router.push(link.value);
      }
    }
    const __returned__ = { props, router, component, link, isExternal, linkTo, get withBase() {
      return withBase;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent($setup.component), mergeProps({
    class: ["vp-button", [$props.size, $props.theme]],
    href: ((_a = $setup.link) == null ? void 0 : _a[0]) === "#" ? $setup.link : $setup.withBase($setup.link || ""),
    target: $props.target ?? ($setup.isExternal ? "_blank" : void 0),
    rel: $props.rel ?? ($setup.isExternal ? "noreferrer" : void 0),
    onClick: ($event) => $setup.linkTo($event)
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.text)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.text), 1)
        ];
      }
    }),
    _: 1
  }), _parent);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPButton.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$x], ["__scopeId", "data-v-33538fd8"], ["__file", "VPButton.vue"]]);
const DEFAULT_BANNER = "https://api.pengzhanbo.cn/wallpaper/bing";
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPHomeBanner",
  props: {
    type: {},
    banner: {},
    bannerMask: {},
    hero: {},
    onlyOnce: { type: Boolean },
    full: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { isDark, frontmatter: matter } = useData();
    const pageData = usePageData();
    const isHomePage = computed(() => pageData.value.path === "/");
    const loaded = ref(false);
    const bannerLink = computed(() => {
      const banner = props.banner ?? matter.value.banner;
      return banner ? isLinkHttp(banner) ? banner : withBase(banner) : DEFAULT_BANNER;
    });
    const maskOpacity = computed(() => {
      const mask = props.bannerMask ?? matter.value.bannerMask;
      if (typeof mask !== "object") return mask || 0;
      return isDark.value ? mask.dark || 0 : mask.light || 0;
    });
    const bannerStyle = computed(() => ({
      "background-image": `url(${bannerLink.value})`,
      opacity: loaded.value ? 1 : 0,
      // 根据加载状态动态调整透明度
      transition: "opacity 1s ease"
      // 添加平滑过渡
    }));
    const preloadImage = async (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loaded.value = true;
          resolve(true);
        };
        img.onerror = () => resolve(false);
        img.src = src;
      });
    };
    watch(bannerLink, (newLink) => {
      preloadImage(newLink);
    }, { immediate: true });
    watch(isHomePage, async (newVal) => {
      if (newVal) {
        loaded.value = false;
        await preloadImage(bannerLink.value);
      }
    });
    onMounted(async () => {
      if (isHomePage.value) {
        loaded.value = false;
        await preloadImage(bannerLink.value);
      }
    });
    const name = computed(() => {
      var _a, _b;
      return ((_a = props.hero) == null ? void 0 : _a.name) ?? ((_b = matter.value.hero) == null ? void 0 : _b.name) ?? "Plume";
    });
    const tagline = computed(() => {
      var _a, _b;
      return ((_a = props.hero) == null ? void 0 : _a.tagline) ?? ((_b = matter.value.hero) == null ? void 0 : _b.tagline) ?? "A VuePress Theme";
    });
    const text = computed(() => {
      var _a, _b;
      return ((_a = props.hero) == null ? void 0 : _a.text) ?? ((_b = matter.value.hero) == null ? void 0 : _b.text);
    });
    const actions = computed(() => {
      var _a, _b;
      return ((_a = props.hero) == null ? void 0 : _a.actions) ?? ((_b = matter.value.hero) == null ? void 0 : _b.actions) ?? [];
    });
    const __returned__ = { props, DEFAULT_BANNER, isDark, matter, pageData, isHomePage, loaded, bannerLink, maskOpacity, bannerStyle, preloadImage, name, tagline, text, actions, VPButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-home-banner" }, _attrs))} data-v-8391bac2><div class="banner-background" style="${ssrRenderStyle($setup.bannerStyle)}" data-v-8391bac2></div><div class="banner-mask" style="${ssrRenderStyle({ opacity: $setup.maskOpacity })}" data-v-8391bac2></div><div class="container" data-v-8391bac2><div class="content" data-v-8391bac2>`);
  if ($setup.name) {
    _push(`<h2 class="hero-name" data-v-8391bac2>${ssrInterpolate($setup.name)}</h2>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.tagline) {
    _push(`<p class="hero-tagline" data-v-8391bac2><span class="line" data-v-8391bac2></span> <span data-v-8391bac2>${ssrInterpolate($setup.tagline)}</span></p>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.text) {
    _push(`<p class="hero-text" data-v-8391bac2>${ssrInterpolate($setup.text)}</p>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.actions.length) {
    _push(`<div class="actions" data-v-8391bac2><!--[-->`);
    ssrRenderList($setup.actions, (action) => {
      _push(`<div class="action" data-v-8391bac2>`);
      _push(ssrRenderComponent($setup["VPButton"], {
        tag: "a",
        size: "medium",
        theme: action.theme,
        text: action.text,
        href: action.link
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Home/VPHomeBanner.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const VPHomeBanner = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$w], ["__scopeId", "data-v-8391bac2"], ["__file", "VPHomeBanner.vue"]]);
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPHomeCustom",
  props: {
    type: {},
    full: { type: Boolean },
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, VPHomeBox, get Content() {
      return Content$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["VPHomeBox"], mergeProps({ class: "vp-home-custom" }, $setup.props, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent($setup["Content"], {
          class: "vp-doc",
          "vp-content": ""
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode($setup["Content"], {
            class: "vp-doc",
            "vp-content": ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Home/VPHomeCustom.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const VPHomeCustom = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$v], ["__file", "VPHomeCustom.vue"]]);
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeature",
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const ICONIFY_NAME = /^[\w-]+:[\w-]+$/;
    const isIconify = computed(() => {
      if (typeof props.icon !== "string" || isLinkAbsolute(props.icon) || isLinkHttp(props.icon)) {
        return false;
      }
      return ICONIFY_NAME.test(props.icon);
    });
    const __returned__ = { props, ICONIFY_NAME, isIconify, VPIcon, VPImage, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["VPLink"], mergeProps({
    class: "vp-home-feature",
    href: $props.link,
    rel: $props.rel,
    target: $props.target,
    "no-icon": "",
    tag: $props.link ? "a" : "div"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<article class="box" data-v-9bf17899${_scopeId}>`);
        if (typeof $props.icon === "object" && $props.icon.wrap) {
          _push2(`<div class="icon" data-v-9bf17899${_scopeId}>`);
          _push2(ssrRenderComponent($setup["VPImage"], {
            image: $props.icon,
            alt: $props.icon.alt,
            height: $props.icon.height || 48,
            width: $props.icon.width || 48
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else if (typeof $props.icon === "object") {
          _push2(ssrRenderComponent($setup["VPImage"], {
            image: $props.icon,
            alt: $props.icon.alt,
            height: $props.icon.height || 48,
            width: $props.icon.width || 48
          }, null, _parent2, _scopeId));
        } else if ($props.icon && $setup.isIconify) {
          _push2(`<div class="icon" data-v-9bf17899${_scopeId}>`);
          _push2(ssrRenderComponent($setup["VPIcon"], { name: $props.icon }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else if ($props.icon) {
          _push2(`<div class="icon" data-v-9bf17899${_scopeId}>${$props.icon ?? ""}</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<h2 class="title" data-v-9bf17899${_scopeId}>${$props.title ?? ""}</h2>`);
        if ($props.details) {
          _push2(`<p class="details" data-v-9bf17899${_scopeId}>${$props.details ?? ""}</p>`);
        } else {
          _push2(`<!---->`);
        }
        if ($props.linkText) {
          _push2(`<div class="link-text" data-v-9bf17899${_scopeId}><p class="link-text-value" data-v-9bf17899${_scopeId}>${ssrInterpolate($props.linkText)} <span class="vpi-arrow-right link-text-icon" data-v-9bf17899${_scopeId}></span></p></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</article>`);
      } else {
        return [
          createVNode("article", { class: "box" }, [
            typeof $props.icon === "object" && $props.icon.wrap ? (openBlock(), createBlock("div", {
              key: 0,
              class: "icon"
            }, [
              createVNode($setup["VPImage"], {
                image: $props.icon,
                alt: $props.icon.alt,
                height: $props.icon.height || 48,
                width: $props.icon.width || 48
              }, null, 8, ["image", "alt", "height", "width"])
            ])) : typeof $props.icon === "object" ? (openBlock(), createBlock($setup["VPImage"], {
              key: 1,
              image: $props.icon,
              alt: $props.icon.alt,
              height: $props.icon.height || 48,
              width: $props.icon.width || 48
            }, null, 8, ["image", "alt", "height", "width"])) : $props.icon && $setup.isIconify ? (openBlock(), createBlock("div", {
              key: 2,
              class: "icon"
            }, [
              createVNode($setup["VPIcon"], { name: $props.icon }, null, 8, ["name"])
            ])) : $props.icon ? (openBlock(), createBlock("div", {
              key: 3,
              class: "icon",
              innerHTML: $props.icon
            }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
            createVNode("h2", {
              class: "title",
              innerHTML: $props.title
            }, null, 8, ["innerHTML"]),
            $props.details ? (openBlock(), createBlock("p", {
              key: 4,
              class: "details",
              innerHTML: $props.details
            }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
            $props.linkText ? (openBlock(), createBlock("div", {
              key: 5,
              class: "link-text"
            }, [
              createVNode("p", { class: "link-text-value" }, [
                createTextVNode(toDisplayString($props.linkText) + " ", 1),
                createVNode("span", { class: "vpi-arrow-right link-text-icon" })
              ])
            ])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Home/VPHomeFeature.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const VPHomeFeature = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$u], ["__scopeId", "data-v-9bf17899"], ["__file", "VPHomeFeature.vue"]]);
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  props: {
    type: {},
    title: {},
    description: {},
    features: {},
    full: { type: Boolean },
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const grid = computed(() => {
      var _a;
      const length = (_a = props.features) == null ? void 0 : _a.length;
      if (!length)
        return void 0;
      else if (length === 2)
        return "grid-2";
      else if (length === 3)
        return "grid-3";
      else if (length % 3 === 0)
        return "grid-6";
      else if (length > 3)
        return "grid-4";
      return void 0;
    });
    const __returned__ = { props, grid, VPHomeBox, VPHomeFeature };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.features) {
    _push(ssrRenderComponent($setup["VPHomeBox"], mergeProps({
      class: "vp-home-features",
      type: $props.type,
      "background-image": $props.backgroundImage,
      "background-attachment": $props.backgroundAttachment,
      full: $props.full
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if ($props.title) {
            _push2(`<h2 class="title" data-v-ea6340fd${_scopeId}>${$props.title ?? ""}</h2>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.description) {
            _push2(`<p class="description" data-v-ea6340fd${_scopeId}>${$props.description ?? ""}</p>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="items" data-v-ea6340fd${_scopeId}><!--[-->`);
          ssrRenderList($props.features, (feature) => {
            _push2(`<div class="${ssrRenderClass([[$setup.grid], "item"])}" data-v-ea6340fd${_scopeId}>`);
            _push2(ssrRenderComponent($setup["VPHomeFeature"], {
              icon: feature.icon,
              title: feature.title,
              details: feature.details,
              link: feature.link,
              "link-text": feature.linkText,
              rel: feature.rel,
              target: feature.target
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          return [
            $props.title ? (openBlock(), createBlock("h2", {
              key: 0,
              class: "title",
              innerHTML: $props.title
            }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
            $props.description ? (openBlock(), createBlock("p", {
              key: 1,
              class: "description",
              innerHTML: $props.description
            }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
            createVNode("div", { class: "items" }, [
              (openBlock(true), createBlock(Fragment, null, renderList($props.features, (feature) => {
                return openBlock(), createBlock("div", {
                  key: feature.title,
                  class: ["item", [$setup.grid]]
                }, [
                  createVNode($setup["VPHomeFeature"], {
                    icon: feature.icon,
                    title: feature.title,
                    details: feature.details,
                    link: feature.link,
                    "link-text": feature.linkText,
                    rel: feature.rel,
                    target: feature.target
                  }, null, 8, ["icon", "title", "details", "link", "link-text", "rel", "target"])
                ], 2);
              }), 128))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Home/VPHomeFeatures.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const VPHomeFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$t], ["__scopeId", "data-v-ea6340fd"], ["__file", "VPHomeFeatures.vue"]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  props: {
    type: {},
    hero: {},
    full: { type: Boolean },
    background: {},
    tintPlate: {},
    filter: {},
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { isDark, frontmatter: matter } = useData();
    const heroBackground = computed(() => {
      if (props.background === "tint-plate")
        return null;
      const image = props.backgroundImage ? typeof props.backgroundImage === "string" ? props.backgroundImage : props.backgroundImage[isDark.value ? "dark" : "light"] ?? props.backgroundImage.light : "";
      const background = image || props.background;
      if (!background)
        return null;
      const link = isLinkHttp(background) ? background : withBase(background);
      return {
        "background-image": `url(${link})`,
        "background-attachment": props.backgroundAttachment || "",
        "--vp-hero-bg-filter": props.filter
      };
    });
    const hero = computed(() => props.hero ?? matter.value.hero ?? {});
    const actions = computed(() => hero.value.actions ?? []);
    const canvas = ref();
    useHomeHeroTintPlate(
      canvas,
      computed(() => props.background === "tint-plate"),
      computed(() => props.tintPlate)
    );
    const __returned__ = { props, isDark, matter, heroBackground, hero, actions, canvas, VPButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vp-home-hero", { full: $setup.props.full, once: $setup.props.onlyOnce }]
  }, _attrs))} data-v-531ac485>`);
  if ($setup.heroBackground) {
    _push(`<div class="home-hero-bg" style="${ssrRenderStyle($setup.heroBackground)}" data-v-531ac485></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.background === "tint-plate") {
    _push(`<div class="bg-filter" data-v-531ac485><canvas width="32" height="32" data-v-531ac485></canvas></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="container" data-v-531ac485><div class="content" data-v-531ac485>`);
  if ($setup.hero.name) {
    _push(`<h1 class="hero-name" data-v-531ac485>${$setup.hero.name ?? ""}</h1>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.hero.tagline) {
    _push(`<p class="hero-tagline" data-v-531ac485>${$setup.hero.tagline ?? ""}</p>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.hero.text) {
    _push(`<p class="hero-text" data-v-531ac485>${$setup.hero.text ?? ""}</p>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.actions.length) {
    _push(`<div class="actions" data-v-531ac485><div class="action" data-v-531ac485><!--[-->`);
    ssrRenderList($setup.actions, (action) => {
      _push(ssrRenderComponent($setup["VPButton"], {
        key: action.link,
        tag: "a",
        size: "medium",
        theme: action.theme,
        text: action.text,
        href: action.link,
        target: action.target,
        rel: action.rel
      }, null, _parent));
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Home/VPHomeHero.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const VPHomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$s], ["__scopeId", "data-v-531ac485"], ["__file", "VPHomeHero.vue"]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPHomeProfile",
  props: {
    type: {},
    name: {},
    description: {},
    avatar: {},
    circle: { type: Boolean },
    full: { type: Boolean },
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { theme } = useData();
    const rawProfile = computed(() => theme.value.profile);
    const profile = computed(() => {
      var _a, _b, _c, _d, _e;
      return {
        name: props.name || ((_a = rawProfile.value) == null ? void 0 : _a.name),
        description: props.description || ((_b = rawProfile.value) == null ? void 0 : _b.description),
        avatar: props.avatar || ((_c = rawProfile.value) == null ? void 0 : _c.avatar) || ((_d = rawProfile.value) == null ? void 0 : _d.url),
        circle: props.circle || ((_e = rawProfile.value) == null ? void 0 : _e.circle)
      };
    });
    const __returned__ = { props, theme, rawProfile, profile, VPHomeBox, VPImage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["VPHomeBox"], mergeProps({
    class: "vp-home-profile",
    type: $props.type,
    "background-image": $props.backgroundImage,
    "background-attachment": $props.backgroundAttachment,
    full: $props.full
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($setup.profile.avatar) {
          _push2(ssrRenderComponent($setup["VPImage"], {
            image: $setup.profile.avatar,
            class: { circle: $setup.profile.circle }
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if ($setup.profile.name) {
          _push2(`<h3 data-v-f68ff714${_scopeId}>${$setup.profile.name ?? ""}</h3>`);
        } else {
          _push2(`<!---->`);
        }
        if ($setup.profile.description) {
          _push2(`<p data-v-f68ff714${_scopeId}>${$setup.profile.description ?? ""}</p>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          $setup.profile.avatar ? (openBlock(), createBlock($setup["VPImage"], {
            key: 0,
            image: $setup.profile.avatar,
            class: { circle: $setup.profile.circle }
          }, null, 8, ["image", "class"])) : createCommentVNode("", true),
          $setup.profile.name ? (openBlock(), createBlock("h3", {
            key: 1,
            innerHTML: $setup.profile.name
          }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
          $setup.profile.description ? (openBlock(), createBlock("p", {
            key: 2,
            innerHTML: $setup.profile.description
          }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Home/VPHomeProfile.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const VPHomeProfile = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$r], ["__scopeId", "data-v-f68ff714"], ["__file", "VPHomeProfile.vue"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPHomeTextImage",
  props: {
    type: {},
    image: {},
    width: {},
    title: {},
    description: {},
    list: {},
    full: { type: Boolean },
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const maxWidth = computed(() => {
      const width = props.width;
      if (typeof width === "number")
        return `${width}px`;
      return width;
    });
    const __returned__ = { props, maxWidth, VPHomeBox, VPImage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["VPHomeBox"], mergeProps({
    class: "vp-home-text-image",
    type: $props.type,
    "background-image": $props.backgroundImage,
    "background-attachment": $props.backgroundAttachment,
    full: $props.full,
    "container-class": { reverse: $props.type === "text-image" }
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="content-image" data-v-adffead3${_scopeId}>`);
        _push2(ssrRenderComponent($setup["VPImage"], {
          image: $props.image,
          style: { maxWidth: $setup.maxWidth }
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="content-text vp-doc" data-v-adffead3${_scopeId}><section data-v-adffead3${_scopeId}>`);
        if ($props.title) {
          _push2(`<h2 class="title" data-v-adffead3${_scopeId}>${ssrInterpolate($props.title)}</h2>`);
        } else {
          _push2(`<!---->`);
        }
        if ($props.description) {
          _push2(`<p class="description" data-v-adffead3${_scopeId}>${$props.description ?? ""}</p>`);
        } else {
          _push2(`<!---->`);
        }
        if ($props.list && $props.list.length) {
          _push2(`<ul class="list" data-v-adffead3${_scopeId}><!--[-->`);
          ssrRenderList($props.list, (item, index) => {
            _push2(`<li data-v-adffead3${_scopeId}>`);
            if (typeof item === "object") {
              _push2(`<!--[-->`);
              if (item.title) {
                _push2(`<h3 data-v-adffead3${_scopeId}>${item.title ?? ""}</h3>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.description) {
                _push2(`<p data-v-adffead3${_scopeId}>${item.description ?? ""}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else {
              _push2(`<p data-v-adffead3${_scopeId}>${item ?? ""}</p>`);
            }
            _push2(`</li>`);
          });
          _push2(`<!--]--></ul>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</section></div>`);
      } else {
        return [
          createVNode("div", { class: "content-image" }, [
            createVNode($setup["VPImage"], {
              image: $props.image,
              style: { maxWidth: $setup.maxWidth }
            }, null, 8, ["image", "style"])
          ]),
          createVNode("div", { class: "content-text vp-doc" }, [
            createVNode("section", null, [
              $props.title ? (openBlock(), createBlock("h2", {
                key: 0,
                class: "title"
              }, toDisplayString($props.title), 1)) : createCommentVNode("", true),
              $props.description ? (openBlock(), createBlock("p", {
                key: 1,
                class: "description",
                innerHTML: $props.description
              }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
              $props.list && $props.list.length ? (openBlock(), createBlock("ul", {
                key: 2,
                class: "list"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList($props.list, (item, index) => {
                  return openBlock(), createBlock("li", { key: index }, [
                    typeof item === "object" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      item.title ? (openBlock(), createBlock("h3", {
                        key: 0,
                        innerHTML: item.title
                      }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                      item.description ? (openBlock(), createBlock("p", {
                        key: 1,
                        innerHTML: item.description
                      }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                    ], 64)) : (openBlock(), createBlock("p", {
                      key: 1,
                      innerHTML: item
                    }, null, 8, ["innerHTML"]))
                  ]);
                }), 128))
              ])) : createCommentVNode("", true)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Home/VPHomeTextImage.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPHomeTextImage = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$q], ["__scopeId", "data-v-adffead3"], ["__file", "VPHomeTextImage.vue"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  setup(__props, { expose: __expose }) {
    __expose();
    const slots = useSlots();
    function VPHomeBlog() {
      return h$1(VPBlog, { homeBlog: true }, {
        "blog-top": () => {
          var _a;
          return (_a = slots["blog-top"]) == null ? void 0 : _a.call(slots);
        },
        "blog-bottom": () => {
          var _a;
          return (_a = slots["blog-bottom"]) == null ? void 0 : _a.call(slots);
        },
        "blog-post-list-before": () => {
          var _a;
          return (_a = slots["blog-post-list-before"]) == null ? void 0 : _a.call(slots);
        },
        "blog-post-list-after": () => {
          var _a;
          return (_a = slots["blog-post-list-after"]) == null ? void 0 : _a.call(slots);
        },
        "blog-post-list-pagination-after": () => {
          var _a;
          return (_a = slots["blog-post-list-pagination-after"]) == null ? void 0 : _a.call(slots);
        }
      });
    }
    const components = {
      "banner": VPHomeBanner,
      "hero": VPHomeHero,
      "features": VPHomeFeatures,
      "text-image": VPHomeTextImage,
      "image-text": VPHomeTextImage,
      "profile": VPHomeProfile,
      "blog": VPHomeBlog,
      "custom": VPHomeCustom
    };
    const DEFAULT_HERO = {
      name: "Theme Plume",
      tagline: "VuePress Next Theme",
      text: "一个简约的，功能丰富的 vuepress 文档&博客 主题"
    };
    const { frontmatter: matter } = useData();
    const config2 = computed(() => {
      const config22 = matter.value.config;
      if (config22 && config22.length)
        return config22;
      if (matter.value.banner) {
        return [{
          type: "banner",
          banner: matter.value.banner,
          bannerMask: matter.value.bannerMask,
          hero: matter.value.hero ?? DEFAULT_HERO
        }];
      }
      return [{
        type: "hero",
        full: true,
        background: "tint-plate",
        hero: matter.value.hero ?? DEFAULT_HERO
      }];
    });
    const onlyOnce = computed(() => config2.value.length === 1);
    function resolveComponentName(type) {
      return components[type] ?? resolveComponent(type);
    }
    let el = null;
    watch(() => onlyOnce.value, (value) => nextTick$1(() => {
      if (typeof document !== "undefined") {
        el ?? (el = document.querySelector(".vp-layout"));
        el == null ? void 0 : el.classList.toggle("footer-no-border", value);
      }
    }), { immediate: true });
    onUnmounted(() => {
      el == null ? void 0 : el.classList.remove("footer-no-border");
    });
    const __returned__ = { slots, VPHomeBlog, components, DEFAULT_HERO, matter, config: config2, onlyOnce, resolveComponentName, get el() {
      return el;
    }, set el(v2) {
      el = v2;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-home" }, _attrs))} data-v-fec10d7d><!--[-->`);
  ssrRenderList($setup.config, (item, index) => {
    _push(`<div class="${ssrRenderClass({ layout: index > 0 && item.type !== "features" && item.type !== "custom" })}" data-v-fec10d7d>`);
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent($setup.resolveComponentName(item.type)), mergeProps({ ref_for: true }, item, { "only-once": $setup.onlyOnce }), null), _parent);
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/Home/VPHome.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p], ["__scopeId", "data-v-fec10d7d"], ["__file", "VPHome.vue"]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    function handleClick({ target: el }) {
      const id = `#${el.href.split("#")[1]}`;
      const heading = document.querySelector(
        decodeURIComponent(id)
      );
      heading == null ? void 0 : heading.focus({ preventScroll: true });
    }
    const __returned__ = { handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
  _push(`<ul${ssrRenderAttrs(mergeProps({
    class: $props.root ? "root" : "nested"
  }, _attrs))} data-v-88c990f9><!--[-->`);
  ssrRenderList($props.headers, ({ children, link, title }) => {
    _push(`<li data-v-88c990f9><a class="outline-link"${ssrRenderAttr("href", link)} data-v-88c990f9>${ssrInterpolate(title)}</a>`);
    if (children == null ? void 0 : children.length) {
      _push(ssrRenderComponent(_component_VPDocOutlineItem, { headers: children }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPDocOutlineItem.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o], ["__scopeId", "data-v-88c990f9"], ["__file", "VPDocOutlineItem.vue"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme } = useData();
    const headers = useHeaders();
    const hasOutline = computed(() => headers.value.length > 0);
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    function handlePrint() {
      window.print();
    }
    const __returned__ = { theme, headers, hasOutline, container, marker, handlePrint, VPDocOutlineItem };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<nav${ssrRenderAttrs(mergeProps({
    ref: "container",
    "aria-labelledby": "doc-outline-aria-label",
    class: ["vp-doc-aside-outline", { "has-outline": $setup.hasOutline }],
    role: "navigation"
  }, _attrs))} data-v-899c8c22><div class="content" data-v-899c8c22><div class="outline-marker" data-v-899c8c22></div><div id="doc-outline-aria-label" aria-level="2" class="outline-title" role="heading" data-v-899c8c22><span data-v-899c8c22>${ssrInterpolate($setup.theme.outlineLabel || "On this page")}</span><span class="vpi-print icon" data-v-899c8c22></span></div>`);
  _push(ssrRenderComponent($setup["VPDocOutlineItem"], {
    headers: $setup.headers,
    root: true
  }, null, _parent));
  _push(`</div></nav>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPDocAsideOutline.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n], ["__scopeId", "data-v-899c8c22"], ["__file", "VPDocAsideOutline.vue"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VPDocAsideOutline };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-doc-aside" }, _attrs))} data-v-be996eea>`);
  ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
  _push(ssrRenderComponent($setup["VPDocAsideOutline"], null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
  _push(`<div class="spacer" data-v-be996eea></div>`);
  ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPDocAside.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m], ["__scopeId", "data-v-be996eea"], ["__file", "VPDocAside.vue"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPDocBreadcrumbs",
  setup(__props, { expose: __expose }) {
    __expose();
    const { page, theme } = useData();
    const { isBlogPost } = useBlogPageData();
    const { home, blog, categories } = useInternalLink();
    const sidebar2 = useSidebarData();
    const hasBreadcrumb = computed(() => {
      if (isBlogPost.value && page.value.categoryList)
        return page.value.categoryList.length > 0;
      return sidebar2.value.length > 0;
    });
    const breadcrumbList = computed(() => {
      if (!hasBreadcrumb.value)
        return [];
      const list = [{ text: home.value.text, link: home.value.link }];
      if (isBlogPost.value) {
        const blogConf = theme.value.blog || {};
        if (blogConf.postList ?? true)
          list.push({ text: blog.value.text, link: blog.value.link });
        const categoryList = page.value.categoryList ?? [];
        for (const category of categoryList) {
          list.push({
            text: category.name,
            link: categories.value ? `${categories.value.link}?id=${category.id}` : void 0
          });
        }
      } else if (sidebar2.value.length > 0) {
        list.push(...resolveSidebar(sidebar2.value) || []);
      }
      list.push({ text: page.value.title, link: page.value.path, current: true });
      return list;
    });
    function resolveSidebar(sidebar22, result = []) {
      for (const item of sidebar22) {
        if (item.link === page.value.path) {
          return result;
        } else if (item.items) {
          const res = resolveSidebar(
            item.items,
            [...result, { text: item.text, link: item.link }]
          );
          if (res)
            return res;
        }
      }
      return null;
    }
    const __returned__ = { page, theme, isBlogPost, home, blog, categories, sidebar: sidebar2, hasBreadcrumb, breadcrumbList, resolveSidebar, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.hasBreadcrumb) {
    _push(`<nav${ssrRenderAttrs(mergeProps({ class: "vp-breadcrumb" }, _attrs))} data-v-208f5ed2><ol vocab="https://schema.org/" typeof="BreadcrumbList" data-v-208f5ed2><!--[-->`);
    ssrRenderList($setup.breadcrumbList, ({ text, link, current }, index) => {
      _push(`<li property="itemListElement" typeof="ListItem" data-v-208f5ed2>`);
      _push(ssrRenderComponent($setup["VPLink"], {
        href: link,
        class: ["breadcrumb", { current }],
        property: "item",
        typeof: "WebPage",
        text
      }, null, _parent));
      if (index !== $setup.breadcrumbList.length - 1) {
        _push(`<span class="vpi-chevron-right" data-v-208f5ed2></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<meta property="name"${ssrRenderAttr("content", text)} data-v-208f5ed2><meta property="position"${ssrRenderAttr("content", `${index + 1}`)} data-v-208f5ed2></li>`);
    });
    _push(`<!--]--></ol></nav>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPDocBreadcrumbs.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const VPDocBreadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l], ["__scopeId", "data-v-208f5ed2"], ["__file", "VPDocBreadcrumbs.vue"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme, frontmatter } = useData();
    const editLink = useEditLink();
    const { datetime: lastUpdated, isoDatetime, lastUpdatedText } = useLastUpdated();
    const contributors = useContributors();
    const { prev, next } = usePrevNext();
    const hasEditLink = computed(
      () => Boolean(theme.value.editLink && frontmatter.value.editLink !== false && editLink.value)
    );
    const hasLastUpdated = computed(
      () => Boolean(theme.value.lastUpdated && frontmatter.value.lastUpdated !== false && lastUpdated.value)
    );
    const hasContributors = computed(() => Boolean(contributors.value.length));
    const showFooter = computed(() => {
      var _a, _b;
      return hasEditLink.value || hasLastUpdated.value || hasContributors.value || ((_a = prev.value) == null ? void 0 : _a.link) || ((_b = next.value) == null ? void 0 : _b.link);
    });
    const __returned__ = { theme, frontmatter, editLink, lastUpdated, isoDatetime, lastUpdatedText, contributors, prev, next, hasEditLink, hasLastUpdated, hasContributors, showFooter, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e;
  if ($setup.showFooter) {
    _push(`<footer${ssrRenderAttrs(mergeProps({ class: "vp-doc-footer" }, _attrs))} data-v-ebdf94c1>`);
    ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
    if ($setup.hasEditLink || $setup.hasLastUpdated) {
      _push(`<div class="edit-info" data-v-ebdf94c1>`);
      if ($setup.hasEditLink && $setup.editLink) {
        _push(`<div class="edit-link" data-v-ebdf94c1>`);
        _push(ssrRenderComponent($setup["VPLink"], {
          class: "edit-link-button",
          href: $setup.editLink.link,
          "no-icon": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="vpi-square-pen edit-link-icon" aria-label="edit icon" data-v-ebdf94c1${_scopeId}></span> ${ssrInterpolate($setup.editLink.text)}`);
            } else {
              return [
                createVNode("span", {
                  class: "vpi-square-pen edit-link-icon",
                  "aria-label": "edit icon"
                }),
                createTextVNode(" " + toDisplayString($setup.editLink.text), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if ($setup.hasLastUpdated) {
        _push(`<div class="last-updated" data-v-ebdf94c1><p class="last-updated-text" data-v-ebdf94c1>${ssrInterpolate($setup.lastUpdatedText)}: <time${ssrRenderAttr("datetime", $setup.isoDatetime)} class="last-updated-time" data-v-ebdf94c1>${ssrInterpolate($setup.lastUpdated)}</time></p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($setup.hasContributors && ((_a = $setup.contributors) == null ? void 0 : _a.length)) {
      _push(`<div class="contributors" data-v-ebdf94c1><span class="contributors-label" data-v-ebdf94c1>${ssrInterpolate($setup.theme.contributorsText || "Contributors")}: </span><span class="contributors-info" data-v-ebdf94c1><!--[-->`);
      ssrRenderList($setup.contributors, (contributor, index) => {
        _push(`<!--[--><span class="contributor" data-v-ebdf94c1>${ssrInterpolate(contributor)}</span>`);
        if (index !== $setup.contributors.length - 1) {
          _push(`<!--[-->, <!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></span></div>`);
    } else {
      _push(`<!---->`);
    }
    if (((_b = $setup.prev) == null ? void 0 : _b.link) || ((_c = $setup.next) == null ? void 0 : _c.link)) {
      _push(`<nav class="prev-next" data-v-ebdf94c1><div class="pager" data-v-ebdf94c1>`);
      if ((_d = $setup.prev) == null ? void 0 : _d.link) {
        _push(ssrRenderComponent($setup["VPLink"], {
          class: "pager-link prev",
          href: $setup.prev.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="desc" data-v-ebdf94c1${_scopeId}>${($setup.theme.prevPageLabel || "Previous page") ?? ""}</span><span class="title" data-v-ebdf94c1${_scopeId}>${$setup.prev.text ?? ""}</span>`);
            } else {
              return [
                createVNode("span", {
                  class: "desc",
                  innerHTML: $setup.theme.prevPageLabel || "Previous page"
                }, null, 8, ["innerHTML"]),
                createVNode("span", {
                  class: "title",
                  innerHTML: $setup.prev.text
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pager" data-v-ebdf94c1>`);
      if ((_e = $setup.next) == null ? void 0 : _e.link) {
        _push(ssrRenderComponent($setup["VPLink"], {
          class: "pager-link next",
          href: $setup.next.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="desc" data-v-ebdf94c1${_scopeId}>${($setup.theme.nextPageLabel || "Next page") ?? ""}</span><span class="title" data-v-ebdf94c1${_scopeId}>${$setup.next.text ?? ""}</span>`);
            } else {
              return [
                createVNode("span", {
                  class: "desc",
                  innerHTML: $setup.theme.nextPageLabel || "Next page"
                }, null, 8, ["innerHTML"]),
                createVNode("span", {
                  class: "title",
                  innerHTML: $setup.next.text
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</footer>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPDocFooter.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k], ["__scopeId", "data-v-ebdf94c1"], ["__file", "VPDocFooter.vue"]]);
var define_READING_TIME_LOCALES_default = { "/": { word: "$word字", less1Minute: "小于1分钟", time: "约$time分钟" } };
const i = () => {
  const e = usePageData();
  return computed(() => e.value.readingTime ?? null);
}, a = (e, o) => {
  const { minutes: r2, words: s2 } = e, { less1Minute: m2, word: c, time: d } = o;
  return { time: r2 < 1 ? m2 : d.replace("$time", Math.round(r2).toString()), words: c.replace("$word", s2.toString()) };
}, u = { words: "", time: "" }, n = typeof define_READING_TIME_LOCALES_default > "u" ? null : define_READING_TIME_LOCALES_default, l = () => n ? useLocaleConfig(n) : computed(() => null), p = () => {
  if (typeof n > "u") return computed(() => u);
  const e = i(), o = l();
  return computed(() => e.value && o.value ? a(e.value, o.value) : u);
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPDocMeta",
  setup(__props, { expose: __expose }) {
    __expose();
    const { page, frontmatter: matter, theme } = useData();
    const colors = useTagColors();
    const readingTime = p();
    const { tags: tagsLink } = useInternalLink();
    const { isBlogPost } = useBlogPageData();
    const createTime = computed(() => {
      const show = theme.value.createTime ?? true;
      if (!show || show === "only-blog" && !isBlogPost.value)
        return "";
      if (matter.value.createTime)
        return matter.value.createTime.split(/\s|T/)[0].replace(/\//g, "-");
      return "";
    });
    const tags = computed(() => {
      const blog = theme.value.blog || {};
      const tagTheme = blog.tagsTheme ?? "colored";
      if (matter.value.tags) {
        return matter.value.tags.slice(0, 4).map((tag) => ({
          name: tag,
          className: colors.value[tag] ? `vp-tag-${colors.value[tag]}` : `tag-${tagTheme}`
        }));
      }
      return [];
    });
    const badge = computed(() => {
      if (matter.value.badge) {
        return typeof matter.value.badge === "string" ? { text: matter.value.badge } : matter.value.badge;
      }
      return false;
    });
    const hasMeta = computed(() => readingTime.value.time || tags.value.length || createTime.value);
    const __returned__ = { page, matter, theme, colors, readingTime, tagsLink, isBlogPost, createTime, tags, badge, hasMeta, VPBadge, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h1 class="${ssrRenderClass([{ padding: !$setup.hasMeta }, "vp-doc-title page-title"])}" data-v-890f28d7>${ssrInterpolate($setup.page.title)} `);
  if ($setup.badge) {
    _push(ssrRenderComponent($setup["VPBadge"], {
      type: $setup.badge.type || "tip",
      text: $setup.badge.text
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</h1>`);
  if ($setup.hasMeta) {
    _push(`<div class="vp-doc-meta" data-v-890f28d7>`);
    if ($setup.readingTime.time && $setup.matter.readingTime !== false) {
      _push(`<p class="reading-time" data-v-890f28d7><span class="vpi-books icon" data-v-890f28d7></span><span data-v-890f28d7>${ssrInterpolate($setup.readingTime.words)}</span><span data-v-890f28d7>${ssrInterpolate($setup.readingTime.time)}</span></p>`);
    } else {
      _push(`<!---->`);
    }
    if ($setup.tags.length > 0) {
      _push(`<p data-v-890f28d7><span class="vpi-tag icon" data-v-890f28d7></span><!--[-->`);
      ssrRenderList($setup.tags, (tag) => {
        var _a;
        _push(ssrRenderComponent($setup["VPLink"], {
          key: tag.name,
          class: ["tag", tag.className],
          href: ((_a = $setup.tagsLink) == null ? void 0 : _a.link) && $setup.isBlogPost ? `${$setup.tagsLink.link}?tag=${tag.name}` : void 0
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></p>`);
    } else {
      _push(`<!---->`);
    }
    if ($setup.createTime) {
      _push(`<p class="create-time" data-v-890f28d7><span class="vpi-clock icon" data-v-890f28d7></span><span data-v-890f28d7>${ssrInterpolate($setup.createTime)}</span></p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPDocMeta.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const VPDocMeta = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j], ["__scopeId", "data-v-890f28d7"], ["__file", "VPDocMeta.vue"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPEncryptForm",
  props: {
    global: { type: Boolean },
    info: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { theme } = useData();
    const { compareGlobal, comparePage } = useEncryptCompare();
    const password = ref("");
    const errorCode = ref(0);
    const unlocking = ref(false);
    async function onSubmit() {
      if (unlocking.value)
        return;
      const compare2 = props.global ? compareGlobal : comparePage;
      unlocking.value = true;
      const result = await compare2(password.value);
      unlocking.value = false;
      if (!result) {
        errorCode.value = 1;
      } else {
        errorCode.value = 0;
        password.value = "";
      }
    }
    const __returned__ = { props, theme, compareGlobal, comparePage, password, errorCode, unlocking, onSubmit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-encrypt-form" }, _attrs))} data-v-d9075416><p class="encrypt-text" data-v-d9075416>${$props.info ?? "Only Password can access this site" ?? ""}</p><p class="encrypt-input-wrapper" data-v-d9075416><span class="vpi-lock icon-lock" data-v-d9075416></span><input${ssrRenderAttr("value", $setup.password)} class="${ssrRenderClass([{ error: $setup.errorCode === 1 }, "encrypt-input"])}" type="password"${ssrRenderAttr("placeholder", $setup.theme.encryptPlaceholder ?? "Enter Password")} data-v-d9075416></p><button class="${ssrRenderClass([{ unlocking: $setup.unlocking }, "encrypt-button"])}" data-v-d9075416>`);
  if (!$setup.unlocking) {
    _push(`<span data-v-d9075416>${ssrInterpolate($setup.theme.encryptButtonText ?? "Confirm")}</span>`);
  } else {
    _push(`<span class="vpi-loading" data-v-d9075416></span>`);
  }
  _push(`</button></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPEncryptForm.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const VPEncryptForm = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i], ["__scopeId", "data-v-d9075416"], ["__file", "VPEncryptForm.vue"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPEncryptPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme } = useData();
    const __returned__ = { theme, VPEncryptForm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="vp-page-encrypt" data-v-134cfbc2${_scopeId}><div class="logo" data-v-134cfbc2${_scopeId}><span class="vpi-lock icon-lock-head" data-v-134cfbc2${_scopeId}></span></div>`);
        _push2(ssrRenderComponent($setup["VPEncryptForm"], {
          info: $setup.theme.encryptPageText
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "vp-page-encrypt" }, [
            createVNode("div", { class: "logo" }, [
              createVNode("span", { class: "vpi-lock icon-lock-head" })
            ]),
            createVNode($setup["VPEncryptForm"], {
              info: $setup.theme.encryptPageText
            }, null, 8, ["info"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPEncryptPage.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const VPEncryptPage = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h], ["__scopeId", "data-v-134cfbc2"], ["__file", "VPEncryptPage.vue"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  setup(__props, { expose: __expose }) {
    __expose();
    const { page, theme, frontmatter, isDark } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const { isBlogPost } = useBlogPageData();
    const headers = useHeaders();
    const { isPageDecrypted } = useEncrypt();
    const hasComments = computed(() => {
      return resolveComponent("CommentService") !== "CommentService" && page.value.frontmatter.comments !== false && isPageDecrypted.value;
    });
    const enableAside = computed(() => {
      if (!hasAside.value)
        return false;
      if (isBlogPost.value)
        return headers.value.length > 0;
      return true;
    });
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    const enabledExternalLinkIcon = computed(
      () => theme.value.externalLinkIcon && frontmatter.value.externalLinkIcon !== false
    );
    const asideEl = ref();
    watch(
      () => route.hash,
      (hash) => nextTick$1(() => {
        if (!asideEl.value)
          return;
        const activeItem = asideEl.value.querySelector(
          `.outline-link[href="${hash}"]`
        );
        if (!activeItem || !hash) {
          asideEl.value.scrollTop = 0;
          return;
        }
        const { top: navTop, height: navHeight } = asideEl.value.getBoundingClientRect();
        const { top: activeTop, height: activeHeight } = activeItem.getBoundingClientRect();
        if (activeTop < navTop || activeTop + activeHeight > navTop + navHeight)
          activeItem.scrollIntoView({ block: "center" });
      }),
      { immediate: true }
    );
    const __returned__ = { page, theme, frontmatter, isDark, route, hasSidebar, hasAside, leftAside, isBlogPost, headers, isPageDecrypted, hasComments, enableAside, pageName, enabledExternalLinkIcon, asideEl, VPDocAside, VPDocBreadcrumbs, VPDocFooter, VPDocMeta, VPEncryptPage, VPTransitionFadeSlideY };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Content = resolveComponent("Content");
  const _component_CommentService = resolveComponent("CommentService");
  _push(ssrRenderComponent($setup["VPTransitionFadeSlideY"], _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="${ssrRenderClass([{
          "has-sidebar": $setup.hasSidebar,
          "has-aside": $setup.enableAside,
          "is-blog": $setup.isBlogPost,
          "with-encrypt": !$setup.isPageDecrypted
        }, "vp-doc-container"])}" data-v-f7a49bd9${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
        _push2(`<div class="container" data-v-f7a49bd9${_scopeId}>`);
        if ($setup.enableAside) {
          _push2(`<div class="${ssrRenderClass([{ "left-aside": $setup.leftAside }, "aside"])}" vp-outline data-v-f7a49bd9${_scopeId}><div class="aside-curtain" data-v-f7a49bd9${_scopeId}></div><div class="aside-container" data-v-f7a49bd9${_scopeId}><div class="aside-content" data-v-f7a49bd9${_scopeId}>`);
          _push2(ssrRenderComponent($setup["VPDocAside"], null, {
            "aside-top": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
                ];
              }
            }),
            "aside-bottom": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
                ];
              }
            }),
            "aside-outline-before": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
                ];
              }
            }),
            "aside-outline-after": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
                ];
              }
            }),
            "aside-ads-before": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
                ];
              }
            }),
            "aside-ads-after": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
          _push2(`</div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="content" data-v-f7a49bd9${_scopeId}><div class="content-container" data-v-f7a49bd9${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
        _push2(`<main class="main" data-v-f7a49bd9${_scopeId}>`);
        _push2(ssrRenderComponent($setup["VPDocBreadcrumbs"], null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["VPDocMeta"], null, null, _parent2, _scopeId));
        if (!$setup.isPageDecrypted) {
          _push2(ssrRenderComponent($setup["VPEncryptPage"], null, null, _parent2, _scopeId));
        } else {
          _push2(ssrRenderComponent(_component_Content, {
            class: ["vp-doc plume-content", [$setup.pageName, $setup.enabledExternalLinkIcon && "external-link-icon-enabled"]],
            "vp-content": ""
          }, null, _parent2, _scopeId));
        }
        _push2(`</main>`);
        if ($setup.isPageDecrypted) {
          _push2(ssrRenderComponent($setup["VPDocFooter"], null, {
            "doc-footer-before": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if ($setup.hasComments) {
          _push2(ssrRenderComponent(_component_CommentService, {
            darkmode: $setup.isDark,
            "vp-comment": ""
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div></div></div>`);
        ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          (openBlock(), createBlock("div", {
            key: $setup.page.path,
            class: ["vp-doc-container", {
              "has-sidebar": $setup.hasSidebar,
              "has-aside": $setup.enableAside,
              "is-blog": $setup.isBlogPost,
              "with-encrypt": !$setup.isPageDecrypted
            }]
          }, [
            renderSlot(_ctx.$slots, "doc-top", {}, void 0, true),
            createVNode("div", { class: "container" }, [
              $setup.enableAside ? (openBlock(), createBlock("div", {
                key: 0,
                class: ["aside", { "left-aside": $setup.leftAside }],
                "vp-outline": ""
              }, [
                createVNode("div", { class: "aside-curtain" }),
                createVNode("div", {
                  ref: "asideEl",
                  class: "aside-container"
                }, [
                  createVNode("div", { class: "aside-content" }, [
                    createVNode($setup["VPDocAside"], null, {
                      "aside-top": withCtx(() => [
                        renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
                      ]),
                      "aside-bottom": withCtx(() => [
                        renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
                      ]),
                      "aside-outline-before": withCtx(() => [
                        renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
                      ]),
                      "aside-outline-after": withCtx(() => [
                        renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
                      ]),
                      "aside-ads-before": withCtx(() => [
                        renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
                      ]),
                      "aside-ads-after": withCtx(() => [
                        renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
                      ]),
                      _: 3
                    })
                  ])
                ], 512)
              ], 2)) : createCommentVNode("", true),
              createVNode("div", { class: "content" }, [
                createVNode("div", { class: "content-container" }, [
                  renderSlot(_ctx.$slots, "doc-before", {}, void 0, true),
                  createVNode("main", { class: "main" }, [
                    createVNode($setup["VPDocBreadcrumbs"]),
                    createVNode($setup["VPDocMeta"]),
                    !$setup.isPageDecrypted ? (openBlock(), createBlock($setup["VPEncryptPage"], { key: 0 })) : (openBlock(), createBlock(_component_Content, {
                      key: 1,
                      class: ["vp-doc plume-content", [$setup.pageName, $setup.enabledExternalLinkIcon && "external-link-icon-enabled"]],
                      "vp-content": ""
                    }, null, 8, ["class"]))
                  ]),
                  $setup.isPageDecrypted ? (openBlock(), createBlock($setup["VPDocFooter"], { key: 0 }, {
                    "doc-footer-before": withCtx(() => [
                      renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
                    ]),
                    _: 3
                  })) : createCommentVNode("", true),
                  $setup.hasComments ? (openBlock(), createBlock(_component_CommentService, {
                    key: 1,
                    darkmode: $setup.isDark,
                    "vp-comment": ""
                  }, null, 8, ["darkmode"])) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
                ])
              ])
            ]),
            renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
          ], 2))
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPDoc.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g], ["__scopeId", "data-v-f7a49bd9"], ["__file", "VPDoc.vue"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPFriendsItem",
  props: {
    friend: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isDark = useDarkMode();
    function getStyle(name, color) {
      if (!color)
        return {};
      const value = isPlainObject(color) ? isDark.value ? color.dark : color.light : color;
      return value ? { [name]: value } : {};
    }
    const friendStyle = computed(() => {
      return {
        ...getStyle("--vp-friends-text-color", props.friend.color),
        ...getStyle("--vp-friends-bg-color", props.friend.backgroundColor),
        ...getStyle("--vp-friends-name-color", props.friend.nameColor)
      };
    });
    const __returned__ = { props, isDark, getStyle, friendStyle, VPLink, VPSocialLinks };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vp-friend", {
      "only-title": !$props.friend.desc && (!$props.friend.socials || !$props.friend.socials.length),
      "no-desc": !$props.friend.desc
    }],
    style: $setup.friendStyle
  }, _attrs))} data-v-6c572d32>`);
  _push(ssrRenderComponent($setup["VPLink"], {
    class: "avatar-link",
    href: $props.friend.link,
    "no-icon": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="avatar" style="${ssrRenderStyle({ backgroundImage: `url(${$props.friend.avatar})` })}" data-v-6c572d32${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", {
            class: "avatar",
            style: { backgroundImage: `url(${$props.friend.avatar})` }
          }, null, 4)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="content" data-v-6c572d32>`);
  _push(ssrRenderComponent($setup["VPLink"], {
    class: "title",
    href: $props.friend.link,
    "no-icon": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.friend.name)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.friend.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($props.friend.desc) {
    _push(`<p data-v-6c572d32>${ssrInterpolate($props.friend.desc)}</p>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.friend.socials) {
    _push(ssrRenderComponent($setup["VPSocialLinks"], {
      links: $props.friend.socials
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPFriendsItem.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const VPFriendsItem = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__scopeId", "data-v-6c572d32"], ["__file", "VPFriendsItem.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPFriendsGroup",
  props: {
    group: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VPFriendsItem };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-friends-group" }, _attrs))} data-v-a3e9588f><h3 class="title" data-v-a3e9588f>${ssrInterpolate($props.group.title || "My Friends")}</h3>`);
  if ($props.group.desc) {
    _push(`<p class="description" data-v-a3e9588f>${ssrInterpolate($props.group.desc)}</p>`);
  } else {
    _push(`<!---->`);
  }
  if ((_a = $props.group.list) == null ? void 0 : _a.length) {
    _push(`<section class="friends-list" data-v-a3e9588f><!--[-->`);
    ssrRenderList($props.group.list, (friend, index) => {
      _push(ssrRenderComponent($setup["VPFriendsItem"], {
        key: friend.name + index,
        friend
      }, null, _parent));
    });
    _push(`<!--]--></section>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPFriendsGroup.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const VPFriendsGroup = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__scopeId", "data-v-a3e9588f"], ["__file", "VPFriendsGroup.vue"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPFriends",
  setup(__props, { expose: __expose }) {
    __expose();
    const editLink = useEditLink();
    const { frontmatter: matter } = useData();
    const list = computed(() => matter.value.list || []);
    const groups = computed(() => matter.value.groups || []);
    const __returned__ = { editLink, matter, list, groups, VPFriendsGroup, VPFriendsItem, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-friends" }, _attrs))} data-v-de7bcc5c><h2 class="title" data-v-de7bcc5c>${ssrInterpolate($setup.matter.title || "My Friends")}</h2>`);
  if ($setup.matter.description) {
    _push(`<p class="description" data-v-de7bcc5c>${ssrInterpolate($setup.matter.description)}</p>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.list.length) {
    _push(`<section class="friends-list" data-v-de7bcc5c><!--[-->`);
    ssrRenderList($setup.list, (friend, index) => {
      _push(ssrRenderComponent($setup["VPFriendsItem"], {
        key: friend.name + index,
        friend
      }, null, _parent));
    });
    _push(`<!--]--></section>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($setup.groups, (group, index) => {
    _push(ssrRenderComponent($setup["VPFriendsGroup"], {
      key: index,
      group
    }, null, _parent));
  });
  _push(`<!--]-->`);
  if ($setup.editLink) {
    _push(`<div class="edit-link" data-v-de7bcc5c>`);
    _push(ssrRenderComponent($setup["VPLink"], {
      class: "edit-link-button",
      href: $setup.editLink.link,
      "no-icon": true
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="vpi-square-pen edit-link-icon" aria-label="edit icon" data-v-de7bcc5c${_scopeId}></span> ${ssrInterpolate($setup.editLink.text)}`);
        } else {
          return [
            createVNode("span", {
              class: "vpi-square-pen edit-link-icon",
              "aria-label": "edit icon"
            }),
            createTextVNode(" " + toDisplayString($setup.editLink.text), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPFriends.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const VPFriends = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-de7bcc5c"], ["__file", "VPFriends.vue"]]);
const _sfc_main$c = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-page" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Content, {
    class: "vp-doc plume-content",
    "vp-content": ""
  }, null, _parent));
  ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPPage.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__file", "VPPage.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  props: {
    isNotFound: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData();
    const { isBlogLayout } = useBlogPageData();
    const route = useRoute();
    watch(
      [isBlogLayout, () => frontmatter.value.pageLayout, () => route.path],
      () => nextTick$1(() => {
        var _a;
        if (inBrowser) {
          document.documentElement.classList.toggle("bg-gray", isBlogLayout.value);
          const layout = (_a = document.documentElement.className.match(/(?:^|\s)(layout-\S+)(?:$|\s)/)) == null ? void 0 : _a[1];
          if (layout)
            document.documentElement.classList.remove(layout);
          document.documentElement.classList.add(`layout-${isBlogLayout.value ? "blog" : frontmatter.value.pageLayout || "doc"}`);
        }
      }),
      { immediate: true }
    );
    const __returned__ = { props, hasSidebar, frontmatter, isBlogLayout, route, VPBlog, VPHome, VPDoc, VPFriends, VPPage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "VPContent",
    "vp-content": "",
    class: ["vp-content", {
      "has-sidebar": $setup.hasSidebar && !$setup.props.isNotFound,
      "is-home": $setup.frontmatter.pageLayout === "home"
    }]
  }, _attrs))} data-v-4d5a27ca>`);
  if ($setup.isBlogLayout) {
    _push(ssrRenderComponent($setup["VPBlog"], null, {
      "blog-top": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-top", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-top", {}, void 0, true)
          ];
        }
      }),
      "blog-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-bottom", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-bottom", {}, void 0, true)
          ];
        }
      }),
      "blog-archives-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-archives-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-archives-before", {}, void 0, true)
          ];
        }
      }),
      "blog-archives-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-archives-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-archives-after", {}, void 0, true)
          ];
        }
      }),
      "blog-tags-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-tags-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-tags-before", {}, void 0, true)
          ];
        }
      }),
      "blog-tags-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-tags-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-tags-after", {}, void 0, true)
          ];
        }
      }),
      "blog-tags-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-tags-title-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-tags-title-after", {}, void 0, true)
          ];
        }
      }),
      "blog-tags-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-tags-content-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-tags-content-before", {}, void 0, true)
          ];
        }
      }),
      "blog-categories-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-categories-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-categories-before", {}, void 0, true)
          ];
        }
      }),
      "blog-categories-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-categories-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-categories-after", {}, void 0, true)
          ];
        }
      }),
      "blog-categories-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-categories-content-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-categories-content-before", {}, void 0, true)
          ];
        }
      }),
      "blog-post-list-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-post-list-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-post-list-before", {}, void 0, true)
          ];
        }
      }),
      "blog-post-list-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-post-list-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-post-list-after", {}, void 0, true)
          ];
        }
      }),
      "blog-post-list-pagination-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-post-list-pagination-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-post-list-pagination-after", {}, void 0, true)
          ];
        }
      }),
      "blog-aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-aside-top", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-aside-top", {}, void 0, true)
          ];
        }
      }),
      "blog-aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-aside-bottom", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-aside-bottom", {}, void 0, true)
          ];
        }
      }),
      "blog-extract-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-extract-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-extract-before", {}, void 0, true)
          ];
        }
      }),
      "blog-extract-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-extract-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-extract-after", {}, void 0, true)
          ];
        }
      }),
      _: 3
    }, _parent));
  } else if ($setup.frontmatter.pageLayout === "page") {
    _push(ssrRenderComponent($setup["VPPage"], null, {
      "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
          ];
        }
      }),
      "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
          ];
        }
      }),
      _: 3
    }, _parent));
  } else if ($setup.frontmatter.pageLayout === "friends") {
    _push(ssrRenderComponent($setup["VPFriends"], null, null, _parent));
  } else if ($setup.frontmatter.pageLayout === "home") {
    _push(ssrRenderComponent($setup["VPHome"], null, {
      "blog-top": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-top", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-top", {}, void 0, true)
          ];
        }
      }),
      "blog-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-bottom", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-bottom", {}, void 0, true)
          ];
        }
      }),
      "blog-post-list-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-post-list-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-post-list-before", {}, void 0, true)
          ];
        }
      }),
      "blog-post-list-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-post-list-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-post-list-after", {}, void 0, true)
          ];
        }
      }),
      "blog-post-list-pagination-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "blog-post-list-pagination-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "blog-post-list-pagination-after", {}, void 0, true)
          ];
        }
      }),
      _: 3
    }, _parent));
  } else if ($setup.frontmatter.pageLayout && $setup.frontmatter.pageLayout !== "doc") {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent($setup.frontmatter.pageLayout), null, null), _parent);
  } else {
    _push(ssrRenderComponent($setup["VPDoc"], null, {
      "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
          ];
        }
      }),
      "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
          ];
        }
      }),
      "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
          ];
        }
      }),
      "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
          ];
        }
      }),
      "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
          ];
        }
      }),
      "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ];
        }
      }),
      "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
          ];
        }
      }),
      "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
          ];
        }
      }),
      "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
          ];
        }
      }),
      "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
          ];
        }
      }),
      "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ];
        }
      }),
      _: 3
    }, _parent));
  }
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPContent.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-4d5a27ca"], ["__file", "VPContent.vue"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme } = useData();
    const { hasSidebar } = useSidebar();
    const footerHeight = useCssVar("--vp-footer-height", inBrowser ? document.body : null);
    const footer = ref(null);
    onMounted(() => {
      if (theme.value.footer && footer.value)
        footerHeight.value = `${footer.value.offsetHeight}px`;
    });
    const __returned__ = { theme, hasSidebar, footerHeight, footer };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.theme.footer) {
    _push(`<footer${ssrRenderAttrs(mergeProps({
      ref: "footer",
      class: ["vp-footer", { "has-sidebar": $setup.hasSidebar }],
      "vp-footer": ""
    }, _attrs))} data-v-44315c06>`);
    ssrRenderSlot(_ctx.$slots, "footer-content", {}, () => {
      _push(`<div class="container" data-v-44315c06>`);
      if ($setup.theme.footer.message) {
        _push(`<p class="message" data-v-44315c06>${$setup.theme.footer.message ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      if ($setup.theme.footer.copyright) {
        _push(`<p class="copyright" data-v-44315c06>${$setup.theme.footer.copyright ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    }, _push, _parent);
    _push(`</footer>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPFooter.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-44315c06"], ["__file", "VPFooter.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VPEncryptGlobal",
  setup(__props, { expose: __expose }) {
    __expose();
    const { theme, site } = useData();
    const profile = computed(() => theme.value.profile);
    const title = computed(() => {
      var _a;
      return ((_a = profile.value) == null ? void 0 : _a.name) || site.value.title;
    });
    const __returned__ = { theme, site, profile, title, VPEncryptForm, VPFooter };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="vp-global-encrypt" data-v-8bb820f5${_scopeId}><div class="global-encrypt-container" data-v-8bb820f5${_scopeId}>`);
        if ($setup.profile || $setup.title) {
          _push2(`<div class="profile" data-v-8bb820f5${_scopeId}>`);
          if ($setup.profile) {
            _push2(`<p class="${ssrRenderClass([{ circle: $setup.profile.circle }, "avatar"])}" data-v-8bb820f5${_scopeId}><img${ssrRenderAttr("src", $setup.profile.avatar ?? $setup.profile.url)}${ssrRenderAttr("alt", $setup.profile.name)} data-v-8bb820f5${_scopeId}></p>`);
          } else {
            _push2(`<!---->`);
          }
          if ($setup.title) {
            _push2(`<h3 data-v-8bb820f5${_scopeId}>${ssrInterpolate($setup.title)}</h3>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent($setup["VPEncryptForm"], {
          global: "",
          info: $setup.theme.encryptGlobalText
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "vp-global-encrypt" }, [
            createVNode("div", { class: "global-encrypt-container" }, [
              $setup.profile || $setup.title ? (openBlock(), createBlock("div", {
                key: 0,
                class: "profile"
              }, [
                $setup.profile ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: ["avatar", { circle: $setup.profile.circle }]
                }, [
                  createVNode("img", {
                    src: $setup.profile.avatar ?? $setup.profile.url,
                    alt: $setup.profile.name
                  }, null, 8, ["src", "alt"])
                ], 2)) : createCommentVNode("", true),
                $setup.title ? (openBlock(), createBlock("h3", { key: 1 }, toDisplayString($setup.title), 1)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createVNode($setup["VPEncryptForm"], {
                global: "",
                info: $setup.theme.encryptGlobalText
              }, null, 8, ["info"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent($setup["VPFooter"], null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPEncryptGlobal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const VPEncryptGlobal = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-8bb820f5"], ["__file", "VPEncryptGlobal.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { theme } = useData();
    const open = ref(false);
    const vh = ref(0);
    const items2 = ref();
    const btn = ref();
    watch(() => props.headers, () => {
      open.value = false;
    });
    onClickOutside(items2, () => {
      open.value = false;
    }, { ignore: [btn] });
    function toggle() {
      open.value = !open.value;
      vh.value = window.innerHeight + Math.min(window.scrollY - props.navHeight, 0);
    }
    function onItemClick(e) {
      if (e.target.classList.contains("outline-link")) {
        if (items2.value)
          items2.value.style.transition = "none";
        nextTick$1(() => {
          open.value = false;
        });
      }
    }
    function scrollToTop() {
      open.value = false;
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    const __returned__ = { props, theme, open, vh, items: items2, btn, toggle, onItemClick, scrollToTop, VPDocOutlineItem };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "vp-local-nav-outline-dropdown",
    style: { "--vp-vh": `${$setup.vh}px` }
  }, _attrs))} data-v-2b5ef137>`);
  if ($props.headers.length > 0) {
    _push(`<button class="${ssrRenderClass({ open: $setup.open })}" data-v-2b5ef137>${ssrInterpolate($setup.theme.outlineLabel || "On this page")} <span class="vpi-chevron-right icon" data-v-2b5ef137></span></button>`);
  } else {
    _push(`<button data-v-2b5ef137>${ssrInterpolate($setup.theme.returnToTopLabel || "Return to top")}</button>`);
  }
  if ($setup.open) {
    _push(`<div class="items" data-v-2b5ef137><div class="header" data-v-2b5ef137><a class="top-link" href="#" data-v-2b5ef137>${ssrInterpolate($setup.theme.returnToTopLabel || "Return to top")}</a></div><div class="outline" data-v-2b5ef137>`);
    _push(ssrRenderComponent($setup["VPDocOutlineItem"], { headers: $props.headers }, null, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPLocalNavOutlineDropdown.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-2b5ef137"], ["__file", "VPLocalNavOutlineDropdown.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  props: {
    open: { type: Boolean },
    showOutline: { type: Boolean }
  },
  emits: ["openMenu"],
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { theme } = useData();
    const { isBlogPost } = useBlogPageData();
    const { hasSidebar } = useSidebar();
    const { y: y2 } = useWindowScroll();
    const navHeight = ref(0);
    const headers = useHeaders();
    const empty = computed(() => {
      return headers.value.length === 0 && !hasSidebar.value;
    });
    onMounted(() => {
      navHeight.value = Number.parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    });
    const classes2 = computed(() => {
      return {
        "vp-local-nav": true,
        "fixed": empty.value,
        "reached-top": y2.value >= navHeight.value,
        "is-blog": isBlogPost,
        "with-outline": !props.showOutline
      };
    });
    const showLocalNav = computed(() => {
      return (hasSidebar.value || isBlogPost.value) && (!empty.value || y2.value >= navHeight.value);
    });
    const __returned__ = { props, theme, isBlogPost, hasSidebar, y: y2, navHeight, headers, empty, classes: classes2, showLocalNav, VPLocalNavOutlineDropdown };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.showLocalNav) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: $setup.classes }, _attrs))} data-v-75859891><button class="${ssrRenderClass([{ hidden: $setup.isBlogPost }, "menu"])}"${ssrIncludeBooleanAttr($setup.isBlogPost) ? " disabled" : ""}${ssrRenderAttr("aria-expanded", $props.open)} aria-controls="SidebarNav" data-v-75859891><span class="vpi-align-left menu-icon" data-v-75859891></span><span class="menu-text" data-v-75859891>${ssrInterpolate($setup.theme.sidebarMenuLabel || "Menu")}</span></button>`);
    if ($props.showOutline) {
      _push(ssrRenderComponent($setup["VPLocalNavOutlineDropdown"], {
        headers: $setup.headers,
        "nav-height": $setup.navHeight
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPLocalNav.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-75859891"], ["__file", "VPLocalNav.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  props: {
    item: {},
    depth: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes2 = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter")
        return;
      if (!props.item.link) {
        toggle();
      }
    }
    function onCaretClick() {
      if (props.item.link) {
        toggle();
      }
    }
    const __returned__ = { props, collapsed, collapsible, isLink, isActiveLink, hasActiveLink: hasActiveLink2, hasChildren, toggle, sectionTag, linkTag, textTag, itemRole, classes: classes2, onItemInteraction, onCaretClick, VPIcon, VPLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent($setup.sectionTag), mergeProps({
    class: ["vp-sidebar-item sidebar-item", $setup.classes]
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($props.item.text) {
          _push2(`<div class="item"${ssrRenderAttr("role", $setup.itemRole)}${ssrRenderAttr("tabindex", $props.item.items && 0)} data-v-28e85d1d${_scopeId}><div class="indicator" data-v-28e85d1d${_scopeId}></div>`);
          if ($props.item.icon) {
            _push2(ssrRenderComponent($setup["VPIcon"], {
              name: $props.item.icon
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          if ($props.item.link) {
            _push2(ssrRenderComponent($setup["VPLink"], {
              tag: $setup.linkTag,
              class: "link",
              href: $props.item.link
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent($setup.textTag), { class: "text" }, null), _parent3, _scopeId2);
                } else {
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent($setup.textTag), {
                      class: "text",
                      innerHTML: $props.item.text
                    }, null, 8, ["innerHTML"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent($setup.textTag), { class: "text" }, null), _parent2, _scopeId);
          }
          if ($props.item.collapsed != null) {
            _push2(`<div class="caret" role="button" aria-label="toggle section" tabindex="0" data-v-28e85d1d${_scopeId}><span class="vpi-chevron-right caret-icon" data-v-28e85d1d${_scopeId}></span></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($props.item.items && $props.item.items.length) {
          _push2(`<div class="items" data-v-28e85d1d${_scopeId}>`);
          if ($props.depth < 5) {
            _push2(`<!--[-->`);
            ssrRenderList($props.item.items, (i2) => {
              _push2(ssrRenderComponent(_component_VPSidebarItem, {
                key: i2.text,
                item: i2,
                depth: $props.depth + 1
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          $props.item.text ? (openBlock(), createBlock("div", mergeProps({
            key: 0,
            class: "item",
            role: $setup.itemRole,
            tabindex: $props.item.items && 0
          }, toHandlers(
            $props.item.items ? { click: $setup.onItemInteraction, keydown: $setup.onItemInteraction } : {},
            true
          )), [
            createVNode("div", { class: "indicator" }),
            $props.item.icon ? (openBlock(), createBlock($setup["VPIcon"], {
              key: 0,
              name: $props.item.icon
            }, null, 8, ["name"])) : createCommentVNode("", true),
            $props.item.link ? (openBlock(), createBlock($setup["VPLink"], {
              key: 1,
              tag: $setup.linkTag,
              class: "link",
              href: $props.item.link
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent($setup.textTag), {
                  class: "text",
                  innerHTML: $props.item.text
                }, null, 8, ["innerHTML"]))
              ]),
              _: 1
            }, 8, ["tag", "href"])) : (openBlock(), createBlock(resolveDynamicComponent($setup.textTag), {
              key: 2,
              class: "text",
              innerHTML: $props.item.text
            }, null, 8, ["innerHTML"])),
            $props.item.collapsed != null ? (openBlock(), createBlock("div", {
              key: 3,
              class: "caret",
              role: "button",
              "aria-label": "toggle section",
              tabindex: "0",
              onClick: $setup.onCaretClick,
              onKeydown: withKeys($setup.onCaretClick, ["enter"])
            }, [
              createVNode("span", { class: "vpi-chevron-right caret-icon" })
            ], 32)) : createCommentVNode("", true)
          ], 16, ["role", "tabindex"])) : createCommentVNode("", true),
          $props.item.items && $props.item.items.length ? (openBlock(), createBlock("div", {
            key: 1,
            class: "items"
          }, [
            $props.depth < 5 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList($props.item.items, (i2) => {
              return openBlock(), createBlock(_component_VPSidebarItem, {
                key: i2.text,
                item: i2,
                depth: $props.depth + 1
              }, null, 8, ["item", "depth"]);
            }), 128)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }), _parent);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPSidebarItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-28e85d1d"], ["__file", "VPSidebarItem.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarGroup",
  props: {
    items: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const disableTransition = ref(true);
    let timer = null;
    onMounted(() => {
      timer = setTimeout(() => {
        timer = null;
        disableTransition.value = false;
      }, 300);
    });
    onBeforeUnmount(() => {
      if (timer != null) {
        clearTimeout(timer);
        timer = null;
      }
    });
    const __returned__ = { disableTransition, get timer() {
      return timer;
    }, set timer(v2) {
      timer = v2;
    }, VPSidebarItem };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<div class="${ssrRenderClass([{ "no-transition": $setup.disableTransition }, "group"])}" data-v-93096a2e>`);
    _push(ssrRenderComponent($setup["VPSidebarItem"], {
      item,
      depth: 0
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPSidebarGroup.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const VPSidebarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-93096a2e"], ["__file", "VPSidebarGroup.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  props: {
    open: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { sidebarGroups, hasSidebar, sidebarKey } = useSidebar();
    const routePath = useRoutePath();
    const navEl = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    watch(
      [() => props.open, navEl],
      () => {
        var _a;
        if (props.open) {
          isLocked.value = true;
          (_a = navEl.value) == null ? void 0 : _a.focus();
        } else {
          isLocked.value = false;
        }
      },
      { immediate: true, flush: "post" }
    );
    onMounted(() => {
      const activeItem = document.querySelector(
        `.vp-sidebar .vp-link[href*="${routePath.value}"]`
      );
      if (!activeItem || !navEl.value)
        return;
      const { top: navTop, height: navHeight } = navEl.value.getBoundingClientRect();
      const { top: activeTop, height: activeHeight } = activeItem.getBoundingClientRect();
      if (activeTop < navTop || activeTop + activeHeight > navTop + navHeight)
        activeItem.scrollIntoView({ block: "center" });
    });
    const __returned__ = { props, sidebarGroups, hasSidebar, sidebarKey, routePath, navEl, isLocked, VPSidebarGroup, VPTransitionFadeSlideY };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.hasSidebar) {
    _push(`<aside${ssrRenderAttrs(mergeProps({
      ref: "navEl",
      class: ["vp-sidebar", { open: $props.open }],
      "vp-sidebar": ""
    }, _attrs))} data-v-a13d07b5><div class="curtain" data-v-a13d07b5></div>`);
    _push(ssrRenderComponent($setup["VPTransitionFadeSlideY"], null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<nav id="SidebarNav" class="nav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-a13d07b5${_scopeId}><span id="sidebar-aria-label" class="visually-hidden" data-v-a13d07b5${_scopeId}> Sidebar Navigation </span>`);
          ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
          _push2(ssrRenderComponent($setup["VPSidebarGroup"], { items: $setup.sidebarGroups }, null, _parent2, _scopeId));
          ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
          _push2(`</nav>`);
        } else {
          return [
            (openBlock(), createBlock("nav", {
              id: "SidebarNav",
              key: $setup.sidebarKey,
              class: "nav",
              "aria-labelledby": "sidebar-aria-label",
              tabindex: "-1"
            }, [
              createVNode("span", {
                id: "sidebar-aria-label",
                class: "visually-hidden"
              }, " Sidebar Navigation "),
              renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true),
              createVNode($setup["VPSidebarGroup"], { items: $setup.sidebarGroups }, null, 8, ["items"]),
              renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
            ]))
          ];
        }
      }),
      _: 3
    }, _parent));
    _push(`</aside>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPSidebar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-a13d07b5"], ["__file", "VPSidebar.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  setup(__props, { expose: __expose }) {
    __expose();
    const route = useRoute();
    const backToTop = ref();
    watch(
      () => route.path,
      () => backToTop.value.focus()
    );
    function focusOnTargetAnchor({ target }) {
      const el = document.getElementById(
        decodeURIComponent(target.hash).slice(1)
      );
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    }
    const __returned__ = { route, backToTop, focusOnTargetAnchor };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><span tabindex="-1" data-v-f5820c13></span><a href="#VPContent" class="vp-skip-link visually-hidden" data-v-f5820c13> Skip to content </a><!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/components/VPSkipLink.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-f5820c13"], ["__file", "VPSkipLink.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props, { expose: __expose }) {
    __expose();
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const { frontmatter } = useData();
    const { isGlobalDecrypted, isPageDecrypted } = useEncrypt();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    const __returned__ = { isSidebarOpen, openSidebar, closeSidebar, frontmatter, isGlobalDecrypted, isPageDecrypted, route, VPNav, VPBackdrop, VPBackToTop, VPBulletin, VPContent, VPEncryptGlobal, VPFooter, VPLocalNav, VPSidebar, VPSkipLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Content = resolveComponent("Content");
  _push(`<!--[-->`);
  if ($setup.frontmatter.pageLayout !== false && $setup.frontmatter.pageLayout !== "custom") {
    _push(`<div class="${ssrRenderClass([$setup.frontmatter.pageClass, "theme-plume vp-layout"])}" vp-container data-v-91a6ef20>`);
    if (!$setup.isGlobalDecrypted) {
      _push(ssrRenderComponent($setup["VPEncryptGlobal"], null, null, _parent));
    } else {
      _push(`<!--[-->`);
      ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
      _push(ssrRenderComponent($setup["VPSkipLink"], null, null, _parent));
      _push(ssrRenderComponent($setup["VPBackdrop"], {
        show: $setup.isSidebarOpen,
        onClick: $setup.closeSidebar
      }, null, _parent));
      _push(ssrRenderComponent($setup["VPNav"], null, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
            ];
          }
        }),
        "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent($setup["VPLocalNav"], {
        open: $setup.isSidebarOpen,
        "show-outline": $setup.isPageDecrypted,
        onOpenMenu: $setup.openSidebar
      }, null, _parent));
      _push(ssrRenderComponent($setup["VPSidebar"], { open: $setup.isSidebarOpen }, {
        "sidebar-nav-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
            ];
          }
        }),
        "sidebar-nav-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "custom-content", {}, () => {
        _push(ssrRenderComponent($setup["VPContent"], null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "blog-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-top", {}, void 0, true)
              ];
            }
          }),
          "blog-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-bottom", {}, void 0, true)
              ];
            }
          }),
          "blog-archives-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-archives-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-archives-before", {}, void 0, true)
              ];
            }
          }),
          "blog-archives-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-archives-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-archives-after", {}, void 0, true)
              ];
            }
          }),
          "blog-tags-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-tags-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-tags-before", {}, void 0, true)
              ];
            }
          }),
          "blog-tags-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-tags-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-tags-after", {}, void 0, true)
              ];
            }
          }),
          "blog-tags-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-tags-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-tags-title-after", {}, void 0, true)
              ];
            }
          }),
          "blog-tags-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-tags-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-tags-content-before", {}, void 0, true)
              ];
            }
          }),
          "blog-categories-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-categories-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-categories-before", {}, void 0, true)
              ];
            }
          }),
          "blog-categories-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-categories-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-categories-after", {}, void 0, true)
              ];
            }
          }),
          "blog-categories-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-categories-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-categories-content-before", {}, void 0, true)
              ];
            }
          }),
          "blog-post-list-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-post-list-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-post-list-before", {}, void 0, true)
              ];
            }
          }),
          "blog-post-list-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-post-list-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-post-list-after", {}, void 0, true)
              ];
            }
          }),
          "blog-post-list-pagination-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-post-list-pagination-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-post-list-pagination-after", {}, void 0, true)
              ];
            }
          }),
          "blog-aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-aside-top", {}, void 0, true)
              ];
            }
          }),
          "blog-aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "blog-extract-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-extract-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-extract-before", {}, void 0, true)
              ];
            }
          }),
          "blog-extract-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "blog-extract-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "blog-extract-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      _push(ssrRenderComponent($setup["VPBackToTop"], null, null, _parent));
      _push(ssrRenderComponent($setup["VPFooter"], null, {
        "footer-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "footer-content", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "footer-content", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
      _push(`<!--]-->`);
    }
    _push(`</div>`);
  } else {
    _push(ssrRenderComponent(_component_Content, {
      "vp-container": "",
      "vp-content": ""
    }, null, _parent));
  }
  _push(ssrRenderComponent($setup["VPBulletin"], null, {
    "bulletin-content": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "bulletin-content", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "bulletin-content", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/layouts/Layout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-91a6ef20"], ["__file", "Layout.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props, { expose: __expose }) {
    __expose();
    const root = useRouteLocale();
    const { theme } = useData();
    const __returned__ = { root, theme, VPNav, VPBulletin, VPFooter, VPSkipLink, get withBase() {
      return withBase;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div vp-not-found class="theme-plume vp-layout" data-v-d05a10fb>`);
  ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
  _push(ssrRenderComponent($setup["VPSkipLink"], null, null, _parent));
  _push(ssrRenderComponent($setup["VPNav"], null, {
    "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
        ];
      }
    }),
    "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
        ];
      }
    }),
    "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
        ];
      }
    }),
    "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
        ];
      }
    }),
    "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
        ];
      }
    }),
    "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<div id="VPContent" class="vp-content" data-v-d05a10fb>`);
  ssrRenderSlot(_ctx.$slots, "not-found", {}, () => {
    var _a, _b, _c, _d, _e;
    _push(`<div class="vp-not-found" data-v-d05a10fb><p class="code" data-v-d05a10fb>${ssrInterpolate(((_a = $setup.theme.notFound) == null ? void 0 : _a.code) ?? "404")}</p><h1 class="title" data-v-d05a10fb>${ssrInterpolate(((_b = $setup.theme.notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND")}</h1><div class="divider" data-v-d05a10fb></div><blockquote class="quote" data-v-d05a10fb>${ssrInterpolate(((_c = $setup.theme.notFound) == null ? void 0 : _c.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading.")}</blockquote><div class="action" data-v-d05a10fb><a class="link"${ssrRenderAttr("href", $setup.withBase($setup.root))}${ssrRenderAttr("aria-label", ((_d = $setup.theme.notFound) == null ? void 0 : _d.linkLabel) ?? "go to home")} data-v-d05a10fb>${ssrInterpolate(((_e = $setup.theme.notFound) == null ? void 0 : _e.linkText) ?? "Take me home")}</a></div></div>`);
  }, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent($setup["VPFooter"], null, {
    "footer-content": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "footer-content", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "footer-content", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent($setup["VPBulletin"], null, {
    "bulletin-content": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "bulletin-content", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "bulletin-content", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/layouts/NotFound.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d05a10fb"], ["__file", "NotFound.vue"]]);
function globalComponents(app) {
  app.component("Badge", VPBadge);
  app.component("VPBadge", VPBadge);
  app.component("VPCard", VPCard);
  app.component("Card", VPCard);
  app.component("VPCardGrid", VPCardGrid);
  app.component("CardGrid", VPCardGrid);
  app.component("VPLinkCard", VPLinkCard);
  app.component("LinkCard", VPLinkCard);
  app.component("VPImageCard", VPImageCard);
  app.component("ImageCard", VPImageCard);
  app.component("Icon", VPIcon);
  app.component("VPIcon", VPIcon);
  app.component("HomeBox", VPHomeBox);
  app.component("VPHomeBox", VPHomeBox);
}
var config_default = defineClientConfig({
  enhance({ app, router }) {
    setupThemeData(app);
    setupDarkMode(app);
    enhanceScrollBehavior(router);
    globalComponents(app);
  },
  setup() {
    setupSidebar();
    setupHeaders();
    setupEncrypt();
    setupWatermark();
  },
  layouts: { Layout, NotFound }
});
const clientConfig11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config_default
}, Symbol.toStringTag, { value: "Module" }));
function isObject$2(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend$2(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach((key) => {
    if (typeof target[key] === "undefined") target[key] = src[key];
    else if (isObject$2(src[key]) && isObject$2(target[key]) && Object.keys(src[key]).length > 0) {
      extend$2(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend$2(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend$2(win, ssrWindow);
  return win;
}
function classesToTokens(classes2) {
  if (classes2 === void 0) {
    classes2 = "";
  }
  return classes2.trim().split(" ").filter((c) => !!c.trim());
}
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach((key) => {
    try {
      object[key] = null;
    } catch (e) {
    }
    try {
      delete object[key];
    } catch (e) {
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle$1(el) {
  const window2 = getWindow();
  let style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = "x";
  }
  const window2 = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle$1(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map((a2) => a2.replace(",", ".")).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject$1(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend$1() {
  const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i2 = 1; i2 < arguments.length; i2 += 1) {
    const nextSource = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window2 = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none";
  window2.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? "next" : "prev";
  const isOutOfBound = (current, target) => {
    return dir === "next" && current >= target || dir === "prev" && current <= target;
  };
  const animate = () => {
    time = (/* @__PURE__ */ new Date()).getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.scrollSnapType = "";
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = "";
  }
  const children = [...element.children];
  if (element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter((el) => el.matches(selector));
}
function elementIsChildOf(el, parent) {
  const isChild = parent.contains(el);
  if (!isChild && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    return children.includes(el);
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
  }
}
function createElement(tag, classes2) {
  if (classes2 === void 0) {
    classes2 = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
  return el;
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling;
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling;
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window2 = getWindow();
  return window2.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i2;
  if (child) {
    i2 = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i2 += 1;
    }
    return i2;
  }
  return void 0;
}
function elementParents(el, selector) {
  const parents = [];
  let parent = el.parentElement;
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener("transitionend", fireCallBack);
  }
  if (callback) {
    el.addEventListener("transitionend", fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window2 = getWindow();
  {
    return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
  }
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter((e) => !!e);
}
function getRotateFix(swiper) {
  return (v2) => {
    if (Math.abs(v2) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v2) % 90 === 0) {
      return v2 + 1e-3;
    }
    return v2;
  };
}
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel"
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize2(e) {
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0;
    let pX = 0;
    let pY = 0;
    if ("detail" in e) {
      sY = e.detail;
    }
    if ("wheelDelta" in e) {
      sY = -e.wheelDelta / 120;
    }
    if ("wheelDeltaY" in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ("wheelDeltaX" in e) {
      sX = -e.wheelDeltaX / 120;
    }
    if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ("deltaY" in e) {
      pY = e.deltaY;
    }
    if ("deltaX" in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      return false;
    }
    if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
      return true;
    }
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit("scroll", newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit("scroll", newEvent.raw);
    }
    lastScrollTime = new window2.Date().getTime();
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      return true;
    }
    return false;
  }
  function handle(event2) {
    let e = event2;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;
    if (event2.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent;
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize2(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
        else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
      else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event2
      };
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift();
      }
      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
      recentWheelEvents.push(newEvent);
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = void 0;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? "next" : "prev",
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          clearTimeout(timeout);
          timeout = void 0;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift();
          }
          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 0);
          }
          if (!timeout) {
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 500);
          }
        }
        if (!ignoreWheelEvents) emit("scroll", e);
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    return false;
  }
  function events2(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]("mouseenter", handleMouseEnter);
    targetEl[method]("mouseleave", handleMouseLeave);
    targetEl[method]("wheel", handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener("wheel", handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events2("addEventListener");
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events2("removeEventListener");
    swiper.mousewheel.enabled = false;
    return true;
  }
  on("init", () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on("destroy", () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!params[key] && params.auto === true) {
        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = createElement("div", checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}
function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === "string" && swiper.isElement) {
      res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === "string") res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res) return el;
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (subEl) {
        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      }
    });
  }
  function update2() {
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit("navigationPrev");
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit("navigationNext");
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(" "));
      }
    };
    nextEl.forEach((el) => initButton(el, "next"));
    prevEl.forEach((el) => initButton(el, "prev"));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
    };
    nextEl.forEach((el) => destroyButton(el, "next"));
    prevEl.forEach((el) => destroyButton(el, "prev"));
  }
  on("init", () => {
    if (swiper.params.navigation.enabled === false) {
      disable();
    } else {
      init();
      update2();
    }
  });
  on("toEdge fromEdge lock unlock", () => {
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (swiper.enabled) {
      update2();
      return;
    }
    [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
  });
  on("click", (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
    if (swiper.isElement && !targetIsButton) {
      const path = e.path || e.composedPath && e.composedPath();
      if (path) {
        targetIsButton = path.find((pathEl) => nextEl.includes(pathEl) || prevEl.includes(pathEl));
      }
    }
    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
    init();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update: update2,
    init,
    destroy
  });
}
function classesToSelector(classes2) {
  if (classes2 === void 0) {
    classes2 = "";
  }
  return `.${classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function getMoveDirection(prevIndex, nextIndex, length) {
    prevIndex = prevIndex % length;
    nextIndex = nextIndex % length;
    if (nextIndex === prevIndex + 1) {
      return "next";
    } else if (nextIndex === prevIndex - 1) {
      return "previous";
    }
    return;
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
      if (moveDirection === "next") {
        swiper.slideNext();
      } else if (moveDirection === "previous") {
        swiper.slidePrev();
      } else {
        swiper.slideToLoop(index);
      }
    } else {
      swiper.slideTo(index);
    }
  }
  function update2() {
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== "undefined") {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height");
        el.forEach((subEl) => {
          subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach((bulletEl) => {
        const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s2) => typeof s2 === "string" && s2.includes(" ") ? s2.split(" ") : s2).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach((bullet) => {
          const bulletIndex = elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          } else if (swiper.isElement) {
            bullet.setAttribute("part", "bullet");
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, "prev");
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, "next");
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(" "));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i2 = firstIndex; i2 <= lastIndex; i2 += 1) {
            if (bullets[i2]) {
              bullets[i2].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
          }
          setSideBullets(firstDisplayedBullet, "prev");
          setSideBullets(lastDisplayedBullet, "next");
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? "right" : "left";
        bullets.forEach((bullet) => {
          bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === "fraction") {
        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === "progressbar") {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === "custom" && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit("paginationRender", subEl);
      } else {
        if (subElIndex === 0) emit("paginationRender", subEl);
        emit("paginationUpdate", subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
      }
    });
  }
  function render() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i2 = 0; i2 < numberOfBullets; i2 += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i2, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === "fraction") {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === "progressbar") {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach((subEl) => {
      if (params.type !== "custom") {
        subEl.innerHTML = paginationHTML || "";
      }
      if (params.type === "bullets") {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== "custom") {
      emit("paginationRender", el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      if (el.length > 1) {
        el = el.filter((subEl) => {
          if (elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (params.type === "bullets" && params.clickable) {
        subEl.classList.add(...(params.clickableClass || "").split(" "));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === "bullets" && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener("click", onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || "").split(" "));
          subEl.removeEventListener("click", onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
  }
  on("changeDirection", () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on("init", () => {
    if (swiper.params.pagination.enabled === false) {
      disable();
    } else {
      init();
      render();
      update2();
    }
  });
  on("activeIndexChange", () => {
    if (typeof swiper.snapIndex === "undefined") {
      update2();
    }
  });
  on("snapIndexChange", () => {
    update2();
  });
  on("snapGridLengthChange", () => {
    render();
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
    }
  });
  on("lock unlock", () => {
    update2();
  });
  on("click", (_s, e) => {
    const targetEl = e.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit("paginationShow");
      } else {
        emit("paginationHide");
      }
      el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update: update2,
    init,
    destroy
  });
}
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayTimeLeft;
  let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
    if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter((slideEl) => slideEl.classList.contains("swiper-slide-active"))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return void 0;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
    return currentSlideDelay;
  };
  const run = (delayForce) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit("autoplay");
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit("autoplay");
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }
    return delay;
  };
  const start = () => {
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.running = true;
    run();
    emit("autoplayStart");
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit("autoplayStop");
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit("autoplayPause");
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document2 = getDocument();
    if (document2.visibilityState === "hidden") {
      pausedByInteraction = true;
      pause(true);
    }
    if (document2.visibilityState === "visible") {
      resume();
    }
  };
  const onPointerEnter = (e) => {
    if (e.pointerType !== "mouse") return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = (e) => {
    if (e.pointerType !== "mouse") return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener("pointerenter", onPointerEnter);
      swiper.el.addEventListener("pointerleave", onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    if (swiper.el && typeof swiper.el !== "string") {
      swiper.el.removeEventListener("pointerenter", onPointerEnter);
      swiper.el.removeEventListener("pointerleave", onPointerLeave);
    }
  };
  const attachDocumentEvents = () => {
    const document2 = getDocument();
    document2.addEventListener("visibilitychange", onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
  };
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on("_freeModeStaticRelease", () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on("_freeModeNoMomentumRelease", () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on("touchEnd", () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on("slideChange", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on("beforeInit", () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on("setTranslate", () => {
    if (swiper.params.effect !== effect) return;
    setTranslate2();
  });
  on("setTransition", (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition2(duration);
  });
  on("transitionEnd", () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      swiper.slides.forEach((slideEl) => {
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
      });
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on("virtualUpdate", () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate2();
        requireUpdateOnVirtual = false;
      }
    });
  });
}
function effectTarget(effectParams, slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = "hidden";
    transformEl.style["-webkit-backface-visibility"] = "hidden";
  }
  return transformEl;
}
function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = (el) => {
    if (!el.parentElement) {
      const slide2 = swiper.slides.filter((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
      return slide2;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter((transformEl) => {
        const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach((el) => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}
function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate2 = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i2 = 0; i2 < slides.length; i2 += 1) {
      const slideEl = swiper.slides[i2];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: "fade",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
    let shadowAfter = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
    if (!shadowBefore) {
      shadowBefore = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "left" : "top"}`.split(" "));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}`.split(" "));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach((slideEl) => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate2 = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser: browser2
    } = swiper;
    const r2 = getRotateFix(swiper);
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector(".swiper-cube-shadow");
        if (!cubeShadowEl) {
          cubeShadowEl = createElement("div", "swiper-cube-shadow");
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector(".swiper-cube-shadow");
        if (!cubeShadowEl) {
          cubeShadowEl = createElement("div", "swiper-cube-shadow");
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i2 = 0; i2 < slides.length; i2 += 1) {
      const slideEl = slides[i2];
      let slideIndex = i2;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${r2(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r2(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style["-webkit-transform-origin"] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
      }
    }
    const zFactor = (browser2.isSafari || browser2.isWebView) && browser2.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r2(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r2(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
    wrapperEl.style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
  };
  const setTransition2 = (duration) => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach((slideEl) => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((subEl) => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector(".swiper-cube-shadow");
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  effectInit({
    effect: "cube",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}
function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
  const shadowContainer = getSlideTransformEl(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
  if (!shadowEl) {
    shadowEl = createElement("div", shadowClass.split(" "));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}
function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
    if (!shadowBefore) {
      shadowBefore = createShadow("flip", slideEl, swiper.isHorizontal() ? "left" : "top");
    }
    if (!shadowAfter) {
      shadowAfter = createShadow("flip", slideEl, swiper.isHorizontal() ? "right" : "bottom");
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    swiper.params.flipEffect;
    swiper.slides.forEach((slideEl) => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate2 = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    const rotateFix = getRotateFix(swiper);
    for (let i2 = 0; i2 < slides.length; i2 += 1) {
      const slideEl = slides[i2];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "flip",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate2 = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate2 = params.depth;
    const r2 = getRotateFix(swiper);
    for (let i2 = 0, length = slides.length; i2 < length; i2 += 1) {
      const slideEl = slides[i2];
      const slideSize = slidesSizesGrid[i2];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      let translateZ = -translate2 * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
      if (Math.abs(translateX) < 1e-3) translateX = 0;
      if (Math.abs(translateY) < 1e-3) translateY = 0;
      if (Math.abs(translateZ) < 1e-3) translateZ = 0;
      if (Math.abs(rotateY) < 1e-3) rotateY = 0;
      if (Math.abs(rotateX) < 1e-3) rotateX = 0;
      if (Math.abs(scale) < 1e-3) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r2(rotateX)}deg) rotateY(${r2(rotateY)}deg) scale(${scale})`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
        let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
        if (!shadowBeforeEl) {
          shadowBeforeEl = createShadow("coverflow", slideEl, isHorizontal ? "left" : "top");
        }
        if (!shadowAfterEl) {
          shadowAfterEl = createShadow("coverflow", slideEl, isHorizontal ? "right" : "bottom");
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  effectInit({
    effect: "coverflow",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}
function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = (value) => {
    if (typeof value === "string") return value;
    return `${value}px`;
  };
  const setTranslate2 = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    const rotateFix = getRotateFix(swiper);
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i2 = 0; i2 < slides.length; i2 += 1) {
      const slideEl = slides[i2];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t2 = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r2 = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t2[1] = t2[0];
        t2[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      t2.forEach((value, index) => {
        t2[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      r2.forEach((value, index) => {
        let val = data.rotate[index] * Math.abs(progress * multiplier);
        r2[index] = val;
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t2.join(", ");
      const rotateString = `rotateX(${rotateFix(r2[0])}deg) rotateY(${rotateFix(r2[1])}deg) rotateZ(${rotateFix(r2[2])}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl && data.shadow) {
          shadowEl = createShadow("creative", slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: "creative",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate2 = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i2 = 0; i2 < slides.length; i2 += 1) {
      const slideEl = slides[i2];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i2 : i2;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      if (params.slideShadows) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl) {
          shadowEl = createShadow("cards", slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "cards",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
let support;
function calcSupport() {
  const window2 = getWindow();
  const document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support2 = getSupport();
  const window2 = getWindow();
  const platform = window2.navigator.platform;
  const ua = userAgent || window2.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window2.screen.width;
  const screenHeight = window2.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === "Win32";
  let macos = platform === "MacIntel";
  const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device.os = "android";
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
let browser;
function calcBrowser() {
  const window2 = getWindow();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  if (isSafari()) {
    const ua = String(window2.navigator.userAgent);
    if (ua.includes("Version/")) {
      const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver((entries) => {
      animationFrame = window2.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach((_ref2) => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window2.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("orientationchange");
  };
  on("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler);
    window2.addEventListener("orientationchange", orientationChangeHandler);
  });
  on("destroy", () => {
    removeObserver();
    window2.removeEventListener("resize", resizeHandler);
    window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window2 = getWindow();
  const attach = function(target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    const observer = new ObserverFunc((mutations) => {
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate);
      } else {
        window2.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i2 = 0; i2 < containerParents.length; i2 += 1) {
        attach(containerParents[i2]);
      }
    }
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach((observer) => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on("init", init);
  on("destroy", destroy);
}
var eventsEmitter = {
  on(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    events2.split(" ").forEach((event2) => {
      if (!self.eventsListeners[event2]) self.eventsListeners[event2] = [];
      self.eventsListeners[event2][method](handler);
    });
    return self;
  },
  once(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    function onceHandler() {
      self.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events2, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events2.split(" ").forEach((event2) => {
      if (typeof handler === "undefined") {
        self.eventsListeners[event2] = [];
      } else if (self.eventsListeners[event2]) {
        self.eventsListeners[event2].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event2].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events2;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events2 = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach((event2) => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach((eventHandler) => {
          eventHandler.apply(context, [event2, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event2]) {
        self.eventsListeners[event2].forEach((eventHandler) => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
  height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;
  slides.forEach((slideEl) => {
    if (rtl) {
      slideEl.style.marginLeft = "";
    } else {
      slideEl.style.marginRight = "";
    }
    slideEl.style.marginBottom = "";
    slideEl.style.marginTop = "";
  });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
    return typeof params.breakpoints[key].slidesPerView !== "undefined";
  }).length > 0;
  for (let i2 = 0; i2 < slidesLength; i2 += 1) {
    slideSize = 0;
    let slide2;
    if (slides[i2]) slide2 = slides[i2];
    if (gridEnabled) {
      swiper.grid.updateSlide(i2, slide2, slides);
    }
    if (slides[i2] && elementStyle(slide2, "display") === "none") continue;
    if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slides[i2].style[swiper.getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2);
      const currentTransform = slide2.style.transform;
      const currentWebKitTransform = slide2.style.webkitTransform;
      if (currentTransform) {
        slide2.style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width") : elementOuterSize(slide2, "height");
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide2;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i2]) {
        slides[i2].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slides[i2]) {
      slides[i2].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i2 !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i2 === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i2 = 0; i2 < snapGrid.length; i2 += 1) {
      let slidesGridItem = snapGrid[i2];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i2 = 0; i2 < groups; i2 += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i2 = 0; i2 < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i2 += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach((slideEl) => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map((snap) => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map((v2) => v2 + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map((v2) => v2 + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit("slidesUpdated");
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i2;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = (index) => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach((slide2) => {
        activeSlides.push(slide2);
      });
    } else {
      for (i2 = 0; i2 < Math.ceil(swiper.params.slidesPerView); i2 += 1) {
        const index = swiper.activeIndex + i2;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i2 = 0; i2 < activeSlides.length; i2 += 1) {
    if (typeof activeSlides[i2] !== "undefined") {
      const height = activeSlides[i2].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i2 = 0; i2 < slides.length; i2 += 1) {
    slides[i2].swiperSlideOffset = (swiper.isHorizontal() ? slides[i2].offsetLeft : slides[i2].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}
const toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate2) {
  if (translate2 === void 0) {
    translate2 = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl) offsetCenter = translate2;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i2 = 0; i2 < slides.length; i2 += 1) {
    const slide2 = slides[i2];
    let slideOffset = slide2.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i2];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i2];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i2);
    }
    toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate2);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
const toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = (selector) => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.filter((slideEl) => slideEl.column === activeIndex)[0];
      nextSlide = slides.filter((slideEl) => slideEl.column === activeIndex + 1)[0];
      prevSlide = slides.filter((slideEl) => slideEl.column === activeIndex - 1)[0];
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }
      prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach((slideEl) => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}
const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute("loading");
};
const preload = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i2) => {
      return activeColumn + slidesPerView + i2;
    }));
    swiper.slides.forEach((slideEl, i2) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i2);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i2 = activeIndex - amount; i2 <= slideIndexLastInView + amount; i2 += 1) {
      const realIndex = (i2 % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i2 = Math.max(activeIndex - amount, 0); i2 <= Math.min(slideIndexLastInView + amount, len - 1); i2 += 1) {
      if (i2 !== activeIndex && (i2 > slideIndexLastInView || i2 < activeIndex)) {
        unlazy(swiper, i2);
      }
    }
  }
};
function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i2 = 0; i2 < slidesGrid.length; i2 += 1) {
    if (typeof slidesGrid[i2 + 1] !== "undefined") {
      if (translate2 >= slidesGrid[i2] && translate2 < slidesGrid[i2 + 1] - (slidesGrid[i2 + 1] - slidesGrid[i2]) / 2) {
        activeIndex = i2;
      } else if (translate2 >= slidesGrid[i2] && translate2 < slidesGrid[i2 + 1]) {
        activeIndex = i2 + 1;
      }
    } else if (translate2 >= slidesGrid[i2]) {
      activeIndex = i2;
    }
  }
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = (aIndex) => {
    let realIndex2 = aIndex - swiper.virtual.slidesBefore;
    if (realIndex2 < 0) {
      realIndex2 = swiper.virtual.slides.length + realIndex2;
    }
    if (realIndex2 >= swiper.virtual.slides.length) {
      realIndex2 -= swiper.virtual.slides.length;
    }
    return realIndex2;
  };
  if (typeof activeIndex === "undefined") {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.filter((slideEl) => slideEl.column === activeIndex)[0];
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
      if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide2 = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i2 = 0; i2 < swiper.slides.length; i2 += 1) {
      if (swiper.slides[i2] === slide2) {
        slideFound = true;
        slideIndex = i2;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? "x" : "y";
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y2 = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate2 : translate2;
  } else {
    y2 = translate2;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y2 = Math.floor(y2);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y2;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y2;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y2 -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y2}px, ${z}px)`;
  }
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2, speed, runCallbacks2, translateBounds, internal) {
  if (translate2 === void 0) {
    translate2 = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks2 === void 0) {
    runCallbacks2 = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;
  else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;
  else newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks2) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks2) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks2) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks: runCallbacks2,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = "next";
    else if (activeIndex < previousIndex) dir = "prev";
    else dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks2 && activeIndex !== previousIndex) {
    if (dir === "reset") {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks2, direction) {
  if (runCallbacks2 === void 0) {
    runCallbacks2 = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks: runCallbacks2,
    direction,
    step: "Start"
  });
}
function transitionEnd(runCallbacks2, direction) {
  if (runCallbacks2 === void 0) {
    runCallbacks2 = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks: runCallbacks2,
    direction,
    step: "End"
  });
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index, speed, runCallbacks2, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks2 === void 0) {
    runCallbacks2 = true;
  }
  if (typeof index === "string") {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i2 = 0; i2 < slidesGrid.length; i2 += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i2] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i2 + 1] * 100);
      if (typeof slidesGrid[i2 + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i2;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i2 + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i2;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks2) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex) direction = "next";
  else if (slideIndex < activeIndex) direction = "prev";
  else direction = "reset";
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks2, direction);
      swiper.transitionEnd(runCallbacks2, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t2 = rtl ? translate2 : -translate2;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
        });
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t2,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t2,
        behavior: "smooth"
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks2, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks2, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks2, direction);
      };
    }
    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToLoop(index, speed, runCallbacks2, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks2 === void 0) {
    runCallbacks2 = true;
  }
  if (typeof index === "string") {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === "auto") {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === "next" ? swiper.realIndex : void 0
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks2, internal);
  });
  return swiper;
}
function slideNext(speed, runCallbacks2, internal) {
  if (runCallbacks2 === void 0) {
    runCallbacks2 = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "next"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks2, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks2, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks2, internal);
}
function slidePrev(speed, runCallbacks2, internal) {
  if (runCallbacks2 === void 0) {
    runCallbacks2 = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "prev"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize2(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize2(translate2);
  const normalizedSnapGrid = snapGrid.map((val) => normalize2(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks2, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks2, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks2, internal);
}
function slideReset(speed, runCallbacks2, internal) {
  if (runCallbacks2 === void 0) {
    runCallbacks2 = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks2, internal);
}
function slideToClosest(speed, runCallbacks2, internal, threshold) {
  if (runCallbacks2 === void 0) {
    runCallbacks2 = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks2, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute("data-swiper-slide-index", index);
    });
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = (amountOfSlides) => {
    for (let i2 = 0; i2 < amountOfSlides; i2 += 1) {
      const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? void 0 : "next"
  });
}
function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo: slideTo2 = true,
    direction,
    setTranslate: setTranslate2,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit("beforeLoopFix");
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo2) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === "auto") {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides) {
    showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
  } else if (gridEnabled && params.grid.fill === "row") {
    showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === "undefined") {
    activeSlideIndex = swiper.getSlideIndex(slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === "next" || !direction;
  const isPrev = direction === "prev" || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i2 = 0; i2 < loopedSlides - activeColIndexWithShift; i2 += 1) {
      const index = i2 - Math.floor(i2 / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i3 = slides.length - 1; i3 >= 0; i3 -= 1) {
          if (slides[i3].column === colIndexToPrepend) prependSlidesIndexes.push(i3);
        }
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    for (let i2 = 0; i2 < slidesAppended; i2 += 1) {
      const index = i2 - Math.floor(i2 / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide2, slideIndex) => {
          if (slide2.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (isPrev) {
    prependSlidesIndexes.forEach((index) => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach((index) => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === "auto") {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide2, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo2) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate2) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach((c) => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
      });
    }
  }
  swiper.emit("loopFix");
}
function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach((slideEl) => {
    const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach((slideEl) => {
    slideEl.removeAttribute("data-swiper-slide-index");
  });
  newSlidesOrder.forEach((slideEl) => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event2, startX) {
  const window2 = getWindow();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event2.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event2) {
  const swiper = this;
  const document2 = getDocument();
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === "pointerdown") {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === "touchstart") {
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === "mouse") return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === "wrapper") {
    if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
  }
  if ("which" in e && e.which === 3) return;
  if ("button" in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === "SELECT") {
      data.isTouched = false;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
    document2.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e);
}
function onTouchMove(event2) {
  const document2 = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event2.pointerType === "mouse") return;
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === "pointermove") {
    if (data.touchId !== null) return;
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === "touchmove") {
    targetTouch = [...e.changedTouches].filter((t2) => t2.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e.target && e.pointerType !== "mouse") {
    document2.activeElement.blur();
  }
  if (document2.activeElement) {
    if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent("transitionend", {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  let loopFixed;
  (/* @__PURE__ */ new Date()).getTime();
  if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({
        direction: "prev",
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: "next",
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event2) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
  if (!isTouchEvent) {
    if (data.touchId !== null) return;
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].filter((t2) => t2.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
    const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === "mouse") return;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i2 = 0; i2 < slidesGrid.length; i2 += i2 < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i2 < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i2 + increment2] !== "undefined") {
      if (swipeToLast || currentPos >= slidesGrid[i2] && currentPos < slidesGrid[i2 + increment2]) {
        stopIndex = i2;
        groupSize = slidesGrid[i2 + increment2] - slidesGrid[i2];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i2]) {
      stopIndex = i2;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
      else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}
function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = "auto";
  }
}
const events = (swiper, method) => {
  const document2 = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
  const swiperMethod = method;
  if (!el || typeof el === "string") return;
  document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]("touchstart", swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]("pointerdown", swiper.onTouchStart, {
    passive: false
  });
  document2[domMethod]("touchmove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("pointermove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("touchend", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerup", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointercancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("touchcancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerout", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerleave", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("contextmenu", swiper.onTouchEnd, {
    passive: true
  });
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]("scroll", swiper.onScroll);
  }
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
  } else {
    swiper[swiperMethod]("observerUpdate", onResize, true);
  }
  el[domMethod]("load", swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
var events$1 = {
  attachEvents,
  detachEvents
};
const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
  const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }
  ["navigation", "pagination", "scrollbar"].forEach((prop) => {
    if (typeof breakpointParams[prop] === "undefined") return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend$1(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base, containerEl) {
  if (base === void 0) {
    base = "window";
  }
  if (!breakpoints2 || base === "container" && !containerEl) return void 0;
  let breakpoint = false;
  const window2 = getWindow();
  const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map((point) => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a2, b2) => parseInt(a2.value, 10) - parseInt(b2.value, 10));
  for (let i2 = 0; i2 < points.length; i2 += 1) {
    const {
      point,
      value
    } = points[i2];
    if (base === "window") {
      if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach((item) => {
    if (typeof item === "object") {
      Object.keys(item).forEach((classNames) => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  const suffixes = prepareClasses(["initialized", params.direction, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "grid": params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    "android": device.android
  }, {
    "ios": device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    "centered": params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === "string") return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}
var classes = {
  addClasses,
  removeClasses
};
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
var checkOverflow$1 = {
  checkOverflow
};
var defaults = {
  init: true,
  direction: "horizontal",
  oneWayMovement: false,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: "swiper",
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend$1(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend$1(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    extend$1(allModulesParams, obj);
  };
}
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
let Swiper$2 = class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = extend$1({}, params);
    if (el && !params.el) params.el = el;
    const document2 = getDocument();
    if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document2.querySelectorAll(params.el).forEach((containerEl) => {
        const newParams = extend$1({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach((mod) => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    const swiperParams = extend$1({}, defaults, allModulesParams);
    swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend$1({}, swiper.params);
    swiper.passedParams = extend$1({}, params);
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach((eventName) => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit("enable");
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit("disable");
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(" ").filter((className) => {
      return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return "";
    return slideEl.className.split(" ").filter((className) => {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(" ");
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach((slideEl) => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit("_slideClass", slideEl, classNames);
    });
    swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = "current";
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === "number") return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i2 = activeIndex + 1; i2 < slides.length; i2 += 1) {
        if (slides[i2] && !breakLoop) {
          slideSize += Math.ceil(slides[i2].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i2 = activeIndex - 1; i2 >= 0; i2 -= 1) {
        if (slides[i2] && !breakLoop) {
          slideSize += slides[i2].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      if (view === "current") {
        for (let i2 = activeIndex + 1; i2 < slides.length; i2 += 1) {
          const slideInView = exact ? slidesGrid[i2] + slidesSizesGrid[i2] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i2] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        for (let i2 = activeIndex - 1; i2 >= 0; i2 -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i2] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate2() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate2();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate2();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach((slideEl) => {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
    swiper.rtl = direction === "rtl";
    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "rtl";
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "ltr";
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;
    let el = element || swiper.params.el;
    if (typeof el === "string") {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement("div", swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
      wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    if (swiper.params.loop) {
      swiper.loopCreate();
    }
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener("load", (e) => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);
    swiper.initialized = true;
    preload(swiper);
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== "string") {
        el.removeAttribute("style");
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute("style");
      }
      if (slides && slides.length) {
        slides.forEach((slideEl) => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute("style");
          slideEl.removeAttribute("data-swiper-slide-index");
        });
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.swiper = null;
      }
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend$1(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === "function" && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach((m2) => Swiper.installModule(m2));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
};
Object.keys(prototypes).forEach((prototypeGroup) => {
  Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
    Swiper$2.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper$2.use([Resize, Observer]);
const paramsList = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function isObject(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object" && !o.__swiper__;
}
function extend(target, src) {
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    if (typeof target[key] === "undefined") target[key] = src[key];
    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__) target[key] = src[key];
      else extend(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}
function needsNavigation(params) {
  if (params === void 0) {
    params = {};
  }
  return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
}
function needsPagination(params) {
  if (params === void 0) {
    params = {};
  }
  return params.pagination && typeof params.pagination.el === "undefined";
}
function needsScrollbar(params) {
  if (params === void 0) {
    params = {};
  }
  return params.scrollbar && typeof params.scrollbar.el === "undefined";
}
function uniqueClasses(classNames) {
  if (classNames === void 0) {
    classNames = "";
  }
  const classes2 = classNames.split(" ").map((c) => c.trim()).filter((c) => !!c);
  const unique = [];
  classes2.forEach((c) => {
    if (unique.indexOf(c) < 0) unique.push(c);
  });
  return unique.join(" ");
}
function wrapperClass(className) {
  if (className === void 0) {
    className = "";
  }
  if (!className) return "swiper-wrapper";
  if (!className.includes("swiper-wrapper")) return `swiper-wrapper ${className}`;
  return className;
}
function updateSwiper(_ref) {
  let {
    swiper,
    slides,
    passedParams,
    changedParams,
    nextEl,
    prevEl,
    scrollbarEl,
    paginationEl
  } = _ref;
  const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass");
  const {
    params: currentParams,
    pagination,
    navigation,
    scrollbar,
    virtual,
    thumbs
  } = swiper;
  let needThumbsInit;
  let needControllerInit;
  let needPaginationInit;
  let needScrollbarInit;
  let needNavigationInit;
  let loopNeedDestroy;
  let loopNeedEnable;
  let loopNeedReloop;
  if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && !passedParams.thumbs.swiper.destroyed && currentParams.thumbs && (!currentParams.thumbs.swiper || currentParams.thumbs.swiper.destroyed)) {
    needThumbsInit = true;
  }
  if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
    needControllerInit = true;
  }
  if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
    needPaginationInit = true;
  }
  if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
    needScrollbarInit = true;
  }
  if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
    needNavigationInit = true;
  }
  const destroyModule = (mod) => {
    if (!swiper[mod]) return;
    swiper[mod].destroy();
    if (mod === "navigation") {
      if (swiper.isElement) {
        swiper[mod].prevEl.remove();
        swiper[mod].nextEl.remove();
      }
      currentParams[mod].prevEl = void 0;
      currentParams[mod].nextEl = void 0;
      swiper[mod].prevEl = void 0;
      swiper[mod].nextEl = void 0;
    } else {
      if (swiper.isElement) {
        swiper[mod].el.remove();
      }
      currentParams[mod].el = void 0;
      swiper[mod].el = void 0;
    }
  };
  if (changedParams.includes("loop") && swiper.isElement) {
    if (currentParams.loop && !passedParams.loop) {
      loopNeedDestroy = true;
    } else if (!currentParams.loop && passedParams.loop) {
      loopNeedEnable = true;
    } else {
      loopNeedReloop = true;
    }
  }
  updateParams.forEach((key) => {
    if (isObject(currentParams[key]) && isObject(passedParams[key])) {
      Object.assign(currentParams[key], passedParams[key]);
      if ((key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedParams[key] && !passedParams[key].enabled) {
        destroyModule(key);
      }
    } else {
      const newValue = passedParams[key];
      if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
        if (newValue === false) {
          destroyModule(key);
        }
      } else {
        currentParams[key] = passedParams[key];
      }
    }
  });
  if (updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled) {
    virtual.slides = slides;
    virtual.update(true);
  } else if (changedParams.includes("virtual") && virtual && currentParams.virtual.enabled) {
    if (slides) virtual.slides = slides;
    virtual.update(true);
  }
  if (changedParams.includes("children") && slides && currentParams.loop) {
    loopNeedReloop = true;
  }
  if (needThumbsInit) {
    const initialized = thumbs.init();
    if (initialized) thumbs.update(true);
  }
  if (needControllerInit) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (needPaginationInit) {
    if (swiper.isElement && (!paginationEl || typeof paginationEl === "string")) {
      paginationEl = document.createElement("div");
      paginationEl.classList.add("swiper-pagination");
      paginationEl.part.add("pagination");
      swiper.el.appendChild(paginationEl);
    }
    if (paginationEl) currentParams.pagination.el = paginationEl;
    pagination.init();
    pagination.render();
    pagination.update();
  }
  if (needScrollbarInit) {
    if (swiper.isElement && (!scrollbarEl || typeof scrollbarEl === "string")) {
      scrollbarEl = document.createElement("div");
      scrollbarEl.classList.add("swiper-scrollbar");
      scrollbarEl.part.add("scrollbar");
      swiper.el.appendChild(scrollbarEl);
    }
    if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
    scrollbar.init();
    scrollbar.updateSize();
    scrollbar.setTranslate();
  }
  if (needNavigationInit) {
    if (swiper.isElement) {
      if (!nextEl || typeof nextEl === "string") {
        nextEl = document.createElement("div");
        nextEl.classList.add("swiper-button-next");
        nextEl.innerHTML = swiper.hostEl.constructor.nextButtonSvg;
        nextEl.part.add("button-next");
        swiper.el.appendChild(nextEl);
      }
      if (!prevEl || typeof prevEl === "string") {
        prevEl = document.createElement("div");
        prevEl.classList.add("swiper-button-prev");
        prevEl.innerHTML = swiper.hostEl.constructor.prevButtonSvg;
        prevEl.part.add("button-prev");
        swiper.el.appendChild(prevEl);
      }
    }
    if (nextEl) currentParams.navigation.nextEl = nextEl;
    if (prevEl) currentParams.navigation.prevEl = prevEl;
    navigation.init();
    navigation.update();
  }
  if (changedParams.includes("allowSlideNext")) {
    swiper.allowSlideNext = passedParams.allowSlideNext;
  }
  if (changedParams.includes("allowSlidePrev")) {
    swiper.allowSlidePrev = passedParams.allowSlidePrev;
  }
  if (changedParams.includes("direction")) {
    swiper.changeDirection(passedParams.direction, false);
  }
  if (loopNeedDestroy || loopNeedReloop) {
    swiper.loopDestroy();
  }
  if (loopNeedEnable || loopNeedReloop) {
    swiper.loopCreate();
  }
  swiper.update();
}
function getParams(obj, splitEvents) {
  if (obj === void 0) {
    obj = {};
  }
  const params = {
    on: {}
  };
  const events2 = {};
  const passedParams = {};
  extend(params, defaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = paramsList.map((key) => key.replace(/_/, ""));
  const plainObj = Object.assign({}, obj);
  Object.keys(plainObj).forEach((key) => {
    if (typeof obj[key] === "undefined") return;
    if (allowedParams.indexOf(key) >= 0) {
      if (isObject(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        extend(params[key], obj[key]);
        extend(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === "function") {
      {
        params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      }
    } else {
      rest[key] = obj[key];
    }
  });
  ["navigation", "pagination", "scrollbar"].forEach((key) => {
    if (params[key] === true) params[key] = {};
    if (params[key] === false) delete params[key];
  });
  return {
    params,
    passedParams,
    rest,
    events: events2
  };
}
function mountSwiper(_ref, swiperParams) {
  let {
    el,
    nextEl,
    prevEl,
    paginationEl,
    scrollbarEl,
    swiper
  } = _ref;
  if (needsNavigation(swiperParams) && nextEl && prevEl) {
    swiper.params.navigation.nextEl = nextEl;
    swiper.originalParams.navigation.nextEl = nextEl;
    swiper.params.navigation.prevEl = prevEl;
    swiper.originalParams.navigation.prevEl = prevEl;
  }
  if (needsPagination(swiperParams) && paginationEl) {
    swiper.params.pagination.el = paginationEl;
    swiper.originalParams.pagination.el = paginationEl;
  }
  if (needsScrollbar(swiperParams) && scrollbarEl) {
    swiper.params.scrollbar.el = scrollbarEl;
    swiper.originalParams.scrollbar.el = scrollbarEl;
  }
  swiper.init(el);
}
function getChangedParams(swiperParams, oldParams, children, oldChildren, getKey) {
  const keys = [];
  if (!oldParams) return keys;
  const addKey = (key) => {
    if (keys.indexOf(key) < 0) keys.push(key);
  };
  if (children && oldChildren) {
    const oldChildrenKeys = oldChildren.map(getKey);
    const childrenKeys = children.map(getKey);
    if (oldChildrenKeys.join("") !== childrenKeys.join("")) addKey("children");
    if (oldChildren.length !== children.length) addKey("children");
  }
  const watchParams = paramsList.filter((key) => key[0] === "_").map((key) => key.replace(/_/, ""));
  watchParams.forEach((key) => {
    if (key in swiperParams && key in oldParams) {
      if (isObject(swiperParams[key]) && isObject(oldParams[key])) {
        const newKeys = Object.keys(swiperParams[key]);
        const oldKeys = Object.keys(oldParams[key]);
        if (newKeys.length !== oldKeys.length) {
          addKey(key);
        } else {
          newKeys.forEach((newKey) => {
            if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
              addKey(key);
            }
          });
          oldKeys.forEach((oldKey) => {
            if (swiperParams[key][oldKey] !== oldParams[key][oldKey]) addKey(key);
          });
        }
      } else if (swiperParams[key] !== oldParams[key]) {
        addKey(key);
      }
    }
  });
  return keys;
}
const updateOnVirtualData = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled) return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();
  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate();
  }
};
function getChildren(originalSlots, slidesRef, oldSlidesRef) {
  if (originalSlots === void 0) {
    originalSlots = {};
  }
  const slides = [];
  const slots = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  const getSlidesFromElements = (els, slotName) => {
    if (!Array.isArray(els)) {
      return;
    }
    els.forEach((vnode) => {
      const isFragment = typeof vnode.type === "symbol";
      if (slotName === "default") slotName = "container-end";
      if (isFragment && vnode.children) {
        getSlidesFromElements(vnode.children, slotName);
      } else if (vnode.type && (vnode.type.name === "SwiperSlide" || vnode.type.name === "AsyncComponentWrapper") || vnode.componentOptions && vnode.componentOptions.tag === "SwiperSlide") {
        slides.push(vnode);
      } else if (slots[slotName]) {
        slots[slotName].push(vnode);
      }
    });
  };
  Object.keys(originalSlots).forEach((slotName) => {
    if (typeof originalSlots[slotName] !== "function") return;
    const els = originalSlots[slotName]();
    getSlidesFromElements(els, slotName);
  });
  oldSlidesRef.value = slidesRef.value;
  slidesRef.value = slides;
  return {
    slides,
    slots
  };
}
function renderVirtual(swiperRef, slides, virtualData) {
  if (!virtualData) return null;
  const getSlideIndex = (index) => {
    let slideIndex = index;
    if (index < 0) {
      slideIndex = slides.length + index;
    } else if (slideIndex >= slides.length) {
      slideIndex = slideIndex - slides.length;
    }
    return slideIndex;
  };
  const style = swiperRef.value.isHorizontal() ? {
    [swiperRef.value.rtlTranslate ? "right" : "left"]: `${virtualData.offset}px`
  } : {
    top: `${virtualData.offset}px`
  };
  const {
    from,
    to
  } = virtualData;
  const loopFrom = swiperRef.value.params.loop ? -slides.length : 0;
  const loopTo = swiperRef.value.params.loop ? slides.length * 2 : slides.length;
  const slidesToRender = [];
  for (let i2 = loopFrom; i2 < loopTo; i2 += 1) {
    if (i2 >= from && i2 <= to && slidesToRender.length < slides.length) {
      slidesToRender.push(slides[getSlideIndex(i2)]);
    }
  }
  return slidesToRender.map((slide2) => {
    if (!slide2.props) slide2.props = {};
    if (!slide2.props.style) slide2.props.style = {};
    slide2.props.swiperRef = swiperRef;
    slide2.props.style = style;
    if (slide2.type) {
      return h$1(slide2.type, {
        ...slide2.props
      }, slide2.children);
    } else if (slide2.componentOptions) {
      return h$1(slide2.componentOptions.Ctor, {
        ...slide2.props
      }, slide2.componentOptions.children);
    }
  });
}
const Swiper$1 = {
  name: "Swiper",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    wrapperTag: {
      type: String,
      default: "div"
    },
    modules: {
      type: Array,
      default: void 0
    },
    init: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String,
      default: void 0
    },
    oneWayMovement: {
      type: Boolean,
      default: void 0
    },
    swiperElementNodeName: {
      type: String,
      default: "SWIPER-CONTAINER"
    },
    touchEventsTarget: {
      type: String,
      default: void 0
    },
    initialSlide: {
      type: Number,
      default: void 0
    },
    speed: {
      type: Number,
      default: void 0
    },
    cssMode: {
      type: Boolean,
      default: void 0
    },
    updateOnWindowResize: {
      type: Boolean,
      default: void 0
    },
    resizeObserver: {
      type: Boolean,
      default: void 0
    },
    nested: {
      type: Boolean,
      default: void 0
    },
    focusableElements: {
      type: String,
      default: void 0
    },
    width: {
      type: Number,
      default: void 0
    },
    height: {
      type: Number,
      default: void 0
    },
    preventInteractionOnTransition: {
      type: Boolean,
      default: void 0
    },
    userAgent: {
      type: String,
      default: void 0
    },
    url: {
      type: String,
      default: void 0
    },
    edgeSwipeDetection: {
      type: [Boolean, String],
      default: void 0
    },
    edgeSwipeThreshold: {
      type: Number,
      default: void 0
    },
    autoHeight: {
      type: Boolean,
      default: void 0
    },
    setWrapperSize: {
      type: Boolean,
      default: void 0
    },
    virtualTranslate: {
      type: Boolean,
      default: void 0
    },
    effect: {
      type: String,
      default: void 0
    },
    breakpoints: {
      type: Object,
      default: void 0
    },
    breakpointsBase: {
      type: String,
      default: void 0
    },
    spaceBetween: {
      type: [Number, String],
      default: void 0
    },
    slidesPerView: {
      type: [Number, String],
      default: void 0
    },
    maxBackfaceHiddenSlides: {
      type: Number,
      default: void 0
    },
    slidesPerGroup: {
      type: Number,
      default: void 0
    },
    slidesPerGroupSkip: {
      type: Number,
      default: void 0
    },
    slidesPerGroupAuto: {
      type: Boolean,
      default: void 0
    },
    centeredSlides: {
      type: Boolean,
      default: void 0
    },
    centeredSlidesBounds: {
      type: Boolean,
      default: void 0
    },
    slidesOffsetBefore: {
      type: Number,
      default: void 0
    },
    slidesOffsetAfter: {
      type: Number,
      default: void 0
    },
    normalizeSlideIndex: {
      type: Boolean,
      default: void 0
    },
    centerInsufficientSlides: {
      type: Boolean,
      default: void 0
    },
    watchOverflow: {
      type: Boolean,
      default: void 0
    },
    roundLengths: {
      type: Boolean,
      default: void 0
    },
    touchRatio: {
      type: Number,
      default: void 0
    },
    touchAngle: {
      type: Number,
      default: void 0
    },
    simulateTouch: {
      type: Boolean,
      default: void 0
    },
    shortSwipes: {
      type: Boolean,
      default: void 0
    },
    longSwipes: {
      type: Boolean,
      default: void 0
    },
    longSwipesRatio: {
      type: Number,
      default: void 0
    },
    longSwipesMs: {
      type: Number,
      default: void 0
    },
    followFinger: {
      type: Boolean,
      default: void 0
    },
    allowTouchMove: {
      type: Boolean,
      default: void 0
    },
    threshold: {
      type: Number,
      default: void 0
    },
    touchMoveStopPropagation: {
      type: Boolean,
      default: void 0
    },
    touchStartPreventDefault: {
      type: Boolean,
      default: void 0
    },
    touchStartForcePreventDefault: {
      type: Boolean,
      default: void 0
    },
    touchReleaseOnEdges: {
      type: Boolean,
      default: void 0
    },
    uniqueNavElements: {
      type: Boolean,
      default: void 0
    },
    resistance: {
      type: Boolean,
      default: void 0
    },
    resistanceRatio: {
      type: Number,
      default: void 0
    },
    watchSlidesProgress: {
      type: Boolean,
      default: void 0
    },
    grabCursor: {
      type: Boolean,
      default: void 0
    },
    preventClicks: {
      type: Boolean,
      default: void 0
    },
    preventClicksPropagation: {
      type: Boolean,
      default: void 0
    },
    slideToClickedSlide: {
      type: Boolean,
      default: void 0
    },
    loop: {
      type: Boolean,
      default: void 0
    },
    loopedSlides: {
      type: Number,
      default: void 0
    },
    loopPreventsSliding: {
      type: Boolean,
      default: void 0
    },
    rewind: {
      type: Boolean,
      default: void 0
    },
    allowSlidePrev: {
      type: Boolean,
      default: void 0
    },
    allowSlideNext: {
      type: Boolean,
      default: void 0
    },
    swipeHandler: {
      type: Boolean,
      default: void 0
    },
    noSwiping: {
      type: Boolean,
      default: void 0
    },
    noSwipingClass: {
      type: String,
      default: void 0
    },
    noSwipingSelector: {
      type: String,
      default: void 0
    },
    passiveListeners: {
      type: Boolean,
      default: void 0
    },
    containerModifierClass: {
      type: String,
      default: void 0
    },
    slideClass: {
      type: String,
      default: void 0
    },
    slideActiveClass: {
      type: String,
      default: void 0
    },
    slideVisibleClass: {
      type: String,
      default: void 0
    },
    slideFullyVisibleClass: {
      type: String,
      default: void 0
    },
    slideBlankClass: {
      type: String,
      default: void 0
    },
    slideNextClass: {
      type: String,
      default: void 0
    },
    slidePrevClass: {
      type: String,
      default: void 0
    },
    wrapperClass: {
      type: String,
      default: void 0
    },
    lazyPreloaderClass: {
      type: String,
      default: void 0
    },
    lazyPreloadPrevNext: {
      type: Number,
      default: void 0
    },
    runCallbacksOnInit: {
      type: Boolean,
      default: void 0
    },
    observer: {
      type: Boolean,
      default: void 0
    },
    observeParents: {
      type: Boolean,
      default: void 0
    },
    observeSlideChildren: {
      type: Boolean,
      default: void 0
    },
    a11y: {
      type: [Boolean, Object],
      default: void 0
    },
    autoplay: {
      type: [Boolean, Object],
      default: void 0
    },
    controller: {
      type: Object,
      default: void 0
    },
    coverflowEffect: {
      type: Object,
      default: void 0
    },
    cubeEffect: {
      type: Object,
      default: void 0
    },
    fadeEffect: {
      type: Object,
      default: void 0
    },
    flipEffect: {
      type: Object,
      default: void 0
    },
    creativeEffect: {
      type: Object,
      default: void 0
    },
    cardsEffect: {
      type: Object,
      default: void 0
    },
    hashNavigation: {
      type: [Boolean, Object],
      default: void 0
    },
    history: {
      type: [Boolean, Object],
      default: void 0
    },
    keyboard: {
      type: [Boolean, Object],
      default: void 0
    },
    mousewheel: {
      type: [Boolean, Object],
      default: void 0
    },
    navigation: {
      type: [Boolean, Object],
      default: void 0
    },
    pagination: {
      type: [Boolean, Object],
      default: void 0
    },
    parallax: {
      type: [Boolean, Object],
      default: void 0
    },
    scrollbar: {
      type: [Boolean, Object],
      default: void 0
    },
    thumbs: {
      type: Object,
      default: void 0
    },
    virtual: {
      type: [Boolean, Object],
      default: void 0
    },
    zoom: {
      type: [Boolean, Object],
      default: void 0
    },
    grid: {
      type: [Object],
      default: void 0
    },
    freeMode: {
      type: [Boolean, Object],
      default: void 0
    },
    enabled: {
      type: Boolean,
      default: void 0
    }
  },
  emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slidesUpdated", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
  setup(props, _ref) {
    let {
      slots: originalSlots,
      emit
    } = _ref;
    const {
      tag: Tag,
      wrapperTag: WrapperTag
    } = props;
    const containerClasses = ref("swiper");
    const virtualData = ref(null);
    const breakpointChanged = ref(false);
    const initializedRef = ref(false);
    const swiperElRef = ref(null);
    const swiperRef = ref(null);
    const oldPassedParamsRef = ref(null);
    const slidesRef = {
      value: []
    };
    const oldSlidesRef = {
      value: []
    };
    const nextElRef = ref(null);
    const prevElRef = ref(null);
    const paginationElRef = ref(null);
    const scrollbarElRef = ref(null);
    const {
      params: swiperParams,
      passedParams
    } = getParams(props);
    getChildren(originalSlots, slidesRef, oldSlidesRef);
    oldPassedParamsRef.value = passedParams;
    oldSlidesRef.value = slidesRef.value;
    const onBeforeBreakpoint = () => {
      getChildren(originalSlots, slidesRef, oldSlidesRef);
      breakpointChanged.value = true;
    };
    swiperParams.onAny = function(event2) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      emit(event2, ...args);
    };
    Object.assign(swiperParams.on, {
      _beforeBreakpoint: onBeforeBreakpoint,
      _containerClasses(swiper, classes2) {
        containerClasses.value = classes2;
      }
    });
    const passParams = {
      ...swiperParams
    };
    delete passParams.wrapperClass;
    swiperRef.value = new Swiper$2(passParams);
    if (swiperRef.value.virtual && swiperRef.value.params.virtual.enabled) {
      swiperRef.value.virtual.slides = slidesRef.value;
      const extendWith = {
        cache: false,
        slides: slidesRef.value,
        renderExternal: (data) => {
          virtualData.value = data;
        },
        renderExternalUpdate: false
      };
      extend(swiperRef.value.params.virtual, extendWith);
      extend(swiperRef.value.originalParams.virtual, extendWith);
    }
    onUpdated(() => {
      if (!initializedRef.value && swiperRef.value) {
        swiperRef.value.emitSlidesClasses();
        initializedRef.value = true;
      }
      const {
        passedParams: newPassedParams
      } = getParams(props);
      const changedParams = getChangedParams(newPassedParams, oldPassedParamsRef.value, slidesRef.value, oldSlidesRef.value, (c) => c.props && c.props.key);
      oldPassedParamsRef.value = newPassedParams;
      if ((changedParams.length || breakpointChanged.value) && swiperRef.value && !swiperRef.value.destroyed) {
        updateSwiper({
          swiper: swiperRef.value,
          slides: slidesRef.value,
          passedParams: newPassedParams,
          changedParams,
          nextEl: nextElRef.value,
          prevEl: prevElRef.value,
          scrollbarEl: scrollbarElRef.value,
          paginationEl: paginationElRef.value
        });
      }
      breakpointChanged.value = false;
    });
    provide("swiper", swiperRef);
    watch(virtualData, () => {
      nextTick$1(() => {
        updateOnVirtualData(swiperRef.value);
      });
    });
    onMounted(() => {
      if (!swiperElRef.value) return;
      mountSwiper({
        el: swiperElRef.value,
        nextEl: nextElRef.value,
        prevEl: prevElRef.value,
        paginationEl: paginationElRef.value,
        scrollbarEl: scrollbarElRef.value,
        swiper: swiperRef.value
      }, swiperParams);
      emit("swiper", swiperRef.value);
    });
    onBeforeUnmount(() => {
      if (swiperRef.value && !swiperRef.value.destroyed) {
        swiperRef.value.destroy(true, false);
      }
    });
    function renderSlides(slides) {
      if (swiperParams.virtual) {
        return renderVirtual(swiperRef, slides, virtualData.value);
      }
      slides.forEach((slide2, index) => {
        if (!slide2.props) slide2.props = {};
        slide2.props.swiperRef = swiperRef;
        slide2.props.swiperSlideIndex = index;
      });
      return slides;
    }
    return () => {
      const {
        slides,
        slots
      } = getChildren(originalSlots, slidesRef, oldSlidesRef);
      return h$1(Tag, {
        ref: swiperElRef,
        class: uniqueClasses(containerClasses.value)
      }, [slots["container-start"], h$1(WrapperTag, {
        class: wrapperClass(swiperParams.wrapperClass)
      }, [slots["wrapper-start"], renderSlides(slides), slots["wrapper-end"]]), needsNavigation(props) && [h$1("div", {
        ref: prevElRef,
        class: "swiper-button-prev"
      }), h$1("div", {
        ref: nextElRef,
        class: "swiper-button-next"
      })], needsScrollbar(props) && h$1("div", {
        ref: scrollbarElRef,
        class: "swiper-scrollbar"
      }), needsPagination(props) && h$1("div", {
        ref: paginationElRef,
        class: "swiper-pagination"
      }), slots["container-end"]]);
    };
  }
};
const SwiperSlide = {
  name: "SwiperSlide",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    swiperRef: {
      type: Object,
      required: false
    },
    swiperSlideIndex: {
      type: Number,
      default: void 0,
      required: false
    },
    zoom: {
      type: Boolean,
      default: void 0,
      required: false
    },
    lazy: {
      type: Boolean,
      default: false,
      required: false
    },
    virtualIndex: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    let eventAttached = false;
    const {
      swiperRef
    } = props;
    const slideElRef = ref(null);
    const slideClasses = ref("swiper-slide");
    const lazyLoaded = ref(false);
    function updateClasses(swiper, el, classNames) {
      if (el === slideElRef.value) {
        slideClasses.value = classNames;
      }
    }
    onMounted(() => {
      if (!swiperRef || !swiperRef.value) return;
      swiperRef.value.on("_slideClass", updateClasses);
      eventAttached = true;
    });
    onBeforeUpdate(() => {
      if (eventAttached || !swiperRef || !swiperRef.value) return;
      swiperRef.value.on("_slideClass", updateClasses);
      eventAttached = true;
    });
    onUpdated(() => {
      if (!slideElRef.value || !swiperRef || !swiperRef.value) return;
      if (typeof props.swiperSlideIndex !== "undefined") {
        slideElRef.value.swiperSlideIndex = props.swiperSlideIndex;
      }
      if (swiperRef.value.destroyed) {
        if (slideClasses.value !== "swiper-slide") {
          slideClasses.value = "swiper-slide";
        }
      }
    });
    onBeforeUnmount(() => {
      if (!swiperRef || !swiperRef.value) return;
      swiperRef.value.off("_slideClass", updateClasses);
    });
    const slideData = computed(() => ({
      isActive: slideClasses.value.indexOf("swiper-slide-active") >= 0,
      isVisible: slideClasses.value.indexOf("swiper-slide-visible") >= 0,
      isPrev: slideClasses.value.indexOf("swiper-slide-prev") >= 0,
      isNext: slideClasses.value.indexOf("swiper-slide-next") >= 0
    }));
    provide("swiperSlide", slideData);
    const onLoad2 = () => {
      lazyLoaded.value = true;
    };
    return () => {
      return h$1(props.tag, {
        class: uniqueClasses(`${slideClasses.value}`),
        ref: slideElRef,
        "data-swiper-slide-index": typeof props.virtualIndex === "undefined" && swiperRef && swiperRef.value && swiperRef.value.params.loop ? props.swiperSlideIndex : props.virtualIndex,
        onLoadCapture: onLoad2
      }, props.zoom ? h$1("div", {
        class: "swiper-zoom-container",
        "data-swiper-zoom": typeof props.zoom === "number" ? props.zoom : void 0
      }, [slots.default && slots.default(slideData.value), props.lazy && !lazyLoaded.value && h$1("div", {
        class: "swiper-lazy-preloader"
      })]) : [slots.default && slots.default(slideData.value), props.lazy && !lazyLoaded.value && h$1("div", {
        class: "swiper-lazy-preloader"
      })]);
    };
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Swiper",
  props: {
    items: {},
    width: { default: "100%" },
    height: { default: "100%" },
    mode: { default: "banner" },
    navigation: { type: Boolean, default: true },
    effect: { default: "slide" },
    delay: { default: 3e3 },
    speed: { default: 300 },
    loop: { type: Boolean, default: true },
    pauseOnMouseEnter: { type: Boolean, default: false },
    swipe: { type: Boolean, default: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const slideList = computed(() => {
      var _a;
      return ((_a = props.items) == null ? void 0 : _a.map((link) => {
        if (typeof link === "string")
          return { link };
        return link;
      })) ?? [];
    });
    function parseSize(size) {
      if (typeof size === "number") {
        return `${size}px`;
      }
      return size;
    }
    const styles = computed(() => ({
      width: parseSize(props.width),
      height: parseSize(props.height)
    }));
    const modules = computed(() => {
      if (props.mode === "carousel")
        return [Autoplay];
      if (props.mode === "broadcast")
        return [Navigation, Pagination, Mousewheel];
      const modules2 = [Navigation, Pagination, Autoplay];
      const effectMoudles = {
        fade: EffectFade,
        cube: EffectCube,
        flip: EffectFlip,
        coverflow: EffectCoverflow,
        cards: EffectCards,
        creative: EffectCreative
      };
      if (props.effect !== "slide") {
        modules2.push(effectMoudles[props.effect]);
      }
      return modules2;
    });
    const autoplay = computed(() => {
      if (props.mode === "banner") {
        return {
          delay: props.delay,
          disableOnInteraction: false,
          // 用户操作 swiper 之后，是否禁止 autoplay。默认为 true：停止。
          pauseOnMouseEnter: props.pauseOnMouseEnter
          // 鼠标置于 swiper 时暂停自动切换，鼠标离开时恢复自动切换，默认 false
        };
      } else if (props.mode === "carousel") {
        return {
          delay: 0,
          disableOnInteraction: false
        };
      }
      return false;
    });
    const hasNavigation = computed(
      () => props.mode === "banner" || props.mode === "broadcast" ? props.navigation : false
    );
    function onSwiper(swiper) {
      if (props.mode === "carousel" && props.pauseOnMouseEnter) {
        swiper.el.onmouseenter = () => swiper.autoplay.stop();
        swiper.el.onmouseleave = () => swiper.autoplay.start();
      }
    }
    const __returned__ = { props, slideList, parseSize, styles, modules, autoplay, hasNavigation, onSwiper, get Swiper() {
      return Swiper$1;
    }, get SwiperSlide() {
      return SwiperSlide;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent($setup["Swiper"], mergeProps({
          class: ["vp-swiper", { "swiper-no-swiping": $props.mode === "banner" ? !$props.swipe : $props.mode === "carousel" }],
          style: $setup.styles,
          modules: $setup.modules,
          autoplay: $setup.autoplay,
          navigation: $setup.hasNavigation,
          pagination: $setup.props.mode !== "carousel" ? {
            dynamicBullets: true,
            clickable: true
          } : false,
          speed: $props.speed,
          loop: $props.loop,
          effect: $props.mode === "banner" ? $props.effect : "slide",
          lazy: ""
        }, _ctx.$attrs, { onSwiper: $setup.onSwiper }), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($setup.slideList, (item, index) => {
                _push3(ssrRenderComponent($setup["SwiperSlide"], {
                  key: item.link + index
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      if (item.href) {
                        _push4(`<a${ssrRenderAttr("href", item.href)} target="_blank" rel="noopener noreferrer" class="swiper-slide-link no-icon"${_scopeId3}><img class="swiper-slide-img"${ssrRenderAttr("src", item.link)}${ssrRenderAttr("alt", item.alt)} loading="lazy"${_scopeId3}></a>`);
                      } else {
                        _push4(`<img class="swiper-slide-img"${ssrRenderAttr("src", item.link)}${ssrRenderAttr("alt", item.alt)} loading="lazy"${_scopeId3}>`);
                      }
                    } else {
                      return [
                        item.href ? (openBlock(), createBlock("a", {
                          key: 0,
                          href: item.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "swiper-slide-link no-icon"
                        }, [
                          createVNode("img", {
                            class: "swiper-slide-img",
                            src: item.link,
                            alt: item.alt,
                            loading: "lazy"
                          }, null, 8, ["src", "alt"])
                        ], 8, ["href"])) : (openBlock(), createBlock("img", {
                          key: 1,
                          class: "swiper-slide-img",
                          src: item.link,
                          alt: item.alt,
                          loading: "lazy"
                        }, null, 8, ["src", "alt"]))
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($setup.slideList, (item, index) => {
                  return openBlock(), createBlock($setup["SwiperSlide"], {
                    key: item.link + index
                  }, {
                    default: withCtx(() => [
                      item.href ? (openBlock(), createBlock("a", {
                        key: 0,
                        href: item.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "swiper-slide-link no-icon"
                      }, [
                        createVNode("img", {
                          class: "swiper-slide-img",
                          src: item.link,
                          alt: item.alt,
                          loading: "lazy"
                        }, null, 8, ["src", "alt"])
                      ], 8, ["href"])) : (openBlock(), createBlock("img", {
                        key: 1,
                        class: "swiper-slide-img",
                        src: item.link,
                        alt: item.alt,
                        loading: "lazy"
                      }, null, 8, ["src", "alt"]))
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode($setup["Swiper"], mergeProps({
            class: ["vp-swiper", { "swiper-no-swiping": $props.mode === "banner" ? !$props.swipe : $props.mode === "carousel" }],
            style: $setup.styles,
            modules: $setup.modules,
            autoplay: $setup.autoplay,
            navigation: $setup.hasNavigation,
            pagination: $setup.props.mode !== "carousel" ? {
              dynamicBullets: true,
              clickable: true
            } : false,
            speed: $props.speed,
            loop: $props.loop,
            effect: $props.mode === "banner" ? $props.effect : "slide",
            lazy: ""
          }, _ctx.$attrs, { onSwiper: $setup.onSwiper }), {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($setup.slideList, (item, index) => {
                return openBlock(), createBlock($setup["SwiperSlide"], {
                  key: item.link + index
                }, {
                  default: withCtx(() => [
                    item.href ? (openBlock(), createBlock("a", {
                      key: 0,
                      href: item.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "swiper-slide-link no-icon"
                    }, [
                      createVNode("img", {
                        class: "swiper-slide-img",
                        src: item.link,
                        alt: item.alt,
                        loading: "lazy"
                      }, null, 8, ["src", "alt"])
                    ], 8, ["href"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      class: "swiper-slide-img",
                      src: item.link,
                      alt: item.alt,
                      loading: "lazy"
                    }, null, 8, ["src", "alt"]))
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 16, ["class", "style", "modules", "autoplay", "navigation", "pagination", "speed", "loop", "effect"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/theme/lib/client/features/components/Swiper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Swiper2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Swiper.vue"]]);
const client = defineClientConfig({
  enhance({ app }) {
    app.component("Swiper", Swiper2);
  }
});
const clientConfig12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: client
}, Symbol.toStringTag, { value: "Module" }));
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7,
  clientConfig8,
  clientConfig9,
  clientConfig10,
  clientConfig11,
  clientConfig12
].map((m2) => m2.default).filter(Boolean);
const siteData$1 = JSON.parse('{"base":"/","lang":"zh-CN","title":"WentUrc Docs","description":"持续学习大学课程","head":[["link",{"rel":"icon","href":"/logo.jpg"}]],"locales":{}}');
var siteData = shallowRef(siteData$1);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: [
      {
        name: "vuepress-route",
        path: "/:catchAll(.*)",
        components: {}
      }
    ],
    scrollBehavior: (to, _from, savedPosition) => {
      if (savedPosition) return savedPosition;
      if (to.hash) return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    if (to.path !== from.path || from === START_LOCATION) {
      const route = resolveRoute(to.fullPath);
      if (route.path !== to.fullPath) {
        return route.path;
      }
      const pageChunk = await route.loader();
      to.meta = {
        // attach route meta
        ...route.meta,
        // attach page chunk route meta
        _pageChunk: pageChunk
      };
    } else if (to.path === from.path) {
      to.meta = from.meta;
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content$1);
  app.component("RouteLink", RouteLink);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = computed(() => router.currentRoute.value.path);
  const pageChunk = customRef((track, trigger) => ({
    get() {
      track();
      return router.currentRoute.value.meta._pageChunk;
    },
    set(value) {
      router.currentRoute.value.meta._pageChunk = value;
      trigger();
    }
  }));
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageComponent = computed(() => pageChunk.value.comp);
  const pageData = computed(() => pageChunk.value.data);
  const pageFrontmatter = computed(() => pageData.value.frontmatter);
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(
    () => resolvers.resolvePageLang(pageData.value, siteLocaleData.value)
  );
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  const clientData = {
    layouts,
    pageData,
    pageComponent,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    redirects,
    routeLocale,
    routePath,
    routes,
    siteData,
    siteLocaleData
  };
  app.provide(clientDataSymbol, clientData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return clientData;
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a;
  const app = appCreator({
    name: "Vuepress",
    setup() {
      var _a2;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a2 = clientConfig.setup) == null ? void 0 : _a2.call(clientConfig);
      }
      const clientRootComponents = clientConfigs.flatMap(
        ({ rootComponents = [] }) => rootComponents.map((component) => h$1(component))
      );
      const pageLayout = usePageLayout();
      return () => [h$1(pageLayout.value), clientRootComponents];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  const globalComputed = setupGlobalComputed(app, router, clientConfigs);
  {
    const { setupDevtools } = await import("./assets/setupDevtools-7MC2TMWH-BbxPXgIn.mjs");
    setupDevtools(app, globalComputed);
  }
  for (const clientConfig of clientConfigs) {
    await ((_a = clientConfig.enhance) == null ? void 0 : _a.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  _export_sfc as _,
  useLocale as a,
  useSearchIndex as b,
  createVueApp,
  useRouteLocale as u,
  withBase as w
};
