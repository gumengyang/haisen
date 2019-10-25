// 登录接口
$("button").click(function(){
    var phone=$("#phone").val();
    var upwd=$("#upwd").val();
    console.log(phone,upwd);
    $.ajax({
        url:"http://127.0.0.1:8080/user/login",
        type:"get",
        data:{phone:phone,upwd:upwd},
        dataType:"json",
        success:function(result){
            if(result.code==1){
                alert("登陆成功");
                location.href="index.html";
            }else{
                alert("登录失败");
                // location.href="login.html";
            }
        }
    })
})