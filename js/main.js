/**
 * Created by Hitigerzzz on 2017/3/1.
 */
window.onload = function () {
    addAnimate();
    animatedReady();
    updateTimeLine();
}
window.onscroll = function() {
    animatedReady();
};
window.onresize = function () {
    updateTimeLine();
};

function submit() {
    var data = {
        name: $("#name").val(),
        number: $("#number").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        depart: $("#group option:selected").text(),
	sex:$("#sex").val(),
        expr: $("#intro").val(),
        hobby: $("#hobby").val(),
    };

    $("#submit").attr('disabled', 'disabled');

    $.post("/2017spring/join.php",data,function(text){
        $("#success").text(text);

        if(text === "信息不完整，请重新输入！"){
            $("#submit").removeAttr('disabled')
        }else{

        }
    })

}
function updateTimeLine() {
    var width = window.innerWidth;
    if(width < 770) {
        $(".time-line-node-info").removeClass('time-line-node-left').addClass('time-line-node-right');
        $(".time-line-node-info>h1").css("display","inline-block");
    } else {
        $(".time-line-node-info").each(function (index, info) {
           if(index % 2 == 0) {
                $(info).removeClass('time-line-node-right').addClass('time-line-node-left');
            }
        });

        $(".time-line-node-info>h1").css("display","none");
    }
}



function addAnimate() {
    $(".banner").addClass("animated-ready").attr("href","fadeIn");
    $(".about").addClass("animated-ready").attr("href","fadeIn");

    $(".time-line-node-left").addClass("animated-ready").attr("href","fadeInLeft");
    $(".time-line-node-right").addClass("animated-ready").attr("href","fadeInRight");

    $(".photo-wrapper").addClass("animated-ready").attr("href","zoomInUp");
    $(".info").addClass("animated-ready").attr("href","fadeInUp");
    $("#submit").addClass("animated-ready").attr("href","shake");
}

function animatedReady() {
    var ready = document.getElementsByClassName("animated-ready");

    for(var i = 0; i < ready.length; i++) {
        var ar = ready[i];
        var top = getTop(ar);
        if(((document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop) + $(window).height()) > top) {

            var animateType = $(ar).attr("href");
            $(ar).addClass("animated "+animateType);
            $(ar).css("visibility","visible");
        }

    }
}

function getTop(e){
    var offset=e.offsetTop;
    if(e.offsetParent!=null) offset+=getTop(e.offsetParent);
    return offset;
}

$(document).ready(function(){

    // Add smooth scrolling to all links in navbar
    $(".navbar a").on('click', function(event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });
})
