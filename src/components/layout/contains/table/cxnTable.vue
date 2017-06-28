<template>
	<table :class="tclass">
		<thead>
			<tr>
				<th v-for="th in columns">
					<div class="sort-box">
						{{th}}
						<i class="fa fa-sort-up" :class="{'active':order == th && orderType == 'desc'}" v-on:click="orderBy('desc', th)"></i>
						<i class="fa fa-sort-down" :class="{'active':order == th && orderType == 'asc'}" v-on:click="orderBy('asc', th)"></i>
					</div>
				</th>
				<th style="text-align:center" v-if="operation.length > 0">操作</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(tr, i) in tableData">
				<td v-for="index in columns">{{tr[index]}}</td>
				<td style="text-align:center" class="operation" v-if="operation.length > 0">
					<a href="javascript:;" v-if="isOperation('view')" title="查看详情"><i class="fa fa-eye"></i></a>
					<a href="javascript:;" v-if="isOperation('edit')" title="编辑"><i class="fa fa-edit"></i></a>
					<a href="javascript:;" v-if="isOperation('delete')" title="删除"><i class="fa fa-trash"></i></a>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script type="text/ecmascript-6">
export default {

  name: 'cxntable',
  data () {
  	return {
  		order: this.columns[0],
  		tableData: [],
  		orderType: 'desc'
  	}
  },
  props: {
  	columns: {
  		type: Array
  	},
  	data: {
  		type: Array
  	},
  	tclass: {
  		type: String,
  		default: 'table table-bordered'
  	},
  	operation: {
  		type: Array,
  		default: []
  	}
  },
  methods: {
  	orderBy: function (type, order) {
  		let json = {}
  		this.orderType = type
  		this.order = order
  		switch (type) {
  			case 'desc':
  				json.up = 1
					json.down = -1
  				break
  			default:
  				json.up = -1
					json.down = 1
  				break
  		}
  		let result = Array.from(this.data).sort((a, b) => {
  			let res = 0
  			if (a[order] > b[order]) {
  				res = json.up
  			} else if (a[order] < b[order]) {
  				res = json.down
  			}
  			return res
  		})
  		this.tableData = result
  		// this.$emit('updata:data', result)
  	},
  	isOperation: function (operation) {
  		let res = false
  		for (let p of this.operation) {
  			if (p == operation) {
  				res = true
  				break
  			}
  		}
  		return res
  	}
  },
  watch: {
  	data: function (val) {
  			console.log('data changed')
  			this.tableData = val
  			const type = this.orderType
  			const order = this.order
  			this.orderBy(type, order)
  	}
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.sort-box {
	position: relative
		i {
			position:absolute
			right: 0
			height:50%
			&.fa-sort-down {
				bottom:10%
			}
			&.fa-sort-up {
				top:10%
			}
			&:before {
				cursor: pointer
			}
			&.active {
				color:#41cac0
			}
		}
}

</style>