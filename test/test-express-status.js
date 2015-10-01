/* global describe, before, after, it */
var express = require('express')
var expect = require('chai').expect
var request = require('request-promise')

var expressStatus = require('../express-status')

function createApp () {
  var app = express()
  app.use(expressStatus())

  return new Promise(resolve => {
    var server = app.listen(5932, function () {
      resolve(server)
    })
  })
}

describe('expressStatus', function () {
  var app
  before(function () {
    return createApp().then(function (server) { app = server })
  })
  after(function (done) {
    app.close(done)
  })

  it('should return status 200 from a get to /status', function () {
    return request({
      uri: 'http://localhost:5932/status',
      method: 'GET',
      resolveWithFullResponse: true
    }).then(function (response) {
      expect(response.statusCode).to.equal(200)
    })
  })
})
