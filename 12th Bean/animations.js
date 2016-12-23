//animations for products
$('.learnmore').on('click', function() {
	$(this).hide();
	$(this).parent().parent().animate({
		height: '600px'
	}, 1000);
	$(this).parent().parent().siblings('.product').fadeOut(1000);
	$(this).parent().animate({
		position: 'static',
		transform: 'translate(0% 0%)'
	});
	$(this).siblings('.more').show();
	$(this).parent().siblings('.close').show();
});

$('.close').on('click', function(){
	$(this).hide();
	$(this).siblings().children('.learnmore').show();
	$(this).siblings().children('.more').hide();
	$(this).parent('.product').animate({
		height: '200px'
	}, 1000);
	$(this).parent().siblings().show();
});

$('nav a').on('click', function() {
	$(this).parent().siblings().children().removeClass('active');
	$(this).addClass('active');
});

//nav links show different parts of page
$('#contact-link').on('click', function() {
	$('#products-main').fadeOut(500);
	$('#events-main').fadeOut(500);
	$('#contact-main').fadeIn(1000);
});

$('#products-link').on('click', function() {
	$('#products-main').fadeIn(1000);
	$('#events-main').fadeOut(500);
	$('#contact-main').fadeOut(500);
});

$('#events-link').on('click', function() {
	$('#products-main').fadeOut(500);
	$('#events-main').fadeIn(1000);
	$('#contact-main').fadeOut(500);
});