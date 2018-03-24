'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  BASE_URL: '"http://localhost:5001"',
  NODE_ENV: '"development"'
})
