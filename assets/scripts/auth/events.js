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

const onStartGame = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFeilds(form)

  api.startGame(formData)
    .then((res) => {
      console.log('user started new game', res)
      ui.onStartGameSuccess(res)
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

let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

const assignToBoard = (IndexNumId, currentPlayer) => {
  gameBoard.splice(IndexNumId, 1, currentPlayer)
}
const offClick = () => {
  $('.index').hide()
  // clearBoard(gameBoard)
}

const checkForDraw = gameBoard => {
  if ((gameBoard[0] !== ' ') && (gameBoard[1] !== ' ') && (gameBoard[2] !== ' ') && (gameBoard[3] !== ' ') && (gameBoard[4] !== ' ') && (gameBoard[5] !== ' ') && (gameBoard[6] !== ' ') && (gameBoard[7] !== ' ') && (gameBoard[8] !== ' ')) {
    console.log('DRAW WORKS')
    // $('.draw-bar').html('Draw').show()
    $('.tie_message').show()
  }
}

const winnerWinner = (gameBoard) => {
  // const gameBoard = store.gameBoard
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    console.log('x is the winner')
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    offClick()
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    offClick()
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    offClick()
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    offClick()
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    offClick()
  } else if (gameBoard[2] === 'X' && gameBoard[8] === 'X' && gameBoard[5] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    offClick()
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    offClick()
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    $('.X_winning_message').html(`Player X is a lean mean tic tac toe machine`)
    offClick()
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    offClick()
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    offClick()
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    offClick()
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    offClick()
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    offClick()
  } else if (gameBoard[2] === 'O' && gameBoard[8] === 'O' && gameBoard[5] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    offClick()
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    offClick()
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    $('.0_winning_message').html(`Player 0 is a rank sentimentalist and tic tac toe master`)
    offClick()
  }
}
const gamePlay = event => {
  const indexId = event.target.id
  const indexNumId = () => indexId.replace('index', '')
  if ((currentPlayer === 'x') && ($(event.target).text() === '')) {
    $(event.target).html('x')
    $('.results').html('Turn: O')
    assignToBoard(indexNumId(), currentPlayer)
    // console.log('BOARD ARRAY IS', gameBoard)
    checkForDraw(gameBoard)
    winnerWinner(gameBoard)
    onUpdateMove()
    // checkForDraw(gameBoard)
    switchPlayer()
  } else if ((player === 'o') && ($(event.target).text() === '')) {
    $(event.target).html('o')
    $('.results').html('Turn: X')
    assignToBoard(indexNumId(), currentPlayer)
    // console.log('BOARD ARRAY IS', gameBoard)
    checkForDraw(gameBoard)
    winnerWinner(gameBoard)
    onUpdateMove()
    // checkForDraw(gameBoard)
    switchPlayer()
  } else {
    $('.results').text('Invalid move!  Click an empty box.')
  }
}

const onNewGame = event => {
  event.preventDefault()
  // console.log('create game button works')
  // gameBoard.clear(gameBoard)
  $('.index')
    .html('')
    .show()
    // .clear(gameBoard)
  $('.results').html(' ')
  // let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  // store.game.clear(store.game)
  gameStart()
  // console.log(gameBoard)
  // NEED TO INCLUDE GAME START HERE?
  api.NewGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const gameStart = value => {
  gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  currentPlayer = 'x'
  $('.draw-bar').hide()
  $('.results').show()
}

const onGamesHistory = event => {
  event.preventDefault()
  // console.log('get all games works')
  api.GamesHistory()
    .then(ui.onGamesHistorySuccess)
    .catch(ui.onGamesHistoryFailure)
}

// getting a single is not required?
// const onGetAGame = event => {
//   event.preventDefault()
//   // console.log('get a game works')
//   api.getAGame()
//     .then(ui.onGetAGameSuccess)
//     .catch(ui.onGetAGameFailure)
// }

const onUpdateMove = event => {
api.updateMove()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
  // console.log('onUpdateMove works')
}

const addHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onsignOut)
  $('#new-game').on('submit', onNewGame)
  $('#games-history').on('submit', onGamesHistory)
  // $('.box').on('click', gamePlay)
}

module.exports = {
  addHandlers,
  switchPlayer,
  gamePlay,
  gameBoard,
  winnerWinner,
  checkForDraw,
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onGetAllGames,
  onUpdateMove,
  onStartGame
}
