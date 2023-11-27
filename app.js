//1����express
const express = require('express')
const app = express()
//22������Ҫ�İ�
const joi = require('joi')


//2����cors����
const cors = require('cors')
//3���ý��������ݵ��м��z,ע�⣺����м��ֻ�ܽ���application/x-www-form-urlencodeed��ʽ�����ݵ��м��
app.use(
    express.urlencoded({extended:false})
)

/*5����2��·���ļ��У�
router�����·�ɶ�Ӧ��ϵ����
router_handle�����·�ɶ�Ӧ�Ĵ�������*/

//19��·��֮ǰ��װres.cc()����
app.use((req,res,next)=>{
    res.cc=function(err,status = 1){
        res.send({
            status,
            Message:err instanceof Error ? err.message :err,
        })
    }

    next()
})

//6���벢ʹ��·��ģ��
const userRouter = require('./router/user',)
//����user_routerǰ����Ҫ��/api��
app.use('/api',userRouter)

//22��app.js�ж�����󼶱���м��
app.use((err, req, res, next) => {
    if(err instanceof joi.ValidationError) {
        return res.cc(err);
    }
    res.cc(err);
});




/*7��postman�ϲ�����user·���Ƿ�������
ע�����û�
router.post('/reguser',(req,res)=>{
    res.send('reguser OK')})
��¼
router.post('/login',(req,res)=>{
    res.send('login OK')})
*/

//4����
app.listen(3070,()=>{
    console.log('running at http://127.0.0.1:3070')
})