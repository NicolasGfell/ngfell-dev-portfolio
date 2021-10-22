window.addEventListener('load', ()=> {

    let button_open_menu = $('#btn-open-menu');
    let button_close_menu = $('#btn-close-menu');
    let menu = $('#menu');
    let navbar = $('#navbar');

    // * Buttons open and close menu
    button_open_menu.click(()=>{
        menu.addClass('active');
    });

    button_close_menu.click(()=> {
        menu.removeClass('active');
    });

    // * Navbar scroll
    $(window).scroll(()=> {
        if(window.scrollY > 10){
            navbar.addClass('scroll');
        } else {
            navbar.removeClass('scroll');
        }

        menu.removeClass('active');
    });

    // * Button Scroll
    let scroll_button = $('#scroll-button') ;
    let about_me = $('#about-me');

    scroll_button.click(
        function (e) { 
            e.preventDefault(); 
            $('html, body').animate({
                scrollTop: about_me.position().top 
            }, 1000); 
        }
    );

});