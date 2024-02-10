
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
    'x.png',
]


function showGallery() {
    // galleryWindows.innerHTML = `${pop}`;
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
                            <div class="img_view" style="display:flex;">
                                <div class="img" id="current" style="background-image:url(./images/projects/${datas[imgIndex]});"></div>
                            </div>
                            <div class="img_view" hidden>Next Image</div>
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
  });

  const btnNext = document.getElementById('nextImg').addEventListener('click',e=>{
    // document.getElementById('dot_'+imgIndex).classList.remove('selected_dot')
    // console.log(document.getElementById(`dot_${imgIndex}`))
    (imgIndex<(datas.length-1))? imgIndex++ : imgIndex=0
    // console.log(imgIndex)
    document.getElementById('current').style.backgroundImage = `url(./images/projects/${datas[imgIndex]})`;
    document.getElementById('dot_'+imgIndex).classList.add('selected_dot')
  })

  const btnPrev = document.getElementById('prevImg').addEventListener('click',e=>{
    
    (imgIndex===0)? imgIndex=datas.length-1 : imgIndex--
    // console.log(imgIndex)
    document.getElementById('current').style.backgroundImage = `url(./images/projects/${datas[imgIndex]})`;
  })
}