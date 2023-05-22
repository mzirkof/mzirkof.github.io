console.log('set');

let btn_menu = document.getElementById('menu_icon');
let btn_close_menu = document.getElementById('close_menu_icon');

let toolbar = document.getElementById('toolbar');
let mobile_menu = document.getElementById('mobile_menu');


// btn_menu.style.display='none';
let i=0;
btn_menu.addEventListener('click', ( ) =>{
    // mobile_menu.style.display='flex';
    mobile_menu.className='mobile_menu d_flex';
    i++;
    console.log('has been clicked '+i+' times')
})

btn_close_menu.addEventListener('click', ( ) =>{
    mobile_menu.className='d_none';
})
// console.log(btn_menu);
