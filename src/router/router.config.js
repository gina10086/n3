import ProjectControl from 'components/ProjectControl/ProjectControl.config.js'
import hello from 'components/hello/hello.config.js'
let routerConfig = [
    ProjectControl,
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
console.log(routerConfig)
export default routerConfig
