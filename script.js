$(document).ready(function() {

    $('.main_btna, .main_btn, .main_nav li:eq(1)').click(function() {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    });
        
        $('.close').on('click', function() {
            $('.modal').slideUp(1000);    
            $('.overlay').fadeOut(1000);
        });
    

});