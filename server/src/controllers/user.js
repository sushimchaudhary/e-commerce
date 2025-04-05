const User = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const getUser = async(req, res) => {
    const data = await User.find()
    res.json(data)
  }

    // control registration form
  const registerNewUser = async (req, res) => {
    const user = await User.findOne({email: req.body.email})   // check email if exists
    if(user) return res.status(409).json({msg: "Email already exists"}) //if user exists return error
    
    // hash req.body.password before saving to db
    req.body.password = await bcrypt.hash(req.body.password, 10) 
   User.create(req.body)
   res.json({msg: 'user created !'})
  }
  //control login form
  const loginUser = async(req, res)=>{
    const user = await User.findOne({email: req.body.email}) // check if email exists
    if(!user) return res.status(404).json({msg: "Email not found"})
      const isMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isMatch) return res.status(400).json ({msg: "Invalid password"})

       //  jwt decode code......
      const token = await jwt.sign({
        data: req.body.email
      },process.env.SECRET_KEY, {expiresIn: '1h'});
      console.log(token)
      res.json({
      data: user,
      token,
      isLoggedIn: true,
      msg: "Logged in succesful"
    })
  }

  
  module.exports = {getUser , registerNewUser, loginUser}