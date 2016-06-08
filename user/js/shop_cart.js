var shopTime=0;
function shop_cart(shopTime) {
	//show购物车
  // $(".shop_cart").mouseover(function() {
  //   $(this).animate({
  //     right: 0},
  //     1000);
  // });

  // $(".shop_cart").mouseout(function() {
  //   $(this).animate({
  //     right: '-60px'},
  //     1000);
  // });

  $(".shop_cart").click(function() {
  	if(shopTime==0) {
  		shopTime=1;
  		$(".shop_cart").animate({
  			  right:'475px'
  			},1000);
  		$(".wrap").animate({
  		  right:'0'
  		},1000);
  }
  else {
  	shopTime=0;
  	$(".shop_cart").animate({
  		  right:'-60px'
  		},1000);
  	$(".wrap").animate({
  	  right:'-475px'
  	},1000);
  }
  });

  //购物车选择
  	//单独选择某一个
    $(document).on("click","input[name='check_item']",function(){
          var index=$("input[name='check_item']").index(this);
          $("input[name='check_item']").eq(index).toggleClass("checked");//伪复选
        });
  	//全选
  	$("#check_all,#box_all").click(function(){
       $("input[name='check_item']").attr("checked",$(this).attr("checked"));
  	 $("input[name='check_item'],#check_all,#box_all").toggleClass("checked");
  	});


    //添加造型师
    $(".col-xs-3 .info h3").click(function() {
      $(".c_list ul").append(
        "<li>"
            +"<table>"
                +"<tr>"
                    +"<td width='15%'><img src='img/1.jpg' width='52' height='44'></td>"
                      +"<td width='65%'>"
                        +"<p class='name'>徐慧慧</p>"
                          +"<p>￥<span class='lse'>198.00</span></p>"
                      +"</td>"
                      +"<td width='10%' valign='middle'><a href='#'' class='del'>删除</a></td>"
                      +"<td width='10%'> <input type='checkbox' class='checkbox'  name='check_item' id='check_item'></td>"
                  +"</tr>"
              +"</table>"
            +"</li>"
        );

      //购物特效
      addProduct(event);

      var name=$(this).parent().prev().find(".zxs-name").html();
      var price=$(this).parent().prev().find(".zxs-money").html();
      $(".c_list ul .name:last").html(name);
      $(".c_list ul .lse:last").html(price);
      var sum=$(".cart_bg .ff5").html()*1.0+price*1.0;
      $(".cart_bg .ff5").html(sum);
    });
    

    //删除造型师
    $(document).on("click",".wrap .del",function(){
       $(this).parent().parent().parent().parent().parent().remove();

       var price=$(this).parent().parent().find(".lse").html();
       var sum=$(".cart_bg .ff5").html()*1.0-price*1.0;
       $(".cart_bg .ff5").html(sum);
    });


}

function addProduct(event) {
 var offset = $('.shop_cart').offset(), flyer = $('<img class="u-flyer" src="img/buy.png"/>');
 flyer.fly({
   start: {
     left: event.pageX,
     top: event.pageY
   },
   end: {
     // left: 1323,
     left: 1350,
     top: 211,
     width: 20,
     height: 20
   }
 });
}
function chart() {
        $('.col-xs-3 .info p').on('click', function(e){
          var name=$(this).parent().prev().find(".zxs-name").html();
          var reallyname='';
          for(var i=0;i<name.length;i++) {
            if(name[i]=="-")
               break;
            reallyname+=name[i];
          }

          e.preventDefault();
          
          // jPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
          //     if( r ) alert('You entered ' + r);
          // });  
          $.jAlert({
              'title':reallyname, 
            'content':'who do you talk with?', 
          'btns': [
                {'text':'Close', 'theme':'blue'}
              ]
      });
          // <input class="input-xlarge" id="focusedInput" type="text" value="在此输入......">

  });
}
$(document).ready(function(){
	shop_cart(shopTime);
  chart();
});




