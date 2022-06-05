'use strict';
import { Model } from 'sequelize';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class card_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  card_detail.init(
    {
      cardNo: { allowNull: false, unique: true, type: DataTypes.STRING(16) },
      cvv: { allowNull: false, type: DataTypes.STRING(3) },
      cardHolderName: { allowNull: false, type: DataTypes.STRING },
      expiryDate: { allowNull: false, type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: 'card_detail',
    },
  );

  card_detail.beforeCreate(async (card) => {
    card.cardNo = await bcrypt.hash(card.cardNo, 12);
    card.cvv = await bcrypt.hash(card.cvv, 12);
  });

  return card_detail;
};
