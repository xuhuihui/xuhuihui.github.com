$(document).ready(function(){
    //var id=$(".bb").attr("id");
    $(".bb").click(function(){
        $(".replyBox").hide();
        $(this).parent().parent().find(".replyBox").show();
        //$(".replyBox").show();
    });
    /*$(".message_list .message_item").click(function(){
        var index=$(".message_list .message_item").index(this);
       //$(this).parent().css({"color":"red"}); 
        //$(".replyBox").show();
        alert(index);
    });*/
    
    $(".close").click(function(){
        $(".replyBox").hide();
    });
   $(".enterbox").click(function(){
       if(document.getElementById('textReply').value=='')
           alert("没有信息发送");
       else
            alert("已发送");    
        window.location.reload(true);
       
    });
    $(".nextPage").click(function(){
        function pageAdd(x){
            x++;
            alert(x);
        }
        alert(x);
        window.location.reload(true);
    });
    
}); 


/*function res() { 
//获取输入值(myname和mymail是两个文本框的id) 
var uname = document.getElementById("myname").value; 
var umail = document.getElementById("mymail").value; 

//数据库连接对象 
var con = new ActiveXObject("ADODB.Connection"); 
//连接字符串 
var str = "DRIVER={SQL SERVER};SERVER=(local);uid=sa;pwd=123456;database=xslt"; 
//打开数据源 
con.Open(str); 
//sql语句 
var sql = "insert into xslt(name,mail) values(''" + uname + "'',''" + umail + "'')"; 
try { 
//执行sql语句 
con.Execute(sql); 
//关闭连接 
con.Close(); 
//转向成功页面 
window.location.href = "/uploadfile/201101/18/AF93632542.gif" /> } 
catch (e) { 
alert(e); 
} 
}*/