//-->> Created by pipu on 2017/2/6.
//Object.create() 方法创建一个指定原型和若干个指定属性的对象。
// Object.create(proto,[propertiesObject])
// param | proto 一个对象，作为新创建对象的原型

// Shape superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved');
};

// Rectangle subclass
function Rectangle() {
    Shape.call(this);//call super constructor
}
// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;