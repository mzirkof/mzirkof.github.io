let MyText = 'a Smart Programmer';
const words = [
  'software developer 👩‍💻',
  'Smart Programmer 🐱‍💻',
  'Graphist',
  'Mentor 👨‍🏫',
  'Cameroonian 🌍',
  'a Teacher 🏫',
];
let write = true;
let index = 0;
function animatedText(container, word) {
  write = false;
  let j = 0;
  // [MyText] = [words[0]];
  MyText = word;
  // MyText = 'software developer';
  const textItem = container;
  const mySpeed = 50;
  const d = 100;
  const cursor = '<u class="cursor">|</u>';

  function goLeft(myText, limit = 0, speed = mySpeed, delay = d, random = false) {
    let result = myText;
    let i = myText.length;
    const interval = setInterval(() => {
      result = MyText.slice(0, i) + cursor;
      textItem.innerHTML = result;
      i -= 1;

      if (i === limit - 1) {
        clearInterval(interval);
        setTimeout(() => {
          if (random) {
            i = 0;
          } else {
            j += 1;
            if (j === words.length) j = 0;
          }

          MyText = words[j];
          // goRight(MyText);
          if (index >= words.length - 1) {
            index = 0;
          } else {
            index += 1;
          }
          write = true;
        }, delay);
      }
    }, speed / 5);
  }

  function goRight(myText, limit = myText.length, speed = mySpeed, delay = d) {
    let result = '';
    let i = 0;

    const interval = setInterval(() => {
      result += myText[i];
      const r = result + cursor;
      textItem.innerHTML = r;
      i += 1;

      if (i === limit) {
        i = 0;
        result = '';
        clearInterval(interval);
        setTimeout(() => {
          goLeft(MyText);
        }, delay * speed);
      }
    }, speed);
  }

  // goRight(MyText)
  goRight(MyText);
}

// alert()
const item = document.getElementById('animText');
setInterval(() => {
  if (write) {
    animatedText(item, words[index]);
  }
}, 1000);
