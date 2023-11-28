//20���붨����֤����İ�
const joi = require('joi')
//�����û������������֤����
const username = joi.string().alphanum().min(1).max(10).required()
//string()���ַ���  alphanum()ֻ�ܰ���0-9��a-z,A-Z   min(1) ��С����max(10)��󳤶� required()������
const passward = joi.string().pattern(/^[\S]{6,12}$/).required()
//pattern(/^[\S]{6,12}$/)������ʽ,   [\S]�Ƿǿ�   {6,12}�ǳ���6-12֮��

//21������֤ע��͵�¼�����ݵĹ������
exports.reg_login_schema = {
    body:{
        username,
        passward,
    },
}