const express = require('express');
const router = express.Router();
const utils = require('../helpers/util.js');
const userModel = require('../models/user.js')


router.post('/',async function(req, resp) {
    try{
        if(req.body.confirmPassword != req.body.password){
            return resp.status(401).json({
                error: true,
                message: "passwords are not the same!"
            });
        }else{   
            var user = await userModel.create(req.body);
            const userObj = utils.getCleanUser(user);
            return resp.status(200).json({user: userObj, token: utils.generateToken(user) });
        }
    }catch(err){
        console.log(err);
        return resp.status(401).json({
            error: true,
            message: err._message
        });
    }
  });

module.exports = router
