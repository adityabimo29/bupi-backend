const express   = require('express');
const router    = express.Router();
const {getAllUsers,login}  = require('./controller');

router.get('/',getAllUsers);
router.get('/login',login);



module.exports = router;