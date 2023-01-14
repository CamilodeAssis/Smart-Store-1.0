const Invoice = require("../models/Invoice");
const User = require("../models/User");
const Product = require("../models/product");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "invoices" },
    });
    return res.json(user);
  },

  async store(req, res) {
    console.log('aquiiiiiiiiiii', req.body)
    const { user_id } = req.params;
    const { invoice_number, cnpj, date, name, quantity, value, username } =
      req.body;
      
      
    const user = await User.findByPk(user_id);

    

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }
  const convertValue = parseInt(value)
    
    const invoice = await Invoice.create({
      invoice_number,
      cnpj,
      date,
      name,
      quantity,
      value: convertValue,
      username,
      user_id,
      
    });

    return res.json(invoice);
  },
};
