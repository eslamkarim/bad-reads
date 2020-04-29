require('dotenv').config();

const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

const loginRouter = require("./routes/loginRouter");
const registerRouter = require("./routes/registerRouter");


var app = express();
mongoose.connect('mongodb://localhost:27017/badReads',{auth: {"authSource": "admin"}, user: "admin", pass: "123456", useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers['authorization'];
    if (!token) return next(); //if no token, continue
   
    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) {
        return res.status(401).json({
          error: true,
          message: "Invalid user."
        });
      } else {
        req.user = user; //set the user to req so other routes can use it
        next();
      }
    });
  });


  
app.use('/login',loginRouter);
app.use('/register',registerRouter);



app.listen(4000, function () {
    console.log('listening on port 4000!');
});
