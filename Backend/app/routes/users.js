const express       = require('express');
const nodemailer  = require('nodemailer');
const router        = express.Router();
const randomstring  = require("randomstring");
const jwt           = require('jsonwebtoken');
const User          = require('../models/User');
const VerifyToken   = require('../../verifyToken');
const Promise = require("bluebird");
const config        = require('../../config');

router.get('/', function(req, res) {
  res.json({'status': 'OK'});
});


router.post('/adduser', function(req,res,next){
  console.log(req.body)
  const access = randomstring.generate(10);
  
  let new_user = new User({
    fullName:  req.body.fullName,
    phoneNumber:req.body.phoneNumber,
    email:        req.body.email,
    userName: req.body.userName,
    password: req.body.password,
    access:     'ABC123'
  });

  new_user.save(function(err,user) {
    if (err){
      console.log(err)
      return res.json({status:"ERROR",err } );
      
    }else{
      console.log('OK')
      const token = jwt.sign({user}, config.secret, {});
      console.log(token);
      console.log(user._id);
      return res.json({
        status: 'OK',
        token: token,
        id: user._id,
      });
    }
  });


});

router.post("/verify", function(req,res,next){
    User.findOne({ username: req.body.username }, async function(err, user) {
      const maccess = user.access;
      if (err || user == null){
        return res.json({status:"ERROR", error: err });
      }else if(user.enabled){
        return res.json({status:"OK" });
      }else{
        if((req.body.access === maccess)){
          user.enabled = true;
          await user.save();
          const token = jwt.sign({user}, config.secret,{});
          return res.status(200).json({
            status:"OK",
            token: token,
            user_name: user.user_name,
            _id: user._id,
          });
        }else{
          return res.json({status:"ERROR", error: err} );
        }
      }
    });
});


// Params: username and password
router.post("/login",function(req,res,next){
    User.findOne({ username: req.body.username }, function(err, user) {
      if (err || user == null){
        return res.json({status:"ERROR" });
      // }else if(!user.enabled){
      //   return res.json({status:"ERROR" });
      }else{
        user.comparePassword(req.body.password, function(err, isMatch) {
              if (err)  console.log(err);

              if(isMatch){
                const token = jwt.sign({user}, config.secret, {});
                console.log('OK')
                return res.status(200).json({
                  status:"OK",
                  token: token,
                  id: user._id,
                });
              }else{
                console.log(err)
                return res.json({status:"ERROR" });
              }
        });

      }
    });
});

router.post("/profile", VerifyToken, function(req, res, next) {
  console.log(req.verified_user._id)
  User.findOne({ _id: req.verified_user._id }, function (err, user) {
    if (err || !user)
      return res.json({status: "error", error: err});
    res.json({
      status: 'OK',
      user,
    });
  });
});

router.post('/editProfile', VerifyToken, (req, res) =>{
  console.log(req.body)
  User.findByIdAndUpdate(req.verified_user._id, 
    {
      fullName: req.body.userObject.name,
      userName : req.body.userObject.userName,
      email: req.body.userObject.email,
      phoneNumber: req.body.userObject.phone,
      nokName: req.body.userObject.nokname,
      nokEmail:req.body.nokEmail,
      nokPhoneNumber:req.body.userObject.nokPhone,
      nokAddress:req.body.userObject.nokAddress,
    },
    function (err, user) {
      if (err || !user)
        return res.json({status: "error", error: err});
      res.json({
        status: 'OK',
      });
    }
  )
})
router.post('/editPCP', VerifyToken, (req, res) =>{
  console.log(req.body);
  res.json({'status':'OK'})
})
router.post('/editHealthIssue', VerifyToken, (req, res) =>{
  console.log(req.body);
  res.json({'status':'OK'})
})




module.exports = router;
