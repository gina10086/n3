/* bar */
jQuery(function(){

  var body = $('body');
  var b = $('#bar');

  var logo = $('.header-logo-link');
  var content = $('#content');

  b.find('.bar-sub>a').on('click',function(e){
    e.preventDefault();
    if(body.hasClass('minibar')) return;
    var me = $(this);
    var li = me.parent();
    var sub = li.find('.bar-sublist');
    if(me.hasClass('active')){
      sub.slideUp('fast',function(){
        me.removeClass('active');
        me.find('a.active').removeClass('active');
      });
      me.find('.bar-status').removeClass('active');
    }else{
      b.find('.bar-sub>a.active').trigger('click');//关闭其他
      me.addClass('active');
      if(b.hasClass('no-trans')) sub.show();
      else sub.slideDown('fast');
      me.find('.bar-status').addClass('active');
    }
  });

  $('.bar-sub').on('mouseenter',function(){
    if(!body.hasClass('minibar')) return;
    var me = $(this);
    var sub = me.find('.bar-sublist');
    sub.fadeIn('fast');
    me.children('a').addClass('hover');
  }).on('mouseleave',function(){
    if(!body.hasClass('minibar')) return;
    var me = $(this);
    var sub = me.find('.bar-sublist');
    sub.fadeOut('fast');
    me.children('a').removeClass('hover');
  });

  $('.header-menu-switch').on('click',function(e){
    e.preventDefault();
    var me = $(this);
    var i = me.find('i');
    if(body.hasClass('minibar')){
      b.find('.bar-sub>a.active').next().show();
      b.find('.bar-sub>a.active .bar-status').addClass('active');
      body.removeClass('minibar');
      setNavStatus(0);
    }else{
      b.find('.bar-status').removeClass('active');
      b.find('.bar-sublist').hide();
      body.addClass('minibar');
      setNavStatus(1);
    }
  });

  function setNavStatus(v){//0为默认展开，1为关闭
    v = v || 0;
    var date = new Date();
    date.setTime(+date+365*24*3600*1000);
    document.cookie = '_nav_status='+v+'; expires=' + date.toUTCString()+'; path=/';
  }

  //默认选中
  var flag = $('#navFlag').val();
  if(flag){
    var selectedA = b.find('a[data-page="'+flag+'"]');
    var selectedLi = selectedA.parents('.bar-sub');
    if(selectedLi[0]){
      b.addClass('no-trans');
      selectedLi.children('a').trigger('click').addClass('active');
      selectedA.addClass('active');
      setTimeout(function(){b.removeClass('no-trans')},0);
    }else{
      selectedA.addClass('active');
    }
  }

  //todo 超高滚动

});

/*header*/
jQuery(function(){

  $('.header-info-avatar').on('click',function(e){
    e.stopPropagation();
    var me = $(this);
    var dl = me.find('ul');
    if(dl.is(':hidden')){
      dl.show();
      $(document).one('mousedown',function(){
        dl.hide();
      });
    }else{
      dl.hide();
    }
  }).on('mousedown',function(e){
    e.stopPropagation();
  });

});

/* filter */
jQuery(function(){
  $('.j-filter').each(function(){
    var filter = $(this);
    filter.on('click',function(e){
      if(e.target !== filter.find('.j-filter-ok').get(0)){
        //e.preventDefault();
        e.stopPropagation();
      }

    });
  });
});

/* multi */
//按钮事件可以另外绑定，无需修改内部代码
jQuery(function(){

  var checkbox = $('.j-iptcheck');

  $('.dropdown-menu li').find('a').on('click',function(e){
    e.preventDefault();
    var me = $(this);
    var id = me.attr('data-id');
    closeBox();
    $('#'+id).show();
    checkbox.show();
  });

  $('.multi-cancel').on('click',function(e){
    e.preventDefault();
    closeBox();
  });

  $('.multi-ok').on('click',function(e){
    e.preventDefault();
    $('.multi-box-alarm').hide();
    checkbox.hide();
  });

  function closeBox(){
    $('.multi-box-alarm').hide();
    checkbox.hide().each(function(){
      this.checked = false;
      $(this).hide();
    });
    total();
  }

  $('.j-allcheck').on('change',function(){
    var _this = this;
    checkbox.each(function(){
      var me = this;
      if(_this.checked) me.checked = true;
      else me.checked = false;
    });
  });

  checkbox.on('change',function(){
    total();
  });

  function total(){
    var num = 0;
    checkbox.each(function(){
      if(this.checked) num++;
    });
    $('.multi-txt b').text(num);
    if(num>0) $('.multi-ok')[0].disabled = false;
    else $('.multi-ok')[0].disabled = true;
  }

});

/* tab */
jQuery(function(){

  var tabs = $('.monitor-tab-panel .nav-tabs');
  tabs.find('li a').on('click',function(){
    tabs.find('li').removeClass('active');
    $(this).parent().addClass('active');
  });

});/**
 * Created by user on 2017/6/2.
 */
