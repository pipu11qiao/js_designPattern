//-->> Created by pipu on 2017/1/26.
//��������İ�ȫģʽ
var Book = function(title,time,type) {
    if(this instanceof Book) {
        this.title = title;
        this.time = time;
        this.type = type;
    }else {
        return new Book(title,time,type)
    }
};

var book1 = new Book('lala','23','alal');
var book2 = Book('lala','23','alal');
console.log(book1,book2);

