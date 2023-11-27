//1导入express
const express = require('express')
const app = express()
//22导入需要的包
const joi = require('joi')


//2配置cors跨域
const cors = require('cors')
//3配置解析表单数据的中间件z,注意：这个中间件只能解析application/x-www-form-urlencodeed格式的数据的中间件
app.use(
    express.urlencoded({extended:false})
)

/*5创建2个路由文件夹：
router（存放路由对应关系）、
router_handle（存放路由对应的处理函数）*/

//19在路由之前封装res.cc()函数
app.use((req,res,next)=>{
    res.cc=function(err,status = 1){
        res.send({
            status,
            Message:err instanceof Error ? err.message :err,
        })
    }

    next()
})

//6导入并使用路由模块
const userRouter = require('./router/user',)
//访问user_router前都需要加/api。
app.use('/api',userRouter)

//22在app.js中定义错误级别的中间件
app.use((err, req, res, next) => {
    if(err instanceof joi.ValidationError) {
        return res.cc(err);
    }
    res.cc(err);
});




/*7在postman上测试下user路由是否正常：
注册新用户
router.post('/reguser',(req,res)=>{
    res.send('reguser OK')})
登录
router.post('/login',(req,res)=>{
    res.send('login OK')})
*/

//4监听
app.listen(3070,()=>{
    console.log('running at http://127.0.0.1:3070')
})