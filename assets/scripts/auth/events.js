'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFeilds = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFeilds(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFeilds(form)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFeilds(form)

  api.changePassword(formData)
    .then(ui.onchangePasswordSuccess)
    .catch(ui.onchangePasswordFailure)
}

const onNewGame = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFeilds(form)

  api.newGame(formData)
    .then((res) => {
      console.log('user started new game', res)
      ui.onNewGameSuccess(res)
      // in ui file create onsuccess message for new game creation
      // also show tic toe board
    })
}

let currentPlayer = 'x'
// let gameOver = false

// function that switches between players
const switchPlayer = () => {
  if (currentPlayer === 'o') {
    currentPlayer = 'x'
  } else {
    currentPlayer = 'o'
  }
}

$(() => {
  let currentPlayer = '✕'

  const onBoxClick = (event) => {
    console.log('click')
    const $box = $(event.target)
    currentPlayer = currentPlayer === '○' ? '✕' : '○'
    $box.css('background', 'transparent').text(currentPlayer)
  }
})

// const onBoxClick = (event) => {
//   console.log('click')
//   const $box = $(event.target)
//   // check if it is a valid move
//   // basically make sure the cell is empty
//   // if not- message
//   $box.css('background', 'transparent').text(currentPlayer)
//   currentPlayer = currentPlayer === '○' ? '✕' : '○'

const onsignOut = event => {
  event.preventDefault()

  api.signOut()
    .then((res) => {
      console.log('server sent sign out response', res)
    })

  // const disableListeners = () => {
  //   $('.box').hide()
  // }

// check for winner
// first get game board
// second identify which cells have been filled
// step 1- game board array
// put x or and o into array --> index will be important
// see if the patter of filled cells matches any of the winningCombos
// if we find a winning combo we notify which player (X or 0) has won
// if we do not find a winning combo we notify that there has been a draw
// if no win or draw, continue playing
}
const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6]
]
 let gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

 const gameStart = () => {
   gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  return gameboard
}
// gamestart- no const
 const checkForWinner = (gameboard) => {
   if (gameboard[0] === 'X' && gameboard[1] === 'X' && gameboard[2] === 'X') {
     console.log('x is the winner')
//     $('.message').html(`player X is the winner`)
}
   else if (gameboard[3] === 'X' && gameboard[4] === 'X' && gameboard[5] === 'X') {
     console.log('x is the winner')
//    $('.message').html(`Player X is a god amoung men`)
}
   else if (gameboard[6] === 'X' && gameboard[7] === 'X' && gameboard[8] === 'X') {
     console.log('x is the winner')
}
//     $('.message').html(`Player X is a savage`)

    else if (gameboard[0] === 'X' && gameboard[3] === 'X' && gameboard[6] === 'X') {
      console.log('x is the winner')
}
}
//     $('.message').html(`Player X cannot be beat!`)
//    disableListeners()
//   } else if (gameboard[1] === 'X' && gameboard[4] === 'X' && gameboard[7] === 'X') {
//     $('.message').html(`Player X is a lean mean tic tac toe machine`)
//    disableListeners()
//   } else if (gameboard[2] === 'X' && gameboard[8] === 'X' && gameboard[5] === 'X') {
//     $('.message').html(`Player X has begun a dynasty of wins`)
//    disableListeners()
//   } else if (gameboard[0] === 'X' && gameboard[4] === 'X' && gameboard[8] === 'X') {
//     $('.message').html(`Player X is goddess supreme`)
//     disableListeners()
//   } else if (gameboard[2] === 'X' && gameboard[4] === 'X' && gameboard[6] === 'X') {
//     $('.message').html(`Player X is reigning tic tac toe master`)
//    disableListeners()
//   } else if (gameboard[0] === 'O' && gameboard[1] === 'O' && gameboard[2] === 'O') {
//     $('.message').html(`we could all take a lesson from Player O`)
//     disableListeners()
//   } else if (gameboard[3] === 'O' && gameboard[4] === 'O' && gameboard[5] === 'O') {
//     $('.message').html(`Oh no! Player O has won the big game`)
//     disableListeners()
//   } else if (gameboard[6] === 'O' && gameboard[7] === 'O' && gameboard[8] === 'O') {
//     $('.message').html(`Player O will live in infamy`)
//     disableListeners()
//   } else if (gameboard[0] === 'O' && gameboard[3] === 'O' && gameboard[6] === 'O') {
//     $('.message').html(`heros get remembered but legends never die, and neither will Player O`)
//     disableListeners()
//   } else if (gameboard[1] === 'O' && gameboard[4] === 'O' && gameboard[7] === 'O') {
//     $('.message').html(`Player O is a rank sentimentialist, and killer tic tac toe player!`)
//     disableListeners()
//   } else if (gameboard[2] === 'O' && gameboard[8] === 'O' && gameboard[5] === 'O') {
//     $('.message').html(`Player O can't stop and won't stop!`)
//     disableListeners()
//   } else if (gameboard[0] === 'O' && gameboard[4] === 'O' && gameboard[8] === 'O') {
//     $('.message').html(`Player O is a natrual born winner`)
//     disableListeners()
//   } else if (gameboard[2] === 'O' && gameboard[4] === 'O' && gameboard[6] === 'O') {
//     $('.message').html(`Player O is a sick, mentalist, freak`)
//    disableListeners()
//   } else {
//      checkForDraw(boardArray)
//    }
// }

//
// const grid = () => Array.from(document.getElementsbyclassname('q'));
//  to replace the ID of the element of the grid-
// const qNumID = (qEl) => Number.parseInt(qEl.id.replace('q', ''));
// const emptyQs = () => grid().filter(_qEl => _qEl.innerText === '');

// this is my check for winner fuction- it checks for all vaules in cells being the allSame
// however- need to make sure this excludes empty strings/cells
// which every q element we are on, needs to be equal to the first element of that array

// const allSame = (arr) => arr.every(_qEl => _qEl.innerText === arr[0].innerText && _qE1.innerText !== '');
// which every q element we are on, needs to be equal to the first element of that array

// const takeTurn = (index, letter) => grid()[index].innerText = letter


// const clickFn = ($event) => {
// takeTurn(qNumId($event.target), 'x');
// if(!checkForWin())
// opponentTurn();


// const endGame = (winningSequence) => {
// console.log('Game Over', winningSequence); }
// winningSequence.forEach(_qEl => _qEl.classList.add('winner'));
// disableListeners();

// const checkForVictory = () => {
//  let victory = false;
//  winningCombos.forEach(_c => {
//    const _grid = grid();
// _c is going to represent a winning combo and [0],[1],[2] is going to
// pull the index of that combo
//    const sequence = [_grid[_c[0]], _grid[_c[1]] ,_grid[_c[2]]];
//    if(allSame (sequence)) {
//      victory = true;
//      endgame(sequence)
//    }
//  });
//  return victory;
// }

// const enableListeners = () => grid().foreach(_qE1 =>_qE1.addEventListener(click, clickFn));
// const disableListeners = () => grid().foreach(_qE1 =>_qE1.removeEventListener(click, clickFn));

// const grid = () => array.from(document.getElementsbyclassname(col-4 box));

const addHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onsignOut)
  $('#create-new-game').on('submit', onNewGame)
  //$('.box').on('click', onBoxClick)
}

module.exports = {
  addHandlers,
  switchPlayer
  // checkForWinner,
  // gameOver
}
