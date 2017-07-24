//-->> Created by pipu on 2017/2/6.
/*
* Prototype 属性
* a: Prototype: 每一个函数都包含一个prototype属性，这个属性指向的是一个对象的引用，而对每一个函数类的实例
* 都会从prototype属性指向继承属性，换句话说通过一个函数创建的所有对象都继承一个相同的对象。
* b：通过new关键字和构造函数创建的对象原型，就是构造函数的prototype指向的那个对象
*
* */

//function A(name) {
//    this.name = name;
//}
//var a1 = new A('a1');
//var a2 = new A('a2');

// a1.__proto__ === a2.__proto__ === A.prototype;
/*
* 1.同一个类的所有实例都从同一个原型对象上继承属性
* 2.当且仅当两个对象继承同一个原型对象时，他们才是属于同一个类的实例。
* */

/* Constructor 属性
   每一个函数的Prototype属性指向的对象都包含唯一一个不可枚举属性constructor该属性的值是这个
   一个对象：他指向了它所在的构造函数
*  在Prototype属性指向的对象中存在预先定义好的constructor属性，每个构造函数的实例继承了这一属性，所以在不重写Prototype
*  对象的情况下，实例的constructor指向他们的构造函数
* */

function A(name) {
    this.name = name;
}
var a = new A();
console.log(a.constructor === A);