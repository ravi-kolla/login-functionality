const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const auth = require('../middleware/auth');

router.route('/').get((req,res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/signup').post(async (req,res) => {
  try{
    const {name,email,password,passwordRepeat} = req.body;
    //validation
    if(!name || !email || !password || !passwordRepeat)
      return res.status(400).json({msg:'Please enter all fields'});
    if(password<8)
      return res.status(400).json({msg:'Password needs to be min 8 characters'});
    if(password !== passwordRepeat)
      return res.status(400).json({msg:"Entered passwords doesn't match"});

    const existingUser = await User.findOne({email:email})
    if(existingUser)
      return res.status(400).json({msg:"Entered email is already in use"});

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password,salt);

    const newUser = new User({
      name,
      email,
      password:passwordHash,
    });

    await newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: '+err));

  } catch (err) {
    res.status(500).json('Error: '+err);
  }

});

router.route('/login').post(async (req,res) => {
  try{
    const {email,password} = req.body;
    //validation
    if(!email || !password)
      return res.status(400).json({msg:'Please enter all fields'});

    const user = await User.findOne({email:email});
    if(!user)
      return res.status(400).json({msg:'No account is associated with the entered email'});

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch)
      return res.status(400).json({msg:'Password is incorrect'})

    const token = jwt.sign({id:user._id}, process.env.JWT_PWD);
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
      },
    });
  } catch (err) {
    res.status(500).json({error : err.message});
  }

});

module.exports = router;
