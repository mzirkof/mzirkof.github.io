// The body Tag Element of the web Page
// const body = document.getElementsByTagName('body')[0];

// Root Folder of The windows Code
const rootLocation = './scripts/Windows/';
const parentId = 'windows';

const cssFile = `<link rel="stylesheet" href="${rootLocation}styles/windows_styles.css">`;
// const cssSet = false;

function addNodeChild(parentId, child) {
  const div = document.getElementById(parentId);
  div.innerHTML += child;
  // console.log(div)

  // parent.innerHTML=`${parent.innerHTML}<br>${child}`
}

function removeChildren(parentId) {
  const div = document.getElementById(parentId);
  div.innerHTML = '';
}

function showWindow(windowContainer, name = 'Modal Window', contain = '', icon = '🏆') {
  let n = '';
  for (let index = 0; index < name.length; index += 1) {
    const element = name[index];
    n = (element === ' ') ? '_' : element;
  }
  const windowId = `close_${n}`;
  windowContainer.className = 'pop_up';

  const bg = document.getElementsByTagName('body')[0].children[0];
  // console.log(bg)

  // let imgIndex = 0;

  let pop = '';

  pop = `<section class="container window_container  gallery_ctn">
                  <div class="w_head">
                    <section class="section_container ctn_head">
                      <div class="w_title">
                          ${icon}  The Project : ${name}
                      </div>
                        <nav class="w_menu">
                          <img src="images/Normal Button/Tertiary/Enabled.svg" alt="" id="${windowId}">
                        </nav>
                    </section>
                  </div>


                  <hr id="divider">
                  <div class="w_content">
                      
                      `;

  // Here we put the contain of the inside or modal Window
  pop += `${contain}`;

  pop += `
                  </div>
              </section>`;

  windowContainer.innerHTML = `${pop}`;

  windowContainer.className = 'pop_up';

  bg.classList.add('blured_main');

  // // Removing scrolling possibility
  const body = document.getElementsByTagName('body')[0];
  body.classList.add('no_scroll');

  const popContainer = document.querySelector('.window_container');
  const btnClosePop = document.getElementById(windowId);
  btnClosePop.addEventListener('click', () => {
    bg.classList.remove('blured_main');
    windowContainer.className = 'pop_down';
    popContainer.style.display = 'none';
    imgIndex = 0;

    setTimeout(() => {
      removeChildren(parentId);
      body.classList.remove('no_scroll');
    }, 400);

    // clearTimeout(timeOut)
  });
}

function setLocalWindow(name, content) {
  // name=name.toLowerCase(name)

  // Adding the css file to DOM tree
  addNodeChild(parentId, cssFile);
  // if(!cssSet) {
  //     addNodeChild(parentId,cssFile)
  //     cssSet=true
  // }

  let n = '';
  for (let index = 0; index < name.length; index += 1) {
    const element = name[index];
    n += (element === ' ') ? '_' : element;
  }
  const child = `<section id='${n}'></section>`;
  addNodeChild(parentId, child);
  const windowContainer = document.getElementById(n);
  showWindow(windowContainer, name, content);
}

const windowBtn = document.getElementById('p0');
windowBtn.style.backgroundImage = "url('./../images/Snapshoot Portfolio.svg')";

const root = `${rootLocation}ProjectsDone/SiteB/`;
const cssFiles = `<link rel="stylesheet" href="${root}css/index.css">`;
addNodeChild(parentId, cssFiles);

const siteB = `
    <link rel="stylesheet" href="${root}css/index.css">
    <link rel="stylesheet" href="./css/neonsDeco.css">
<body id="body">
    <div class="mainSite">
        <header class="header">
            <div class="header_ctn">
                
                    <section class="logo">
                        <a href="./"> 👋 SOS MZK ❤️</a>
                    </section>
                
                <section class="menu">
                    
                    <div class="menu_ctn ctn">
                        <ol>
                            <li><a href="./index.html#HOME">HOME</a></li>
                            <li class="viewed"><a href="./index.html#COMANY">COMPANY</a></li>
                            <li><a href="./index.html#RULES">RULES</a></li>
                            <li><a href="./index.html#CANTACTUS">CONTACT US</a></li>
                        </ol>
                    </div>
                </section>
            </div>
        </header>
        
        <div class="banner">
            <div class="banner_ctn ctn" id="banner">

            <div class="decorations">
            <div class="bubbles">
                <div class="bubble" id="bubble">🌍</div>
                <div class="bubble" id="bubble2"></div>
                <div class="bubble" id="bubble3"></div>
                <div class="bubble" id="bubble4">🎶</div>
                <div class="bubble" id="bubble5"></div>
                <div class="bubble" id="bubble6"></div>
                <div class="bubble" id="bubble7"></div>
                <div class="bubble" id="bubble8"></div>
                <div class="centre" id="centre"></div>
            </div>

            <div class="neons"  id="neonContainer">
                <div class="neon" id="neon1">
                    <div class="dot"></div>
                </div>
            </div>
        </div>

        

                <section class="title">
                    <div class="title_ctn ctn">
                        <div class="head">
                            A  New Way To Design & Build The World For Devs
                        </div>
                        <div class="description">
                            Lorem, ipsum dolor sit amet consectetur, dignissimos exercitationem qui nesciunt asperiores quaerat accusantium!    
                        </div>
                    </div>
                    
                </section>
                <section class="faces">
                    <div class="faces_ctn ctn"></div>
                </section>
            </div>
        </div>

        <div class="cards">
            <div class="cards_ctn ctn">
                <div class="card">
                    <section class="circle">
                        <div class="img">
                        </div>
                    </section>
                    <section class="title">Get Lessons</section>
                    <section class="description">
                        The quick brown fox jumps over the lazy dog (0.694rem/27.78px) kshlkhjlkhdlkjahhdlkja kjjdnjndkokdosk sJLKS DSJKA EWOIIO oijojw kndkjsndjlk dlkösm oiwzqoiu oueoijuoie dlkdlkkjbsk jbcxcbsajcb kjbdkjsb
                    </section>
                </div>

                <!-- Card copies -->
                <div class="card">
                    <section class="circle">
                        <div class="img">
                        </div>
                    </section>
                    <section class="title">Watch Lessons</section>
                    <section class="description">
                        The quick brown fox jumps over the lazy dog (0.694rem/27.78px) kshlkhjlkhdlkjahhdlkja kjjdnjndkokdosk sJLKS DSJKA EWOIIO oijojw kndkjsndjlk dlkösm oiwzqoiu oueoijuoie dlkdlkkjbsk jbcxcbsajcb kjbdkjsb
                    </section>
                </div>
                <div class="card">
                    <section class="circle">
                        <div class="img">
                        </div>
                    </section>
                    <section class="title">Watch Lessons</section>
                    <section class="description">
                        The quick brown fox jumps over the lazy dog (0.694rem/27.78px) kshlkhjlkhdlkjahhdlkja kjjdnjndkokdosk sJLKS DSJKA EWOIIO oijojw kndkjsndjlk dlkösm oiwzqoiu oueoijuoie dlkdlkkjbsk jbcxcbsajcb kjbdkjsb
                    </section>
                </div>
            </div>
        </div>

        

        <!-- Decorations de la page -->
        <!--    <div class="decorations">
                <div class="bubbles">
                    <div class="bubble" id="bubble">🌍</div>
                    <div class="bubble" id="bubble2"></div>
                    <div class="bubble" id="bubble3"></div>
                    <div class="bubble" id="bubble4">🎶</div>
                    <div class="bubble" id="bubble5"></div>
                    <div class="bubble" id="bubble6"></div>
                    <div class="bubble" id="bubble7"></div>
                    <div class="bubble" id="bubble8"></div>
                    <div class="centre" id="centre"></div>
                </div>

                <div class="neons"  id="neonContainer">
                    <div class="neon" id="neon1">
                        <div class="dot"></div>
                    </div>
                </div>
            </div>
        -->
    </div>
</body>





<script src="./js/decoFunctions.js"></script>
<script src="./js/bulles.js"></script>
<script src="./js/neons.js"></script>




`;
windowBtn.addEventListener('click', () => {
  setLocalWindow('Project name', siteB);
});

/**
 * Tic Tac Toe Game Window
 */
const windowBtn1 = document.getElementById('p1');
// windowBtn1.style.backgroundImage="url('./../images/Snapshoot\ Portfolio.svg')"
windowBtn1.style.backgroundImage = "url('./../images/Icons/ttt.png')";

const root2 = `${rootLocation}ProjectsDone/TicTacToe/`;
const cssFiles2 = `<link rel="stylesheet" href="${root2}css/tttGame.css">`;
addNodeChild(parentId, cssFiles2);
const tttGame = `

<link rel="stylesheet" href="./css/tttGame.css">
</head>
<body>
    Just Have Fun Online while visiting the Web Application

    <div id="mainTttGame">
      <div class="container mainGameCtn">
      </div>
    </div>
</body>`;
// const ttt = `<div class="section_container" id="mainTttGame"></div>`
windowBtn1.addEventListener('click', () => {
  setLocalWindow('TicTacToe Game', tttGame);
});
