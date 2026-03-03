const User =require('../models/User.model')

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

module.exports={registerUser}