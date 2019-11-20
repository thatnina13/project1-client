'use strict'

// we're going to greate a function that will let us communicate with the use
// across all our authentification communications wiht our users
const store = require('../store')

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('sucess')
    .text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('faliure')
    .text(message)
  $('form').trigger('reset')
}

const onSignUpSuccess = () => {
  onSuccess('Mozel Tov! you successfuly signed up! Now, sign in!')
}

const onSignUpFailure = () => {
  onFailure('Try again, ya maniac!')
}
const onSignInSuccess = (responsedata) => {
  store.user = responsedata.user
  console.log('user was stored', store.user)
  onSuccess('Oppa! you are in the mainframe!!')
  // show anything with the CSS class of after auth
  // hide anything with the CSS class of after aut
  $('.after-auth').show()
  $('.before-auth').hide()
}
// hide anything with the CSS class of after aut

const onSignInFailure = () => {
  onFailure('Try again, ya maniac')
}
const onchangePasswordSuccess = () => {
  onSuccess('Well Done!')
}

const onchangePasswordSuccessFailure = () => {
  onFailure('...Sucks to suck...')
}
const onsignOutSuccess = () => {
  onSuccess('Adios')
  // return to before authEvents
  // we need to delete the token
  // the store no longer knows who we are
  store.user = {}
  $('.after-auth').hide()
  $('.before-auth').show()
}
const onNewGameSuccess = (res) => {
  store.game = res.game
  console.log('new game', store.game)
  onSuccess('you have a new game!')
}
// remember for later- store.game.ID

const onsignOutFailure = () => {
  onFailure('something went wrong')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onchangePasswordSuccess,
  onchangePasswordSuccessFailure,
  onsignOutSuccess,
  onsignOutFailure,
  onNewGameSuccess
}
