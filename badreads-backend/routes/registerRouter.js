const express = require('express');
const router = express.Router();
const utils = require('../helpers/util.js');
var multer = require('multer')
const userModel = require('../models/user.js')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/users/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage ,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return resp.status(401).json({
                error: true,
                message: "image must be .png .jpg or .jpeg!"
            });
        }
    }
});
router.post('/', upload.single('file'), async function(req, resp) {
    try{
        if(req.body.confirmPassword != req.body.password){
            return resp.status(401).json({
                error: true,
                message: "passwords are not the same!"
            });
        }else{
            const url = req.protocol + '://' + req.get('host')
            var user = await userModel.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                img: url+"/users/" + req.file.originalname,
            });            
            const userObj = utils.getCleanUser(user);
            return resp.status(200).json({user: userObj, token: utils.generateToken(user) });
        }
    }catch(err){
        return resp.status(401).json({
            error: true,
            message: err._message
        });
    }
  });

module.exports = router
