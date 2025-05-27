var express = require('express');
 
var app = express();//Respond with "hello world hi from abhay" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send(' <!DOCTYPE html>
    <html>
      <head>
        <title>Hello Page</title>
      </head>
      <body>
        <h1>Hello World</h1>
        <p>Hi from Abhay</p>
      </body>
    </html>
');
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;

