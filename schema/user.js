//20导入定义验证规则的包
const joi = require('joi')
//定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(10).required()
//string()是字符串  alphanum()只能包含0-9，a-z,A-Z   min(1) 最小长度max(10)最大长度 required()必填项
const passward = joi.string().pattern(/^[\S]{6,12}$/).required()
//pattern(/^[\S]{6,12}$/)正则表达式,   [\S]是非空   {6,12}是长度6-12之间

//21定义验证注册和登录表单数据的规则对象
exports.reg_login_schema = {
    body:{
        username,
        passward,
    },
}