// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import N3Components from 'N3-components'
Vue.use(N3Components)
Vue.prototype.$menuProvider = router.aMenus
Vue.prototype.$routerProvider = router.routerProvider
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router.routerProvider,
  template: '<App/>',
  components: { App },
  data: {
  	$menuProvider: router.aMenus
  }
})

