'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFeilds = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

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
      // also clear and show tic toe board
    })
}
const onsignOut = event => {
  event.preventDefault()

  api.signOut()
    .then((res) => {
      console.log('server sent sign out response', res)
    })
}

let currentPlayer = '✕'

const switchPlayer = () => {
  if (currentPlayer === 'o') {
    currentPlayer = 'x'
    $('.message').text("Player X's move")
    // console.log('player os move')
  } else {
    currentPlayer = 'o'
    $('.message').text("Player O's move")
    // console.log('player xs move')
  }
}

const cellTaken = $box => {
  // there is is an X or O invalid move
  // returns true or false
  return $box.text() !== ''
  // debugger
}

const onUserMove = (event) => {
  console.log('click')
  const $box = $(event.target)
  console.log('$box is', $box)
  $box.attr('id')
  console.log('$box.attr is', $box.attr('id'))
  // if (cellTaken($box) !== '') {
    if ($(event.target).text() !== '') {
    $('.message').text(`Invalid move, try again`)
  } else {
    playerIndex($box.attr('id'), currentPlayer)
    // winnerWinner(store.gameBoard)
    checkForDraw(gameBoard)
    console.log(gameBoard)
    // if (gameOver === true) {
    //   $('.box').off('click', onUserMove)
  }

  // add currentplayer to correct index of gameBoard
  // call check win function
  // call check tie function
  // if none of these are true keep playing
  switchPlayer()
  $box.css('background', 'transparent').text(currentPlayer)
}
// const onUserMove = (event) => {
//   console.log('click')
//   const $box = event.target.id
//   console.log(event.target.id)
//   console.log('box is ' + $box)
//   console.log(gameBoard)
//   // $box.attr()
// if ((currentPlayer === 'x') && $(event.target).text() === ' ') {
//   $(event.target).text('x')
//   playerIndex($box, 'x')
//  }
// }

  // if (cellTaken($box)) {
  //   $('.message').text(`Invalid move, try again`)
  // } else {
  //   playerIndex($box, currentPlayer)
  //   // winnerWinner(store.gameBoard)
  //   checkForDraw(gameBoard)
  //   console.log(gameBoard)
    // if (gameOver === true) {
    //   $('.box').off('click', onUserMove)
  // }

  // add currentplayer to correct index of gameBoard
  // call check win function
  // call check tie function
  // if none of these are true keep playing
//   switchPlayer()
//   $box.css('background', 'transparent').text(currentPlayer)
// }


const gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
//

const playerIndex = (box, currentPlayer) => {
  gameBoard.splice(box, 1, currentPlayer)
}

const tiedUp = currentElement => {
  return currentElement !== ''
}

// const tieGame = gameBoard => {
//   if (gameBoard.every(tiedUp)) {
//     console.log("it's a tie")
//     $('.tie_message').text("Hats off to both of you! It's a tie!!!")
//     // store.game.over = true
//   }
// }

const checkForDraw = gameBoard => {
  if ((gameBoard[0] !== ' ') && (gameBoard[1] !== ' ') && (gameBoard[2] !== ' ') && (gameBoard[3] !== ' ') && (gameBoard[4] !== ' ') && (gameBoard[5] !== ' ') && (gameBoard[6] !== ' ') && (gameBoard[7] !== ' ') && (gameBoard[8] !== ' ')) {
    console.log('DRAW WORKS')
    // $('.draw-bar').html('Draw').show()
    $('.tie_message').show()
  }
}


// const gameOver = gameBoard => {
//   if (winnerWinner === true || tieGame === true) {
//     console.log('game over')
//     $('.box').off('click', onUserMove)
//   }
// }

const winnerWinner = (gameBoard) => {
  // const gameBoard = store.gameBoard
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    console.log('x is the winner')
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    // store.game.over = true
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    // store.game.over = true
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    // store.game.over = true
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    // store.game.over = true
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    // store.game.over = true
  } else if (gameBoard[2] === 'X' && gameBoard[8] === 'X' && gameBoard[5] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    // store.game.over = true
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    // store.game.over = true
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    // store.game.over = true
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    // store.game.over = true
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    // store.game.over = true
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    // store.game.over = true
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    store.game.over = true
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    // store.game.over = true
  } else if (gameBoard[2] === 'O' && gameBoard[8] === 'O' && gameBoard[5] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    // store.game.over = true
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    // store.game.over = true
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    // store.game.over = true
  }
}

const gamePlay = event => {
  event.preventDefault()
  if (gameOver === false) {
    const id = event.target.id
    playerIndex(id, currentPlayer)
    api.updateGame(id, currentPlayer)
  } else if ((currentPlayer === 'x') && ($(event.target).html() === '')) {
    // tieGame(store.gameBoard)
    winnerWinner(store.gameBoard)
    switchPlayer()
  } else if ((currentPlayer === 'o') && ($(event.target).html() === '')) {
    // tieGame(store.gameBoard)
    winnerWinner(store.gameBoard)
    switchPlayer()
  } else {
    console.log('game play is working')
    $('#game-message').text('Roll up the sidewalks, game over.')
  }
}
if ((currentPlayer === 'x') && ($(event.target).html() === '')) {
  $(event.target).css('background', 'transparent').text('x')
}

const addHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onsignOut)
  $('#create-new-game').on('submit', onNewGame)
  $('.box').on('click', onUserMove)
}

module.exports = {
  addHandlers,
  // tieGame,
  gamePlay,
  gameBoard,
  winnerWinner,
  // gameOver,
  checkForDraw
}
