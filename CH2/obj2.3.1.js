//类式继承，声明父类
function SuperClass() {
    this.superValue = true;
}
SuperClass.prototype.getSuperValue = function() {
    return this.superValue;
};

function SubClass() {
    this.subValue = false;
}

SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function() {
    return this.subValue;
};
//第二个类的原型prototype被赋予了第一个类的实例。

var sub = new SubClass();

console.log(sub);