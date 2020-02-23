const express   = require('express');
const router    = express.Router();
const {getAllUsers,login,register}  = require('./controller');

router.get('/',getAllUsers);
router.post('/',register);
router.post('/login',login);



module.exports = router;