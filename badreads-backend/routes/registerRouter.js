const express = require('express');
const router = express.Router();
const userModel = require('../models/user.js')


router.post('/',async function(req, resp) {
    try{
        if(req.body.confirmPassword != req.body.password){
            return resp.status(401).json({
                error: true,
                message: "passwords is not the same!"
            });
        }else{   
            var user = await userModel.create(req.body);
            const userObj = utils.getCleanUser(user);
            return resp.status(200).json(userObj);
        }
    }catch(err){
        return resp.status(401).json({
            error: true,
            message: err
        });
    }
  });

module.exports = router
