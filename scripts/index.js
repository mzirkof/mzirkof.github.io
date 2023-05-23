// ============================================================================================
// Annimating the menu button
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
  mobileMenu.className = 'mobile_menu d_none';
});

// ============================================================================================
// Main page : creating dynamically the projects section
const works = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: '',
    featured: '',
    image: '',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    liveLink: '',
    linkText: 'See Project',
  },
];
let workContain = '';
for (let index = 0; index < 3; index += 1) {
  const element = works[0];
  workContain += `<section class="grid_1-item">
                    <section class="txt">
                      <h3 class="project_title">${element.name}</h3>
                      <ul class="tag_ctn">`;
  for (let i = 0; i < element.technologies.length; i += 1) {
    const item = element.technologies[i];
    workContain += `<li class="tag"><span class="tag_txt">${item}</span></li>`;
  }
  workContain += `</ul>
                      <section class="action_2 centered">
                        <button class="see">
                          <span class="see_txt">${element.linkText}</span>
                        </button>
                      </section>

                    </section>
                  </section>`;
}
workContain = `<section class="title">
                      <h3>My Recent Works</h3>
                      <p class="s"></p>
              </section>
            <section class="works grid-container">
              ${workContain} 
              ${workContain}
            </section>`;
const workSection = document.getElementById('test');
workSection.innerHTML = `${workContain}`;

// ============================================================================================
// Actions on btn see details popup
const btnPopUp = document.getElementsByClassName('see');
const popUpWindows = document.getElementById('pop_up');
// console.log(btnPopUp);
for (let i = 0; i < btnPopUp.length; i += 1) {
  const element = btnPopUp[i];
  element.addEventListener('click', () => {
    console.log('load modal pop up window');
    // workSection.childNodes('<h1>Mzirkof</h1>');
    const pop = `<section class="container">
                    <div class="title">
                      <a href="./index.html" class="pop_logo">
                        MZK
                      </a>
                      <nav class="menu">
                        <img src="images/Normal Button/Tertiary/Enabled.svg" alt="" id="close_pop">
                      </nav>
                    </div>
                </section>`;
    popUpWindows.innerHTML = `${pop}`;
    popUpWindows.className = 'pop_up';
    const btnClosePop = document.getElementById('close_pop');
    btnClosePop.addEventListener('click', () => {
      console.log('closed');
      popUpWindows.className = '';
    });
  });
}
