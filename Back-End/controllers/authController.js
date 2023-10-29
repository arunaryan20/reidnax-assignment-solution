const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt=require("jsonwebtoken");
const registerController = async (req, res) => {
  try {
    var { name, email,phone, password } = req.body
    if(!name || !email || !phone || !password){
      res
      .status(400)
      .json({ success: false, message: 'All the fields are required' })
    }
    const emailExist = await userModel.findOne({ email: email })
    if (emailExist) {
      res
        .status(200)
        .json({ success: true, message: 'This email is already exist' })
    } else {
      try {
      
        bcrypt.genSalt(10, async function (err, salt) {
          bcrypt.hash(password, salt, async function (err, hash) {
            if (err) {
              res.status(401).json('Password error')
            } else {
              password = hash
             const user = await userModel.create({
                name,
                email,
                phone,
                password
              })
              res.status(201).json({
                success: true,
                message: 'User created successfully',
                userData:user
              })
            }
          })
        })
      } catch (error) {
        console.log('error------>', error)
      }
    }
  } catch (error) {
    // next(error)
    res.status(400).json({
      message: 'register controller not working',
      error: error
    })
  }
}

const loginController=async(req,res)=>{
      try{
        console.log(req.body.email+" ",req.body.password)
            const data=await userModel.findOne({email:req.body.email});
            if(data){
                const isMatch=await bcrypt.compare(req.body.password,data.password);
              if(isMatch){
                jwt.sign({data},"secretkey",{expiresIn:'1d'}, function(err, token) {
                     if(err){
                      res.status(200).json({success:true,message:"login token generating error",error:err})
                     }else{
                      res.status(200).json({success:true,message:"login successfull",token:token,data:data})
                     }
                });
              }else{
                res.status(200).json({success:true,message:"passoword is not matching"})
              }
            }else{
              res.status(200).json({success:true,message:"User does not exit"})
            }       
                
      }catch(err){
        res.status(404).json({
          success:false,
          message:"Login Controller error",
        })
      }
}

module.exports = {registerController,loginController}
