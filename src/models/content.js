"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.Field, {
      //   foreignKey: "content_type_id",
      // });
      // this.hasMany(models.Collection, {
      //   foreignKey: "collection_type_id",
      // });
    }
  }
  Content.init(
    {
      content_type_name: DataTypes.STRING,
      content_type_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Content",
    }
  );
  return Content;
};
