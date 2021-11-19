const db = require('./db')
const User = require('./models/User')
const Post = require('./models/Post')
const Draft = require('./models/Draft')
const Comment = require('./models/Comment')

//associations
User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

User.hasMany(Draft);
Draft.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = {
  db,
  models: {
    User,
    Post,
    Draft,
    Comment
  },
}
