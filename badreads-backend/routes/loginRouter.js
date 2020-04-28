const express = require('express');
const router = express.Router();

router.get('/', function(req, resp){
    return resp.status(200).send("login route works");
})

module.exports = router