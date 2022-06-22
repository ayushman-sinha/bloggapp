const router=require("express").Router();
const User=require('../models/User');


//UPDATE USER
router.put("/:id", async (req,res)=>{
    console.log(req.body);
    try{
       
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err);
    }
});

//DELETE USER

module.exports= router