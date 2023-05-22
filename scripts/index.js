let i = 0;

const btnMenu = document.getElementById('menu_icon');
const btnCloseMenu = document.getElementById('close_menu_icon');
const menuItem = document.getElementsByClassName('nav_item');

const mobileMenu = document.getElementById('mobile_menu');

console.log(menuItem);
btnMenu.addEventListener('click', () => {
  mobileMenu.className = 'mobile_menu d_flex';
  i += 1;
  console.log(`has been clicked ${i} times`);
});

btnCloseMenu.addEventListener('click', () => {
  mobileMenu.className = 'd_none';
});