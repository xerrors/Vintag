'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https://easy-mock.com/mock/5c482095e2637d455e6c9071/example"'
  BASE_API: '"https://easy-mock.com/mock/5c651c972878863bc969ac45/vintag"'
  // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"'
  // BASE_API: '"https://vintag-a5287.firebaseio.com/"',
})
