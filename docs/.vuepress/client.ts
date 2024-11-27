import { defineClientConfig } from 'vuepress/client'
import Swiper from './theme/lib/client/features/components/Swiper.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Swiper', Swiper)
  },
})