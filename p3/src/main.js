import App from './App.vue'
import { createApp } from 'vue'
import { router } from '@/common/router.js'
import { store } from '@/common/store.js'


createApp(App).use(router).use(store).mount('#app')
