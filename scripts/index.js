// ============================================================================================
// Annimating the menu button

const main = document.querySelector('.main');
const btnMenu = document.getElementById('menu_icon');
const btnCloseMenu = document.getElementById('close_menu_icon');
const mobileMenu = document.getElementById('mobile_menu');

const btnPopUp = document.getElementsByClassName('see');
const popUpWindows = document.getElementById('pop_up');

btnMenu.addEventListener('click', () => {
  mobileMenu.className = 'mobile_menu d_flex';
});

btnCloseMenu.addEventListener('click', () => {
  mobileMenu.className = 'mobile_menu d_none';
});

document.querySelectorAll('.close').forEach((k) => {
  k.addEventListener('click', () => {
    mobileMenu.className = 'mobile_menu d_none';
  });
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
  {
    name: 'School Management System ',
    description: 'Web Application dedicated to manage Secondary Schools. Organising Students and Teacher, notes and Report Cards',
    featured: 'Add Students,Add notes, Add Topics, Generate PDF cards , Manage old school years',
    image: 'a.svg',
    technologies: ['PHP','J Query','TCPDF', 'CSS', 'Javascript', 'HTML'],
    liveLink: '',
    sourceLink: '',
    linkText: 'See Project',
  },
  {
    name: 'One Url Project ',
    description: 'Web Application dedicated to tinify or shorten URL ',
    featured: 'Add User with different account types, Save Url and give shorten correspondance, Rediferent a shorten code to the related URL',
    image: 'b.svg',
    technologies: ['Python','Axios','React','Rest Framework API','Django', 'CSS', 'Javascript', 'HTML'],
    liveLink: '',
    sourceLink: '',
    linkText: 'See Project',
  },
];
let workContain = '';
for (let index = 0; index < works.length; index += 1) {
  const element = works[index];
  workContain += `<section class="grid_1-item">
                    <section class="illustration_image">
                      <img src="./images/${element.image}" class="">
                    </section>
                    <section class="txt">
                      <h3 class="project_title">${element.name}</h3>
                      <ul class="tag_ctn">`;
  for (let i = 0; i < element.technologies.length; i += 1) {
    const item = element.technologies[i];
    workContain += `<li class="tag"><span class="tag_txt">${item}</span></li>`;
  }
  workContain += `</ul>
                      <section class="action_2 centered">
                        <button class="see" id="${index}">
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
            </section>`;
const workSection = document.getElementById('test');
workSection.innerHTML = `${workContain}`;

// ============================================================================================
// Actions on btn see details popup

function openPopUp(work=false) {
  let pop=``;

  pop = `<section class="container">
                    <div class="grid-item pop_head">
                      <nav class="menu">
                        <img src="images/Normal Button/Tertiary/Enabled.svg" alt="" id="close_pop">
                      </nav>
                    </div>
                    <div class="grid-item illustration" style="background-image:url(./images/${work.image});">
                      
                    </div>
                    <div class="grid-item pop_title">
                      <span class="title">
                       Keeping track of hundreds of Mzirkof
                      </span>
                      <section class="d_links" hidden >
                        <div class="links action_2 centered">
                          <button class="see">
                            <span class="see_txt">See Live</span>
                            <img src="images/Icons/live.svg">
                          </button>
                        </div>
                        <div class="links action_2 centered">
                          <button class="see">
                            <span class="see_txt">See Source</span>
                            <img src="images/Icons/github.svg">
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
                          <img src="images/Icons/live.svg">
                        </button>
                      </div>
                      <div class="links action_2 centered">
                        <button class="see">
                          <span class="see_txt">See Source</span>
                          <img src="images/Icons/github.svg">
                        </button>
                      </div>
                    </div>

                </section>`;


  if(work==false) pop = `<section class="container">
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
                          <img src="./images/Icons/live.svg">
                        </button>
                      </div>
                      <div class="links action_2 centered">
                        <button class="see">
                          <span class="see_txt">See Source</span>
                          <img src="./images/Icons/githubh.svg">
                        </button>
                      </div>
                    </div>

                </section>`;
  popUpWindows.innerHTML = `${pop}`;
  popUpWindows.className = 'pop_up';

  main.classList.add('blured_main');

  const popContainer = document.querySelector('.container');
  const btnClosePop = document.getElementById('close_pop');
  btnClosePop.addEventListener('click', () => {
    main.classList.remove('blured_main');
    popUpWindows.className = 'pop_down';
    popContainer.style.display = 'none';
  });
}

for (let i = 0; i < btnPopUp.length; i += 1) {
  const element = btnPopUp[i];
  let index =  btnPopUp[i].getAttribute("id");
  element.addEventListener('click', () => { 
    (i==0)? openPopUp() : openPopUp(works[index]); 
  });
}

// ==================== Form Validation ====================================
const contactForm = document.querySelector('#contact_form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const mail = contactForm.user_mail.value;
  const errorMsg = document.querySelector('.form_msg');

  if (mail === mail.toLowerCase()) {
    contactForm.submit();
    errorMsg.textContent = '';
    errorMsg.classList.remove('error_msg');
  } else {
    errorMsg.classList.add('error_msg');
    errorMsg.textContent = 'Please email adress must not contains upper case caracters';
  }
});

// ====================== Local Storage ======================================

let userDatas = {
  userName: '',
  userMail: '',
  userMsg: '',
};

// Saving process
function localSave() {
  localStorage.setItem('userDatas', JSON.stringify(userDatas));
}

// restoring data from local storage
function restoreUserData() {
  let datas = localStorage.getItem('userDatas');
  if (datas === null) {
    localSave();
    datas = localStorage.getItem('userDatas');
    if (datas === null) {
      // Local storage could not be compatible with the Web browser
      // Local storage could be disabled or could have reach it limit number in the Web browser
    }
  } else {
    userDatas = JSON.parse(datas);
  }

  if (userDatas.userName !== '') {
    contactForm.user_name.value = userDatas.userName;
  }
  if (userDatas.userMail !== '') {
    contactForm.user_mail.value = userDatas.userMail;
  }
  if (userDatas.userMsg !== '') {
    contactForm.user_msg.value = userDatas.userMsg;
  }
}
restoreUserData();

// watch inputs to save what is inside
contactForm.user_name.addEventListener('change', () => {
  userDatas.userName = contactForm.user_name.value;
  localSave();
});
contactForm.user_mail.addEventListener('change', () => {
  userDatas.userMail = contactForm.user_mail.value;
  localSave();
});
contactForm.user_msg.addEventListener('change', () => {
  userDatas.userMsg = contactForm.user_msg.value;
  localSave();
});
