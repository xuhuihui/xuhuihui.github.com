$(document).ready(function(){

	$(".col-xs-3 .img").click(function(){
		var name=$(this).parent().find(".zxs-name").html();
		var reallyname='';
		for(var i=0;i<name.length;i++) {
		  if(name[i]=="-")
		     break;
		  reallyname+=name[i];
		}
		window.open("buy.html?inputStr=" + reallyname);//传入参数	      
	  });

});


