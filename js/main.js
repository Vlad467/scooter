$("head").append("<link rel='stylesheet' type='text/css' href='css/style.css' />");
$('.click').click(function() {
    $('.modal').show();
    $('.cart1').removeClass('cart1-pos2').fadeIn(1000);
});
$('.cart-cont:first-child .block2 button').click(function() {
    $('.modal').show();
    $('.cart2').fadeIn(1000);
});
$('.cart-cont:nth-child(2) .block2 button').click(function() {
    $('.modal').show();
    $('.cart3').fadeIn(1000);
});
$('.cart-cont:nth-child(3) .block2 button').click(function() {
    $('.modal').show();
    $('.cart4').fadeIn(1000);
});
$('.cart-cont:nth-child(4) .block2 button').click(function() {
    $('.modal').show();
    $('.cart1').addClass('cart1-pos2').fadeIn(1000);
});
$('.cart-cont:nth-child(5) .block2 button').click(function() {
    $('.modal').show();
    $('.cart5').fadeIn(1000);
});
$('.cart-cont:nth-child(6) .block2 button').click(function() {
    $('.modal').show();
    $('.cart6').fadeIn(1000);
});
$('.close').click(function(){
    $('.cart,.modal').fadeOut(1000);
});
$('.desc a').click(function(){
    $('.hidden-desc').addClass('table');
    return false;
});
$(document).mouseup(function (e) {
    var t = $(".target")

    t.is(e.target) || 0 !== t.has(e.target).length || (t.fadeOut(), $(".modal").fadeOut())

});
