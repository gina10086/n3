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

let aMenus = []
let aRoutes = []
routerConfig.forEach(function(value, index, arr){
	let menu = value.menu
	if (menu.children) {
		menu.children.sort((a, b) => a.priority < b.priority)
		menu.children.forEach((child) => {
			if (child.children) {
				child.children.sort((a, b) => a.priority < b.priority)
			}
		})
	}
	aMenus.push(menu)
	value.router.forEach(function(router, index){
		aRoutes.push(router)
	})
})

aMenus.sort((a, b) => a.priority < b.priority)
export default {aMenus, aRoutes}
