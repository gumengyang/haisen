//用户相关路由
const express=require("express");
var router=express.Router();
var pool=require('../pool.js');
//功能一：用户登录
router.get("/login",(req,res)=>{
    var phone=req.query.phone;
    var upwd=req.query.upwd;
    var sql="SELECT uid FROM hs_master WHERE phone=? AND upwd=md5(?)";
    pool.query(sql,[phone,upwd],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户名或密码错误"});
        }else{
            //获取当前登录用户的uid，并保存到session对象中
            // var uid=result[0].uid;
            // req.session.uid=uid;
            console.log(result);
            res.send({code:1,msg:"登陆成功"})
        }
    })
})
//功能二：用户注册
router.get("/reg",(req,res)=>{
    var phone=req.query.phone;
    var upwd=req.query.upwd;
    console.log(req.query);
    var sql="INSERT INTO hs_master VALUES (NULL,?,md5(?))";
    pool.query(sql,[phone,upwd],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"注册成功"})
        }else{
            res.send({code:-1,msg:"注册失败"})
        }
    })
})
//功能三：验证手机号是否以存在
router.get("/check",(req,res)=>{
    var u=req.query.phone;
    var sql="SELECT uid FROM hs_master WHERE PHONE=?";
    pool.query(sql,[u],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send({code:1,msg:"手机号已存在"})
        }else{
            res.send({code:-1,msg:"手机号可用"})
        }
    })
})
module.exports=router;