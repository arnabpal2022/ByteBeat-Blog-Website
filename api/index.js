const express = require('express');
const cors = require('cors')
const mongoose = require("mongoose");
const User = require ('./models/user')
const Post = require ('./models/post')
var bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({dest: 'uploads/'})
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret="iudhvy34vuwhvh90yg94783587gyygvufjjb9tbiizo"

app.use(cors({credentials:true, origin:'http://localhost:5173'}))
app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://arnabpalcloud:a5LozOrbjXqnx3vO@cluster0.gnmkqxp.mongodb.net/?retryWrites=true&w=majority')

app.post('/signup', async(req,res) => {
    const {username, email, password} = req.body; 
    try{
        const userDoc = await User.create({
            username, 
            email, 
            password:bcrypt.hashSync(password,salt),
        });
        res.json(userDoc);
    } catch (e){
        res.status(400).json(e);
    }
});

app.post('/login', async(req,res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username})
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        //logged in
        jwt.sign({username, id:userDoc._id}, secret, {}, (err,token)=>{
            if (err) throw err;
            res.cookie('token', token).json("ok");
        })
    } else {
        res.status(400).json("Wrong Credentials")
    }
});

app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) =>{
        if (err) throw err;
        res.json(info);
    })
})

app.post('/logout', (req,res) => {
    res.cookie('token', '').json("ok")
})

app.post('/post',uploadMiddleware.single('file'), async (req,res) => {
    
      const {originalname, path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);

      const{title,summary, content} = req.body;
      try{
        const postDoc = await Post.create({
            title,
            summary,
            content,
            cover:newPath
          })
          
          res.json(postDoc)
      } catch {
        res.status(400).json(e);
      }
      
  });

app.get('/post', async (req,res) => {
    const posts = await Post.find();
    console.log("posts")
    res.json({ data: posts})
})

app.get("/post/:id", async(req,res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id);
    res.json(postDoc);
})
app.listen(4000)

//mongodb+srv://arnabpalofficial2003:tnq2UHD2V348DrF@cluster0.ig5rpn5.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://arnabpalofficial2003:tnq2UHD2V348DrF@cluster0.ig5rpn5.mongodb.net/?retryWrites=true&w=majority
//tnq2UHD2V348DrF
//a5LozOrbjXqnx3vO

//mongodb+srv://arnabpalcloud:a5LozOrbjXqnx3vO@cluster0.gnmkqxp.mongodb.net/?retryWrites=true&w=majority