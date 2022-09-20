"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class salesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      salesProducts.belongsTo(models.products, {
        foreignKey: "product_id",
        as: "products",
      });

      salesProducts.belongsTo(models.sales, {
        foreignKey: "sale_id",
        as: "sales",
      });
    }
  }
  salesProducts.init(
    {
      sale_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "salesProducts",
      timestamps: false,
    }
  );
  return salesProducts;
};