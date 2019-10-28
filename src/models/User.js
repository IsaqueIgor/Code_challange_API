const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
          type: DataTypes.STRING,
          allowNull: false
        },
      id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },
      email: { 
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
          validate: {
            isEmail: true,
          }
        },
      password: {
          type:DataTypes.STRING,
          allowNull: false
        }
    }, {
      sequelize
    })
  }
}

module.exports = User;