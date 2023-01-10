const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            value: DataTypes.NUMBER,
            quantity: DataTypes.NUMBER,
            image: DataTypes.STRING
        }, {
            sequelize
        })
    }
    
}

module.exports = Product;