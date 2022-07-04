let menu = document.querySelector('.menu_item');
let menuButton = document.querySelector('.menu_bar');
let menuOpen = document.querySelector('.open_menu');
let menuX = document.querySelector('.menu_x');
let menuItem = document.querySelectorAll('li');

menuButton.addEventListener('click', menuShow);
menuX.addEventListener('click', menuShow);

function menuShow () {
    if(menu.style.display !== 'block') {
        setTimeout( () => {
            menuOpen.style.transform = "rotate(0deg)"; 
        }, 50);
        setTimeout( () => {
            menuOpen.style.transform = "rotate(45deg)"; 
        }, 100);
        setTimeout( () => {
            menuOpen.style.transform = "rotate(90deg)"; 
        }, 150);
        setTimeout( () => {
            menuOpen.style.transform = "rotate(135deg)"; 
        }, 200);
        setTimeout( () => {
            menuOpen.style.transform = "rotate(180deg)"; 
        }, 250);
        setTimeout( () => {
            menu.style.display = 'block';
            menuOpen.style.display = 'none';
            menuX.style.display = 'block';
        }, 300);
        menuX.style.transform = "rotate(0deg)"; 
  
    } else {
        setTimeout( () => {
            menuX.style.transform = "rotate(0deg)"; 
        }, 50);
        setTimeout( () => {
            menuX.style.transform = "rotate(45deg)"; 
        }, 100);
        setTimeout( () => {
            menuX.style.transform = "rotate(90deg)"; 
        }, 150);
        setTimeout( () => {
            menuX.style.transform = "rotate(135deg)"; 
        }, 200);
        setTimeout( () => {
            menuOpen.style.transform = "rotate(180deg)"; 
        }, 250);
        setTimeout( () => {
            menu.style.display = 'none';
            menuOpen.style.display = 'block';
            menuX.style.display = 'none';
            menuOpen.style.transform = "rotate(0deg)"; 

            }, 300);

    }
}

