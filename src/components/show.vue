<template>
  <div>
    <div class="show_bar">
      我是show_bar,我是否显示{{showif}}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'show',
  props: ['showif']

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.show_bar{
  width:100%
  height:50px
  line-height:50px;
  background :#cccccc
  border:1px solid indianred
}
</style>
