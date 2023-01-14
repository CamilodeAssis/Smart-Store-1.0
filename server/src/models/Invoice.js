const { Model, DataTypes } = require('sequelize');

class Invoice extends Model {
    static init(sequelize){
        super.init({
            invoice_number: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            date: DataTypes.DATE,
            name: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            value: DataTypes.INTEGER,
            username: DataTypes.STRING,

        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
    }
    
}

module.exports = Invoice;