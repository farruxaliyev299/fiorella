const searchIcon = document.querySelector('.fa-magnifying-glass');
const searchBar = document.querySelector('.search-box');

console.log(searchBar.classList.contains("searchbar-open"));

searchIcon.addEventListener('click', (e) => {

    e.preventDefault();

    
    if(!searchBar.classList.contains("searchbar-open")){
        searchBar.classList.add("searchbar-open");
        searchBar.style.cssText += "visibility: visible;transform-origin: top;transform: scaleY(100%);opacity: 1;z-index: 1;zoom: 100%;transition-delay: 0s, 0s, 0.1s;"
    }
    else{
        searchBar.classList.remove("searchbar-open");
        searchBar.style.cssText += "visibility: hidden;transform-origin:top;transform: scaleY(0%);z-index: 1;transition: all 0.5s , visibility 0s  , z-index 0s ;";
    }

    // searchBar.style.cssText += "visibility: visible;transform-origin: top;transform: scaleY(100%);opacity: 1;z-index: 1;zoom: 100%;transition-delay: 0s, 0s, 0.1s;";

})