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

  let imgIndex = 0;

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
// windowBtn.style.backgroundImage = "url('./../images/Snapshoot\ Portfolio.svg')";
windowBtn.style.backgroundImage = "url('./../images/Snapshoot Portfolio.svg')";

windowBtn.addEventListener('click', () => {
  setLocalWindow('Project name', siteB);
});

const windowBtn1 = document.getElementById('p1');
// windowBtn1.style.backgroundImage="url('./../images/Snapshoot\ Portfolio.svg')"
windowBtn1.style.backgroundImage = "url('./../images/Icons/ttt.png')";

// const ttt = `<div class="section_container" id="mainTttGame"></div>`
windowBtn1.addEventListener('click', () => {
  setLocalWindow('TicTacToe Game', tttGame);
});
