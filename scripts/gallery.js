
let btnGallery= document.getElementById('gallery')

let galleryWindows = document.getElementById('galleryContainer')
// const main = document.querySelector('.main');

btnGallery.addEventListener('click',e=>{
    e.preventDefault()
    showGallery()
})

let datas=[
    'a.jpg',
    'f.jpg',
    'portfolio.png',
    'e.jpg',
    'm.png',
    'x.png',
]


function showGallery() {
    // galleryWindows.innerHTML = `${pop}`;

    let delai = 1000*5;
    let interval=setInterval(() => {
      moveImg()
    }, delai);
    galleryWindows.className = 'pop_up';
    main.classList.add('blured_main')

    let imgIndex=0

    let pop=``;

  pop = `<section class="container gallery_ctn">
                    <div class="pop_head">
                      <nav class="menu">
                        <img src="images/Normal Button/Tertiary/Enabled.svg" alt="" id="close_pop">
                      </nav>
                    </div>
                    <div class="grid-item pop_title">
                        The Projects Images Gallery
                    </div>
                    <div class="grid-item image_view">
                        <section class="img_nav prev" id="prevImg"><</section>
                        <section class="img_nav next" id="nextImg">></section>
                        <div class="view">
                            <div class="img_view" hidden>Previous Image</div>
                            <div class="img_view currentImgView" id="currentImgView" style="display:flex;">
                                <div class="img" id="current" style="background-image:url(./images/projects/${datas[imgIndex]});"></div>
                            </div>
                            <div class="img_view" id="nextImgView" hidden>Next Image</div>
                        </div>
                        <div class="track">`
                            datas.map((value,key)=>{
                                pop+=(key===0)? `<div class="dot current_dot" id="dot_${key}"></div>`:`<div class="dot " id="dot_${key}"></div>`
                            })

                        pop+=`
                            
                        </div>
                    </div>
                </section>`;


  galleryWindows.innerHTML = `${pop}`;
  galleryWindows.className = 'pop_up';

  main.classList.add('blured_main');

  const popContainer = document.querySelector('.container');
  const btnClosePop = document.getElementById('close_pop');
  btnClosePop.addEventListener('click', () => {
    main.classList.remove('blured_main');
    galleryWindows.className = 'pop_down';
    popContainer.style.display = 'none';
    imgIndex=0;
    clearTimeout(timeOut)
  });

  const btnNext = document.getElementById('nextImg').addEventListener('click',e=>{
    // document.getElementById('dot_'+imgIndex).classList.remove('selected_dot')
    // console.log(document.getElementById(`dot_${imgIndex}`))
    clearInterval(interval)
    moveImg()
  })

  const btnPrev = document.getElementById('prevImg').addEventListener('click',e=>{
    clearInterval(interval)
    moveImg(-1)
  })

  function moveImg(direction=1) {
    // console.log(imgIndex)
    clearInterval(interval)
    if(direction==1){
      (imgIndex<(datas.length-1))? imgIndex++ : imgIndex=0


    

    // Remove current dot
    document.getElementsByClassName('current_dot')[0].classList.remove('current_dot')

    // Changement d'image
    changeImg(imgIndex,1,1)
    // Set next dot
    document.getElementById('dot_'+imgIndex).classList.add('current_dot')
    }

    else{
      (imgIndex===0)? imgIndex=datas.length-1 : imgIndex--
    
      // Remove current dot
    document.getElementsByClassName('current_dot')[0].classList.remove('current_dot')

    // Set next dot
    document.getElementById('dot_'+imgIndex).classList.add('current_dot')
    // Changement d'image
    changeImg(imgIndex,0,1)
    }


    
    

    interval=setInterval(() => {
      moveImg()
    }, delai);
  }

  let timeOut
  function changeImg(imgIndex,direction=1,v=0) {
    // console.log('Changing image annimation');

    clearTimeout(timeOut)
    let currentView = document.getElementsByClassName('currentImgView')[0]

    const navBtn=document.getElementsByClassName('img_nav')
    navBtn[0].style.display='none'
    navBtn[1].style.display='none'

    switch (v) {
      case 1:{

        if (direction==1) {

          // passage au suivant
          currentView.style.transform='translateX(-100%)'
          // document.getElementById('nextImgView').style.display='flex'
          
        } else {
          // passage au precedent
          // document.getElementById('currentImgView').style.transform='translateX(100%)'
          currentView.style.transform='translateX(100%)'
        }
        
        timeOut=setTimeout(() => {
          currentView.style.display='none'
          document.getElementById('current').style.backgroundImage = `url(./images/projects/${datas[imgIndex]})`;
          timeOut=setTimeout(() => {
            currentView.style.transform='translateX(0)'
            currentView.style.display='flex'
            timeOut=setTimeout(() => {
              navBtn[0].style.display='flex'
              navBtn[1].style.display='flex'
            }, 1400);
            
          }, 400);
        }, 900);
        // document.getElementById('currentImgView').style.animation='moveLeft'
      }
        
        break;
    
      default:
        {
          document.getElementById('current').style.backgroundImage = `url(./images/projects/${datas[imgIndex]})`;
          break;
        }
        
    }
    
  }
}