var name='';
var shopTime=0;
var starTime=0;
function getInfo() {
    $.ajax({
                type: "POST", //提交方式  
                data:{select_name:name},
                url: "php/buy.php",
                 error: function(){  
                 alert('Error loading XML document');  
             },  
             success: function(data){
                 text(data);
             }  
            });
}


function text(data){
   members=data.split('^');
   zxs(members);
}


function showImg() {
  $(".first-smallbox img").css("border","3px solid #FCCF39");
  //实例图片
  $(".smallbox img").mouseover(function() {
  	$(".smallbox img").css("border","0");
  	$(this).css("border","3px solid #FCCF39");
  	var path=$(this).attr('src');
  	$(".bigbox img").attr('src', path);
  });
}

function getName() {
	var request = {
	QueryString : function(val) {
	var uri = window.location.search;
	var re = new RegExp("" +val+ "=([^&?]*)", "ig");
	return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null);
	  }
	}
	var rt = request.QueryString("inputStr");
  rt=decodeURI(rt);
	$(".right .zxs-name").html(rt);
}

function shop_cart(shopTime) {
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
    $(".container .right .wait").click(function() {
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

      var price=$('.container .right .pay-number').html();
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

function zxs(members) {
  var number=0;
     for(var i=0;i<6;) {
      $('.container .right .zxs-introduce').html(members[i++]);
      
      $('.container .right .zxs-job').html('职称：'+members[i++]);
      $('.container .right .zxs-pay').html('价格：￥'+members[i++]);
      $('.container .right .zxs-volume').html('交易量：'+members[i++]+'笔');
      $('.container .right .zxs-good').html('好评率：'+members[i++]+'%');
      $('.container .right .zxs-believe').html('信用值：'+members[i++]);
      if(members[i]==0) {
        $('.container .right .online').css('background','#B4AEAE');
        $('.container .right .online').html('离线');
      }
      else {
        $('.container .right .online').css('background','lightgreen');
        $('.container .right .online').html('在线');
      }
    }

    for(var i=7;i<members.length-1;) {
      $(".container .comment-2").append(
        "<div class='col-xs-1'><img src='img/zxs.jpg' class='img-circle'></div>"
        +"<div class='col-xs-11'>"
          +"<li class='comment-item'>"
            +"<p class='name'></p>"
            +"<p>"
              +"<span class='comment-content'></span>"
              +"<span class='time'></span>"
              +"<div class='clear'></div>"
            +"</p>"
          +"</li>"
        +"</div>"
        );
      $(".container .comment-2 .name:last").html("评论者："+members[i++]);
      $(".container .comment-2 .comment-content:last").html(members[i++]);
      $(".container .comment-2 .time:last").html(members[i++]);
      number++;
    }
    $(".comment-number").html('累计评论：'+number+'条');
}

$(document).ready(function(){
	showImg();
	getName();
	name=$(".right .zxs-name").html();
  getInfo();
  shop_cart(shopTime);

  $('.container .right .fa-star').click(function() {
    if(starTime==0) {
       $(this).css('color', 'red');
       starTime=1;
     }
    else {
      $(this).css('color', '#7F7D7D');
      starTime=0;
    }
  });

});
