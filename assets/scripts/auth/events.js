'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFeilds = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

const onSignUp = function(event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFeilds(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function(event) {
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
let currentPlayer = '✕'

const switchPlayer = () => {
  if (currentPlayer === 'o') {
    currentPlayer = 'x'
    $('#game-message').text("Player X's move")
    // console.log('player os move')
  } else {
    currentPlayer = 'o'
    $('#game-message').text("Player O's move")
    // console.log('player xs move')
  }
}

const onBoxClick = (event) => {
  console.log('click')
  const $box = $(event.target)
  currentPlayer = currentPlayer === '○' ? '✕' : '○'
  $box.css('background', 'transparent').text(currentPlayer)
}

const onsignOut = event => {
  event.preventDefault()

  api.signOut()
    .then((res) => {
      console.log('server sent sign out response', res)
    })
}

let gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

//  const gameStart = () => {
//    gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
//   return gameboard
// }
// const gameOver = function(boolean) {
//   if (boolean === true) {
//     store.game.over = true
//     $('.box').off('click', onClickedSquare)
//   }
// }

// const endGame = (gameboard) => {
//   if
// }


//first, check for 3 in a row DONE

// then let player know somebody won DONE
// make move
// check-winner
// store.game.over=true
// make move --> if game.over === True
// ! === false

//set our game "over" to true

//when "over" in our store is true, no more clicking


if (gameboard[0] === 'X' && gameboard[1] === 'X' && gameboard[2] === 'X') {
  console.log('x is the winner')
  $('.message').html(`Player X is a lean mean tic tac toe machine`)
} else if (gameboard[3] === 'X' && gameboard[4] === 'X' && gameboard[5] === 'X') {
  $('.message').html(`Player X is a lean mean tic tac toe machine`)
} else if (gameboard[6] === 'X' && gameboard[7] === 'X' && gameboard[8] === 'X') {
  $('.message').html(`Player X is a lean mean tic tac toe machine`)
} else if (gameboard[0] === 'X' && gameboard[3] === 'X' && gameboard[6] === 'X') {
  $('.message').html(`Player X is a lean mean tic tac toe machine`)
} else if (gameboard[1] === 'X' && gameboard[4] === 'X' && gameboard[7] === 'X') {
  $('.message').html(`Player X is a lean mean tic tac toe machine`)
} else if (gameboard[2] === 'X' && gameboard[8] === 'X' && gameboard[5] === 'X') {
  $('.message').html(`Player X is a lean mean tic tac toe machine`)
} else if (gameboard[0] === 'X' && gameboard[4] === 'X' && gameboard[8] === 'X') {
  $('.message').html(`Player X is a lean mean tic tac toe machine`)
} else if (gameboard[2] === 'X' && gameboard[4] === 'X' && gameboard[6] === 'X') {
  $('.message').html(`Player X is a lean mean tic tac toe machine`)
} else if (gameboard[0] === 'O' && gameboard[1] === 'O' && gameboard[2] === 'O') {
  $('.message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
} else if (gameboard[3] === 'O' && gameboard[4] === 'O' && gameboard[5] === 'O') {
  $('.message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
} else if (gameboard[6] === 'O' && gameboard[7] === 'O' && gameboard[8] === 'O') {
  $('.message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
} else if (gameboard[0] === 'O' && gameboard[3] === 'O' && gameboard[6] === 'O') {
  $('.message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
} else if (gameboard[1] === 'O' && gameboard[4] === 'O' && gameboard[7] === 'O') {
  $('.message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
} else if (gameboard[2] === 'O' && gameboard[8] === 'O' && gameboard[5] === 'O') {
  $('.message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
} else if (gameboard[0] === 'O' && gameboard[4] === 'O' && gameboard[8] === 'O') {
  $('.message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
} else if (gameboard[2] === 'O' && gameboard[4] === 'O' && gameboard[6] === 'O') {
  $('.message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
}

const addHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onsignOut)
  $('#create-new-game').on('submit', onNewGame)
  $('.box').on('click', onBoxClick)
}

module.exports = {
  addHandlers
  // checkForWinner
}
