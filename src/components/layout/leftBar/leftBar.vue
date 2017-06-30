<template>
  <ul class="bar-list">
    <li class="dropdown">
      <a href="javascript:;" v-on:click.self.stop="openMenu($event)">
        <i class="fa fa-archive"></i>father
      </a>
      <ul>
        <li><a href="javascript:;">child0</a></li>
        <li class="dropdown">
          <a href="javascript:;" v-on:click.self="openMenu($event)">child1</a>
          <ul class="bar-list-grandson">
            <li>
              <a href="javascript:;">grandson</a>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="javascript:;" v-on:click.self="openMenu($event)">child2</a>
          <ul class="bar-list-grandson">
            <li>
              <a href="javascript:;">grandson2</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" v-on:click.self.stop="openMenu($event)"><i class="fa fa-archive"></i>father1</a>
    </li>
  </ul>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .bar-list {
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
  }
</style>
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
      clearActive: function (node) { // node => ul
        console.log(node)
        for (let li of node.children) {
          let child = li.children[1]
          if (li.className.indexOf('active') > -1) {
            li.className = li.className.replace('active', '')
            child.style.height = '0'
            if (node.className != 'bar-list') {
              node.style.height = parseInt(node.style.height) - (child.children.length * 32) + 'px'
            }
          }
        }
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
        console.log(liStatus)
        let h = menuList ? 32 * menuList.children.length : 0
        h += this.computedHeight(menuList)
        switch (liStatus) {
          case 'close':
            this.clearActive(parentUl)
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

