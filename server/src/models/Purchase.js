const { Model, DataTypes } = require("sequelize");

class Purchase extends Model {
  static init(sequelize) {
    super.init({
        date: DataTypes.DATE,
        product_name: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        sale_value: DataTypes.INTEGER,
        username: DataTypes.STRING,
        sale_value: DataTypes.INTEGER 
    }, { sequelize });
  }
  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
}
}


module.exports = Purchase;
