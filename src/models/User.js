const { Sequelize , Model } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
          type: Sequelize.STRING,
          allowNull: false
        },
      id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },
      email: { 
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
          validate: {
            isEmail: true,
          }
        },
      password: {
          type:Sequelize.STRING,
          allowNull: false
        }
    }, {
      sequelize
    })
  }
}

module.exports = User;