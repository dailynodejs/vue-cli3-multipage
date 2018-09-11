import Vue from 'vue'
import App from './App.vue'

if (process.env.NODE_ENV !== 'production') {
  require('../../../mock')
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
