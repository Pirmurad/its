$( document ).ready(function() {




        // - Site Loader
        if ( !$('html').is('.ie6, .ie7, .ie8') ) {
            $("#site-loader").delay(1000).fadeOut("slow");
        }
        else {
            $("#site-loader").css('display','none');
        }



    //Faq icon plus to minus

    let faqdiv = $('#accordion > .panel > .panel-heading > .panel-title  a');
    let faqdivdiv = $('#accordion > .panel .panel-heading');

    faqdiv.on("click",function(){
        $("i", this).toggleClass("fa-plus-circle  fa-minus-circle");
    });


    // Right menu toggle

    var menu = $('nav.menu');
    var buttonmenu = $('.right-menu>a.button-collapse');
    buttonmenu.click(function (e) {
        e.preventDefault();
        menu.toggleClass('active fadeInRight animated');
    });
    var close = $('span.close')
    close.click(function (e) {
        e.preventDefault();
        menu.addClass('fadeOutRight');
        setTimeout(function () {
            menu.removeClass("active fadeInRight animated fadeOutRight");
        }, 800);
    });


// swiper js
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is <= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is <= 640px
            760: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }


    });

});