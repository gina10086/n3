import routerConfig from './router.config'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let aRouters = []
let aMenus = []

function forEachFn (eachProvider, pushProvider){
  eachProvider.forEach(function(val){
    pushProvider.push(val)
  })
}

routerConfig.forEach(function(currentValue){
  const router = currentValue.router
  const menu = currentValue.menu
  forEachFn(router, aRouters)

  if (menu){
    forEachFn(menu, aMenus)
  }
})
aRouters.mode = 'history'
let routerProvider = new Router({
  routes: aRouters
})
export default {
  routerProvider,
  aMenus
}
