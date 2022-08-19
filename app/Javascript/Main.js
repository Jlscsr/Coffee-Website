const menuButton = $('#hamburger-menu');
const navBar = $('#navbar-slide');
const landingPage = $('#landing-page');

$(menuButton).click(() => {
    let nav = navBar;
    let landingSection = landingPage;
    
    $(nav).toggleClass('active');
    $(landingSection).toggleClass('active');
})