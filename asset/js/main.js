/**
 * Created by chargo on 2015/6/6.
 */


var myHTML = document.querySelector("html"),
    myWidth = $(window).width();

myHTML.style.fontSize = 3 * myWidth / 80 + 'px';

window.onresize = function() {
    var myHTML = document.querySelector("html"),
        myWidth = $(window).width();

    myHTML.style.fontSize = 3 * myWidth / 80 + 'px';
};
