//���캯���̳�
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

// `���ڴ˷���û���漰���̳У��������಻�ܼ̳и���ķ�����
