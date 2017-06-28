import routerConfig from './router.config'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerProvider = new Router({
  routes: routerConfig.aRoutes,
  mode: 'history'
})
routerProvider.beforeEach((to, from, next) => {
  let menus = routerConfig.aMenus
  const statePath = to.fullPath
  menus.forEach((v, i, a) => {
    if (v.state) {
      a[i].isActive = (v.state == statePath)
      if (v.state == statePath) {
        to.meta.father = {
          path: v.state,
          name: v.name
        }
      }
    } else if (v.children){
      v.children.forEach((child, index, arr) => {
        arr[index].isActive = (child.state == statePath)
        if (child.state == statePath) {
          to.meta.child = {
            path: child.state,
            name: child.name
          }
          to.meta.father = {
            name: v.name
          }
        }
      })
    }
  })
  routerConfig.aMenus = menus
  next()
})
export default {
  routerProvider,
  aMenus: routerConfig.aMenus
}
