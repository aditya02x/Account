const express = require('express');
const router = express.Router();
const {registerUser,loginuser}=require('../controllers/User,controller')
const authMiddleware = require('../middleware/auth.middleware');


//Signup route
router.post('/register',registerUser)

//Login
router.post('/login',loginuser)

//Protected Route Example
router.get('/home',authMiddleware,(req,res)=>{
    res.status(200).json({ message: `Welcome ${req.user.username}!` })
})

module.exports=router