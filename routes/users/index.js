const express   = require('express');
const router    = express.Router();
const {getAllUsers,login,register,getByEmail,editUser}  = require('./controller');

router.get('/',getAllUsers);
router.get('/:email',getByEmail);
router.put('/:id',editUser);
router.post('/register',register);
router.post('/login',login);



module.exports = router;