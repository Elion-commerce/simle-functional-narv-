

if(window.screen.availWidth<768){


const menu = document.getElementById('menu');
const closemenu = document.getElementById('closemenu');


// for the display of menu
document.getElementById('menu').addEventListener('click', e());


// to close the menu
document.getElementById('closemenu').addEventListener('click', b());
}


function e(){
    // e.preventDefault();
 
document.querySelector('.span_class3').classList.add ('block');
document.getElementById('closemenu').classList.add ('block');
}           


function b() {
    // b.preventDefault();

document.querySelector('.span_class3').classList.remove ('block');
document.getElementById('closemenu').classList.remove ('block');
             
}

