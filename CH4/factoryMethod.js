//-->> Created by pipu on 2017/2/3.
//通过对产品类的抽象使其创建业务主要负责用于创建类产品的实例。

//创建java科学类
// 安全的工厂模式
var Factory = function(type,content) {
    if(this instanceof Factory) {
        return new this[type](content);
    } else {
        return new Factory(type,content);
    }
};
Factory.prototype = {
    Java:function(content) {
        console.log('java');
    },
    JavaScript: function(content) {
        console.log('javaScript');
    },
    UI: function(content) {
        console.log('UI');
    },
    php: function(content) {
        console.log('php');
    }
};