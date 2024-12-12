import { defineClientConfig } from 'vuepress/client'
import Swiper from './theme/lib/client/features/components/Swiper.vue'
import './styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Swiper', Swiper)
  },
})