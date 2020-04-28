const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const utils = require('../helpers/util.js');
const userModel = require('../models/user.js')

router.get('/', function(req, resp){
    return resp.status(200).send("login admin route works");
});

router.get('/verifyToken', function (req, res) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token;
    if (!token) {
      return res.status(400).json({
        error: true,
        message: "Token is required."
      });
    }
    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) return res.status(401).json({
        error: true,
        message: "Invalid token."
      });
      
      // get basic user details
      var userObj = utils.getCleanUser(user);
      return res.json({ user: userObj, token });
    });
  });

router.post('/', async function(req,resp){
    const email = req.body.email;
    const pwd = req.body.password;
    
    // return 400 status if username/password is not exist
    if (!email || !pwd) {
      return res.status(400).json({
        error: true,
        message: "Username or Password required."
      });
    }
    try{
        userData = await userModel.findOne({ email: email }).exec();

        userData.comparePassword(pwd, (error, match) => {
            if(!match) {
                return response.status(400).send({ message: "The password is invalid" });
            }
        });
        const token = utils.generateToken(userData);
        // get basic user details
        const userObj = utils.getCleanUser(userData);
        // return the token along with user details
        
        return resp.status(200).json({ user: userObj, token });
    }catch(error){
        console.log(error);
        return resp.status(401).json({
            error: true,
            message: error
        });
    }
});

module.exports = router
