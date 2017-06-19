<template>
  <div id="bar" class="bar">
    <ul class="bar-list">
      <li class="bar-sub" v-for="(father, index) in menuProvider">
        <a v-if="father.type == 'dropdown'" href="javascript:;">
          <i :class="father.icon || 'ico-dashboard'"></i>
          <span>{{father.name}}</span>
          <i class="bar-status"></i>
        </a>
         <ul v-if="father.type == 'dropdown' && father.children" class="bar-sublist">
          <li v-for="(child, index) in father.children">
            <router-link :to="child.state">{{child.name}}</router-link>
          </li>
        </ul>
        <router-link v-if="father.type != 'dropdown'" :to="father.state"><i :class="father.icon || 'ico-dashboard'"></i>{{father.name}}</router-link> 
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
        console.log(name, res)
        return res
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
  }
  .bar-list > li{
    position: relative;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .bar-list > li > a{
    display: block;
    padding: 10px 0 10px 8px;
    font-size: 12px;
    color: #aeb2b7;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s ease;
    overflow: hidden;
    max-height: 37px;
    white-space:nowrap;
  }
  .bar-list > li > a.active,
  .bar-list > li > a.hover,
  .bar-list > li > a:hover{
    background: #35404d;
    color: #fff;
    display: block;
  }
  .bar-list > li > a span{
    display: inline-block;
  }
  .bar-list > li > a i{
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    width: 21px;
    font-size: 15px;
    padding-right: 6px;
    font-family: "iconfont";
  }
  .bar-list > li > a.active i,
  .bar-list > li > a.hover i,
  .bar-list > li > a:hover i{
    color: #00b494;
  }
  .bar-list i.ico-dashboard:before{
    content: "\e606";
  }
  .bar-list i.ico-view:before{
    content: "\e60b";
  }
  .bar-list i.ico-monitor:before{
    content: "\e60c";
  }
  .bar-list i.ico-system:before{
    content: "\e605";
  }
  .bar-list .bar-status{
    position: absolute;
    top: 12px;
    right: 10px;
    width: 12px;
    height: 12px;
    font-size: 12px;
    transition: all 0.3s ease;
    transform-origin: center;
  }
  .bar-list > li > a.active i.bar-status,
  .bar-list > li > a:hover i.bar-status{
    color: #fff;
  }
  .bar-list .bar-status:before{
    content: "\e604";
    line-height: 12px;
  }
  .bar-list i.bar-status.active{
    transform: rotate(90deg);
  }
  .bar-sub{
    position: relative;
  }
  .bar-sub > a.active{
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .bar-sublist{
    /*margin-top: -2px;*/
    padding-bottom: 10px;
    background: #35404d;
    border-bottom-right-radius:4px;
    border-bottom-left-radius:4px;
    display: none;
  }
  .bar-sublist > li{
    padding-left: 32px;
  }
  .bar-sublist > li > a{
    display: block;
    padding: 6px 0;
    color: #aeb2b7;
    font-size: 12px;
    text-decoration: none;
    overflow: hidden;
    white-space:nowrap;
  }
  .bar-sublist > li > a.active,
  .bar-sublist > li > a:hover{
    color: #00b494;
    transition: all 0.3s ease;
  }

  .minibar .bar{
    width: 51px;
  }
  .minibar .bar-list>li.bar-sub{
    margin-right: 0;
  }
  .minibar .bar-list>li>a.bar-sub{
    padding-right: 10px;
  }
  .minibar .bar-list>li>a span{
    display: none;
  }
  .minibar .bar-list>li>a i.bar-status{
    right: 4px;
  }
  .minibar .bar-sublist{
    display: none;
    position: absolute;
    top: 0;
    left: 30px;
    border-radius: 0;
    background: transparent;
    padding-left: 10px;
  }
  .minibar .bar-sublist li{
    background: #293542;
    padding-left: 0;
  }
  .minibar .bar-sublist li a{
    padding: 10px 18px;
  }
  .minibar .bar-sublist li a:hover{
    background: #35404d;
  }
</style>
