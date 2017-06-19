<template>
  <div id="header" class="header">
    <div class="header-logo">
      <a href="/" class="header-logo-link">
        <img src="./images/logo.png" alt="迁云管理系统">
      </a>
    </div>
    <a href="javascript:;" class="header-menu-switch"><i></i></a>

    <div class="header-info">
      <div class="header-info-avatar">
        <img src="https://aliwork.alicdn.com/tfscom/T1fxt7FtJlXXXXXXXX_80x80">
        <span>某某</span>
        <b></b>
        <ul>
          <li><a href="#">退出</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'TBar'
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 201;
    height: 45px;
    width: 100%;
    background: #293542;
    padding: 0 15px;
    img{
      height :100%;
    }

  }
  .header-logo{
    float: left;
    padding: 11px 0;
    width: 150px;
    overflow: hidden;
    transition: all 0.5s ease;
  }
  .header-logo-link {

    width: 150px;
    height: 23px;
    display: inline-block;
    vertical-align: middle;

    position: relative;
  }
  .header-logo-link:after{
    content:"Beta";
    position: absolute;
    right: -1px;
    top: -5px;
    font-size: 12px;
    text-indent: 0;
    color: #fff;
    transform: scale(0.85);
  }
  .minibar .header-logo{
    width: 23px;
  }
  .header-menu-switch{
    float: left;
    padding: 3px;
    margin: 11px;
  }
  .header-menu-switch i{
    font-style: normal;
    font-family: "iconfont";
    font-size: 18px;
    color: #fff;
    line-height: 1;
  }
  .header-menu-switch i:before{
    content: "\e610";
  }
  .minibar .header-menu-switch i:before{
    content: "\e60f";
  }
  .header-info{
    float: right;
  }
  .header-info-avatar{
    padding: 6px;
    margin: 0 15px;
    vertical-align: middle;
    cursor: pointer;
    position: relative;
  }
  .header-info-avatar img{
    width: 30px;
    height: 30px;
    border-radius: 2px;
    vertical-align: middle;
    float: left;
    margin-right: 8px;
  }
  .header-info-avatar span{
    font-size: 14px;
    display: inline-block;
    line-height: 30px;
  }
  .header-info-avatar b{
    width: 0;
    height: 0;
    border-width: 5px;
    border-color: #b9b9c3 transparent transparent transparent;
    border-style: solid dashed dashed dashed;
    float: right;
    margin-top: 12px;
    margin-left: 5px;
  }
  .header-info-avatar ul{
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    cursor: default;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    display: none;
  }
  .header-info-avatar ul li{
  }
  .header-info-avatar ul li a {
    display: block;
    padding: 3px 20px;
    clear: both;
    line-height: 15
    color: #333;
    white-space: nowrap;
    text-align: center;
  }
  .header-info-avatar ul li a:hover{
    background: #485d75;
    color: #fff;
  }
</style>
