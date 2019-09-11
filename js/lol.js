
$('.nav-left').mouseover(function (){
    $('.nav-bar').css('display' , "block" );
});

$('.nav-bar').mouseleave(function (){
    $('.nav-bar').css('display' , "none" );
});

$('.nav-right').mouseover(function (){
    $('.head-login').css('display' , "block" );
});

$('.head-login').mouseleave(function (){
    $('.head-login').css('display' , "none" );
});

<!--轮播-->
var width = $('.Carousel-img img').width();

$('.Carousel-img').css('width' ,width * $('.Carousel-img img').length + 'px' );

var n = 0;
var time = setInterval(carousel , 2000);
$('.title span').mouseover(function() {
    clearInterval(time)
    n = $(this).index();
    change();
});

$('.title span').mouseout(function() {
    time = setInterval(carousel , 2000);
});

function carousel() {
    n++;
    if(n === $('.Carousel-img img').length - 1) {
        $('.title span').eq(0).addClass('title span1').siblings().removeClass('title span1');
    }
    if(n === $('.Carousel-img img').length) {
        $('.Carousel-img').css('marginLeft' , 0);
        n=1;
    };
    change();
}

function change() {
    $('.Carousel-img').animate({
        marginLeft: -n * width + 'px'
    });
    $('.title span').eq(n).addClass('title span1').siblings().removeClass('title span1');                                                         
}
<!--轮播-->

<!--综合信息-->
function changeElement(index) {
    var contentList = document.getElementsByClassName('content-list');
            for (var i = 0; i < contentList.length; i++) {
                contentList[i].style.display = 'none';
            }
            contentList[index].style.display = 'block';
}

<!--综合信息-->

<!--热门活动-->
function hotmove(index) {
    var contentList = document.getElementsByClassName('cad1');
            for (var i = 0; i < contentList.length; i++) {
                contentList[i].style.display = 'none';
            }
            contentList[index].style.display = 'block';
}

<!--热门活动-->

<!--更新提示-->
$('.new-hero-end').mouseover(function() {
    $('.new-skin').css('display' , 'block')
});

$('.new-skin').mouseleave(function() {
    $('.new-skin').css('display' , 'none')
});
<!--更新提示-->

<!--赛事中心-->
function cut(index) {
    var contentList = document.getElementsByClassName('race');
    var play = document.getElementsByClassName('player');
            for (var i = 0; i < contentList.length; i++) {
                contentList[i].style.display = 'none';
            }
            contentList[index].style.display = 'block';
}

function changeElement(index) {
    var contentList = document.getElementsByClassName('ul2');
            for (var i = 0; i < contentList.length; i++) {
                contentList[i].style.display = 'none';
            }
            contentList[index].style.display = 'block';
}
<!--赛事中心--> 