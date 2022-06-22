const router=require("express").Router();
const User=require('../models/User');
const bcrypt = require('bcrypt');

//Register
router.post("/register", async (req,res)=>{
    console.log(req.body);
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser=new User(
            {
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            }
        );
       
        const user=await newUser.save();
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err);
    }
});
//Login
router.post("/login", async (req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
            res.status(404).json({message:"User not found"});
        }
        const isMatch=await bcrypt.compare(req.body.password, user.password);
        if(!isMatch){
            res.status(400).json({message:"Invalid password"});
        }
        const {password, ...userWithoutPassword}=user._doc;//Response excluding the password
        res.status(200).json(userWithoutPassword);
    }
    catch(err){
        res.status(500).json(err);
    }
     
    


});


module.exports= router