const express   = require('express');
const router    = express.Router();
const {getAllUsers}  = require('./controller');

router.get('/',getAllUsers);



module.exports = router;