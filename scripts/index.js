let i = 0;
// console.log('set');

const btnMenu = document.getElementById('menu_icon');
const btnCloseMenu = document.getElementById('close_menu_icon');

// const toolbar = document.getElementById('toolbar');
const mobileMenu = document.getElementById('mobile_menu');

// btn_menu.style.display='none';
btnMenu.addEventListener('click', () => {
  // mobile_menu.style.display='flex';
  mobileMenu.className = `mobile_menu d_flex ${i}`;
  i += 1;
//   console.log(`has been clicked ${i} times`);
});

btnCloseMenu.addEventListener('click', () => {
  mobileMenu.className = 'd_none';
});
// console.log(btn_menu);
