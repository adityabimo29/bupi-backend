const express   = require('express');
const router    = express.Router();
const {getAllUsers,login,register,getByEmail,editUser ,getByExp , getByGenre ,getByRole ,sendEmail}  = require('./controller');

router.get('/',getAllUsers);
router.get('/:email',getByEmail);
router.put('/:id',editUser);
router.post('/register',register);
router.post('/login',login);
router.post('/recruit',sendEmail);
router.get('/roles/:id',getByRole);
router.get('/genres/:id',getByGenre);
router.get('/experience/:value',getByExp);


module.exports = router;