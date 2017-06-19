<template>
	<div class="page-title clearfix">
        <div class="clearfix top-node-wrap">
            <div class="pull-left">
                <div class="title-info">
                    <span class="title-info-item"><a href="/"><b>首页</b></a></span><span v-if="crumbs && crumbs.link">/<span class="title-info-item"><a :href="crumbs.link"><b>{{crumbs.name}}</b></a></span> </span>
                </div>
                <p>{{router}}</p>
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
	  	router: this.$route.name
  	}
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>