import Vue from 'vue'
import App from './App.vue'

import drugs_format from './lib/index.js'
Vue.use(drugs_format)

new Vue({
  el: '#app',
  render: h => h(App)
})
