<template>
  <div id="page" class="page">
    <div id="content" class="content">
      <div class="page-container">
        <div class="page-title clearfix">
          <div class="clearfix top-node-wrap">
            <div class="pull-left">
              <h2><a href="javascript:;" class="btn btn-primary title-tree"><i class="icon icon-tree"></i></a> 项目管理
              </h2>
              <div class="title-info">
                <span class="title-info-item"><a href="#/projectControl"><b>项目列表</b></a></span>
              </div>
            </div>
            <div class="pull-right">
              <div class="title-buttons mr10">
                <button class="btn btn-default close-node">我是一个按钮</button>
                <div class="popover left" id="nodeDetailPopover">
                  <div class="arrow"></div>
                  <div class="popover-content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="monitor-form-wrap">
          <div class="monitor-tab-panel">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

  name: 'container',

  data () {
    return {

    };
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>