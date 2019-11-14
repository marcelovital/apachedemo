(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js6').attr('src', (dpi>1) ? 'images/eingesetztes-bild-202.png' : 'images/eingesetztes-bild-101.png');
$('.js7').attr('src', (dpi>1) ? 'images/eingesetztes-bild-372.png' : 'images/eingesetztes-bild-186.png');

var a='data-src'; if($('.js8 .slide1').hasAttr('src')) { a='src'; } $('.js8 .slide1').attr(a, (dpi>1) ? 'images/unadjustednonraw_thumb_a19-1328.jpg' : 'images/unadjustednonraw_thumb_a19-664.jpg');
var a='data-src'; if($('.js8 .slide2').hasAttr('src')) { a='src'; } $('.js8 .slide2').attr(a, (dpi>1) ? 'images/unadjustednonraw_thumb_18e4-1328.jpg' : 'images/unadjustednonraw_thumb_18e4-664.jpg');
var a='data-src'; if($('.js8 .slide3').hasAttr('src')) { a='src'; } $('.js8 .slide3').attr(a, (dpi>1) ? 'images/unadjustednonraw_thumb_e7f-1328.jpg' : 'images/unadjustednonraw_thumb_e7f-664.jpg');};
if(!window.HTMLPictureElement){r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js9').attr('src', 'images/fb-47.png');
$('.js10').attr('src', 'images/fb-59.png');

}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
$('.c15').Stickyfill();
$('.js8 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true});
});