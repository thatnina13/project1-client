'use strict'

const config = require('../config')
const store = require('../store')

const SignUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const SignIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const ChangePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}
const SignOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
const NewGame = formData => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
//
const UpdateMove = (id, player) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      game: {
        cell: {
          index: id,
          value: player
        },
        over: false
      }
    }
  })
}

const GamesHistory = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  SignUp,
  SignIn,
  ChangePassword,
  SignOut,
  NewGame,
  GamesHistory,
  UpdateMove
}
