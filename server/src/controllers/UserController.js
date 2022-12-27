const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async listar(req, res) {
    return res.json({
      erro: false,
      message: "login successful",
      logged_in_user_id: req.userId,
    });
  },

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async store(req, res) {
    const { name, username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 8);

    await User.findOne({ where: { email } }).then(async (user) => {
      if (user === null) {
        const user = await User.create({
          name: name,
          username: username,
          email: email,
          password: hash,
        });

        return res.json(user);
      } else {
        return res.json({
          error: true,
          message: "User already registered",
        });
      }
    });
  },

  async login(req, res) {
    const { email, password } = req.body;

    await User.findOne({
      attributes: ["id", "name", "username", "email", "password"],
      where: {
        email: email,
      },
    }).then(async (user) => {
      if (user != null) {
        let correct = await bcrypt.compare(password, user.password);

        if (correct) {
          let payload = { id: user.id };
          let token = jwt.sign(payload, "secretKey", {
            expiresIn: "60", 
          });
          res.status(200).json({
            error: false,
            message: "successful",
            logged_in_user_id: user.id,
            token: token,
            
          });
        } else {
          res.json({
            error: "Email or password incorrect",
          });
          return;
        }
      } else {
        res.json({
          error: "Email or password incorrect",
        });
        return;
      }
    });
  },
};
