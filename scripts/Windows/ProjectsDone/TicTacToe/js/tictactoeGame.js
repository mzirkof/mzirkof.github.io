let gameZone = document.getElementById('mainTttGame');
// console.log(gameZone);
const playerMzk = 3;
const playerOne = 1;
const playerTwo = 2;

const neutral = 0;

const size = 3;
let gameStarted = false;
let playingPlayer = playerOne;
let gameResult = 0;
let roundNumber = 0;
// let matrix = [...initMatrix(3)]

const t = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
const matrix = t;

// Mode de Jeu : 0 -> visitor vs Mzk  and other -> visitors together
let gameMode = 0;

// When playing vs mzk this is the level of mzk
let mzkLevel = 0;
let mzkIsThinking = false;

// Function that control the Game result
// (Is there a winner or is it a Draw Game Or the Game is steel going on ?)
function checkGame() {
  function isWining(player) {
    let winner = false;
    if (
      (matrix[0][0] === player)
      && (matrix[0][1] === player)
      && (matrix[0][2] === player)) winner = true;

    else if (
      (matrix[0][0] === player)
      && (matrix[1][0] === player)
      && (matrix[2][0] === player)
    ) winner = true;

    else if (
      (matrix[1][0] === player)
      && (matrix[1][1] === player)
      && (matrix[1][2] === player)
    ) winner = true;
    else if (
      (matrix[0][1] === player)
      && (matrix[1][1] === player)
      && (matrix[2][1] === player)
    ) winner = true;

    else if (
      (matrix[2][0] === player)
      && (matrix[2][1] === player)
      && (matrix[2][2] === player)
    ) winner = true;

    else if (
      (matrix[0][2] === player)
      && (matrix[1][2] === player)
      && (matrix[2][2] === player)
    ) winner = true;

    else if (
      (matrix[0][0] === player)
      && (matrix[1][1] === player)
      && (matrix[2][2] === player)
    ) winner = true;

    else if (
      (matrix[0][2] === player)
      && (matrix[1][1] === player)
      && (matrix[2][0] === player)
    ) winner = true;
    return winner;
  }

  let check;
  if (isWining(playerOne)) {
    check = {
      winned: true,
      winner: playerOne,
    };
  } else if (isWining(playerTwo)) {
    check = {
      winned: true,
      winner: playerTwo,
    };
  } else if (isWining(playerMzk)) {
    check = {
      winned: true,
      winner: playerMzk,
    };
  } else {
    check = {
      winned: false,
      winner: 0,
    };
  }

  return check;
}

// Function that check if the Visitor is about to win
function checkWinForPlayer(player) {
  function willWin(player = playerOne) {
    // const player = playerTwo
    let result = {
      willWin: false,
      winningCoordinates: { i: -10, j: -10 },
    };

    // ============== 0 - 1 ==============
    if (matrix[0][1] === player) {
      if (matrix[0][0] === player && matrix[0][2] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 0, j: 2 },
        };
      } else if (matrix[0][2] === player && matrix[0][0] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 0, j: 0 },
        };
      }
    }

    // ================== 1 - 0 ====================
    if (matrix[1][0] === player) {
      if (matrix[0][0] === player && matrix[2][0] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 2, j: 0 },
        };
      } else if (matrix[2][0] === player && matrix[0][0] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 0, j: 0 },
        };
      }
    }

    // ================= 1 - 1 ====================
    if (matrix[1][1] === player) {
      if (matrix[1][0] === player && matrix[1][2] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 1, j: 2 },
        };
      } else if (matrix[1][2] === player && matrix[1][0] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 1, j: 0 },
        };
      } else if (matrix[0][1] === player && matrix[2][1] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 2, j: 1 },
        };
      } else if (matrix[2][1] === player && matrix[0][1] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 0, j: 1 },
        };
      } else if (matrix[0][2] === player && matrix[2][0] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 2, j: 0 },
        };
      } else if (matrix[2][0] === player && matrix[0][2] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 0, j: 2 },
        };
      } else if (matrix[0][0] === player && matrix[2][2] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 2, j: 2 },
        };
      } else if (matrix[2][2] === player && matrix[0][0] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 0, j: 0 },
        };
      }
    }

    // ================ 1 - 2 ==================
    if (matrix[1][2] === player) {
      if (matrix[0][2] === player && matrix[2][2] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 2, j: 2 },
        };
      } else if (matrix[2][2] === player && matrix[0][2] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 0, j: 2 },
        };
      }
    }

    // ================== 2 - 1 ====================
    if (matrix[2][1] === player) {
      if (matrix[2][0] === player && matrix[2][2] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 2, j: 2 },
        };
      } else if (matrix[2][2] === player && matrix[2][0] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 2, j: 0 },
        };
      }
    }

    // =================== Autres cas ===================
    if (matrix[0][0] === player && matrix[0][2] === player) {
      if (matrix[0][1] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 0, j: 1 },
        };
      }
    }

    if (matrix[1][0] === player && matrix[1][2] === player) {
      if (matrix[1][1] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 1, j: 1 },
        };
      }
    }

    if (matrix[2][0] === player && matrix[2][2] === player) {
      if (matrix[2][1] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 2, j: 1 },
        };
      }
    }

    if (matrix[0][0] === player && matrix[2][0] === player) {
      if (matrix[1][0] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 1, j: 0 },
        };
      }
    }

    if (matrix[0][1] === player && matrix[2][1] === player) {
      if (matrix[1][1] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 1, j: 1 },
        };
      }
    }

    if (matrix[0][2] === player && matrix[2][2] === player) {
      if (matrix[1][2] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 1, j: 2 },
        };
      }
    }

    if (matrix[0][0] === player && matrix[2][2] === player) {
      if (matrix[1][1] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 1, j: 1 },
        };
      }
    }

    if (matrix[0][2] === player && matrix[2][0] === player) {
      if (matrix[1][1] === neutral) {
        result = {
          willWin: true,
          winningCoordinates: { i: 1, j: 1 },
        };
      }
    }

    if (result.willWin) {
      const val = matrix[result.winningCoordinates.i][result.winningCoordinates.j];
      // console.log(result.winningCoordinates.i,result.winningCoordinates.j)
      // console.log(val,matrix)
      if (val !== 0 && val !== playerMzk) {
        result = {
          willWin: false,
          winningCoordinates: { x: false, y: false },
        };
      }
    }

    return result;
  }
  return willWin(player);
}

function resetMatrix() {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      matrix[i][j] = 0;
    }
  }
}

function getRandomEmptyPlace() {
  const arr = [];

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      if (matrix[i][j] === neutral) {
        arr.push({ i, j });
      }
    }
  }
  return arr;
}

function refreshCanvas() {
  const places = [...document.getElementsByClassName('place')];

  function updatePlace(element, value) {
    if (value !== 0) {
      const pion = `<div class=" pion j${value}"></div>`;
      element.innerHTML = pion;
    }
  }

  if (gameStarted && gameMode === 0) {
    document.getElementById('level').style.display = 'none';
  }

  places.forEach((element) => {
    const id = element.getAttribute('id');
    switch (id) {
      case 'p1': {
        updatePlace(element, matrix[0][0]);
        break;
      }
      case 'p2': {
        updatePlace(element, matrix[0][1]);
        break;
      }
      case 'p3': {
        updatePlace(element, matrix[0][2]);
        break;
      }
      case 'p4': {
        updatePlace(element, matrix[1][0]);
        break;
      }
      case 'p5': {
        updatePlace(element, matrix[1][1]);
        break;
      }
      case 'p6': {
        updatePlace(element, matrix[1][2]);
        break;
      }
      case 'p7': {
        updatePlace(element, matrix[2][0]);
        break;
      }
      case 'p8': {
        updatePlace(element, matrix[2][1]);
        break;
      }
      case 'p9': {
        updatePlace(element, matrix[2][2]);
        break;
      }

      default:
        break;
    }
    // console.log(element.getAttribute('id'))
  });

  // console.log(matrix)
}

function gameDecision(currentResult, roundNumber) {
  mzkIsThinking = false;
  const decision = document.getElementById('result');

  if (currentResult.winned) {
    // console.log(`congratulations to player ${currentResult.winner}`);
    // console.log('End of the Game');
    document.getElementById('player').innerHTML = '...';

    // decision.innerHTML = `Player ${currentResult.winner} Won !`
    if (gameMode === 0) {
      if (currentResult.winner === 3) {
        decision.classList.add('loosed');
        decision.innerHTML = '👩‍💻 Mzirkof Wins !';
      } else {
        decision.classList.add('winned');
        decision.innerHTML = 'Great 🐱‍🏍 You Win !';
      }
      document.getElementById('level').style.display = 'flex';
    } else {
      decision.classList.add('winned');
      decision.innerHTML = `🥸 Player ${currentResult.winner} Win !`;
    }
  } else if (roundNumber > size + 1) {
    // console.log('It is a Draw Game');
    // console.log('End of the Game');
    // decision.classList.remove('winned')
    decision.classList.add('drawn');
    decision.innerHTML = 'It is a Drawn Game !';
    document.getElementById('level').style.display = 'flex';
  }
}

function generateNextPion(level = 0) {
  console.log('Mzirkof is thinking about his Next Pion place');
  let nextPion = {
    willWin: false,
    winningCoordinates: {
      i: -10,
      j: -10,
    },
  };

  const places = getRandomEmptyPlace();

  const randomPlace = places[Math.floor(Math.random() * 10) % places.length];

  switch (level) {
    case 0: {
      /* Niveau 0 = Null
       * Aucune logique de reflexion. Juste jouer dans une case vide
       * Determinee aleatoirement
       * */
      if (places.length >= 1) {
        // nextPion.winningCoordinates.i= places[0].i
        // nextPion.winningCoordinates.j= places[0].j
        nextPion.winningCoordinates.i = randomPlace.i;
        nextPion.winningCoordinates.j = randomPlace.j;
      }

      break;
    }

    /**
     * Niveau 1 : une seule Logique :
     * Jouer au hasard Lorsque l#adversaire n'est pas sur le point de gagner
     * et le contrer au cas contraire
     */
    case 1: {
      if (roundNumber === 0) {
        nextPion.winningCoordinates.i = randomPlace.i;
        nextPion.winningCoordinates.j = randomPlace.j;
      } else if (checkWinForPlayer(playerOne).willWin) {
        nextPion = checkWinForPlayer(playerOne);
      } else if (places.length >= 1) {
        nextPion.winningCoordinates.i = places[0].i;
        nextPion.winningCoordinates.j = places[0].j;
      }
      break;
    }

    /**
     * Niveau 2 : Niveau Ultime de Mzirkof
     * 2 regles ou Logiques :
     * # D'abord gagner si possible
     * # Empecher l'adversaire de Gagner ensuite
     */
    case 2: {
      if (roundNumber === 0) {
        if (matrix[1][1] === neutral) {
          nextPion.winningCoordinates.i = 1;
          nextPion.winningCoordinates.j = 1;
        } else {
          nextPion.winningCoordinates.i = places[0].i;
          nextPion.winningCoordinates.j = places[0].j;
        }
      } else if (checkWinForPlayer(playerMzk).willWin) {
        nextPion = checkWinForPlayer(playerMzk);
      } else if (checkWinForPlayer(playerOne).willWin) {
        nextPion = checkWinForPlayer(playerOne);
      } else if (places.length >= 1) {
        nextPion.winningCoordinates.i = places[0].i;
        nextPion.winningCoordinates.j = places[0].j;
      }
      break;
    }

    default: {
      // console.log('Mzk level is Default level ==> 0');
      if (roundNumber === 0) {
        nextPion.winningCoordinates.i = 1;
        nextPion.winningCoordinates.j = 0;
      } else {
        nextPion = checkWinForPlayer(playerOne);
      }
      break;
    }
  }

  return nextPion;
}

function play(coordinates) {
  // setMatrixValue(coordinates,playingPlayer);
  console.log(coordinates);
  refreshCanvas();
  if (gameMode === 0) {
    if (playingPlayer === playerMzk) {
      roundNumber += 1;
    }
    playingPlayer = (playingPlayer === playerOne) ? playerMzk : playerOne;

    if (playingPlayer === playerMzk) {
      document.getElementById('player').innerHTML = 'Mzirkof';
      mzkIsThinking = true;
      gameResult = checkGame();
      if (!gameResult.winned) {
        const logic = generateNextPion(mzkLevel);
        // console.log(logic, `Mzk is thinking for his ${roundNumber + 1} round`);
        setTimeout(() => {
          // console.log('Mzirkof has played his turn');
          mzkIsThinking = false;

          const { i } = logic.winningCoordinates;
          const { j } = logic.winningCoordinates;
          if (i >= 0 && j >= 0) {
            matrix[i][j] = playingPlayer;
            play({ i, j });
            gameResult = checkGame();
            gameDecision(gameResult, roundNumber);
          }
        }, 1000);
      }
    } else {
      document.getElementById('player').innerHTML = `Player ${playingPlayer}`;
    }
  } else {
    if (playingPlayer === playerTwo) {
      roundNumber += 1;
    }
    playingPlayer = (playingPlayer === playerOne) ? playerTwo : playerOne;
    document.getElementById('player').innerHTML = `Player ${playingPlayer}`;
  }
}

/**
 * a player proceed with his action event
 * @params {element} params
 *      a
 */
function playEvent(element) {
  const id = element.getAttribute('id');
  switch (id) {
    case 'p1': {
      matrix[0][0] = playingPlayer;
      const coordinates = { line: 0, column: 0 };
      play(coordinates);
      break;
    }
    case 'p2': {
      // console.log('action of place 2')
      matrix[0][1] = playingPlayer;
      const coordinates = { line: 0, column: 1 };
      play(coordinates);
      break;
    }
    case 'p3': {
      matrix[0][2] = playingPlayer;
      const coordinates = { line: 1, column: 0 };
      play(coordinates);
      break;
    }
    case 'p4': {
      matrix[1][0] = playingPlayer;
      const coordinates = { line: 1, column: 0 };
      play(coordinates);
      break;
    }
    case 'p5': {
      matrix[1][1] = playingPlayer;
      const coordinates = { line: 1, column: 1 };
      play(coordinates);
      break;
    }
    case 'p6': {
      matrix[1][2] = playingPlayer;
      const coordinates = { line: 1, column: 2 };
      play(coordinates);
      break;
    }
    case 'p7': {
      matrix[2][0] = playingPlayer;
      const coordinates = { line: 2, column: 0 };
      play(coordinates);
      break;
    }
    case 'p8': {
      matrix[2][1] = playingPlayer;
      const coordinates = { line: 2, column: 1 };
      play(coordinates);
      break;
    }
    case 'p9': {
      matrix[2][2] = playingPlayer;
      const coordinates = { line: 2, column: 2 };
      play(coordinates);
      break;
    }

    default:
      break;
  }
}

function displayMzkLevel() {
  // console.log(mzkLevel)
  if (mzkLevel === 0) return 'Beginner';
  if (mzkLevel === 1) return 'Medium';
  return 'Expert';
  // return (mzkLevel === 0) ? 'Beginner' : (mzkLevel === 1) ? 'Medium' : 'Expert';
}

function setEventListener() {
  const places = [...document.getElementsByClassName('place')];
  places.forEach((element) => {
    element.addEventListener('click', () => {
      if (mzkIsThinking) {
        // console.log('Please wait for Mzirkof to play');
      } else if (gameResult.winned) {
        // console.log('yes');
      } else if (roundNumber > size + 1) {
        // console.log('no');
      } else {
        if (roundNumber === size + 1) roundNumber += 1;
        if (!gameStarted) {
          gameStarted = true;
        }
        playEvent(element);
        gameResult = checkGame();
        gameDecision(gameResult, roundNumber);
      }
    });
  });

  function updatePlace(element, value) {
    if (value === 0) {
      element.innerHTML = '';
    } else {
      element.innerHTML = value;
    }
  }

  const resetBtn = document.getElementById('resetGame');
  resetBtn.addEventListener('click', () => {
    resetBtn.innerText = 'Start New Game';
    // console.clear();
    if (gameStarted) {
      // Reset The matrix and set game started to false
      // console.log('resetting the game', resetBtn);

      resetMatrix();
      const places = [...document.getElementsByClassName('place')];

      places.forEach((element) => {
        updatePlace(element, 0);
      });
      gameStarted = false;
      playingPlayer = playerOne;
      gameResult = 0;
      roundNumber = 0;
      const decision = document.getElementById('result');
      decision.innerHTML = '';
      decision.classList.remove('drawn');
      decision.classList.remove('winned');
      decision.classList.remove('loosed');
      document.getElementById('player').innerHTML = `Player ${playingPlayer}`;
    } else {
      console.log('nothing to reset. no Game is going on');
      // console.log('matrix is '+matrix)
    }
  });

  const levelItem = document.getElementById('level');
  levelItem.addEventListener('change', () => {
    mzkLevel = parseInt(levelItem.value, 10);
    document.getElementById('currentLevel').innerHTML = displayMzkLevel();
  });
}

function drawCanvas() {
  // console.log('Drawing canvas')
  let content = `
        <div class="container mainGameCtn">
        <div class="game">
            <div class="place" id="p1"></div>
            <div class="place" id="p2"></div>
            <div class="place" id="p3"></div>
            <div class="place" id="p4"></div>
            <div class="place" id="p5"></div>
            <div class="place" id="p6"></div>
            <div class="place" id="p7"></div>
            <div class="place" id="p8"></div>
            <div class="place" id="p9"></div>
        </div>
    </div>
    <div class="gameTools">
        <span class="title">Games Tools</span>
        
        <div class="tools">
            <span class="title result" id="result"></span>
            <section class="modes">
              <section class="mode_select">
                 <fieldset>
                  <input type="radio" id="tttGameMode1" name="tttGameMode" checked>
                  <label for="tttGameMode1">You Vs Mzirkof</label> 
                  
                </fieldset>
                <fieldset>
                  <input type="radio" id="tttGameMode2" name="tttGameMode">
                  <label for="tttGameMode2">Two Visitors</label>
                </fieldset>
              </section>
              <section class="mode_config">
                <section class="mode" id="mode0">
                  <section class="mode_t">So you want to play vs Mzirkof </section>
                  <section class="mode_d">Select a Playing level and start Playing</section>
                  <section>
                    <select id="level">
                      <option value="0">Beginner</option>
                      <option value="1">Medium</option>
                      <option value="2">Expert</option>
                    </select>
                  </section>
                  <section class="display_mode">
                    Current Mzirkof Level : 
                    <span id="currentLevel">${displayMzkLevel()}</span>
                  </section>
                </section>
                <section class="mode" id="mode1" hidden>
                  <h2>Have fun with Friends </h2>
                  <span>You vs Your Friend :</span>
                </section>
              </section>
            </section>
            <button id="resetGame">Start Game</button>
            
        </div>`;
  if (gameMode === 0) {
    content += `<span class="title currentPlayer">Current player is  <span class="player" id="player">${playingPlayer}</span></span>`;
  } else {
    content += `<span class="title currentPlayer">Current player is  <span class="player" id="player">${playingPlayer}</span></span>`;
  }

  content += '</div>';

  console.log(gameZone, content);
  gameZone.innerHTML = content;
  setEventListener();
}

function getGameMode() {
  gameMode = 1;
  const gameMode1 = document.getElementById('tttGameMode2');
  // console.log(gameMode1.value)
  if (gameMode1.getAttribute('checked') !== 'checked') {
    gameMode = 0;

    document.getElementById('mode1').style.display = 'none';
    document.getElementById('mode0').style.display = 'flex';
  } else {
    document.getElementById('mode0').style.display = 'none';
    document.getElementById('mode1').style.display = 'flex';
  }

  // return gameMode;
}

function setGameModeChanging() {
  const gameModes = document.getElementsByName('tttGameMode');
  for (let i = 0; i < gameModes.length; i += 1) {
    const item = gameModes[i];
    item.addEventListener('click', () => {
      if (i === 0) {
        gameModes[1].setAttribute('checked', '');
      } else {
        gameModes[0].setAttribute('checked', '');
      }
      item.setAttribute('checked', 'checked');
      // gameMode = getGameMode();
      getGameMode();
      // console.log(gameMode);
    });
  }
}

// drawCanvas();
// refreshCanvas();
// setGameModeChanging();

document.getElementById('p1').addEventListener('click', () => {
  function goGame() {
    gameZone = document.getElementById('mainTttGame');
    drawCanvas();
    refreshCanvas();
    setGameModeChanging();
  }
  goGame();
});