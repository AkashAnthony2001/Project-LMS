const express = require('express');
const router = express.Router();

const usercontroller = require('../controller/userController.js')

router.get('/' , usercontroller.index)
router.get('/show' , usercontroller.show)
router.get('/isExist' , usercontroller.isExist)
router.post('/store' , usercontroller.store)
router.post('/update' , usercontroller.update)
router.post('/delete' ,usercontroller.destroy)



module.exports = router; 