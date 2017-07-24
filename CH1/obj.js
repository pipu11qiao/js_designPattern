//-->> Created by pipu on 2017/1/26.
Function.prototype.method = function(name,fun) {
    this[name] = fun;
    return this;// 链式调用
};

var CheckObj = function() {};
CheckObj.method('checkName',function() {
    //验证姓名
    return this;//子对象链式调用
}).method('checkGenda',function() {
    //验证性别
    return this;
}).method('checkEmail',function() {
    //验证邮箱
    return this;
});
