<template>
  <div id="app">
    <top-bar></top-bar>
    <left-bar ></left-bar>
    <div id="page" class="page">
      <div id="content" class="content">
        <div class="page-container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import TopBar from 'components/layout/topBar/topBar'
  import LeftBar from 'components/layout/leftBar/leftBar'
  export default {
    components: {
      LeftBar, TopBar
    }
  }
</script>

<style>
  #app{
    width: 100%;
    height:100%;
    background: #fff;
  }
</style>
