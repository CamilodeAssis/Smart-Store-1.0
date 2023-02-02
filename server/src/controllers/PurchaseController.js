const Invoice = require("../models/Invoice");
const User = require("../models/User");
const Product = require("../models/Product");
const Purchase = require("../models/Purchase");


module.exports = {

  async index(req, res) {
    const sales = await Purchase.findAll();
    return res.json(sales);
    
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { date, product_name, quantity, sale_value, username } =
      req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }


    await Product.findOne({
      where: {
        name: product_name,
      },
    }).then ( async (product) => {    
        if (product){
          await Purchase.create({
            date,
            product_name,
            quantity,
            sale_value,
            username,
            user_id,
          });
          if (product.quantity > 0){
            product.quantity -= quantity;
            product.amount_value =  product.quantity * product.sale_value;
            await product.save();
          }
          
          
          return res.json({
            error: false,
            message: "Compra realizada com sucesso",
          });
        }else{ 
          return res.json({
            error: true,
            message: `Ocorreu um erro ao comprar ${product.name}`,
          });
        }
    } );

  },
};
