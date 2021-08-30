const navigationItemsList = document.querySelector('.navigation-items-list');
const closeMenu = document.querySelector('.closeMenu');
const openMenu  = document.querySelector('.openMenu');
const closeOnClick = document.querySelector('.navigation-items');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
closeOnClick.addEventListener('click', close);


function show(){
    navigationItemsList.style.display = 'flex';
    navigationItemsList.style.top = '0';
}

function close(){
    navigationItemsList.style.top = '-100%';
    console.log("Clicked");
}


// loader---------------------
// $(window).on("load",function(){
//     $(".loader-wrapper").fadeOut("slow");
// });

