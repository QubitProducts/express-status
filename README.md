express-status
==============

A common npm module to expose a status page with common messages

#### Installation

add the following to package.json

````
{
  "express-status": "git+ssh://git@bitbucket.org/QuBitProducts/express-status.git"
}
````

#### Setup in your app

````
// normal express stuff
var app = require("express")();

// Setup status page
require("express-status")(app);

//or if you want a custom handler
require("express-status")(app, status);

function status(req, res) {
  res.send({
    lastCalled: 1
  })
}

//or if you want to use the old api

var expressStatus = require('express-status');
expressStatus.set(app);
````

"/status" page will be available


## Improvements

Things we can do here:

 * Define a common schema
 * Add dependent services to response
 * Add other diagnose messages


 
