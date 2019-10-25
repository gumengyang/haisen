//专门负责请求页头的HTML片段和页头的css文件
$(function(){
    $.ajax({
        url:"footer.html",
        type:"get",
        //data:{},//不用写，因为请求文件不带参数
        //所以，返回的是HTML片段，不是json
        //dataType:"json",//不用写
        //当请求成功后
        success:function(result){
            // console.log(result);
            //用result获得HTML片段创建新<header>元素代替id为header的空<header>元素
            $(result).replaceAll("#footer");
            //动态创建一个<link>元素引用header.css，并将<link>自动添加到<head>元素中
            $(`<link rel="stylesheet" href="../css/footer.css">`)
            .appendTo("head");
        }
    })
})