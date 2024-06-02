const btnGallery = document.getElementById('gallery');

const galleryWindows = document.getElementById('galleryContainer');
let timeOut;
let interval;
// const main = document.querySelector('.main');
const pageBody = document.getElementById('mainPage');

const images = [
  'a.jpg',
  'f.jpg',
  'portfolio.png',
  'e.jpg',
  'm.png',
  'x.png',
  'SiteBCapture.png',
  'TttCapture.png',
];

function showGallery() {
  const delay = 1000 * 8;

  let imgIndex = 0;

  let pop = '';

  pop = `<section class="container gallery_ctn">
                    <div class="g_pop_head">
                      <div class="grid-item pop_title">
                          The Projects Images Gallery
                      </div>
                      <nav class="menu">
                        <img src="images/Normal Button/Tertiary/Enabled.svg" class="close_pop" alt="" id="close_gallery">
                      </nav>
                    </div>
                    <div class="grid-item image_view">
                        <section class="img_nav prev" id="prevImg"><</section>
                        <section class="img_nav next" id="nextImg">></section>
                        <div class="view">
                            <div class="img_view" hidden>Previous Image</div>
                            <div class="img_view currentImgView" id="currentImgView" style="display:flex;">
                                <div class="img" id="current" style="background-image:url(./images/projects/${images[imgIndex]});"></div>
                            </div>
                            <div class="img_view" id="nextImgView" hidden>Next Image</div>
                        </div>
                        <div class="track">`;
  images.map((value, key) => {
    pop += (key === 0) ? `<div class="dot current_dot" id="dot_${key}"></div>` : `<div class="dot " id="dot_${key}"></div>`;
    return 1;
  });

  pop += `
                            
                        </div>
                    </div>
                </section>`;

  galleryWindows.innerHTML = `${pop}`;
  galleryWindows.className = 'pop_up';
  pageBody.classList.add('blured_main');

  // Removing scrolling possibility
  const body = document.getElementsByTagName('body')[0];
  body.classList.add('no_scroll');

  const popContainer = document.querySelector('.container');
  const btnClosePop = document.getElementById('close_gallery');

  function changeImg(imgIndex, direction = 1, v = 0) {
    // console.log('Changing image annimation');

    clearTimeout(timeOut);
    const currentView = document.getElementsByClassName('currentImgView')[0];

    const navBtn = document.getElementsByClassName('img_nav');
    navBtn[0].style.display = 'none';
    navBtn[1].style.display = 'none';

    switch (v) {
      case 1: {
        if (direction === 1) {
          // passage au suivant
          currentView.style.transform = 'translateX(-100%)';
        } else {
          // passage au precedent
          currentView.style.transform = 'translateX(100%)';
        }

        timeOut = setTimeout(() => {
          currentView.style.display = 'none';
          document.getElementById('current').style.backgroundImage = `url(./images/projects/${images[imgIndex]})`;
          timeOut = setTimeout(() => {
            currentView.style.transform = 'translateX(0)';
            currentView.style.display = 'flex';
            timeOut = setTimeout(() => {
              navBtn[0].style.display = 'flex';
              navBtn[1].style.display = 'flex';
            }, 1400);
          }, 400);
        }, 900);
        break;
      }

      case 2: {
        timeOut = 0;
        break;
      }

      default:
      {
        document.getElementById('current').style.backgroundImage = `url(./images/projects/${images[imgIndex]})`;
        break;
      }
    }
  }

  function moveImg(direction = 1) {
    // console.log(imgIndex)
    clearInterval(interval);
    if (direction === 1) {
      if (imgIndex < (images.length - 1)) imgIndex += 1; else imgIndex = 0;

      // Remove current dot
      document.getElementsByClassName('current_dot')[0].classList.remove('current_dot');

      // Changement d'image
      changeImg(imgIndex, 1, 1);
      // Set next dot
      document.getElementById(`dot_${imgIndex}`).classList.add('current_dot');
    } else {
      if (imgIndex === 0) imgIndex = images.length - 1; else imgIndex -= 1;

      // Remove current dot
      document.getElementsByClassName('current_dot')[0].classList.remove('current_dot');

      // Set next dot
      document.getElementById(`dot_${imgIndex}`).classList.add('current_dot');
      // Changement d'image
      changeImg(imgIndex, 0, 1);
    }

    interval = setInterval(() => {
      moveImg();
    }, delay);
  }

  interval = setInterval(() => {
    moveImg();
  }, delay);

  btnClosePop.addEventListener('click', () => {
    pageBody.classList.remove('blured_main');
    galleryWindows.className = 'pop_down';
    popContainer.style.display = 'none';
    // imgIndex=0;
    body.classList.remove('no_scroll');
    clearInterval(interval);
    clearTimeout(timeOut);
  });

  document.getElementById('nextImg').addEventListener('click', () => {
    clearInterval(interval);
    moveImg();
  });

  document.getElementById('prevImg').addEventListener('click', () => {
    clearInterval(interval);
    moveImg(-1);
  });
}

btnGallery.addEventListener('click', (e) => {
  e.preventDefault();
  // alert()
  showGallery();
});