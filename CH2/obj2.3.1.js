//��ʽ�̳У���������
function SuperClass() {
    this.superValue = true;
}
SuperClass.prototype.getSuperValue = function() {
    return this.superValue;
};

function SubClass() {
    this.subValue = false;
}

SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function() {
    return this.subValue;
};
//�ڶ������ԭ��prototype�������˵�һ�����ʵ����

var sub = new SubClass();

console.log(sub);