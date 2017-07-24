//ԭ原型是继承
function inheritObject(o) {
    // 声明一个过渡函数对象
    function F() {}
    F.prototype = o;
    return new F();
}

var book = {
    name: 'js book',
    alikeBook: ['css book','html book']
};
var newBook = inheritObject(book);
newBook.name = 'ajax book';
newBook.alikeBook.push('js book');
console.log(newBook);
// 值类型属性被复制，引用类型被公用