function playSudoku() {
  const cells = [...document.getElementsByClassName('cel')];

  const orderedCels = [
    ['g11', 'g12', 'g13', 'g21', 'g22', 'g23', 'g31', 'g32', 'g33'],
    ['g14', 'g15', 'g16', 'g24', 'g25', 'g26', 'g34', 'g35', 'g36'],
    ['g17', 'g18', 'g19', 'g27', 'g28', 'g29', 'g37', 'g38', 'g39'],

    ['g41', 'g42', 'g43', 'g51', 'g52', 'g53', 'g61', 'g62', 'g63'],
    ['g44', 'g45', 'g46', 'g54', 'g55', 'g56', 'g64', 'g65', 'g66'],
    ['g47', 'g48', 'g49', 'g57', 'g58', 'g59', 'g67', 'g68', 'g69'],

    ['g71', 'g72', 'g73', 'g81', 'g82', 'g83', 'g91', 'g92', 'g93'],
    ['g74', 'g75', 'g76', 'g84', 'g85', 'g86', 'g94', 'g95', 'g96'],
    ['g77', 'g78', 'g79', 'g87', 'g88', 'g89', 'g97', 'g98', 'g99'],
  ];

  const baseGrid = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],

    [9, 1, 2, 3, 4, 5, 6, 7, 8],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],

    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
  ];

  const playGrid = baseGrid;
  const level = 1;
  const emptyCaseNumber = 30;
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function setCelValue(cel, value) {
    document.getElementById(cel).children[0].value = value;
  }

  function getCelValue(cel) {
    return document.getElementById(cel).children[0].value;
  }

  function getCelXLine(cel) {
    const g = parseInt(cel.split('')[1], 10);
    const num = parseInt(cel.split('')[2], 10);
    let XLine;
    if (g === 1 || g === 4 || g === 7) {
      if (num === 1 || num === 4 || num === 7) XLine = 1;
      else if (num === 2 || num === 5 || num === 8) XLine = 2;
      else if (num === 3 || num === 6 || num === 9) XLine = 3;
    } else if (g === 2 || g === 5 || g === 8) {
    // alert()
      if (num === 1 || num === 4 || num === 7) XLine = 4;
      else if (num === 2 || num === 5 || num === 8) XLine = 5;
      else if (num === 3 || num === 6 || num === 9) XLine = 6;
    } else if (g === 3 || g === 6 || g === 9) {
      if (num === 1 || num === 4 || num === 7) XLine = 7;
      else if (num === 2 || num === 5 || num === 8) XLine = 8;
      else if (num === 3 || num === 6 || num === 9) XLine = 9;
    }

    return XLine;
  }

  function getCelYLine(cel) {
    const g = parseInt(cel.split('')[1], 10);
    const num = parseInt(cel.split('')[2], 10);
    let YLine = 0;
    // console.log(g,num)
    // alert()
    if (g === 1 || g === 2 || g === 3) {
      if (num === 1 || num === 2 || num === 3) YLine = 1;
      else if (num === 4 || num === 5 || num === 6) YLine = 2;
      else if (num === 7 || num === 8 || num === 9) YLine = 3;
    } else if (g === 4 || g === 5 || g === 6) {
    // alert()
      if (num === 1 || num === 2 || num === 3) YLine = 4;
      else if (num === 4 || num === 5 || num === 6) YLine = 5;
      else if (num === 7 || num === 8 || num === 9) YLine = 6;
    } else if (g === 7 || g === 8 || g === 9) {
      if (num === 1 || num === 2 || num === 3) YLine = 7;
      else if (num === 4 || num === 5 || num === 6) YLine = 8;
      else if (num === 7 || num === 8 || num === 9) YLine = 9;
    }

    // alert(YLine)
    return YLine;
  }

  function changeCelBg(id, colored = true) {
    if (colored) {
      const arr = document.getElementById(id).getAttribute('class').split(' ');
      let flag = true;
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === 'error' || arr[i] === 'correct') {
          flag = false;
          break;
        }
      }
      if (flag) {
        document.getElementById(id).children[0].classList.add('hovered_cel');
        document.getElementById(id).classList.add('hovered_cel');
      }
    } else {
    // console.log('leaved remove className')
      document.getElementById(id).children[0].classList.remove('hovered_cel');
      document.getElementById(id).classList.remove('hovered_cel');
    }
  }

  function hoverYLine(lineNumber, colored = true) {
    switch (lineNumber) {
      case 1: {
        const tab = [
          'g11',
          'g12',
          'g13',
          'g21',
          'g22',
          'g23',
          'g31',
          'g32',
          'g33',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 2: {
        const tab = [
          'g14',
          'g15',
          'g16',
          'g24',
          'g25',
          'g26',
          'g34',
          'g35',
          'g36',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 3: {
        const tab = [
          'g17',
          'g18',
          'g19',
          'g27',
          'g28',
          'g29',
          'g37',
          'g38',
          'g39',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 4: {
        const tab = [
          'g41',
          'g42',
          'g43',
          'g51',
          'g52',
          'g53',
          'g61',
          'g62',
          'g63',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 5: {
        const tab = [
          'g44',
          'g45',
          'g46',
          'g54',
          'g55',
          'g56',
          'g64',
          'g65',
          'g66',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 6: {
        const tab = [
          'g47',
          'g48',
          'g49',
          'g57',
          'g58',
          'g59',
          'g67',
          'g68',
          'g69',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 7: {
        const tab = [
          'g71',
          'g72',
          'g73',
          'g81',
          'g82',
          'g83',
          'g91',
          'g92',
          'g93',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 8: {
        const tab = [
          'g74',
          'g75',
          'g76',
          'g84',
          'g85',
          'g86',
          'g94',
          'g95',
          'g96',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 9: {
        const tab = [
          'g77',
          'g78',
          'g79',
          'g87',
          'g88',
          'g89',
          'g97',
          'g98',
          'g99',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      default:
        break;
    }
  }

  function hoverXLine(lineNumber, colored = true) {
    switch (lineNumber) {
      case 1: {
        const tab = [
          'g11',
          'g14',
          'g17',
          'g41',
          'g44',
          'g47',
          'g71',
          'g74',
          'g77',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 2: {
        const tab = [
          'g12',
          'g15',
          'g18',
          'g42',
          'g45',
          'g48',
          'g72',
          'g75',
          'g78',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 3: {
        const tab = [
          'g13',
          'g16',
          'g19',
          'g43',
          'g46',
          'g49',
          'g73',
          'g76',
          'g79',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 4: {
        const tab = [
          'g21',
          'g24',
          'g27',
          'g51',
          'g54',
          'g57',
          'g81',
          'g84',
          'g87',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 5: {
        const tab = [
          'g22',
          'g25',
          'g28',
          'g52',
          'g55',
          'g58',
          'g82',
          'g85',
          'g88',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 6: {
        const tab = [
          'g23',
          'g26',
          'g29',
          'g53',
          'g56',
          'g59',
          'g83',
          'g86',
          'g89',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 7: {
        const tab = [
          'g31',
          'g34',
          'g37',
          'g61',
          'g64',
          'g67',
          'g91',
          'g94',
          'g97',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 8: {
        const tab = [
          'g32',
          'g35',
          'g38',
          'g62',
          'g65',
          'g68',
          'g92',
          'g95',
          'g98',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      case 9: {
        const tab = [
          'g33',
          'g36',
          'g39',
          'g63',
          'g66',
          'g69',
          'g93',
          'g96',
          'g99',
        ];
        tab.forEach((item) => { changeCelBg(item, colored); });
        break;
      }

      default:
        break;
    }
  }

  function setHoverage(cel, colored = true) {
    const coordinates = {
      x: getCelXLine(cel),
      y: getCelYLine(cel),
    };
    hoverXLine(coordinates.x, colored);
    hoverYLine(coordinates.y, colored);
  // console.log('Cel is in horizontal ', getCelYLine(cel),' and in Vertical ', getCelXLine(cel))
  }

  function compareToGridVal(val, id) {
    let res = false;
    for (let i = 0; i < orderedCels.length; i += 1) {
      const element = orderedCels[i];
      for (let j = 0; j < element.length; j += 1) {
        const item = element[j];
        if (item === id) {
          if (parseInt(playGrid[i][j], 10) === parseInt(val, 10)) {
            res = true;
          }
          break;
        }
      }
    }

    return res;
  }

  /* Cette fonction determine si un numero peut etre place dans une case
(Si il n'existe pas deja sur la ligne ou la colonne ou encore le meme groupe que cette case). */

  function setPlayingMode() {
    const arr = [];

    for (let i = 0; i < 81; i += 1) {
      arr.push(i);
    }

    // console.log(arr)
    const emptyIndexes = [];
    for (let i = 0; i < emptyCaseNumber; i += 1) {
      const random = Math.round(Math.random() * 100) % 81;
      // console.log(random)
      emptyIndexes.push(random);
    }
    // console.log(emptyIndexes);

    function removeValue(id) {
      const item = document.getElementById(id);
      item.classList.add('unknown');
      item.children[0].disabled = false;
      setCelValue(id, null);
    }

    emptyIndexes.forEach((item) => {
      const index = item + 1;

      if (index <= 9) {
        removeValue(orderedCels[0][item]);
      } else if (index <= 18) {
        item -= 9;
        removeValue(orderedCels[1][item]);
      } else if (index <= 27) {
        item -= 18;
        removeValue(orderedCels[2][item]);
      } else if (index <= 36) {
        item -= 27;
        removeValue(orderedCels[3][item]);
      } else if (index <= 45) {
        item -= 36;
        removeValue(orderedCels[4][item]);
      } else if (index <= 54) {
        item -= 45;
        removeValue(orderedCels[5][item]);
      } else if (index <= 63) {
        item -= 54;
        removeValue(orderedCels[6][item]);
      } else if (index <= 72) {
        item -= 63;
        removeValue(orderedCels[7][item]);
      } else if (index <= 81) {
        item -= 72;
        removeValue(orderedCels[8][item]);
      }
    });
  }

  function randomCompleter() {
    for (let i = 0; i < orderedCels.length; i += 1) {
      const element = orderedCels[i];
      for (let j = 0; j < element.length; j += 1) {
        const item = element[j];
        setCelValue(item, playGrid[i][j]);
      }
    }
    setTimeout(() => {
      setPlayingMode(level);
    }, 1);
  }

  function getCelsForXLine(line) {
    let arr = [];
    switch (line) {
      case 1:
        arr = ['g11', 'g14', 'g17', 'g41', 'g44', 'g47', 'g71', 'g74', 'g77'];
        break;
      case 2:
        arr = ['g12', 'g15', 'g18', 'g42', 'g45', 'g48', 'g72', 'g75', 'g78'];
        break;
      case 3:
        arr = ['g13', 'g16', 'g19', 'g43', 'g46', 'g49', 'g73', 'g76', 'g79'];
        break;
      case 4:
        arr = ['g21', 'g24', 'g27', 'g51', 'g54', 'g57', 'g81', 'g84', 'g87'];
        break;
      case 5:
        arr = ['g22', 'g25', 'g28', 'g52', 'g55', 'g58', 'g82', 'g85', 'g88'];
        break;
      case 6:
        arr = ['g23', 'g26', 'g29', 'g53', 'g56', 'g59', 'g83', 'g86', 'g89'];
        break;
      case 7:
        arr = ['g31', 'g34', 'g37', 'g61', 'g64', 'g67', 'g91', 'g94', 'g97'];
        break;
      case 8:
        arr = ['g32', 'g35', 'g38', 'g62', 'g65', 'g68', 'g92', 'g95', 'g98'];
        break;
      case 9:
        arr = ['g33', 'g36', 'g39', 'g63', 'g66', 'g69', 'g93', 'g96', 'g99'];
        break;

      default:
        break;
    }
    return arr;
  }
  function getCelsForYLine(line) {
    let arr = [];
    switch (line) {
      case 1:
        arr = ['g11', 'g12', 'g13', 'g21', 'g22', 'g23', 'g31', 'g32', 'g33'];
        break;
      case 2:
        arr = ['g14', 'g15', 'g16', 'g24', 'g25', 'g26', 'g34', 'g35', 'g36'];
        break;
      case 3:
        arr = ['g17', 'g18', 'g19', 'g27', 'g28', 'g29', 'g37', 'g38', 'g39'];
        break;
      case 4:
        arr = ['g41', 'g42', 'g43', 'g51', 'g52', 'g53', 'g61', 'g62', 'g63'];
        break;
      case 5:
        arr = ['g44', 'g45', 'g46', 'g54', 'g55', 'g56', 'g64', 'g65', 'g66'];
        break;
      case 6:
        arr = ['g47', 'g48', 'g49', 'g57', 'g58', 'g59', 'g67', 'g68', 'g69'];
        break;
      case 7:
        arr = ['g71', 'g72', 'g73', 'g81', 'g82', 'g83', 'g91', 'g92', 'g93'];
        break;
      case 8:
        arr = ['g74', 'g75', 'g76', 'g84', 'g85', 'g86', 'g94', 'g95', 'g96'];
        break;
      case 9:
        arr = ['g77', 'g78', 'g79', 'g87', 'g88', 'g89', 'g97', 'g98', 'g99'];
        break;

      default:
        break;
    }
    return arr;
  }

  function getSameGroupCels(cel) {
    let arr = [];
    const num = parseInt(cel.split('')[1], 10);
    switch (num) {
      case 1:
        arr = ['g11', 'g12', 'g13', 'g14', 'g15', 'g16', 'g17', 'g18', 'g19'];
        break;
      case 2:
        arr = ['g21', 'g22', 'g23', 'g24', 'g25', 'g26', 'g27', 'g28', 'g29'];
        break;
      case 3:
        arr = ['g31', 'g32', 'g33', 'g34', 'g35', 'g36', 'g37', 'g38', 'g39'];
        break;
      case 4:
        arr = ['g41', 'g42', 'g43', 'g44', 'g45', 'g46', 'g47', 'g48', 'g49'];
        break;
      case 5:
        arr = ['g51', 'g52', 'g53', 'g54', 'g55', 'g56', 'g57', 'g58', 'g59'];
        break;
      case 6:
        arr = ['g61', 'g62', 'g63', 'g64', 'g65', 'g66', 'g67', 'g68', 'g69'];
        break;
      case 7:
        arr = ['g71', 'g72', 'g73', 'g74', 'g75', 'g76', 'g77', 'g78', 'g79'];
        break;
      case 8:
        arr = ['g81', 'g82', 'g83', 'g84', 'g85', 'g86', 'g87', 'g88', 'g89'];
        break;
      case 9:
        arr = ['g91', 'g92', 'g93', 'g94', 'g95', 'g96', 'g97', 'g98', 'g99'];
        break;

      default:
        break;
    }
    return arr;
  }

  function checkNumber(num, cel) {
    let playable = true;
    const number = parseInt(num, 10);

    const usedXValues = getCelsForXLine(getCelXLine(cel));
    for (let i = 0; i < usedXValues.length; i += 1) {
      const element = usedXValues[i];
      if (element !== cel) {
        const celValue = parseInt(getCelValue(element), 10);
        // console.log(celValue)
        if (celValue === number) {
          playable = false;
          break;
        }
      }
    }

    if (playable) {
      const usedYValues = getCelsForYLine(getCelYLine(cel));
      // const usedYValues = getCelYLine(cel)
      // console.log('go',getCelYLine(cel))
      for (let i = 0; i < usedYValues.length; i += 1) {
        const element = usedYValues[i];

        if (element !== cel) {
          const celValue = parseInt(getCelValue(element), 10);
          // console.log(celValue)
          if (celValue === number) {
            playable = false;
            break;
          }
        }
      }
    }

    if (playable) {
      const usedGroupValues = getSameGroupCels(cel);
      for (let i = 0; i < usedGroupValues.length; i += 1) {
        const element = usedGroupValues[i];
        if (element !== cel) {
          const celValue = parseInt(getCelValue(element), 10);
          // console.log(celValue)
          if (celValue === number) {
            playable = false;
            break;
          }
        }
      }
    }

    return playable;
  }

  function VerifGrid() {
    for (let i = 0; i < orderedCels.length; i += 1) {
      const element = orderedCels[i];
      for (let j = 0; j < element.length; j += 1) {
        const item = element[j];
        // setCelValue(item,grille[i][j])
        const check = checkNumber(getCelValue(item), item);
        if (!check) {
          console.log(item, getCelValue(item), check);
        }
      }
    }
  }

  function setHoverEffects() {
    cells.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        const id = element.getAttribute('id');
        setHoverage(id);
      });

      element.addEventListener('mouseleave', () => {
        const id = element.getAttribute('id');
        setHoverage(id, false);
      });

      element.addEventListener('change', () => {
      // console.log(VerifGrid())
        element.classList.remove('unknown');
        const id = element.getAttribute('id');
        const check = compareToGridVal(getCelValue(id), id);
        if (!check) {
          console.log(id, getCelValue(id), check);
          element.classList.add('error');
        } else {
          element.classList.remove('error');
          element.classList.add('correct');
        }

        if (level === 100) {
          VerifGrid();
        }
      });
    });
  }

  randomCompleter();
  setHoverEffects();
  // drawSudoku()
  // setHoverEffects()
  // randomCompleter()
}

function drawSudoku(gameZone) {
  console.clear();
  console.log('Drawing the sudoku');
  const sudokuPlayGround = `
    <div class="sudoku">
    <div class="ctn">
      <section class="grille" id="g1">
        <section class="cel" id="g11"><input type="text" disabled  class="input" ></section>
        <section class="cel" id="g12"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g13"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g14"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g15"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g16"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g17"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g18"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g19"><input type="text" disabled   class="input" ></section>
      </section>
      <section class="grille">
        <section class="cel" id="g21"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g22"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g23"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g24"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g25"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g26"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g27"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g28"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g29"><input type="text" disabled   class="input" ></section>
      </section>
      <section class="grille" id="g3">
        <section class="cel" id="g31"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g32"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g33"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g34"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g35"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g36"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g37"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g38"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g39"><input type="text" disabled   class="input" ></section>
      </section>
      <section class="grille" id="g4">
        <section class="cel" id="g41"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g42"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g43"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g44"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g45"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g46"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g47"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g48"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g49"><input type="text" disabled   class="input" ></section>
      </section>
      <section class="grille" id="g5">
        <section class="cel" id="g51"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g52"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g53"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g54"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g55"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g56"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g57"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g58"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g59"><input type="text" disabled   class="input" ></section>
      </section>
      <section class="grille" id="g6">
        <section class="cel" id="g61"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g62"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g63"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g64"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g65"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g66"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g67"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g68"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g69"><input type="text" disabled   class="input" ></section>
      </section>
      <section class="grille" id="g7">
        <section class="cel" id="g71"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g72"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g73"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g74"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g75"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g76"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g77"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g78"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g79"><input type="text" disabled   class="input" ></section>
      </section>
      <section class="grille" id="g8">
        <section class="cel" id="g81"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g82"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g83"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g84"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g85"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g86"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g87"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g88"><input type="text" disabled   class="input" ></section>
        <section class="cel" id="g89"><input type="text" disabled   class="input" ></section>
      </section>
      <section class="grille" id="g9">
        <section class="cel" id="g91"><input type="text" disabled   class="input" id=""></section>
        <section class="cel" id="g92"><input type="text" disabled   class="input" id=""></section>
        <section class="cel" id="g93"><input type="text" disabled   class="input" id=""></section>
        <section class="cel" id="g94"><input type="text" disabled   class="input" id=""></section>
        <section class="cel" id="g95"><input type="text" disabled   class="input" id=""></section>
        <section class="cel" id="g96"><input type="text" disabled   class="input" id=""></section>
        <section class="cel" id="g97"><input type="text" disabled   class="input" id=""></section>
        <section class="cel" id="g98"><input type="text" disabled   class="input" id=""></section>
        <section class="cel" id="g99"><input type="text" disabled   class="input" id=""></section>
      </section>
    </div>
  </div>
  <div class="numbers">gg</div>
  `;
  gameZone.innerHTML = sudokuPlayGround;
}

let sudokuGameZone;

document.getElementById('pSudoku').addEventListener('click', () => {
  function goGame() {
    sudokuGameZone = document.getElementById('mainSudokuGame');
    //
    drawSudoku(sudokuGameZone);
    playSudoku();
    // alert('From Sudoku Game')
  }
  goGame();
});