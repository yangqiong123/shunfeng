$(function(){
	$('.loginnav').on('click','li',function(){
		$('.loginnav li').removeClass('curr');
		$(this).addClass('curr');
		$('.loginco ul').hide();
		$('.loginco ul').eq($(this).index()).show();

	})

	// 登录验证
	// 用户名验证
	// /^1\d{10}$/  /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
	$('.user').on('keyup',function(){
		if(/^1\d{10}$/.test($(this).val()) || /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test($(this).val()) ){
			$(this).next().attr('src','../img/../img/icon1.jpg');
		}else{
			
			$(this).next().attr('src','../img/../img/icon.jpg');
		}

	});

	// 手机验证
	$('#userName').on('keyup',function(){
		if(!/^1[34578]\d{9}$/.test($(this).val())){
			$(this).next().attr('src','../img/../img/icon.jpg');
		}else{
			$(this).next().attr('src','../img/../img/icon1.jpg');
		}
	});

	//密码验证
	/*
			密码  
				长度小于20 大于8
				不能包含空格
		 	*/
	$('.pass').on('keyup',function(){
		if(!/^\S{8,20}$/.test($(this).val())){
			$(this).next().attr('src','../img/../img/icon.jpg');
		}else{
			$(this).next().attr('src','../img/../img/icon2.jpg');
		}
	});


	// 提交按钮的事件绑定
	// $('.user').val()!=="" && $('.use').attr('src')!== '../img/../img/icon.jpg'

	
	$('.login-btn').on('click',function(){
		if( $('.user').val()!=="" && $('.use').attr('src')!== '../img/../img/icon.jpg'){

		}else{
			alert('您输入有问题，请重新输入帐号密码');			
		}
		return false;
	})





})