<template>
  <div>
    <ul class="bar-list">
      <li v-for="father in $menuProvider" :class="{dropdown:father.type == 'dropdown'}">
        <a href="javascript:;" v-if="father.type == 'dropdown'" v-on:click.self.stop="openMenu($event)">
          <i :class="father.icon"></i>{{father.name}}
        </a>
        <router-link v-if="father.type != 'dropdown'" :class="{active:father.isActive}" v-on:click.self.stop.native="openMenu($event)" :to="father.state"><i :class="father.icon || 'fa fa-view'"></i>{{father.name}}</router-link>
        <ul v-if="father.type == 'dropdown'">
          <li v-for="child in father.children" :class="{dropdown:child.type == 'dropdown'}">
            <a href="javascript:;" v-if="child.type == 'dropdown'" v-on:click.self="openMenu($event)">{{child.name}}</a>
            <router-link v-if="child.type != 'dropdown'" :to="child.state" :class="{active:child.isActive}" v-on:click.self.stop.native="openMenu($event)">{{child.name}}</router-link>
            <ul v-if="child.type == 'dropdown'" class="bar-list-grandson">
              <li v-for="grandson in child.children">
                <router-link :to="grandson.state" v-on:click.self.stop.native="openMenu($event)" :class="{active:grandson.isActive}">{{grandson.name}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .bar-list{
    padding: 0 10px;
    a {
      display:block;
      color: #aeb2b7;
      font-size: 12px;
      line-height:32px;
      &:hover {
        color: #fff
      }
      .active {
        color: #00b494
      }
    }
    li {
      width:100%;
      &.dropdown{
        position: relative;
        &:after {
          position:absolute;
          top:0;
          right:2px;
          font-family: 'FontAwesome';
          content: '\f105';
          cursor: pointer;
          line-height: 32px;
        }
        &:hover {
          color: #fff;
        }
        &.active {
          &:after {
            transform:rotate(90deg)
          }
        }
      }
      &, * {
        transition: all .6s;
      }
      .active {
        color: #00b494;
      }
      & > ul {
        height: 0;
        overflow: hidden;
      }
    }
    & > li {
      height:auto;
      padding:0 15px 0 25px;
      border-radius: 3px;
      &:hover,
      &.active {
        background: #35404d
        & > a {
          font-weight: bold;
          color: #fff;
        }
      }
      & > a {
        padding:0 15px 0 0;
        position:relative;
        & > i{
          line-height: 32px;
          position: absolute;
          top:0;
          left:-20px;
        }
      }
    }
    
    .bar-list-grandson {
      padding-left: 1em;
    }
    &.bar-list-closed {
      li {
        position: relative;
        &:after {
          right: 6px;
        }
        & > ul {
          display: none;
          position:absolute;
          transition: all .5s;
          top: 0;
          left: 120px;
          opacity: 0;
          background: #293542;
          width: 120px;
          height: auto;
          z-index: 6;
          overflow: inherit;
        }
        &:hover {
          & > ul {
            display: block;
            opacity: 1;
          }
        }
      }
      & > li {
        height: 32px;
        &:after {
          right: 10px;
        }
        & > a {
          width: 0;
          padding: 0;
          color: rgba(0,0,0,0)
          & > i {
            color: #ccc
          }
        }
        & > ul {
          left: 38px;
        }
      }
    }
  }
  
</style>
<script type="text/ecmascript-6">
  export default {
    name: 'LeftBar',
    methods: {
      childIsActive: function (event) {
      },
      computedHeight: function (node) {
          // node 传参为兄弟节点 => ul
          let h = 0
          if (node) {
            for (let li of node.children) {
              let addH = li.className.indexOf('active') > -1 ? (li.children.length - 1) * 32 : 0
              h += addH
            }
          }
          return h
      },
      openMenu: function (event) {
        if (document.querySelector('.bar-list-closed')) {
          return
        }
        // 当前点击对象 => a
        let current = event.currentTarget
        // 当前对象父级 => li
        let parentLi = current.parentNode
        // 当前对象爷爷 => ul
        let parentUl = parentLi.parentNode
        // 当前对象父级是否包含类名 active
        let liStatus = parentLi.className.indexOf('active') > -1 ? 'open' : 'close'
        // 当前对象兄弟 => ul
        let menuList = current.nextElementSibling
        // 检测当前对象爷爷是否是根目录 'bar-list'
        let isRoot = (parentUl.className == 'bar-list')
        // 当前对象兄弟打开后的高度
        let h = menuList ? 32 * menuList.children.length : 0
        h += this.computedHeight(menuList)
        switch (liStatus) {
          case 'close':
            for (let i = 0; i < parentUl.children.length; i++) {
              let li = parentUl.children[i]
              let ul = li.children[1]
              if (li.className.indexOf('active') > -1 && ul) {
                let h = ul.children.length * 32
                ul.style.height = 0
                if (!isRoot) {
                  parentUl.style.height = parseInt(parentUl.style.height) - h + 'px'
                }
              }
              li.className = li.className.replace(' active', '')
            }
            parentLi.className = parentLi.className + ' active'
            if (menuList) {
              menuList.style.height = h + 'px'
              if (!isRoot) {
                parentUl.style.height = parseInt(parentUl.style.height) + h + 'px'
              }
            }
            break
          default:
            parentLi.className = parentLi.className.replace(' active', '')
            if (menuList) {
              menuList.style.height = '0px'
              if (!isRoot) {
                parentUl.style.height = parseInt(parentUl.style.height) - h + 'px'
              }
            }
        }
      }
    }
  }

</script>

