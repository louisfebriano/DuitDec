window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const navbar = document.getElementById('navbar');
    const logoNavbar = document.querySelector('.logo-navbar');
    const navbarListItems = document.querySelectorAll('.navbar-list li');
    const cardContainer = document.getElementById('card-container');
    const cardLeft = document.querySelector('.card-left');
    const cardRight = document.querySelector('.card-right');
    const centerCard = document.getElementById('center-card');
    const body = document.body; 

    body.classList.add('no-scroll');

    setTimeout(() => {
        splashScreen.style.opacity = '0';
        splashScreen.style.transition = 'opacity 0.5s ease-out';
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';

        setTimeout(() => {
            splashScreen.style.display = 'none';
            logoNavbar.style.opacity = '1';

            body.classList.remove('no-scroll');

            navbarListItems.forEach((item, index) => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transition = `opacity 0.5s ease ${0.1 * index}s`;
            });

            setTimeout(() => {
                centerCard.style.opacity = '1';
                centerCard.style.transform = 'translateY(0)';
                cardContainer.style.opacity = '1';
                cardContainer.style.transform = 'translateY(0)';
                cardLeft.style.opacity = '1';
                cardLeft.style.transform = 'translateY(0)';
                cardRight.style.opacity = '1';
                cardRight.style.transform = 'translateY(0)';
            }, 300);
        }, 500);
    }, 500);

    setTimeout(() => {
        const featuresSection = document.getElementById('features-section');
        featuresSection.style.opacity = '1';
        featuresSection.style.transform = 'translateY(0)';
    }, 1500);
});
