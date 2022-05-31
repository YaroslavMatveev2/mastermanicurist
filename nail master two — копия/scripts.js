const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar__links__container');

function slider(){
	burger.addEventListener('click', ()=>{
		burger.classList.toggle('toggle');
		nav.classList.toggle('navbar-active');
	})
}

 
$(document).ready(function(){
	$(".navbar__links__container").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1100);
	});
});

$(document).mouseup(function (e) {
    var container = $(".burger");
	var hideDiv = $(".navbar__links__container");
    if (container.has(e.target).length === 0){
        hideDiv.removeClass('navbar-active');
		container.removeClass('toggle');
    }
});

slider();