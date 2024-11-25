<script setup lang="ts">
import type { PlumeThemeHomeBanner } from '../../../shared/index.js'
import VPButton from '@theme/VPButton.vue'
import { computed, ref, watch } from 'vue'
import { withBase } from 'vuepress/client'
import { isLinkHttp } from 'vuepress/shared'
import { useData } from '../../composables/index.js'

const props = defineProps<PlumeThemeHomeBanner>()

const DEFAULT_BANNER = 'https://api.pengzhanbo.cn/wallpaper/bing'

const { isDark, frontmatter: matter } = useData<'home'>()

// 控制背景图片加载状态
const loaded = ref(false)

// banner URL 计算
const bannerLink = computed(() => {
  const banner = props.banner ?? matter.value.banner
  return banner ? (isLinkHttp(banner) ? banner : withBase(banner)) : DEFAULT_BANNER
})

// mask 不透明度计算
const maskOpacity = computed(() => {
  const mask = props.bannerMask ?? matter.value.bannerMask
  if (typeof mask !== 'object') return mask || 0
  return isDark.value ? mask.dark || 0 : mask.light || 0
})

// 背景样式
const bannerStyle = computed(() => ({
  'background-image': `url(${bannerLink.value})`,
  opacity: loaded.value ? 1 : 0, // 图片加载时过渡透明度
  transition: 'opacity 1s ease', // 添加平滑过渡
}))

// 预加载图片
const preloadImage = (src: string) => {
  const img = new Image()
  img.onload = () => {
    loaded.value = true
  }
  img.src = src
}

// 监听 banner 变化并预加载图片
watch(bannerLink, (newLink) => {
  preloadImage(newLink)
}, { immediate: true })

// Hero 数据
const name = computed(() => props.hero?.name ?? matter.value.hero?.name ?? 'Plume')
const tagline = computed(() => props.hero?.tagline ?? matter.value.hero?.tagline ?? 'A VuePress Theme')
const text = computed(() => props.hero?.text ?? matter.value.hero?.text)
const actions = computed(() => props.hero?.actions ?? matter.value.hero?.actions ?? [])
</script>

<template>
  <div class="vp-home-banner">
    <!-- 背景图片容器 -->
    <div
      class="banner-background"
      :style="bannerStyle"
    />
    <!-- Mask 层 -->
    <div
      class="banner-mask"
      :style="{ opacity: maskOpacity }"
    />
    <!-- Hero 内容 -->
    <div class="container">
      <div class="content">
        <h2 v-if="name" class="hero-name">
          {{ name }}
        </h2>
        <p v-if="tagline" class="hero-tagline">
          <span class="line" /> <span>{{ tagline }}</span>
        </p>
        <p v-if="text" class="hero-text">
          {{ text }}
        </p>

        <div v-if="actions.length" class="actions">
          <div v-for="action in actions" :key="action.link" class="action">
            <VPButton
              tag="a"
              size="medium"
              :theme="action.theme"
              :text="action.text"
              :href="action.link"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vp-home-banner {
  position: relative;
  width: 100%;
  min-height: calc(100vh - var(--vp-nav-height));
  overflow: hidden;
}

/* 背景图片容器 */
.banner-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0; /* 初始透明度 */
  transition: opacity 1s ease; /* 过渡动画 */
  z-index: 0;
}

/* Mask 层 */
.banner-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  transition: opacity var(--vp-t-color); /* 动态不透明度 */
  z-index: 1;
}

/* Hero 内容容器 */
.vp-home-banner .container {
  position: relative;
  z-index: 2; /* 确保 Hero 内容在 mask 和背景之上 */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-top: 4rem;
  margin: 0 auto;
}

.vp-home-banner .content {
  width: 100%;
  padding: 0 2rem;
}

.vp-home-banner .content .hero-name {
  font-size: 72px;
  font-weight: 600;
  line-height: 1;
  color: var(--vp-c-text-hero-name);
}

.vp-home-banner .content .hero-tagline {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: var(--vp-c-text-hero-tagline);
}

.vp-home-banner .content .hero-tagline .line {
  display: inline-block;
  width: 80px;
  height: 0;
  margin-right: 1rem;
  border-top: solid 1px var(--vp-c-text-hero-tagline);
}

.vp-home-banner .content .hero-text {
  width: 100%;
  max-width: 700px;
  margin-top: 1.5rem;
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-text-hero-text);
  border-radius: 5px;
}

@media (min-width: 960px) {
  .vp-home-banner .container {
    max-width: 768px;
    padding-top: 8rem;
  }

  .vp-home-banner .content .hero-name {
    font-size: 100px;
  }
}

@media (min-width: 1440px) {
  .vp-home-banner .container {
    max-width: 1104px;
    padding-top: 8rem;
  }

  .vp-home-banner .content .hero-tagline {
    font-size: 32px;
  }
}

.actions {
  display: flex;
  flex-wrap: wrap;
  padding-top: 24px;
  margin: -6px;
}

.action {
  flex-shrink: 0;
  padding: 6px;
}
</style>