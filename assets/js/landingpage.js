window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const navbar = document.getElementById('navbar');
    const logo = document.querySelector('.logo');
    const logoNavbar = document.querySelector('.logo-navbar');
    const navbarListItems = document.querySelectorAll('.navbar-list li');

    // Step 1: Initial logo animation (already handled by CSS)
    
    setTimeout(() => {
        // Step 2: Hide splash screen and show navbar
        splashScreen.style.opacity = '0';
        splashScreen.style.transition = 'opacity 1s ease-out';
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
        
        setTimeout(() => {
            // Remove splash screen from the DOM after transition
            splashScreen.style.display = 'none';

            // Move logo to navbar
            logoNavbar.style.opacity = '1';
            
            // Step 3: Animate navbar items
            navbarListItems.forEach((item, index) => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            });
        }, 1000);
    }, 1000);
});
