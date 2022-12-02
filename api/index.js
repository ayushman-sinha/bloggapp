const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const path= require('path');
const multer = require('multer');
dotenv.config();
app.use(express.json());
app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
    })

app.use("/images", express.static(path.join(__dirname, "/images"))); 

mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
}).then(console.log("Connected to MongoDB")).catch(err => console.log(err));


const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'images');
    },
    filename:(req, file, cb)=>{
        cb(null, req.body.name);
    }
});
const upload = multer({storage:storage});

app.post('/api/upload', upload.single('file'), (req, res) => {

    res.status(200).json('Uploaded')
    
})
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoryRoute);

app.listen(3500, () => {
    console.log('Server is running on port 3500');
})