//-->> Created by pipu on 2017/2/6.
// 通过对类的工厂抽象使其业务用于对产品类簇的创建，而不负责创建某一类产品的实例。
//
var VehicleFactory = function(subType,superType) {
    if(typeof VehicleFactory[superType] === 'function') {
        function F() {}
        F.prototype = new VehicleFactory[superType]();
        subType.constructor = subType;
        subType.prototype = new F();
    }else {
        throw new Error('为创建该抽象类');
    }
};
VehicleFactory.Car = function() {
    this.type = 'car';
};
VehicleFactory.Car.prototype = {
    getPrice: function() {
        return new Error('抽象方法不能调用');
    },
    getSpeed: function() {
        return new Error('抽象方法不能调用');
    }
};
