// 判断menu参数配置是否正确 1.是否是json 2.必填属性type和state
// function checkMenuConfiguration (provider) {
// 	const isJson = typeof provider === 'object' && !provider.length
// 	const configurationsRight = (provider.type && provider.state) != 'undefined'
// 	return isJson && configurationsRight
// }
// import router from 'router/router.vue'

// 根据名称解析router
/* eslint-disable no-unused-vars */
// function resolveRouter (name) {
// 	const routers = router.routerProvider
// 	let res = ''
// 	routers.forEach(function(value){
// 		if (name == value.name){
// 			res = value.path
// 			return
// 		} else if (value.children && value.children.length > 0) {
// 			value.children.forEach(function(child){
// 				if (name == child.name) {
// 					res = child.path
// 					return
// 				}
// 			})
// 		}
// 	})
// 	return res
// }

function menuDirective () {
	return {
		bind: function (el, binding, vnode) {

			let ul = document.createElement('ul')
					ul.className = 'bar-list'
			if (typeof binding.value == 'object') {
				binding.value.sort((a, b) => a.priority < b.priority)
				binding.value.forEach(function(value, index, arr){

					const data = value
					let li = document.createElement('li')

						console.log(data.type)
					switch (data.type){
						case 'dropdown':
							li.innerHTML = '<a href="javascript:;">' +
																'<i class="' + (data.icon || 'ico-monitor') + '"></i>' +
																'<span>' + data.name + '</span>' +
																'<i class="bar-status"><i>' +
															'</a>'
							let ul = document.createElement('ul')
									ul.className = 'bar-sublist'
							const childrenData = data.children || null
							if (typeof childrenData === 'object' && childrenData.length > 0){
								childrenData.sort((a, b) => a.priority < b.priority)
								childrenData.forEach(function(childValue, index, arr){
									let li = document.createElement('li')
									let a = document.createElement('a')
											a.href = childValue.state
											a.innerText = childValue.name
									if (childValue.blank){
										a.target = '_blank'
									}
									li.appendChild(a)
									ul.appendChild(li)
								})
							}
							li.appendChild(ul)
						break
						case 'link':
							let link = document.createElement('a')
									link.setAttribute('href', '/' + data.state)
								link.innerHTML = '<i class="' + (data.icon || 'ico-monitor') + '"></i><span>' + data.name + '</span>'
							li.appendChild(link)
						break
					}
					ul.appendChild(li)
				})
				el.appendChild(ul)

			}
		}
	}
}

export default menuDirective