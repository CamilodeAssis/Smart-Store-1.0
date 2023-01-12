const { and } = require("sequelize");
const Product = require("../models/Product");

module.exports = {
  async store(req, res) {
    const { name, description, value } = req.body;

    const floatValue = parseFloat(value);

    if (req.body) {
      await Product.findOne({ where: { name } }).then(async (produto) => {
        if (req.file) {
          if (produto === null) {
            await Product.create({
              name,
              description,
              value: floatValue,
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
    await Product.findAll().then((products) => {
      return res.json({
        erro: false,
        products,
        url: "http://localhost:3333/files/products/",
      });
    });
  },
};
