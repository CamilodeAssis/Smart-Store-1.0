const Invoice = require("../models/Invoice");
const User = require("../models/User");
const Product = require("../models/Product");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "invoices" },
    });
    return res.json(user);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { invoice_number, cnpj, date, name, quantity, value, username } =
      req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    const convertValue = parseInt(value);

    await Product.findOne({
      where: {
        name,
      },
    }).then ( async (product) => {    
        if (product){
          await Invoice.create({
            invoice_number,
            cnpj,
            date,
            name,
            quantity,
            value: convertValue,
            username,
            user_id,
          });

          product.quantity += quantity;
          product.amount_value +=  product.quantity * product.value;
          await product.save();
          
          return res.json({
            error: false,
            message: "Nota cadastrada com sucesso",
          });
        }else{ 
          return res.json({
            error: true,
            message: "Ocorreu um erro tentar cadastrar a nota no produto selecionado",
          });
        }
    } );

  },
};
