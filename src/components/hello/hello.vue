<template>
	<div>
		<crumbs></crumbs>
		<!-- <table class="table table-bordered">
			<thead>
				<tr>
					<th v-for="(val, index) in tableData[0]" v-sort>{{index}}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(tr, index) in tableData">
					<td v-for="(td, index) in tr" :order-by="td">{{index == 'Salary' ? '$'+td : td}}</td>
				</tr>
			</tbody>
		</table> -->
		<cxn-table :columns="columns" :data="tableData" :operation="['edit', 'view']"></cxn-table>
		<table-pagination :page="page" :total="total" @update:page="val => page = val"></table-pagination>
	</div>
</template>

<script type="text/ecmascript-6">
export default {

  name: 'hello',
  data () {
    return {
    	number: 1,
    	message: 'hello!',
    	columns: ["name", "Position", "Office", "Age", "Start", "Salary"],
    	query: {
    		page: 1,
    		total: 0
    	},
    	page: 1,
    	total: 0,
    	tableData: []
    }
  },
  methods: {
  	getData: function () {
  		this.$http.get('api/table' + this.page).then((res) => {
  			this.tableData = res.body.data.result
  			this.total = res.body.data.total
  			console.log(this.tableData)
  		})
  	}
  },
  computed: {
  },
  created () {
  	this.getData()
  },
  watch: {
  	page: function(val, oldVal) {
  		this.getData()
  		console.log('query has changed!')
  	}
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>