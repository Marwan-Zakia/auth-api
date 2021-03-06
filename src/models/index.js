'use strict';
const userModel = require('./users');
const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('./data-collection');
const clothesModel = require('./clothes/model');
const foodModel = require('./food/model');



let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};


const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const sequelize = new Sequelize(DATABASE_URL,sequelizeOptions);




const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);





module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
  users: userModel(sequelize, DataTypes)
};


// const DATABASE_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

// const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
//   dialectOptions: {
//     ssl: true,
//     rejectUnauthorized: false,
//   }
// } : {}

// const sequelize = new Sequelize(DATABASE_URI, DATABASE_CONFIG);






