const Sequelize = require('sequelize');
const db = require('../db');

const Post = db.define('post', {
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "https://bit.ly/2VqAWZp"
  },
  caption: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Post;
