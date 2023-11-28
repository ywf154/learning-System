// 5创建2个路由文件夹：
// router（存放路由对应关系）、
//router_handle（存放路由对应的处理函数）

//5.1导入路由
const express = require('express')
const router = express.Router()


//9.1在router文件夹中导入用户路由处理函数对应的模块
const router_handler = require('../router_handler/user')


//20导入验证数据的中间件
const expressJoi = require('@escook/express-joi')
//导入需要的验证规则对象
const {reg_login_schema} = require('../schema/user')



//9.2          从路由模块中把处理函数抽离到router_handle中
router.post('/reguser',expressJoi(reg_login_schema),router_handler.regUser)
                    //^^^^^^^^^^第20步加入^^^^^^^^^^
                                                    /*5.3注册新用户(这段将剪走)
                                                    router.post('/reguser',(req,res)=>{
                                                        res.send('reguser OK')
                                                    })*/
//9.2
router.post('/login',router_handler.login)
                                                    /*5.4登录(这段将剪走)
                                                    router.post('/login',(req,res)=>{
                                                        res.send('login OK')
                                                    })*/
//5.2导出
module.exports = router