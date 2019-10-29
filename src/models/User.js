const { Sequelize , Model } = require('sequelize');
const bcrypt = require('bcryptjs')

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
          type: Sequelize.VIRTUAL,
          allowNull: false
        },
      password_hash:{
          type: Sequelize.STRING,
        }
    }, 
    { sequelize }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

module.exports = User;