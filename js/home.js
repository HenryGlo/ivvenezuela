$(document).ready(function () {
    $(".MenuCont .barmenu").click(function () {
        $(".MenuDes").slideDown("slow");
    });

    $(".MenuDes .close").click(function () {
        $(".MenuDes").slideUp("slow");
    });
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        speed: 1500,
        autoplay: {
            enabled: true,
            delay: 5000,
            disableOnInteraction: false,
        }
    });
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1600,
        header: null,
        updateURL: false
    });
});