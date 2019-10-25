//引入第三方模块
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
//引入用户路由器
const userRouter=require('./routes/user.js');
//创建web服务器
var app=express();
//监听端口
app.listen(8080);
//解决跨域问题，统一为每个请求先修改响应头信息
app.use(cors(
    {//客户端浏览器地址变化，origin也要修改成响应地址吗，也可以修改成*，适用所有地址
        origin:["http://127.0.0.1:5501","http://localhost:5501"],
        credentials:true
    }
));
//使用body-par
//托管静态资源到public目录下
app.use(express.static('public'));
//挂载路由
app.use("/user",userRouter);