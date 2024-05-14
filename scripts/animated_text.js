let MyText = 'a Smart Programmer';
const words = [
  'software developer 👩‍💻',
  'Smart Programmer 🐱‍💻',
  'Graphist',
  'Mentor 👨‍🏫',
  'Cameroonian 🌍',
  'a Teacher 🏫',
];

function animatedText(container, words = []) {
  let j = 0;
  [MyText] = [words[0]];
  // MyText = 'software developer';
  const textItem = container;
  const mySpeed = 50;
  const d = 100;
  const cursor = '<u class="cursor">|</u>';
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
          goRight(MyText);
        }, delay);
      }
    }, speed);
  }

  goRight(MyText);
}

// alert()
const item = document.getElementById('animText');
animatedText(item, words);
