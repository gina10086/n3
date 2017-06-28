<template>
	<div class="page-title clearfix">
      <div class="clearfix top-node-wrap">
          <div class="pull-left">
          	<h2>
          		<span class="btn btn-primary title-tree"><i class="icon icon-tree"></i></span> {{router.father.name}}
          	</h2>
          	<div class="title-info" v-if="router.child">
          		> <span class="title-info-item"><router-link :to="router.child.path"><b>{{router.child.name}}</b></router-link></span>
          	</div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'crumbs',
  props: {
  	crumbsData: {
  		type: Object,
  		default: null
  	}
  },
  data () {
  	const data = this.crumbsData
  	return {
	  	crumbs: data,
	  	router: this.$route.meta
  	}
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>