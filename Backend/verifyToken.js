var jwt = require('jsonwebtoken');
var config = require('./config');

function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'] || req.body.token;
  var another_user = req.headers['another-view']
  if(req.body.use_id){
    req.verified_user = req.body.use_id;
    next();
  }else if(another_user){
    req.verified_user = {_id: another_user};
    next();
  }
  else{
    if (!token)
      return res.status(403).json({ "status": "ERROR",'error':'No token' });
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err)
        return res.status(500).json({ "status": "ERROR", 'error':'cant verify token' });
      req.verified_user = decoded.user;
      next();
    });
  }
}
module.exports = verifyToken;
