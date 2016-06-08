$(document).ready(function(){
    $("#hostmanger").click(function(){
        $(this).css('background-color','#44B549');
        $(this).css('color','white');
        $("#messageManger").css('background-color','white');
        $("#messageManger").css('color','black');
        $("#messageAnalyse").css('background-color','white');
        $("#messageAnalyse").css('color','black');
        setUrl('manger.html');
    });
    
    $("#messageManger").click(function(){
        $(this).css('background-color','#44B549');
        $(this).css('color','white');
        $("#messageAnalyse").css('background-color','white');
        $("#messageAnalyse").css('color','black');
        $("#hostmanger").css('background-color','white');
        $("#hostmanger").css('color','black');
        setUrl('message.html');
    });
    
    $("#messageAnalyse").click(function(){
        $(this).css('background-color','#44B549');
        $(this).css('color','white');
        $("#messageManger").css('background-color','white');
        $("#messageManger").css('color','black');
        $("#hostmanger").css('background-color','white');
        $("#hostmanger").css('color','black');
        setUrl('seller.html');
    });
    
    
});

function setUrl(url){
    document.getElementById("ifrTest").src=url;
}