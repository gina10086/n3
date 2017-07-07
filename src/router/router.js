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
    if (v.state && v.state == statePath) {
      aTemp = [v.name]
    } else if (v.type == 'dropdown') {
      v.children.forEach((child) => {
        if (child.state && child.state == statePath) {
          aTemp = [v.name, child.name]
        } else if (child.type == 'dropdown') {
          child.children.forEach((grandson) => {
            if (grandson.state == statePath) {
              aTemp = [v.name, child.name, grandson.name]
            }
          })
        }
      })
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
