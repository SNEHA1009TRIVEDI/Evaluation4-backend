'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class entities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Collection, {
        foreignKey: 'collection_id',
      });
    }
  }
  entities.init({
    field_id: DataTypes.INTEGER,
    field_value: DataTypes.STRING,
    collection_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'entities',
  });
  return entities;
};