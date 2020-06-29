const jwt = require('jsonwebtoken');

const auth = (req,res,next) => {
  try {
    const token = req.header('x-auth-token');
    if(!token)
      return res.status(401).json({msg: "Access denied, please login"});

    const verified = jwt.verify(token, process.env.JWT_PWD);
    if(!verified)
      return res.status(401).json({msg: "Verification failed, please login"});

    req.user = verified.id;
  } catch (err) {
      res.status(500).json('Error: '+err);
  }
}

module.exports = auth;
