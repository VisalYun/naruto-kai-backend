const express = require("express");
const app = express();
const fs = require("fs");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

require('./database')()
require('./route/index')(app)
app.use(express.static('public'))

app.listen(3000, function () {
    console.log("Listening on port 3000!");
});