const Sequelize = require('sequelize')
const {Model} = require('sequelize')

class Token extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

}

module.exports = Token;