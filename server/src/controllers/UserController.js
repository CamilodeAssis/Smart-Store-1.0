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
    if (req.file) {
      if (req.body) {
        await User.findOne({ where: { email } }).then(async (user) => {
          if (user === null) {
             await User.create({
              name,
              username,
              email,
              password: hash,
              image: req.file.filename,
            });

            return res.json({
              error: false,
              message: "Usuário cadastrado com sucesso",
            });
          } else {
            return res.json({
              error: true,
              message: "Já existe um usuário cadastrado com esse email",
            });
          }
        });
      }
    } else {
      return res.status(400).json({
        error: true,
        message: "São permitidas apenas imagens JPG, JPEG ou PNG",
      });
    }
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
            logged_in_user_name: user.name,
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
