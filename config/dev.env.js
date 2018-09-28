'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
// 开发环境
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://easy-mock.com/mock/5baadb85cff4974b9da47079/mdmp"',
})
