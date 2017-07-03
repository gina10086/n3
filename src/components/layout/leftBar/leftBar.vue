<template>
  <div>
    <ul class="bar-list">
      <li v-for="father in $menuProvider" :class="{dropdown:father.type == 'dropdown',active:father.isActive}">
        <router-link :class="{active:father.isActive}" v-on:click.self.stop.native="openMenu($event)" :to="father.state || ''"><i :class="father.icon || 'fa fa-view'"></i>{{father.name}}</router-link>
        <ul v-if="father.type == 'dropdown'">
          <li v-for="child in father.children" :class="{dropdown:child.type == 'dropdown'}">
            <router-link :to="child.state || ''" :class="{active:child.isActive}" v-on:click.self.stop.native="openMenu($event)">{{child.name}}</router-link>
            <ul v-if="child.type == 'dropdown'" class="bar-list-grandson">
              <li v-for="grandson in child.children">
                <router-link :to="grandson.state" v-on:click.self.stop.native="openMenu($event)" :class="{active:grandson.isActive}">{{grandson.name}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="bar-list-closed">
      <li v-for="father in $menuProvider" :class="{dropdown:father.type == 'dropdown',active:father.isActive}">
        <router-link :class="{active:father.isActive}" :to="father.state || ''"><i :class="father.icon || 'fa fa-view'"></i></router-link>
        <ul v-if="father.type == 'dropdown'">
          <li v-for="child in father.children" :class="{dropdown:child.type == 'dropdown',active:child.isActive}">
            <router-link :to="child.state || ''" :class="{active:child.isActive}">{{child.name}}</router-link>
            <ul v-if="child.type == 'dropdown'" class="bar-list-grandson">
              <li v-for="grandson in child.children" :class="{active:grandson.isActive}">
                <router-link :to="grandson.state">{{grandson.name}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @keyframes menu-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
        transition: height .6s;
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
  }
  .bar-list-closed {
    display: none;
    li {
      position: relative;
      & > ul {
        position: absolute;
        left: 116px;
        top: 0;
        width: 120px;
        display: none;
        opacity: 0;
        background: #293542
        border-radius: 3px;
       
      }
      a {
        display: block;
        color: #aeb2b7;
        display: block;
        line-height: 32px;
        padding: 0 10px;
      }
      &:hover {
        & > ul {
          display: block;
          opacity: 1;
          animation:menu-show .6s 1;
        }
        & > a {
          font-weight: bold;
          color: #fff;
        }
      }
      &.dropdown {
        & > a {
          &:after {
            position: absolute;
            right: 7px;
            font-family: 'FontAwesome';
            content: '\f105';
            cursor: pointer;
            line-height: 32px;
          }
        }
      }
    }
    & > li {
      
      &:hover {
        color: #fff;
        background: #35404d
      }
      & > a {
        text-align: center;
      }
      & > ul {
        left: 47px;
        border-radius: 3px;
      }
    }
    .active{
      & > a {
        color: #00b494
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
              // li.className = li.className.replace(' active', '')
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

