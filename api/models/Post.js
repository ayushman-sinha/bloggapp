const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: false
    }


    
},{timestamp: true});

module.exports= mongoose.model('Post', PostSchema);