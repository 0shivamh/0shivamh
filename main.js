
$(document).ready(function(){

    $('#head').addClass('animate__animated animate__flipInX');
    $('#card1').addClass('animate__animated animate__fadeInLeftBig');
    $('#card2').addClass('animate__animated animate__fadeInRightBig');
    
    $(window).scroll(function(){
        let pos_top=$(window).scrollTop();
        console.log(pos_top);

        if((pos_top>120) && (pos_top<443)){

            $('#skill1').addClass('animate__animated animate__lightSpeedInRight');
            $('#skill3').addClass('animate__animated animate__lightSpeedInRight');
            $('#skill5').addClass('animate__animated animate__lightSpeedInRight');
            $('#skill').addClass('animate__animated animate__lightSpeedInLeft');
            $('#skill2').addClass('animate__animated animate__lightSpeedInLeft');
            $('#skill4').addClass('animate__animated animate__lightSpeedInLeft');
        }
    });
});
