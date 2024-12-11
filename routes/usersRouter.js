const express=require('express');
const router=express.Router();
const {registerUser, loginuser}=require("../controllers/authContoller");


router.get("/", function(req,res){
    res.send("hey it's working");
});


router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logout);



module.exports=router;