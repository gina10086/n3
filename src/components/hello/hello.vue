<template>
	<div>
		<crumbs></crumbs>
		<cxn-table :columns="columns" :data="tableData" :operation="['edit', 'view']"></cxn-table>
		<table-pagination :page="page" :total="total" @update:page="val => page = val"></table-pagination>
    <n3-accordion :one-at-atime="false">
      <n3-panel header="Panel #1" :is-open="true" index="1">
        ...
      </n3-panel>
      <n3-panel header="Panel #2" index="2">
        ...
      </n3-panel>
      
    </n3-accordion>
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