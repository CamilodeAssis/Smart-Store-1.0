const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            value: DataTypes.NUMBER,
            sale_value: DataTypes.NUMBER,
            department: DataTypes.STRING,
            amount_value: DataTypes.NUMBER,
            image: DataTypes.STRING
        }, {
            sequelize
        })
    }
    
}

module.exports = Product;