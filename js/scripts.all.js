(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){
    


    $('.menufix nav a').hover(function(){
        let ind = $(this).index() + 1;
        let indpl = $(this).index() + 2;
        let indmin = $(this).index();
        $('.menufix nav a').removeClass('za');
        $('.menufix nav a').removeClass('z');
        $('.menufix nav a:nth-child('+ ind +')').addClass('za');
        $('.menufix nav a:nth-child('+ indpl +')').addClass('z');
        $('.menufix nav a:nth-child('+ indmin +')').addClass('z');
        
    });
    $('.menufix').on('mouseleave', function(){
        $('.menufix nav a').removeClass('za');
        $('.menufix nav a').removeClass('z');
    });

    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        $('section.anchorp').each(function(){
            if($(this).offset().top <= scrolled){
                $('.menufix nav a').removeClass('active');
                $('.menufix nav').find('a[href="#'+ $(this).attr('id') +'"]').addClass('active');
            }
            
        });
    });

    $('.menufix nav a').on('click', function(event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top +50;
		$('html, body').animate({scrollTop: top}, 800);
		setTimeout(function() {
			window.location = id;
		}, 700);
});

$('.tab_item').hide();
$('.tab_item:first-child').show();

$('.tab_nav span').on('click', function(){
    $('.tab_nav span').removeClass('active');
    $(this).addClass('active');
    let id =  $(this).index() + 1;
    $('.tab_box .tab_item').hide();
    $('.tab_box .tab_item:nth-child('+ id +')').fadeIn();

});

});
},{}]},{},[1]);
