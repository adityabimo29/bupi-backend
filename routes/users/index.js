const express   = require('express');
const router    = express.Router();
const {  otherProfile,listUsers,getAllUsers,login,register,getByEmail,editUser ,getByExp , getByGenre ,getByRole ,sendEmail}  = require('./controller');

router.get('/',getAllUsers);
router.get('/:email',getByEmail);
router.put('/:id',editUser);
router.post('/register',register);
router.post('/login',login);
router.post('/recruit',sendEmail);
router.get('/roles/:id',getByRole);
router.get('/genres/:id',getByGenre);
router.get('/experience/:value',getByExp);
router.post('/listMusicians', listUsers);
router.get('/profile/:id', otherProfile);


module.exports = router;