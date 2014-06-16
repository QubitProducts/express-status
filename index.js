var set = function (expressApp, responder) {
  expressApp.get("/status", function (req, res) {
    if (responder) {
      responder(req, res);
    } else {
      res.end("service is alive");  
    }
  });  
}

module.exports = {
  set: set
}