//-->> Created by pipu on 2017/2/3.
//通过工厂模式为页面创建不同功能的按钮
var BtnFactory = function(type,el) {
  if(this instanceof  BtnFactory) {
      return this[type](el);
  } else {
      return new BtnFactory(type,el);
  }
};
BtnFactory.prototype = {
    base: function(el) {
        //给按钮添加hover和active状态
        el.addEventListener('mouseover',function() {
            this.className = 'btn hover';
        });
        el.addEventListener('mouseout',function() {
            this.className = 'btn';
        });
        el.addEventListener('mousedown',function() {
            this.className = 'btn active';
        });
    },
    create: function(el) {
        this.base(el);
        el.onclick = function() {
            console.log('创建');
        };
    },
    delete: function(el) {
        this.base(el);
        el.onclick = function() {
            console.log('删除');
        };
    }
};

BtnFactory('create',document.getElementsByClassName('btn')[0]);
BtnFactory('delete',document.getElementsByClassName('btn')[1]);
