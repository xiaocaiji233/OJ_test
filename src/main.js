import Vue from 'vue'
import *as G2 from '@antv/g2'
import App from './App.vue'
import router from './router'
Vue.use(G2)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
