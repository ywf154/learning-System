// 5����2��·���ļ��У�
// router�����·�ɶ�Ӧ��ϵ����
//router_handle�����·�ɶ�Ӧ�Ĵ�������

//5.1����·��
const express = require('express')
const router = express.Router()


//9.1��router�ļ����е����û�·�ɴ�������Ӧ��ģ��
const router_handler = require('../router_handler/user')


//20������֤���ݵ��м��
const expressJoi = require('@escook/express-joi')
//������Ҫ����֤�������
const {reg_login_schema} = require('../schema/user')



//9.2          ��·��ģ���аѴ��������뵽router_handle��
router.post('/reguser',expressJoi(reg_login_schema),router_handler.regUser)
                    //^^^^^^^^^^��20������^^^^^^^^^^
                                                    /*5.3ע�����û�(��ν�����)
                                                    router.post('/reguser',(req,res)=>{
                                                        res.send('reguser OK')
                                                    })*/
//9.2
router.post('/login',router_handler.login)
                                                    /*5.4��¼(��ν�����)
                                                    router.post('/login',(req,res)=>{
                                                        res.send('login OK')
                                                    })*/
//5.2����
module.exports = router