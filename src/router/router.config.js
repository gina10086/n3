import ProjectControl from 'components/ProjectControl/ProjectControl.config'
import ProjectOverview from 'components/ProjectOverview/ProjectOverview.config'
import research from 'components/research/research.config'
import recommend from 'components/recommend/recommend.config'
import ResourceMigration from 'components/ResourceMigration/ResourceMigration.config'
import DeliveryManagement from 'components/DeliveryManagement/DeliveryManagement.config'
import hello from 'components/hello/hello.config'
let routerConfig = [
    ProjectControl,
    ProjectOverview,
    research,
    recommend,
    ResourceMigration,
    DeliveryManagement,
    hello
]

let isDefined = function(obj) {
    return typeof obj !== 'undefined'
}

//检测各个cofig中菜单和路由配置是否正确

routerConfig.forEach(function(currentObject, index, arr) {
    const router = currentObject.router
    const menu = currentObject.menu || null

    //check router
    const routerTemp = router.filter(function(val) {
        const provider = val
        const isJson = typeof provider == "object" && !provider.length
        const allDefined = isDefined(provider.name) && isDefined(provider.path) && isDefined(provider.component)

        if (isJson && allDefined) {
            return true
        } else {
            console.warn('检测到有错误的路由，请正确填写路由配置,才可以生效！', provider)
        }

    })
    currentObject.router = routerTemp
        //check menu
    if (!menu || menu.length == 0) {
        delete currentObject.menu
    }
})
//检测menu配置参数
function checkMenuConfiguration (provider) {
	const isJson = typeof provider == "object" && !provider.length
	const allDefined = isDefined(provider.name) && isDefined(provider.link) && isDefined(provider.component)
	return isJson && allDefined
}

let aMenus = []
let aRoutes = []
routerConfig.forEach(function(value, index, arr){
	aMenus.push(value.menu)
	value.router.forEach(function(router, index){
		aRoutes.push(router)
	})
})

function resolveRoute (state) {
	let routePath = '/'
	aRoutes.forEach(function(route){
		if (route.name == state) {
			routePath = route.path
		}else if(route.children){
			route.children.forEach(function(child){
				if(child.name == state) {
					routePath = route.path + '/' + child.path
				}
			})
		}
	})
	return routePath
}
aMenus.forEach(function(menu){
	if(menu.type == 'dropdown' && menu.children) {
		menu.children.forEach(function(child){
			child.state = resolveRoute(child.state)
			child.isActive = false
		})
		menu.children.sort((a, b) => a.priority < b.priority)
	}else {
		menu.state = resolveRoute(menu.state)
		menu.isActive = false
	}
})
console.log(aMenus)
aMenus.sort((a, b) => a.priority < b.priority)

export default {aMenus, aRoutes}
