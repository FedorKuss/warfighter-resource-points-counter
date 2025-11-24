import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.less' // global styles
import { zeroClear } from './directives/zeroClear'

const app = createApp(App)
app.directive('zero-clear', zeroClear)
app.mount('#app')
