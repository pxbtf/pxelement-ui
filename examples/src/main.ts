import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pxelement from '@pxelement-ui/components'
import '@pxelement-ui/theme-chalk/src/index.scss'

const app = createApp(App)

app.use(router)

app.use(pxelement)

app.mount('#app')
