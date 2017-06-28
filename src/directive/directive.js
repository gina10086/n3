export default {
	install (Vue) {
		// 仅用于排序table
		Vue.directive('sort', {
			inserted: function(el, binding, vnode) {
				if (el.tagName == 'TH') {
					const text = el.innerText
					el.innerHTML = '<div class="sort-box">' +
						text +
						'<i class="fa fa-sort-up"></i>' +
						'<i class="fa fa-sort-down"></i>' +
						'</div>'
					let table = el.parentNode.parentNode.parentNode
					const tHeadCells = table.tHead.children[0].cells
					let tBody = table.tBodies[0]
					let trs = Array.from(tBody.children)

					let sortTrs = (type, orderBy) => {
						tBody.innerHTML = ''
						let json = {}
						if (type == 'up') {
							json.up = 1
							json.down = -1
						} else if (type == 'down') {
							json.up = -1
							json.down = 1
						}
						trs.sort((a, b) => {
							let res = 0
							const a1 = a.children[orderBy].getAttribute('order-by')
							const b1 = b.children[orderBy].getAttribute('order-by')
							if (a1 > b1) {
								res = json.up
							} else if (a1 < b1) {
								res = json.down
							}
							return res
						})
						trs.forEach((v) => {
							tBody.appendChild(v)
						})
					}
					// 清除所有排序按钮的active
					const clearAcitive = () => {
						for (let btn of table.tHead.children[0].querySelectorAll('.fa')) {
							let className = btn.className
							btn.className = className.replace(' active', '')
						}
					}
					for (let i = 0; i < tHeadCells.length; i++) {
						let cell = tHeadCells[i]
						let btns = cell.querySelectorAll('.fa')
						for (let btn of btns) {
							btn.addEventListener('click', function() {
								clearAcitive()
								this.className = this.className + ' active'
								let sortType = this.className.indexOf('up') > -1 ? 'up' : 'down'
								sortTrs(sortType, i)
							}, false)
						}
					}
				}
			}
		})
		// table分页
		Vue.directive('table-pagination', function (el, binding) {
				// limit:分页条数限制 page:当前页 total:总页数
				// const limit = el.getAttribute('limit') || 1
				console.log(binding)
				let page = binding.value.page || 1
				console.log(page)
				const total = binding.value.total || 1
				let ul = document.createElement('ul')
						ul.className = 'pagination pagination'
				let previous = document.createElement('li')
						previous.className = 'aa'
						previous.innerHTML = '<a href="javascript:;">«</a>'
				let next = document.createElement('li')
						next.innerHTML = '<a href="javascript:;">»</a>'
				if (total == 1) {
					previous.className = 'disabled'
					next.className = 'disabled'
				} else if (page == total) {
					next.className = 'disabled'
				} else if (page == 1) {
					previous.className = 'disabled'
				}
				ul.appendChild(previous)
				ul.appendChild(next)
				let pageBtns = []
				// 依次生成页码按钮
				for (let i = 0; i < total; i++) {
					let li = document.createElement('li')
							li.innerHTML = '<a href="javascript:;">' + (i + 1) + '</a>'
					if (i + 1 == page) {
						li.className = 'active'
					}
					pageBtns.push(li)
					ul.insertBefore(li, next)
				}
				let clearBtnsClass = () => {
					for (let pageBtn of pageBtns) {
						pageBtn.removeAttribute('class')
					}
				}
				// 给页码按钮加相关事件
				for (let i = 0; i < pageBtns.length; i++) {
					let pageBtn = pageBtns[i]
					pageBtn.addEventListener('click', function(){
						clearBtnsClass()
						this.className = 'active'
						page = i + 1
						console.log(page)
						switch (page) {
							case 0:
								previous.className = 'disabled'
								break
							case total:
								next.className = 'disabled'
								break
							default:
								previous.removeAttribute('class')
								next.removeAttribute('class')
								break
						}
					}, false)
				}
				// previous点击事件
				previous.addEventListener('click', function () {
					next.removeAttribute('class')
					page--
					if (page < 1 || page == 1) {
						page = 1
						this.className = 'disabled'
					} else {
						this.removeAttribute('class')
					}
					clearBtnsClass()
					pageBtns[page - 1].className = 'active'
				}, false)
				// next点击事件
				next.addEventListener('click', function(){
					previous.removeAttribute('class')
					page++
					if (page > total || page == total) {
						page = total
						this.className = 'disabled'
					} else {
						this.removeAttribute('class')
					}
					clearBtnsClass()
					pageBtns[page - 1].className = 'active'
				}, false)
				el.appendChild(ul)
			})
	}
}
