const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/blog");

const Post=mongoose.model("Post",{

title:String,

content:String

});

app.get("/posts",async(req,res)=>{

res.json(await Post.find());

});

app.post("/posts",async(req,res)=>{

await Post.create(req.body);

res.json({message:"Added"});

});

app.listen(5000,()=>{

console.log("Server Running");

});
