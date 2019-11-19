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
const onnewGame = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFeilds(form)

  api.newGame(formData)
    .then((res) => {
      console.log('user started new game', res)
    })
}

const onsignOut = event => {
  event.preventDefault()

  api.signOut()
    .then((res) => {
      console.log('server sent sign out response', res)
    })
}

$(() => {
  let currentPlayer = '✕'

  const onBoxClick = (event) => {
    console.log('click')
    const $box = $(event.target)
    currentPlayer = currentPlayer === '○' ? '✕' : '○'
    $box.css('background', 'transparent').text(currentPlayer)
  }
  $('.box').on('click', onBoxClick)
})
const addHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onsignOut)
  $('#games-create').on('submit', onnewGame)
  $('.box').on('click', onBoxClick)
}

//const winningCombos = [
  //[0,1,2],
  //[3,4,5],
  //[6,7,8],
  //[0,4,8],
  //[0,3,6],
  //[1,4,7],
  //[2,5,8],
  //[2,4,6]
//]

//const grid = () => array.from(document.getElementsbyclassname(col-4 box));


module.exports = {
  addHandlers

}
