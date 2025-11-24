console.log('[boot] main.js loading')
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.less' // global styles
import { zeroClear } from './directives/zeroClear'

const app = createApp(App)

try {
  app.directive('zero-clear', zeroClear)
  console.log('[boot] zero-clear directive registered')
} catch (e) {
  console.error('[boot] failed registering directive:', e)
}

app.mount('#app')
console.log('[boot] app mounted')
