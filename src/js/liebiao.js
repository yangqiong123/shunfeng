$(function(){
	$('.categories').hover(function(){
		$('.allSort').show();
	},function(){
		$('.allSort').hide();
	});

	// 右边菜单的显示与隐藏
	$('.catitem h3').on('click',function(){
		$(this).parent('.catitem').toggleClass('change');
	})

})