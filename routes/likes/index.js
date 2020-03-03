const express   = require('express');
const router    = express.Router();
const {getAll,getById,editData,deleteData,postData}  = require('./controller');

router.get('/',getAll);
router.get('/:id',getById);
router.put('/:id',editData);
router.post('/',postData);
router.put('/delete',deleteData);



module.exports = router;