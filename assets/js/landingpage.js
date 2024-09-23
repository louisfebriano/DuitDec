$(window).on('load', function() {
    const $splashScreen = $('#splash-screen');
    const $navbar = $('#navbar');
    const $logoNavbar = $('.logo-navbar');
    const $navbarListItems = $('.navbar-list li');
    const $cardContainer = $('#card-container');
    const $cardLeft = $('.card-left');
    const $cardRight = $('.card-right');
    const $centerCard = $('#center-card');
    const $body = $('body'); 

    $body.addClass('no-scroll');

    setTimeout(function() {
        $splashScreen.css({
            'opacity': '0',
            'transition': 'opacity 0.5s ease-out'
        });
        $navbar.css({
            'transform': 'translateY(0)',
            'opacity': '1'
        });

        setTimeout(function() {
            $splashScreen.hide();
            $logoNavbar.css('opacity', '1');
            $body.removeClass('no-scroll');

            $navbarListItems.each(function(index) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)',
                    'transition': `opacity 0.5s ease ${0.1 * index}s`
                });
            });

            setTimeout(function() {
                $centerCard.css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
                $cardContainer.css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
                $cardLeft.css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
                $cardRight.css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }, 300);
        }, 500);
    }, 500);

    setTimeout(function() {
        const $featuresSection = $('#features-section');
        $featuresSection.css({
            'opacity': '1',
            'transform': 'translateY(0)'
        });
    }, 1500);
});
