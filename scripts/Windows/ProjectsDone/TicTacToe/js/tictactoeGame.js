// const gameZone = document.getElementById('mainTttGame')
let gameZone = document.getElementById('mainTttGame');
const btnWindow = document.getElementById('p1').addEventListener('click', () => {
  goGame();
  // setTimeout(() => {
  //     goGame()
  // }, 2000);
  function goGame(params) {
    gameZone = document.getElementById('mainTttGame');
    drawCanvas();
    // setEventListener()
    refreshCanvas();
    // console.log(gameZone)
  }
});

const playerOne = 1;
const playerTwo = 2;

const size = 3;
let gameStarted = false;
let playingPlayer = playerOne;
let gameResult = 0;
let roundNumber = 0;
// let matrix = [...initMatrix(3)]

const t = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
const matrix = t;
// console.log(gameZone)

// ===================Function that initialize the matrix of the Game =====================
function initMatrix(size) {
  const init = [0];
  let i = 1;
  while (i < size) {
    init.push(0);
    i++;
  }

  i = 1;
  const matrix = [init];
  while (i < size) {
    matrix.push(init);
    i++;
  }
  return matrix;
}

// Function that control the Game result (Is there a winner or is it a Draw Game Or the Game is steel going on ?)
function checkGame(matrix) {
  function isSame(matrix, direction) {
    /**  The logic here is to check tha matrix of the game on every possible winning direction
         * @param - matrix : matrix of the Game
         * @param - direction : the Game direction to check. Direction Values are :
         *              1   for Horizontal (X-axis)
         *              2   for Vertical (Y-axis)
         *              3   for one diagonal line (x = -y)
         *              4   for the other diagonal line (x = y)
         * @returns - an Object result containing :
         *              winned : which is a boolean telling if someone has won the game (true value)
         *              winner : which give the val of the one who has won ( player1 or player2 ) Notice that when the winner is steel null it means that the values was 0.
        */

    const result = {
      winned: false,
      winner: null,
    };

    let a; let i; let j;
    const size = matrix.length;
    let flag = true;
    switch (direction) {
      case 1:
      {
        i = 0;
        while (i < size) {
          j = 0;
          flag = true;
          a = matrix[i][j];
          while (j < size) {
            if (matrix[i][j] !== a) {
              // console.log(matrix[i])
              flag = false;
              break;
            }
            j++;
          }
          if (flag) {
            // if flag is steel true it means that there is a Winner
            result.winned = flag;
            result.winner = a;
            // console.log('Victoire en ligne '+i)
            break;
          } else {
            i++;
            j = 0;
          }
        }
        break;
      }

      case 2: {
        j = 0;
        while (j < size) {
          i = 0;
          flag = true;
          a = matrix[i][j];
          while (i < size) {
            if (matrix[i][j] !== a) {
              flag = false;
              break;
            }
            i++;
          }

          if (flag) {
            // if flag is steel true it means that there is a Winner
            result.winned = flag;
            result.winner = a;
            // console.log('Victoire a la colonne : '+j)
            break;
          }
          j++;
        }
        break;
      }

      case 3: {
        i = 0;
        flag = true;
        a = matrix[i][i];
        while (i < size) {
          if (matrix[i][i] !== a) {
            flag = false;
            break;
          }
          i++;
        }

        if (flag) {
          // if flag is steel true it means that there is a Winner
          result.winned = flag;
          result.winner = a;
          // console.log("Victoire a la diagonale d'equation  : Y = - X ")
          break;
        }
        break;
      }

      case 4: {
        i = 0;
        flag = true;
        a = matrix[i][size - 1];
        while (i < size) {
          j = 0;
          flag = true;
          while (j < size) {
            if ((i + j) === (size - 1)) {
              if (matrix[i][j] !== a) {
                flag = false;
                break;
              }
            }
            j++;
          }

          i++;
        }

        if (flag) {
          // if flag is steel true it means that there is a Winner
          result.winned = flag;
          result.winner = a;
          // console.log("Victoire a la diagonale d'equation  : Y = X ")
          break;
        }
        break;
      }

      default:
        break;
    }

    if (a === 0) {
      result.winned = false;
      result.winner = null;
    }

    return result;
  }
  const check = [];
  for (let index = 0; index < 4; index++) {
    check.push(isSame(matrix, index + 1));
  }

  return check;
}

function resetMatrix() {
  for (let i = 0; i < matrix.length; i++) {
    // const element = matrix[i];
    for (let j = 0; j < matrix[i].length; j++) {
      // const item = matrix[i][j];
      matrix[i][j] = 0;
    }
  }
  // console.log(matrix)
}

function setMatrixValue(coordinates, value) {

  // console.log(matrix)
  // if ((coordinates.line<matrix.length && coordinates.line>=0) && (coordinates.column<matrix.length && coordinates.column>=0) ) {
  //     // matrix[coordinates.line][coordinates.column] = value
  //     // matrix[coordinates.line][coordinates.column] = value
  //     matrix[0][1]=5
  //     console.log(matrix)
  // } else {
  //     const n = matrix.length - 1
  //     console.log('wrong coordinates : line and column must be numbers between 0 and '+n+' both included and not ('+coordinates.line+';'+coordinates.column+')')
  // }

}

function setEventListener() {
  const places = [...document.getElementsByClassName('place')];
  places.forEach((element) => {
    element.addEventListener('click', () => {
      if (gameResult.winned) {
        console.log('yes');
      } else if (roundNumber > size + 1) {
        console.log('no');
      } else {
        if (roundNumber === size + 1) roundNumber++;
        if (!gameStarted) {
          gameStarted = true;
        }
        playEvent(element);
        // console.log('The Matrix now is : '+ matrix)

        const result = checkGame(matrix);
        for (let index = 0; index < result.length; index++) {
          const element = result[index];
          if (element.winned) {
            gameResult = element;
            break;
          }
        }

        gameDecision(gameResult, roundNumber);
      }
    });
  });

  const resetBtn = document.getElementById('resetGame');
  resetBtn.addEventListener('click', () => {
    if (gameStarted) {
      // Reset The matrix and set game started to false
      console.log('resetting the game');
      // matrix = [[0,0,0],[0,0,0],[0,0,0]]
      resetMatrix();
      // console.log('matrix is '+matrix)

      const places = [...document.getElementsByClassName('place')];

      function updatePlace(element, value) {
        (value === 0) ? element.innerHTML = '' : element.innerHTML = value;
      }

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
      document.getElementById('player').innerHTML = `Player ${playingPlayer}`;
    } else {
      // console.log('nothing to reset. no Game is going on')
      // console.log('matrix is '+matrix)
    }
    console.clear();
  });
}

function gameDecision(currentResult, roundNumber) {
  // console.log(roundNumber)

  const decision = document.getElementById('result');

  if (currentResult.winned) {
    console.log(`congratulations to player ${currentResult.winner}`);
    console.log('End of the Game');
    document.getElementById('player').innerHTML = '...';

    decision.classList.add('winned');
    decision.innerHTML = `Player ${currentResult.winner} Won !`;
  } else if (roundNumber > size + 1) {
    console.log('It is a Draw Game');
    console.log('End of the Game');
    // decision.classList.remove('winned')
    decision.classList.add('drawn');
    decision.innerHTML = 'It is a Drawn Game !';
  }
}
function drawCanvas() {
  // console.log('Drawing canvas')
  const content = `
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
            <button id="resetGame">Start New Game</button>
        </div>
        <span class="title currentPlayer">Current player is  <span class="player" id="player">${playingPlayer}</span></span>
    </div>
    `;
  gameZone.innerHTML = content;
  setEventListener();
}

function refreshCanvas() {
  const places = [...document.getElementsByClassName('place')];

  function updatePlace(element, value) {
    // (value===0)? {} : element.innerHTML = value

    if (value !== 0) {
      const pion = `<div class=" pion j${value}"></div>`;
      element.innerHTML = pion;
    }
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

/**
 * a player proceed with his action event
 * @params {element} params
 *      a
 */
function playEvent(element) {
  const id = element.getAttribute('id');

  function play(coordinates) {
    setMatrixValue(coordinates, playingPlayer);
    refreshCanvas();
    if (playingPlayer === playerTwo) {
      roundNumber++;
    }
    playingPlayer = (playingPlayer === playerOne) ? playerTwo : playerOne;

    // Setting the player turn
    document.getElementById('player').innerHTML = `Player ${playingPlayer}`;
    // console.log('round :'+roundNumber,'game result :'+gameResult.winned)

    // if (gameResult.winned) {
    //     console.log('a winner is settle. Game should stop')
    // } else
    // if (roundNumber > size ) {
    //     console.log('No winner founded after tha max amount of rounds. Game should stop')
    // }
    // console.log(player)
  }
  // console.log(id)
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
