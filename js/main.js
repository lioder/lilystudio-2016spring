/**
 * Created by Sorumi on 16/3/2.
 */
window.onload = function() {
    navOnClick();
    updateNav();
    if (!isIE(6) & !isIE(7) & !isIE(8) & !isIE(9)) {
        addAnimate();
        animatedReady();
    }
}

window.onscroll = function() {
    updateNav();
    if (!isIE(6) & !isIE(7) & !isIE(8) & !isIE(9)){
        updateLogo();
        animatedReady();
    }
}

function isIE (){
    var b = document.createElement('b');
    b.innerHTML = '<!--[if IE]><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1;
}

function submit()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("success").innerHTML=xmlhttp.responseText;
        }
    }
    var name = document.getElementById("name").innerHTML;
    xmlhttp.open("GET","./ajax/success.txt?name=name",true);
    xmlhttp.send();
}

function addAnimate() {
    $(".banner").addClass("animated-ready").attr("href","fadeIn");
    $(".about .icons").addClass("animated-ready").attr("href","fadeIn");
    $(".time-line-info").addClass("animated-ready").attr("href","fadeIn");

    $(".tl-image1").addClass("animated-ready").attr("href","fadeIn");
    $(".tl-pc").addClass("animated-ready").attr("href","bounceIn");
    $(".tl-table").addClass("animated-ready").attr("href","bounceInDown");
    $(".tl-build").addClass("animated-ready").attr("href","slideInUp");

    $(".photo-wrapper").addClass("animated-ready").attr("href","zoomInUp");
    $(".depart .icon-wrapper").addClass("animated-ready").attr("href","zoomIn");
    $(".member-wrapper").addClass("animated-ready").attr("href","fadeIn");
    $(".join-form").addClass("animated-ready").attr("href","fadeInUp");
    $("#submit").addClass("animated-ready").attr("href","shake");

}

function updateNav() {
    var links = document.querySelectorAll(".menu a")

    for(var i = 0; i < links.length; i++) {
        var link = links[i];

        // 获取被链接指向的部分
        var section = document.querySelector(link.getAttribute("href"));
        var sectionTop = section.offsetTop;
        var sectionBottom = section.offsetTop + section.clientHeight;

        // 检查 window.scrollY 是否在这部分中
        if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            $(link).addClass("active");
        } else {
            $(link).removeClass("active");
        }
    }

}

function updateLogo() {
    var height = window.scrollY;
    var logoSmall = $(".logo-small");
    if (height>40) {
        $(".nav").css("padding-top","20px").css("opacity",0.9).css("position","fixed");
        logoSmall.removeClass("animated zoomOut");
        logoSmall.addClass("animated zoomIn");
        logoSmall.css("opacity","1");
    }else{
        $(".nav").css("padding-top","60px").css("opacity",1).css("position","absolute");
        if (logoSmall.css("opacity") == "1"){
            logoSmall.removeClass("animated zoomIn");
            logoSmall.addClass("animated zoomOut");
        }
    }
}

function animatedReady() {
    var ready = document.querySelectorAll(".animated-ready");

    for(var i = 0; i < ready.length; i++) {
        var ar = ready[i];
        if((window.scrollY + window.innerHeight)> getTop(ar)) {
            //console.log(ar.offsetTop);
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

function navOnClick() {
    $(".nav-icon").click(function(){
        $(".menu").slideToggle("");
    })
}

jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
});

