// const gameZone = document.getElementById('mainTttGame')
let gameZone = document.getElementById('mainTttGame');

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
// function initMatrix(size) {
//   const init = [0];
//   let i = 1;
//   while (i < size) {
//     init.push(0);
//     i += 1;
//   }

//   i = 1;
//   const matrix = [init];
//   while (i < size) {
//     matrix.push(init);
//     i += 1;
//   }
//   return matrix;
// }

// const matrix 2=initMatrix(3);

/**
 * Function that control the Game result
 * (Is there a winner or is it a Draw Game Or the Game is steel going on ?)
 */
function checkGame(matrix) {
  // function isSame(matrix, direction) {
  //   /**  The logic here is to check tha matrix of the game on every possible winning direction
  //        * @param - matrix : matrix of the Game
  //        * @param - direction : the Game direction to check. Direction Values are :
  //        *              1   for Horizontal (X-axis)
  //        *              2   for Vertical (Y-axis)
  //        *              3   for one diagonal line (x = -y)
  //        *              4   for the other diagonal line (x = y)
  //        * @returns - an Object result containing :
  //        *     winned : which is a boolean telling if someone has won the game (true value)
  //        *     winner : which give the val of the one who has won ( player1 or player2 )
  //        * Notice that when the winner is steel null it means that the values was 0.
  //       */

  function isWining(player) {
    let winner = false;

    if (
      (matrix[0][0] === player)
      && (matrix[0][1] === player)
      && (matrix[0][2] === player)
    ) winner = true;

    else if (
      (matrix[0][0] === player)
      && (matrix[1][0] === player)
      && (matrix[2][0] === player)) winner = true;

    else if (
      (matrix[1][0] === player)
      && (matrix[1][1] === player)
      && (matrix[1][2] === player)) winner = true;
    else if (
      (matrix[0][1] === player)
      && (matrix[1][1] === player)
      && (matrix[2][1] === player)) winner = true;

    else if (
      (matrix[2][0] === player)
      && (matrix[2][1] === player)
      && (matrix[2][2] === player)) winner = true;

    else if (
      (matrix[0][2] === player)
      && (matrix[1][2] === player)
      && (matrix[2][2] === player)) winner = true;

    else if (
      (matrix[0][0] === player)
      && (matrix[1][1] === player)
      && (matrix[2][2] === player)) winner = true;

    else if (
      (matrix[0][2] === player)
      && (matrix[1][1] === player)
      && (matrix[2][0] === player)) winner = true;
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
  } else {
    check = {
      winned: false,
      winner: 0,
    };
  }

  return check;
}

function resetMatrix() {
  for (let i = 0; i < matrix.length; i += 1) {
    // const element = matrix[i];
    for (let j = 0; j < matrix[i].length; j += 1) {
      // const item = matrix[i][j];
      matrix[i][j] = 0;
    }
  }
  // console.log(matrix)
}
function updatePlace(element, value) {
  // if (value === 0) element.innerHTML = 'M'; element.innerHTML = value;
  // console.log('updating...', value);
  if (value !== 0) element.innerHTML = value; element.innerHTML = ' ';
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

function playEvent(element) {
  const id = element.getAttribute('id');

  function play() {
    // setMatrixValue(coordinates, playingPlayer);
    refreshCanvas();
    if (playingPlayer === playerTwo) {
      roundNumber += 1;
    }
    playingPlayer = (playingPlayer === playerOne) ? playerTwo : playerOne;

    document.getElementById('player').innerHTML = `Player ${playingPlayer}`;
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

function gameDecision(currentResult, roundNumber) {
  const decision = document.getElementById('result');

  if (currentResult.winned) {
    // console.log(`congratulations to player ${currentResult.winner}`);
    // console.log('End of the Game');
    document.getElementById('player').innerHTML = '...';

    decision.classList.add('winned');
    decision.innerHTML = `Player ${currentResult.winner} Won !`;
  } else if (roundNumber > size + 1) {
    // console.log('It is a Draw Game');
    // console.log('End of the Game');
    // decision.classList.remove('winned')
    decision.classList.add('drawn');
    decision.innerHTML = 'It is a Drawn Game !';
  }
}

function setEventListener() {
  const places = [...document.getElementsByClassName('place')];
  places.forEach((element) => {
    element.addEventListener('click', () => {
      if (gameResult.winned) {
        // console.log('yes');
      } else if (roundNumber > size + 1) {
        // console.log('no');
      } else {
        if (roundNumber === size + 1) roundNumber += 1;
        if (!gameStarted) {
          gameStarted = true;
        }
        playEvent(element);
        gameResult = checkGame(matrix);

        gameDecision(gameResult, roundNumber);
      }
    });
  });

  const resetBtn = document.getElementById('resetGame');
  resetBtn.addEventListener('click', () => {
    if (gameStarted) {
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
      document.getElementById('player').innerHTML = `Player ${playingPlayer}`;
    } else {
      // console.log('nothing to reset. no Game is going on')
      // console.log('matrix is '+matrix)
    }
    // console.clear();
  });
}

function drawCanvas() {
  // console.log('Drawing canvas')
  const content = `
        <div class="mainGameCtn">
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

/**
 * a player proceed with his action event
 * @params {element} params
 *      a
 */

document.getElementById('p1').addEventListener('click', () => {
  function goGame() {
    gameZone = document.getElementById('mainTttGame');
    drawCanvas();
    refreshCanvas();
  }
  goGame();
});
