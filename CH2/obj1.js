//-->> Created by pipu on 2017/1/26.
//私有属性和私有方法，特权方法，对象公有属性和对象共有方法，构造器
var Book = function() {
    //私有属性
    var num = 1;
    //私有方法
    function chekId(){}
    //特权方法
    this.getName = function() {};
    this.getPrice = function() {};
    this.setName = function() {};
    this.setPrice = function() {};
    //对象公有属性
    this.id = id;
    //对象公有方法
    this.copy = function() {};
    //构造器
    this.setName(name);
    this.setPrice(price);

};
// 将类的静态变量通过闭包来实现。94
