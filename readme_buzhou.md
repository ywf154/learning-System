#初始化#
1、运行npm init -y命令创建包管理
2、npm i express@4.17.1(特定版本)
3新建app.js作为整个项目的入口文件
4配置cors跨域
    配置解析表单数据的中间件

5创建2个路由文件夹：
    router（存放路由对应关系）、router_handle（存放路由对应的处理函数）
6初始化用户路由模块
    user.js
    注册和登录
7在app.js中导入user路由,并测试是否正常

8在router_handle文件夹中创建user.js：注册和登录的处理函数
9在router文件夹中导入用户路由处理函数对应的模块，从路由模块中把处理函数抽离到router_handle中
10测试7

11在MySQL中创建用户信息表
12运行npm i mysql@2.18.1  安装MySQL包
13创建文件夹db,内创建index.js文件
14 index.js：导入mysql模块并用mysql.createPool方法来创建一个数据库的连接对象
15检查用户表单信息是否合法
16在router_handle/user.js中导入数据库操作模块
17密码加密router_handle/user.js中导入bcryptjs@2.4.3
18插入新用户的sql执行语句
19封装错误信息的中间处理函数
20@hapi/joi@17.1.0定义验证规则
21表单验证@escook/express-joi自动对表单进行验证
22在app.js中定义错误级别的中间件
