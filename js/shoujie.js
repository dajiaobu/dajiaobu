
var width = $('.banner img').width();
console.log(width)
$('.banner').css('width', width * $('.banner img').length + 'px');
        
var n = 0;
var timer = setInterval(tab, 1000);

$('.tab span').mouseover(function() {
    clearInterval(timer);
    n = $(this).index();
    changeStyle();
});

$('.tab span').mouseout(function() {
    timer = setInterval(tab, 1000);
});

function tab() {
    n++;
    if (n === $('.banner img').length) {
        $('.banner').css('margin-left', 0);
            n = 1;
    }
    changeStyle();
 }

function changeStyle() {
    $('.banner').animate({
        marginLeft: - n * width + 'px'
    });
    $('.tab span').eq(n).addClass('activied').siblings().removeClass('activied');
}

$(".present ul li").hover(function(){
    $(this).stop(true).animate({width:"600px"},1000).siblings().stop(true).animate({width:"100px"},1000);
});