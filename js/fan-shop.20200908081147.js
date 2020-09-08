(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js4').attr('src', (dpi>1) ? 'images/ibm_logo-r-_redhat_lockup_horiz_rev_color_rgb-592.png' : 'images/ibm_logo-r-_redhat_lockup_horiz_rev_color_rgb-296.png');
$('.js5').attr('src', (dpi>1) ? 'images/eingesetztes-bild-372.png' : 'images/eingesetztes-bild-186.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
$('.c12').Stickyfill();

});