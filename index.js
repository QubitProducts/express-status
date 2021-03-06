function expressStatus(app, handler) {
  app.get('/status', handler || defaultHandler);
}

function defaultHandler(req, res) {
  res.end("service is alive");
}

//support old API 
expressStatus.set = expressStatus;
expressStatus.handler = defaultHandler;

module.exports = expressStatus;