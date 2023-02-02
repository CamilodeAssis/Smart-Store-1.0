const Sequelize = require("sequelize");

const Product = require("../models/Product");

const Op = Sequelize.Op;

module.exports = {
  async getProducts(req, res) {
    const products = await Product.findAll({
      where: {
        quantity: {
          [Op.gt]: 0,
        },
      },
    });

    return res.json(products);
  },

  async store(req, res) {
    const { name, description, value, department, sale_value } = req.body;

    const convertValue = parseInt(value);

    if (req.body) {
      await Product.findOne({ where: { name } }).then(async (produto) => {
        if (req.file) {
          if (produto === null) {
            await Product.create({
              name,
              description,
              department,
              sale_value,
              quantity: 0,
              value: convertValue,
              image: req.file.filename,
            });

            return res.json({
              error: false,
              message: "Produto cadastrado com sucesso",
            });
          } else {
            return res.json({
              error: true,
              message: "Produto ja cadastrado",
            });
          }
        } else {
          return res.status(400).json({
            error: true,
            message: "São permitidas apenas imagens JPG, JPEG ou PNG",
          });
        }
      });
    }
  },
  async index(req, res) {
    const query = req.query.name;

    await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${query}%`,
        },
      },
    }).then((products) => {
      return res.json({
        erro: false,
        products,
        url: "http://localhost:3333/files/products/",
      });
    });
  },
  async getProductByDepartment(req, res) {
    const query = req.query.name;

    await Product.findAll({
      where: {
        department: {
          [Op.like]: `%${query}%`,
        },
      },
    }).then((products) => {
      return res.json({
        erro: false,
        products,
        url: "http://localhost:3333/files/products/",
      });
    });
  },
};
