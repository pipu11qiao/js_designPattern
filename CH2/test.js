//-->> Created by pipu on 2017/2/3.
function F() {
    this.name = 'lala';
}
F.prototype = {
    getName: function() {
        return this.name;
    }
};
var f = new F();
console.log(f.constructor);
console.log(f.prototype);