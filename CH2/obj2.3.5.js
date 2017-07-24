//¼ÄÉúÊ½¼Ì³Ð
var book = {
    name: 'js book',
    alikeBook: ['css book','html book']
};
function createBook(obj) {
    var o = new inheritObject(obj);
    o.getName = function () {
        console.log(name);
    };
    return o ;
}
