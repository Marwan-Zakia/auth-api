'use strict';

const foodModel = (sequelize, DataTypes) => sequelize.define('Food', {
  name: { type: DataTypes.STRING, required: true },
  calories: { type: DataTypes.INTEGER, required: true },
  type: { type: DataTypes.ENUM('fruit', 'vegetable', 'protein'), required: true }
});
//Integer
module.exports = foodModel;
