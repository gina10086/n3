// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import N3Components from 'N3-components'
import vueResource from 'vue-resource'
import crumbs from 'layout/crumbs/crumbs'
import cxnTable from 'layout/contains/table/cxnTable'
import tablePagination from 'layout/contains/table/pagination'
import directive from './directive/directive'
import LeftBar from 'components/layout/leftBar/leftBar'
Vue.use(directive)
Vue.use(N3Components)
Vue.use(vueResource)
Vue.component('crumbs', crumbs)
Vue.component('tablePagination', tablePagination)
Vue.component('cxnTable', cxnTable)
Vue.component('LeftBar', LeftBar)
Vue.prototype.$menuProvider = router.aMenus
Vue.config.productionTip = false
console.log(Vue.config)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router.routerProvider,
  template: '<App/>',
  components: {
  	App
  },
  data: {
  	$menuProvider: router.aMenus
  }
})

