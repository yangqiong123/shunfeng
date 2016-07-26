$(function(){
	$('.personal').on('click',function(){
		$(this).addClass('btom');
		$('.company').removeClass('btom');
	});
	$('.company').on('click',function(){
		$(this).addClass('btom');
		$('.personal').removeClass('btom');
	});

// 用户名检查
	$('#userName').on('focus',function(){
		$(this).next().html('请输入手机号');
	}).on('blur',function(){
		var $userName = $(this).val();
		if(/^1\d{10}$/.test($userName)){
			$(this).next().hide();
			//$(this).css('borderColor','#cdcdcd')
		}else{
			$(this).next().html('请输入正确手机号').css('color','#ff4800');
			//$(this).css('borderColor','#ff4800')
		}
	});

// 密码验证 /^\w{6,20}$/
	$('#password').on('focus',function(){
		$(this).next().html('6-20位字符，可以使用字母、数字、下划线。不建议使用纯数字或者字母组合。')
	}).on('blur',function(){
		var $password = $(this).val();
		if(/^\w{6,20}$/.test($password)){
			if(/^[0-9]*$/.test($password) || /^[A-Za-z]+$/.test($password)){
				$(this).next().html('密码太简单，建议使用字母数字下划线组合').css('color','#cdcdcd');
				//$(this).css('borderColor','#cdcdcd');
			}else{
				$(this).next().hide();
			}
		}else{
			$(this).next().html('密码只能为6-20位字母数字下划线组合').css('color','#ff4800');
			//$(this).css('borderColor','#ff4800');
		}
	})

// 确认两次密码一致
	$('#checkedword').on('blur',function(){
		if($(this).val()!==$('#password').val()){
			$(this).next().html('两次密码不一致').css('color','#ff4800');
			//$(this).css('borderColor','#ff4800');
		}else{
			$(this).next().hide();
			//$(this).css('borderColor','#cdcdcd');
		}
	})

// checkbox绑定点击事件
	$('#checked').on('click',function(){
		if($(this).prop("checked")){
			$('.gou').hide();
		}else{
			$('.gou').show();
		}
	})



})