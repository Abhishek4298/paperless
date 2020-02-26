require('@babel/register');
const express = require('express')
const app = require('./app.js');
const path = require("path");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.listen(process.env.APP_PORT || process.env.PORT || 3000, () => {
  console.log('Process is listening to all incoming requests on post 3000');
});
