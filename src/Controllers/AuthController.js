const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../Config/auth');

class AuthController {
    async index(req, res) {

     const { email, password } = req.body;

      const userExist = await User.findOne({ email });

      if(!userExist) {
          return res.status(400).json({
              error: true,
              message: "Usuario não existe!"
          })
      }
if(!( await bcrypt.compare(password, userExist.password))) {
    return res.status(400).json({
        error: true,
        message: "senha incorreta!"
    })
}

return res.status(200).json({
        user: {
            id: userExist.id,
            name: userExist.name,
            email: userExist.email
        },
        token: jwt.sign(
           {id: userExist.id}, 
           config.secret,
            {expiresIn: config.expireIn}
             )
})
    }

  
}

module.exports = new AuthController();