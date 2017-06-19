<template>
  <div>
  123
    <crumbs :crumbsData="crumbsData"></crumbs>
  </div>
</template>

<script type="text/ecmascript-6">
  import crumbs from 'layout/container/crumbs'
export default {
  name: 'projectControl-list',
  components: { crumbs },
  data () {
    return {
      crumbsData: {
        name: '项目列表',
        link: '/hello'
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
