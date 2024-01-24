const Router=require("express");
const app=Router();
const User=require("../models/auth");
const game=require("../models/game");
app.post("/api/wishlist_remove",(req,res)=>{
    
    User.updateOne({_id:(req.body.user_id)},{$pull:{wishlist:req.body.id}}).then((result)=>{res.json({"status":result.acknowledged})})
  })
module.exports=app;