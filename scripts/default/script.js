/* Open Menu Mobile */
const mobileIcon = document.querySelector('.mobile-icon');
console.log(mobileIcon)

function animateMobile(){
    mobileIcon.classList.toggle('mobile-icon-active');
}
mobileIcon.addEventListener('click', animateMobile)
mobileIcon.addEventListener('click', openMobileMenu)

const mobileMenu = document.querySelector('.ul-menu');
function openMobileMenu(){
    mobileMenu.classList.toggle('ul-menu-active');
}

/* Open Dropdown Menu */
const dropdownActivator = document.querySelector('.dropdown-menu-activator');
const dropdownMenu = document.querySelector('.dropdown-menu');

function openDropdown(){
    dropdownMenu.classList.toggle('dropdown-menu-active');
}
dropdownActivator.addEventListener('click', openDropdown);

const scrollAnimals = document.querySelector('#scrollAnimate');

function animateScrollBar(){
    $().ready(function animeScrollDown(){
        $("#scrollAnimate").animate({ scrollTop: 1400 }, 10000);
        });
    $().ready(function animeScrollUp(){
        $("#scrollAnimate").animate({ scrollTop: 0 }, 10000);
        });
}
setInterval(animateScrollBar, 1);

animateScrollBar();

