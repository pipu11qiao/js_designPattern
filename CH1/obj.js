//-->> Created by pipu on 2017/1/26.
Function.prototype.method = function(name,fun) {
    this[name] = fun;
    return this;// ��ʽ����
};

var CheckObj = function() {};
CheckObj.method('checkName',function() {
    //��֤����
    return this;//�Ӷ�����ʽ����
}).method('checkGenda',function() {
    //��֤�Ա�
    return this;
}).method('checkEmail',function() {
    //��֤����
    return this;
});
