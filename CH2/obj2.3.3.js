//��ϼ̳�
function SuperClass(name) {
    //ֵ���͹�������
    this.name = name;
    this.books = ['top','left','right','bottom'];
}
SuperClass.prototype.getName = function() {
    console.log(this.name);
};

function SubClass (name,time) {
    SubClass.call(this,name);
    this.time = time;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getTime = function() {
    console.log(this.time);
};


