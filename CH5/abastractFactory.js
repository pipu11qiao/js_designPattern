//-->> Created by pipu on 2017/2/6.
// 通过对类的工厂抽象使其业务用于对产品类簇的创建，而不负责创建某一类产品的实例。
var Car = function () {};
Car.prototype = {
    getPrice: function() {
        return new Error('抽象方法不能调用');
    },
    getSpeed: function() {
        return new Error('抽象方法不能调用');
    }
};

var bCar = new Car();
var price = bCar.getPrice();
console.log(price);
