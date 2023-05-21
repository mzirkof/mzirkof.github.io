console.log('set');

let btn_menu = document.getElementById('menu_icon');

// btn_menu.style.display='none';
let i=0;
btn_menu.addEventListener('click', ( ) =>{
    i++;
    console.log('has clicke '+i+' times')
})
// console.log(btn_menu);