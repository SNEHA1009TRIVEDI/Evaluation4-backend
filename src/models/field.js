"use strict";
const { Model } = require("sequelize");
const content = require("./content");
module.exports = (sequelize, DataTypes) => {
  class Field extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsToMany(models.Content, {
      //   foreignKey: "content_type_id",
      // });
    }
  }
  Field.init(
    {
      content_type_id: DataTypes.INTEGER,
      field_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Field",
    }
  );
  return Field;
};
