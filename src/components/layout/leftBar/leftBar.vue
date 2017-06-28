<template>
  <div id="bar" class="bar">
    <!-- <ul class="bar-list">
      <li class="bar-sub" v-for="(father, index) in menuProvider">
        <a v-if="father.type == 'dropdown'" href="javascript:;">
          <i :class="father.icon || 'ico-dashboard'"></i>
          <span>{{father.name}}</span>
          <i class="bar-status"></i>
        </a>
         <ul v-if="father.type == 'dropdown' && father.children" class="bar-sublist">
          <li v-for="(child, index) in father.children">
            <router-link :to="child.state" :class="child.isActive ? 'active' : ''">{{child.name}}</router-link>
          </li>
        </ul>
        <router-link v-if="father.type != 'dropdown'" :to="father.state"><i :class="father.icon || 'ico-dashboard'"></i>{{father.name}}</router-link> 
      </li>
    </ul> -->
    <ul class="bar-list">
      <li>
        <a href="javascript:;" class="dropdown">
          <i class="fa fa-tree"></i>
          <span>父级</span>
          <i class="bar-status fa fa-angle-right"></i>
        </a>
        <ul>
          <li>
            <a href="javascript:;">
              <span>子级</span>
              <i class="fa fa-angle-right"></i>
            </a>
            <ul>
              <li>
                <a href="jac:;">孙子</a>
              </li>
            </ul>
          </li>
          <li><a href="#">应用视图</a></li>
          <li><a href="#">网络趋势图</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'LeftBar',
    data () {
      return {
        routerProvider: this.$routerProvider,
        menuProvider: this.$menuProvider
      }
    },
    methods: {
      menuResolve: function(name){
        const router = this.routerProvider
        let res = ''
        console.log(Array.isArray(router), router)
        router.forEach(function(value) {
          if (name == value.name) {
            res = value.path
            return
          } else if (value.children) {
            value.children.forEach(function(child) {
              if (name == child.name) {
                res = value.path + '/' + child.path
                return
              }
            })
          }
        })
        return res
      },
      openMenu: function (event) {

      }
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .bar{
    position: fixed;
    top: 0;
    left: 0;
    background: #293542;
    width: 175px;
    height: 100%;
    /*overflow: hidden;*/
    z-index: 200;
    transition: all 0.5s ease;
  }
  .bar-list{
    margin-top: 55px;
    .dropdown {
      display:block;
      position:relative;
      .bar-status{
        position:absolute;
        right:0
      }
    }
    /*li > ul {
      height:0;
      overflow:hidden;
    }*/
    li {
      padding-left: 2em;
    }
    a{
      color: #aeb2b7;
    }
    .bar-status {
      font-family: "iconfont";
      &:before{
        content: "\e604";
        line-height: 12px;
      }
    }
  }
  
</style>
