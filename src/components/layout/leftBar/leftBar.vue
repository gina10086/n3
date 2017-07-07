<template>
  <li :class="{dropdown: isFolder}">
    <router-link :to="model.state || ''" @click.native="toggle($event)">
      <i v-if="isRoot" :class="model.icon || 'fa fa-item'"></i>
      {{model.name}}
    </router-link>
    <ul v-if="isFolder">
      <left-bar v-for="child in model.children"
        :model="child" :menuStatus="menuStatus" :isRoot="false">
      </left-bar>
    </ul>
  </li>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @keyframes menu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .bar-list {
    font-size: 12px;
    width: 175px;
    min-height: 100%;
    background: #293542;
    line-height: 32px;
    padding: 15px 10px 15px 6px;
    transition: all .5s;
    a {
      display: block;
      color: #fff;
      line-height: 32px;
      &:hover {
        color:#00b494;
      }
    }
    & > li > a {
      overflow:hidden;
      width: 100%;
      white-space: nowrap;
    }
    li {
      transition: all .3s;
      position: relative;
      border-radius: 3px;
      padding:0 10px;
      ul {
        height: 0;
        margin-left: 6px;
        overflow: hidden;
        transition: height .6s;
      }
      a {
        color:#aeb2b7
      }
      &.dropdown > a:after {
        font-family: iconfont;
        position: absolute;
        content: '\e604';
        right:2px;
        top:0;
        transition: all .3s;
      }
      &.active,
      &:hover {
        background: #35404d;
      }
      &.active {
        & > a {
          color:#00b494;
          white-space: nowrap;
          &:after {
            transform: rotate(90deg);
          }
        }
        & > ul {
          display: block;
        }

      }
    }
    &.bar-closed {
      width: 50px;
      & > li {
        position: relative;
        height: 32px;
        border-radius:0;
      }
      
      li.dropdown > a:after {
        right: -2px
      }
      li.active {
        & > ul {
          display: none;
        }
        & > a:after {
          transform:rotate(0deg)
        }
      }
      li {
        & > ul {
          position: absolute;
          display: none;
          width: 120px;
          height: 0;
          top: 0;
          right: -118px;
          background: #35404d;
          border-radius: 3px;
          overflow: inherit;
        }
        &:hover {
          & > a {
            color: #00b494;
          }
          & > ul{
            display: block;
            height: auto;
            animation: menu .6s linear;
          }
        }
      }
      a {
        word-break:break-all;
      }
    }
  }
  
</style>
<script type="text/ecmascript-6">
  export default {
    name: 'LeftBar',
    props: {
      model: Object,
      isRoot: {
        type: Boolean,
        default: true
      },
      menuStatus: String
    },
    computed: {
      isFolder: function () {
        return this.model.children && this.model.children.length && this.model.type == 'dropdown'
      }
    },
    methods: {
      setParentHeight: function (parentUl, h, type) {
        if (!this.isRoot && parentUl.nodeName.toLowerCase() == 'ul') {
          let ph = parseInt(parentUl.style.height)
          parentUl.style.height = (type ? ph + h : ph - h) + 'px'
          this.setParentHeight(parentUl.parentNode, h, type)
        }
      },
      parentIsActived: function (obj) {
        let parentUl = obj.parentNode
        obj.className = obj.className + ' active'
        let isRoot = parentUl.className.indexOf('active') > -1
        if (!isRoot) {
          for (let i = 0; i < parentUl.children.length; i++) {
            let li = parentUl.children[i]
            li.className = li.className.replace(' active', '')
          }
          obj.className = obj.className + ' active'
          this.parentIsActived(parentUl.parentNode)
        }
      },
      setPrentClass: function(obj) {
        // obj => li
        let parentUl = obj.parentNode
        let isRoot = parentUl.className.indexOf('active') > -1
        console.log(parentUl.nodeName)
        if (!isRoot && parentUl.nodeName == 'UL') {
          for (let i = 0; i < parentUl.children.length; i++) {
            let li = parentUl.children[i]
            li.className = li.className.replace(' active', '')
          }
          obj.className = obj.className + ' active'
          this.setPrentClass(parentUl.parentNode)
        }
      },
      toggle: function (e) {
        let me = e.target
        let parentLi = me.parentNode
        if (me.nodeName == 'I') {
          parentLi = parentLi.parentNode
        }
        let parentUl = parentLi.parentNode

        let siblingUl = me.nextElementSibling
        let isActived = parentLi.className.indexOf('active') > -1
        if (this.menuStatus == 'open') {
          if (isActived) {
            parentLi.className = parentLi.className.replace(' active', '')
            if (siblingUl) {
              let h = parseInt(siblingUl.style.height)
              siblingUl.style.height = 0
              this.setParentHeight(parentUl, h, 0)
            }
          } else {
            for (let i = 0; i < parentUl.children.length; i++) {
              let li = parentUl.children[i]
              if (li.className.indexOf('active') > -1) {
                li.className = li.className.replace(' active', '')
                if (li.children[1]) {
                  let h = parseInt(li.children[1].style.height)
                  li.children[1].style.height = '0px'
                  this.setParentHeight(parentUl, h, 0)
                }
              }
            }
            parentLi.className = parentLi.className + ' active'
            if (siblingUl) {
              let h = 0
              for (let i = 0; i < siblingUl.children.length; i++) {
                let li = siblingUl.children[i]
                h += parseInt(window.getComputedStyle(li, false).height)
              }
              siblingUl.style.height = h + 'px'
              this.setParentHeight(parentUl, h, 1)
            }
          }
        } else {
          this.setPrentClass(parentLi)
        }
      }
    }
  }

</script>

