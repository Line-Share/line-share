const Sequelize = require('sequelize');
const db = require('../db');

const Draft = db.define('draft', {
  imageUrl: {
    type: Sequelize.STRING,
  }
})

module.exports = Draft;
