const User =require('../models/User.model')
const dotenv = require('dotenv')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const registerUser =async (req,res)=>{
    try 
    {const {username,email,password}=req.body;

    if(!username || !email || !password ){
        return res.status(400).json({message:"ALL FIELD ARE REQUIRED"})
    }

       //check if user already acces

    const existinguser=await User.findOne({$or:[{email},{username}]})
    if(existinguser){
        return res.status(400).json({message:"User IS Alerady Exist"})
    }   
       //create new user

    const newUser = await User.create({username,email,password});   
       // Sucess msg
       res.status(201).json({message:"User created successfully "})




        
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"server error"})
        
    }
    //
}
//Login User

const loginuser = async (req,res)=>{
    try {
        const {email,password}=req.body
         // 1️⃣ Check required fields
         if(!email ||!password ){
            res.status(400).json({message:"ENTER THE EMAIL OR PASSWORD"})
         }



 // 2️⃣ Find user by email
const user = await User.findOne({email})
if(!user){
   return  res.status(400).json({message:"NO ACCOUNT EXIST"})

}


 // 3️⃣ Compare password

 const isMatch = await user.comparePassword(password)
 if(!isMatch){
   return res.status(400).json({message:"INVALID PASSWORD"})
 }
// 4️⃣ Generate JWT
const token = jwt.sign({ id: user._id }, process.env.JWTS, { expiresIn: "7d" });
// 5️⃣ Send success response
res.status(200).json({message:"SUCESS LOGIN ",token})

        
    } catch (error) 
    {
        console.error(error)
        res.status(500).json({message:"Server Error"})
        
    }
}


module.exports={registerUser,loginuser}