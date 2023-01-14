const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            image: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Invoice, { foreignKey: 'user_id', as: 'invoices'});
    }
  
}

module.exports = User;