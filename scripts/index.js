// ============================================================================================
// Annimating the menu button

const btnMenu = document.getElementById('menu_icon');
const btnCloseMenu = document.getElementById('close_menu_icon');
// const menuItem = document.getElementsByClassName('nav_item');

const mobileMenu = document.getElementById('mobile_menu');

const btnPopUp = document.getElementsByClassName('see');
const popUpWindows = document.getElementById('pop_up');

btnMenu.addEventListener('click', () => {
  mobileMenu.className = 'mobile_menu d_flex';
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
    sourceLink: '',
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

function openPopUp() {
  const pop = `<section class="container">
                    <div class="grid-item pop_head">
                      <nav class="menu">
                        <img src="images/Normal Button/Tertiary/Enabled.svg" alt="" id="close_pop">
                      </nav>
                    </div>
                    <div class="grid-item illustration"></div>
                    <div class="grid-item pop_title">
                      <span class="title">
                       Keeping track of hundreds of components
                      </span>
                      <section class="d_links" hidden >
                        <div class="links action_2 centered">
                          <button class="see">
                            <span class="see_txt">See Live</span>
                            <img src="images/Icons/see live icon.svg">
                          </button>
                        </div>
                        <div class="links action_2 centered">
                          <button class="see">
                            <span class="see_txt">See Source</span>
                            <img src="images/Icons/Vector.svg">
                          </button>
                        </div>
                      </section>
                      <ul class="tag_ctn">
                        <li class="tag"><span class="tag_txt">Ruby On Rails</span></li>
                        <li class="tag"><span class="tag_txt">CSS</span></li>
                        <li class="tag"><span class="tag_txt">Javascript</span></li>
                      </ul>
                    </div>
                    <div class="d_pop_tag_ctn">
                      <ul class="tag_ctn">
                        <li class="tag"><span class="tag_txt">CodeKit</span></li>
                        <li class="tag"><span class="tag_txt">Github</span></li>
                        <li class="tag"><span class="tag_txt">Javascript</span></li>
                        <li class="tag"><span class="tag_txt">Bootstrap</span></li>
                        <li class="tag"><span class="tag_txt">Terminal</span></li>
                        <li class="tag"><span class="tag_txt">Codepen</span></li>
                      </ul>
                    </div>
                    <div class="grid-item pop_details">
                      <div class="details">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
                      </div>
                    </div>
                    <div class="grid-item pop_links">
                      <div class="links action_2 centered">
                        <button class="see">
                          <span class="see_txt">See Live</span>
                          <img src="images/Icons/see live icon.svg">
                        </button>
                      </div>
                      <div class="links action_2 centered">
                        <button class="see">
                          <span class="see_txt">See Source</span>
                          <img src="images/Icons/Vector.svg">
                        </button>
                      </div>
                    </div>

                </section>`;
  popUpWindows.innerHTML = `${pop}`;
  popUpWindows.className = 'pop_up';

  const popContainer = document.querySelector('.container');
  const btnClosePop = document.getElementById('close_pop');
  btnClosePop.addEventListener('click', () => {
    popUpWindows.className = 'pop_down';
    popContainer.style.display = 'none';
  });
}

for (let i = 0; i < btnPopUp.length; i += 1) {
  const element = btnPopUp[i];
  element.addEventListener('click', () => { openPopUp(works[0]); });
}

// ==================== Form Validation ====================================
const contactForm = document.querySelector('#contact_form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = contactForm.user_name.value;
  const mail = contactForm.user_mail.value;
  const msg = contactForm.user_msg.value;

  // user email must be in lower case
  if (!(mail === mail.toLowerCase())) {
    console.log('erreur : email en minuscule');
  }
});
