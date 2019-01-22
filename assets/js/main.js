'use strict';
$(document).ready(function(){
    amitasker();
});

let amitasker = function(){

    let data = {
        init : function(){
            this.navbar();
        },
        navbar : function(){

            // hide navbar after clicking
            $('.nav-link').on('click', function(){
                $('.navbar-toggler').click();
            });

            // setting navbar sticky
            $(window).on('scroll', function () {
                var scroll_top = $(window).scrollTop();
        
                if (scroll_top > 40) {
                    $('.navbar').addClass('sticky');
        
                } else {
                    $('.navbar').removeClass('sticky');
                }
        
            });        
            
        }
    }

    data.init();
}