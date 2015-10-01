Express Status
==============
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Installs a `/status` endpoint that will always respond with status code `200` if the server is up.

Instalation
-----------

```bash
$ npm install express-status
```

Example
-------

```js
var express = require('express')
var expressStatus = require('express-status')

var app = express()
app.use(expressStatus())
app.listen(1234)
```

```bash
$ curl -s -D - http://localhost:1234/status

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 2
ETag: W/"2-4KoCHiHd29bYzs7HHpz1ZA"
Date: Thu, 01 Oct 2015 13:36:43 GMT
Connection: keep-alive

OK
```

Running tests
-------------

```bash
$ make test
```