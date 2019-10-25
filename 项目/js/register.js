$(function(){
   $("#phone").on("input",function(){
       var phone=$(this).val();
       if(/^1[3-9]\d{9}$/.test(phone)){
           $("#phone").next().find(".success").show();
           $("#phone").next().find(".err").hide();
       }else{
            $("#phone").next().find(".success").hide();
            $("#phone").next().find(".err").show();
       }
   }) 
   $("#upwd").on("input",function(){
       var upwd=$(this).val();
       if(/^[a-z0-9]{6,12}$/.test(upwd)){
       $("#upwd").next().find(".success").show();
       $("#upwd").next().find(".err").hide();
      }else{
       $("#upwd").next().find(".err").show();
       $("#upwd").next().find(".success").hide();
      }
   })
})
