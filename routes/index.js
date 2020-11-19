const express = require('express');
const router = express.Router();
 
const userViewControl = require('./userViewController');

router.post('/createUserView', userViewControl.createUserView);
router.get('/getUserViewCount/:filter', userViewControl.getUserViewCount)

module.exports = router