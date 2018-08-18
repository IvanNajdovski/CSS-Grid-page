var $window = $(window);
var $elem = $(".animation");
var $move = $(".pic");

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();


    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
function isScrolledIntoView($move, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();


    var elemTop = $move.offset().top;
    var elemBottom = elemTop + $move.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("animate")
    }
});

$(document).on("scroll", function () {
    if (isScrolledIntoView($move, $window)) {
        $move.addClass("moving")
    }
});