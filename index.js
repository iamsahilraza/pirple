

var moshik = require('./lib/mosh');
var moshHttp = require('./lib/http');

var app = {};

app.start = function () {
    moshik.sayhello('hello to yo');
}

app.start();