//16在router_handle/user.js中导入数据库操作模块
const db = require('../db/index.js')
//17密码加密router_handle/user.js中导入bcryptjs
const bcrypt = require('bcryptjs')


//8.1注册新用户的处理函数
exports.regUser=(req,res)=>{
    //15.1获取客户端提交到服务器的用户信息
    const userInfo = req.body
    console.log(userInfo)
    //15.2对表单中的数据进行合法性的校验
/*    if(!userInfo.username || !userInfo.passward){
        //return res.send({status:1, message:'username and password is illegal!'})
        return res.cc('username and password is illegal!')
    }
*/
    //16.1定义sql语句，查询用户名是否被占用
    const sqlStr = 'SELECT * FROM users.ev_user where username=?'
    db.query(sqlStr,userInfo.username,(err,results)=>{
        //执行SQL语句失败
    if(err){
        //return res.send({status:1,message:err.message})
        return res.cc(err)
    }
    //判断用户名是否被占用
    if(results.length > 0){
        //return res.send({status:1, message:'this username is existed.' })
        return res.cc('this username is existed.')
    }
    //17.1密码加密
    userInfo.passward=bcrypt.hashSync(userInfo.passward,10)
    //18插入新用户的sql执行语句
    const sql = 'insert into ev_users set ?'
    db.query(sql,{username:userInfo.name,passward:userInfo.passward},(err,results)=>{
        //18.1判断sql语句是否执行成功
        if(err){
            //return res.send({status:1,message:err.message})
            return res.cc(err)
        }
        if(results.affectedRows !==1 ){
            //return res.send({status:1, message:'shibai.' })
            return res.cc('shibai.')
        }
        //res.send({status:0, message:'chenggong.' })
        return res.cc('chenggong.',0)
    })      





    })



    res.send('reguser OK')
}


//8.2用户登录的处理函数
exports.login=(req,res)=>{
    res.send('login OK')
}