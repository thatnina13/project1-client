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
  console.log('user was stored', store.user)
  onSuccess('Mozel Tov! you successfuly signed up! Now, sign in to start playing!')
}

const onSignUpFailure = () => {
  onFailure('Try again, ya maniac!')
}
const onSignInSuccess = (responsedata) => {
  store.user = responsedata.user
  console.log('user was stored', store.user)
  onSuccess('Welcome to the big show. To play a game, click Create New Game!')
  // show anything with the CSS class of after auth
  // hide anything with the CSS class of after aut
  $('.after-auth').show()
  $('.before-auth').hide()
}

// const onSignInFailure = () => {
//   onFailure('Try again, ya maniac')
// }
const onchangePasswordSuccess = () => {
  onSuccess('Well Done your password has been changed')
}

const onchangePasswordFailure = () => {
  onFailure('..your password remains unchanged, give it another go..')
}
const onsignOutSuccess = () => {
  onSuccess('Keep the change ya filthy animal')
  // return to before authEvents
  // we need to delete the token
  // the store no longer knows who we are
  store.user = {}
  $('.after-auth').hide()
  $('.before-auth').show()
}
const onNewGameSuccess = (res) => {
  store.game = res.game
  console.log('new game', store.game.id)
  onSuccess('you have a new game!')
  $('.after-auth').show()
}
// remember for later- store.game.ID

const onsignOutFailure = () => {
  onFailure('something went wrong, now you are trapped here')
}

const ongetGamesSuccess = () => {
  console.log('games played', store.games)
  onSuccess('Total games played: ' + store.games.length)
}

const ongetGamesFailure = () => {
  onFailure('no luck cheif, try again')
}
const onNewGameFailure = () => {
  onFailure('NO games for you! try again')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  // onSignInFailure,
  onchangePasswordSuccess,
  onchangePasswordFailure,
  onsignOutSuccess,
  onsignOutFailure,
  onNewGameSuccess,
  onNewGameFailure,
  ongetGamesSuccess,
  ongetGamesFailure
}
