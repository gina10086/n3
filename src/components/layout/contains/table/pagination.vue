<template>
		<div class="pagination-box">
			<ul class="pagination">
				<li :class="{disabled:page == 1}" v-on:click="previous"><a href="javascript:;">«</a></li>
				<li v-for="i in total" :class="{active:i == page}" v-on:click="updatePage(i)"><a href="javascript:;">{{i}}</a></li>
				<li :class="{disabled:page == total}" v-on:click="next($event.target.innerText)"><a href="javascript:;">»</a></li>
			</ul>
		</div>
</template>

<script type="text/ecmascript-6">
export default {

  name: 'tablePagination',
  props: {
  	page: {
  		type: Number,
  		default: 1
  	},
  	total: {
  		type: Number,
  		default: 1
  	}
  },
  methods: {
  	// 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
  	stopWork: function () {
  		console.log('stopWork')
  	},
  	previous: function () {
  		let page = this.page
  		page = page == 1 ? 1 : page - 1
  		this.$emit('update:page', page)
  	},
  	next: function () {
  		let page = this.page
  		page = page == this.total ? this.total : page + 1
  		this.$emit('update:page', page)
  	},
    updatePage: function (page) {
      this.$emit('update:page', Number(page))
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.pagination-box {
	display: flex
	flex-wrap: nowrap
	flex-direction: row
	justify-content: flex-end
	&>* {
		display: flex
	}
	
}
</style>