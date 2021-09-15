const Sequelize = require('sequelize')
const { Model } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        location: Sequelize.STRING,
        avatar: Sequelize.STRING,
        username: Sequelize.STRING,
        bio: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // static associate(models) {
  //   this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  // }

}

module.exports = User;