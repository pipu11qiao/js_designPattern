//构造函数继承
function SuperClass(id) {
    this.books = ['top','left','right','bottom'];
    this.id = id;
}
SuperClass.prototype.showBooks = function() {
    console.log(this.books);
};

function SubClass (id) {
    SubClass.call(this,id);
}

// `由于此方法没有涉及到继承，所以子类不能继承父类的方法。
