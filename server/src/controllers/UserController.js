const User = require("../models/User");


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports = {
    
    async listar(req, res) {
        return res.json({
            erro: false,
            message: 'login successful',
            logged_in_user_id: req.userId
        })
      },
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  async store(req, res) {
    const { name, username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 8);

    const user = await User.create({
      name: name,
      username: username,
      email: email,
      password: hash,
    });

    return res.json(user);
  },
  async login(req, res) {
    const { email, password } = req.body;

    User.findOne({ where: { email } }).then(async (user) => {
    
      if (user != null) {
        var correct = await bcrypt.compare(password, user.password);

        if (correct) {
            let payload ={id: user.id};
            let token = jwt.sign(payload, 'secretKey', {
            expiresIn: '1d', // expires in 7 days
          });
          res.status(200).json({
            error: false,
            message: "successful",
            token: token,
          });
        } else {
          res.status(401).json({
            error: true,
            message: "failed to login",
          });
        }
      } else {
        return res.status(400).json({
          erro: true,
          mensagem: "Invalid email address",
        });
      }
    });
  },

};
