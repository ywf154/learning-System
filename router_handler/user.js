//16��router_handle/user.js�е������ݿ����ģ��
const db = require('../db/index.js')
//17�������router_handle/user.js�е���bcryptjs
const bcrypt = require('bcryptjs')


//8.1ע�����û��Ĵ�����
exports.regUser=(req,res)=>{
    //15.1��ȡ�ͻ����ύ�����������û���Ϣ
    const userInfo = req.body
    console.log(userInfo)
    //15.2�Ա��е����ݽ��кϷ��Ե�У��
/*    if(!userInfo.username || !userInfo.passward){
        //return res.send({status:1, message:'username and password is illegal!'})
        return res.cc('username and password is illegal!')
    }
*/
    //16.1����sql��䣬��ѯ�û����Ƿ�ռ��
    const sqlStr = 'SELECT * FROM users.ev_user where username=?'
    db.query(sqlStr,userInfo.username,(err,results)=>{
        //ִ��SQL���ʧ��
    if(err){
        //return res.send({status:1,message:err.message})
        return res.cc(err)
    }
    //�ж��û����Ƿ�ռ��
    if(results.length > 0){
        //return res.send({status:1, message:'this username is existed.' })
        return res.cc('this username is existed.')
    }
    //17.1�������
    userInfo.passward=bcrypt.hashSync(userInfo.passward,10)
    //18�������û���sqlִ�����
    const sql = 'insert into ev_users set ?'
    db.query(sql,{username:userInfo.name,passward:userInfo.passward},(err,results)=>{
        //18.1�ж�sql����Ƿ�ִ�гɹ�
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


//8.2�û���¼�Ĵ�����
exports.login=(req,res)=>{
    res.send('login OK')
}