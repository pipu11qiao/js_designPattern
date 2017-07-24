//-->> Created by pipu on 2017/2/6.
//将一个复杂对象的构件层与其表示层相互分离，同样的构建过程可采用不同的表示。
// example

var Human = function(param) {
    //技能
    this.skill = param && param.skill || '保密';
    this.hobby = param && param.hobby || '保密';
};
// 类人原型方法
Human.prototype = {
    getSkill: function() {
        return this.skill;
    },
    getHobby: function() {
        return this.hobby;
    }
};
// 实例化姓名类
var Named = function (name) {
    var that = this;
    //构造器
    //构造函数解析姓名的姓与名
    (function(name,that) {
        that.wholeName = name;
        if(name.indexOf('') > -1) {
            that.FirstName = name.slice(0,name.indexOf(' '));
            that.lastName = name.slice(name.indexOf(' '));
        }
    })(name,that)

    this.wholeName = name;
    if(name.indexOf('') > -1) {
        this.FirstName = name.slice(0,name.indexOf(' '));
        this.lastName = name.slice(name.indexOf(' '));
    }

};

//实例化职位
var Work = function(work) {
    var that = this;
    (function(work,that) {
        switch (work) {
            case 'code':
                that.work = '工程师';
                that.workDescript = '每天沉醉于编程';
                break;
            case 'UI':
            case 'UE':
                that.work = '设计师';
                that.workDescript = '设计更是一种艺术';
                break;
            case 'teach':
                that.work = '教师';
                that.workDescript = '分享也是一种快乐';
                break;
            default :
                that.work = work;
                that.workDescript = '对不起，我们还不清楚您所选择职位的相关描述';
        }
    })(work,that)
};
Work.prototype.changeWork = function(work) {
    this.work = work;
};
Work.prototype.changeDescript = function(setence) {
    this.workDescript = setence;
};

/*
* 应聘者建造
* 参数name: 姓名（全名）
* 参数work: 期望职位
* */
var Person = function(name,work) {
    //创建应聘者缓存对象
    var _person = new Human();
    _person.name = new Named(name);
    _person.work = new Work(work);
    return  _person;
};
var pipu = Person('pipu qiao','code');
console.log(pipu);
console.log( pipu.name.constructor);
