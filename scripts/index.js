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
    name: 'Full-Stack Dev Tools',
    description: `Hello, I am SOUOP Celestin. It is about 5 years that am working in web Development. It would be pleasant to share and collaborate with you on Web applications.
    I used to work with pure PHP, HTML, SQL, and Javascript in some projects: 
   HTML: Page Structure
   PHP: dealing with session variables, database access (MySQL or Maria DB), dynamic generation of contents
   Javascript and Jquery: for requests between Database Backend and FrontEnd
   TCPDF: To generate PDF files such as (user information, payment bills, ...)
   CSS: for styling and small animations (both Bootstrap and TailwindCSS)
   
   Recently, I added Python Django in association with React JS to my skills: It is a very powerful combination 
    - Django as backend and Rest Framework as API: Database Management is just automatic.
   - React JS as FrontEnd, Redux for components States and Axios for the requests to the backend: Web interfaces are easily reproduced and managed
   Let us work together on projects using Django and TailWindCSS. `,
    featured: '',
    image: '/projects/a.jpg',
    technologies: ['React Js', 'Django', 'REST API', 'TCPDF', 'PHP', 'Js ES6', 'Git & GitHub', 'Tailwind CSS', 'Version Control'],
    liveLink: '',
    sourceLink: '',
    linkText: 'See Project',
  },

  {
    name: 'Responsive PortFolio ',
    description: `Web Application that Present Celestin SOUOP's Developper Profile. This PorFolio is Build Applying Mobile First Philosophie : which makes it a completely Multiscreams responsive app.
    Using Html, Javascipt and CSS. Features like Modal Popup, Mobile and Desktop menu , Cards Building with Both grid & FlexBox display are used .`,
    featured: '',
    image: '/projects/portfolio.png',
    technologies: ['Javascript', 'HTML', 'Git', 'GitHub', 'Tailwind CSS', 'Version Control', 'JSON', 'CSS'],
    liveLink: 'https://mzirkof.github.io',
    sourceLink: 'https://github.com/mzirkof/mzirkof.github.io',
    linkText: 'See Project',
  },
  {
    name: 'School Management System ',
    description: 'Web Application dedicated to manage Secondary Schools. Organising Students and Teacher, notes and Report Cards',
    featured: 'Add Students,Add notes, Add Topics, Generate PDF cards , Manage old school years',
    image: '/projects/f.jpg',
    technologies: ['PHP', 'J Query', 'TCPDF', 'Bootstrap CSS', 'Apache Server', 'SQL', 'MySQL', 'CSS', 'Javascript', 'HTML'],
    liveLink: '',
    sourceLink: 'https://github.com/mzirkof/e-school',
    linkText: 'See Project',
  },
  {
    name: 'One Url Project ',
    description: 'Web Application dedicated to tinify or shorten URL ',
    featured: 'Add User with different account types, Save Url and give shorten correspondent, Redirecting a shorten code to the related URL',
    image: '/projects/x.png',
    technologies: ['Python', 'Axios', 'React JS', 'Redux', 'Rest Framework API', 'Django', 'TailWind CSS', 'Javascript', 'PostGreSQL', 'HTML', 'CSS'],
    liveLink: '',
    sourceLink: 'https://github.com/mzirkof/1url_project',
    linkText: 'See Project',
  },
  {
    name: 'Site B Project ',
    description: 'A One page Informative Web Application ',
    featured: 'Used Figma for designing the application, Managing CSS and Javascript Animations, Disposing component in web Application with CSS flexBox, Dealing with sizes ,Shapes and shadows',
    image: '/projects/SiteBCapture.png',
    technologies: ['Figma', 'CSS', 'Javascript', 'Git', 'GitHub', 'HTML', 'version controlling'],
    liveLink: '',
    sourceLink: '',
    linkText: 'See Project',
  },
  {
    name: 'Online TicTacToe Game ',
    description: 'Web Application that Implement the logic and GamePlay of the legendary Morpion known as TicTacToe . Visitors can have fun online ',
    featured: 'Control the matrix of the game map, Check if there is a winner, Let players play their turn',
    image: '/projects/TttCapture.png',
    technologies: ['Strong Algorithms', 'Javascript', 'Git', 'CSS', 'HTML', 'Version Control'],
    liveLink: '',
    sourceLink: '',
    linkText: 'See Project',
  },
  {
    name: 'Online Sudoku Game ',
    description: 'Web Application that Implement the logic and GamePlay of the legendary Sudoku Game . Visitors can have fun online ',
    featured: 'Control the matrix of the game map, Check if the an entered number is correct or not, Let player play and know when he has completed the sudoku',
    image: '/projects/sudoku.png',
    technologies: ['Strong Algorithms', 'Javascript', 'Git', 'CSS', 'HTML', 'Version Control'],
    liveLink: '',
    sourceLink: '',
    linkText: 'See Project',
  },
];
let workContain = '';
for (let index = 0; index < works.length; index += 1) {
  const element = works[index];
  workContain += `<section class="grid_1-item">
                    <div class="work_container">
                    <section class="illustration_ctn" >
                      <div class="illustration_image" style="width:100%;height:100%;background-image:url(./images/${element.image});">
                      </div>
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
                    </div>
                  </section>`;
}
workContain = `<section class="title">
                      <h3>My Recent Works</h3>
                      <p class="s"></p>
              </section>
            <section class="works grid-container">
              ${workContain} 
            </section>`;
const workSection = document.getElementById('r_works');
workSection.innerHTML = `${workContain}`;

// ============================================================================================
// Actions on btn see details popup

function openPopUp(work = false) {
  let pop = '';

  pop = `<section class="container">
                    

                    <div class="grid-item illustration" style="background-image:url(./images/${work.image});">
                      <div class="pop_head">
                        <nav class="menu" title="Close Window">
                          <img src="images/Normal Button/Tertiary/Enabled.svg" alt="" id="close_pop">
                        </nav>
                      </div>
                    </div>

                    <div class="grid-item pop_title">
                      <span class="title">
                      ${work.name}
                      </span>
                      <section class="d_links" hidden >`;
  if (work.liveLink.length >= 5) {
    pop += `
      <div class="links action_2 centered">
        <button class="see">
          <span class="see_txt">See Live</span>
          <img src="images/Icons/live.svg">
        </button>
      </div>
    `;
  }

  if (work.sourceLink.length >= 5) {
    pop += `<div class="links action_2 centered">
                          <button class="see">
                            <span class="see_txt">See Source</span>
                            <img src="images/Icons/github.svg">
                          </button>
                        </div>`;
  }

  pop += `</section>
                      <ul class="tag_ctn">`;
  work.technologies.map((value) => {
    pop += `<li class="tag"><span class="tag_txt">${value}</span></li>`;
    return 1;
  });

  pop += `
                      </ul>
                    </div>

                    <div class="grid-item d_pop_tag_ctn">
                      <ul class="tag_ctn">`;
  work.technologies.map((value) => {
    pop += `<li class="tag"><span class="tag_txt">${value}</span></li>`;
    return 1;
  });
  pop += `
                        
                      </ul>
                    </div>

                    <div class="grid-item pop_details">
                      <div class="details">${work.description}</div>
                    </div>

                    <div class="grid-item pop_links">
                    `;
  if (work.liveLink.length >= 5) {
    pop += `<div class="links action_2 centered">
                        <button class="see">
                          <span class="see_txt">See Live</span>
                          <img src="images/Icons/live.svg">
                        </button>
                      </div>`;
  }
  if (work.sourceLink.length >= 5) {
    pop += `<div class="links action_2 centered">
                        <button class="see">
                          <span class="see_txt">See Source</span>
                          <img src="images/Icons/github.svg">
                        </button>
                      </div>`;
  }

  pop += `
                    </div>

                </section>`;

  popUpWindows.innerHTML = `${pop}`;
  popUpWindows.className = 'pop_up';

  main.classList.add('blured_main');
  // Removing scrolling possibility
  const body = document.getElementsByTagName('body')[0];
  body.classList.add('no_scroll');

  const popContainer = document.querySelector('.container');
  const btnClosePop = document.getElementById('close_pop');
  btnClosePop.addEventListener('click', () => {
    main.classList.remove('blured_main');
    popUpWindows.className = 'pop_down';
    popContainer.style.display = 'none';
    body.classList.remove('no_scroll');
  });
}

for (let i = 0; i < btnPopUp.length; i += 1) {
  const element = btnPopUp[i];
  const index = btnPopUp[i].getAttribute('id');
  element.addEventListener('click', () => {
    openPopUp(works[index]);
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

// Side Menu Social Links
// const defaultColor = '#666';
// const defaultColor = 'rgba(100,100,100, 0.5)';
const defaultColor = 'rgba(240,240,240, 0.9)';
const socialLinks = [
  {
    title: 'Facebook',
    url: 'https://facebook.com/SOSmzk',
    // icon: './../images/Icons/Facebook-Logo.png',
    icon: './../images/Icons/social logos/Facebook.svg',
    bgColor: defaultColor,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/celestin-souop-58341a109/',
    // icon: './../images/Icons/linkedin-icon-1024x1024-z5dvl47c.png',
    icon: './../images/Icons/social logos/linkedin.svg',
    bgColor: defaultColor,
  },
  {
    title: 'Twitter',
    url: 'https://x.com/SOSmzk',
    // icon: './../images/Icons/Logo_of_Twitter.svg.png',
    icon: './../images/Icons/social logos/twitter.svg',
    bgColor: defaultColor,
  },
  {
    title: 'YouTube',
    url: 'https://youtube.com/SOSmzk',
    // icon: './../images/Icons/YouTube_full-color_icon_(2017).png',
    icon: './../images/Icons/social logos/youtube.svg',
    bgColor: defaultColor,
  },
  {
    title: 'Github',
    url: 'https://github.com/mzirkof',
    // icon: './../images/Icons/github.svg',
    icon: './../images/Icons/social logos/github.svg',
    bgColor: defaultColor,
  },
];

let links = '';
socialLinks.forEach((element) => {
  links += `
        <div class="social_link section_container" style="background: ${element.bgColor};">
          <a class="section_container icon_link" style="background-image: url('${element.icon}');" target=blank href="${element.url}"></a>
        </div>
  `;
});

document.getElementById('socialLinks').innerHTML = links;
