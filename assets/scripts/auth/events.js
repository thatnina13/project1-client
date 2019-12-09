'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFeilds = require('../../../lib/get-form-fields.js')
const store = require('../store')
// const store = require('./store.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('user signed up')

  const form = event.target
  const formData = getFormFeilds(form)

  api.SignUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('user signed in')

  const form = event.target
  const formData = getFormFeilds(form)

  api.SignIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFeilds(form)

  api.ChangePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  event.Default()
  api.SignOut()
    .then((res) => {
      console.log('server sent sign out response', res)
    })
}

let currentPlayer = '✕'

const switchPlayer = () => {
  if (currentPlayer === 'o') {
    currentPlayer = 'x'
    $('.message').html("Player X's move")
    // console.log('player os move')
  } else {
    currentPlayer = 'o'
    $('.message').html("Player O's move")
    // console.log('player xs move')
  }
}

let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
let gameOver = false
const gameStart = value => {
  gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  currentPlayer = 'x'
  $('.draw-bar').hide()
  $('.results').show()
}

const gamePlay = event => {
  const gbrowNumId = event.target.id
  // console.log('user clicked a square' + gbrowNumId)
  // $('#message').text('To play, please create a new game')
  // const gbrowNumId = () => gbrowId.replace('gbrow', '')
  if (gameOver === false) {
    if ((currentPlayer === 'x') && ($(event.target).html() === '')) {
      $(event.target).html('x')
      console.log('player x made move, index:' + gbrowNumId)
      // console.log(gbrowNumId)
      $('.results').html('Turn: o')
      gameBoard[gbrowNumId] = currentPlayer
      // console.log('BOARD ARRAY IS', gameBoard)
      winnerWinner(gameBoard)
      api.UpdateMove(gbrowNumId, currentPlayer)
      switchPlayer()
      // checkForDraw(gameBoard)
    } else if ((currentPlayer === 'o') && ($(event.target).text() === '')) {
      $(event.target).html('o')
      console.log('player o made move, index:' + gbrowNumId)
      // console.log(gbrowNumId)
      $('.results').html('Turn: X')
      gameBoard[gbrowNumId] = currentPlayer

      winnerWinner(gameBoard)

      api.UpdateMove(gbrowNumId, currentPlayer)
      switchPlayer()
    } else {
      $('#message').text('Invalid move! Try again ya maniac.')
    }
  } else {
    $('#message').text('Game is over ya maniac.')
    gamePlay()
  }
}

const winnerWinner = (gameBoard) => {
  if (gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') {
    gameOver = true
    $('#message').text('x is the winner')
  } else if (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') {
    gameOver = true
    $('#message').text('x is the winner')
  } else if (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') {
    gameOver = true
    $('#message').text('x is the winner')
  } else if (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') {
    gameOver = true
    $('#message').text('x is the winner')
  } else if (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') {
    gameOver = true
    $('#message').text('x is the winner')
  } else if (gameBoard[2] === 'x' && gameBoard[8] === 'x' && gameBoard[5] === 'x') {
    gameOver = true
    $('#message').text('x is the winner')
  } else if (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') {
    gameOver = true
    $('#message').text('x is the winner')
  } else if (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x') {
    gameOver = true
    $('#message').text('x is the winner')
  } else if (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') {
    gameOver = true
    $('#message').text('o is the winner')
  } else if (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') {
    gameOver = true
    $('#message').text('o is the winner')
  } else if (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') {
    gameOver = true
    $('#message').text('o is the winner')
  } else if (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') {
    gameOver = true
    $('#message').text('o is the winner')
  } else if (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') {
    gameOver = true
    $('#message').text('o is the winner')
  } else if (gameBoard[2] === 'o' && gameBoard[8] === 'o' && gameBoard[5] === 'o') {
    gameOver = true
    $('#message').text('o is the winner')
  } else if (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') {
    gameOver = true
    $('#message').text('o is the winner')
  } else if (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o') {
    gameOver = true
    $('#message').text('o is the winner')
  } else if ((gameBoard[0] !== ' ') && (gameBoard[1] !== ' ') && (gameBoard[2] !== ' ') && (gameBoard[3] !== ' ') && (gameBoard[4] !== ' ') && (gameBoard[5] !== ' ') && (gameBoard[6] !== ' ') && (gameBoard[7] !== ' ') && (gameBoard[8] !== ' ')) {
    gameOver = true
    $('#message').text('tie')
  }
}

// const clearGbrow = (gameBoard) => {
//   if gameOver === true
//   let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
// }

const onNewGame = event => {
  event.preventDefault()
  // console.log('create game button works')
  $('.gbrow')
    .html('')
    .show()
    // .clear(gameBoard)
  $('.results').html(' ')
  // let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  // store.game.clear(store.game)
  gameStart()
  // gamePlay()
  console.log(gameBoard)
  // NEED TO INCLUDE GAME START HERE?
  api.NewGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// if (gameOver === true) {
//   const gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
//   onNewGame()
// }

const ongetGames = event => {
  event.preventDefault()
  console.log('get all games works')
  api.getGamesSuccess()
    .then(ui.ongetGamesSuccess)
    .catch(ui.ongetGamesSuccess)
}

const addHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-game').on('click', onNewGame)
  $('#get-games').on('click', ongetGames)
  $('.gbrow').on('click', gamePlay)
}

module.exports = {
  addHandlers,
  switchPlayer,
  gamePlay,
  gameBoard,
  gameStart,
  winnerWinner,
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onNewGame,
  ongetGames
}
