console.log('set');

let btn_menu = document.getElementById('menu_icon');
let btn_close_menu = document.getElementById('close_menu_icon');
let menuItem = document.getElementsByClassName('nav_item');

let mobile_menu = document.getElementById('mobile_menu');

console.log(menuItem);
let i=0;
btn_menu.addEventListener('click', ( ) =>{
    mobile_menu.className='mobile_menu d_flex';
    i++;
    console.log('has been clicked '+i+' times')
})

btn_close_menu.addEventListener('click', ( ) =>{
    mobile_menu.className='mobile_menu d_none';
})