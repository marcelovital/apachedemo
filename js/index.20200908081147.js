(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/logo-redhat-a-color-rgb-400.png' : 'images/logo-redhat-a-color-rgb-200.png');
$('.js2').attr('src', (dpi>1) ? 'images/eingesetztes-bild-372.png' : 'images/eingesetztes-bild-186.png');
$('.js3').attr('src', (dpi>1) ? 'images/flexibility_cables_shutterstock_311868497-1218.jpg' : 'images/flexibility_cables_shutterstock_311868497-609.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
$('.c').Stickyfill();

});