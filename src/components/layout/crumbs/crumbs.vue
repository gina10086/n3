<template>
	<div class="page-title clearfix">
      <div class="clearfix top-node-wrap">
          <div class="pull-left">
          	<n3-breadcrumb>
              <n3-breadcrumb-item v-for="(name, index) in crumbsData" href="javascript:;"><span v-if="index == 0" class="btn btn-primary title-tree"><i class="icon icon-tree"></i></span> <span :style="index != 0 ? 'font-size:14px' : ''">{{name}}</span></n3-breadcrumb-item>
            </n3-breadcrumb>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'crumbs',
  data () {
    return {
      crumbsData: this.$route.meta.crumbs
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.n3-breadcrumb>li+li:before {
  padding:0 0px 0 10px;
}
</style>