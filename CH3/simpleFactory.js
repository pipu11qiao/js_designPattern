//-->> Created by pipu on 2017/2/3.
//�򵥹���ģʽ����̬������������һ�����������������ĳһ����Ʒ�����ʵ������Ҫ��������ͬһ�����
var LoginAlert = function (text) {
    this.content = text;
};
LoginAlert.prototype.show = function() {
    console.log('��ʾ��ʾ��');
};
var usernameAlert = new LoginAlert('�û������ܶ���16����ĸ������');
usernameAlert.show();
var passwordAlert = new LoginAlert('������ط�����ȷ');
passwordAlert.show();

var popupFactory = function(type) {
    switch (type) {
        case 'alert':
            return new LoginAlert();
        case 'confirm':
            return new LoginConfirm();
        case 'prompt':
            return new LiginPrompt();
    }
};