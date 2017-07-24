//-->> Created by pipu on 2017/2/3.
//简单工厂模式，静态工厂方法，有一个工厂对象决定创建某一个产品对象的实例。主要用来创建同一类对象。
var LoginAlert = function (text) {
    this.content = text;
};
LoginAlert.prototype.show = function() {
    console.log('显示警示框');
};
var usernameAlert = new LoginAlert('用户名不能多于16个字母或数字');
usernameAlert.show();
var passwordAlert = new LoginAlert('输入的秘法不正确');
passwordAlert.show();

var popupFactory = function(type) {
    switch (type) {
        case 'alert':
            return new LoginAlert();
        case 'confirm':
            return new LoginConfirm();
        case 'prompt':
            return new LiginPrompt();
    }
};