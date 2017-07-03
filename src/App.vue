<template>
  <div id="app">
    <!-- <top-bar></top-bar>
    <left-bar ></left-bar>
    <div id="page" class="page">
      <div id="content" class="content">
        <div class="page-container">
          <router-view></router-view>
        </div>
      </div>
    </div> -->
    <div class="header">
      <div class="logo" :style="'width:'+menuWidth">
        <i class="fa fa-chain"></i>迁云服务管理平台
      </div>
      <div class="top-bar">
      top-bar
        <div class="left-bar-control">
          <i class="fa fa-dedent" v-show="menuWidth == '175px'" v-on:click="menuWidth = '50px'"></i>
          <i class="fa fa-indent" v-show="menuWidth == '50px'" v-on:click="menuWidth = '175px'"></i>
        </div>
      </div>
    </div>
    <div class="left-bar" :style="'width:'+menuWidth">
      <left-bar ></left-bar>
    </div>
    <div class="right-container">
      <router-view></router-view>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">

  import TopBar from 'components/layout/topBar/topBar'
  import LeftBar from 'components/layout/leftBar/leftBar'
  export default {
    components: {
      LeftBar, TopBar
    },
    data () {
      return {
        menuWidth: '175px'
      }
    },
    watch: {
      menuWidth: function (val) {
        let leftList = document.querySelector('.bar-list')
        console.log('menu changed!',  leftList)
        leftList.className = val == '50px' ?  'bar-list bar-list-closed' : 'bar-list'
        if (val == '50px') {
          let ul = leftList.getElementsByTagName('ul')
          for (let i = 0; i < ul.length; i++) {
            ul[i].removeAttribute('style')
            console.log('remove attribute "style"')
          }
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app{
    display:flex;
    flex-direction: row;
    width: 100%;
    height:100%;
    background: #fff;
    padding-top:60px;
  }
  .header{
    position: fixed;
    display: flex;
    top:0;
    left:0;
    height:60px;
    width:100%;
    align-items: center;
    padding: 0 15px 0 0;
    background: #293542;
    color: #fff;
    .logo {
      max-width:175px;
      min-width:50px;
      height:60px;
      overflow:hidden;
      transition: all .5s;
      white-space: nowrap;
      line-height: 60px;
      .fa {
        transform:rotate(-45deg) translateY(14px) translateX(-3px);
        font-size:40px;
        margin-right: 19px;
      }
    }
    .top-bar {
      position:relative;
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
  .right-container,
  .left-bar {
    transition: all .5s;
  }
  .left-bar {
    background:red;
    max-width:175px;
    min-width:50px;
    background: #293542;
    z-index: 2
  }
  .right-container {
    flex:1;
    z-index: 1;
  }
  .left-bar-control {
    position:absolute;
    left:0;
    top:0;
    font-size:20px;
    .fa {
      cursor:pointer;
    }
  }
  .right-container {
    padding: 20px;
  }
</style>
