module.exports = function expressStatus (options) {
  options = options || {}
  options.path = options.path || '/status'
  return function statusEndpoint (req, res, next) {
    if (req.path === options.path) {
      res.send('OK')
    }
    next()
  }
}
