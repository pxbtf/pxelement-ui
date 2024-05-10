import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@pxelement/theme-chalk/src/index.scss'
// import { PxButton } from '../../packages/px-element/es/pxelement.mjs'
import pxelement from '@pxelement/components'
const app = createApp(App)

app.use(router)
app.use(pxelement)

app.mount('#app')
