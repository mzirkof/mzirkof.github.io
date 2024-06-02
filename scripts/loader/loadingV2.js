const mySpeed = 500;
let loaderCounter = 10;
let loaderCompleted = true;

function setLoaderV2(loader) {
  loaderCompleted = false;
  const content = `
    <div class="loader_container">
      <div class="loader_ctnV2">
              <div  class="line">
              <section class="cube_ctn">
                  <section class="cube"   id="cube1"></section>
              </section>
              <section class="cube_ctn">
                  <section class="cube"   id="cube2"></section>
              </section>
              </div>
              <div class="line line2">
                  <section class="cube_ctn">
                      <section class="cube"   id="cube3"></section>
                  </section>
                  <section class="cube_ctn">
                      <section class="cube"   id="cube4"></section>
                  </section>
              </div>
      </div>
      <div class="brand">
        Portfolio V1.10 By <span class="name"><sup>©</sup>Mzirkof</span> <span class="last_part"> All Rights Reserved <span>
      </div>
    </div>`;

  loader.innerHTML = content;
  // console.log(loader.children[0].children)

  // const cubes = [...document.getElementsByClassName('cube')]
  let cubesCtn = [...loader.children[0].children[0].children];
  cubesCtn = [...cubesCtn[0].children, ...cubesCtn[1].children];
  // console.log(cubesCtn)

  const cubes = [];

  cubesCtn.forEach((element) => {
    // console.log(element.children[0])
    cubes.push(element.children[0]);
  });

  function animatedRemoving(speed = mySpeed) {
    let i = 1;
    let current = cubes[i];

    const interval = setInterval(() => {
      current = cubes[i];

      const index = i + 1;
      const cl = `appears${index}`;

      current.classList.remove(cl);
      current.classList.add(`dis${cl}`);
      i += 1;

      if (i === cubes.length) {
        clearInterval(interval);
        setTimeout(() => {
          for (let i = 0; i < cubes.length; i += 1) {
            const element = cubes[i];
            // const cl = `disappears${i}${1}`;
            element.classList.remove('colored');
            element.classList.remove('disappears1');
            element.classList.remove('disappears2');
            element.classList.remove('disappears3');
            element.classList.remove('disappears4');
          }
          // animatedAdding();
          loaderCounter += 1;
          loaderCompleted = true;
        }, speed * 0.5);
      }
    }, speed);
  }

  function animatedAdding(speed = mySpeed) {
    let i = 1;
    let current = cubes[i];
    cubes[0].classList.add('colored');
    const interval = setInterval(() => {
      // console.log(i)
      current = cubes[i];

      const index = i + 1;
      const cl = `appears${index}`;
      // console.log(cl)

      current.classList.add('colored');
      current.classList.add(cl);
      i += 1;

      if (i === cubes.length) {
        clearInterval(interval);
        setTimeout(() => {
          // cubes.forEach((element) => {
          //   // element.classList.remove('colored')
          // });
          i = 0;
          cubes[0].classList.add('colored');
          animatedRemoving();
          // animatedAdding()
        }, speed / 100);
        // i=1
      }
    }, speed);
  }

  animatedAdding();
}

const loader = document.getElementById('loader');
// const loader2 = document.getElementById('loader2')
setInterval(() => {
  if (loaderCounter >= 10 && loaderCompleted) {
    setLoaderV2(loader);
    // loaderCompleted = false;
  }
}, 1000);
