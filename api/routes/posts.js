const router=require("express").Router();
const Post=require('../models/Post');
const bcrypt=require('bcrypt');


//Create new post
router.post('/',async (req,res)=>{
    const newPost=new Post(req.body);
    try{
        const savedPost=await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err){
        res.status(500).json({message:err});
    }
});

//Update post
router.put("/:id", async (req,res)=>{    
    try{
        const post=await Post.findById(req.params.id);
        
    }
    catch(err){
        res.status(500).json({message:err});
    }
})
//Delete Post
router.get("/:id", async (req,res)=>{
    try{
        const user=await User.findOne({_id:req.params.id});
        console.log(user);
        const {password,...others}= user._doc;
        res.status(200).json(others);
    }
    catch(err){
        res.status(401).json(err);
    }
});

//get Post

module.exports= router