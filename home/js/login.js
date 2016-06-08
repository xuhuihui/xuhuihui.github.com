$(document).ready(function(){
    $(function(){
        $("#user-login").focus(function(){
            $("#userTip").text("");
        });
        $("#user-login").blur(function(){
           checkUser();
        });
      
        $("#pass").focus(function(){
            $("#passTips").text("");
        });
        $("#pass").blur(function(){
            checkPass();
        });
       
        $("#seePass").click(function()
        {
            if($(this).attr("class")=="glyphicon glyphicon-eye-close")
            {
                $(this).attr("class","glyphicon glyphicon-eye-open");
                $("#pass-1").val($("#pass").val());
                $("#pass").hide();
                $("#pass-1").show();
            }
            else{
                $(this).attr("class","glyphicon glyphicon-eye-close");
                $("#pass").val($("#pass-1").val());
                $("#pass").show();
                $("#pass-1").hide();
            }
        });
        
        $("#log").on("click",function(){
            if(checkUser()&&checkPass())
            {
                // alert("验证正确");
                var content=$("#user-login").val();
                if(content=='wyf123')
                  window.open("logged.html");
                else if(content=='office')
                  window.open("../localManger/boot.html");
                else if(content=='zxs123')
                  window.open("../zxs/stylist.html");
            }else{
                alert("请输入信息");
            }
        });
    });
});
function checkUser()
{
    var user=$("#user-login").val();
    if(user.length==0)
    {
        $("#userTip").text("*用户名长度为零");
        return false;
    }else{
        return true;
    }
}
function checkPass()
{
    if($("#pass").attr("hidden")=="hidden")
    {
        $("#pass").val($("#pass-1").val());
    }
    var pass1=$("#pass").val();
    if(pass1.length==0)
    {
        $("#passTips").text("*密码为空");
        return false;
    }else{
        return true;
    }
}