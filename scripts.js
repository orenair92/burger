
			
/*$(document).ready(function() {
		var win_width = 0;
		win_width = document.documentElement.clientWidth;

		if(win_width < 992){
			burger();
			console.log(win_width, "0");
		}
});*/
var win_width = 0;
$(document).ready(function() {
	size_func();
	$(window).bind("resize", size_func);

function size_func(){
	
	win_width = document.documentElement.clientWidth;
	console.log(document.documentElement.clientWidth);
	if(win_width < 992){
		burger();
	}
}		
		
function burger(){

	var burger = $("#burger");
	var navbar = $("#navbar");

	//клик по внешней области
	$(document).click(function (e){ // событие клика по веб-документу
			if(navbar.hasClass("on")){
				if (!navbar.is(e.target) // если клик был не по нашему блоку
					&& !burger.is(e.target)
				    && navbar.has(e.target).length === 0) { // и не по его дочерним элементам
					$("#navbar, #burger").removeClass("on"); // скрываем его
					console.log("document");
				}
			}else{
				$("#navbar, #burger").addClass("on");	
			}
		});

	//нажатие по бургеру
		/*burger.click(function() {
			 $("#navbar").toggleClass("on");
			 $("#burger").toggleClass("on");
		 //navbar.slideToggle();
		 console.log("burger");

		});*/

		
		//dropdownmenu
		$("#toggle-menu li .arrow_box").click(function() {
			$(this).toggleClass("on");
			$(this).next().toggleClass("on");
			if($(this).parent("li").parent("#toggle-menu").attr("id")){
				$("#toggle-menu > li > .arrow_box").not(this).removeClass("on");
				$("#toggle-menu > li > .arrow_box").not(this).next().removeClass("on");
			}
		});
};
/* fixed-header*/
function fixed(){

	var header = $(".header");
	var block_phone = $(".phone-head");
	var break_point_1 = 100;
	var old_scroll = 0, scroll = 0;

	$(window).on("scroll", function(e) {
		scroll = $(this).scrollTop();
		//fixed phone
			if (scroll > break_point_1) {
				if(old_scroll < scroll){
							//down
							block_phone.addClass("fixed");
							header.removeClass("fixed");
						}else{ 
							//up
							block_phone.removeClass("fixed");
							header.addClass("fixed");
						}
				
			} else {
				block_phone.removeClass("fixed");
				header.removeClass("fixed");
			}
		/**/
		old_scroll = scroll;
	});
	
}
/* fixed-header*/
});
