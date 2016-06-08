$(document).ready(function($){
	$(".slider li").click(function(){
		$(".slider li").css("color","#787d82");
		$(this).css("color","red");
	});
	$(".slider li:eq(0)").click(function(){
		$("#shop").show();
		$("#accountmange").hide();
		$("#order").hide();
		$("#feedback").hide();
		$("#income_expenses").hide();
	});
	$(".slider li:eq(1)").click(function(){
		$("#shop").hide();
		$("#accountmange").show();
		$("#order").hide();
		$("#feedback").hide();
		$("#income_expenses").hide();
	});
	$(".slider li:eq(2)").click(function(){
		$("#shop").hide();
		$("#accountmange").hide();
		$("#order").show();
		$("#feedback").hide();
		$("#income_expenses").hide();
	});
	$(".slider li:eq(3)").click(function(){
		$("#shop").hide();
		$("#accountmange").hide();
		$("#order").hide();
		$("#feedback").show();
		$("#income_expenses").hide();
	});
	$(".slider li:eq(4)").click(function(){
		$("#shop").hide();
		$("#accountmange").hide();
		$("#order").hide();
		$("#feedback").hide();
		$("#income_expenses").show();
	});
	$("#customservice span").click(function(){
		window.open("无");
	});
	$("#accountmange #choice .choice_text").click(function(){
		$("#accountmange #choice .choice_text").css("color","#787d82");
		$(this).css("color","red");
	});
	$("#accountmange #choice .choice_text:eq(0)").click(function(){
		$("#personal_info").show();
		$("#setimg").hide();
		$("#setphone").hide();
		$("#resetpw").hide();
	});
	$("#accountmange #choice .choice_text:eq(1)").click(function(){
		$("#personal_info").hide();
		$("#setimg").show();
		$("#setphone").hide();
		$("#resetpw").hide();
	});
	// $("#accountmange #choice .choice_text:eq(2)").click(function(){
	// 	$("#personal_info").hide();
	// 	$("#setimg").hide();
	// 	$("#setphone").show();
	// 	$("#resetpw").hide();
	// });
	$("#accountmange #choice .choice_text:eq(2)").click(function(){
		$("#personal_info").hide();
		$("#setimg").hide();
		$("#setphone").hide();
		$("#resetpw").show();
	});
	$("#order li:eq(0) .answer .yes").click(function(){
		$("#order li:eq(0) .answer .yesed").show();
		$("#order li:eq(0) .answer .yes").hide();
	});
	$("#order li:eq(1) .answer .yes").click(function(){
		$("#order li:eq(1) .answer .yesed").show();
		$("#order li:eq(1) .answer .yes").hide();
	});
	$("#order li:eq(2) .answer .yes").click(function(){
		$("#order li:eq(2) .answer .yesed").show();
		$("#order li:eq(2) .answer .yes").hide();
	});
	$("#order li:eq(3) .answer .yes").click(function(){
		$("#order li:eq(3) .answer .yesed").show();
		$("#order li:eq(3) .answer .yes").hide();
	});
	$("#order li:eq(4) .answer .yes").click(function(){
		$("#order li:eq(4) .answer .yesed").show();
		$("#order li:eq(4) .answer .yes").hide();
	});
	$("#order li:eq(0) .answer .no").click(function(){
		$("#order li:eq(0)").hide();
	});
	$("#order li:eq(1) .answer .no").click(function(){
		$("#order li:eq(1)").hide();
	});
	$("#order li:eq(2) .answer .no").click(function(){
		$("#order li:eq(2)").hide();
	});
	$("#order li:eq(3) .answer .no").click(function(){
		$("#order li:eq(3)").hide();
	});
	$("#order li:eq(4) .answer .no").click(function(){
		$("#order li:eq(4)").hide();
	});
	$("#feedback #choice .choice_text").click(function(){
		$("#feedback #choice .choice_text").css("color","#787d82");
		$(this).css("color","red");
	});
	$("#feedback #choice .choice_text:eq(0)").click(function(){
		$("#customer").show();
		$("#customerservice").hide();
	});
	$("#feedback #choice .choice_text:eq(1)").click(function(){
		$("#customer").hide();
		$("#customerservice").show();
	});
	$("#income_expenses #choice .choice_text").click(function(){
		$("#income_expenses #choice .choice_text").css("color","#787d82");
		$(this).css("color","red");
	});
	$("#income_expenses #choice .choice_text:eq(0)").click(function(){
		$("#income").show();
		$("#expenses").hide();
	});
	$("#income_expenses #choice .choice_text:eq(1)").click(function(){
		$("#income").hide();
		$("#expenses").show();
	});
})

