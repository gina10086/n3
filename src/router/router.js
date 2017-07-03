import routerConfig from './router.config'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerProvider = new Router({
  routes: routerConfig.aRoutes,
  mode: 'history'
})
routerProvider.beforeEach((to, from, next) => {
  const statePath = to.fullPath
  let menus = routerConfig.aMenus
  let aTemp = []
  menus.forEach((v, i, a) => {
    if (v.children && v.type == 'dropdown') {
      v.children.forEach((child) => {
        if (child.children) {
          child.children.forEach((grandson) => {
            grandson.isActive = (grandson.state == statePath)
            child.isActive = (grandson.state == statePath)
            v.isActive = (grandson.state == statePath)
            if (grandson.state == statePath) {
              aTemp = [v.name, child.name, grandson.name]
            }
          })
        } else {
          child.isActive = (child.state == statePath)
          v.isActive = (child.state == statePath)
          if (child.state == statePath) {
              aTemp = [v.name, child.name]
          }
        }
      })
    } else {
      v.isActive = (v.state == statePath)
      if (v.state == statePath) {
        aTemp = [v.name]
      }
    }
  })
  to.meta.crumbs = aTemp
  routerConfig.aMenus = menus
  next()
})
export default {
  routerProvider,
  aMenus: routerConfig.aMenus
}
