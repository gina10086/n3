<template>
  <div id="bar" class="bar">
    <ul class="bar-list">
      <li v-for="(father, index) in menuProvider" :class="{active:father.isActive}">
        <router-link v-if="father.type != 'dropdown'" :to="father.state" v-on:click.native="openMenu($event)" :class="{active:father.isActive}"><i :class="'ico ' + (father.icon || 'ico-dashboard')"></i><span>{{father.name}}{{father.isActive}}</span></router-link> 
        <a v-if="father.type == 'dropdown'" href="javascript:;" v-on:click.stop="openMenu($event)" class="dropdown" :class="{active:father.isActive}">
          <i :class="'ico ' + (father.icon || 'ico-dashboard')"></i>
          {{father.name}}{{father.isActive}}
          <i class="status fa fa-angle-right"></i>
        </a>
        <ul v-if="father.type == 'dropdown'">
          <li v-for="(subList, index) in father.children">
            <router-link v-if="subList.type != 'dropdown'" :to="subList.state" v-on:click.native="openMenu($event)" :class="{active:subList.isActive}">{{subList.name}}{{subList.isActive}}</router-link> 
            <a v-if="subList.type == 'dropdown'" href="javascript:;" v-on:click.stop="openMenu($event)" class="dropdown" :class="{active:subList.isActive}">
              {{subList.name}}{{subList.isActive}}
              <i class="status fa fa-angle-right"></i>
            </a>
            <ul v-if="subList.type == 'dropdown'">
              <li v-for="(child, index) in subList.children">
                <router-link v-if="child.type != 'dropdown'" :class="{active:child.isActive}" :to="child.state" v-on:click.native="openMenu($event)">{{child.name}}{{child.isActive}}</router-link> 
              </li>
            </ul>
          </li>
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
      openMenu: function (event) {
        let currentObj = event.currentTarget
        let parent = currentObj.parentNode
        let childList = parent.children[1]
        let h = 0
        if (parent.className.indexOf('active') > -1){
          if (parent.parentNode.className == 'bar-list' && !childList) {
            return
          }
          if (childList) {
            let childH = 32 * childList.children.length
            childList.style.height = 0
            let parentUl = parent.parentNode
            parentUl.style.height = (parseInt(window.getComputedStyle(parentUl).height) - childH) + 'px'
          }
        } else {
          if (parent.parentNode.className == 'bar-list') {
            let lis = document.querySelector('.bar-list').children
            for (let li of lis) {
              li.className = ''
              if (li.children[1]) {
                li.children[1].style.height = 0
              }
            }
          }
          if (childList) {
            let childH = 32 * childList.children.length
            childList.style.height = (childH + h) + 'px'
            let parentUl = parent.parentNode
            parentUl.style.height = parseInt(window.getComputedStyle(parentUl).height) + childH + 'px'
          }
        }
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
    overflow: hidden;
    z-index: 200;
    transition: all 0.5s ease;
    height:100%;
  }
  .bar-list{
    margin-top: 61px;
    a{
      color: #aeb2b7;
      display: block;
      position:relative;
      line-height:32px;
      font-size: 12px;
      &.active {
        color: #00b494;
        font-weight: normal;
      }
    }
    .status,
    .ico{
      position:absolute;
      top:0;
      line-height: 2em;
      line-height: 32px;
    }
    .status{
      right: -10px;
      transition: all .3s;
    }
    .ico{
      left:-17px;
    }
   
    & > li {
      padding: 0 20px 0 25px;
      margin: 0 10px;
      & > ul > li ul {
        margin-left: 20px
      }
      &.active {
        border-radius: 3px;
        background: rgb(53, 64, 77);
      }
      & > ul > li > .dropdown .status {
        right: 2px;
      }
    }
    li > ul {
      transition: height .5s;
      height: 0;
      overflow: hidden;
      
    }
    .active {
      font-weight: bold
      & > .dropdown > .status {
        transform: rotate(90deg);
      }
    }

  }
  
</style>
