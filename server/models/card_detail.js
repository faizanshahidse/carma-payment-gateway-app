'use strict';
import { Model } from 'sequelize';
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
      cardNo: { allowNull: false, unique: true, type: DataTypes.INTEGER },
      cvv: { allowNull: false, type: DataTypes.INTEGER(3) },
      cardHolderName: { allowNull: false, type: DataTypes.STRING },
      expiryDate: { allowNull: false, type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: 'card_detail',
    },
  );
  return card_detail;
};
