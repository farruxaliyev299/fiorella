const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar-list');

const line1 = document.querySelector('.hamburger-line1');
const line2 = document.querySelector('.hamburger-line2');
const line3 = document.querySelector('.hamburger-line3');

// console.log(navbar.classList.contains("navbar-list-resp"))


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("hamburger-active");

    if(navbar.classList.contains("navbar-list-resp")){
        navbar.classList.remove('navbar-list-resp');
    }
    else{
        navbar.classList.add("navbar-list-resp");
         
    }
})