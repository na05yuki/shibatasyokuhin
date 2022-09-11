$(function () {

    // bxslider
    $('.slider').bxSlider({
        mode: 'fade',
        auto: true,
        speed: 5000,
        pause: 5000,
    });

    // sidemenu
    $('.sidebar h5').on('click', function(){
        $(this).next().toggleClass('hidden');
    });
    
});