import Vue from 'vue'
import App from './App.vue'
import './common/scss/index.scss'
import fastclick from 'fastclick'
import router from './router/index'
fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
