$(document).ready(function(){
	active = false;
	$("#trigger-side").on('click',function(){
		if(!active){
			$("#side-container").animate({'right':'+=300'},500, 'linear')
			$(this).animate({'right':'+=300'},500,'linear').css({ WebkitTransform: 'rotate( 180deg)'});
			$("#body-mask").show();
			active = true ; 			
		}else{
			$("#side-container").animate({'right':'-=300'},300, 'linear')
			$(this).animate({'right':'-=300'},500,'linear').css({ WebkitTransform: 'rotate( 0deg)'});
			$("#body-mask").hide();
			active = false;
		}
	})
})