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
var express = require('express');
var app = express();

// Setup status page
var expressStatus = require('express-status');
expressStatus.set(app);

// alternatively, you can modify response function for status endpoint
expressStatus.set(app, function (req, res) {
  res.send("not great, but fine");
});

````

'/status' page will be available


## Improvements

Things we can do here:

 * Define a common schema
 * Add dependent services to response
 * Add other diagnose messages


 