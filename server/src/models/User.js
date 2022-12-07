const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses'});
    }
}

module.exports = User;