(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        nav: false,
        dots: true,
        dotsData: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

var contact_us = document.querySelector('.contact_us');
contact_us.addEventListener('click', ()=>{
    contact_us.href="tel:+22375468913";
})


var objetMail = document.querySelector('.objetMail');
var message = document.querySelector('.message');
var sFirstName = document.querySelector('.sFirstName');
var sNames = document.querySelector('.sNames');
var sobjetMail = document.querySelector('.sobjetMail');
var smessage = document.querySelector('.smessage');
var smessage = document.querySelector('.smessage');

btnsubComand_form.addEventListener('click', ()=>{
    var v1 = com_nom.value;
    var v2 = com_pre.value;
    var v3 = com_obj.value;
    var v4 = encodeURIComponent(com_mes.value);
    alert(v4);
    var err = document.querySelector('#errr');
    var verimess = encodeURIComponent("Bonjour, \nJe suis "+v2+"\n mon email "+v1+"\n\n");
    if(v1!="" && v2!="" && v3!="" && v4!=""){
    window.location = "mailto:adiawiakoye.le10@gmail.com?subject="+v3+"&body="+verimess+v4;
        com_nom.value = "";
        com_pre.value = "";
        com_obj.value = "";
        com_mes.value = "";
        err.innerHTML = "";
        formCommand.classList.toggle('active');
    }
    else{
        err.innerHTML = "Veuillez renseigner tous les champs !";
    }
})

function verifocus(){
    if(FirstName.value!=""){
        sFirstName.setAttribute('style', "transform: translateY(-20px);font-size: 12px;color: rgb(255, 35, 119);font-weight: bold;");
    }
    else{
        sFirstName.removeAttribute('style');
    }
    if(Names.value!=""){
        sNames.setAttribute('style', "transform: translateY(-20px);font-size: 12px;color: rgb(255, 35, 119);font-weight: bold;");
    }
    else{
        sNames.removeAttribute('style');
    }
    if(objetMail.value!=""){
        sobjetMail.setAttribute('style', "transform: translateY(-20px);font-size: 12px;color: rgb(255, 35, 119);font-weight: bold;");
    }
    else{
        sobjetMail.removeAttribute('style');
    }
    if(message.value!=""){
        smessage.setAttribute('style', "transform: translateY(-20px);font-size: 12px;color: rgb(255, 35, 119);font-weight: bold;");
    }
    else{
        smessage.removeAttribute('style');
    }
}

var apply = setInterval(verifocus, 500);

var inputsubmit = document.querySelector('.inputsubmit').addEventListener("click", ()=>{
        var v1 = FirstName.value;
        var v2 = Names.value;
        var v3 = objetMail.value;
        var v4 = encodeURIComponent(message.value);
        var err = document.querySelector('.err');
        var verimess = encodeURIComponent("Bonjour, \nJe suis "+v2+"\n mon email "+v1+"\n\n");
    if(v1!="" && v2!="" && v3!="" && v4!=""){
        window.location = "mailto:adiawiakoye.le10@gmail.com?subject="+v3+"&body="+verimess+v4;
        FirstName.value = "";
        Names.value = "";
        objetMail.value = "";
        message.value = "";
        err.innerHTML = "";
    }
    else{
        err.innerHTML = "Veuillez renseigner tous les champs !";
    }
})
